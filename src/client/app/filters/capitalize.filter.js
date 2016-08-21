(function(){
'use strict';

angular.module('App')
    .filter('capitalize', CapitalizeFilter);

CapitalizeFilter.$inject = [];

function CapitalizeFilter(){
    return function(string){
        return string.split(' ')
            .map(word=>word[0].toUpperCase() + word.slice(1, word.length))
            .join(' ');
    };
}

})();
