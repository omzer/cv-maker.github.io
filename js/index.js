const auth = firebase.auth();

// Go to sign in page if not signed in -- use it in all forms
auth.onAuthStateChanged(user => {
    if (!user) {
        localStorage.clear();
        window.location.assign('sign.html');
    } else {
        loadData(user);
    }
});


//load data to localStorage 

function loadData(user) {
    firebase.database().ref().child('users').child(user.uid).on('value', snap => {
        localStorage.setItem('name', snap.val().user_name);
        localStorage.setItem('email', snap.val().user_email);
        localStorage.setItem('date', snap.val().user_birthday);
    });

    firebase.database().ref().child('top3').on('value', snap => {
        var x = snap.val();

        document.getElementById('one').innerText = x[0].title;
        $('#one').attr('href', x[0].link);
        
        document.getElementById('two').innerText = x[1].title;
        $('#two').attr('href', x[1].link);
        
        document.getElementById('three').innerText = x[2].title;
        $('#three').attr('href', x[2].link);


    });

}

// Sign out button

function signOut() {
    auth.signOut();
}