// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDOVzht7CqcIIhnKrZ__WosOcn2pifF44",
    authDomain: "rba-home-plans.firebaseapp.com",
    databaseURL: "https://rba-home-plans-default-rtdb.firebaseio.com",
    projectId: "rba-home-plans",
    storageBucket: "rba-home-plans.appspot.com",
    messagingSenderId: "313680347378",
    appId: "1:313680347378:web:0c94d490246f6a283a106b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const storage = firebase.storage();

// Function to fetch data from Firebase and display it in the HTML
function fetchData(entryId) {
    db.ref(`entries/${entryId}`).once('value').then((snapshot) => {
        const data = snapshot.val();
        if (data) {
            document.getElementById('field2').innerHTML = data.field2 || '';
            document.getElementById('field3').innerHTML = data.field3 || '';
            document.getElementById('field4').innerHTML = data.field4 || '';
            document.getElementById('field5').innerHTML = data.field5 || '';
            document.getElementById('field6').innerHTML = data.field6 || '';
            document.getElementById('field7').innerHTML = data.field7 || '';
            document.getElementById('field8').innerHTML = data.field8 || '';
            document.getElementById('field9').innerHTML = data.field9 || '';
            document.getElementById('field10').innerHTML = data.field10 || '';
            document.getElementById('field11').innerHTML = data.field11 || '';
            document.getElementById('field12').innerHTML = data.field12 || '';
            document.getElementById('field13').src = data.field13 || '';
            document.getElementById('field14').src = data.field14 || '';
        }
    });
}

// Call fetchData function with your entryId
const entryId = 'YOUR_ENTRY_ID'; // Replace with the actual entry ID
fetchData(entryId);
