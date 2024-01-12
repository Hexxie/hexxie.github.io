---
title: GDB CheatSheet
date: 2024-01-12
author: hexxie
description: GDB CheatSheet which I've collected during study binary pwn
---

### Compile binary with symbols

```
gcc -ggdb code.c -o code
```

### Compile binary with intel asm

```
gcc -O1 -S -masm=intel code.c
```

I'd like to familiar myself with gdb-pwndbg, so this would be my personal small cheatsheet

1. Load the binary
```
gdb-pwndbg ./a.out

gdb-pwndbg
file a.out
```

2. Run the program

```
r

run par1 par2

run < payload
```

3. Start the program -> will set a breakpoint on the entry point
```
start 

start par1  par2
```


4. Breakpoints

```
//set breakpoints
break main
b fibbonacci

//list breakpoints
info b

//unset breakpoints
clear main
delete 3

// disable breakpoint
disable 1

// enable breakpoint
enable 1

//set breakpoint with an address
b *0x555555555 (address)

//set breakpoint with an offset
b *main+140
```

5. Disassemble 
```
disassemble[/m|/r|/s] START [, END]

/s - with source code
/r - with hex code of the asm commands
/m - deprecated 

if you want to disassemble function bar in file foo.c
you must type "disassemble 'foo.c'::bar"


// display 10 assembpy instrustions
x/10i $rip
```

6. Print values

```
// dword ptr [ebp - 0xc]
x $ebp - 0xc <- will print the value in that location
p $ebp - 0xc <- will print an address


see more GDB Cheat sheet -> Browsing data
```

7. Modify values
```
set *0x555555555 = 1
```

8. Pwndbg
```
// generate payload
cyclic 100

//check the position of pattern
cyclic -l haaa
```

9. generate payload with python
```
python2 -c 'print "A" * 28 + "B" * 4 + C" * 32 '
```