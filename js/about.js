$(document).ready(function(){
  $("form#commentform").submit(function(event){
      event.preventDefault();

    var commentarray = [];
    var commentObj = {};

    if (localStorage.linkdstorage) {
      commentarray = JSON.parse(localStorage.linkdstorage);
    }

    var comments = $('#txtarea').val();
    var btn = document.getElementById('commentbtn');
    var disp = document.getElementById('mydisplay');

    commentObj = {newcomment:comments}
    commentarray.push(commentObj);
    localStorage.linkdstorage = JSON.stringify(commentarray);


    for (var i = 0; i < commentarray.length; i++) {
        var md = commentarray[i]['newcomment'] +"<br>";
    }
    $(disp).append(md);
  });
});
