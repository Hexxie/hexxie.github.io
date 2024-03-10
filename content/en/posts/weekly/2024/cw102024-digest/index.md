---
title: CW10 Weekly Digest
date: 2024-03-10
author: hexxie
description: List of materials that I've learned this week
---

## Embedded skills

### Linker scripts

Linker scripts are mostly needed for bare-metal development -  to specify the memory layout -> [Stack Overflow](https://stackoverflow.com/questions/59700854/role-of-linker-scripts-when-writing-x86-assembly)

Resources:  
[The GNU linker](https://home.cs.colorado.edu/~main/cs1300/doc/gnu/ld_3.html)  
[GCC linker script and STM32](https://www.stf12.org/developers/freerots_ec-linker_script.html#:~:text=Any%20linker%20script%20can%20be,commandline%20including%20the%20linker%20script)

Example
```
For this example, let's say that the code should be
loaded at address 0x10000 and that the data should 
start at address 0x8000000. Here is a linker script
 which will do that:

SECTIONS
{
  . = 0x10000;
  .text : { *(.text) }
  . = 0x8000000;
  .data : { *(.data) }
  .bss : { *(.bss) }
}
```

### Embedded Linux Development

Here I've found a course about Yocto and Buildroot. I've met a few vacancies with these tools as a requirement for SW Engineer, so I think ith worth taking

[Coursera Embedded Linux Course](https://www.coursera.org/specializations/advanced-embedded-linux-development)

## Soft skills

### What can I include as a self-presentation
- Social media
- Education
- Certifications
- Job position and responsibilities
- Hobbies (+ animals, sports)
- Books 
- Last film or serial
- Games
- Blog

This could impact on different types of people. Probably I can listen to other's presentations and pick something that interesting to me. 

[Reference video (UA)](https://youtu.be/6zBTeUrhPek?si=R3EWY1A3hdCFf2H6)
