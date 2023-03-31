# Node.js as a Build Tool & Using npm

## npm & Node as a Build Tool

### Beyond Node Web Servers

As of now, we obviously learned a lot about node and how to write node code and build web servers or web applications with node because that really is its main thing.

But node and npm, the package manager we get for free when installing node.js can also be used as a build tool, so as a tool that runs utility scripts on our computer and can help us with building, any, mostly javascript driven project and that does not have to be a web application or a server side web application if it is one. It could be a frontend web application too like the react app we learned during the development, the frontend for the rest and the GraphQL API.

We'll briefly dive into that and we'll see why that is the case, what exactly npm is and how we can use it and how we can use node as a build tool.

## npm & Node.js

### Two for the Price of One

It's important to understand that when we install node.js, we get two tools or two things for the price of one. We get node.js and we get npm, node's package manager and remember that this was the tool we used for installing packages into our project or when I commit my project, like with all the code, that we could re-install all dependencies required by that project, even though I did not share the node modules folder because we have that package.json file where we see all the dependencies.

So node.js is the programming language we used to execute code, to execute javascript code based on that node.js runtime with all the features that gives us and especially important when we look at it from a build tool perspective, we have to remember that with node.js, we were able to interact with files.

npm as we saw is node's package manager, so we manage packages with it and with that, we can install packages, download them, manage their versions and so on and we can also run scripts.

We did that with npm start for example to start our server so that we don't have to write or type the full command for that.

Let's have a closer look at these two pieces and see what else they can do or how that can be helpful to use them in the context of build tooling, in the context of utility scripts and not in the context of spinning up a web server.

## Using npm

### Understanding npm

Let's first of all understand npm a bit better, it's node's package manager as we learned and in the end it's a CLI, a Command Line Interface. We always used it from the command line, from the terminal, by running npm and then some command, mostly npm install during the development.

The idea behind packages or tools like npm and every programming language has a similar concept, is that we might have some isolated functionality, some code that we wrote or that we came up with that does something useful, let's say it generates a random number.

Now we can use that in our web application but maybe we want to use it in other applications as well, because this isolated functionality does not depend on our business logic in the project we're creating or maybe we want to share it with the public.

Well if we want to share it internally or externally, we can put it into a package with the help of npm. We can use npm not just to install packages, but also to create and share packages, through that npm repository which is a cloud service where we don't have to pay for where we can host packages we created and this is also a service where we will in the end fetch packages from with the npm install command.

So in this repository which is managed globally, we'll find thousands of packages obviously and if we now have some node project, we can use any of that, we can use any of those packages with the npm install command through that CLI and that is how we add packages to our project, no matter if that is a package shared by us and we can also have private repositories or private packages on npm, that is something we do have to pay for, but we can always use public packages and share packages with the public. That's the idea behind npm.

Let's have a closer look at the official npm repository page and the available commands we can use. We can visit npmjs.com, that is the official page of npm and there we can search for packages, for example we could search for express here which is of course a package we used, the express framework and then we see all kinds of packages that kind of were found for that, maybe packages that use express, maybe also of course the express package itself.

And if we click on that, we find some quick docs, we see the versions that were released here, we can see the different versions we could install through npm, we can target a specific version by the way by going to our terminal and there with npm install, we can choose the package and then an @ sign and then a specific version number.

For example we could choose 4.16.3 by typing for 4.16.3 and now we would install that version into our project. If we select no version, the latest one is picked by default, that's just a little side note.

So we can see that version history, we can see which other packages this package relies on and these packages will be installed for we automatically when we install expressjs. So these will also end up in node modules as will the dependencies of these packages and that is why we quickly end up with a big node modules folder because we have a lot of dependencies of dependencies of dependencies.

We also see other things like the official home page, the github repository, so the repository where we can find the source code for this package and so on.So this is really useful.

Now if we want to learn more about the npm command though, so what else we can run besides install or how we can configure install, for example with --save versus --save dev to install a production or a development dependency, if we want to learn more about that, the official docs are of course the right place. There if we dive in, we can learn way more about npm and diving deeply into that would really be helpful, but since npm creating and managing packages, that is a topic on its own not closely related to nodejs the language, just an additional feature we get for free.

Here we can learn way more about that and here on this page if we scroll down a bit further, we'll also see all available commands we could run and then if we click on one of them, for example uninstall, we also see how we may use it. Here we see detailed instructions on how we may configure it, for example that we can run it in global mode to install a package on our system and not just in a project or that we can of course also install it with the --save flag --save-dev or --save-prod which is the same as just --save in the end.

So there we see all the ways of configuring that or running that command in different ways and if we want to learn way more about that and for most cases, we just need npm install --save or --save-dev or -g, but if we want to learn way more, of course these official docs are the place to go.

It is worth pointing out that we also can get help here locally, when we type npm help here, we also get instructions on the available commands we may run and we can also get help on a specific command.

So if we run npm install --help here or just -h, then we see how we may run this command and also which options we have to add additional flags.
However these are just the common options, not all options, for the full docs of course, we should dive into the official documentation here. The commands we can run here especially installing are one powerful thing npm allows us to do. We can add any package we want to our project.

Another important feature is that if we click on Using npm here, we can run scripts with npm and that generally is related to that package.json file we get when we put a project under control of npm which we do with help of the npm init command, we also use that during the development, that will ask us a couple of questions and then give us a package.json file which we can use to configure a project and there we can not only keep a list of our dependencies, we can also add certain scripts and we can run these scripts either with npm start to run the start script or npm run and then any script name we configured in there, and that is very powerful especially when it comes to using npm and nodejs to build projects.

It is something we can best see in the react application we worked with during the development. Here in that application and there if we had a look at that package.json file, we see that scripts area and there we see a couple of scripts which we can run, for example start with npm start but that's a special case, all other scripts with npm run and then for example, build or eject and then these scripts are executed.

Now these scripts actually use a third party package, so a dependency which was installed, react scripts we see it here in the dependencies list and then that dependency holds the code that will actually do something and that is the next step we will come back to with nodejs being able to run on our machine and not being limited to spinning up a web server.

## Versioning in package.json

### Versioning in package.json

When installing a package with npm install --save or --save-dev (or --save-prod, which replaces --save), we end up with entries in our package.json file, that look something like this:

"express": "^4.16.3"
What does the ^ mean?

We can learn about all available version annotations/ syntaxes here: https://docs.npmjs.com/misc/semver#versions

This post on Stackoverflow provides a great summary: https://stackoverflow.com/a/25861938

## What is a Build Tool?

### Remember: Node can execute any .js file

Now that we briefly walked through npm and what we use it for, let's bring something back into our memory. Nodejs, during the development was primarily used to spin up a web server and write code that runs on the server side and that is indeed the main thing we do with nodejs when we write our own nodejs apps.

But we have to remember that theoretically we can run any javascript code with nodejs and specifically we can also interact with our local file system, we can read and write files after all and that opens us a new door, a new opportunity.

We could use nodejs to execute utility scripts that for example parse certain files, manipulate the content and output the manipulated content back into the original file or into a new file and that is the idea behind so-called build tools and that is something nodejs also is capable of being used for.

### What is a "Build Tool" and Why?

And it's important pointing out here that when we talk about build tooling and build workflows, we mostly talk about frontend web development, like for example with our react application we built here. This react application is not a nodejs app but still we use a package.json file and we use npm to install packages. These packages are all holding code that runs in the browser though and in the end, the code we write here in the source folder will also end up in the browser, but let me point out that the way we write it here would not run in browsers, at least not in all browsers.

For example we are splitting our javascript code here across multiple files and we're using es module import syntax for merging these files together. Now this does not natively work in all browsers, only in very modern browsers and therefore this is indeed not the code that will end up in the browser. This is the code we work with but we use a build tool, a build workflow which is started during development with npm start and for production with npm run build, this build workflow will take our code and kind of merge it together and transform it into code that runs in older browsers too and that is also minified and optimized because that's also important. We use build tools to optimize our code, we might write code that looks like this and that is indeed how our code looks like in the react we just saw.

But as we noticed, this does not run in all browsers and even if it would, it would be very large in the browser since all the code has to be downloaded by our users before it runs and that's different on the server, there the code sits on the server and that's it, in the browser the code has to be downloaded and therefore we want to keep it as small as possible so that our app and your javascript code in the browser starts as quickly as possible.

Therefore we want to end up with optimized code and the idea here is that we also have code that is not only too big but that is using next gen features, like here the spread operator or arrow functions and we want to convert this to code that runs an older browsers too and that is like an example optimized code which is shorter, we use less characters and therefore the code is shorter and it also does not use next generation javascript features.

And that is the idea and as we saw, it's primarily important for frontend development because there, not all browsers support the next features and we want to keep our code as small as possible, that does not really matter that much on the server side.

So that is the idea and that is what we can use node and npm for, because if we go back to our react project, we want to convert that code into optimized version and if we run npm run build in our project here, we actually start such a production workflow which means now it's creating an optimized production bundle and this is all done by npm which started the script and by node.

And here it completed and now indeed if we look into this build folder, this now holds our app code, so the code we wrote in source but in an optimized way. There in the static folder, we have javascript code and if we look into that, this in the end is our code, just minified a lot and therefore it's pretty hard to read but it's our code and this code is not just very condensed and only contains current gen javascript logic, so logic that runs in older browsers too. This is of course not the code we would like to write, it's very hard to dig through that but it is the code we want to output and we use npm and node to transform our code.

That's the idea behind build tooling and now let's have a closer look at how npm and node can help us with that.

## Using Node.js in Build Processes

### Using Node.js in Build Processes

So we want to end up with optimized code and again this is mostly important for frontend projects. npm is useful because we can install packages, we can manage this project with our package.json file and we can of course install packages that run in the browser too. It's our duty as a developer to ensure that we don't try to install expressjs into this project because we couldn't use any functionality from expressjs in the browser but we know as a frontend developer which packages we can use and we want to use, we find that out with research and so on and then we can install these packages and we can import them in our files with a slightly different syntax, that just happens to be primarily used frontend development, import export syntax with that es module style because that is actually the style that is supported in modern browsers too and then this is done by npm. We install the packages and now we also want to start a script with npm.

Now npm's work is over and nodejs takes over, the react scripts package here, let's look into that. And for that we can look into our node modules folder, run npm install in case we don't have that because that will install all dependencies that are listed in our package.json file and now in node modules, let's search for that react scripts package and we can see by the list that is very long, that all packages have a lot of dependencies which in turn have dependencies which is why we end up with a lot of packages being installed here.

Now we're in the react area though and there, we find react scripts. Now there we also have a package.json file because if we share a package we also need that, we need to add some extra information to the package.json file then and we can learn all about creating and sharing packages in the official npm docs if we're interested and there we will also find like the entry point that is executed which is in the bin folder, the react scripts js code here.

This is in the end the code that will be executed and now here's something important, this code well in the end be executed by nodejs because the idea behind build workflows is of course that it runs on our computer before we deploy our optimized code, before we upload our optimized code to some server. So this code will not run in the browser or anything like that, this code will run on our local machine and therefore it will be executed by nodejs. This is also the case because in the end this code will kickstart, other scripts will kickstart other code and it will kickstart code that will also work with our local file system.

For example in the scripts folder, we find the build.js file and there, we will see what else it does and now this is actually a very complex build workflow, in the end this uses a tool called webpack which is used heavily in frontend development to orchestrate our build workflow and to compile our different files and unlock next gen features and make sure that we can handle the features correctly, again by using also some other tools like babel but that would lead too far here.

The idea is here we are using nodejs, we can also tell that we are by the fact that we now have a different import export syntax and we are loading different packages here, we're running them and some of these packages will in the end also pick up our files, so our local source code we have written here in the source folder.

We'll parse them and we'll transform the content in there, pull all of them together because we don't want to have multiple files in the end but only very few files with one main file, we'll pull all that code together and then also rewrite our code in a way that also runs in older browsers and this is all done by a couple of packages which are used behind the scenes here, which are installed by npm and then the code in that packages is executed through nodejs.

That was a lot of talking about that but we really want to get that into our heads because it's so important that we understand that we can use nodejs to execute any javascript code which uses nodejs features of course on our machine and that it's therefore also used to run utility scripts and we could also write our own utility script that like calculates our taxes but here, the utility scripts actually take our source code and then transform it as defined by the packages we use because we don't want to write all that build tooling code on our own. And that is another important area where we can use nodejs and if we want to dive into that area, actually a lot of the knowledge we learned during the development, like for example when it comes to work with files will be useful but we will also have to pick up new skills because we need to know all the ins and outs about working with files, managing large chunks of data efficiently and so on.

We don't need to create a web servers or anything like that,we don't need to validate user input and that of course was the main topic of this documentation, but this is a different area of nodejs that we can also dive into if we are interested and especially npm is something that is worth having a look at, having a look at the commands we got there so that we throughly understand what we can use npm for and if we want to learn how to distribute our own packages for example, the getting started guide there also teaches us that, how to publish and update packages and so on.

So check these resources out if that's interesting to you, I found it important to mention that this also exists and is important area where nodejs and npm are being used.

## Useful Resources & Links

### Useful Resources:

- Official npm Docs: https://docs.npmjs.com/
- Learn more about Webpack (a build tool using Node.js): https://academind.com/learn/webpack
