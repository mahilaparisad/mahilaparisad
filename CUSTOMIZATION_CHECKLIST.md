# Quick Customization Checklist

Use this checklist to customize the website for your organization.

## ✅ Essential Updates (Do These First!)

### 1. Contact Information
Update in ALL HTML files (Footer section):

- [ ] Phone numbers
- [ ] Email addresses  
- [ ] Physical address
- [ ] Office hours

Files to update: `index.html`, `about.html`, `branches.html`, `events.html`, `committee.html`, `gallery.html`, `contact.html`

### 2. Social Media Links
Update in footer of all pages:

- [ ] Facebook URL
- [ ] Instagram URL
- [ ] Twitter URL
- [ ] YouTube URL

### 3. Google Maps
In `contact.html`, replace the Google Maps iframe with your location:

```html
<iframe 
    src="YOUR_GOOGLE_MAPS_EMBED_URL"
    ...
</iframe>
```

Get your embed URL from: https://www.google.com/maps

### 4. Organization Name
If your organization has a different name, do a find-and-replace:

- Find: "Mahila Parishad"
- Replace: "Your Organization Name"

## 📝 Content Updates

### Home Page (index.html)

- [ ] Hero section welcome message
- [ ] Introduction text
- [ ] Upcoming events (3 events shown)
- [ ] Mission cards content

### About Page (about.html)

- [ ] Organization history
- [ ] Mission statement
- [ ] Vision statement
- [ ] Core values descriptions
- [ ] Past events information

### Branches Page (branches.html)

- [ ] Branch names and locations
- [ ] Contact persons for each branch
- [ ] Phone numbers and emails
- [ ] Office hours for each branch
- [ ] Zone classifications (North, South, East, West)

### Events Page (events.html)

- [ ] Upcoming event details (date, time, location, description)
- [ ] Past event summaries
- [ ] Event calendar for 2025
- [ ] Event categories

### Committee Page (committee.html)

- [ ] President information and bio
- [ ] Vice President information
- [ ] Secretary information
- [ ] Treasurer information
- [ ] Committee member names and roles
- [ ] Member photos and bios

### Contact Page (contact.html)

- [ ] Contact form subjects (customize dropdown)
- [ ] FAQ questions and answers
- [ ] Physical address
- [ ] Alternative contact methods

## 🎨 Visual Customization

### Colors (css/styles.css)

Find the `:root` section and update:

```css
:root {
    --primary-color: #d4a373;      /* Main brand color */
    --primary-dark: #b8885c;       /* Darker variant */
    --primary-light: #e8c9a8;      /* Lighter variant */
    --secondary-color: #f5e6d3;    /* Secondary/cream color */
}
```

### Fonts

Currently using:
- Headings: Cormorant Garamond
- Body: Lato

To change, update in `css/styles.css` and HTML `<head>` sections.

### Logo

To add a custom logo:
1. Replace the lotus icon in navigation
2. Update in all HTML files:

```html
<!-- Current -->
<i class="fas fa-lotus"></i>

<!-- Replace with -->
<img src="images/logo.png" alt="Organization Logo">
```

## 🖼️ Images

### Required Images (see IMAGES_GUIDE.md for details)

Priority images to add:

1. **Home Page**
   - [ ] `hero-bg.jpg` - Main background image
   - [ ] `community-event.jpg` - Introduction image
   - [ ] 4 gallery preview images

2. **Committee Page**
   - [ ] Photos of all executive members
   - [ ] Photos of committee members

3. **Events Page**
   - [ ] Current event photos
   - [ ] Past event photos

4. **Gallery Page**
   - [ ] Event photo collection
   - [ ] Video thumbnails

### Image Tips
- Optimize all images (compress before uploading)
- Use consistent aspect ratios
- Recommended max file size: 500KB per image
- Use JPG for photos, PNG for graphics

## 🔧 Functionality Updates

### Contact Form (js/contact.js)

To make the contact form actually send emails:

1. **Option 1: Email Service (Formspree)**
   - Sign up at https://formspree.io
   - Get your form endpoint
   - Update form action in `contact.html`

2. **Option 2: Backend API**
   - Set up your own backend
   - Update `submitForm()` function in `js/contact.js`

3. **Option 3: Third-party (Netlify)**
   - Add `netlify` attribute to form
   - Deploy on Netlify

### Event Registration

Currently links to contact page. To add online registration:
- Integrate with Google Forms
- Use Eventbrite embedding
- Build custom registration system

## 🌐 SEO Optimization

### Meta Tags
Update in each HTML file's `<head>`:

```html
<meta name="description" content="Your custom description">
<meta name="keywords" content="your, keywords, here">
```

### Page Titles
Update `<title>` tags to be more specific to your organization.

### Open Graph Tags (for social sharing)
Add to `<head>` of each page:

```html
<meta property="og:title" content="Your Page Title">
<meta property="og:description" content="Description">
<meta property="og:image" content="URL to image">
<meta property="og:url" content="Your page URL">
```

## 📱 Testing Checklist

Before going live:

- [ ] Test all pages on desktop
- [ ] Test all pages on mobile
- [ ] Test all pages on tablet
- [ ] Check all links work
- [ ] Test contact form
- [ ] Test image loading
- [ ] Verify responsive design
- [ ] Check browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Test navigation menu
- [ ] Test gallery lightbox
- [ ] Test event tabs
- [ ] Test branch search/filter
- [ ] Spell check all content
- [ ] Verify all contact information
- [ ] Test accessibility (keyboard navigation)

## 🚀 Deployment

### Quick Deploy Options

**1. GitHub Pages (Free)**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
# Enable GitHub Pages in repo settings
```

**2. Netlify (Free)**
- Drag and drop folder to netlify.com
- Or connect GitHub repository
- Auto-deploys on updates

**3. Vercel (Free)**
```bash
npm i -g vercel
vercel
```

## 📋 Post-Launch

After launching:

- [ ] Submit to Google Search Console
- [ ] Create Google Analytics account
- [ ] Set up Google My Business
- [ ] Create social media posts
- [ ] Share with community members
- [ ] Collect feedback
- [ ] Plan content updates
- [ ] Schedule regular backups

## 🔐 Security

- [ ] Use HTTPS (most hosts provide free SSL)
- [ ] Keep backup of all files
- [ ] If using forms, add CAPTCHA
- [ ] Regular updates to content
- [ ] Monitor for broken links

## 💡 Future Enhancements

Consider adding later:

- [ ] Blog/news section
- [ ] Member login area
- [ ] Online donations
- [ ] Newsletter signup
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Calendar integration
- [ ] Social media feeds
- [ ] Live event streaming
- [ ] Online registration system

---

## Need Help?

Refer to:
- `WEBSITE_README.md` - Complete documentation
- `IMAGES_GUIDE.md` - Image requirements
- Comments in HTML/CSS/JS files
- Online resources: MDN, W3Schools, Stack Overflow

---

**Remember**: Make changes incrementally and test after each change!

Good luck with your website! 🎉
