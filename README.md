# Challenge 05 - Git & GitLab

The steps for finishing the tasks given in this Challenge are as follows:  

- Open a new project on the GitLab platform with "Create blank project/repository";
- Give the project a name - "BrainsterChallenges_DanielaDamjanoskaFE1";
- Write some project description (which is optional);
- Set visibility level to "private";
- Check the box for "Initializing repository with a README", that will allow immediate cloning of the project’s repository (this step will create the initial branch Master, and will also do the initial commit);
- Create the project;
- Clone the project locally to the computer with choosing the "clone" command and then copy the URL that is given in the "Clone with HTTPS" field. This URL represents the remote repository from which we shall clone the branches initially, and push, pull and fetch changes later; 
- Open the terminal (Git Bash) - go to the destination (folder) where the git repository should be initialized; 
- Write the command "git clone https://gitlab.com/daniela-damjanoska/brainsterchallenges_danieladamjanoskafe1.git" and then the name of the directory/folder in which we want to have this project;
- After the cloning is done, we will have our project locally. There is no need for issuing the "git init" command since the project has already been initialized as a Git repository in GitLab, with a Master branch and a first commit (README file);
- Write the command "git checkout -b Challenge-01-HTML" - this command will create a new branch named "Challenge-01-HTML" and will automatically switch to the new branch;
- We can write the command "git status" to check the status and to make sure that we are on the correct location (branch), in our case that is "Challenge-01-HTML" branch that is green and has "*" in front of the branch name;
- Also we can issue "git branch" or “git branch –v” to see all the branches of the project;
- Copy the files and folders that are related to Challenge 01 - HTML and add it to the project folder;
- Check the status with the "git status" command - this will give us the files and folders that are newly created or modified in our project folder and these are the files that have to be added to the staging area;
- Add the files in the staging area with "git add ." - means add all the files in the current folder to the staging area;
- Write "git commit -m "Challenge 01 - HTML solved" - this will commit all the changes and will move the files from the staging area to the local repository; 
- Push this branch to the GitLab with the command "git push --set-upstream origin Challenge-01-HTML" (or using the command "git push -u origin Challenge-01-HTML). Here we cannot use only "git push" command because we don't have this new branch "Challenge-01-HTML" in the Git repository on GitLab;
- After this process we can see the new branch "Challenge-01-HTML" in GitLab;
- Write "git checkout master" command to go back to the master branch;
- Create a new branch "Challenge-02-CSS" with "git checkout -b Challenge-02-CSS" in the terminal and repeat the same process from above for the second branch;
- The overall process will be the same for all the following new branches. 

