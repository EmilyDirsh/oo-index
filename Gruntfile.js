module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        svgstore: {
            options: {
                prefix: 'icon-'
            },
            default: {
                files: {
                    'wsgi/static/img/icons.svg': ['wsgi/static/icons/*.svg']
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.registerTask('default', ['svgstore']);
}
