---
title: CW45 Weekly Digest
date: 2023-11-12
author: hexxie
description: List of materials which I've learned this week
---

# Hard Skills

Continue with working on restShuffler. It seems that I want to add there workShuffler as well. And I've stucked with a problem. 
Or two. The first one - I don't know python OOP. And the second one - I don't know how to separate by business logic and 
data. Yes.. I know about MVC, but it seems this pattern is not so suitable for my needs, so I started to search better
solution. 

And here what I've found.. 

## Database Patterns 

In short. My task was to separate my app logic and database's requests, because I need to create more tables with 
similar queries and in future change SQLite with Postgres. So I urgently need to change my app design. The problem was - 
I didn't know the well-known methods. 

This week was mainly about searching the materials. I've found the book - **Patterns of Enterprise Application Architecture**,
which gave me an idea about ORM systems. And a good example of such system is **SQLAlchemy**. It's built on 
Enterprise Application Architecture ideas and next week I'm planning to research more and probably I'll try 
to create a separate article about this. 

Currently I'm focusing on two problems: 
- how to open and close database (without passing it as a paramether everywhere) 
- how to separate the code (so I don't need to repeat code for each request).

I'm planning to create a tutorial with Python to try different enterprise patterns. 

**Resources:**

First point - it seems most of the patterns are in the Martin Fowler's book:  “[Patterns of Enterprise Application Architecture](https://www.martinfowler.com/books/eaa.html)”

So I highly recomend to start with this. But... from my point of view there's too much text but too little code. 

Here I've found [UML Diagrams](https://github.com/jaysonzanarias/patterns-of-enterprise-application-architecture#BasePatterns) based on this book. 
And [code examples](https://www.sourcecodeexamples.net/p/p-of-eaa.html)

And here [PHP source code](https://gist.github.com/fesor/d84451fc6cf00ea62ca5) for database patterns. But the description goes in russian. 

Also I've read SQLAlchemy code and it's [architecture decisions](https://aosabook.org/en/v2/sqlalchemy.html).

And the best resource, which I've considered to dig into is this [tutorial](https://github.com/richard-jp-leguen/glorified-typings/blob/master/ta-material/soen343-f2010/tut-71.implementing-row-data-gateway.md). 

## Python OOP 

Right now I'm reading [Python 3 Object-oriented Programming](https://www.amazon.com/Python-3-Object-Oriented-Programming/dp/1849511268).
And [Fluent Python](https://www.amazon.com/Fluent-Python-Concise-Effective-Programming/dp/1492056359/ref=sr_1_1?crid=2IBAWR0SZLTCD&keywords=fluent+python&qid=1699819231&s=books&sprefix=Fluent+%2Cstripbooks-intl-ship%2C250&sr=1-1).

I'll add notes from it next week.

### VS code and UML

Also I want to leave a not about [PlantUml](https://plantuml.com/class-diagram). 
This tool is really nice because I can create and read UML diagrams directly in my VSCode. 
And syntax is so simple. 

### Python Patterns

Last but not least. Here's samples with source code of [Python Patterns](https://python-patterns.guide) from Gang of Four.

That's it for technical stuff. Let's move on the opposite stuff.
----

# Soft skills

Right now I'm trying to create a stretching flow for me, because it's really important thing for my weightlifting stuff.

## Stretching routine

I'd like to use 1hr stretching routine combined from this 15 minutes flows

- [15 Minute Shoulder Mobility Routine I Rounded Shoulders Fix (ALL LEVELS)](https://www.youtube.com/watch?v=IzxA4pBdGuU&t=811s "15 Minute Shoulder Mobility Routine I Rounded Shoulders Fix (ALL LEVELS)")
- [15 Minute Hamstrings Flexibility Stretches (All Levels)](https://www.youtube.com/watch?v=3LTw8p2SL4c&t=580s "15 Minute Hamstrings Flexibility Stretches (All Levels)")
- [15 Minute Hip Mobility DAILY Routine (All Levels)](https://www.youtube.com/watch?v=2dleGRVUl1Y&t=1001s "15 Minute Hip Mobility DAILY Routine (All Levels)")
- [15 Minute Pancake Mobility Routine - FOLLOW ALONG](https://www.youtube.com/watch?v=pEPE4ocpyXE&t=14s "15 Minute Pancake Mobility Routine - FOLLOW ALONG")

And during my free time I'm continue to work on my handstand 
[V-Sit](https://www.youtube.com/watch?v=JJNihsQKx6s&t=1398s "Unlock the V-Sit FAST! Home Calisthenics Routine (Follow Along)")

## Soft Skills

This video is ukrainian but let me list at least 
[5 habits to be charismatic person (Ukr)](https://www.youtube.com/watch?v=wsmu34Qo-Fw "5 простих звичок, які роблять будь-кого ЦІКАВОЮ і ХАРИЗМАТИЧНОЮ людиною | як подобатись людям")

**1. Find the balance between expertise and warmth**  
    - You can't be trusted if you don't have an expertise but you're so warm  
    - You can't be trusted if you have a lot of cold expertise  

**2. Share information about yourself**  
    - Well, what if you don't know what to share about yourself  
    - And here's my hint - imagine that you're a characted from the RPG game. What is your BIO? Probably I'm gonna create mine very soon. Interesting task btw  

**3. Ask people to help you**  
    - People like to give an advice or help so they authomatically will like you

**4. Be with "your" people and know yourself (or learn about yourself)**  

**5. Talk about what you think (Be honest, your thoughts are your truth)**  
    - Here's also one hint. A lot of people whom I know have really bad thought. I was as well. But I started to notice them, and asking myself "why?". This technique can help to think in more positive way.  
    - Second way - read books about cognitive-behavioral therapy.  
    - Third way - find a good therapist.  


## Cooking 

I want to cook [this cake](https://www.youtube.com/watch?v=94epM01DEmw)

## Other 

[How to teach tech](http://teachtogether.tech/en/index.html): I hope some time I'll give it a try with a mentee. 

Currently reading [Tomorrow and tomorrow and tomorrow](https://www.goodreads.com/book/show/58784475-tomorrow-and-tomorrow-and-tomorrow)

Watched this week [Killers of the Flower Moon](https://www.youtube.com/watch?v=Aq8-G96CJLs): not impressed, like a classical thriller, no more. 3/5


**And remember be kind: all else is details.**