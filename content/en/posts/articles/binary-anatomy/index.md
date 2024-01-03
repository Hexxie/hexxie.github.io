---
title: Binary anatomy [PWN][REV]
date: 2024-01-03
author: hexxie
description: High level overview of binary
---


The program contains machine code (instructions) and the data (variables and constants). It was decided to organize this in binary files, so all the code and data belonging to particular program. 

## Compilation process

### Preprocessing

```
gcc -E -P compilation_example.c
```

-E - Stop after the preprocessing stage; do not run the compiler proper. The output is in the form of preprocessed source code, which is sent to the standard output.

-P - Inhibit generation of linemarkers in the output from the preprocessor. This might be useful when running the preprocessor on something that is not C code, and will be sent to a program which might be confused by the linemarkers.

[More Preprocessor options](https://gcc.gnu.org/onlinedocs/gcc/Preprocessor-Options.html)

### Compilation

The high level code compiles into the assembly first, not into the direct machine code. It was done like that because it's easier to compile every other language into one assembly, dedicated to the particular processor and only then translate it into the machine code. 

```
gcc -S -masm=intel compilation_example.c
cat compilation_example.s
```


### Assembly

The output on this stage is object file or the module.

```
gcc -c compilation_example.c
file compilation_example.o

ELF 64-bit LSB relocatable, x86-64, version 1 (SYSV), not stripped
```

Relocatable - file can be moved around without breaking any assumptions in the code. It's a label that we're dealing with an object file.

The assembler doesn't know  the memory addresses of the other object files. Object files can be moved in any order to assemble a complete binary exec. Think of it as a brick of the whole binary house. 

Object file can have links to functions on other object files or libraries. The reference is a symbolic link.

### Linking 

Assemble a binary file from the object files. Resolve all symbolic links. Assign particular memory address. 

**Static** libraries (.a) are copied into the binary.  
**Dynamic** libraries (.so) are mot and symbol links are not resolved until the binary would not be loaded into the memory to be executed.   

Symbol links for the dynamic libraries would be resolved by interpreter like 

```
file a.out
... interpreter /lib64/ld-linux-x86-64.so.2 ..
```


## Disassembling Process

### Disassemble and object file

Show read-only data

```
objdump -sj .rodata compilation_example.o
```

Disassemble code in the Intel syntax

```
objdump -M intel -d compilation_example.o
```

As an example we see that we have 

```
  f:  bf 00 00 00 00         mov    edi, 0x0
  14:  e8 00 00 00 00        call   19 <main+0x19>  
```

We have here mov 0 into edi - this should be symbolic link to the rodata, and main+19 - should be puts. Linker will link them appropriately during the assigning memory addresses.

You can check relocating symbols with the next command:

```
readelf --relocs compilation_example.o

Relocation section '.rela.text' at offset 0x210 contains 2 entries:  
      Offset             Info         Type            Sym. Value    Sym. Name + Addend  
➊ 000000000010      00050000000a R_X86_64_32     0000000000000000    .rodata + 0  
➋ 000000000015      000a00000002 R_X86_64_PC32   0000000000000000    puts - 4  
   ...
```

Offset is equal to instruction offset + 1 -> to overwrite the operand, not the opcode.

### Disassemble binary file


```
objdump -M intel -d a.out
```

## Loading and Executing a binary

Here I've just listed a high level steps for my shallow understanding ;)

1. OS: setting a new process and virtual address space
2. OS: maps interpreter (IP) into the process VM
3. Kernel: transfer control to the IP
4. IP: loads the binary into the virtual address space
5. IP: parses the binary to find which dynamic libs to use
6. IP: maps DL into VM and does all relocations (well not all, only necessary)
7. IP: lookups the entry point and transfers control to it
## Questions

Q. How symbolic link in the object file looks like?  
A. Firstly you can check how references to the dynamic libraries are look like
```
strip --strip-all a.out
readelf --syms a.out
```
With stripping all the symbols, only references to dynamic libs left.


Q. Stripped and non stripped binaries?  
A. Not stripped binaries - binaries that has human readable symbols. You can check them with

```
readelf --syms a.out
```

To strip the binary
```
strip --strip-all a.out
```


## What was new to me?

- Relocatable thing - that the object files contains unresolved symbolic links to the read-only data and other functions. How does it looks like  
- How to strip the binary  
- readelf command and it's parameters  
- Binary should be parsed with interpret first
- Interpret is the one who load the dynamic library and the binary 

Reference: [Practical binary analysis](https://learning.oreilly.com/library/view/practical-binary-analysis/9781492071204/xhtml/ch01.xhtml#ch01_6)