// Listener for form Submit

document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
  console.log('hi there');

  e.preventDefault();
}
