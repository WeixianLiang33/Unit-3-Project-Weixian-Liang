/* Declare variables below to save the different sections (divs) of your story*/
let title = document.querySelector(".title");
let StoryPart1 = document.querySelector(".story-opening");
let buttons = document.querySelector(".bottons");
let StoryPart2yes = document.querySelector(".option-one");
let StoryPart2no = document.querySelector(".option-two");
let StoryPart2yesscreen = document.querySelector(".option-one-screen");
let StoryPart2noscreen = document.querySelector(".option-two-screen");
let StoryPart3yes = document.querySelector(".option-one-end");
let StoryPart3no = document.querySelector(".option-two-end"); 
let picture1=document.querySelector(".picturesuccess");
let text1=document.querySelector(".text1");
let StoryPart3yesend = document.querySelector(".option-oneend");
let StoryPart3noend = document.querySelector(".option-twoend");


// When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!

StoryPart2yes.onclick=function(){
StoryPart2yesscreen.style.display="block";
    
};



StoryPart2no.onclick=function(){
StoryPart2noscreen.style.display="block";
};

StoryPart3yesend.onclick=function(){
StoryPart3yes.style.display="block";
};

StoryPart3noend.onclick=function(){
StoryPart3no.style.display="block";
};

picture1.onclick=function(){
 text1.innerHTML="You Succeed it.";
};

//


