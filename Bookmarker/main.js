// find the form and add an event listener to it
document.querySelector("form").addEventListener("submit", savebookmark);

// Save Bookmarks
function saveBookmark(e) {
// prevent from page reloading
e.preventDefault();

// Get site name and site url
var siteName = document.querySelector("sitename").Value;
var siteUrl = document-querySelector(#siteUrl")value;





}

// Check if the local storage is empty
if (localStorage.getItem("bookmarks") === null} {
// 





















// Fetch bookmarks
function fetchBookmarks() {
  // Get bookmarks from local storage
var bookmarks = JSON.parse(localStorage)

// Select the bookmarks div
var output = document.querySelector(#bookmarks);

