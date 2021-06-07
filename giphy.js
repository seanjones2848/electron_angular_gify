var apikey = 'dc6zaTOxFJmzC';

function GiphyController($scope, $http) {
  $scope.images = {};
  $scope.loading = true;

  $scope.updateSearch = function () {
    $http({
      method: 'GET',
      url:
        'https://api.giphy.com/v1/gifs/search?q=' +
        $scope.query +
        '&api_key=' +
        apikey,
    })
      .success(function (data, status) {
        $scope.images = data;
        console.log(data);

        $scope.loading = false;
      })
      .error(function (data, status) {
        $scope.status = 'Error getting repositories ! ' + data;
        $scope.loading = false;
      });
  };
}
