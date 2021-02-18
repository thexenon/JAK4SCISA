  function switchView(view){
    $.get({
      url:view,
      cache:false,
    })
    .then(function(data){
      $("#container").html(data)
    });
  }