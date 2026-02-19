// Function to handle the search
  function handleSearch() {
    // Get the search query from the input field
    var searchQuery = document.getElementById("search-box").value.toLowerCase();
    
    // Define an object with the available content pages and their corresponding names
    var contentPages = {
      "copywriting services": "services.html",
      "social media services": "services2.html",
      "english writing services": "services3.html",
      "translation services": "services4.html"
    };
    
    // Check if the search query matches any content page name
    if (contentPages.hasOwnProperty(searchQuery)) {
      // Redirect the user to the corresponding content page
      window.location.href = contentPages[searchQuery];
    } else {
      // Handle the case when no matching content page is found
      alert("No results found for the search query: " + searchQuery);
    }
  }
  
  // Attach the handleSearch function to the search button click event
  document.querySelector(".fas.fa-search").addEventListener("click", handleSearch);
  
  // Attach the handleSearch function to the Enter key press event in the search input field
  document.getElementById("search-box").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  });