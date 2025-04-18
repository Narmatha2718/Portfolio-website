/* script.js */

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        
        if (name && email && message) {
            Swal.fire({
                title: "Message Sent!",
                text: `Thank you, ${name}! Your message has been sent successfully.`,
                icon: "success",
                confirmButtonColor: "#ffdd57"
            });
            contactForm.reset();
        } else {
            Swal.fire({
                title: "Error!",
                text: "Please fill in all fields.",
                icon: "error",
                confirmButtonColor: "#ff6b6b"
            });
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Project filter functionality
    const projectFilterButtons = document.querySelectorAll(".filter-button");
    const projects = document.querySelectorAll(".project");

    projectFilterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const filter = this.getAttribute("data-filter");
            filterProjects(filter);
            projectFilterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });

    function filterProjects(filter) {
        projects.forEach(project => {
            project.style.transition = "opacity 0.5s ease-in-out";
            project.style.opacity = "0";
            setTimeout(() => {
                if (filter === "all" || project.classList.contains(filter)) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
                project.style.opacity = "1";
            }, 300);
        });
    }
});
