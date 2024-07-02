const menuLinks = document.querySelectorAll('nav ul li a');

menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor tag behavior (navigation)
    const targetUrl = link.textContent.toLowerCase(); // Get the clicked menu item text

    // Redirect based on clicked menu item text
    switch (targetUrl) {
      case "home":
        window.location.href = "Index.html"; // Replace with your actual URL
        break;
      case "tutorials":
        window.location.href = "Tutorials.html"; // Replace with your actual URL
        break;
      case "discord":
        window.location.href = "discord.html"; // Replace with your actual URL
        break;
      case "information":
        window.location.href = "information.html"; // Replace with your actual URLs
        break;
      case "events":
        window.location.href = "Events.html"; // Replace with your actual URL
        break;
      case "members":
        window.location.href = "your_members_url"; // Replace with your actual URL
        break;
      default:
        break; // Handle unexpected clicks (optional)
    }
  });
});