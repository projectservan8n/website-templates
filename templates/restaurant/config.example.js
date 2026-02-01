/**
 * Restaurant Template - Configuration
 * ====================================
 * Copy this file to config.js and fill in your client's information.
 * Use find-and-replace in your HTML files to swap placeholders.
 *
 * QUICK CUSTOMIZATION GUIDE:
 * 1. Fill in all values below
 * 2. Open each HTML file in your editor
 * 3. Use Find & Replace (Ctrl+H / Cmd+H) to replace each [PLACEHOLDER]
 * 4. Replace placeholder images in the /assets folder
 * 5. Test on mobile and desktop
 * 6. Deploy to Railway
 */

const CONFIG = {

  // ============================================
  // BUSINESS INFORMATION
  // ============================================

  businessName: "[RESTAURANT_NAME]",
  // Example: "Alavar Seafood Restaurant"

  tagline: "[TAGLINE]",
  // Example: "Fresh Seafood, Zamboanga Style"

  yearEstablished: "[YEAR_ESTABLISHED]",
  // Example: "1986"

  yearsInBusiness: "[YEARS_IN_BUSINESS]",
  // Example: "38" (calculate from year established)


  // ============================================
  // CONTACT INFORMATION
  // ============================================

  phone: "[PHONE]",
  // Example: "0917 123 4567" or "(062) 991-2345"

  phoneSecondary: "[PHONE_SECONDARY]",
  // Example: "(062) 991-2346" - leave empty if none

  whatsappNumber: "[WHATSAPP_NUMBER]",
  // Example: "639171234567" (no + sign, include country code)

  email: "[EMAIL]",
  // Example: "info@alavar.com"


  // ============================================
  // LOCATION
  // ============================================

  fullAddress: "[FULL_ADDRESS]",
  // Example: "Don Alfaro Street, Tetuan"

  shortAddress: "[SHORT_ADDRESS]",
  // Example: "Tetuan, Zamboanga City"

  googleMapsEmbedUrl: "[GOOGLE_MAPS_EMBED_URL]",
  // How to get this:
  // 1. Go to Google Maps
  // 2. Search for the location
  // 3. Click "Share" → "Embed a map"
  // 4. Copy the src URL from the iframe code
  // Example: "https://www.google.com/maps/embed?pb=!1m18!1m12..."

  googleMapsDirectionsUrl: "[GOOGLE_MAPS_DIRECTIONS_URL]",
  // How to get this:
  // 1. Go to Google Maps
  // 2. Search for the location
  // 3. Click "Directions"
  // 4. Copy the URL from browser
  // Example: "https://www.google.com/maps/dir//..."


  // ============================================
  // OPERATING HOURS
  // ============================================

  operatingHours: "[OPERATING_HOURS]",
  // Example: "10AM - 10PM Daily"

  weekdayHours: "[WEEKDAY_HOURS]",
  // Example: "10:00 AM - 10:00 PM"

  sundayHours: "[SUNDAY_HOURS]",
  // Example: "10:00 AM - 9:00 PM"


  // ============================================
  // SOCIAL MEDIA
  // ============================================

  facebookUrl: "[FACEBOOK_URL]",
  // Example: "https://facebook.com/alavarrestaurant"

  instagramUrl: "[INSTAGRAM_URL]",
  // Example: "https://instagram.com/alavar_seafood"


  // ============================================
  // ABOUT SECTION
  // ============================================

  aboutParagraph1: "[ABOUT_PARAGRAPH_1]",
  // Example: "For over 35 years, Alavar Seafood Restaurant has been serving
  // the finest seafood dishes in Zamboanga City..."

  aboutParagraph2: "[ABOUT_PARAGRAPH_2]",
  // Example: "Today, we continue that tradition with the same passion
  // and commitment to quality..."


  // ============================================
  // FEATURED DISHES (Homepage)
  // ============================================

  dish1: {
    name: "[DISH_1_NAME]",
    description: "[DISH_1_DESCRIPTION]",
    price: "[PRICE_1]",
    // Example: { name: "Curacha sa Gata", description: "Famous spanner crab in coconut cream", price: "850" }
  },

  dish2: {
    name: "[DISH_2_NAME]",
    description: "[DISH_2_DESCRIPTION]",
    price: "[PRICE_2]",
  },

  dish3: {
    name: "[DISH_3_NAME]",
    description: "[DISH_3_DESCRIPTION]",
    price: "[PRICE_3]",
  },


  // ============================================
  // TESTIMONIALS
  // ============================================

  testimonial1: {
    text: "[TESTIMONIAL_1]",
    reviewerName: "[REVIEWER_1_NAME]",
    reviewerInitial: "[REVIEWER_1_INITIAL]",
    // Example: { text: "Best seafood in Zamboanga!", reviewerName: "Maria Santos", reviewerInitial: "M" }
  },

  testimonial2: {
    text: "[TESTIMONIAL_2]",
    reviewerName: "[REVIEWER_2_NAME]",
    reviewerInitial: "[REVIEWER_2_INITIAL]",
  },

  testimonial3: {
    text: "[TESTIMONIAL_3]",
    reviewerName: "[REVIEWER_3_NAME]",
    reviewerInitial: "[REVIEWER_3_INITIAL]",
  },


  // ============================================
  // WHATSAPP MESSAGES
  // ============================================

  whatsappMessageGeneral: "Hi! I found you on your website. I'd like to inquire about your services.",
  whatsappMessageReservation: "Hi! I found you on your website. I'd like to make a reservation.",
  whatsappMessageOrder: "Hi! I'd like to place an order.",


  // ============================================
  // FOOTER
  // ============================================

  currentYear: "[CURRENT_YEAR]",
  // Example: "2024"

  yourBusinessName: "[YOUR_BUSINESS_NAME]",
  // Your web dev business name for the footer credit
  // Example: "Zambo Web Solutions"

};


// ============================================
// CUSTOMIZATION CHECKLIST
// ============================================
/*

BEFORE DELIVERY, CHECK THESE:

□ All [PLACEHOLDER] values replaced in HTML files
□ Logo replaced (or text logo updated)
□ All images replaced with client's actual photos
□ Colors adjusted if client has brand colors (edit Tailwind config in <head>)
□ Google Maps embed working with correct location
□ WhatsApp button links to correct number
□ Phone numbers are clickable and correct
□ Form action set up (Formspree, Netlify, or custom backend)
□ Tested on mobile (Chrome DevTools or real phone)
□ Tested on desktop (multiple screen sizes)
□ All links working (no 404s)
□ Favicon added (optional but professional)
□ Open Graph image set (for Facebook/WhatsApp sharing)

DEPLOYMENT:
□ Push to GitHub
□ Deploy to Railway
□ Test live site
□ Share with client for approval

*/


// ============================================
// FIND & REPLACE QUICK REFERENCE
// ============================================
/*

Use your editor's Find & Replace (Ctrl+H / Cmd+H) to replace these:

[RESTAURANT_NAME]         → Client's restaurant name
[TAGLINE]                 → Their tagline
[PHONE]                   → Main phone number
[WHATSAPP_NUMBER]         → WhatsApp (with country code, no +)
[EMAIL]                   → Email address
[FULL_ADDRESS]            → Complete street address
[SHORT_ADDRESS]           → Brief address for footer
[GOOGLE_MAPS_EMBED_URL]   → Google Maps embed src
[OPERATING_HOURS]         → Brief hours (e.g., "10AM-10PM Daily")
[WEEKDAY_HOURS]           → Detailed weekday hours
[SUNDAY_HOURS]            → Sunday hours
[FACEBOOK_URL]            → Facebook page link
[INSTAGRAM_URL]           → Instagram profile link
[YEAR_ESTABLISHED]        → Year business started
[YEARS_IN_BUSINESS]       → Number of years operating
[CURRENT_YEAR]            → Current year (e.g., 2024)
[YOUR_BUSINESS_NAME]      → Your web dev business name

For menu items, testimonials, etc., replace the specific placeholders
like [DISH_1_NAME], [TESTIMONIAL_1], etc.

*/

export default CONFIG;
