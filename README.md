# Angular Express Boilerplate
This boilerplate is meant to help you get your MEAN app off the ground fast.  It comes with a robust gulpfile with a series of tasks to make building your app a snap.

## Quickstart

1. Make sure gulp is installed globally 

    ```
    npm install -g gulp # may require elevated access (i.e. sudo)
    ```
    
2. Open up the terminal of your choice and enter the following commands:

    ```
    git clone https://github.com/wbadart/angular-express-boilerplate app &&\
    cd app &&\
    npm install && \
    gulp
    ```

## Gulp Tasks
These tasks will help you manage the build process of your MEAN app.  Please note that the `NODE_ENV` environment variable will affect how some of these tasks (and also the express server) behave.

With `NODE_ENV==="PROD"`:

- client JS and CSS will be minified
- express server will listen on 0.0.0.0:80

And with `NODE_ENV!=="PROD"`:

- client JS and CSS will not be minified, sourcemaps will be written
- express server will listen on 127.0.0.1:3000

### default
Runs the tasks **build**, **serve**, and **watch**.  This gives you a single entry point which will run every task in the file.

#### build
Runs the tasks **compile** and **move**.  The purpose of this task is to compile your app without running any continuous processes (servers, watchers, etc.).

##### compile
Runs the tasks **compile:js** and **compile:sass**.  This consolidates both compilation processes into a single task in case you ever need to compile without moving any assets or html.

###### compile:js
Runs the tasks **compile:js:server**, **compile:js:client**, and **compile:js:vendor**.  These tasks perform the appropriate compilations, concatenations, and minifications for the express server, angular client, and third party Javascript resources respectively.

###### compile:sass
Compiles `master.scss` into `dist/client/assets/master.css` so all styles are accessible to the client from a single stylesheet.  Depending on the `NODE_ENV`, sourcemaps will be written and minifications performed.

#### serve
Executes `nodemon` on the top-level server file (`dist/server/server.js`).  Will restart the server when the `dist/` file is updated (e.g. after `gulp build`).

#### watch
Runs `gulp-watch` on each of the file groups with a designated low-level task and executes the respective tasks when a member of the file group in `src/` is modified.

#### clean
Removes the `dist/` directory and lets you build from a *clean* slate.

## License
This boilerplate is licensed under [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.txt).

