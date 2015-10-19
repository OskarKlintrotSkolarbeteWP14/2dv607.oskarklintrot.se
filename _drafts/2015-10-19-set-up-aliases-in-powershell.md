Using the command-line in Windows used to be a horrible experience compared to *nix. Now days though Windows PowerShell is a really nice command-line shell, especially i Windows 10. The shell's in Windows (thats PS and of course the good ol' cmd.exe) works in another way than in *nix. In Windows they treat everything as objects while in *nix they treat everything as a file. Both have their pro's and cons but I'm not the right person to dig into that. Instead I will show you how I use small scripts for my most used commands.
<!--break-->
## Starting to use the command-line, again...
I've grown to like Powershell more and more since I first started using it. After I gave up Linux for like 5 years ago I thought I would miss the terminal. I didn't. However, know I'm studing web development and I'm now using the Powershell for some tasks, as working with git and vagrant. I still prefer a nice GUI but I guess *nix users haven't got enough powerful computers just yet. Jokes beside, the command-line is a great tool for some tasks and I have made some scripts for my most used commands.
## Using scripts in the everyday life as an developer
In the folder `C:\Users\Oskar\Documents\WindowsPowerShell`, where Oskar is my user, I have created the file `profile.ps1` that only consists of 5 small lines:
 ```PowerShell
 $Path = "C:\Users\Oskar\Documents\WindowsPowerShell\myScripts"
 $files = Get-ChildItem $Path\*.ps1
 ForEach ($file in $files) { 
     set-alias $file.BaseName $file.FullName
 }```
This scripts takes all files from `C:\Users\Oskar\Documents\WindowsPowerShell\myScripts` that ends with `.ps1`, which is a PS-script file, and sets aliases to the script file (`$file.FullName` gives back a string with the name and path to the file). The alias name of the file, `$file.BaseName`, becomes the alias for the script.
## Lets see a script!
asdas
