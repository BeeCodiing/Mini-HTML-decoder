function decrypt() {
  // Get code input
  var code = $( "#decode" ).val();
  // If user typed the entire html code
  if (code.includes('<script')) {
    var js1 = code.split('<script type="text/javascript">');
    try {
      var js = js1[1].split('</script>');
    }
    catch(err) {
      alerta("Please remove the html code!");
      return false;
    }
    // This will only get the javascript code
    code = js[0];
  }
  
  try {
    var tempW = window;
    window = {};
    eval(code);
    window = tempW;
  } catch(err) {
    alerta(`Your code returned an error! (${err})`);
  }
}

// Overwrite document.write method so that it is redirected to the textbox

document.write = (html) => $( "#decoded" ).val(html);

// Overwrite invasive methods so that the code doesnt change the page

var alerta = alert;
alert = () => {};
close = () => {};