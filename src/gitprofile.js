$(document).ready(function() {

  $('.gitprofile').on('keyup', function(e) {


    var url = 'https://api.github.com/users/' + $('input.username').val();

    var template = $('template').html();

    $.get(url, function(info) {
      $('.container').html(Mustache.render(template, info));
    });
  });
});
