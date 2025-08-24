// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    if (hamburger) hamburger.classList.remove('active');
    if (navMenu) navMenu.classList.remove('active');
}));

// Form Validation for Admission Form
if (document.getElementById('admissionForm')) {
    document.getElementById('admissionForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const requiredFields = this.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = '#dc3545';
                isValid = false;
            } else {
                field.style.borderColor = '#28a745';
            }
        });
        
        // Check declarations
        const declarations = ['declaration1', 'declaration2'];
        declarations.forEach(id => {
            const checkbox = document.getElementById(id);
            if (checkbox && !checkbox.checked) {
                isValid = false;
                checkbox.parentElement.style.color = '#dc3545';
            } else if (checkbox) {
                checkbox.parentElement.style.color = '#28a745';
            }
        });
        
        if (isValid) {
            alert('আপনার আবেদনটি সফলভাবে জমা হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
            this.reset();
            // Reset field colors
            requiredFields.forEach(field => {
                field.style.borderColor = '#e1e8ed';
            });
        } else {
            alert('অনুগ্রহ করে সকল প্রয়োজনীয় তথ্য পূরণ করুন এবং ঘোষণাসমূহে টিক দিন।');
        }
    });
}

// Contact Form Validation
if (document.getElementById('contactForm')) {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('contactName').value.trim();
        const phone = document.getElementById('contactPhone').value.trim();
        const message = document.getElementById('contactMessage').value.trim();
        
        if (name && phone && message) {
            alert('আপনার বার্তাটি পাঠানো হয়েছে। ধন্যবাদ!');
            this.reset();
        } else {
            alert('অনুগ্রহ করে সকল প্রয়োজনীয় তথ্য পূরণ করুন।');
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation to cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.activity-card, .feature-item, .contact-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});