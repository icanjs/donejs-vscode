var generator = require('yeoman-generator');

module.exports = generator.Base.extend({
  initializing: function () {
    this.pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
  },

  writing: function () {
    this.props = {};
    this.props.packageName = this.pkg.name;
    this.props.scriptArgs = this.pkg.scripts.develop.replace('done-serve ', '').split(' ');

    this.log('Copying file to ' + this.destinationPath(this.props.name + '.js'));
    this.fs.copyTpl(
			this.templatePath('launch.json'),
			this.destinationPath('.vscode/launch.json'),
			this.props
		);
  }
});
