(function(){
'use strict';

angular.module('App')
    .controller('MasterController', MasterController);

MasterController.$inject = ['$scope', '$filter', '$state'];

function MasterController($scope, $filter, $state){
    let vm = this;
    $scope.$on('$stateChangeSuccess', ()=>{
        let title = $state.current.name + ' | My App';
        $('title').html($filter('capitalize')(title));
    });
}

})();
