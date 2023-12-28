---
title: How to create venv in python
date: 2023-10-30
author: hexxie
description: I always forget commands for python virtual environment. Lets keep it here then.
---

Yeah, I know that this is easily googled. But... I don't want to google it everytime. Lets preserve that commands for creation virtual environment here. 

Ok, so when I started to work with new project I have to:

- Get the code somehow. For example, git clone repo (well obvious)
- Create a virtual environment with python3 -m venv venv.
- Activate the virtual environment.
- Install the dependencies with pip install -r requirements.txt.
- Run the application.

## How to create venv for Windows

```
python \path\to\code
python -m venv venv
venv\Scripts\activate
```


## How to create venv for Linux

```
python /path/tp/code
python -m venv venv
source venv/bin/activate
```


## Set up unit tests with directory structure

You have to add pytest.ini and specify there paths to your folder structure

```
[pytest]

addopts = -ra
testpaths = tests
pythonpath = src
```


Oh, it's just reminds me that I always forget which group should I add my user to so shared folder for virtualBox (linux) started to work without admin rights. But this is another story....