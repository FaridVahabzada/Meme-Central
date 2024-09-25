![Brand Logo](/public/img/logo.png) 
 
# Application Name: **Meme Central**
## Purpose: **To serve memes (and their details) in an organized way from an external API address to guest (logged in) users with a possibility to search**
### Author: **Farid Vahabzada**
---

### How to install and run our web app

Not any special installation processes are required other than downloading the whole repository locally and starting the web app with the **npm start** command in VS Code terminal & opening the [http://localhost:3000/](http://localhost:3000/) page in any browser.\
In addition to [the main page](http://localhost:3000/) at this address, we got also [meme overview](http://localhost:3000/memeoverview), [meme details](http://localhost:3000/memedetails) & [login](http://localhost:3000/login) pages, which accessed or viewed depending on the authorization status.\
**P.S.** We used and recommend using Google Chrome for avoiding any functionality disruptions.

### Files and their location

We created new folders called **config** & **data**, where the former keeps data about API URL in the form of a configuration variable and the latter got all the information about the users, memes and viewed meme' details.\
Additionally we got all the static images, JavaScript and CSS files organized inside the **public** folder respectively.\
Other than forementioned new folders, our repository structure is the same with newly created files placed accordingly.

### Any technologies & external resources used in development

All the packages installed can be accesed from VS Code terminal by the **npm list** command. There shoudn't be any issues with the dependencies as they come preinstalled with this repository in the **node_modules** folder.\
All the packages installed with the **npm install _PACKAGE_NAME_** command. After accessing the package version with the **npm outdated** command, we found out that the BootStrap version available wasn't what the client asked for. So the **npm install _PACKAGE_NAME_** command changed to the **npm install _PACKAGE_NAME@VERSION_** command./
The technologies / external libraries used are given below:
* NodeJS with ExpressJS and the EJS template engine
* Bootstrap version 5.2.3
* JQuery
* PassportJS
* passport-local package
* axios package
* config package
* cookie-parser package
* express-session package
* request package
* morgan package
* http-errors package
* debug package

### Further recommendations and future plans

One friendly disclaimer for users would be keeping in mind that all the session data **WILL** be loast if logging out is attempted.\
Two bugs which weren't fixed and left for the future app versions, as they do **NOT** cause any functionality problems, are: 
+ A single meme API call is made **ONLY** when server is **re**started.
+ After the "Search" button is clicked, input search text value is cleared and user needs to click the "Search" button **AGAIN** for getting the original set of 20 memes.
