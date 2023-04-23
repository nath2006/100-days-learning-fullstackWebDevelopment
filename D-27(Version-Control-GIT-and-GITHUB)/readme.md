# On this session, im learn about Version Control, Git and Github

## What is Version Control System?
> Version control system (vcs) is a system that records changes over time to files, or folders so that we can review specific versions later
> > note: img form git-scm.com
<br>
<h3>Version Control Type</h3>
 <ul>
  <li> 
     <h4>Local version control systems</h4>
     <div style="width: 350px">
      <img src="./img/local.png"/>
     </div>
  </li>
  <li> 
     <h4>Centralized version control systems</h4>
     <div style="width: 350px">
      <img src="./img/centralized.png"/>
     </div>
  </li>
   <li> 
     <h4>Distributed version control systems</h4>
      <div style = "width: 350px">  
         <img src="./img/distributed.png"/>
     </div>
   </li>
</ul>

## What is Git and Github?
<ul>
   <li>
      <h3>Git</h3>
      <p>Git is software based on Version Control System (VCS) whose job is to record changes to all files or repository of a project.<p>
   </li>
      <li>
      <h3>Github</h3>
      <p>GitHub is a cloud service that is useful for storing and managing a project called a repository (git repo).</p>
   </li>
</ul>

## Github and remote repository?
> Where is the remote repository stored?
>
>It can be on an office server or you can also use services such as Github, Gitlab, Bitbucket, etc.
>
>But now we will use github to host (host) the repository remotely.
<h3>Command Git for remote repository using Github</h3>
<ul>
   <li>
   <h4>Adding a remote repository</h4>

   ```GIT
   git remote add [remote name] [URL]
   ```
   </li>

   <li>
   <h4>Changing a remote repository's URL</h4>

   ```GIT
   git remote set-url [remote name] [URL]
   ```
   </li>

   <li>
   <h4>Removing a remote repository</h4>

   ```GIT
   git remote rm [remote name]
   ```
   </li>

   <li>
   <h4>Send Revisions to Remote Repository</h4>

   ```GIT
   git push [remote name] [branch name]
   ```
   </li>
</ul>

## What is Git ignore ".gitignor"?
>.gitignore Its function is to set when we push, the file path listed in it will not be committed.
<h3>Rules in .gitignore</h3>
|     Pattern    |                                               Explantion/Matches                                               |                   Examples                  |
|:--------------:|:--------------------------------------------------------------------------------------------------------------:|:-------------------------------------------:|
| Blank line     | Blank lines are ignored                                                                                        |                                             |
| # text comment | Line starting with # are ignored                                                                               | #this comment                               |
| name           | All name files, name folders, and files and folders in any name folder                                         | /name.log /name/filex.txt /lib/name.log     |
| name/          | Ending with / specifies the pattern is for a folder. Matches all files and folder in any name folder           | /name/file.txt /name/log/name.log/name.file |
| name.file      | All file with the name.file                                                                                    | /name.file /lib/name.file                   |
| /name.file     | Starting with / specifies the patterns matches only files the root folder                                      | /name.file                                  |
| lib/name.file  | Pattrens specifiing files in specific folders are always realative to root (event if you do not start with / ) | /lib/name.file                              |