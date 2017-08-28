module.exports = function(grunt) {
    // configure grunt
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // sass compilation
        sass: {
            dist: {
                files: {'style.css': 'style/main.scss'}
            }
        },
        
        // configure watch for auto-updating
        watch: {
            css: {
                files: 'style/**/*.scss',
                tasks: ['sass']
            }
        },

        // remove generated files
        clean: ['style/main.css']
    });

    // load grunt plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // register tasks
    grunt.registerTask('default', ['sass']);
};
