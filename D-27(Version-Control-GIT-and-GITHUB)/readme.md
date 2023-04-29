# On this session, im learn about Version Control, Git and Github

## What is Version Control System?
> Version control system (vcs) is a system that records changes over time to files, or folders so that we can review specific versions later
> > note: img form git-scm.com
<br>
<h3>Version Control Type</h3>
 <ul>
  <li> 
     <h4>Local version control systems</h4>
      <img src="./img/local.png" width="300px">
  </li>
  <li> 
     <h4>Centralized version control systems</h4>
      <img src="./img/centralized.png" width="300px">
  </li>
   <li> 
     <h4>Distributed version control systems</h4>
         <img src="./img/distributed.png" width="300px">
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
### Bacis Rules in .gitignore
> [For details rules](https://www.w3schools.com/git/git_ignore.asp?remote=github)
<table>
<thead>
  <tr>
    <th>Pattern</th>
    <th>Explantion/Matches</th>
    <th>Examples</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Blank line</td>
    <td>Blank lines are ignored</td>
    <td></td>
  </tr>
  <tr>
    <td># text comment</td>
    <td>Line starting with # are ignored</td>
    <td>#this comment</td>
  </tr>
  <tr>
    <td>name</td>
    <td>All name files, name folders, and files and folders in any name folder</td>
    <td>/name.log<br>/name/filex.txt<br>/lib/name.log</td>
  </tr>
  <tr>
    <td>name/</td>
    <td>Ending with / specifies the pattern is for a folder. Matches all files and folder in any name folder</td>
    <td>/name/file.txt<br>/name/log/name.log/name.file</td>
  </tr>
  <tr>
    <td>name.file</td>
    <td>All file with the name.file</td>
    <td>/name.file<br>/lib/name.file</td>
  </tr>
  <tr>
    <td>/name.file</td>
    <td>Starting with / specifies the patterns matches only files the root folder</td>
    <td>/name.file</td>
  </tr>
  <tr>
    <td>lib/name.file</td>
    <td>Pattrens specifiing files in specific folders are always realative to root (event if you do not start with / )</td>
    <td>/lib/name.file</td>
  </tr>
</tbody>
</table>

## Branching dan Merging branch
### Branching
> Literally, the meaning of 'branch' is a branch. But in Git, the meaning of a branch is an environment that can be used to experiment on the project without disturbing the main environment of the project.
### Mergeing
> Merging is an action to merge one 'branch' with another 'branch'
### Merge and Branch Command
> [For details documentation branching](https://www.atlassian.com/git/tutorials/using-branches)
>
> [For details documentation merging](https://www.atlassian.com/git/tutorials/using-branches/git-merge)
<ul>
  <li>
   <h4>Create new branch</h4>
    <p>Make sure Before creating a new branch, pull the changes from upstream. Your master needs to be up to date.
    </p>

   ```GIT
   //Juts create new branch
   git barnch [your branch name]

   //Create and moving to new branch
   git branch -b [your branch name]
   ```
  </li>
 
  <li>
     <h4>check which branch you are in now</h4>

   ```GIT
   git branch
   ```
  </li>

  <li>
    <h4>Checkout to another branch</h4>

   ```GIT
   git checkout [your-branch]
   ```
  </li>

  <li>
    <h4>Merge branch</h4>
    <p>Make sure you are already on the main branch that you want to merge with the new branch</p>

   ```GIT
   git merge [branch]
   ```
  </li>
</ul>

## Forking and Pull Request

### What is fork?
> We can interpret Frok as copying a repository from another person's or organization's account to our own account.

### Whay is pull request ?
> Pull Request is a term that we can interpret as a request to merge code.

### How to contribute on open source project?
>1. Read contribute rules
>2. Fork & Clone Repository
>3. Make Modifications
>4. Make Pull Requests
