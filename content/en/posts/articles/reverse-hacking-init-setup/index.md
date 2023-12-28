---
title: Reverse Hacking initial setup for Kali
date: 2023-12-08
author: hexxie
description: Reverse Hacking initial setup for Kali based on CryptoCat video
---

Here's a step-by-step guide with links how do I setup my Kali using CryptoCat Binary Exploitation course.

For me it's easier to install tools during the actual analysis process, so I invite you to create a C file first.

### Example

For example you can copy that from the video:

```C
#include <stdio.h>
#include <string.h>

int main(void)
{
    char buffer[16];

    printf("Give me the data: \n");
    gets(buffer);

    return 0;
}
```

To compile it:

```bash
gcc vuln.c -o vuln -fno-stack-protector-all -z execstack -no-pie
```

### Checksec

Now, the first tool, which were introduced is [**checksec**](https://github.com/slimm609/checksec.sh)

Personally, I've installed it with apt

``` bash
sudo apt-get -y install checksec
checksec --file=vuln
```

### gdb-pwndbg

[How to setup 3 different debuggers](https://infosecwriteups.com/pwndbg-gef-peda-one-for-all-and-all-for-one-714d71bf36b8) on top of GDB. I followed this tutorial;

Well actually I've just cloned the [repo](https://github.com/apogiatzis/gdb-peda-pwndbg-gef.git) and run install.sh

And you can find the list of [pwndbg features](https://github.com/pwndbg/pwndbg/blob/dev/FEATURES.md). But I think I need to search video for beginners :)

#### How to use pwndbg?

``` bash
gdb-pwndbg
file vuln
info functions
disassemble main
break main
run
info stack
x $eax
p $eax
next
continue
delete breakpoints

```
### Ghidra

Ghidra has been already installed in Kali, so I need only the script:

Copy paste [ghidra.py](https://gist.github.com/liba2k/d522b4f20632c4581af728b286028f8f) script or download in your favourite way.

### Ropper

```
sudo pip install filebytes
sudo pip install keystone-engine
sudo pip install ropper
```

### Pwwntools

Here's the [manual](https://github.com/Gallopsled/pwntools-tutorial/blob/master/installing.md) how to install them. It has a docs as well there


### Radare2 

I haven't installed it for now. But in case I need it, it's here https://book.rada.re/first_steps/overview.html


Reference [video](https://www.youtube.com/watch?v=wa3sMSdLyHw&list=PLHUKi1UlEgOIc07Rfk2Jgb5fZbxDPec94&index=2&t=424s&ab_channel=CryptoCat)