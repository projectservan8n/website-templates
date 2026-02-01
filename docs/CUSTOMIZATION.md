# Customization Guide

Complete guide for customizing templates for your clients.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Placeholder Reference](#placeholder-reference)
3. [Replacing Images](#replacing-images)
4. [Changing Colors](#changing-colors)
5. [Changing Fonts](#changing-fonts)
6. [Setting Up Forms](#setting-up-forms)
7. [Google Maps Setup](#google-maps-setup)
8. [WhatsApp Integration](#whatsapp-integration)
9. [Social Media Links](#social-media-links)
10. [Deployment](#deployment)
11. [Checklist](#checklist)

---

## Getting Started

### Step 1: Copy the Template

```bash
# Copy entire template folder
cp -r templates/restaurant client-projects/alavar-restaurant

# Or create a new git branch
git checkout -b client/alavar-restaurant
```

### Step 2: Open in Editor

Open the project in VS Code or your preferred editor.

### Step 3: Find & Replace

Use **Find & Replace** (Ctrl+H / Cmd+H) across all files:

1. Enable "Replace in Files" (folder icon)
2. Search for `[PLACEHOLDER]`
3. Replace with actual value
4. Review each replacement
5. Save all files

---

## Placeholder Reference

### Universal Placeholders (All Templates)

| Placeholder | Description | Example |
|-------------|-------------|---------|
| `[BUSINESS_NAME]` | Business/clinic/store name | "Alavar Seafood Restaurant" |
| `[TAGLINE]` | Short slogan | "Fresh Seafood, Zamboanga Style" |
| `[PHONE]` | Primary phone | "0917 123 4567" |
| `[WHATSAPP_NUMBER]` | WhatsApp (with country code) | "639171234567" |
| `[EMAIL]` | Email address | "info@alavar.com" |
| `[FULL_ADDRESS]` | Complete street address | "Don Alfaro St., Tetuan" |
| `[SHORT_ADDRESS]` | Brief address for footer | "Tetuan, Zamboanga City" |
| `[GOOGLE_MAPS_EMBED_URL]` | Maps iframe src | "https://www.google.com/maps/embed?pb=..." |
| `[OPERATING_HOURS]` | Brief hours | "10AM - 10PM Daily" |
| `[WEEKDAY_HOURS]` | Mon-Fri hours | "10:00 AM - 10:00 PM" |
| `[SATURDAY_HOURS]` | Saturday hours | "10:00 AM - 10:00 PM" |
| `[SUNDAY_HOURS]` | Sunday hours | "10:00 AM - 9:00 PM" |
| `[FACEBOOK_URL]` | Facebook page link | "https://facebook.com/alavar" |
| `[INSTAGRAM_URL]` | Instagram profile | "https://instagram.com/alavar" |
| `[CURRENT_YEAR]` | For copyright | "2024" |
| `[YOUR_BUSINESS_NAME]` | Your web dev business | "Zambo Web Solutions" |

### Template-Specific Placeholders

Each template has additional placeholders. Refer to the `config.example.js` file in each template folder for the complete list.

---

## Replacing Images

### Image Locations

Each template has an `/assets` folder for images.

### Recommended Image Sizes

| Image Type | Dimensions | Format |
|------------|------------|--------|
| Hero background | 1920×1080 | JPG (< 200KB) |
| Product/menu items | 600×400 | JPG (< 100KB) |
| Team/staff photos | 400×400 | JPG (< 80KB) |
| Gallery images | 800×600 | JPG (< 150KB) |
| Logo | 200×200 | PNG/SVG |
| Favicon | 32×32, 192×192 | PNG |
| Open Graph | 1200×630 | JPG |

### Image Optimization

Before using client images:

1. **Resize** to appropriate dimensions
2. **Compress** using [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
3. **Rename** with descriptive names (e.g., `curacha-dish.jpg`)

### Using Placeholder Images

For initial mockups, use Unsplash:

```html
<!-- Replace with actual image later -->
<img src="https://images.unsplash.com/photo-xxxxx?w=600&h=400&fit=crop" alt="Description">
```

---

## Changing Colors

### Method 1: Edit Tailwind Config (Recommended)

Find the `tailwind.config` script in the `<head>` section:

```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: {
            500: '#0077B6',  // Change this
            600: '#006a9f',  // And this for hover states
            // ... other shades
          },
          accent: {
            500: '#FF6B6B',  // Accent color
          },
        }
      }
    }
  }
</script>
```

### Method 2: Edit CSS Variables

In the `<style>` section:

```css
:root {
  --color-primary: #0077B6;       /* Change this */
  --color-primary-dark: #005c88;  /* Hover/dark state */
}
```

### Color Suggestions by Industry

| Industry | Primary | Accent |
|----------|---------|--------|
| Restaurant | Blue, Orange, Red | Warm neutrals |
| Medical | Teal, Blue | Green |
| Education | Navy, Orange | Yellow, Green |
| Real Estate | Navy, Gold | Green |
| Events | Rose, Pink | Gold |
| Construction | Orange | Yellow, Red |
| Salon | Purple | Rose gold, Gold |
| Fitness | Red, Orange | Blue |

---

## Changing Fonts

### Step 1: Choose Fonts from Google Fonts

Visit [fonts.google.com](https://fonts.google.com/) and select fonts.

### Step 2: Update the Font Link

Replace the Google Fonts link in `<head>`:

```html
<!-- Old -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;500;600&display=swap" rel="stylesheet">

<!-- New -->
<link href="https://fonts.googleapis.com/css2?family=YOUR_DISPLAY_FONT&family=YOUR_BODY_FONT&display=swap" rel="stylesheet">
```

### Step 3: Update Tailwind Config

```javascript
fontFamily: {
  'display': ['Your Display Font', 'Georgia', 'serif'],
  'body': ['Your Body Font', 'system-ui', 'sans-serif'],
}
```

### Font Pairing Suggestions

| Style | Display Font | Body Font |
|-------|--------------|-----------|
| Elegant | Playfair Display | Source Sans |
| Modern | Poppins | Inter |
| Professional | Crimson Text | Outfit |
| Bold | Bebas Neue | Barlow |
| Romantic | Cormorant | Jost |

---

## Setting Up Forms

### Option 1: Formspree (Recommended)

1. Go to [formspree.io](https://formspree.io/)
2. Create free account
3. Create new form
4. Copy endpoint URL
5. Update form action:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Netlify Forms

If hosting on Netlify, add `netlify` attribute:

```html
<form name="contact" method="POST" data-netlify="true">
```

### Option 3: Google Forms (Free)

1. Create Google Form
2. Get pre-filled link
3. Use hidden iframe or redirect

---

## Google Maps Setup

### Getting the Embed URL

1. Go to [Google Maps](https://maps.google.com/)
2. Search for the business location
3. Click "Share"
4. Select "Embed a map"
5. Copy the `src` URL from the iframe code

### Replace Placeholder

```html
<iframe
  src="[GOOGLE_MAPS_EMBED_URL]"
  width="100%"
  height="400"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
></iframe>
```

### Getting Directions URL

1. On Google Maps, click "Directions"
2. Copy the URL from browser
3. Use for "Get Directions" links

---

## WhatsApp Integration

### Format

WhatsApp requires phone numbers in international format without the `+` sign:

```
Philippine mobile: 0917 123 4567
WhatsApp format: 639171234567
```

### Pre-filled Messages

Messages are URL-encoded. Example:

```html
<a href="https://wa.me/639171234567?text=Hi!%20I%20found%20you%20on%20your%20website.">
  Chat on WhatsApp
</a>
```

### Common Messages

| Purpose | Message |
|---------|---------|
| General inquiry | "Hi! I found you on your website. I'd like to inquire about your services." |
| Restaurant order | "Hi! I'd like to place an order." |
| Appointment | "Hi! I'd like to book an appointment." |
| Quotation | "Hi! I'd like to request a quotation for..." |

---

## Social Media Links

### Facebook

Use the page URL:
```
https://facebook.com/pagename
```

### Instagram

Use the profile URL:
```
https://instagram.com/username
```

### Testing Links

Always test social media links before delivery!

---

## Deployment

### Railway (Recommended)

1. Push code to GitHub
2. Go to [railway.app](https://railway.app/)
3. "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway auto-detects static site
6. Click "Deploy"

### Custom Domain (Optional)

1. In Railway, go to Settings → Domains
2. Add custom domain
3. Update DNS with client's registrar

### Alternative Hosts

- **Vercel**: Free, easy deployment
- **Netlify**: Free, includes forms
- **GitHub Pages**: Free for static sites
- **Cloudflare Pages**: Free, fast CDN

---

## Checklist

### Before Delivery

#### Content
- [ ] All `[PLACEHOLDER]` values replaced
- [ ] Phone numbers correct and clickable
- [ ] Email addresses correct
- [ ] Address is accurate
- [ ] Operating hours are correct
- [ ] Prices are up to date

#### Images
- [ ] All placeholder images replaced with client photos
- [ ] Images are optimized (< 200KB each)
- [ ] Alt text is descriptive
- [ ] Logo is present

#### Functionality
- [ ] Mobile menu works
- [ ] All links work (no 404s)
- [ ] Forms submit correctly
- [ ] WhatsApp button opens chat
- [ ] Google Maps shows correct location
- [ ] Social media links work

#### Design
- [ ] Colors match client brand (if applicable)
- [ ] Tested on mobile (Chrome DevTools)
- [ ] Tested on desktop
- [ ] No broken layouts
- [ ] Text is readable

#### SEO
- [ ] Page titles are correct
- [ ] Meta descriptions are filled
- [ ] Open Graph image is set

#### Deployment
- [ ] Site is live on Railway
- [ ] Custom domain connected (if purchased)
- [ ] SSL certificate active (https)
- [ ] Site loads quickly

### Client Handoff

- [ ] Share live URL
- [ ] Provide login credentials (if applicable)
- [ ] Explain maintenance process
- [ ] Get final approval

---

## Time Estimates

| Task | Estimated Time |
|------|---------------|
| Content-only customization | 30 minutes |
| + Custom images | +30 minutes |
| + Color/font changes | +30 minutes |
| + Layout modifications | +1-2 hours |
| Form setup | 10 minutes |
| Deployment | 10 minutes |
| Testing | 20 minutes |

**Total for basic site**: 1-1.5 hours
**Total for fully custom**: 2-3 hours

---

## Troubleshooting

### Images Not Loading
- Check file path (case-sensitive)
- Ensure file exists in /assets folder
- Check file extension

### Mobile Menu Not Working
- Ensure `common.js` is loaded
- Check for JavaScript errors in console

### Form Not Submitting
- Verify form action URL
- Check required fields
- Test with Formspree dashboard

### Maps Not Showing
- Verify embed URL is correct
- Check if URL includes `https://`
- Maps may be blocked by ad blockers

---

## Support

For issues with templates, check:
1. Browser console for JavaScript errors
2. Network tab for failed requests
3. Mobile responsiveness in DevTools

Happy customizing! 🚀
