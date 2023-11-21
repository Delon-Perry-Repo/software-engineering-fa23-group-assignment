
var users = new Array(); 

var dc1 = new discountCode("SUMMER23", 10);
var dc2 = new discountCode("ROWDY", 23);
var dc3 = new discountCode("BLACKFRIDAY", 50);

var discountCodes = new Array();
discountCodes.push(dc1);
discountCodes.push(dc2);
discountCodes.push(dc3);

function closeNewShirt(){
  document.getElementById("myForm").style.display = "none";
}

function discountCode(code, percent){
  this.code = code; 
  this.percent = percent;
}

function createDiscountCode(){
  document.getElementById("dc-Codes").style.display = "flex";
}

function openCurrentCodes(){

  document.getElementById("dc-tables").style.display = "flex";

  
  for(let i = 0; i < discountCodes.length; i++){

    var div = document.getElementById("dcBody");
    var dc = discountCodes[i];

    var row = document.createElement("tr");
    row.setAttribute("id", dc.code + "-row");

    var codeP = document.createElement("td");
    codeP.innerHTML = dc.code; 

    var percentP = document.createElement("td");
    percentP.innerHTML = dc.percent; 


    row.appendChild(codeP);
    row.appendChild(percentP);

    div.appendChild(row);
  }
  
}

function closeDc(){
  document.getElementById("dc-tables").style.display = "none"; 
}

function saveCode(){
  var code = document.getElementById("dc-code").value;
  var percent = document.getElementById("percent-off").value; 

  var dcCode = new discountCode(code, percent);
  discountCodes.push(dcCode);

  document.getElementById("dc-Codes").style.display = "none";
}

function closeCode(){
  document.getElementById("dc-Codes").style.display = "none";
}

function User(first, last, id, contact, email){
  this.first = first; 
  this.last = last; 
  this.id = id; 
  this.contact = contact; 
  this.email = email;
}

var possibleUsers = new Array();

function Shirt(name, number, size, price, desc, material) {
  this.name = name;
  this.number = number; 
  this.size = size;
  this.price = price;
  this.desc = desc;
  this.material = material;
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
    //TO-DO: Edit to function for multiple forms
  }

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    //TO-DO: Edit to function for multiple forms
  }

// FUNCTIONS USED IN ADMIN.HTML

function seeInventory() {
  //QUESTION: set expiration? how long until inventory.html reads the cookie?
  open("inventory.html");
}


function openHistory() {
  // open orders page, with a parameter of "completed"  
  open("orders.html", "_self");
}

function openCurrent() {
  // open orders page, with a parameter of "active" 
  open("orders.html", "_self");
} 

function searchUsers(){
  open("users.html", "_self");
}

function searchUser() {

  var inputField = document.getElementById("search-input");
  inputField.style.borderColor = "black";
  inputField.style.borderWidth = "thin";

  var error = document.getElementById("userError");
  error.innerText = " ";

  var input = document.querySelector('input').value;
  var test1 = document.getElementById("test1");
  input = input.charAt(0).toUpperCase() + input.slice(1);
  var possibleUser = new User(); 

  
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    var fullName = user.first.concat(" ");
    fullName = fullName.concat(user.last);

    
    if (user.id === input) {
      possibleUser = user;
      possibleUsers.push(possibleUser);
    } else if ( user.first.localeCompare(input) == 0 ) {
      possibleUser = user;
      possibleUsers.push(possibleUser);
    } else if ( user.last.localeCompare(input) == 0 ) {
        possibleUser = user;
        possibleUsers.push(possibleUser);
    } else if ( user.first.localeCompare(input) == 0 ) {
      possibleUser = user;
      possibleUsers.push(possibleUser);
    } else if ( fullName.localeCompare(input) == 0 ) {
    possibleUser = user;
    possibleUsers.push(possibleUser);
    } else if ( user.contact.localeCompare(input) == 0 ) {
      possibleUser = user;
      possibleUsers.push(possibleUser);
    } else if ( user.email.localeCompare(input) == 0 ) {
      possibleUser = user;
      possibleUsers.push(possibleUser);
    }
    
  }

  loadUsers(possibleUsers);

  
  if (possibleUsers.length === 0) {
    var inputField = document.getElementById("search-input");
    inputField.style.borderColor = "red";
    inputField.style.borderWidth = "medium";

    var error = document.getElementById("userError");
    error.innerText = "User not found. Please try again.";
  }
  
}

var user1 = new User( "John", "Doe", "001", "+11234567890", "johndoe@example.com");
var user2 = new User( "Jane", "Doe", "002", "+11234567890", "janedoe@example.com");
var user3 = new User( "Bob", "Smith", "003", "+11234567890", "bobsmith@example.com");
var user4 = new User( "Sarah", "Jones", "004", "+11234567890", "sarajones@example.com");

//possibleUsers.push(user1);
//possibleUsers.push(user2);

users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);

function loadUsers(userArr){

  for(let i = 0; i < userArr.length; i++){
    let user = userArr[i];
    var div = document.getElementById("userBody");
    var userTr = document.createElement("tr");

    var numTd = document.createElement("td");
      var numBtn = document.createElement("button");
      numBtn.innerText = user.id;
      numBtn.setAttribute("onclick", "editUser(this.id);");
      numBtn.setAttribute("id", user.id);
      numBtn.setAttribute("class", "userBtn");
    numTd.appendChild(numBtn);
    
    var firstTd = document.createElement("td");
    var firstId = user.id.concat("-first");
    firstTd.setAttribute("id", firstId);
    firstTd.innerText = user.first;
    
    var lastId = user.id.concat("-last");
    var lastTd = document.createElement("td");
    lastTd.setAttribute("id", lastId);
    lastTd.innerText = user.last;

    var contactId = user.id.concat("-contact");
    var contactTd = document.createElement("td");
    contactTd.setAttribute("id", contactId);
    contactTd.innerText = user.contact;

    var emailId = user.id.concat("-email");
    var emailTd = document.createElement("td");
    emailTd.setAttribute("id", emailId);
    emailTd.innerText = user.email;

    userTr.appendChild(numTd);
    userTr.appendChild(firstTd);
    userTr.appendChild(lastTd);
    userTr.appendChild(contactTd);
    userTr.appendChild(emailTd);
    div.appendChild(userTr);
    
  }

}

function saveEdit(first, last, contact, email, id){
  
  for(let i = 0; i < users.length; i++){
    let user = users[i];
    if(id === user.id)  {
      user.first = first;
      user.last = last;
      user.contact = contact;
      user.email = email;
    }

  }

  document.getElementById("confirmUserInfo").style.display = "none"; 
  document.getElementById("userPopUp-content").style.display = "none";

  
  for(let i = 0; i < users.length; i++){

    var user = users[i];


    var firstId = user.id.concat("-first");
    var firstTd = document.getElementById(firstId);
    firstTd.innerText = user.first;
    
    var lastId = user.id.concat("-last");
    var lastTd = document.getElementById(lastId);
    lastTd.innerText = user.last;

    var contactId = user.id.concat("-contact");
    var contactTd = document.getElementById(contactId);
    contactTd.innerText = user.contact;

    var emailId = user.id.concat("email");
    var emailTd = document.getElementById(emailId);
    emailTd.innerText = user.email;
    
  }  
  
  // save to database

 
}


function confirmEdit(first, last, contact, email, id){


  document.getElementById("tempF").innerText = "First Name: " + first;
  document.getElementById("tempL").innerText = "Last Name: " + last;
  document.getElementById("tempC").innerText = "Contact: " + contact;
  document.getElementById("tempE").innerText = "Email: " + email;
  
  document.getElementById("confirmUserInfo").style.display = "flex";

  var yes = document.getElementById("saveEditBtn"); 
  
  yes.addEventListener("click", function() {
    saveEdit(first, last, contact, email, id); 
  }, false);
  
}

function updateUser(){


  var custNum = document.getElementById("custNum").innerText;
  var myArr = custNum.split("#");
  var id = myArr[1];
  
  var first = document.getElementById("firstInp").value; 
  var last = document.getElementById("lastInp").value;
  var contact = document.getElementById("contactInp").value;
  var email = document.getElementById("emailInp").value;


  confirmEdit(first, last, contact, email, id);
}

function editUser(id){
  document.getElementById("custNum").innerText = "Customer: #" + id;

  var user = new User(); 

  for(let i = 0; i < users.length; i++){
    if(users[i].id === id){
      user = users[i];
    }
  }

  document.getElementById("firstInp").value = user.first;
  document.getElementById("lastInp").value = user.last;
  document.getElementById("contactInp").value = user.contact;
  document.getElementById("emailInp").value = user.email;
  
  document.getElementById("userPopUp-content").style.display = "flex";

  
}

function goBack(){
  document.getElementById("confirmUserInfo").style.display = "none";
}

let inventory = new Array();

var catShirt = new Shirt("Cat", "02", "M", "12.99", "White shirt with black cat graphic.", "Cotton");
var carharttShirt = new Shirt("Carhartt", "03", "L", "18.99", "Brown ringer tee with Carhartt logo.", "Polyester");
var figShirt = new Shirt("Fig", "04", "XL", "10.99", "Fig graphic on off-white shirt.", "Polyester");
var wildShirt = new Shirt("Wild", "05", "M", "11.99", "White shirt with green lettering.", "Cotton");

inventory.push(catShirt);
inventory.push(carharttShirt);
inventory.push(figShirt); 
inventory.push(wildShirt);

function addShirt(shirt){
  inventory.push(shirt);

  document.getElementById("confirmShirt").style.display = "none";
  document.getElementById("myForm").style.display = "none";
}

function confirmShirt(shirt){

  document.getElementById("confirmShirt").style.display = "flex";
  
  var name = "Name: ";
  name = name.concat(shirt.name);
  document.getElementById("newName").innerText = "Name: " + shirt.name;
  document.getElementById("newNumber").innerText = "Number: " + shirt.number;
  document.getElementById("newSize").innerText = "Size: " + shirt.size;
  document.getElementById("newPrice").innerText = "Price: " + shirt.price;
  document.getElementById("newDesc").innerText = "Description: " + shirt.desc;
  document.getElementById("newMaterial").innerText = "Material: " + shirt.material;

  var confirm = document.getElementById("confirm-new-shirt");
  confirm.addEventListener( "click", function() {
    addShirt(shirt);
  
  }, false);
  
}

function createShirt(){
  var name = document.getElementById("item-name1").value;
  var number = document.getElementById("item-number1").value;
  var price = document.getElementById("item-price1").value; 
  var desc = document.getElementById("item-desc1").value;
  var mat = document.getElementById("item-material1").value;
  var size = document.getElementById("sizes1").value;

  var shirt = new Shirt(name, number, size, price, desc, mat);

  confirmShirt(shirt);


}

function removeShirt(buttonID){
  let item = buttonID.split("-");
  let itemName = item[0];
  let val = new Shirt();

  for(let i = 0; i < inventory.length; i++){
    if (itemName === inventory[i].name){
      val = inventory[i];
      inventory.splice(i,1);
    }
  }

  document.getElementById(val.name + "-item").style.display = "none";

}

function closeEditForm(){
  document.getElementById("editForm").style.display = "none";
}

function editShirt(buttonID){
  let item = buttonID.split("-");
  let itemNum = item[0];
  let val = new Shirt();

  for(let i = 0; i < inventory.length; i++){
    if (itemNum === inventory[i].number){
      val = inventory[i];
    }
  }

  let form = document.getElementById("editForm");
  
  form.style.display = "flex";
  
  document.getElementById("editItemNum").innerText = "Edit Item #" + val.number;
  document.getElementById("item-name").value = val.name;
  document.getElementById("item-price").value = val.price;
  document.getElementById("item-desc").value = val.desc;
  document.getElementById("item-material").value = val.material;
  document.getElementById("sizes").value = val.size;


}

function saveShirt(){

  var itemNumber = document.getElementById("editItemNum").innerText;
  var myArr = itemNumber.split("#");
  var num = myArr[1];

  let itemName = document.getElementById("item-name").value;
  let itemSize = document.getElementById("sizes").value;
  let itemPrice = document.getElementById("item-price").value;
  let itemDesc = document.getElementById("item-desc").value;
  let itemMaterial = document.getElementById("item-material").value;

  for(let i = 0; i < inventory.length; i++){
    if (num === inventory[i].number){
      inventory[i].name = itemName;
      inventory[i].size = itemSize;
      inventory[i].price = itemPrice;
      inventory[i].desc = itemDesc;
      inventory[i].material = itemMaterial;

      var number = inventory[i].number;

      var nameId = number.concat("-name");
      document.getElementById(nameId).innerText = itemName; 
      
    }
  }

  document.getElementById("editForm").style.display = "none";

}

function loadShirts(){

  for( let i= 0; i < inventory.length; i++){
    var val = inventory[i];

    var div = document.getElementById("inv");

    var items = document.createElement("div");
    items.setAttribute("class", "items");
    items.setAttribute("id", val.name + "-item");

    var picInfo = document.createElement("div");
    picInfo.setAttribute("class", "pic-info");
    var img = document.createElement("img");

    var img1 = "img/";
    var img2 = ".png";
    var imgSrc = img1.concat(val.name);
    imgSrc = imgSrc.concat(img2);

    img.setAttribute("class", "item-img");
    img.setAttribute("src", imgSrc);
    picInfo.appendChild(img);
    img.style.backgroundColor = "white";

    var itemInfo = document.createElement("div");
    itemInfo.setAttribute("class", "item-info");
    
    var itemName = document.createElement("h3");
    itemName.setAttribute("class", "item-name");
    itemName.textContent = val.name + " Shirt";
    
    var itemNameID = val.number.concat("-name");
    itemName.setAttribute("id", itemNameID);
    
    itemInfo.appendChild(itemName);

    var itemNumber = document.createElement("p");
    itemNumber.setAttribute("class", "item-number");
    itemNumber.textContent = "Item Number: #" + val.number;
    itemInfo.appendChild(itemNumber);

    var itemSize = document.createElement("p");
    itemSize.setAttribute("class", "item-size");
    itemSize.textContent = val.size;
    var itemSizeID = val.number.concat("-size");
    itemSize.setAttribute("id", itemSizeID);
    itemInfo.appendChild(itemSize);


    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("class", "item-price");
    itemPrice.textContent = "Price: $" + val.price;
    var itemPriceID = val.number.concat("-price");
    itemPrice.setAttribute("id", itemPriceID);
    itemInfo.appendChild(itemPrice);


    var itemDesc = document.createElement("p");
    itemDesc.setAttribute("class", "item-desc"); 
    itemDesc.textContent = val.desc;
    var itemDescID = val.number.concat("-desc");
    itemDesc.setAttribute("id", itemDescID);
    itemInfo.appendChild(itemDesc);


    var mat = document.createElement("div");
    mat.setAttribute("class", "mat");

    var itemMaterial = document.createElement("p");
    itemMaterial.setAttribute("class", "item-material");
    itemMaterial.textContent = "Material: ";
    mat.appendChild(itemMaterial);

    var itemMatDesc = document.createElement("p");
    itemMatDesc.setAttribute("class", "item-material-desc");
    itemMatDesc.textContent = val.material;
    var itemMatDescID = val.number.concat("-material");
    itemMatDesc.setAttribute("id", itemMatDescID);
    mat.appendChild(itemMatDesc);
    itemInfo.appendChild(mat);

    var itemOptions = document.createElement("div");
    itemOptions.setAttribute("class", "item-options");

    var editButton = document.createElement("button");
    var editBtn = val.number + "-edit-button";
    editButton.setAttribute("id", editBtn);
    editButton.setAttribute("class", "edit-button");
    editButton.textContent = "EDIT";
    editButton.setAttribute("onclick", "editShirt(this.id)");
    itemOptions.appendChild(editButton);

    var removeButton = document.createElement("button");
    var removeBtn = val.name + "-remove-button";
    removeButton.setAttribute("id", removeBtn);
    removeButton.setAttribute("class", "remove-button");
    removeButton.textContent = "REMOVE";
    removeButton.setAttribute("onclick", "removeShirt(this.id)");
    itemOptions.appendChild(removeButton);

    items.appendChild(picInfo);
    picInfo.appendChild(itemInfo);
    items.appendChild(itemOptions);


  div.appendChild(items);


  }

}

function findShirt() {
  let shirt = document.getElementById("this-shirt").value;
  let findDiv = shirt.name + "-item";
  window.scrollTo(0, findPosition(document.getElementById(findDiv)) );
}

// FUNCTIONS USED BY ORDERS.HTML

let pastOrders = new Array(); 
let currOrders = new Array(); 

function Order(number, customer, status, shirts, quantity, price, datePlaced){
  this.number = number; 
  this.customer = customer; 
  this.status = status; 
  this.shirts = shirts; 
  this.quantity = quantity; 
  this.price = price; 
  this.datePlaced = datePlaced;
}

var shirtsOrd3 = [catShirt, carharttShirt, figShirt, wildShirt];
var shirtsOrd4 = [catShirt];
var shirtsOrd5 = [carharttShirt, figShirt];

var order5 = new Order("00001", "Janice Doe", "Complete", shirtsOrd3, "4", "59.49", "11/16/2023" );

var order4 = new Order("00002", "Johnny Doe", "Complete", shirtsOrd4, "1", "12.49", "11/01/2023" );

var order6 = new Order("00003", "Bob Smith", "Complete", shirtsOrd5, "2", "26.03", "11/03/2023" );

pastOrders.push(order5);
pastOrders.push(order4);
pastOrders.push(order6);


function loadComplete(Orders){

// create fake order array
  document.getElementById("default").style.display = "none";

  for(let i = 0; i < Orders.length; i++){

    let table = document.getElementById("tableBody");

    var order = Orders[i];

    var row = document.createElement("tr");

    var id = "-id";
    var orderId = order.number;
    orderId = orderId.concat(id);
    row.setAttribute("id", orderId );


      let number = document.createElement("td");
      number.setAttribute( "class", "order-num");

        let numberButton = document.createElement("button");
        numberButton.setAttribute("id", order.number);
        numberButton.setAttribute("onclick", "openOldOrder(this.id)");
        numberButton.innerText = "#" + order.number;

      number.appendChild(numberButton);

      let customer = document.createElement("td");
      customer.setAttribute( "class", "customer");
      customer.innerText = order.customer;

      let date = document.createElement("td");
      date.setAttribute("class", "date-placed");
      date.innerText = order.datePlaced;

      let status = document.createElement("td");
      status.setAttribute("class", "done-status");
      status.innerText = order.status;

      let price = document.createElement("td");
      price.setAttribute("class", "price");
      price.innerText = order.price;

      let quantity = document.createElement("td");  
      quantity.setAttribute("class", "quantity");
      quantity.innerText = order.quantity;

    row.appendChild(number);
    row.appendChild(customer);
    row.appendChild(date);
    row.appendChild(status);
    row.appendChild(price);
    row.appendChild(quantity);

    table.appendChild(row);

  }
}

function test(Orders){

// create fake order array
  document.getElementById("default").style.display = "none";

  for(let i = 0; i < Orders.length; i++){

    let table = document.getElementById("tableBody");

    var order = Orders[i];

    var row = document.createElement("tr");
    
    var id = "-id";
    var orderId = order.number;
    orderId = orderId.concat(id);
    row.setAttribute("id", orderId );
    

      let number = document.createElement("td");
      number.setAttribute( "class", "order-num");

        let numberButton = document.createElement("button");
        numberButton.setAttribute("id", order.number);
        numberButton.setAttribute("onclick", "openOrder(this.id)");
        numberButton.innerText = "#" + order.number;

      number.appendChild(numberButton);
    
      let customer = document.createElement("td");
      customer.setAttribute( "class", "customer");
      customer.innerText = order.customer;
    
      let date = document.createElement("td");
      date.setAttribute("class", "date-placed");
      date.innerText = order.datePlaced;
    
      let status = document.createElement("td");
      status.setAttribute("class", "active-status");
      status.innerText = order.status;
    
      let price = document.createElement("td");
      price.setAttribute("class", "price");
      price.innerText = order.price;
    
      let quantity = document.createElement("td");  
      quantity.setAttribute("class", "quantity");
      quantity.innerText = order.quantity;

    row.appendChild(number);
    row.appendChild(customer);
    row.appendChild(date);
    row.appendChild(status);
    row.appendChild(price);
    row.appendChild(quantity);

    table.appendChild(row);
    
  }
}


  var shirtsOrd = [carharttShirt, figShirt, wildShirt];
  var shirtsOrd1 = [catShirt];
  var shirtsOrd2 = [carharttShirt, figShirt];

  var order1 = new Order("12346", "Jane Doe", "Active", shirtsOrd, "3", "45.43", "11/16/2023" );

  var order2 = new Order("12347", "John Doe", "Active", shirtsOrd1, "1", "14.06", "11/01/2023" );

  var order3 = new Order("12348", "Anna Smith", "Active", shirtsOrd2, "2", "32.48", "11/03/2023" );

  currOrders.push(order1);
  currOrders.push(order2);
  currOrders.push(order3);

  function openOldOrder(orderNum){

    order = pastOrders.find(order => order.number == orderNum);

    document.getElementById("orders").style.display = "flex";
    document.getElementById("order-num").innerText = "Order Number #" + order.number;
    document.getElementById("order-date").innerText = "Date Placed: " + order.datePlaced;
    document.getElementById("order-total").innerText = "Order Subtotal: $" + order.price; 
    document.getElementById("order-customer").innerText = "Customer: " + order.customer;

  var shirts = order.shirts;

  for(let i = 0; i < shirts.length; i++){

    var shirt = shirts[i];

    var orderBody = document.getElementById("orderBody");
      var row = document.createElement("tr");

      let img = document.createElement("td");
      let imgSrc = document.createElement("img");
        var img1 = "img/";
        var img2 = ".png";
        var src = img1.concat(shirt.name);
        src = src.concat(img2);
      imgSrc.setAttribute("src", src);
      img.appendChild(imgSrc);

      var shirtInfoTd = document.createElement("td");

        var pName = document.createElement("p");
        pName.innerText = shirt.name + " Shirt";

        var pDesc = document.createElement("p");
        pDesc.innerText = shirt.desc;

      shirtInfoTd.appendChild(pName);
      shirtInfoTd.appendChild(pDesc);

      var size = document.createElement("td");
      size.innerText = shirt.size;

      var price = document.createElement("td");
      price.innerText = shirt.price;

      row.appendChild(img);
      row.appendChild(shirtInfoTd);
      row.appendChild(size);
      row.appendChild(price);

    orderBody.appendChild(row);


  }
    //if order.dc === "NONE", set order-dc display to "none"

    document.getElementById("sbtQty").innerText = order.quantity + " items";
    document.getElementById("sbtPrice").innerText = order.price; 
    document.getElementById("dcCode").innerText = "";
    document.getElementById("dcAmt").innerText = "0.00";
    document.getElementById("ttlTotal").innerText = "$" + order.price + " USD";
    document.getElementById("close-order").setAttribute("onclick", "completeOrder(" + order.number + ")" );

  }

  function openOrder(orderNum){

    order = currOrders.find(order => order.number == orderNum);
    
    document.getElementById("orders").style.display = "flex";
    document.getElementById("order-num").innerText = "Order Number #" + order.number;
    document.getElementById("order-date").innerText = "Date Placed: " + order.datePlaced;
    document.getElementById("order-total").innerText = "Order Subtotal: $" + order.price; 
    document.getElementById("order-customer").innerText = "Customer: " + order.customer;

  var shirts = order.shirts;

  for(let i = 0; i < shirts.length; i++){

    var shirt = shirts[i];

    var orderBody = document.getElementById("orderBody");
      var row = document.createElement("tr");

      let img = document.createElement("td");
      let imgSrc = document.createElement("img");
        var img1 = "img/";
        var img2 = ".png";
        var src = img1.concat(shirt.name);
        src = src.concat(img2);
      imgSrc.setAttribute("src", src);
      img.appendChild(imgSrc);

      var shirtInfoTd = document.createElement("td");

        var pName = document.createElement("p");
        pName.innerText = shirt.name + " Shirt";

        var pDesc = document.createElement("p");
        pDesc.innerText = shirt.desc;

      shirtInfoTd.appendChild(pName);
      shirtInfoTd.appendChild(pDesc);

      var size = document.createElement("td");
      size.innerText = shirt.size;

      var price = document.createElement("td");
      price.innerText = shirt.price;
      
      row.appendChild(img);
      row.appendChild(shirtInfoTd);
      row.appendChild(size);
      row.appendChild(price);
    
    orderBody.appendChild(row);

    
  }
    //if order.dc === "NONE", set order-dc display to "none"

    document.getElementById("sbtQty").innerText = order.quantity + " items";
    document.getElementById("sbtPrice").innerText = order.price; 
    document.getElementById("dcCode").innerText = "";
    document.getElementById("dcAmt").innerText = "0.00";
    document.getElementById("ttlTotal").innerText = "$" + order.price + " USD";
    document.getElementById("close-order").setAttribute("onclick", "completeOrder(" + order.number + ")" );
    
  }


  function closeOrder(){
    document.getElementById("orders").style.display = "none";
  }

  function completeOrder(orderNum){
    var index = currOrders.findIndex(order => order.number == orderNum);

    currOrders[index].status = "Completed"; 
    
    var order = new Order(
      currOrders[index].number, 
      currOrders[index].customer, 
      currOrders[index].status, 
      currOrders[index].shirts, 
      currOrders[index].quantity, 
      currOrders[index].price, 
      currOrders[index].datePlaced);
    
    pastOrders.push(order);
    currOrders.splice(index, 1);

    
    
    
    for(let j = 1; j < currOrders.length + 1; j++){
      const body = document.getElementById("ordtb");
      body.deleteRow(i);
    }
    
    closeOrder();
    test(currOrders);
    

    
    // Save currOrders to db to reflect deleted Order
    // next reload should not include it anymore
  }

  function Date(yymmdd, key){
    this.yymmdd = yymmdd;
    this.key = key;
  }

  function swap(orderArray, i, index){
    var temp = orderArray[i];
    orderArray[i] = orderArray[index];
    orderArray[index] = temp;
  }

 

  function compare(a, b) {
    return a.yymmdd - b.yymmdd;
  }

  function compareName(a, b) {
    return a.customerName - b.customerName;
  }

  function resetOrders(){
    open("orders.html", "_self");
  }

  function sortByDate(orderArray){
    

    // Change all divs to "none"
    // document.getElementById("tableBody").style.display = "none";
    // How to make appear again but with only new dates 
    
    var datesArr = new Array();
    var sortedArr = new Array();

    document.getElementById("default").style.display = "none";
    
    for(let i = 0; i < orderArray.length; i++){
      var date = orderArray[i].datePlaced.split("/"); // -> MM DD YYYY
      var yymmdd = date[2] + date[0] + date[1];
      yymmdd = parseInt(yymmdd);
      var newDate = new Date(yymmdd, i);

      datesArr.push(newDate);
    }

    datesArr.sort(compare);

    for(i = 0; i < datesArr.length; i++){
      var index = datesArr[i].key; 

      sortedArr[i] = Object.assign({}, orderArray[index]);
      
    }
    test(sortedArr);
    
  }

  function customerSort (name, key){
    this.name = name; 
    this.key = key
  }

  function sortByCustomer(orderArray){

    // Change all divs to none first;
    
    var customerArr = new Array();
    var sortedArr = new Array();

    document.getElementById("default").style.display = "none";
    
    for(let i = 0; i < orderArray.length; i++){
      var name = orderArray[i].customer;
      var custSort = new customerSort(name, i);
      customerArr.push(custSort);
    }

    customerArr.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    for(i = 0; i < customerArr.length; i++){
      var index = customerArr[i].key; 

      sortedArr[i] = Object.assign({}, orderArray[index]);

    }

    test(sortedArr);
    
  }

function priceSort(price, key){
  this.price = price; 
  this.key = key;
}


function sortByPrice(arr){
  var priceArr = new Array();
  var sortedArr = new Array();

  for(let i = 0; i < arr.length; i++){
    var price = arr[i].price; 
    var prSort = new priceSort(price, i);
    priceArr.push(prSort);
  }

  priceArr.sort(function (a,b){
    if (a.price < b.price) {
      return -1;
    }
    if (a.price < b.price) {
      return 1;
    }
    return 0;
  });


  for(i = 0; i < priceArr.length; i++){
    var index = priceArr[i].key;

    //sortedArr[i] = Object.assign({}, arr[index]);
    sortedArr[i] = arr[index];


  }

  test(sortedArr);

}

function closeUserPopUp(){
  document.getElementById("userPopUp-content").style.display = "none";
}

  /*
  function sortByStatus(){}

  function sortByCustoner(){}

  function sortByPrice(){}

  */

  /** 
  Show currently placed orders
  Show history of orders
  Sort by order date
  Sort by customer
  Sort by order size in dollar amount */
