// Listener for form Submit

document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save bookmark
function saveBookmark(e) {
  //console.log('hi there');
  // Get form values
  var siteName = document.getElementById('siteName').value;

  var siteUrl = document.getElementById('siteUrl').value;

  var bookmark = {
    name : siteName,
    url : siteUrl
  }

  // Check bookmarks is null
  if(localStorage.getItem('bookmarks') === null ) {
    // init array
    var bookmarks = [];
    // Add to array
    bookmarks.push(bookmark);
    // Set to local localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Add bookmark to that array
    bookmarks.push(bookmark);
    // Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  }
  //
  // // Local Storage
  // localStorage.setItem('test', 'hello world');
  // console.log(localStorage.getItem('test'));
  // localStorage.removeItem('test');
  // console.log(localStorage.getItem('test'));

// Prevent form from submitting
  e.preventDefault();
}


// Fetch bookmarks
function fetchBookmarks() {
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  console.log(bookmarks);
}
