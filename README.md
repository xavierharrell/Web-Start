Web-Starter
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

## Install dependencies
```
npm install
```
```
bower install
```
This runs through all dependencies listed in `package.json` and downloads them to a `node_modules` folder in your project directory.

## Bourbon and Neat

[Bourbon](http://bourbon.io/)

- Lightweight mixin library

[Neat](http://neat.bourbon.io/)

- Semantic grid framework

Both of these are my preferred libraries to get started quickly. I've added them using NPM so it should make it easier to maintain than Bower but that could be easily be changed.

## Other helpful items

-[Classie](https://github.com/desandro/classie)
Lightweight JS library to help with CSS classes

-[GSAP](http://greensock.com/gsap)
Animation library that can target any DOM element

-[SnapSvg](http://snapsvg.io/)
SVG creation and animation library.

-[Picturefill](https://scottjehl.github.io/picturefill/)
Responsive image polyfill.