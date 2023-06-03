const {src, dest} = require("gulp");

//Config
const path = require("../config/path.js");

// Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");






// обработка IMAGE
const icons = ()=>{
    return src(path.icons.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: 'Image',
            message: error.message
        }))
    }))
    .pipe(dest(path.icons.dest));
}

module.exports = icons;