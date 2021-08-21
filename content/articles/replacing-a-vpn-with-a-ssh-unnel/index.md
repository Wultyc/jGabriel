---
title: "Replacing a VPN with a SSH Tunnel"
date: 2021-08-18T00:00:00Z
image: "/articles/ssh-tunnel/0.jpg" ## The image resolution should be 900x500 or a proportional resolution
categories: ["..."]
authors: ["Jorge Gabriel Azevedo"]
sources: []
home: true
draft: false
---
## Why this?
During the Covid-19 pandemic we needed to adapt to a whole new way of living, working, studding and so on. Even though VPN were a common technology for many of us, they gain much more popularity to allow people to work from home. In my specific case, my work laptop has the company VPN already set-up, but for my master's Degree I needed to set-up the collage VPN on my personal laptop.

I don't like this solution, mostly because I don't like to mess my own set-up with college stuff. I like to keep everything apart. For this reason, I created a VM, using VMWare player and Ubuntu 20.04 to install some applications that don't really make sense to exists on my set-up, or have some special requirement that my normal set-up doesn't accomplishes.

Finally, I set-up the VPN on my laptop when I started the master’s degree, but the VPN connection was to slow, and I decided to move it to the VM and do all my work on the VM. This was a good solution until the second semester when I needed to remote desktop to a machine inside ISEP private network. That was horrendous slow! The software rendering was so bad that I thought in set-up the VPN on my laptop and suffer with the slow connection to the internet instead of using the VM. Was at that moment I started asking: Is there any way to redirect specific traffic from my machine to the VM and then using the with the VPN connection access the machine on the private network? Is that when I found about SSH Tunneling or SSH Port Forwarding.
![](/images/articles/ssh-tunnel/diagrams-tunnel_model.jpg)
## How does the SSH Tunnel works?
SSH Tunnel will forward the traffic on a specific port on your local machine to your SSH server. This way when reaching a specific port on your system, for example 8826 all the information will flow to the target by the SSH server.
All needed to enable this is make a configuration on the config file for SSH `~/.ssh/config`. On the host configuration for your SSH target just need to add the amount of LocalForward you need
```
HOST <hostname>
        User <username>
        HostName <host ip/address>
        IdentityFile <ssh private key>
        LocalForward <local port> <remote target>
```
example
```
HOST vmschool
        User jorge
        HostName 192.168.172.54
        IdentityFile ~/.ssh/my-secret
        LocalForward 8826 10.0.0.1:826
```

Usually, I like to use on my local machine a port with the same number of the target but with an 8 prefix. It’s easier to identify the target (when troubleshooting for example) and keeps the local port (in this case 826) available in case I need for another application.

To start using the tunnel, its just need to run the command
```
ssh -t vmschool
```
If the configuration is well done, the target should now be accessible from the local machine on port 8826.

## What is the impact on the performance?
The delay of this connection is minimum and barely noticeable due the fact the SSH server is running on the machine. Although disabling the GUI on the VM when using it only for SSH tunnel will help improving the performance.

## How to access services using their domain instead of the IP address?
In some cases, we need to access a service inside the private networking using its domain, for example a database server on the address `database.foo.bar` on port 3306. To access a service using its domain, first we need to add an entry on the host’s file:
* On Windows: `C:\Windows\System32\drivers\etc\hosts`
* On Linux and MacOS: `/etc/hosts`
On the file add a new entry pointing to the local machine
```
127.0.0.1	database.foo.bar
```
> Max value for a TCP port is `65535` so the prefix 8 we used before was replaced by a 6. As mentioned, before we could perfectly use the local port 3306, but if for instance you need to run a MySQL instance on your machine you will need to change the default port to be able to use this configuration.

Then on the SSH config file, we point the port `63306` to `database.foo.bar:3306`. We can have as many forwards as we need.

```
HOST vmschool
        User jorge
        HostName 192.168.172.54
        IdentityFile ~/.ssh/my-secret
        LocalForward 8826 10.0.0.1:826
        LocalForward 65535 database.foo.bar:3306
```

## Conclusion
This solution cannot fully replace a VPN and it’s not intended for that. If I need to access the full network (to search on research pages that require me to use my collage IP for free traffic), I will rather prefer to enable the GUI and use my browser inside the VM. This solution is meant for specific scenarios when I need to access a specific service from my machine without having to setup the VPN and being limited by connection to my collage or it internet connection.

Sources:
>   [ssh.com](https://www.ssh.com/academy/ssh/tunneling/example)