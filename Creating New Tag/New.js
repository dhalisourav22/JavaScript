//adding By appendChild();
let tagName = document.createElement("h3");
let textUnderTag = document.createTextNode("Hi..!");
tagName.appendChild(textUnderTag);
var underTag = document.querySelector("#my-div");  //div
underTag.appendChild(tagName);


//adding By insertBefore();
let tagName1 = document.createElement("h1");
let textUnderTag1 = document.createTextNode("Sourav Dhali");
tagName1.appendChild(textUnderTag1);
let before = document.getElementsByTagName("h1")[0];
//adding under the Div. Thats mean var underTag.
underTag.insertBefore(tagName1,before);



//Removing By removeChild();
let removeable = document.getElementsByTagName("h2")[0];
//removing From Div. Thats mean var underTag.
underTag.removeChild(removeable);