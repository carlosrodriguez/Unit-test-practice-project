config.init({
    qunit: {
      all: ['solution/test/*.js']
    },
    server: {
      port: 8000,
      base: '.'
    },
    lint: {
        beforemin: ['grunt.js', 'solution/test/*.js']
    },
    watch:{
      files: '<config:lint.beforemin>',
      tasks: 'lint'
    },
    jshint: {
      options: {
          evil: true,
          lintastsemic: true,
          smarttabs: true,
          sub: true
      }
    }
});

task.registerTask('default', 'server qunit lint:beforemin watch'); 