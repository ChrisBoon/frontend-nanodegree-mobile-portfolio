module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //--Javascript--//

        ////run jsHint for code quality check:
        jshint: {
              myFiles: ['app/**/*.js']
        },

        uglify: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: 'app/',
                    src: ['**/*.js'],
                    dest: 'build/'
                }]
            }
        },

        //--Styling--//

        ////output converted scss as css to build folder:
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'app/',
                    src: ['**/*.scss'],
                    dest: 'build/',
                    ext: '.css'
                }]
            }
        },
        ////css optimizations:
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({browsers: ['last 3 versions']}), // add/remove browser prefixes
                    require('css-mqpacker')({autoprefixer: false, zindex: false}), // combine identical media queries (skipping autoprefixer as included above for addition as well as removal, skipping zindex in case JS relies on z-index values)
                    require('cssnano')() //minify and other optimizations
                ]
            },
            dist: {
                src: 'build/**/*.css'
            }
        },

        //--HTML--//
        ////output minified HTML to build folder
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'app/',
                    src: ['**/*.html'],
                    dest: 'build/'
                }]
            }
        },

        //--Images--//
        ////output losslessly compressed images to build folder
        imagemin: {
            dist: {
              files: [{
                expand: true,
                cwd: 'app/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'build/'
              }]
            }
        },

        //--Server--//
        ////run a local server to test development
        connect: {
            build: {
                options: {
                    port: 9001,
                    keepalive: true,
                    base: 'build'
                }
            }
        },

        //--Watch--//
        //TODO: Add more watch tasks - images?
        watch: {
            scripts: {
                files: ['app/**/*.js'],
                tasks: ['jshint', 'uglify'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
            css: {
                files: ['app/**/*.scss'],
                tasks: ['sass','postcss'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            html: {
                files: ['app/**/*.html'],
                tasks: ['htmlmin'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin')
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', [
        'jshint',
        'uglify',
        'sass',
        'postcss',
        'htmlmin',
        'imagemin',
        'connect:build',
    ]);

};