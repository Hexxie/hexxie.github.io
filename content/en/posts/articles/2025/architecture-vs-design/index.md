---
title: From Embedded Systems to Software Architecture
date: 2025-08-15
author: hexxie
description: From Embedded Systems to Software Architecture - My Journey Back to Development
---

After a few years wandering through different roles — from low-level programming and reverse engineering to product and project management — I’ve decided to return to my old passion: **software development**.

Most of my experience lies in **high-level embedded systems** — primarily Embedded Linux and the AUTOSAR framework. This means I’m not a fit for projects involving ESP32, STM microcontrollers, or Linux kernel development. Frankly, I’m not interested in going back to that niche, and that’s one of the reasons my career exploration took so long.

Recently, I’ve been researching a new direction — **software and solution architecture**.
But before I get there, I want to strengthen my base by building real projects using **Python, Go**, and **TypeScript**. My goal is to first work as a *full-stack developer*, and then grow into a *technical lead* or **architect**.

## The Knowledge Ladder: From Developer to Architect

To clarify my learning path, I’ve broken down the knowledge areas and responsibilities into four levels:

| Level       | Name            | Who is responsible      | Examples    |
| ----------- | --------------- | ----------------------- | ----------- |
| 🔹 **1. System architecture** | Solution Architecture | Architectors, Tech Leads  | Layered, Microservices, Event-Driven, Serverless   |
| 🔹 **2. App architecture / enterprise** | Enterprise Patterns | Senior devs, Architectors | MVC, MVVM, Domain Model, Repository, Service Layer |
| 🔹 **3. Design Patterns (GoF)** | Design Patterns  | Developers   | Singleton, Factory, Observer, Strategy, Decorator  |
| 🔹 **4. Idioms / coding techniques**   | Idioms, Language Patterns | Developers | Optional, try-with-resources, builder chaining     |

## How These Levels Work Together
Let me show you an example.

Suppose we decide to build a **layered architecture** with data, business, and presentation layers, and deploy it **on-premise**.
That’s **system architecture**. Here, we could also define an AWS-based design if it were a cloud project.

Next, we move deeper into **application architecture**: for instance, choosing MVC for the presentation layer. This decision could be made by an architect or a senior developer. In my experience, it was often a senior developer’s call.

After that, the senior dev splits the system into smaller work chunks and assigns them to mid-level developers. Each developer designs their piece using **design patterns**.

Finally, when coding begins, developers apply **idioms** and language-specific techniques to write clean, maintainable code.

------

## Skills Needed at Each Stage

To grow from a mid-level developer to a senior developer — and eventually to an architect — you need to:

1. **Code well** — know the language, its syntax, and best practices.
2. **Design at the class level** — apply design patterns effectively.
3. **Organize code into an application** — choose and implement app architecture.
4. **Understand system architecture** — see how multiple applications form a larger infrastructure.

------

## My Current Status

**Strengths:** Design patterns. I naturally think about them during the design phase, before coding.
**Weaknesses:** Deep language-specific knowledge (Python, Go, TypeScript).
**Current Reading:** Software Architecture Fundamentals — covering Level 1 (System Architecture).
**Gap:** Enterprise patterns (Level 2) — something I’ve largely missed so far.

------

## A New Learning Season

With this article, I’m officially starting a *new learning season*.
My goal for the coming months is to:

- **Master Python** for backend development and general coding.
- **Learn React** to handle modern frontend work.
- **Practice integrating code into full software architecture** so the system is maintainable and scalable.
- **Explore AWS services** and understand how to connect them to my applications — from deployment to monitoring.

By combining coding skills, architectural thinking, and cloud integration, I want to move *vconfidently into the full-stack and architecture space.**