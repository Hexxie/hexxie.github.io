---
title: Unit Tests strategy
date: 2023-10-24
author: hexxie
description: Notes from Python Testing with pytest by Brian Okken
---

This is my notes which I've made during reading "Python Testing with pytest" by Brian Okken. It will support me when I have a task with Unit tests bring up in the future. 

## Goal

1. User visible functionality
2. Security?
3. Performance?
4. Loading?
5. Input validation?

For example
- Test the behavior of user visible functionality.
    
- Postpone security, performance, and load testing for the current design. The current design is to have the database stored in the users home directory. When/if that moves to a shared location with multiple users, these concerns will definitely be more important.
    
- Input validation is also less important while Cards is a single user application. However, I also don’t want stack traces to occur while using the app, so we should test wacky input, at least at the CLI level.

## Testing Enough to Sleep at Night
**The idea of testing enough so that you can sleep at night may have come from software systems where developers have to be on call to fix software if it stops working in the middle of the night.**

## The Plan

Divide features or functionality by priorities

- **Recent** — New features, new areas of code, new functionality that has been recently repaired, refactored, or otherwise modified
    
- **Core** — Your product’s unique selling propositions (USPs). The essential functions that must continue to work in order for the product to be useful
    
- **Risk** — Areas of the application that pose more risk, such as areas important to customers but not used regularly by the development team or parts that use third-party code you don’t quite trust
    
- **Problematic** — Functionality that frequently breaks or often gets defect reports against it
    
- **Expertise** — Features or algorithms understood by a limited subset of people

## Test Cases

- Start with a non-trivial, “happy path” test case.

- Then look at test cases that represent
    
    - interesting sets of input,
    - interesting starting states,
    - interesting end states, or
    - all possible error states.


## Test strategy
- Test the behaviors and features that are accessible through the end user interface, the CLI.
    
- Test those features through the API as much as possible.
    
- Test the CLI enough to verify the API is getting properly called for all features.
    
- Test the following core features thoroughly: add, count, delete, finish, list, start, and update.
    
- Include cursory tests for config and version.
    
- Test our use of TinyDB with subsystem tests against db.py.


Reference: [Python Testing with pytest](https://learning.oreilly.com/library/view/python-testing-with/9781680509427/) by Brian Okken