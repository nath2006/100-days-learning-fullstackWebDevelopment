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
<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky">Pattern</th>
    <th class="tg-0pky">Explantion/Matches</th>
    <th class="tg-0pky">Examples</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">Blank line</td>
    <td class="tg-0pky">Blank lines are ignored</td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-0pky"># text comment</td>
    <td class="tg-0pky">Line starting with # are ignored</td>
    <td class="tg-0pky">#this comment</td>
  </tr>
  <tr>
    <td class="tg-0pky">name</td>
    <td class="tg-0pky">All name files, name folders, and files and folders in any name folder</td>
    <td class="tg-0pky">/name.log<br>/name/filex.txt<br>/lib/name.log</td>
  </tr>
  <tr>
    <td class="tg-0pky">name/</td>
    <td class="tg-0pky">Ending with / specifies the pattern is for a folder. Matches all files and folder in any name folder</td>
    <td class="tg-0pky">/name/file.txt<br>/name/log/name.log/name.file</td>
  </tr>
  <tr>
    <td class="tg-0pky">name.file</td>
    <td class="tg-0pky">All file with the name.file</td>
    <td class="tg-0pky">/name.file<br>/lib/name.file</td>
  </tr>
  <tr>
    <td class="tg-0pky">/name.file</td>
    <td class="tg-0pky">Starting with / specifies the patterns matches only files the root folder</td>
    <td class="tg-0pky">/name.file</td>
  </tr>
  <tr>
    <td class="tg-0pky">lib/name.file</td>
    <td class="tg-0pky">Pattrens specifiing files in specific folders are always realative to root (event if you do not start with / )</td>
    <td class="tg-0pky">/lib/name.file</td>
  </tr>
</tbody>
</table>