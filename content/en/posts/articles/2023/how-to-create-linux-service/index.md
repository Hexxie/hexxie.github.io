---
title: How to create linux service
date: 2023-12-03
author: hexxie
description: Notes to create linux service
---

1. Create a file with service script

{{< highlight bash >}}
sudo nano /lib/systemd/system/sample.service
{{< /highlight >}}

2. Fill it with the next content

{{< highlight bash >}}
 [Unit]
 Description=My Sample Service
 After=multi-user.target

 [Service]
 Type=idle
 ExecStart=/usr/bin/python /home/pi/sample.py > /home/pi/sample.log 2>&1

 [Install]
 WantedBy=multi-user.target
{{< /highlight >}}

3. Assign rights

{{< highlight bash >}}
 [Unit]
 Description=My Sample Service
 After=multi-user.target

 [Service]
 Type=idle
 ExecStart=/usr/bin/python /home/pi/sample.py > /home/pi/sample.log 2>&1
 User=pi

 [Install]
sudo chmod 644 /lib/systemd/system/sample.service
{{< /highlight >}}

4. Enable it

{{< highlight bash >}}
sudo systemctl daemon-reload
sudo systemctl enable sample.service
sudo reboot
{{< /highlight >}}

### Useful commands

Check status
{{< highlight bash >}}
service sample status
{{< /highlight >}}


Check who is running the service
{{< highlight bash >}}
systemctl show -pUser,UID service-name
{{< /highlight >}}