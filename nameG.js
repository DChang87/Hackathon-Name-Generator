angular.module('nameApp',[])
  .controller('nameGenController',function(){
    var NameGen = this;
    NameGen.returnName='';
    NameGen.lines = [ //this will eventually be stored as a txt file
      '!#!#!: The Return of the %^%&',
      '!#!#!: The Revenge of the %^%&',
      '!#!#!: %^%& Awakens',
      '!#!#!: Attack of the %^%&',
      '!#!#! Into the %^%&',
      '!#!#! Beyond',
      '!#!#!: The Wrath of the %^%&',
      '!#!#!: The Search for the %^%&',
      '!#!#!: The Underdiscovered %^%&',
      '!#!#!: The %^%& Strikes Back',
      '!#!#!: Age of the %^%&',
      '!#!#!: The Rise of the Planet of the %^%&',
      '!#!#!: Reloaded',
      '!#!#!: Back to %^%&',
      '!#!#!: A %^%& Odyssey',
      '!#!#!: Escape from the Planet of the %^%&',
      '!#!#!: The Final %^%&',
      '!#!#!: %^%& Assemble',
      '!#!#!: Brave %^%&',
      '!#!#!: %^%& of Tomorrow',
      '!#!#!: %^%& Ascending',
      '!#!#!: The %^%& Rises',
      
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
