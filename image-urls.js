/**
 * CENTRALIZED IMAGE URL CONFIGURATION
 * =====================================
 * 
 * This file contains all image URLs used across the website.
 * Update the URLs here to use images from Google Photos, Google Drive, or any online source.
 * 
 * HOW TO GET DIRECT IMAGE URLS:
 * 
 * 1. GOOGLE PHOTOS:
 *    - Open the photo in Google Photos
 *    - Click Share > Create Link
 *    - Copy the link (it will look like: https://photos.app.goo.gl/xxxxx)
 *    - For direct embed, you may need to use a service like photos.google.com direct link
 * 
 * 2. GOOGLE DRIVE:
 *    - Right-click the image > Get shareable link
 *    - Change sharing to "Anyone with the link can view"
 *    - Copy the file ID from the URL (between /d/ and /view)
 *    - Use format: https://drive.google.com/uc?export=view&id=FILE_ID
 *    - Example: https://drive.google.com/uc?export=view&id=1A2B3C4D5E6F7G8H9I0J
 * 
 * 3. IMGUR (Free Image Hosting):
 *    - Upload image to imgur.com
 *    - Right-click > Copy image address
 *    - Use the direct link (ends with .jpg, .png, etc.)
 * 
 * 4. OTHER SERVICES:
 *    - Cloudinary, imgbb, or any CDN
 *    - Make sure the URL is a direct link to the image
 */

const imageUrls = {
    // ==========================================
    // HOME PAGE IMAGES
    // ==========================================
    home: {
        hero: 'https://drive.google.com/uc?export=view&id=YOUR_HERO_IMAGE_ID',
        communityEvent: 'https://drive.google.com/uc?export=view&id=YOUR_COMMUNITY_EVENT_ID',
        gallery1: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY1_ID',
        gallery2: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY2_ID',
        gallery3: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY3_ID',
        gallery4: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY4_ID',
    },

    // ==========================================
    // ABOUT PAGE IMAGES
    // ==========================================
    about: {
        story: 'https://drive.google.com/uc?export=view&id=YOUR_STORY_IMAGE_ID',
        jainSamaj: 'https://drive.google.com/uc?export=view&id=YOUR_JAIN_SAMAJ_ID',
        pastEvent1: 'https://drive.google.com/uc?export=view&id=YOUR_PAST_EVENT1_ID',
        pastEvent2: 'https://drive.google.com/uc?export=view&id=YOUR_PAST_EVENT2_ID',
        pastEvent3: 'https://drive.google.com/uc?export=view&id=YOUR_PAST_EVENT3_ID',
        pastEvent4: 'https://drive.google.com/uc?export=view&id=YOUR_PAST_EVENT4_ID',
        pastEvent5: 'https://drive.google.com/uc?export=view&id=YOUR_PAST_EVENT5_ID',
        pastEvent6: 'https://drive.google.com/uc?export=view&id=YOUR_PAST_EVENT6_ID',
    },

    // ==========================================
    // COMMITTEE PAGE IMAGES
    // ==========================================
    committee: {
        // Executive Committee
        president: 'https://drive.google.com/uc?export=view&id=YOUR_PRESIDENT_ID',
        vicePresident: 'https://photos.app.goo.gl/T8dKU8fSAbHU1ABC6',
        secretary: 'https://drive.google.com/uc?export=view&id=YOUR_SECRETARY_ID',
        treasurer: 'https://drive.google.com/uc?export=view&id=YOUR_TREASURER_ID',
        
        // Committee Members
        member1: 'https://drive.google.com/uc?export=view&id=YOUR_MEMBER1_ID',
        member2: 'https://drive.google.com/uc?export=view&id=YOUR_MEMBER2_ID',
        member3: 'https://drive.google.com/uc?export=view&id=YOUR_MEMBER3_ID',
        member4: 'https://drive.google.com/uc?export=view&id=YOUR_MEMBER4_ID',
        member5: 'https://drive.google.com/uc?export=view&id=YOUR_MEMBER5_ID',
        member6: 'https://drive.google.com/uc?export=view&id=YOUR_MEMBER6_ID',
        member7: 'https://drive.google.com/uc?export=view&id=YOUR_MEMBER7_ID',
        member8: 'https://drive.google.com/uc?export=view&id=YOUR_MEMBER8_ID',
    },

    // ==========================================
    // EVENTS PAGE IMAGES
    // ==========================================
    events: {
        // Upcoming Events
        mahavirJayanti: 'https://drive.google.com/uc?export=view&id=YOUR_MAHAVIR_JAYANTI_ID',
        culturalFestival: 'https://drive.google.com/uc?export=view&id=YOUR_CULTURAL_FESTIVAL_ID',
        communityService: 'https://drive.google.com/uc?export=view&id=YOUR_COMMUNITY_SERVICE_ID',
        workshop: 'https://drive.google.com/uc?export=view&id=YOUR_WORKSHOP_ID',
        
        // Past Events
        pastParyushan2024: 'https://drive.google.com/uc?export=view&id=YOUR_PAST_PARYUSHAN_ID',
        pastDiwali2024: 'https://drive.google.com/uc?export=view&id=YOUR_PAST_DIWALI_ID',
        pastYouthProgram: 'https://drive.google.com/uc?export=view&id=YOUR_PAST_YOUTH_ID',
        pastCharityDrive: 'https://drive.google.com/uc?export=view&id=YOUR_PAST_CHARITY_ID',
        pastCulturalNight: 'https://drive.google.com/uc?export=view&id=YOUR_PAST_CULTURAL_ID',
        pastHealthCamp: 'https://drive.google.com/uc?export=view&id=YOUR_PAST_HEALTH_ID',
    },

    // ==========================================
    // GALLERY PAGE IMAGES
    // ==========================================
    gallery: {
        // Religious Events
        mahavirJayanti1: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY_MAHAVIR_ID',
        paryushan1: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY_PARYUSHAN_ID',
        diwali1: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY_DIWALI_ID',
        
        // Cultural Events
        dancePerformance: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY_DANCE_ID',
        culturalFestival1: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY_CULTURAL_ID',
        musicConcert: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY_MUSIC_ID',
        
        // Community Service
        foodDistribution: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY_FOOD_ID',
        healthCamp: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY_HEALTH_ID',
        educationDrive: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY_EDUCATION_ID',
        
        // Workshops
        workshop1: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY_WORKSHOP1_ID',
        youthWorkshop: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY_YOUTH_WS_ID',
        craftWorkshop: 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY_CRAFT_WS_ID',
        
        // Video Thumbnails
        videoThumb1: 'https://drive.google.com/uc?export=view&id=YOUR_VIDEO_THUMB1_ID',
        videoThumb2: 'https://drive.google.com/uc?export=view&id=YOUR_VIDEO_THUMB2_ID',
        videoThumb3: 'https://drive.google.com/uc?export=view&id=YOUR_VIDEO_THUMB3_ID',
    }
};

/**
 * PLACEHOLDER IMAGE (Optional)
 * Use this as a fallback if an image is not available
 */
const placeholderImage = 'https://via.placeholder.com/800x600/d4a373/ffffff?text=Mahila+Parishad';

/**
 * Export the configuration
 * This object will be used by the image loader script
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { imageUrls, placeholderImage };
}
