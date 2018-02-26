// Listener for form Submit

document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save bookmark
function saveBookmark(e) {
  //console.log('hi there');

// Prevent form from submitting
  e.preventDefault();
}
