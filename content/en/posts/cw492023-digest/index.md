---
title: CW49 Weekly Digest
date: 2023-12-11
author: hexxie
description: List of materials that I've learned this week
---

I've dropped AdventOfCode this week. It seems that handling two advents us hard. I need to choose wisely because I have little time. Currently, I'm preparing for weightlifting competitions, so I have only the morning for technical stuff. 

**Topics**: Python, CTF toolset, CTF in Ukraine

## Python 

[What are enums for Python](https://docs.python.org/3/howto/enum.html#enum-class-differences)

[How to design a state machine](https://www.codeproject.com/Articles/1275479/State-Machine-Design-in-C)

Still, I want to read Fluent Python, especially about dictionaries and lists. For CTF I'm using it a lot.

## AdventOfCyber

### Toolset

#### Crunch

Crunch creates permutations of given symbols and saves them to a file.

```
crunch 3 3 0123456789ABCDEF -o 3digits.txt
```

#### Hydra

Helper tool to try different sets of passwords

```
hydra -l '' -P 3digits.txt -f -v 10.10.56.54 http-post-form "/login.php:pin=^PASS^:Access denied" -s 8000
```

#### Cewl

A tool that generates passwords, based on content on the site

```
cewl -d 2 -m 5 -w passwords.txt http://10.10.182.81 --with-numbers
```

#### Wfuzz

Wfuzz is a tool designed for brute-forcing web applications. It can be used to find resources not linked to directories, servlets, scripts, etc, brute-force GET and POST parameters for checking different kinds of injections (SQL, XSS, LDAP), brute-force forms parameters (user/password) and fuzzing.

#### Grep

search for information in the text

```
grep OPTIONS STRING_TO_SEARCH FILE_NAME
```

#### cut

It works as a split in bash

```
cut -d ' ' -f1,3,6 access.log

-d - delimeter (cut it by spaces)
-f - columns
```

#### unique

To do this, we'll combine the **sort** and **uniq** commands with the **cut** command. Unique will display lines in the sorted array

Here we`re extracting sites, sorting them, and getting unique values
-c - how often certain values occur

```
cut -d ' ' -f3 access.log | cut -d ':' -f1 | sort | uniq -c
```

we can sort it by counter:
```
cut -d ' ' -f3 access.log | cut -d ':' -f1 | sort | uniq -c | -n
```


## CTF in Ukraine

I've found a group in Ukraine, that popularizes CTFs, so I'm not alone in this topic. Here's links

Podcast [Гугл не розкаже](https://frosted-asp-5e2.notion.site/fc1fba4113944ce486dfc3d5ea815178)

[How to switch into cybersec](https://frosted-asp-5e2.notion.site/SET-Guide-0-6f922c22fd7e44eebb8ae74bbc489bfe)


**Sometimes we have to choose ourselves.**