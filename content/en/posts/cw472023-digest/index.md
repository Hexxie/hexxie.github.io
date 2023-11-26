---
title: CW47 Weekly Digest
date: 2023-11-26
author: hexxie
description: List of materials which I've learned this week
---

<!-- Display the countdown timer in an element -->


<script>
// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2024 0:0:0").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // Display the result in the element with id="counter"
  document.getElementById("counter").innerHTML = days + "days ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "Happy New 2024 Year!";
  }
}, 1000);
</script>

<div style="display:inline">So it seems we have</div> <div style="display:inline; font-weight: bold;" id="counter"></div> before the New Year 2024!

## Profile update and Goals

And I've updated my [Profile](https://github.com/Hexxie/Profile/blob/main/SKILLS.md) repo with Skills which I want to be proficient with as a Software Developer.
Or maybe I even want to switch into some analytical position, because I'm not really into writing code
and creating a different designs or architetures for the apps.  

I don't have a lot expectations for the last month before Christmas (I'm not sure that I'm ready to study before the NY).
But I do want to test scheduling for me. 

What I want to investigate:

1) Am I capable to study course, do CTFs and python project within one week?
2) Maybe I need to have wider timestamp to handle all activities?
3) What if I finish one course and then I'll just keep up with practical things? 
4) How to plan and evaluate my progress? 

### Goals

What I want to study are:
1. CTFs (create writeups for Sunshine and Huntress) or that New Year event from SANS
2. Arch1001 with Reverse Engineering x86-64 - finish it
3. Python shuffler 
4. English
5. Weightlifting

And a schedule would be as in this [video (Rus)](https://youtu.be/UFLFez0AkVY?si=-Xd2684MCrLsV4ID)


## English

I participated in Speaking Club. And I felt that my English become more confident. So I decided to start over Grammar again. 
Here's resources for 

[American English File teacher resources](https://elt.oup.com/student/americanenglishfile/level04/level4downloads?cc=ua&selLanguage=uk)  
[American English File progress tests](https://elt.oup.com/student/americanenglishfile/?cc=ua&selLanguage=uk&mode=hub)  

## Security 

Course for [ReverseEngineering](https://github.com/hoppersroppers/nightmare) form HoppersRoppers

### Writeups
[HuntressCTF](https://github.com/ChaiChengXun2/HuntressCTF-Writeup) writeups 

### Tools
Tool to analyze data: [CyberChef](https://gchq.github.io/CyberChef/)

### Penetration testing

Here's certifcations which I've found in Penetration testing positions (from Dou)

Understanding of security testing frameworks: Information Systems Security Assessment Framework (ISSAF), Open-Source Security Testing Methodology Manual (OSSTMM), Open Web Application Security Project (OWASP), OWASP Mobile Application Security (MAS), Penetration Testing Execution Standard (PTES), NIST 800-115.

Relevant certifications, such as OSCP, OSWE, CEH.

### RedTeam Career

https://tisiphone.net/2015/10/12/starting-an-infosec-career-the-megamix-chapters-1-3/
https://danielmiessler.com/p/build-successful-infosec-career/

### Books
**The Hacker Playbook** – All the Hacker Playbook series (3 books) are great, really detailed and interesting way of explaining about issues and solving them in a methodical way. The third book in the series focuses on Red team operation on goes from A to Z on how to conduct one, including what tools to use and how to interpret the results.   
**How to Hack Like a Pornstar** – You won’t be able to put down the book - Sparc Flow explains really well and in an interesting way about procedures and ways to conduct operations.   
**Red team Development and Operations:** A practical guide Paperback – Written by Joe Vest the Technical Director for Cobalt Strike. This book looks at all the Red team process from a management perspective, everything you need to know from A-Z about how to run a successful Red team, including terms, reporting, best approach, maximizing impact and more. Highly recommended.  

## FPV

I get a Liftoff simulator to play with and a joystick Taranis.   
Just leave here a [youtube channel](https://www.youtube.com/watch?v=DsbaftCHpHs&list=PLiYYhnH4BhI_F19riYiKPigp8vkN67AN1&index=2&ab_channel=ProjectBlueFalcon) how to setup and use Taranis joystick.