function addItem(list, inputField) { 
    var list = document.getElementById(list);
    var listItem = document.createElement("li");
    listItem.innerText = inputField.value; // passed the field. 
    list.appendChild(listItem);
    return false; // stop submission
  }
  
console.log('My code is running');