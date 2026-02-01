/**
 * Salon/Barbershop/Spa Website Template - Configuration
 * =====================================================
 *
 * Copy this file to config.js and replace all placeholder values with your actual business information.
 *
 * IMPORTANT: Instagram is crucial for salon businesses! Ensure you have an active Instagram presence
 * and keep your feed updated with transformations, before/after photos, and styling inspiration.
 */

const SALON_CONFIG = {
  // ===== BUSINESS INFORMATION =====
  business: {
    name: '[SALON_NAME]',                           // e.g., "Luxe Hair Studio"
    tagline: '[TAGLINE]',                           // e.g., "Where Beauty Meets Artistry"
    logoInitial: '[L]',                             // First letter for logo placeholder, e.g., "L"
    yearsInBusiness: '[YEARS]',                     // e.g., "10+"
    city: '[CITY]',                                 // e.g., "Zamboanga City"
    footerTagline: '[FOOTER_TAGLINE]',              // Short brand description for footer
    currentYear: new Date().getFullYear()
  },

  // ===== CONTACT INFORMATION =====
  contact: {
    phone: '[PHONE_NUMBER]',                        // e.g., "0917 123 4567"
    whatsapp: '[WHATSAPP_NUMBER]',                  // e.g., "639171234567" (include country code, no +)
    email: '[EMAIL_ADDRESS]',                       // e.g., "hello@luxehairstudio.com"
    fullAddress: '[FULL_ADDRESS]',                  // e.g., "123 Rizal Avenue, Zamboanga City 7000"
    shortAddress: '[SHORT_ADDRESS]',                // e.g., "123 Rizal Ave, Zamboanga City"
    googleMapsLink: '[GOOGLE_MAPS_LINK]',           // Link to open directions
    googleMapsEmbedUrl: '[GOOGLE_MAPS_EMBED_URL]'   // Embed URL from Google Maps
  },

  // ===== BUSINESS HOURS =====
  hours: {
    weekdays: '[WEEKDAY_HOURS]',                    // e.g., "9:00 AM - 8:00 PM"
    saturday: '[SATURDAY_HOURS]',                   // e.g., "9:00 AM - 9:00 PM"
    sunday: '[SUNDAY_HOURS]'                        // e.g., "10:00 AM - 6:00 PM" or "Closed"
  },

  // ===== SOCIAL MEDIA (Instagram is KEY for salons!) =====
  social: {
    instagram: '[INSTAGRAM_HANDLE]',                // e.g., "luxehairstudio" (without @)
    facebook: '[FACEBOOK_PAGE]',                    // e.g., "luxehairstudio"
    tiktok: '[TIKTOK_HANDLE]',                      // e.g., "luxehairstudio" (without @)

    // Instagram post URLs (for gallery section)
    instagramPosts: [
      '[INSTAGRAM_POST_1_URL]',
      '[INSTAGRAM_POST_2_URL]',
      '[INSTAGRAM_POST_3_URL]',
      '[INSTAGRAM_POST_4_URL]',
      '[INSTAGRAM_POST_5_URL]',
      '[INSTAGRAM_POST_6_URL]'
    ],

    // Instagram image URLs (direct links to images)
    instagramImages: [
      '[INSTAGRAM_IMAGE_1_URL]',
      '[INSTAGRAM_IMAGE_2_URL]',
      '[INSTAGRAM_IMAGE_3_URL]',
      '[INSTAGRAM_IMAGE_4_URL]',
      '[INSTAGRAM_IMAGE_5_URL]',
      '[INSTAGRAM_IMAGE_6_URL]'
    ]
  },

  // ===== IMAGES =====
  images: {
    hero: '[HERO_IMAGE_URL]',                       // Salon interior or transformation photo
    about1: '[ABOUT_IMAGE_1_URL]',                  // About section main image
    ogImage: '[OG_IMAGE_URL]'                       // Social sharing image (1200x630 recommended)
  },

  // ===== ABOUT / STORY =====
  about: {
    paragraph1: '[SALON_STORY_PARAGRAPH_1]',        // First paragraph of your salon story
    paragraph2: '[SALON_STORY_PARAGRAPH_2]'         // Second paragraph of your salon story
  },

  // ===== TEAM / STYLISTS =====
  // IMPORTANT: Individual Instagram accounts for stylists help build personal brands
  stylists: [
    {
      name: '[STYLIST_1_NAME]',                     // e.g., "Maria Santos"
      role: '[STYLIST_1_ROLE]',                     // e.g., "Senior Stylist"
      specialty: '[STYLIST_1_SPECIALTY]',           // e.g., "Color Specialist"
      imageUrl: '[STYLIST_1_IMAGE_URL]',
      instagram: '[STYLIST_1_INSTAGRAM]',           // Full URL to stylist's Instagram
      initial: '[S1_INITIAL]',                      // e.g., "M"
      schedule: '[STYLIST_1_SCHEDULE]'              // e.g., "Mon-Sat, 9AM-6PM"
    },
    {
      name: '[STYLIST_2_NAME]',
      role: '[STYLIST_2_ROLE]',
      specialty: '[STYLIST_2_SPECIALTY]',
      imageUrl: '[STYLIST_2_IMAGE_URL]',
      instagram: '[STYLIST_2_INSTAGRAM]',
      initial: '[S2_INITIAL]',
      schedule: '[STYLIST_2_SCHEDULE]'
    },
    {
      name: '[STYLIST_3_NAME]',
      role: '[STYLIST_3_ROLE]',
      specialty: '[STYLIST_3_SPECIALTY]',
      imageUrl: '[STYLIST_3_IMAGE_URL]',
      instagram: '[STYLIST_3_INSTAGRAM]',
      initial: '[S3_INITIAL]',
      schedule: '[STYLIST_3_SCHEDULE]'
    },
    {
      name: '[STYLIST_4_NAME]',
      role: '[STYLIST_4_ROLE]',
      specialty: '[STYLIST_4_SPECIALTY]',
      imageUrl: '[STYLIST_4_IMAGE_URL]',
      instagram: '[STYLIST_4_INSTAGRAM]',
      initial: '[S4_INITIAL]',
      schedule: '[STYLIST_4_SCHEDULE]'
    }
  ],

  // ===== SERVICE PREVIEW PRICES (for homepage) =====
  previewPrices: {
    haircut: '[HAIRCUT_PRICE]',                     // e.g., "₱250"
    color: '[COLOR_PRICE]',                         // e.g., "₱1,500"
    nail: '[NAIL_PRICE]',                           // e.g., "₱350"
    spa: '[SPA_PRICE]'                              // e.g., "₱500"
  },

  // ===== SERVICES - HAIRCUT & STYLING =====
  haircutServices: [
    {
      name: '[HAIRCUT_1_NAME]',                     // e.g., "Ladies Haircut"
      price: '[HAIRCUT_1_PRICE]',                   // e.g., "₱350"
      description: '[HAIRCUT_1_DESCRIPTION]',       // Brief description
      duration: '[HAIRCUT_1_DURATION]'              // e.g., "45 mins"
    },
    {
      name: '[HAIRCUT_2_NAME]',                     // e.g., "Men's Cut"
      price: '[HAIRCUT_2_PRICE]',
      description: '[HAIRCUT_2_DESCRIPTION]',
      duration: '[HAIRCUT_2_DURATION]'
    },
    {
      name: '[HAIRCUT_3_NAME]',                     // e.g., "Kids Cut (Under 12)"
      price: '[HAIRCUT_3_PRICE]',
      description: '[HAIRCUT_3_DESCRIPTION]',
      duration: '[HAIRCUT_3_DURATION]'
    },
    {
      name: '[HAIRCUT_4_NAME]',                     // e.g., "Blowdry & Styling"
      price: '[HAIRCUT_4_PRICE]',
      description: '[HAIRCUT_4_DESCRIPTION]',
      duration: '[HAIRCUT_4_DURATION]'
    }
  ],

  // ===== SERVICES - HAIR COLOR =====
  colorServices: [
    {
      name: '[COLOR_1_NAME]',                       // e.g., "Full Color (Single Process)"
      price: '[COLOR_1_PRICE]',                     // e.g., "₱1,500"
      description: '[COLOR_1_DESCRIPTION]',
      duration: '[COLOR_1_DURATION]'                // e.g., "2-3 hrs"
    },
    {
      name: '[COLOR_2_NAME]',                       // e.g., "Highlights (Half Head)"
      price: '[COLOR_2_PRICE]',
      description: '[COLOR_2_DESCRIPTION]',
      duration: '[COLOR_2_DURATION]'
    },
    {
      name: '[COLOR_3_NAME]',                       // e.g., "Balayage / Ombre"
      price: '[COLOR_3_PRICE]',
      description: '[COLOR_3_DESCRIPTION]',
      duration: '[COLOR_3_DURATION]'
    },
    {
      name: '[COLOR_4_NAME]',                       // e.g., "Root Touch-Up"
      price: '[COLOR_4_PRICE]',
      description: '[COLOR_4_DESCRIPTION]',
      duration: '[COLOR_4_DURATION]'
    }
  ],

  // ===== SERVICES - HAIR TREATMENT =====
  treatmentServices: [
    {
      name: '[TREATMENT_1_NAME]',                   // e.g., "Keratin Treatment"
      price: '[TREATMENT_1_PRICE]',
      description: '[TREATMENT_1_DESCRIPTION]',
      duration: '[TREATMENT_1_DURATION]'
    },
    {
      name: '[TREATMENT_2_NAME]',                   // e.g., "Deep Conditioning"
      price: '[TREATMENT_2_PRICE]',
      description: '[TREATMENT_2_DESCRIPTION]',
      duration: '[TREATMENT_2_DURATION]'
    },
    {
      name: '[TREATMENT_3_NAME]',                   // e.g., "Scalp Treatment"
      price: '[TREATMENT_3_PRICE]',
      description: '[TREATMENT_3_DESCRIPTION]',
      duration: '[TREATMENT_3_DURATION]'
    }
  ],

  // ===== SERVICES - NAILS =====
  nailServices: [
    {
      name: '[NAIL_1_NAME]',                        // e.g., "Classic Manicure"
      price: '[NAIL_1_PRICE]',
      description: '[NAIL_1_DESCRIPTION]',
      duration: '[NAIL_1_DURATION]'
    },
    {
      name: '[NAIL_2_NAME]',                        // e.g., "Gel Manicure"
      price: '[NAIL_2_PRICE]',
      description: '[NAIL_2_DESCRIPTION]',
      duration: '[NAIL_2_DURATION]'
    },
    {
      name: '[NAIL_3_NAME]',                        // e.g., "Classic Pedicure"
      price: '[NAIL_3_PRICE]',
      description: '[NAIL_3_DESCRIPTION]',
      duration: '[NAIL_3_DURATION]'
    },
    {
      name: '[NAIL_4_NAME]',                        // e.g., "Nail Art (per nail)"
      price: '[NAIL_4_PRICE]',
      description: '[NAIL_4_DESCRIPTION]',
      duration: '[NAIL_4_DURATION]'
    }
  ],

  // ===== SERVICES - SPA & MASSAGE =====
  spaServices: [
    {
      name: '[SPA_1_NAME]',                         // e.g., "Swedish Massage"
      price: '[SPA_1_PRICE]',
      description: '[SPA_1_DESCRIPTION]',
      duration: '[SPA_1_DURATION]'
    },
    {
      name: '[SPA_2_NAME]',                         // e.g., "Hot Stone Massage"
      price: '[SPA_2_PRICE]',
      description: '[SPA_2_DESCRIPTION]',
      duration: '[SPA_2_DURATION]'
    },
    {
      name: '[SPA_3_NAME]',                         // e.g., "Facial Treatment"
      price: '[SPA_3_PRICE]',
      description: '[SPA_3_DESCRIPTION]',
      duration: '[SPA_3_DURATION]'
    },
    {
      name: '[SPA_4_NAME]',                         // e.g., "Body Scrub"
      price: '[SPA_4_PRICE]',
      description: '[SPA_4_DESCRIPTION]',
      duration: '[SPA_4_DURATION]'
    }
  ],

  // ===== TESTIMONIALS =====
  testimonials: [
    {
      name: '[TESTIMONIAL_1_NAME]',                 // e.g., "Anna Rodriguez"
      initial: '[T1_INITIAL]',                      // e.g., "A"
      text: '[TESTIMONIAL_1_TEXT]',                 // Full testimonial text
      service: '[TESTIMONIAL_1_SERVICE]'            // e.g., "Balayage Client"
    },
    {
      name: '[TESTIMONIAL_2_NAME]',
      initial: '[T2_INITIAL]',
      text: '[TESTIMONIAL_2_TEXT]',
      service: '[TESTIMONIAL_2_SERVICE]'
    },
    {
      name: '[TESTIMONIAL_3_NAME]',
      initial: '[T3_INITIAL]',
      text: '[TESTIMONIAL_3_TEXT]',
      service: '[TESTIMONIAL_3_SERVICE]'
    }
  ],

  // ===== BOOKING =====
  booking: {
    formSubmitUrl: '[FORM_SUBMIT_URL]',             // Form action URL (e.g., Formspree, Google Forms)
    walkinPolicy: '[WALKIN_POLICY_TEXT]'            // e.g., "Walk-ins are welcome! However, we recommend booking ahead during weekends and holidays to guarantee your preferred time slot."
  },

  // ===== SEO =====
  seo: {
    websiteUrl: '[WEBSITE_URL]',                    // e.g., "https://luxehairstudio.com"
    keywords: 'hair salon, barbershop, spa, [CITY], haircut, hair color, beauty salon'
  }
};

/**
 * INSTAGRAM TIPS FOR SALONS
 * ==========================
 *
 * Instagram is your most powerful marketing tool! Here's how to maximize it:
 *
 * 1. POST TRANSFORMATIONS: Before/after photos are GOLD. Ask clients for permission.
 *
 * 2. USE REELS: Short video content (15-60 seconds) showing the transformation process
 *    gets 3x more engagement than static posts.
 *
 * 3. STORIES: Post daily stories showing:
 *    - Current availability
 *    - Behind-the-scenes
 *    - Product recommendations
 *    - Client reactions
 *
 * 4. HASHTAGS: Use local hashtags like:
 *    - #ZamboangaSalon
 *    - #ZamboangaHair
 *    - #[CITY]Beauty
 *    - #[SALON_NAME]
 *
 * 5. ENCOURAGE TAGS: Ask satisfied clients to tag you in their posts.
 *    Repost their content to your stories.
 *
 * 6. STYLIST PROFILES: Each stylist should have their own Instagram where they
 *    showcase their work and link back to the salon.
 *
 * 7. BOOKING LINK: Use the "Book" button on your Instagram profile.
 *    Link it to your booking page or WhatsApp.
 *
 * 8. CONSISTENCY: Post at least 3-4 times per week.
 *    Best times: 11am-1pm and 7pm-9pm.
 */

// Export for use in templates (if using build tools)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SALON_CONFIG;
}
