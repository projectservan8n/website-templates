/**
 * Events Supplier Template - Configuration Example
 * ================================================
 * Copy this file to config.js and replace all placeholder values
 * with your actual business information.
 *
 * IMPORTANT: Do not commit config.js with real values to public repositories.
 */

const SITE_CONFIG = {
  // ===== Business Information =====
  business: {
    name: '[BUSINESS_NAME]',                    // e.g., "Elegance Events Co."
    tagline: 'Events & Celebrations',
    logoInitial: '[L]',                          // Single letter for logo, e.g., "E"
    yearEstablished: '[YEAR_ESTABLISHED]',       // e.g., "2015"
    city: '[CITY]',                              // e.g., "Zamboanga City"
  },

  // ===== Contact Information =====
  contact: {
    phone: '[PHONE_NUMBER]',                     // e.g., "0917 123 4567"
    email: '[EMAIL_ADDRESS]',                    // e.g., "hello@eleganceevents.ph"
    address: '[ADDRESS]',                        // e.g., "123 Celebration St., Zamboanga City"
    officeHours: '[OFFICE_HOURS]',               // e.g., "Mon-Sat: 9AM-6PM"
    whatsapp: '[WHATSAPP_NUMBER]',               // e.g., "639171234567" (without + sign)
    formActionUrl: '[FORM_ACTION_URL]',          // Your form handler URL
  },

  // ===== Social Media Links =====
  social: {
    facebook: '[FACEBOOK_URL]',                  // e.g., "https://facebook.com/eleganceeventsph"
    instagram: '[INSTAGRAM_URL]',                // e.g., "https://instagram.com/eleganceeventsph"
    instagramHandle: '[INSTAGRAM_HANDLE]',       // e.g., "eleganceeventsph" (without @)
    tiktok: '[TIKTOK_URL]',                      // e.g., "https://tiktok.com/@eleganceeventsph"
  },

  // ===== Hero Section =====
  hero: {
    imageUrl: '[HERO_IMAGE_URL]',                // High-quality event/wedding photo (1920x1080 min)
    headline: 'Where Dreams Become Unforgettable Celebrations',
    subheadline: 'From intimate gatherings to grand celebrations, we craft every detail with love, elegance, and precision.',
  },

  // ===== Trust Badges / Stats =====
  stats: {
    eventsCompleted: '[NUMBER]',                 // e.g., "500+"
    happyCouples: '[NUMBER]',                    // e.g., "350+"
    yearsExperience: '[NUMBER]',                 // e.g., "10"
    fiveStarReviews: '[NUMBER]',                 // e.g., "200+"
  },

  // ===== Service Starting Prices =====
  // Use format like "PHP 15,000" or "Get Quote"
  servicePrices: {
    catering: '[CATERING_STARTING_PRICE]',       // e.g., "PHP 450/head"
    decor: '[DECOR_STARTING_PRICE]',             // e.g., "PHP 25,000"
    coordination: '[COORDINATION_STARTING_PRICE]', // e.g., "PHP 20,000"
    media: '[MEDIA_STARTING_PRICE]',             // e.g., "PHP 35,000"
    entertainment: '[ENTERTAINMENT_STARTING_PRICE]', // e.g., "PHP 15,000"
    cakes: '[CAKES_STARTING_PRICE]',             // e.g., "PHP 8,000"
  },

  // ===== Service Images =====
  // Use high-quality images (800x600 min recommended)
  serviceImages: {
    catering: '[CATERING_IMAGE]',
    decor: '[DECOR_IMAGE]',
    coordination: '[COORDINATION_IMAGE]',
    media: '[MEDIA_IMAGE]',
    entertainment: '[ENTERTAINMENT_IMAGE]',
    cakes: '[CAKES_IMAGE]',
  },

  // ===== Service Descriptions =====
  // Optional: Override default descriptions
  serviceDescriptions: {
    catering: '[CATERING_DESCRIPTION]',
    decor: '[DECOR_DESCRIPTION]',
    coordination: '[COORDINATION_DESCRIPTION]',
    media: '[MEDIA_DESCRIPTION]',
    entertainment: '[ENTERTAINMENT_DESCRIPTION]',
    cakes: '[CAKES_DESCRIPTION]',
  },

  // ===== Package Configuration =====
  packages: {
    // Package 1: Intimate/Bronze
    package1: {
      name: '[PACKAGE_1_NAME]',                  // e.g., "Intimate"
      price: '[PACKAGE_1_PRICE]',                // e.g., "PHP 85,000"
      guests: '[PACKAGE_1_GUESTS]',              // e.g., "50"
      items: [
        '[PACKAGE_1_ITEM_1]',                    // e.g., "Day-of coordination"
        '[PACKAGE_1_ITEM_2]',                    // e.g., "Basic venue styling"
        '[PACKAGE_1_ITEM_3]',                    // etc.
        '[PACKAGE_1_ITEM_4]',
        '[PACKAGE_1_ITEM_5]',
        '[PACKAGE_1_ITEM_6]',
        '[PACKAGE_1_ITEM_7]',                    // Items 7-8 shown as "not included"
        '[PACKAGE_1_ITEM_8]',
      ],
    },

    // Package 2: Classic/Silver (Featured)
    package2: {
      name: '[PACKAGE_2_NAME]',                  // e.g., "Classic"
      price: '[PACKAGE_2_PRICE]',                // e.g., "PHP 150,000"
      guests: '[PACKAGE_2_GUESTS]',              // e.g., "100"
      items: [
        '[PACKAGE_2_ITEM_1]',
        '[PACKAGE_2_ITEM_2]',
        '[PACKAGE_2_ITEM_3]',
        '[PACKAGE_2_ITEM_4]',
        '[PACKAGE_2_ITEM_5]',
        '[PACKAGE_2_ITEM_6]',
        '[PACKAGE_2_ITEM_7]',
        '[PACKAGE_2_ITEM_8]',
      ],
    },

    // Package 3: Grand/Gold
    package3: {
      name: '[PACKAGE_3_NAME]',                  // e.g., "Grand"
      price: '[PACKAGE_3_PRICE]',                // e.g., "PHP 300,000"
      guests: '[PACKAGE_3_GUESTS]',              // e.g., "200"
      items: [
        '[PACKAGE_3_ITEM_1]',
        '[PACKAGE_3_ITEM_2]',
        '[PACKAGE_3_ITEM_3]',
        '[PACKAGE_3_ITEM_4]',
        '[PACKAGE_3_ITEM_5]',
        '[PACKAGE_3_ITEM_6]',
        '[PACKAGE_3_ITEM_7]',
        '[PACKAGE_3_ITEM_8]',
      ],
    },
  },

  // ===== Portfolio Preview (Homepage) =====
  // 4 featured events for the homepage portfolio section
  portfolioPreview: [
    {
      imageUrl: '[PORTFOLIO_IMAGE_1]',
      category: 'Wedding',                       // Wedding, Debut, Birthday, Corporate
      title: '[COUPLE_NAMES]',                   // e.g., "Mark & Anna"
      venue: '[VENUE_NAME]',                     // e.g., "Garden Oasis Resort"
    },
    {
      imageUrl: '[PORTFOLIO_IMAGE_2]',
      category: 'Debut',
      title: "[DEBUTANTE_NAME]'s 18th",          // e.g., "Sofia's 18th"
      venue: '[VENUE_NAME]',
    },
    {
      imageUrl: '[PORTFOLIO_IMAGE_3]',
      category: 'Wedding',
      title: '[COUPLE_NAMES]',
      venue: '[VENUE_NAME]',
    },
    {
      imageUrl: '[PORTFOLIO_IMAGE_4]',
      category: 'Birthday',
      title: "[NAME]'s Celebration",
      venue: '[VENUE_NAME]',
    },
  ],

  // ===== Gallery Images =====
  // 12 images for the gallery page with event details
  gallery: [
    {
      imageUrl: '[GALLERY_IMAGE_1]',
      fullImageUrl: '[GALLERY_IMAGE_1_FULL]',    // Full-res for lightbox
      category: 'weddings',                       // weddings, debuts, corporate, birthdays
      title: '[EVENT_TITLE_1]',
      venue: '[VENUE_1]',
      layout: 'tall',                             // tall, wide, or normal (empty)
    },
    {
      imageUrl: '[GALLERY_IMAGE_2]',
      fullImageUrl: '[GALLERY_IMAGE_2_FULL]',
      category: 'weddings',
      title: '[EVENT_TITLE_2]',
      venue: '[VENUE_2]',
      layout: '',
    },
    {
      imageUrl: '[GALLERY_IMAGE_3]',
      fullImageUrl: '[GALLERY_IMAGE_3_FULL]',
      category: 'debuts',
      title: '[EVENT_TITLE_3]',
      venue: '[VENUE_3]',
      layout: '',
    },
    {
      imageUrl: '[GALLERY_IMAGE_4]',
      fullImageUrl: '[GALLERY_IMAGE_4_FULL]',
      category: 'corporate',
      title: '[EVENT_TITLE_4]',
      venue: '[VENUE_4]',
      layout: 'wide',
    },
    {
      imageUrl: '[GALLERY_IMAGE_5]',
      fullImageUrl: '[GALLERY_IMAGE_5_FULL]',
      category: 'birthdays',
      title: '[EVENT_TITLE_5]',
      venue: '[VENUE_5]',
      layout: '',
    },
    {
      imageUrl: '[GALLERY_IMAGE_6]',
      fullImageUrl: '[GALLERY_IMAGE_6_FULL]',
      category: 'weddings',
      title: '[EVENT_TITLE_6]',
      venue: '[VENUE_6]',
      layout: '',
    },
    {
      imageUrl: '[GALLERY_IMAGE_7]',
      fullImageUrl: '[GALLERY_IMAGE_7_FULL]',
      category: 'debuts',
      title: '[EVENT_TITLE_7]',
      venue: '[VENUE_7]',
      layout: 'tall',
    },
    {
      imageUrl: '[GALLERY_IMAGE_8]',
      fullImageUrl: '[GALLERY_IMAGE_8_FULL]',
      category: 'corporate',
      title: '[EVENT_TITLE_8]',
      venue: '[VENUE_8]',
      layout: '',
    },
    {
      imageUrl: '[GALLERY_IMAGE_9]',
      fullImageUrl: '[GALLERY_IMAGE_9_FULL]',
      category: 'birthdays',
      title: '[EVENT_TITLE_9]',
      venue: '[VENUE_9]',
      layout: 'wide',
    },
    {
      imageUrl: '[GALLERY_IMAGE_10]',
      fullImageUrl: '[GALLERY_IMAGE_10_FULL]',
      category: 'weddings',
      title: '[EVENT_TITLE_10]',
      venue: '[VENUE_10]',
      layout: '',
    },
    {
      imageUrl: '[GALLERY_IMAGE_11]',
      fullImageUrl: '[GALLERY_IMAGE_11_FULL]',
      category: 'debuts',
      title: '[EVENT_TITLE_11]',
      venue: '[VENUE_11]',
      layout: '',
    },
    {
      imageUrl: '[GALLERY_IMAGE_12]',
      fullImageUrl: '[GALLERY_IMAGE_12_FULL]',
      category: 'corporate',
      title: '[EVENT_TITLE_12]',
      venue: '[VENUE_12]',
      layout: '',
    },
  ],

  // ===== Instagram Feed =====
  // 4 Instagram post images for the feed section
  instagram: [
    '[INSTAGRAM_IMAGE_1]',
    '[INSTAGRAM_IMAGE_2]',
    '[INSTAGRAM_IMAGE_3]',
    '[INSTAGRAM_IMAGE_4]',
  ],

  // ===== Testimonials =====
  testimonials: [
    {
      text: '[TESTIMONIAL_TEXT_1]',              // Full testimonial text
      clientName: '[CLIENT_NAME_1]',             // e.g., "Maria & Juan Santos"
      clientInitial: '[I]',                      // e.g., "M"
      eventType: 'Wedding',
      date: '[MONTH_YEAR]',                      // e.g., "December 2024"
    },
    {
      text: '[TESTIMONIAL_TEXT_2]',
      clientName: '[CLIENT_NAME_2]',
      clientInitial: '[I]',
      eventType: 'Debut',
      date: '[MONTH_YEAR]',
    },
    {
      text: '[TESTIMONIAL_TEXT_3]',
      clientName: '[CLIENT_NAME_3]',
      clientInitial: '[I]',
      eventType: 'Corporate Event',
      date: '[MONTH_YEAR]',
    },
  ],

  // ===== Why Choose Us Image =====
  whyChooseUsImage: '[WHY_CHOOSE_US_IMAGE]',

  // ===== Metadata =====
  meta: {
    currentYear: new Date().getFullYear().toString(),
  },
};

/**
 * ===== IMAGE GUIDELINES =====
 *
 * For best results, use these image dimensions:
 *
 * Hero Image:           1920 x 1080 px minimum (landscape)
 * Service Images:       800 x 600 px minimum (landscape)
 * Portfolio Images:     600 x 800 px for tall, 800 x 400 px for wide, 600 x 600 px for square
 * Gallery Images:       Same as portfolio
 * Instagram Images:     600 x 600 px (square)
 * Why Choose Us Image:  800 x 1000 px (portrait)
 *
 * All images should be:
 * - High quality (not pixelated)
 * - Properly lit
 * - Professional looking
 * - Showcasing your actual work (avoid stock photos if possible)
 *
 * File formats: JPG for photos, PNG for graphics with transparency
 * Optimize images for web (compress to reduce file size)
 *
 * Recommended free tools for image optimization:
 * - TinyPNG (https://tinypng.com)
 * - Squoosh (https://squoosh.app)
 * - ImageOptim (Mac)
 */

/**
 * ===== INSTAGRAM INTEGRATION TIPS =====
 *
 * For events businesses, Instagram is crucial! Here's how to maximize it:
 *
 * 1. CONSISTENT POSTING
 *    - Post 3-5 times per week
 *    - Mix of: event photos, behind-the-scenes, client testimonials, tips
 *    - Use Stories daily for engagement
 *
 * 2. HASHTAG STRATEGY
 *    - Location: #ZamboangaWedding #ZamboangaEvents
 *    - Niche: #PinoyWedding #DebutoNg18 #FilipinoCelebrations
 *    - General: #EventPlanner #WeddingSupplier #PartyPlanner
 *
 * 3. ENGAGEMENT
 *    - Respond to all comments and DMs within 24 hours
 *    - Engage with local vendors and venues
 *    - Tag vendors and venues in your posts
 *
 * 4. CONTENT IDEAS
 *    - Before/after venue transformations
 *    - Vendor spotlights
 *    - Client love stories
 *    - Package breakdowns
 *    - Event planning tips
 *    - Trend updates
 *
 * 5. INSTAGRAM HIGHLIGHTS
 *    Create highlights for:
 *    - Weddings
 *    - Debuts
 *    - Packages
 *    - Testimonials
 *    - Behind the Scenes
 *    - FAQs
 */

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
