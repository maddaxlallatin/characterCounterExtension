showButton();


function showButton() {
    const newDiv = document.createElement("div");
    const newButton = document.createElement("button");
    const buttonText = document.createTextNode("^");
    newDiv.appendChild(newButton);
    newButton.appendChild(buttonText);
    newButton.setAttribute("id", "highButton");
    newButton.setAttribute("onclick", "setUp()");
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  
    styleButton();
  
    newButton.addEventListener("click", function () {
      newDiv.remove();
      setUp();
    });
  }
  
  function setUp() {
    console.log("getText() called");
    // create all the fiv element
    const newDiv = document.createElement("div");
    const wordCountDiv = document.createElement("div");
    const charCountDiv = document.createElement("div");
    const charNoWhiteCountDiv = document.createElement("div");
    const whiteCountDiv = document.createElement("div");
    // add teh words to each element
    const wordCountContent = document.createTextNode("Word Count: ");
    const charCountContent = document.createTextNode("Character Count: ");
    const charNoWhiteCountContent = document.createTextNode("Characters Without Whitespace Count: ");
    const whiteCountContent = document.createTextNode("Whitespace Count: ");
  
  
      //exity buttion
    const newButton = document.createElement("button");
    const buttonText = document.createTextNode("X");
  
    //append all the elements to the top most div
    newDiv.appendChild(wordCountDiv);
    newDiv.appendChild(charCountDiv);
    newDiv.appendChild(charNoWhiteCountDiv);
    newDiv.appendChild(whiteCountDiv);
    wordCountDiv.appendChild(wordCountContent);
    charCountDiv.appendChild(charCountContent);
    charNoWhiteCountDiv.appendChild(charNoWhiteCountContent);
    whiteCountDiv.appendChild(whiteCountContent);
    newDiv.appendChild(newButton);
    //add the id to each element
    newDiv.setAttribute("id", "highDiv");
    wordCountDiv.setAttribute("id", "wordCount");
    charCountDiv.setAttribute("id", "charCount");
    charNoWhiteCountDiv.setAttribute("id", "charNoWhiteCount");
    whiteCountDiv.setAttribute("id", "whiteCount");
    newButton.setAttribute("id", "exitButton");
  
    //add the div to the body
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  
    //style
  
    styleMainScreen()
  
    newButton.addEventListener("click", function () {
      newDiv.remove();
      showButton();
    });
  
  
    //call the function to get the text values
    getText();
  
  }
  
  function getText() {
    var text = window.getSelection().toString();
    var wordCountNum = text.split(/ +/).filter((value) => value != '').length;
    var charCountNum = text.length;
    var charNoWhiteCountNum = text.split(/ +/).filter((value) => value != '').join("").length;
    var whiteCountNum = text.split("").filter((value) => value == ' ').join("").length;
    console.log(text.split(/ +/));
    document.getElementById("wordCount").textContent = ` Words: ${wordCountNum} `
    document.getElementById("charCount").textContent = ` Characters: ${charCountNum} `
    document.getElementById("charNoWhiteCount").textContent = ` Characters Without Whitespace: ${charNoWhiteCountNum} `
    document.getElementById("whiteCount").textContent = ` Whitespaces: ${whiteCountNum} `
  
    setTimeout(getText, 10);
  }
  function style(divName, styleName, styleValue) {
    document.getElementById(divName).style[`${styleName}`] = styleValue;
  }
  function paddingLeftAndRight(divName, num) {
    style(divName, "paddingLeft", num);
    style(divName, "paddingRight", num);
  }
  
  function styleButton() {
    style("highButton", "position", "fixed");
    style("highButton", "bottom", "10px");
    style("highButton", "right", "10px");
    style("highButton", "zIndex", "983");
    style("highButton", "width", "50px");
    style("highButton", "height", "50px");
    style("highButton", "borderRadius", "50%");
  }
  
  function styleMainScreen(){
    
  
    style("highDiv", "position", "fixed");
    style("highDiv", "bottom", "10px");
    style("highDiv", "right", "10px");
    style("highDiv", "zIndex", "983");
    style("highDiv", "backgroundColor", "White");
    style("highDiv", "borderColor", "black");
    style("highDiv", "borderStyle", "solid");
    style("highDiv", "borderWidth", "2px");
    style("highDiv", "fontFamily", "monospace");
    style("highDiv", "borderRadius", "20px");
  
    paddingLeftAndRight("wordCount", "10px");
    paddingLeftAndRight("charCount", "10px");
    paddingLeftAndRight("charNoWhiteCount", "10px");
    paddingLeftAndRight("whiteCount", "10px");
  
  
    style("exitButton", "position", "absolute");
    style("exitButton", "top", "10px");
    style("exitButton", "right", "10px");
    style("exitButton", "zIndex", "983");
    style("exitButton", "width", "15px");
    style("exitButton", "height", "15px");
    style("exitButton", "borderRadius", "5px");
    style("exitButton", "borderWidth", "1px");
    style("exitButton", "backgroundColor", "red");
  }