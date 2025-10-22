// ===========================
// Events Page JavaScript
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const shareButtons = document.querySelectorAll('.share-btn');

    // Tab switching functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Update active button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update active content
            tabContents.forEach(content => {
                if (content.id === targetTab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    // Share button functionality
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get event details from parent card
            const eventCard = this.closest('.event-content-card') || this.closest('.past-event-card-detailed');
            const eventTitle = eventCard.querySelector('h3').textContent;
            
            // Check if Web Share API is available
            if (navigator.share) {
                navigator.share({
                    title: eventTitle,
                    text: `Check out this event: ${eventTitle}`,
                    url: window.location.href
                }).then(() => {
                    showNotification('Event shared successfully!', 'success');
                }).catch((error) => {
                    if (error.name !== 'AbortError') {
                        fallbackShare(eventTitle);
                    }
                });
            } else {
                fallbackShare(eventTitle);
            }
        });
    });

    // Fallback share function
    function fallbackShare(eventTitle) {
        const url = window.location.href;
        const text = `Check out this event: ${eventTitle} - ${url}`;
        
        // Copy to clipboard
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                showNotification('Event link copied to clipboard!', 'success');
            }).catch(() => {
                showNotification('Unable to copy link', 'error');
            });
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();
            
            try {
                document.execCommand('copy');
                showNotification('Event link copied to clipboard!', 'success');
            } catch (err) {
                showNotification('Unable to copy link', 'error');
            }
            
            document.body.removeChild(textArea);
        }
    }

    // Notification function
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            padding: 1rem 1.5rem;
            background-color: ${type === 'success' ? '#d4edda' : '#f8d7da'};
            color: ${type === 'success' ? '#155724' : '#721c24'};
            border: 1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'};
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 9999;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Add notification animations
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(notificationStyle);

    // Add smooth scroll to event registration
    document.querySelectorAll('a[href*="contact.html"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // Store event info in session storage for contact form
            const eventCard = this.closest('.event-content-card');
            if (eventCard) {
                const eventTitle = eventCard.querySelector('h3').textContent;
                sessionStorage.setItem('eventRegistration', eventTitle);
            }
        });
    });
});
