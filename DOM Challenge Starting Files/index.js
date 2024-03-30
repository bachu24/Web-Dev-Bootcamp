//only returns single item
//innerHTML - give all the content inside the tag
//textContent - give only the text content inside the tag
document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.textContent = "BCP";
document.querySelector("h2").innerHTML = "<em>THANK YOU</em>";
// will give the result in array except for getElementById
document.getElementsByTagName("li")[1].style.color = "green";
  
//only the first one from the list, will only change the bullet color
document.querySelector("ul .list").style.color = "orange";

//all
document.querySelectorAll("ul .list")[2].style.color = "pink";

//changing decoration of the anchor tag
document.querySelector("li a").style.textDecoration = "none";

//background color of the button
document.querySelector("button").style.backgroundColor = "yellow";

//addding class list
document.querySelector("button").classList.add("invisible");
//removing class list
// document.querySelector("button").classList.remove("invisible"); 
//toggling class list: if on then off, if off then on
document.querySelector("button").classList.toggle("invisible");

//attributes; getAttribute; setAttribute
document.querySelector("li a").setAttribute("href", "https://www.bing.com");
