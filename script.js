// Header Slider
document.addEventListener('DOMContentLoaded', function() {
    // Image slider functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Change slide every 5 seconds
    setInterval(nextSlide, 2000);
    
    // Project form submission
    const projectForm = document.getElementById('projectForm');
    if (projectForm) {
        projectForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Create WhatsApp message
            const whatsappMessage = `New Project Inquiry:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject Subject: ${subject}\nMessage: ${message}`;
            
            // Encode message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Open WhatsApp with the message
            window.open(`https://wa.me/2348037579703?text=${encodedMessage}`, '_blank');
            
            // Reset form
            projectForm.reset();
            
            // Show success message (you could add a proper notification here)
            alert('Thank you for your submission! We will contact you shortly.');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle (could be added if needed)
    // const menuToggle = document.createElement('button');
    // menuToggle.classList.add('menu-toggle');
    // menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    // document.querySelector('header').prepend(menuToggle);
    
    // menuToggle.addEventListener('click', function() {
    //     document.querySelector('nav').classList.toggle('active');
    // });
});