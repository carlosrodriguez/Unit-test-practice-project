config.init({
	lint: {
      files: ['grunt.js','js/script.coffee']
    },
    watch:{
      files: '<config:lint.files>',
      tasks: 'default'
    },
    jshint: {
      options: {
        evil: true,
        lastsemic: true,
        smarttabs: true
      }
    }
});

task.registerTask('default', 'lint:files watch'); 