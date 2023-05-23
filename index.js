function addItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("list");
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
    candidate.value = '';
}

function removeItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("list");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);
    candidate.value = '';
}

console.log('My code is running');