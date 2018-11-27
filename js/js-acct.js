/*
Chris Chuck
Final Web Project
A shop for things

acct
js for manipulating user accounts

 */

//overall if check, concats string and exports to allStudent to save
function checkForm(){
  if(checkContact() === false || checkPass() === false){
    return false;
  }else{
    var newuser = document.forms['formRegister']['user'].value;              //0
    newuser += ',' + document.forms['formRegister']['namel'].value;
    newuser += ',' + document.forms['formRegister']['namef'].value;
    newuser += ',' + document.forms['formRegister']['password'].value;
    newuser += ',' + document.forms['formRegister']['address'].value;
    newuser += ',' + document.forms['formRegister']['city'].value;           //5
    newuser += ',' + document.forms['formRegister']['state'].value;
    newuser += ',' + document.forms['formRegister']['zip'].value;
    newuser += ',' + document.forms['formRegister']['email'].value;
    newuser += ',' + document.forms['formRegister']['tel'].value;
    newuser += ',' + document.forms['formRegister']['location'].value;      //10
    newuser += ',' + document.forms['formRegister']['bday'].value;
    newuser += ',' + document.forms['formRegister']['charity'].value;
    newuser += ',' + document.forms['formRegister']['donation'].value;
    newuser += ',' + document.forms['formRegister']['rate'].value;
    newuser += ',' + document.forms['formRegister']['card#'].value;         //15
    newuser += ',' + document.forms['formRegister']['cardCvv'].value;
    newuser += ',' + document.forms['formRegister']['cardNamef'].value;
    newuser += ',' + document.forms['formRegister']['cardNamel'].value;
    newuser += ',' + document.forms['formRegister']['cardExpr'].value;
    newuser += ',' + document.forms['formRegister']['cardType'].value;      //20
    localSave(newuser);
    return true;
  }
}

//a to string function
function displayAcct(){
  var info = JSON.parse(window.localStorage.getItem('currentUser')).split(',');
  document.getElementById('bodyList').innerHTML = '<tr><td>UserName:</td><td>' + info[0] + '</td></tr>'
          + '<tr><td>First Name:</td><td>' + info[1] + '</td><td>Favorite Charity:</td><td>' + info[12] + '</td></tr>'
          + '<tr><td>Last Name:</td><td>' + info[2] + '</td><td>First Donation:</td><td>$' + info[13] + '</td></tr>'
          + '<tr><td>Email:</td><td>' + info[8] + '</td><td>Site Rating (1-10):</td><td>' + info[14] + '</td></tr>'
          + '<tr><td>Birthday:</td><td>' + info[11] + '</td></tr>' 
          + '<tr><td>Telephone #:</td><td>' + info[9] + '</td><td>Credit Card #:</td><td>' + info[15] + '</td></tr>'
          + '<tr><td>Address:</td><td>' + info[4] + '</td><td>Card CVV#:</td><td>' + info[16] + '</td></tr>'
          + '<tr><td>City:</td><td>' + info[5] + '</td><td>Card Type:</td><td>' + info[20] + '</td></tr>'
          + '<tr><td>State:</td><td>' + info[6] + '</td><td>Card Expiration Date:</td><td>' + info[19] + '</td></tr>'
          + '<tr><td>ZipCode:</td><td>' + info[7] + '</td><td>First Name on Card:</td><td>' + info[17] + '</td></tr>'
          + '<tr><td>Country:</td><td>' + info[10] + '</td><td>Last Name on Card:</td><td>' + info[18] + '</td></tr>';
}

//checks contact info slots, both are special entry
function checkContact(){
  if(document.forms['formRegister']['tel'].value === '' || document.forms['formRegister']['tel'].value.length <= 8){
    alert('invalid telephone');
    return false;
  }
  return true;
}

function checkPass(){
  if(document.forms['formRegister']['password'].value.includes(document.forms['formRegister']['passcheck'].value)){
    return true;
  }
  alert("passwords dont match");
  return false;
}