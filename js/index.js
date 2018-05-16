$(document).ready(function(){

  $(".welcome").each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  anime.timeline({loop:false})
  .add({
    targets: '.welcome .letter',
    translateX: [40,0],
    translateZ: [0],
    opacity: [0,1],
    easing: "easeOutExpo",
    durarion: 5000,
    delay: function(el,i){
      return 500 + 30 *i;
    }
  });


  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    }
  });
});
