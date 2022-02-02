//Get all the p elements by tag name
let paragraphs = document.getElementsByTagName("p");

//Get the element named myh1
let h1 = document.getElementById("myh1");
console.log(h1);
console.log(paragraphs);

//iterate through all the paragraphs
//console.log each p element and it's innerHTML
for(let i=0; i< paragraphs.length; i++) {
    console.log("i: ", i);
    let aParagraphy1 = paragraphs[i];
    console.log(aParagraphy1);
    let iHtml = paragraphs[i].innerHTML;
    console.log(iHtml);
}