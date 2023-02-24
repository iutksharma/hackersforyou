var tablinks = document.getElementsByClassName("active-link");
var tabcontents = document.getElementsByClassName("active-tab");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}


//  responsive one 

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0"
}
function closemenu(){
    sidemenu.style.right = "-200px"
}


function validate() {
    var signinEmail = document.getElementById("signin-email").value;
    var signinPassword = document.getElementById("signin-password").value;
    var signinNumber = document.getElementById("signin-number").value;
    var signinName = document.getElementById("signin-name").value;
  
    if (signinEmail == "" || signinPassword == "" || signinNumber == "" || signinName == "") {
      alert("Please fill in all fields.");
      return false;
    } else {
      alert("You have successfully signed in!");
    }
  }

  const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = form.elements['email'].value;
  const password = form.elements['password'].value;

  // Do something with email and password, like sending them to a server for verification
});

//contact - backend

const scriptURL = 'https://script.google.com/macros/s/AKfycbyZzMwhRh1DNkfFvn6bko_2FwVA-Dk0qV1YZHEPlwQzlQavmRgcOurTTh0JOuxnYj2wuA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent sucessfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

// animation 

$('.header-text h1').textillate({
	in:{
		effect:'bounceIn'
	},
	loop : true,
	out:{
		effect:'fadeInRight'
	}
})
