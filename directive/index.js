'use strict';
var utils = require('../utils');
var yeoman = require('yeoman-generator');


var NgSuperGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    utils.setModuleComponentNames(this, this.name);
    this.log('You called the ng-super subgenerator with the argument ' + this.name + '.');
  },

  file: function () {
    this.template.apply(this, [
      utils.getComponentsTemplatePath('directive.js'),
      utils.getComponentFilePath(this.module, this.component),
    ]);
  }
});

module.exports = NgSuperGenerator;