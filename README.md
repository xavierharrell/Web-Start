web-starter
============

Starter Gulp + Browserify project. This gets me off the ground running. Will add more instructions later.

Huge thanks to [Gulp-Starter](https://github.com/greypants/gulp-starter) and Dan Tello from Viget.

Includes the following tools, tasks, and workflows:

- [Browserify](http://browserify.org/) (with [browserify-shim](https://github.com/thlorenz/browserify-shim))
- [Watchify](https://github.com/substack/watchify) (caching version of browserify for super fast rebuilds)
- [SASS](http://sass-lang.com/) (super fast libsass with [source maps](https://github.com/sindresorhus/gulp-ruby-sass#sourcemap), and [autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer))
- [CoffeeScript](http://coffeescript.org/) (with source maps!)
- [BrowserSync](http://browsersync.io) for live reloading and a static server
- [Image optimization](https://www.npmjs.com/package/gulp-imagemin)
- Error handling in the console [and in Notification Center](https://github.com/mikaelbr/gulp-notify)
- Shimming non common-js vendor code with other dependencies (like a jQuery plugin)

### Install npm dependencies
```
npm install
```

####WARNING
Install Bourbon & Neat. **When you run gulp**, an error will throw asking for Bourbon.

[Bourbon](https://github.com/thoughtbot/bourbon) Instructions on how to install Bourbon

[Neat](https://github.com/thoughtbot/neat) Might as well throw this in also.


This runs through all dependencies listed in `package.json` and downloads them to a `node_modules` folder in your project directory.

