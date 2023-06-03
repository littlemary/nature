const {watch, series, parallel} = require("gulp");
//Config
const path = require("./config/path.js");
const browserSync = require('browser-sync').create();
 

//Server
const server = () =>{
    browserSync.init({
        server:{
            baseDir: "./public/"
        }
    });
}
// Tasks
const clear = require('./gulptask/clear.js');
const html = require('./gulptask/html.js');
const scss = require('./gulptask/scss.js');
const js = require('./gulptask/js.js');
const img = require('./gulptask/img.js');
const icons = require('./gulptask/icons.js');
const font = require('./gulptask/font.js');

// Watching
const watcher = () =>{
    watch(path.html.watch, html).on("all", browserSync.reload);
    watch(path.scss.watch, scss).on("all", browserSync.reload);
    watch(path.js.watch, js).on("all", browserSync.reload);
    watch(path.img.watch, img).on("all", browserSync.reload);
    watch(path.icons.watch, icons).on("all", browserSync.reload);
    watch(path.font.watch, font).on("all", browserSync.reload);
}

exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.icons = icons;
exports.font = font;

//Assembly
exports.default = series(
    clear,
    parallel (html, scss, js, img, icons, font),
//    parallel (pug, css, js, img, font),
    parallel (watcher, server)
);