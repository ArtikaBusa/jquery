var total_no_of_students = 3;
$( document ).ready(function() {
  function update_summary() {
    var total = 0;
    var min = 300;
    var max = 0;
    var student_count = 0;
    $(".total").each(function( index ) {
      student_count = student_count + 1;
      student_total = (parseInt($(this).text()) ? parseInt($(this).text()) : 0);
      if(max < student_total) { max = student_total }
      if(min > student_total) { min = student_total }
      total += student_total;
    });
    $("#total").html(total);
    $("#average").html((total/3).toFixed(2)+"%");
    $("#min").html(min);
    $("#max").html(max);
  }

  function assing_change_event(){
    $(".sum").change(function() {
      id = $(this).data("id");
      sum = (parseInt($("#english_" + id).val())  ? parseInt($("#english_" + id).val()) : 0) +
                 (parseInt($("#gujarati_" + id).val()) ? parseInt($("#gujarati_" + id).val()) : 0) +
                 (parseInt($("#hindi_" + id).val())     ? parseInt($("#hindi_" + id).val()) : 0);
      $("#total_" + id).html(sum);
      $("#average_" + id).html((sum/3).toFixed(2) + "%");
      update_summary();
      $("#record").removeClass("sum");
    });
  }

  assing_change_event();

  $(".add").click(function(){
    total_no_of_students += 1;
    var markup =  "<tr>" +
                    "<td align='center'>" + total_no_of_students + "</td>" +
                    "<td><input type='text' name='name' value=''/></td>" +
                    "<td><input type='text'  id='english_" + total_no_of_students + "'  name='english_1'  value='' data-id='" + total_no_of_students + "' class='sum'/></td>" +
                    "<td><input type='text'  id='gujarati_" + total_no_of_students + "' name='gujarati_1' value='' data-id='" + total_no_of_students + "' class='sum' /></td>" +
                    "<td><input type='text'  id='hindi_" + total_no_of_students + "'    name='hindi_1'    value='' data-id='" + total_no_of_students + "' class='sum' /></td>" +
                    "<td align='right'><output id='total_" + total_no_of_students + "'  class='total' /></td>" +
                    "<td align='right'><output id='average_" + total_no_of_students +"' class='average' /></td>" +
                  "</tr>";
    $("#record").append(markup);
    $("#no_of_student").html(total_no_of_students);
    assing_change_event();
  });

  $(".remove").click(function(){
    $('#record tr:last').remove();
    total_no_of_students -= 1;
    $("#no_of_student").html(total_no_of_students);
    update_summary();
  });

  $("#small").click(function(){
  //   small();
  // });
     $("body").css({"font-size": "100%","background-color":"red"});
     $("input").css({"font-size": "100%"})
     $("button").css({"font-size": "100%"})
     $("footer").css({"font-size": "100%"})
  // var currentSize = $("body").css('font-size');
  // var current = parseFloat(currentSize)+1.5;
  // $("body").css('font-size', current);
  // function small(){
  //   var $affectedElements = $("body");
  //   $affectedElements.each( function(){
  //       var $this = $(this);
  //         $this.css( "font-size" , parseInt($this.css("font-size"))+2);
    });

  $("#medium").click(function(){
    $("body").css({"font-size": "150%","color":"red","background-color":"#ffd280"});
    $("input").css({"font-size": "150%"})
    $("button").css({"font-size": "150%"})
    $("footer").css({"font-size": "150%"})
  });
  $("#large").click(function(){
    $("body").css({"font-size": "200%","background-color":"red","color":"blue"});
    $("input").css({"font-size": "200%"})
    $("button").css({"font-size": "200%"})
    $("footer").css({"font-size": "200%"})
  });

  // $("#red").click(function(){
  //   $("body").css({"color" : "red"});
  // });
  // $("#blue").click(function(){
  //   $("body").css({"color" : "blue"});
  // });
  // $("#yellow").click(function(){
  //   $("body").css({"color" : "yellow"});
  // });
});
