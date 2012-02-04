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
    },
    coffee:{
      file: 'js/script.coffee'
    }
});

task.registerBasicTask('coffee', 'Check coffeescript for lint', function(data, name) {
  // Concat specified files.
  var files = file.expand(data);
  task.helper('coffee', files);

  var sys = require('util')
  var exec = require('child_process').exec;

  var done = this.async();

    child = exec("coffeelint -f js/config.json js/script.coffee", function (error, stdout, stderr) {
    if(stdout != ""){
      log.writeln('File "' + name + '" is lint free.');
       done();
    }else{
      log.writeln('There are errors on the file: '+stdout);
       done(false);
    }   
  });

});

task.registerHelper('coffee', function(files) {
  var sys = require('util')
  var exec = require('child_process').exec;
  //function puts(error, stdout, stderr) { sys.puts(stdout) }
  //var me = exec("coffeelint -f js/config.json script.coffee", puts);

  log.writeln('Making coffee...');

  child = exec("coffeelint -f js/config.json js/script.coffee", function (error, stdout, stderr) {
    return(stdout == "Lint free!") ? true : false;    
  });
});

task.registerTask('default', 'coffee watch'); 