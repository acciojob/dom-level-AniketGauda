//your JS code here. If required.
let childElt = document.getElementById("level");
let cnt=0;
while(childElt!=null){
    cnt++;
    childElt = childElt.parentElement;
}

alert(`The level of the element is: ${cnt}`);