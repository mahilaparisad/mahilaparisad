/**
 * IMAGE LOADER SCRIPT
 * ====================
 * This script automatically loads images from the URLs configured in image-urls.js
 * 
 * HOW IT WORKS:
 * 1. Reads image URLs from imageUrls configuration object
 * 2. Maps old image paths to new online URLs
 * 3. Replaces all img src attributes on page load
 * 
 * USAGE:
 * Add these script tags before closing </body> tag in your HTML:
 * <script src="image-urls.js"></script>
 * <script src="js/image-loader.js"></script>
 */

(function() {
    'use strict';

    // Check if imageUrls is loaded
    if (typeof imageUrls === 'undefined') {
        console.warn('imageUrls configuration not found. Please include image-urls.js before image-loader.js');
        return;
    }

    /**
     * Image path mapping
     * Maps old local paths to configuration keys
     */
    const imagePathMap = {
        // Home page
        'images/hero-bg.jpg': 'home.hero',
        'images/community-event.jpg': 'home.communityEvent',
        'images/gallery-1.jpg': 'home.gallery1',
        'images/gallery-2.jpg': 'home.gallery2',
        'images/gallery-3.jpg': 'home.gallery3',
        'images/gallery-4.jpg': 'home.gallery4',

        // About page
        'images/about-story.jpg': 'about.story',
        'images/jain-samaj.jpg': 'about.jainSamaj',
        'images/past-event-1.jpg': 'about.pastEvent1',
        'images/past-event-2.jpg': 'about.pastEvent2',
        'images/past-event-3.jpg': 'about.pastEvent3',
        'images/past-event-4.jpg': 'about.pastEvent4',
        'images/past-event-5.jpg': 'about.pastEvent5',
        'images/past-event-6.jpg': 'about.pastEvent6',

        // Committee page
        'images/president.jpg': 'committee.president',
        'images/vice-president.jpg': 'committee.vicePresident',
        'images/secretary.jpg': 'committee.secretary',
        'images/treasurer.jpg': 'committee.treasurer',
        'images/member-1.jpg': 'committee.member1',
        'images/member-2.jpg': 'committee.member2',
        'images/member-3.jpg': 'committee.member3',
        'images/member-4.jpg': 'committee.member4',
        'images/member-5.jpg': 'committee.member5',
        'images/member-6.jpg': 'committee.member6',
        'images/member-7.jpg': 'committee.member7',
        'images/member-8.jpg': 'committee.member8',

        // Events page
        'images/mahavir-jayanti.jpg': 'events.mahavirJayanti',
        'images/cultural-festival.jpg': 'events.culturalFestival',
        'images/community-service.jpg': 'events.communityService',
        'images/workshop.jpg': 'events.workshop',
        'images/past-paryushan-2024.jpg': 'events.pastParyushan2024',
        'images/past-diwali-2024.jpg': 'events.pastDiwali2024',
        'images/past-youth-program.jpg': 'events.pastYouthProgram',
        'images/past-charity-drive.jpg': 'events.pastCharityDrive',
        'images/past-cultural-night.jpg': 'events.pastCulturalNight',
        'images/past-health-camp.jpg': 'events.pastHealthCamp',

        // Gallery page
        'images/gallery/mahavir-jayanti-1.jpg': 'gallery.mahavirJayanti1',
        'images/gallery/paryushan-1.jpg': 'gallery.paryushan1',
        'images/gallery/diwali-1.jpg': 'gallery.diwali1',
        'images/gallery/dance-performance.jpg': 'gallery.dancePerformance',
        'images/gallery/cultural-festival-1.jpg': 'gallery.culturalFestival1',
        'images/gallery/music-concert.jpg': 'gallery.musicConcert',
        'images/gallery/food-distribution.jpg': 'gallery.foodDistribution',
        'images/gallery/health-camp.jpg': 'gallery.healthCamp',
        'images/gallery/education-drive.jpg': 'gallery.educationDrive',
        'images/gallery/workshop-1.jpg': 'gallery.workshop1',
        'images/gallery/youth-workshop.jpg': 'gallery.youthWorkshop',
        'images/gallery/craft-workshop.jpg': 'gallery.craftWorkshop',
        'images/gallery/video-thumb-1.jpg': 'gallery.videoThumb1',
        'images/gallery/video-thumb-2.jpg': 'gallery.videoThumb2',
        'images/gallery/video-thumb-3.jpg': 'gallery.videoThumb3',
    };

    /**
     * Get nested property from object using dot notation
     * Example: getNestedProperty(obj, 'committee.president')
     */
    function getNestedProperty(obj, path) {
        return path.split('.').reduce((current, prop) => 
            current ? current[prop] : undefined, obj);
    }

    /**
     * Replace image sources with online URLs
     */
    function replaceImageSources() {
        const images = document.querySelectorAll('img[src]');
        let replacedCount = 0;
        let skippedCount = 0;

        images.forEach(img => {
            const currentSrc = img.getAttribute('src');
            
            // Skip if already using online URL
            if (currentSrc.startsWith('http://') || currentSrc.startsWith('https://')) {
                return;
            }

            // Check if we have a mapping for this image
            const configPath = imagePathMap[currentSrc];
            if (configPath) {
                const newUrl = getNestedProperty(imageUrls, configPath);
                
                if (newUrl && !newUrl.includes('YOUR_') && newUrl !== placeholderImage) {
                    img.setAttribute('src', newUrl);
                    img.setAttribute('data-original-src', currentSrc);
                    replacedCount++;
                } else {
                    console.warn(`No URL configured for: ${currentSrc} (${configPath})`);
                    skippedCount++;
                    
                    // Optionally use placeholder
                    if (typeof placeholderImage !== 'undefined') {
                        img.setAttribute('src', placeholderImage);
                        img.setAttribute('data-original-src', currentSrc);
                    }
                }
            }
        });

        console.log(`Image Loader: Replaced ${replacedCount} images, skipped ${skippedCount}`);
    }

    /**
     * Replace CSS background images
     */
    function replaceBackgroundImages() {
        // Replace hero background if configured
        const heroSection = document.querySelector('.hero');
        if (heroSection && imageUrls.home && imageUrls.home.hero) {
            const heroUrl = imageUrls.home.hero;
            if (!heroUrl.includes('YOUR_')) {
                heroSection.style.backgroundImage = `linear-gradient(rgba(212, 163, 115, 0.7), rgba(212, 163, 115, 0.7)), url('${heroUrl}')`;
                console.log('Image Loader: Replaced hero background image');
            }
        }
    }

    /**
     * Add error handling for failed image loads
     */
    function addErrorHandling() {
        const images = document.querySelectorAll('img[src]');
        
        images.forEach(img => {
            img.addEventListener('error', function() {
                console.error(`Failed to load image: ${this.src}`);
                
                // Use placeholder if available
                if (typeof placeholderImage !== 'undefined' && this.src !== placeholderImage) {
                    console.log(`Using placeholder for: ${this.getAttribute('data-original-src') || this.src}`);
                    this.src = placeholderImage;
                }
            });
        });
    }

    /**
     * Initialize image loader
     */
    function init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                replaceImageSources();
                replaceBackgroundImages();
                addErrorHandling();
            });
        } else {
            // DOM already loaded
            replaceImageSources();
            replaceBackgroundImages();
            addErrorHandling();
        }
    }

    // Start the image loader
    init();

    // Export functions for manual use if needed
    window.imageLoader = {
        replace: replaceImageSources,
        replaceBackgrounds: replaceBackgroundImages
    };

})();
