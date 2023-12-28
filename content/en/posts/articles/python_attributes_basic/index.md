---
title: Python basics - classes, attributes, private members and docs
date: 2023-11-15
author: hexxie
description: Notes about python basics which were not obvious to me
---

## Python OOP

The most interesting thing in this for me is that Python allow to work with not defined explicitlly attributes. To be honest it stucked me little bit

### Attributes

{{< highlight python >}}
class Point:
	pass

p1 = Point()
p2 = Point()

# So it seems I can make any attribute without
# putting into the class explicitly

p1.x = 5
p1.y = 4

p2.x = 3
p2.y = 6

print(p1.x, p1.y)
print(p2.x, p2.y)
{{< /highlight >}}

But here's the trick. I have to manage them myself. I mean I have to be sure that they're previously initialized before I'm trying to access them (kinda obvious)

Python has initializer for this purpose `__init__`

If I need to have what C++ programmers called default constructor, I can do this: 

{{< highlight python >}}
class Point:
	__init__(self, x = 0, y = 0):
		self.x = x
		self.y = y
{{< /highlight >}}


Constructors `__new__` is used for metaprogramming (tbc)

### Private methods and variables

{{< highlight python >}}

def _private_method()
def __extra_private_method() #with name mangling

#Same goes to variables, see example below

{{< /highlight >}}

How to access variable with name mangling

{{< highlight python >}}
class SecretString:
	def __init__(self, string, pass):
		self.__string = string
		self.__pass = pass
		
	def decrypt(self, pass):
		if(pass == self.__pass):
			return self.__string
		else:
			return ''

secret_str = SecretString("String", "password")
print(secret_string.decrypt("password")) #works fine
print(secret_string.__string) #doesn't work
print(secret_string._SecretString__string) #works yay
{{< /highlight >}}

## Python docs

I can load python docs via python interactive interpretator

1. Load the file 
2. Print help(class)
{{< highlight bash >}}
python -i file.py
help(Point) <enter>
{{< /highlight >}}


## Obvious python

1) Python script runs immediately when imported
So all startup code should goes in function (for example main), because accidentally I can run the code when I wanted only the particular function. 


2) Module - it's a file with python code. Package - is a folder, containing set of modules (files). That's why we have `__init__.py` in package =)