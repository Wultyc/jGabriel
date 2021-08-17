---
title: "Dot Files"
date: 2021-08-17T00:00:00Z
image: "/articles/dot-files/0.jpg" # The image resolution should be 900x500 or a proportional resolution
categories: ["..."]
authors: ["Jorge Gabriel Azevedo"]
sources: []
home: true
draft: false
---
Dot files are files witch the first character in the filename is a dot. They are commonly used on the Unix/Linux ecosystems to store configuration due the fact the system hides these files by default. On Windows they are not to hide these files (or folders) it’s required to manually hide them.

## Why are dot files so special
Due the fact Unix Like systems hide these files by default, they are used to keep relevant information for the normal behave the machine without cluttering the user workspace with files. Another characteristic is that these files usually are text files, so if the user wants to read, modify, or even delete some configuration for any specific application it doesn’t need to access any sort of database or registry. It just needs to edit the file.
Some examples of the usage of dot files are:
* Git: The versioning system keeps a `.git` folder on the root of each repository and its from there its manages the status for each file on the repository. Git also has a file `.gitconfig` on users folder to store some information for that particular user, such as default email and name for commit signature.
* GitHub: For GitHub users, it’s also possible to see a `.github ` folder on the repository root and this folder is used to keep some configurations for that particular repository, for example actions.
* SSH: SSH configurations usually are placed on a `.ssh` inside your user folder. This folder is used to keep configurations and some keys for your SSH client.
* Maven: The popular dependency management tool for Java projects has `.m2` folder on the user’s folder. This folder is used to keep an offline version of project dependencies to avoid being always downloading the artifacts each time we want to run the application.
* Bash: The popular shell for Unix and Linux systems also uses dot files to keep some information for the user
    * `.bash_history`: keep a recent history of all commands used on bash shell
    * `.bashrc: stores` the bash configuration for that particular user. It’s used to overwrite some system configuration for bash
Keeping these files is a great way to optimize new system setups because all the configurations will be preserved.

## How to effectively backup these files
There are some tools to manage these files, but I personally keep using GIT for this. Yes Git. With Git I can keep all versions of each individual file, making easy to rollback if needed.

For this propose I created a Git repository on GitHub with all the files I want to save. Then I just make commits when any configuration changes.

### Keeping a single repository for the whole system
The premise for this solution is that you can keep the files inside your repository up to date and we have two options
1. manually coping the updated version of each file for the repository
1. linking the files on the repository with the files being used for the different applications 

Off course the linking strategy is the easiest way. But for this path we need to understand what symbolic link is. A symbolic link is the ability of your filesystem to have a file pointing to another file on the filesystem. With this, any change made on the second file will change the original file
Example:
Let’s imagine we have two folders: `User-folder` and `Applications` folder. Inside Applications we have another folder named `app-xpto` witch as the configurations file for that application. 
```
User-folder/
    Dotfiles-repo/
        app-xpto-config
        bashrc
---
Applications/
    app-xpto/
        config
```
If we make a file ` Applications/app-xpto/config` a symbolic link to `User-folder/Dotfiles-repo/app-xpto-config`, when the application xpto make any update to its config file, in reality it will update the file inside `User-folder`. With this we just need to make a commit on the `Dotfiles-repo` and push the changes to the remote and all the configurations are safe in another machine.

To do this is just needed to run the following command depending on the platform
```
# Windows, using powershell
cmd /c mklink '<Link File Path>' '<Link Target Path>'
# Example:
# cmd /c mklink 'Applications/app-xpto/config' 'User-folder/Dotfiles-repo/app-xpto-config'

# Linux
ln -s '<Link Target Path>' '<Link File Path>'
# Example:
# ln -s 'User-folder/Dotfiles-repo/app-xpto-config' 'Applications/app-xpto/config'

```

For safety we can also create a script to make the commit automatically, something like this
```
git add *
git commit -am “automatic configuration backup”
git push
```
Placing it on the root of git repository and create a schedule task to run this script periodically. This way we are sure all configurations will be securely backed-up even if we forget to push the changes to the remote.

## What files I backup
Throughout the text, we talk about dot files, but this technique can be used with any application that uses text files to store their settings. For example, beyond Git, SSH and bashrc I use this approach to save the configuration for my Windows Terminal. This way, if I need to setup my machine again, all my configurations will be easily imported into the application


