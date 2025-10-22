// ===========================
// Gallery Page JavaScript
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.gallery-filter .filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item-full');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    let currentImageIndex = 0;
    let visibleImages = [];

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterGallery(filter);
        });
    });

    function filterGallery(category) {
        visibleImages = [];
        let index = 0;

        galleryItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
                visibleImages.push(item);
                item.setAttribute('data-visible-index', index);
                index++;
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    }

    // Add transition styles
    galleryItems.forEach(item => {
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        visibleImages.push(item);
    });

    // Initialize visible images
    filterGallery('all');

    // Lightbox functionality
    window.openLightbox = function(button) {
        const galleryItem = button.closest('.gallery-item-full');
        const img = galleryItem.querySelector('img');
        const caption = galleryItem.querySelector('h4').textContent;
        
        currentImageIndex = parseInt(galleryItem.getAttribute('data-visible-index'));
        
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightboxCaption.textContent = caption;
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeLightbox = function() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    window.navigateLightbox = function(direction) {
        currentImageIndex += direction;
        
        if (currentImageIndex < 0) {
            currentImageIndex = visibleImages.length - 1;
        } else if (currentImageIndex >= visibleImages.length) {
            currentImageIndex = 0;
        }
        
        const currentItem = visibleImages[currentImageIndex];
        const img = currentItem.querySelector('img');
        const caption = currentItem.querySelector('h4').textContent;
        
        lightboxImage.style.opacity = '0';
        setTimeout(() => {
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt;
            lightboxCaption.textContent = caption;
            lightboxImage.style.opacity = '1';
        }, 200);
    };

    // Keyboard navigation for lightbox
    document.addEventListener('keydown', function(e) {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                navigateLightbox(-1);
            } else if (e.key === 'ArrowRight') {
                navigateLightbox(1);
            }
        }
    });

    // Close lightbox when clicking outside image
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Masonry layout adjustment (optional enhancement)
    function adjustMasonryLayout() {
        const grid = document.querySelector('.masonry-gallery');
        if (!grid) return;

        const items = grid.querySelectorAll('.gallery-item-full');
        items.forEach((item, index) => {
            // Add slight delay for staggered animation
            item.style.animationDelay = `${index * 0.05}s`;
        });
    }

    adjustMasonryLayout();

    // Handle window resize for responsive masonry
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(adjustMasonryLayout, 250);
    });
});
