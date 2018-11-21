/*
 Chris Chuck
 (Job/Assignment #)
 (Job/Assignment Title)
 
 (page title, describe this page and where it goes)
 (describe this page and what it does)
 (describe other details)
 */

//for catching the enter key on login for password
var input = document.getElementById('pass');
addEventListener('keyup', function(event){
  event.preventDefault();
  if(event.keyCode === 13)
    document.getElementById('submit').click();
});

addEventListener('load', function(){
  if (JSON.parse(window.localStorage.getItem('currentUser')) === undefined || JSON.parse(window.localStorage.getItem('currentUser')) === null){
    document.getElementById('viewNew').style.visibility = 'visible';
    document.getElementById('viewLog1').style.visibility = 'collapse';
    document.getElementById('viewLog2').style.visibility = 'collapse';
  }else{
    document.getElementById('viewNew').style.visibility = 'collapse';
    document.getElementById('viewLog1').style.visibility = 'visible';
    document.getElementById('viewLog2').style.visibility = 'visible';
  }
});

function logIn(){
  var uList = localLoad();
  for(var i in uList){
    var info = uList[i].split(',');
    if(info[0] === document.forms['formLogin']['user'].value && info[3] === document.forms['formLogin']['pass'].value){
      window.localStorage.setItem('currentUser', JSON.stringify(uList[i]));
      window.location.replace("acct-view.html");
      return i;
    }
  }
  alert('User doesnt exist / Password mismatch');
}

function logOut(){
  window.localStorage.setItem('currentUser', JSON.stringify(null));
}

function localSave(user){
  var temp = localLoad();
  temp.push(user);
  window.localStorage.setItem('currentUser', JSON.stringify(user));
  window.localStorage.setItem('userList', JSON.stringify(temp));
}

function localLoad(){
  try{
    var temp = JSON.parse(window.localStorage.getItem('userList'));
    if(temp.length === 0){
      var temp = [];
    }
  }
  catch(err){
    alert('local load failed, creating new list');
    var temp = [];
  }
  return temp;
}