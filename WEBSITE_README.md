# Mahila Parishad Website

A modern, responsive website for Mahila Parishad - the ladies' wing of Jain Samaj community. Built with HTML5, CSS3, and JavaScript.

## 🌟 Features

### Pages
- **Home Page** - Welcoming hero section, introduction, upcoming events, and mission highlights
- **About Us** - History, mission, vision, core values, and Jain Samaj connection
- **Branches** - Searchable and filterable list of all branches across zones
- **Events** - Upcoming and past events with detailed information and calendar
- **Committee** - Executive committee and members with photos and bios
- **Gallery** - Photo and video gallery with lightbox and filtering
- **Contact Us** - Contact form, location map, FAQs, and social links

### Design Features
- ✨ Clean, minimalistic light theme with pastel colors
- 🎨 Jain cultural aesthetics (beige, pastel pink, gold accents)
- 📱 Fully responsive and mobile-friendly
- ♿ Accessible (ARIA labels, semantic HTML, keyboard navigation)
- 🔍 SEO optimized with meta tags
- ⚡ Smooth animations and transitions
- 🎯 Interactive UI elements with hover effects

### Technical Features
- Modern CSS Grid and Flexbox layouts
- Intersection Observer for scroll animations
- Lazy loading images for performance
- Mobile-first responsive design
- Cross-browser compatible
- Print-friendly styles
- Reduced motion support for accessibility

## 📁 Project Structure

```
mahilaparisad/
├── index.html              # Home page
├── about.html              # About Us page
├── branches.html           # Branches page
├── events.html             # Events page
├── committee.html          # Committee Members page
├── gallery.html            # Gallery page
├── contact.html            # Contact page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   ├── main.js             # Main JavaScript
│   ├── branches.js         # Branches page functionality
│   ├── events.js           # Events page functionality
│   ├── gallery.js          # Gallery lightbox & filtering
│   └── contact.js          # Contact form handling
├── images/                 # Image assets folder
│   ├── gallery/           # Gallery images
│   ├── hero-bg.jpg        # Hero background
│   ├── community-event.jpg
│   └── ... (other images)
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
No special requirements - just a modern web browser!

### Installation

1. **Clone or download this repository**
   ```bash
   git clone <repository-url>
   cd mahilaparisad
   ```

2. **Add Images**
   Place your images in the `images` folder. Required images:
   - `hero-bg.jpg` - Hero section background
   - `community-event.jpg` - Home page introduction
   - `about-story.jpg` - About page story section
   - `jain-samaj.jpg` - Jain Samaj connection
   - Committee member photos (`president.jpg`, `vice-president.jpg`, etc.)
   - Event photos for past and upcoming events
   - Gallery images in `images/gallery/` folder

3. **Open in Browser**
   Simply open `index.html` in your web browser, or use a local server:
   
   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Then open http://localhost:8000
   ```
   
   **Using Node.js (with npx):**
   ```bash
   npx http-server
   ```
   
   **Using VS Code:**
   - Install "Live Server" extension
   - Right-click `index.html` and select "Open with Live Server"

## 🎨 Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #d4a373;      /* Main gold color */
    --primary-dark: #b8885c;       /* Darker gold */
    --primary-light: #e8c9a8;      /* Lighter gold */
    --secondary-color: #f5e6d3;    /* Cream */
    /* ... other colors */
}
```

### Content
- Update text content in HTML files
- Replace placeholder contact details
- Add your organization's social media links
- Update Google Maps iframe in `contact.html` with your location

### Images
Replace placeholder image references with actual images:
- Update `src` attributes in HTML files
- Maintain aspect ratios for best results
- Recommended formats: JPG for photos, PNG for logos
- Optimize images for web (compress before uploading)

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Alt text for images
- Focus indicators
- Color contrast compliance
- Screen reader friendly
- Reduced motion support

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Styling with Grid, Flexbox, animations
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Cormorant Garamond, Lato)

## 📈 SEO Optimization

- Meta descriptions on all pages
- Semantic HTML structure
- Optimized headings (H1-H4)
- Alt text for images
- Open Graph tags ready (can be added)
- Fast loading times
- Mobile-friendly

## 🎯 Future Enhancements

Consider adding:
- [ ] Blog/News section
- [ ] Member login portal
- [ ] Online event registration
- [ ] Newsletter subscription
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Advanced search functionality
- [ ] Social media feed integration
- [ ] Payment gateway for donations

## 📝 Form Handling

The contact form currently has client-side validation. To make it functional:

1. **Email Service** (e.g., Formspree, EmailJS)
2. **Backend API** (Node.js, PHP, Python)
3. **Third-party Services** (Netlify Forms, Google Forms)

Update the `submitForm()` function in `js/contact.js` with your backend endpoint.

## 🌐 Deployment

### GitHub Pages
```bash
# Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# Enable GitHub Pages in repository settings
```

### Netlify
- Drag and drop the folder to Netlify
- Or connect your Git repository

### Vercel
```bash
vercel deploy
```

## 📞 Support

For issues or questions:
- Email: info@mahilaparishad.org
- Open an issue in the repository

## 📄 License

This project is open source and available for use by Mahila Parishad and affiliated organizations.

## 👏 Credits

- Design & Development: Custom built for Mahila Parishad
- Icons: Font Awesome
- Fonts: Google Fonts
- Inspiration: Traditional Jain cultural aesthetics

---

**Made with ❤️ for Mahila Parishad - Jain Samaj**

For updates and customization requests, please contact the development team.
