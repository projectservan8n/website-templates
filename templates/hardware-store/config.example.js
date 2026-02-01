/**
 * Hardware Store Template - Configuration
 * ========================================
 * Copy this file to config.js and replace all placeholder values
 * with your actual business information.
 *
 * INSTRUCTIONS:
 * 1. Copy this file: cp config.example.js config.js
 * 2. Replace all [PLACEHOLDER] values with your actual data
 * 3. Update all HTML files to replace placeholders or use JavaScript
 *    to dynamically populate content from this config
 */

const SITE_CONFIG = {

  // ==========================================
  // BUSINESS INFORMATION
  // ==========================================
  business: {
    name: '[STORE_NAME]',                    // e.g., "ABC Hardware"
    tagline: 'Hardware & Construction',       // Subtitle shown with logo
    yearEstablished: '[YEAR_ESTABLISHED]',   // e.g., "1995"
    yearsInBusiness: '[YEARS_IN_BUSINESS]',  // e.g., "28"
  },

  // ==========================================
  // CONTACT INFORMATION
  // ==========================================
  contact: {
    phone: '[PHONE_NUMBER]',                 // e.g., "(062) 991-1234"
    mobile: '[MOBILE_NUMBER]',               // e.g., "0917 123 4567"
    whatsapp: '[WHATSAPP_NUMBER]',           // e.g., "639171234567" (no + symbol)
    email: '[EMAIL_ADDRESS]',                // e.g., "sales@abchardware.com"
  },

  // ==========================================
  // STORE LOCATION
  // ==========================================
  location: {
    street: '[STREET_ADDRESS]',              // e.g., "123 Governor Alvarez Avenue"
    city: '[CITY]',                          // e.g., "Zamboanga City"
    province: '[PROVINCE]',                  // e.g., "Zamboanga del Sur"
    postalCode: '[POSTAL_CODE]',             // e.g., "7000"
    googleMapsEmbed: '[GOOGLE_MAPS_EMBED_URL]',
    // Get embed URL from Google Maps > Share > Embed a map
    // e.g., "https://www.google.com/maps/embed?pb=..."
    googleMapsDirections: '[GOOGLE_MAPS_DIRECTIONS_URL]',
    // Get directions URL from Google Maps > Directions > Share
    // e.g., "https://www.google.com/maps/dir//..."
  },

  // ==========================================
  // STORE HOURS
  // ==========================================
  hours: {
    weekdays: {
      open: '6:00 AM',
      close: '6:00 PM',
      days: 'Monday - Saturday'
    },
    sunday: {
      open: '7:00 AM',
      close: '12:00 PM'
    },
    holidays: 'Call to confirm'
  },

  // ==========================================
  // DELIVERY INFORMATION
  // ==========================================
  delivery: {
    minimumOrder: '[MINIMUM_ORDER_AMOUNT]',  // e.g., "₱5,000"
    areas: [
      '[DELIVERY_AREA_1]',                   // e.g., "Zamboanga City Proper"
      '[DELIVERY_AREA_2]',                   // e.g., "Ayala"
      '[DELIVERY_AREA_3]',                   // e.g., "Sta. Maria"
      '[DELIVERY_AREA_4]',                   // e.g., "Tetuan"
      '[DELIVERY_AREA_5]',                   // e.g., "Canelar"
      '[DELIVERY_AREA_6]',                   // e.g., "Tumaga"
    ]
  },

  // ==========================================
  // BRANDS CARRIED
  // ==========================================
  brands: [
    '[BRAND_1]',                             // e.g., "Holcim"
    '[BRAND_2]',                             // e.g., "Republic Cement"
    '[BRAND_3]',                             // e.g., "Boysen"
    '[BRAND_4]',                             // e.g., "Atlanta"
    '[BRAND_5]',                             // e.g., "Neltex"
    '[BRAND_6]',                             // e.g., "Stanley"
  ],

  // ==========================================
  // IMAGES
  // ==========================================
  images: {
    hero: '[HERO_IMAGE_URL]',
    // Recommended: 1200x900px or larger
    // Can use local path: './assets/images/hero.jpg'
    // Or external URL: 'https://example.com/image.jpg'
  },

  // ==========================================
  // FORM HANDLING
  // ==========================================
  forms: {
    quotationAction: '[FORM_ACTION_URL]',
    // Options:
    // - Formspree: "https://formspree.io/f/YOUR_FORM_ID"
    // - Netlify Forms: leave empty and add netlify attribute
    // - Custom endpoint: your server URL
  },

  // ==========================================
  // SOCIAL MEDIA (Optional)
  // ==========================================
  social: {
    facebook: '[FACEBOOK_URL]',              // e.g., "https://facebook.com/abchardware"
    instagram: '[INSTAGRAM_URL]',            // Optional
  },

  // ==========================================
  // PRODUCT CATALOG
  // ==========================================
  // Replace with your actual products
  products: {
    cement: [
      {
        name: '[CEMENT_PRODUCT_1]',          // e.g., "Portland Cement (40kg)"
        description: '[CEMENT_DESCRIPTION_1]', // e.g., "Type 1 general purpose cement"
        price: '[CEMENT_PRICE_1]',           // e.g., "₱280" or "Contact for Price"
        image: '[CEMENT_IMAGE_1]',           // Image URL or path
      },
      {
        name: '[CEMENT_PRODUCT_2]',
        description: '[CEMENT_DESCRIPTION_2]',
        price: '[CEMENT_PRICE_2]',
        image: '[CEMENT_IMAGE_2]',
      },
      {
        name: '[CEMENT_PRODUCT_3]',
        description: '[CEMENT_DESCRIPTION_3]',
        price: 'Contact for Price',
        image: '[CEMENT_IMAGE_3]',
      },
      {
        name: '[CEMENT_PRODUCT_4]',
        description: '[CEMENT_DESCRIPTION_4]',
        price: '[CEMENT_PRICE_4]',
        image: '[CEMENT_IMAGE_4]',
      },
    ],
    steel: [
      {
        name: '[STEEL_PRODUCT_1]',           // e.g., "10mm Deformed Bar (6m)"
        description: '[STEEL_DESCRIPTION_1]',
        price: '[STEEL_PRICE_1]',
        image: '[STEEL_IMAGE_1]',
      },
      {
        name: '[STEEL_PRODUCT_2]',
        description: '[STEEL_DESCRIPTION_2]',
        price: 'Contact for Price',
        image: '[STEEL_IMAGE_2]',
      },
      {
        name: '[STEEL_PRODUCT_3]',
        description: '[STEEL_DESCRIPTION_3]',
        price: '[STEEL_PRICE_3]',
        image: '[STEEL_IMAGE_3]',
      },
      {
        name: '[STEEL_PRODUCT_4]',
        description: '[STEEL_DESCRIPTION_4]',
        price: 'Contact for Price',
        image: '[STEEL_IMAGE_4]',
      },
    ],
    electrical: [
      {
        name: '[ELECTRICAL_PRODUCT_1]',      // e.g., "THHN Wire 3.5mm (150m)"
        description: '[ELECTRICAL_DESCRIPTION_1]',
        price: '[ELECTRICAL_PRICE_1]',
        image: '[ELECTRICAL_IMAGE_1]',
      },
      {
        name: '[ELECTRICAL_PRODUCT_2]',
        description: '[ELECTRICAL_DESCRIPTION_2]',
        price: '[ELECTRICAL_PRICE_2]',
        image: '[ELECTRICAL_IMAGE_2]',
      },
      {
        name: '[ELECTRICAL_PRODUCT_3]',
        description: '[ELECTRICAL_DESCRIPTION_3]',
        price: 'Contact for Price',
        image: '[ELECTRICAL_IMAGE_3]',
      },
      {
        name: '[ELECTRICAL_PRODUCT_4]',
        description: '[ELECTRICAL_DESCRIPTION_4]',
        price: '[ELECTRICAL_PRICE_4]',
        image: '[ELECTRICAL_IMAGE_4]',
      },
    ],
    plumbing: [
      {
        name: '[PLUMBING_PRODUCT_1]',        // e.g., "PVC Pipe 4\" x 10ft"
        description: '[PLUMBING_DESCRIPTION_1]',
        price: '[PLUMBING_PRICE_1]',
        image: '[PLUMBING_IMAGE_1]',
      },
      {
        name: '[PLUMBING_PRODUCT_2]',
        description: '[PLUMBING_DESCRIPTION_2]',
        price: 'Contact for Price',
        image: '[PLUMBING_IMAGE_2]',
      },
      {
        name: '[PLUMBING_PRODUCT_3]',
        description: '[PLUMBING_DESCRIPTION_3]',
        price: '[PLUMBING_PRICE_3]',
        image: '[PLUMBING_IMAGE_3]',
      },
      {
        name: '[PLUMBING_PRODUCT_4]',
        description: '[PLUMBING_DESCRIPTION_4]',
        price: '[PLUMBING_PRICE_4]',
        image: '[PLUMBING_IMAGE_4]',
      },
    ],
    paint: [
      {
        name: '[PAINT_PRODUCT_1]',           // e.g., "Latex Paint White (4L)"
        description: '[PAINT_DESCRIPTION_1]',
        price: '[PAINT_PRICE_1]',
        image: '[PAINT_IMAGE_1]',
      },
      {
        name: '[PAINT_PRODUCT_2]',
        description: '[PAINT_DESCRIPTION_2]',
        price: '[PAINT_PRICE_2]',
        image: '[PAINT_IMAGE_2]',
      },
      {
        name: '[PAINT_PRODUCT_3]',
        description: '[PAINT_DESCRIPTION_3]',
        price: 'Contact for Price',
        image: '[PAINT_IMAGE_3]',
      },
      {
        name: '[PAINT_PRODUCT_4]',
        description: '[PAINT_DESCRIPTION_4]',
        price: '[PAINT_PRICE_4]',
        image: '[PAINT_IMAGE_4]',
      },
    ],
    tools: [
      {
        name: '[TOOLS_PRODUCT_1]',           // e.g., "Hammer 16oz"
        description: '[TOOLS_DESCRIPTION_1]',
        price: '[TOOLS_PRICE_1]',
        image: '[TOOLS_IMAGE_1]',
      },
      {
        name: '[TOOLS_PRODUCT_2]',
        description: '[TOOLS_DESCRIPTION_2]',
        price: '[TOOLS_PRICE_2]',
        image: '[TOOLS_IMAGE_2]',
      },
      {
        name: '[TOOLS_PRODUCT_3]',
        description: '[TOOLS_DESCRIPTION_3]',
        price: 'Contact for Price',
        image: '[TOOLS_IMAGE_3]',
      },
      {
        name: '[TOOLS_PRODUCT_4]',
        description: '[TOOLS_DESCRIPTION_4]',
        price: '[TOOLS_PRICE_4]',
        image: '[TOOLS_IMAGE_4]',
      },
    ],
  },

  // ==========================================
  // WHATSAPP MESSAGE TEMPLATES
  // ==========================================
  whatsapp: {
    defaultMessage: "Hi! I'm interested in your hardware products. Can you help me?",
    quotationMessage: "Hi! I'd like to inquire about your products and get a quotation.",
    productInquiry: "Hi! I'd like to inquire about: ", // Product name will be appended
  },

};

// Export for use in other scripts (if using modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
