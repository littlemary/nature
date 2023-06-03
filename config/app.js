module.exports = {
    htmlmin: {
        collapseWhitespace: true
    },
    webpack: {
        mode: "development"
        //mode: "production"
    },
    imagemin: {
        verbose: true
    },
    fonter: {
        formats: ["ttf", "woff", "eot", "svg" ]
    }
}