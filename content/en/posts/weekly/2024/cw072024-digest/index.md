---
title: CW07 Weekly Digest
date: 2024-02-19
author: hexxie
description: List of materials that I've learned this week
---
## Communication

Most of the time this week I dedicated to studying communication skills. I created an article where I collect information about small talk and storytelling. 

[Communication goals](https://hexxie.github.io/posts/articles/communication-goals/)

Also for this purpose, I installed [Monica](https://github.com/monicahq/monica#get-started) - a personal CRM for my contacts, which allows me to organize networking. I tried the test variant with my personal PC. I plan to install it permanently onto a raspberry or Linux server. 

### On persuasion

People like people who respect their opinions.
1. Say that you agree that BOSS is a fine brand and ask him what in particular he likes about it so that you have the best chance of matching his need to something you do have in the shop.

 And if you are going to persuade them to do what _you_ want them to do, you need to find out more about _their_ beliefs and views. You need to know what they believe in. You need to know what _motivates_ them.

## C Language

Good article about learning C language https://blog.regehr.org/archives/1393.

I can find high-quality code to read in C here: [Redis](http://redis.io/), [Musl](https://www.musl-libc.org/), or [Xv6](https://pdos.csail.mit.edu/6.828/2014/xv6.html).

Pointers challenge: https://blogs.oracle.com/linux/post/the-ksplice-pointer-challenge

Also, take a look at articles with undefined behavior.

Book to read: Expert C
## xv6

### How to add a system call

Here is how system calls are added in the real Linux
https://www.kernel.org/doc/html/v4.10/process/adding-syscalls.html

To make new system calls easy to review, it’s best to divide up the patch set into separate chunks. These should include at least the following items as distinct commits (each of which is described further below):

> - The core implementation of the system call, together with prototypes, generic numbering, Kconfig changes, and fallback stub implementation.
> - Wiring up of the new system calls for one particular architecture, usually x86 (including all of x86_64, x86_32, and x32).
> - A demonstration of the use of the new system call in userspace via a self-test in `tools/testing/selftests/`.
> - A draft man page for the new system call, either as plain text in the cover letter or as a patch to the (separate) man-pages repository

To debug xv6 go to the main folder and run 
```
gdb-multiarch
```
### Network

[Playground](https://lwn.net/Articles/960913/) for IP fragmentation

### Ideas
- Create a custom image for Raspberry with Yocto (https://lancesimms.com/RaspberryPi/HackingRaspberryPi4WithYocto_Introduction.html)
- Rewrite xv6 risk to arm?
- I want to read the source code of the qemu to know how it emulates risk 5

### Questions
1) Right now I've been searching for an example of how to prepare a system call, so I could push it fully onto my GitHub
2) How elf file maps onto the process
3) How to get binary files for xv6 to run through objdump
4) How to copy files into xv6 without recompiling the full OS
5)  So now we have risk functions. How do they communicate with qemu? Or maybe it's better to abstract from the hardware for now?

## Learning links

- Info about Risc Architeture https://learncs.me/ucb/cs61c 
- Book:  Computer Organization and Design: The Hardware/Software Interface
- Collection of courses from big universities https://learncs.me/curriculum
- Security MIT https://css.csail.mit.edu/