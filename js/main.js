function decrypt() {
  // Get code input
  var code = $( "#decode" ).val();
  // If user typed the entire html code
  if (code.includes('<script')) {
    var js1 = code.split('<script type="text/javascript">');
    try {
      var js = js1[1].split('</script>');
    }
    catch(error) {
      alert("Please remove the html code!");
      return false;
    }
    // This will pick just the javascript code
    code = js[0];
  }

  if (!code.includes('document.write(')) {
    if (code.includes('eval(')) {
      var docwrite = false;
      var eval1 = code.split("eval(");
      eval(eval1[0]);
      var eval2 = eval1[1].slice(0, -2);
      code = eval(eval2);


      if(code.includes("p,a,c,k,e,d")) {
        console.log("http://myobfuscate.com/ Detected!");
        code = code.replace("split('|')))", "split('|'))")
        code = code.replace("eval(", "");
        eval("var result_1 = " + code);
        result_1 = result_1.slice(0, -1);
        result_1 = result_1.replace("eval(", "");
        eval("var result_2 = " + result_1);
        result_2 = result_2.replace("split('|')))", "split('|'))")
        result_2 = result_2.replace("eval(", "");
        eval("var result_3 = " + result_2);
        result_3 = result_3.replace("split('|')))", "split('|'))")
        result_3 = result_3.replace("eval(", "");
        code = result_3;
      }
    }
  }

  var stage1 = code.split("document.write(");
  // replaces everything after document.write( from ")" to nothing
  var stage2 = stage1[1].replace(")", "");
  // Creates a variable containing document.write(x) code!
  var result = stage1[0] + "var lol = " + stage2;
  // Eval the result
  eval(result);
  $( "#decoded" ).val(lol);
}
