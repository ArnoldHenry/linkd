// business logic
function ToReview(first){
this.firstEntry = first;
}





//user interface
$(document).ready(function(){
  $("form#comments").submit(function (event) {
 event.preventDefault();

 var inputtedComment = $("input#theirComments").val();

 var newView = new ToReview(inputtedComment);

 $("ol#displayedcomments").append( newView.firstEntry + "<button class='rmve'>X </button>" + "<br>" )

 $('.rmve').on("click", function(){
   $(this).parent().remove();
 })
 $("input#theirComments").val();
});
});
