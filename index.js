function addItem(list, inputField) { 
    var list = document.getElementById(list);
    var listItem = document.createElement("li");
    listItem.innerText = inputField.value; 
    list.appendChild(listItem);
    inputField.value = '';
    return false; 
  }
  
console.log('My code is running');