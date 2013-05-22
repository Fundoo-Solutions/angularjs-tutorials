angular.module('FundooDirectiveTutorial', [])
  .directive('fundooRating', function () {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        console.log("Recognized the fundoo-rating directive usage");
      }
    }
  });
