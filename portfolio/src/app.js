//custom functions:-->
function setCharAt(str, index, char)
{
    return str.substring(0, index)+char+str.substring(index+1);
}
function changeSpacesToUnderScores()
{
  var str=prompt("Paste the text that has to be Changed");
  for(var i=0; i<str.length; i++)
  {
      console.log(str[i]===" ");
      var bool=(str[i]===" ");
      if(bool)
      {
          str=setCharAt(str, i, '_');
      }
  }
  alert(str);
  return "done";
}
function changeSquareBracketsToFlowerBrackets() 
{
    var str=prompt("Paste the text that has to be Changed");
    for(var i=0; i<str.length; i++)
    {
        if(str[i]==="[")
        {
            str=setCharAt(str, i, '{');
        }
        else if(str[i]==="]")
        {
            str=setCharAt(str, i, '}');
        }
    }
    alert(str);
    return "done";    
}
//window.print("output:- "+str); This command is printing the current page, a window got opened to save as pdf.
