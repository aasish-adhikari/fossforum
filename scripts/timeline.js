function loadData(db) {
  var store = db.transaction(['questions']).objectStore('questions');
    var cursor = store.openCursor();
    cursor.addEventListener('success', event => {
      var thisCursor = event.target.result;
      if(thisCursor) {
        console.log('key', thisCursor.key);
        console.log('value', thisCursor.value);
        thisCursor.continue();
      } else {
        console.log('No more items');
      }
    });
  }

console.log('timeline opened');
document.addEventListener('DOMContentLoaded', loadData(db));
