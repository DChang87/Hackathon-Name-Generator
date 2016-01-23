angular.module('nameApp',[])
  .controller('nameGenController',function(){
    var NameGen = this;
    NameGen.returnName='';
    NameGen.lines = [
      '!#!#!: The Return of %^%&',
      '!#!#!: The Revenge of the %^%&',
      '!#!#!: %^%& Awakens',
      '!#!#!: Attack of the %^%&',
      '!#!#! Into %^%&',
      '!#!#! Beyond',
      '!#!#!: The Wrath of %^%&',
      '!#!#!: The Search for %^%&',
      '!#!#!: The Underdiscovered %^%&',
      '!#!#!: %^%& Strikes Back',
      '!#!#!: Age of %^%&',
      '!#!#!: The Rise of the Planet of %^%&',
      '!#!#!: Reloaded',
      '!#!#!: Back to %^%&'
      ];
    NameGen.generated = [];
    NameGen.clear = function()
    {
      NameGen.generated = [];
    }
    NameGen.generate = function()
    {
      var t =NameGen.lines[Math.floor(Math.random()*NameGen.lines.length)];
      NameGen.returnName=t.replace('!#!#!', NameGen.name).replace('%^%&',NameGen.supp);

    }
});
