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

/**
 * Bind an event listener to the save button to save form data to the IndexedDB data store
 * @param {IDBDatabase} IndexedDB database connection
 **/
function bindSaveButton(db) {
  var date = new Date();
  var timestamp = date.getTime();
  // var realtime = msToTime(timestamp);
  if (userType.checked) {
    console.log("slider working");
    usercheck = 'anonymous';
  } else {
    usercheck = 'aasish';
  }
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
    var request = objectStores.put({
      id: qsID,
      user: usercheck,
      question: questionInput.value,
      time: timestamp
    });

    qsID++;

    console.log('added??');
    request.addEventListener('success', event => {
      console.log('Successfully added data', event.target.result);
    });

    request.addEventListener('error', event => {
      console.log('error', event.target.error);
    })
    window.location.assign('home.html');
  });
}

function loadData(db) {
  var store = db.transaction(['questions']).objectStore('questions');
  var cursor = store.openCursor();
  cursor.addEventListener('success', evt => {
    var thisCursor = evt.target.result;
    if (thisCursor) {
      console.log('key', thisCursor.key);
      console.log('value', thisCursor.value);

      // Tried setting the post time as well but is getting NaN error.
      // var date = new Date();
      // var timestamp = date.getTime();
      // console.log(timestamp);
      // var addedtime = timeToMs(thisCursor.value.time);
      // console.log(addedtime);
      // var time = timestamp - addedtime;
      // console.log(time);
      // console.log(time);


      var div = document.createElement('div');
      div.className = 'card border-secondary border-secondary border-left-0 border-right-0 rounded-0 mb-3';
      div.innerHTML ='<div class="card-body p-0">'+'<h5 class="card-title m-0 p-3">'+thisCursor.value.question+'</h5>'+'<p class="card-text text-secondary font-weight-light font-small px-3">asked by '+thisCursor.value.user+', 15min ago</p>'+'<div class="btn-toolbar card-footer p-0" role="toolbar" aria-label="Toolbar with button groups">'+'<div class="btn-group mr-2  w-100 d-flex justify-content-around" role="group" aria-label="First group">'+'<button type="button" class="btn btn-light"><i class="pe-7s-like2 pe-2x pe-va pe-fw"></i></button>'+'<button type="button" class="btn btn-light"><i class="pe-7s-light pe-2x pe-va pe-fw"></i></button>'+'<button type="button" class="btn btn-light"><i class="pe-7s-glasses pe-2x pe-va pe-fw"></i></button>'+'<button type="button" class="btn btn-light"><i class="pe-7s-share pe-2x pe-va pe-fw"></i></button>'+'</div>'+'</div>'+'</div>';
      document.getElementById('contain')
        .appendChild(div);
      thisCursor.continue();
    } else {
      console.log('No more items');
    }
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
    //loadData(db);
    if (window.location.href.indexOf('home.html') > -1){
      loadData(db);
    }
    if (window.location.href.indexOf('ask.html') > -1) {
      bindSaveButton(db);
    }

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
