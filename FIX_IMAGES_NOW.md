# 🚨 FIXING IMAGE REFERENCES - Quick Guide

## Current Issue
Your HTML files still reference local images like `images/vice-president.jpg` but you want to use online URLs.

---

## ✅ SOLUTION: Two Methods

### **Method 1: Automatic Replacement (Already Set Up!)**

I've added the automatic image loader to `committee.html`. Now you just need to:

1. **Update `image-urls.js` with your real Google Drive URLs**
2. **Replace all `YOUR_XXX_ID` with actual file IDs**
3. **The page will automatically use online URLs!**

**Example:**
```javascript
// BEFORE (in image-urls.js)
vicePresident: 'https://drive.google.com/uc?export=view&id=YOUR_VICE_PRESIDENT_ID',

// AFTER (with your real file ID)
vicePresident: 'https://drive.google.com/uc?export=view&id=1XyZ789AbC456DeF',
```

**Then just open `committee.html` in browser - images will load automatically!**

---

### **Method 2: Direct HTML Replacement (Faster for One Image)**

Replace the image source directly in the HTML:

**BEFORE:**
```html
<img src="images/vice-president.jpg" alt="Vice President">
```

**AFTER:**
```html
<img src="https://drive.google.com/uc?export=view&id=1XyZ789AbC456DeF" alt="Vice President">
```

---

## 🔥 QUICK FIX FOR YOUR GOOGLE PHOTOS LINK

I noticed you have:
```javascript
vicePresident: 'https://photos.app.goo.gl/T8dKU8fSAbHU1ABC6',
```

**This won't work!** Google Photos links can't be embedded directly.

### **Solution:**

**Option A: Upload to Google Drive**
1. Download the photo from Google Photos
2. Upload to Google Drive
3. Share → "Anyone with link can view"
4. Get file ID
5. Use: `https://drive.google.com/uc?export=view&id=FILE_ID`

**Option B: Use Imgur**
1. Download from Google Photos
2. Upload to [imgur.com](https://imgur.com)
3. Right-click → Copy image address
4. Use that URL directly

---

## 📋 STEP-BY-STEP: Getting Google Drive Direct URL

1. **Upload image to Google Drive**

2. **Right-click the file → "Get link"**

3. **Set to "Anyone with the link can view"**

4. **Copy the URL** - it looks like:
   ```
   https://drive.google.com/file/d/1ABC123XYZ789DEF/view
   ```

5. **Extract the File ID** (between `/d/` and `/view`):
   ```
   1ABC123XYZ789DEF
   ```

6. **Create the direct URL**:
   ```
   https://drive.google.com/uc?export=view&id=1ABC123XYZ789DEF
   ```

7. **Update in `image-urls.js`**:
   ```javascript
   vicePresident: 'https://drive.google.com/uc?export=view&id=1ABC123XYZ789DEF',
   ```

---

## 🎯 RECOMMENDED WORKFLOW

### **For Testing (Fast):**
1. Get ONE image URL from Google Drive
2. Update that ONE line in `image-urls.js`
3. Open `committee.html` in browser
4. Check if that image loads
5. If it works, continue with remaining images

### **For Complete Setup:**
1. Upload ALL committee images to Google Drive
2. Create a list of all file IDs
3. Update ALL placeholders in `image-urls.js`
4. Add the script tags to ALL HTML pages:
   ```html
   <script src="image-urls.js"></script>
   <script src="js/image-loader.js"></script>
   ```
5. Test each page

---

## ✅ What I've Already Done

✅ Added automatic image loader scripts to `committee.html`
✅ Created the infrastructure for online images
✅ Set up centralized configuration in `image-urls.js`

---

## 🎯 What You Need to Do Now

**Option 1 (Recommended):**
1. Upload your committee photos to Google Drive
2. Get the file IDs for each image
3. Update `image-urls.js` with real URLs
4. Open `committee.html` - images will load automatically!

**Option 2 (Quick Test):**
1. Get just ONE image URL
2. Replace `src="images/vice-president.jpg"` directly in HTML
3. Test in browser
4. Then decide which method to use for the rest

---

## 🆘 IMMEDIATE ACTION

**Try this RIGHT NOW to test:**

1. **Upload ONE photo to Google Drive** (e.g., vice president photo)
2. **Get the direct URL** using the steps above
3. **Update in `image-urls.js`** (line with `vicePresident:`)
4. **Open `committee.html` in browser**
5. **See if the vice president image loads!**

If it works, you know the system is working and you can continue with the rest.

---

## 💡 Pro Tip

Use **IMAGE_URL_MANAGER.html** - it has a visual form where you can paste all your URLs and it will generate the complete `image-urls.js` code for you!

1. Open `IMAGE_URL_MANAGER.html` in browser
2. Fill in the URLs in the form
3. Click "Generate Code"
4. Copy and replace the content of `image-urls.js`

---

**Need more help? Open `ONLINE_IMAGES_GUIDE.md` for complete documentation!**
