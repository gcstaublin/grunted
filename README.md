# grunted
Experimenting with a modular grunt setup

## What this is
This is an attempt at creating a modular Grunt workflow where all the tasks are small discrete, invidual tasks. The idea is that for any given task, you can get in and get out without wading through a Gruntfile.js file that is a couple hundred lines deep.

## Assumptions
1. You have NPM and Node.js installed on your computer
2. You have the Grunt Cli tool installed

## How do I setup this environment?
1. Download this repo.
2. Add ```package.json```, ```Gruntfile.js``` and the ```tasks``` folder to the top level of your project
2. Still, at the top level of your project type ```npm install grunt --save-dev``` in your terminal and hit return. This install Grunt locally within your project. After this command runs, you should see a ```node_modules``` folder, which should have a ```grunt``` folder inside that.
3. Next, type ```npm install``` the terminal. This installs all the dependencies for the tasks that are located in the the tasks folder. Inside that same ```node_modules``` folder there should a bunch of new stuff.
4. Type ```grunt``` in the terminal. Nothing will happen, but you should see that grunt is running in your terminal window.
5. Type ```Cntrl C``` to quit the grunt process.
6. Make website.
