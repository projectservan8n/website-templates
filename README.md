# Zamboanga Website Templates

Professional, fast-loading website templates for SME clients in Zamboanga City, Philippines.

## Overview

This repository contains 8 production-ready website templates designed for local businesses. Each template is:

- **Mobile-first** - 70%+ of Filipino users are on mobile
- **Fast-loading** - Optimized for slow 4G/LTE connections
- **Easy to customize** - Clear placeholders, no build step required
- **Professional** - Unique design for each niche, no generic AI aesthetics
- **SEO-ready** - Proper meta tags, semantic HTML5, Open Graph

## Templates Included

| Template | Target Client | Pages | Design Aesthetic |
|----------|---------------|-------|------------------|
| **Restaurant** | Seafood restaurants, carinderias | 3 | Ocean blue, warm, inviting |
| **Clinic** | Dental, medical, derma clinics | 4 | Teal, professional, trustworthy |
| **Tutorial Center** | Review centers, tutoring | 3 | Navy/orange, academic, energetic |
| **Real Estate** | Brokers, property developers | 4 | Navy/gold, elegant, professional |
| **Events Supplier** | Wedding, debut suppliers | 4 | Rose/gold, romantic, elegant |
| **Hardware Store** | Construction supply | 3 | Orange, industrial, bold |
| **Salon** | Hair salons, spas, barbershops | 3 | Purple/rose gold, chic, elegant |
| **Gym** | Fitness centers, gyms | 3 | Red/orange, powerful, energetic |

## Quick Start

### 1. Choose a Template

```bash
cd templates/[template-name]
```

### 2. Copy Configuration

```bash
cp config.example.js config.js
```

### 3. Customize Content

Open each HTML file and use **Find & Replace** (Ctrl+H / Cmd+H) to replace placeholders:

```
[BUSINESS_NAME] → Client's business name
[PHONE] → Phone number
[WHATSAPP_NUMBER] → WhatsApp (with country code, no +)
[ADDRESS] → Full address
... and more
```

### 4. Replace Images

Replace placeholder images in the `/assets` folder with client's actual photos.

### 5. Test Locally

Open `index.html` in your browser. Test on mobile using Chrome DevTools.

### 6. Deploy to Railway

```bash
# Initialize git if not already
git init
git add .
git commit -m "Initial client site"

# Push to GitHub
git remote add origin <your-github-repo>
git push -u origin main

# Deploy on Railway
# 1. Go to railway.app
# 2. New Project → Deploy from GitHub repo
# 3. Select your repo
# 4. Deploy!
```

## Folder Structure

```
zambo-templates/
├── README.md
├── shared/
│   ├── css/
│   │   └── base.css          # Common utilities & animations
│   ├── js/
│   │   └── common.js         # Mobile menu, forms, WhatsApp, etc.
│   └── assets/
│       └── icons/
│           └── icons.svg     # Common SVG icons
├── templates/
│   ├── restaurant/
│   │   ├── index.html
│   │   ├── menu.html
│   │   ├── contact.html
│   │   ├── config.example.js
│   │   └── assets/
│   ├── clinic/
│   ├── tutorial-center/
│   ├── real-estate/
│   ├── events-supplier/
│   ├── hardware-store/
│   ├── salon/
│   └── gym/
└── docs/
    └── CUSTOMIZATION.md
```

## Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Via CDN (no build step)
- **Vanilla JavaScript** - No frameworks
- **Google Fonts** - Unique fonts per template
- **Heroicons** - For icons (inline SVG)

## Features

### Common to All Templates

- Responsive mobile menu
- WhatsApp floating button with pre-filled messages
- Form validation (client-side)
- Smooth scroll navigation
- Back to top button
- Lazy loading images
- Scroll animations
- SEO meta tags
- Open Graph tags

### Template-Specific

Each template has features specific to its niche:

- **Restaurant**: Online menu with prices, WhatsApp ordering
- **Clinic**: Appointment booking form, doctor profiles, HMO section
- **Tutorial Center**: Program listings, enrollment form, schedule display
- **Real Estate**: Property listings, filters, inquiry forms
- **Events Supplier**: Gallery, packages, Instagram integration
- **Hardware Store**: Product categories, quotation form, contractor focus
- **Salon**: Service menu with prices, booking form, team profiles
- **Gym**: Membership tiers, class schedule, trainer profiles

## Customization Guide

See [docs/CUSTOMIZATION.md](docs/CUSTOMIZATION.md) for detailed instructions.

### Quick Reference

1. **Colors**: Edit Tailwind config in `<head>` section
2. **Fonts**: Change Google Fonts link and font-family in config
3. **Content**: Replace all `[PLACEHOLDER]` values
4. **Images**: Update src paths or use Unsplash placeholders initially
5. **Forms**: Set up form action (Formspree, Netlify, or custom backend)
6. **Maps**: Get Google Maps embed URL and replace placeholder

## Performance Targets

- Lighthouse Mobile Score: 90+
- First Contentful Paint: < 2s
- Total Page Size: < 500KB (excluding images)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Pricing Guide

Suggested pricing for Zamboanga market:

| Service | Price |
|---------|-------|
| Basic website (1 template, content only) | ₱3,000-5,000 |
| With custom images/photos | ₱5,000-7,000 |
| With color/layout changes | ₱7,000-10,000 |
| Monthly maintenance | ₱1,000/month |

## License

These templates are for your commercial use. Feel free to use them for client projects.

## Credits

- Icons: [Heroicons](https://heroicons.com/)
- Fonts: [Google Fonts](https://fonts.google.com/)
- CSS Framework: [Tailwind CSS](https://tailwindcss.com/)
- Placeholder Images: [Unsplash](https://unsplash.com/)

---

Built with care for Zamboanga SMEs.
