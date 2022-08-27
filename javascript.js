var str=prompt("Paste the text that has to be Changed");
function setCharAt(str, index, char)
{
    return str.substring(0, index)+char+str.substring(index+1);
}
function changeSpacesToUnderScores(str)
{
  for(var i=0; i<str.length; i++)
  {
      console.log(str[i]===" ");
      var bool=(str[i]===" ");
      if(bool)
      {
          str=setCharAt(str, i, '_');
      }
  }
  return str;
}
str=changeSpacesToUnderScores(str);
//window.print("output:- "+str); This command is printing the current page, a window got opened to save as pdf.
alert("output:- "+str);
