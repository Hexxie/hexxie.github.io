---
title: Reconnaissance with nmap
date: 2023-12-17
author: hexxie
description: My cheatsheet for work with nmap
---

## Scan types

3-way Handshake

```
nmap -sT ip
```

TCP SYN "Stealth" scan
```
nmap -sS ip
```

TCP FIN Scan 

```
nmap -sF ip
```

UDP scan

```
nmap -sU 10.0.0.5
```

Host discovery
```
nmap -sn 10.0.0.5
nmap -sn 10.0.0.0/24
```

Scripts ????
https://nmap.org/nsedoc/scripts/ftp-anon.html

```
nmap -sC 10.0.0.0/24
```

Web enumeration can enumerate http folders:

```
nmap -sV --script=http-enum.nse 10.0.0.5
```

Export output:
```
-on FILE
```

## Links

Cheatsheet: [https://h4cker.org/cheat/nmap](https://h4cker.org/cheat/nmap)  
Here I can find different tactics: https://attack.mitre.org/tactics/TA0043/