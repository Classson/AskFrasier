

$(document).ready(function(){
  //when search is clicked run
  $('#search').click(function(){
    //get search input
    var searchTerm= $('#searchTerm').val();
    //api url with searchTerm
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType: "json",
      success: function(data){
        $('#output').html('');
        console.log(data);
      for(var i=data[1].length-1; i>=0; i--){
        $('#output').prepend("<li><a href= "+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
      }
    $('#searchTerm').val('');
      },
      error: function(errorMessage){
        alert("Error");
      }

    });

    });
    $('#searchTerm').keypress(function(e){
      if (e.which===13) {
        $("#search").click();
      }
  });
});
