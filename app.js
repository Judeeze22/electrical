document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Validate form
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields");
      return;
    }
  
    // Send form data to server (you can replace the "#" with your form processing URL)
    var formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
  
    // You can use AJAX or fetch to send the form data to the server
    // Example using fetch:
    fetch("#", {
      method: "POST",
      body: formData
    })
    .then(function(response) {
      // Handle response from server (e.g., show success message)
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset();
    })
    .catch(function(error) {
      // Handle error (e.g., show error message)
      alert("An error occurred. Please try again later.");
    });
  });
  