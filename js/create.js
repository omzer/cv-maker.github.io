// Personal info
const prevName = document.getElementById('prevName');
const prevDate = document.getElementById('prevDate');
const prevEmail = document.getElementById('prevEmail');
const prevNumber = document.getElementById('prevNumber');
const prevAddress = document.getElementById('prevAddress');

const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const address = document.getElementById('address');

prevDate.innerText = localStorage.getItem('date');
name.value = localStorage.getItem('name');
email.value = localStorage.getItem('email');


function personPrev() {
    prevName.innerText = name.value.toUpperCase();
    prevEmail.innerText = email.value;
    prevNumber.innerText = number.value;
    prevAddress.innerText = address.value;
}


// Education
const institute = document.getElementById('institute');
const from = document.getElementById('from');
const to = document.getElementById('to');
const educationDesc = document.getElementById('educationDesc');
const instName = document.getElementById('instName');
const instFromAndTo = document.getElementById('instFromAndTo');
const instDesc = document.getElementById('instDesc');

function educationPrev() {
    instName.innerText = institute.value;
    instFromAndTo.innerText = from.value + " - " + to.value;
    instDesc.innerText = educationDesc.value;
}


const auth = firebase.auth();
// Go to sign in page if not signed in -- use it in all forms
auth.onAuthStateChanged(user => {
    if (!user) {
        window.location.assign('sign.html');
    }

});

// Sign out button

function signOut() {
    auth.signOut();
}