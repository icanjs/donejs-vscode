var path = require('path');
var helpers = require('yeoman-test');
var assert = require('yeoman-assert');
var fs = require('fs-extra');

describe('donejs-vscode', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../default'))
      .inTmpDir(function(dir){
        fs.copySync(path.join(__dirname, 'test-package.json'), path.join(dir, 'package.json'));
      })
      .on('end', done);
  });

  it('should write .vscode/launch.json file', function() {
    assert.file(['.vscode/launch.json']);
    assert.fileContent('.vscode/launch.json', /[ "--develop", "--port", "8080"]/);
  });
});

describe('donejs-vscode with auth', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../default'))
      .inTmpDir(function(dir){
        fs.copySync(path.join(__dirname, 'test-auth-package.json'), path.join(dir, 'package.json'));
      })
      .on('end', done);
  });

  it('should write .vscode/launch.json file', function() {
    assert.file(['.vscode/launch.json']);
    assert.fileContent('.vscode/launch.json', /[ "--develop", "--port", "8080", "--auth\-cookie", "feathers\-jwt", "auth\-domains", "canjs.com,donejs.com"]/);
  });
});
