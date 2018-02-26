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

  // Local Storage storage
  localStorage.setItem('test', 'hello world');
  console.log(localStorage.getItem('test'));
  localStorage.removeItem('test');
  console.log(localStorage.getItem('test'));

// Prevent form from submitting
  e.preventDefault();
}
