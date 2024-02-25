---
title: CW08 Weekly Digest
date: 2024-02-25
author: hexxie
description: List of materials that I've learned this week
---

## xv6

This week I've started to work on Virtual Memory [exercises](https://pdos.csail.mit.edu/6.828/2020/labs/pgtbl.html). 
This should be a piece of obvious information, but it wasn't for me. OS is hardly dependent on the board. 

Actually, the developer of the board should give OS developers information about the physical mapping of certain peripherals. 
If you check the kernel, you'll find an arch folder with different architectures. Each architecture contains its own kernel. 

So... it's not enough to know only the OS internals. You have to know the hardware and know how to read the datasheet. That's why Linux developers can call themselves - embedded. 

Here's the [datasheet](https://www.qemu.org/docs/master/system/target-riscv.html) for the risc-v board, which is emulated by qemu and used in the MIT course. 

### Reverse path

I decided to put this article about [reverse philosophy](https://reversewithme.blogspot.com/2012/10/why-lena151-tutorials-wont-teach-you.html) here because developing knowledge about OS is a part of reverse engineering. 

I will repeat myself (and I want to repeat myself in weekly digests because I don't want to step away from my path):

**xv6 exercises**:  
How operating systems work and how they manage memory (the engine of the car)  

**Arch 1001**:  
x86 assembly (electronics and wires in the car analogy)  
The compiling process from C-code to assembly (this is equivalent to knowing how a car-fabric is assembling a car)  

**Practical binary analysis**:  
The life of a binary (equivalent to everything that happens in the car from the key-switch to the off-switch)

## CTF Braeker

I've participated in this event, but it was a truly disaster. I haven't solved anything. Besides I've found quite familiar binary challenges. I had a Practical binary analysis book on my mind. And I want to finish it with all the exercises. 

Check the [repository](https://github.com/spipm/BraekerCTF_2024_public ). The author was inspired by Practical binary analysis. I was almost there. grrrr

## C Language
My pain. Let it be here

[Bitwise tricks](https://gist.github.com/dideler/2365607)  
[Bithacks](https://graphics.stanford.edu/~seander/bithacks.html)

## Ideas
I've learned some x86 assembler, info about stack, etc, but I still doubt whether I can speak about it during the interview (for example).
So I want to record several videos describing that concepts. 

Here are the previous ideas:
- I have code snippets. I want to walk through them: stack, asm
- xv6 syscall architecture. Walk through + code reproduction for repo with architecture examples (I decided to collect good code snippets which I can reuse. xv6 syscall - is the first one)
- Search for syscalls in Linux (risk-v)
- Discuss virtual memory in xv6
- Binary parser as in Practical Binary Analysis. 