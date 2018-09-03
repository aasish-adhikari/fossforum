const questionForm = document.querySelector('.form-question');
const questionInput = document.querySelector('#askQuestion');
const askButton = document.querySelector('.ask');
const userType = document.querySelector('#usertype');
var usercheck;
var qsID = 1;
var qs = {};

const msInSecond = 1000;
const msInMinute = 60000;
const msInHour = 3600000;

const timeToMs = (hours, minutes, seconds) => (seconds * msInSecond) + (minutes * msInMinute) + (hours * msInHour);
const timestampAfterMs = (time) => new Date().getTime() + time;
const msToTime = (time) => {
  const hours = Math.floor(time / msInHour);
  const minutes = Math.floor((time - hours * msInHour) / msInMinute);
  const seconds = Math.floor((time - hours * msInHour - minutes * msInMinute) / msInSecond);
  return {
    hours,
    minutes,
    seconds
  };
};

// questionForm.addEventListener('submit', event =>{
//   event.preventDefault();
//   console.log('clicked');
//   if(userType.checked){
//     console.log("slider working");
//     user = 'anonymous';
//   }
//   else{
//     user = 'prajwal';
//   }
//   console.log(questionInput.value);
//
//
//
//   const question = questionInput.value;
//   // localStorage.setItem('question', questionInput);
//   // window.location.href = 'index.html';
// })


/**
 * Bind an event listener to the save button to save form data to the IndexedDB data store
 * @param {IDBDatabase} IndexedDB database connection
 **/
function bindSaveButton(db) {
  var date = new Date();
  var timestamp = date.getTime();
  var realtime = msToTime(timestamp);
  if (userType.checked) {
    console.log("slider working");
    usercheck = 'anonymous';
  } else {
    usercheck = 'prajwal';
  }
  console.log(usercheck);
  console.log('bind button');

  // Note that we have to bind the event listener after we have a database connection
  questionForm.addEventListener('submit', event => {
    event.preventDefault();
    console.log('submitted');
    // Get transaction and store
    var transaction = db.transaction(
      ['questions'],
      'readwrite'
    );
    console.log('got transaction', transaction);
    // Add data from inputs and listen for success
    var objectStores = transaction.objectStore('questions');
    var request = objectStores.add({
      id: qsID,
      user: usercheck,
      question: questionInput.value,
      time: realtime
    });

    qsID++;

    console.log('added??');
    request.addEventListener('success', event => {
      console.log('Successfully added data', event.target.result);
    });

    request.addEventListener('error', event => {
      console.log('error', event.target.error);
    })
    // Update the list
  });
}
/**
 * Load data from the IndexedDB store and populate the table
 * @param {IDBDatabase} IndexedDB database connection
 **/

/**
 * Connect to the IndexedDB database
 **/
function connectToDB() {
  // Connect to database
  var dbconnect = indexedDB.open('question-db', 2);

  // Listen for success and bind save button and load data
  dbconnect.addEventListener('success', event => {
    var db = event.target.result;
    console.log('connected event', event);
    bindSaveButton(db);

  });
  // Listen for error event and show the error
  dbconnect.addEventListener('error', event => {
    console.log('error connecting', event.target.error);
  });
  // Listen for the uppgradeneeded event
  dbconnect.addEventListener('upgradeneeded', event => {
    console.log('upgrade needed', event)
    var db = event.target.result;
    // Create an object store to track people
    var objectStore = db.createObjectStore("questions", {
      keyPath: "id"
    });
    objectStore.createIndex('user', 'user', {
      unique: false
    });
    objectStore.createIndex('question', 'question', {
      unique: false
    });
    objectStore.createIndex('time', 'time', {
      unique: false
    });
  });
}

console.log('reload');
document.addEventListener('DOMContentLoaded', connectToDB);
