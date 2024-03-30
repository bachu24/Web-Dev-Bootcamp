//only returns single item
document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "BCP";

// will give the result in array except for getElementById
document.getElementsByTagName("li")[1].style.color = "green";
  
//only the first one from the list
document.querySelector("ul .list").style.color = "red";

//all
document.querySelectorAll("ul .list").style.color = "red";


