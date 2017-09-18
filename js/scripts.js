$(document).ready(function(){
  $("#formOne").submit(function(event){
    // var person1Input = $("input#person1").val();
    // var person2Input = $("input#person2").val();
    // var person3Input = $("input#person3").val();
    // var person4Input = $("input#person4").val();

    var inputs = ["person1", "person2", "person3", "person4"];
    inputs.forEach(function(input){
      var userInput = $("input#"+ input).val();
      $("."+ input).text(userInput);
    });

    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".person3").text(person3Input);
    // $(".person4").text(person4Input);

    $("#story").show();

    event.preventDefault();

  });
});
