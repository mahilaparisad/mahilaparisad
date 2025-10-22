// ===========================
// Contact Page JavaScript
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    // Check if coming from event registration
    const eventRegistration = sessionStorage.getItem('eventRegistration');
    if (eventRegistration) {
        const subjectSelect = document.getElementById('subject');
        const messageTextarea = document.getElementById('message');
        
        if (subjectSelect && messageTextarea) {
            subjectSelect.value = 'events';
            messageTextarea.value = `I would like to register for: ${eventRegistration}\n\n`;
            messageTextarea.focus();
            
            // Clear session storage
            sessionStorage.removeItem('eventRegistration');
            
            // Scroll to form
            contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Form validation and submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Validate form
            if (validateForm(data)) {
                // Simulate form submission (replace with actual API call)
                submitForm(data);
            }
        });
    }

    function validateForm(data) {
        // Reset previous errors
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.style.borderColor = '';
        });
        formMessage.className = 'form-message';
        formMessage.textContent = '';

        // Validate required fields
        if (!data.name || data.name.trim().length < 2) {
            showError('Please enter your full name (at least 2 characters).');
            document.getElementById('name').style.borderColor = '#e74c3c';
            return false;
        }

        if (!data.email || !isValidEmail(data.email)) {
            showError('Please enter a valid email address.');
            document.getElementById('email').style.borderColor = '#e74c3c';
            return false;
        }

        if (!data.subject) {
            showError('Please select a subject.');
            document.getElementById('subject').style.borderColor = '#e74c3c';
            return false;
        }

        if (!data.message || data.message.trim().length < 10) {
            showError('Please enter a message (at least 10 characters).');
            document.getElementById('message').style.borderColor = '#e74c3c';
            return false;
        }

        return true;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showError(message) {
        formMessage.className = 'form-message error';
        formMessage.textContent = message;
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function showSuccess(message) {
        formMessage.className = 'form-message success';
        formMessage.textContent = message;
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function submitForm(data) {
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        // Simulate API call (replace with actual backend integration)
        setTimeout(() => {
            // Simulate successful submission
            console.log('Form submitted:', data);
            
            showSuccess('Thank you for your message! We will get back to you within 24-48 hours.');
            contactForm.reset();
            
            // Reset button
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;

            // In production, replace the above with actual API call:
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    showSuccess('Thank you for your message! We will get back to you soon.');
                    contactForm.reset();
                } else {
                    showError('Something went wrong. Please try again later.');
                }
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            })
            .catch(error => {
                showError('Network error. Please check your connection and try again.');
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            });
            */
        }, 1500);
    }

    // FAQ accordion functionality
    window.toggleFAQ = function(button) {
        const faqItem = button.closest('.faq-item');
        const allItems = document.querySelectorAll('.faq-item');
        
        // Close all other items
        allItems.forEach(item => {
            if (item !== faqItem && item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });
        
        // Toggle current item
        faqItem.classList.toggle('active');
    };

    // Real-time validation (optional enhancement)
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (this.value && !isValidEmail(this.value)) {
                this.style.borderColor = '#e74c3c';
                showError('Please enter a valid email address.');
            } else {
                this.style.borderColor = '';
                if (formMessage.classList.contains('error')) {
                    formMessage.className = 'form-message';
                    formMessage.textContent = '';
                }
            }
        });
    }

    // Character counter for message textarea
    const messageTextarea = document.getElementById('message');
    if (messageTextarea) {
        const maxLength = 1000;
        const counter = document.createElement('div');
        counter.className = 'char-counter';
        counter.style.cssText = `
            text-align: right;
            font-size: 0.85rem;
            color: var(--text-light);
            margin-top: 0.3rem;
        `;
        messageTextarea.parentElement.appendChild(counter);

        function updateCounter() {
            const remaining = maxLength - messageTextarea.value.length;
            counter.textContent = `${messageTextarea.value.length} / ${maxLength} characters`;
            counter.style.color = remaining < 50 ? '#e74c3c' : 'var(--text-light)';
        }

        messageTextarea.setAttribute('maxlength', maxLength);
        messageTextarea.addEventListener('input', updateCounter);
        updateCounter();
    }

    // Phone number formatting (optional)
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 10) {
                value = value.slice(0, 10);
            }
            e.target.value = value;
        });
    }
});
