// find elements
$("#myForm").submit(function(event) {
  event.preventDefault();

  var form = $(this);
  var inputValue = form.find('input[name="$Телефон"]').val();

  if (inputValue.match(/^\+\d+$/)) {
    $.ajax({
      url: 'https://api.staticforms.xyz/submit', // url where to submit the request
      type: "POST", // type of action POST || GET
      dataType: 'json', // data type
      data: $("#myForm").serialize(), // post data || get data
      success: function(result) {
        // you can see the result from the console
        // tab of the developer tools
        // alert(JSON.parse(result));

        form.trigger("reset");

        form.find('input[type="text"]').val('');
        $("#modalOverlay").css('display', 'none');
        // $('body').css('background-color', 'lightgreen');
      },
      error: function(xhr, resp, text) {
        // $('body').css('background-color', 'red');
        alert(xhr, resp, text);
      }
    })
  } else {
    alert('Введите номер в формате: +000000000');
  };
});
