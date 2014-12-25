'use strict';
var utils = require('../utils');
var yeoman = require('yeoman-generator');


var NgSuperGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.log('You called the ng-super subgenerator with the argument ' + this.name + '.');
  },

  writing: function () {
    this.template.apply(this, [
      utils.getComponentsTemplatePath('view.html'),
      this.name + '.html'
    ]);
  }
});

module.exports = NgSuperGenerator;