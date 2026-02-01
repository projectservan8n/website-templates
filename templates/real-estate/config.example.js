/**
 * Real Estate Template - Configuration File
 * ==========================================
 *
 * This file contains all customizable settings for the real estate website template.
 * Copy this file to 'config.js' and update the values with your actual business information.
 *
 * INSTRUCTIONS:
 * 1. Copy this file: cp config.example.js config.js
 * 2. Replace all [PLACEHOLDER_...] values with your actual data
 * 3. Uncomment and configure optional features as needed
 * 4. For production, consider moving sensitive data to environment variables
 */

const SITE_CONFIG = {
  // ============================================
  // BUSINESS INFORMATION
  // ============================================
  business: {
    name: '[PLACEHOLDER_BUSINESS_NAME]', // e.g., "Zamboanga Premier Realty"
    tagline: '[PLACEHOLDER_TAGLINE]', // e.g., "Your Trusted Property Partner"
    description: '[PLACEHOLDER_BUSINESS_DESCRIPTION]', // For SEO meta descriptions
    licenseNumber: '[PLACEHOLDER_LICENSE_NUMBER]', // PRC License Number
    yearEstablished: '[PLACEHOLDER_YEAR_ESTABLISHED]',
    yearsExperience: '[PLACEHOLDER_YEARS]',
    propertiesSold: '[PLACEHOLDER_PROPERTIES_SOLD]',
    happyClients: '[PLACEHOLDER_HAPPY_CLIENTS]'
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    phone: '[PLACEHOLDER_PHONE]', // e.g., "0917 123 4567"
    phoneFormatted: '[PLACEHOLDER_PHONE_FORMATTED]', // e.g., "+639171234567" (for tel: links)
    email: '[PLACEHOLDER_EMAIL]', // e.g., "info@realty.com"
    whatsapp: '[PLACEHOLDER_WHATSAPP_NUMBER]', // e.g., "639171234567" (no + sign)
    address: {
      street: '[PLACEHOLDER_STREET_ADDRESS]',
      barangay: '[PLACEHOLDER_BARANGAY]',
      city: '[PLACEHOLDER_CITY]', // e.g., "Zamboanga City"
      province: '[PLACEHOLDER_PROVINCE]',
      zipCode: '[PLACEHOLDER_ZIP_CODE]',
      full: '[PLACEHOLDER_FULL_ADDRESS]'
    },
    businessHours: '[PLACEHOLDER_BUSINESS_HOURS]', // e.g., "Mon-Sat: 9AM - 6PM"
    mapEmbedUrl: '[PLACEHOLDER_GOOGLE_MAPS_EMBED_URL]' // Google Maps embed URL
  },

  // ============================================
  // AGENT INFORMATION
  // ============================================
  agent: {
    name: '[PLACEHOLDER_AGENT_NAME]',
    title: '[PLACEHOLDER_AGENT_TITLE]', // e.g., "Licensed Real Estate Broker"
    photo: '[PLACEHOLDER_AGENT_PHOTO_URL]', // URL to agent photo
    bio: '[PLACEHOLDER_AGENT_BIO]',
    shortBio: '[PLACEHOLDER_AGENT_SHORT_BIO]',
    credentials: [
      '[PLACEHOLDER_CREDENTIAL_1]', // e.g., "PRC Licensed Real Estate Broker"
      '[PLACEHOLDER_CREDENTIAL_2]', // e.g., "Member, CREBA"
      '[PLACEHOLDER_CREDENTIAL_3]'  // e.g., "Top Performer Award 2023"
    ],
    reviews: '[PLACEHOLDER_REVIEWS]' // Number of reviews
  },

  // ============================================
  // SOCIAL MEDIA LINKS
  // ============================================
  social: {
    facebook: '[PLACEHOLDER_FACEBOOK_URL]',
    instagram: '[PLACEHOLDER_INSTAGRAM_URL]',
    youtube: '[PLACEHOLDER_YOUTUBE_URL]',
    tiktok: '[PLACEHOLDER_TIKTOK_URL]',
    linkedin: '[PLACEHOLDER_LINKEDIN_URL]'
  },

  // ============================================
  // LOCATIONS SERVED
  // ============================================
  locations: [
    '[PLACEHOLDER_LOCATION_1]', // e.g., "Tetuan"
    '[PLACEHOLDER_LOCATION_2]', // e.g., "Sta. Maria"
    '[PLACEHOLDER_LOCATION_3]', // e.g., "Canelar"
    '[PLACEHOLDER_LOCATION_4]'  // e.g., "Pasonanca"
  ],

  // ============================================
  // SERVICE DESCRIPTIONS
  // ============================================
  services: {
    buying: {
      title: 'Buying',
      description: '[PLACEHOLDER_BUYING_SERVICE_DESCRIPTION]'
    },
    selling: {
      title: 'Selling',
      description: '[PLACEHOLDER_SELLING_SERVICE_DESCRIPTION]'
    },
    renting: {
      title: 'Renting',
      description: '[PLACEHOLDER_RENTING_SERVICE_DESCRIPTION]'
    }
  },

  // ============================================
  // PRICE RANGES (for filters)
  // ============================================
  priceRanges: [
    { label: 'Under ₱1M', min: 0, max: 1000000 },
    { label: '₱1M - ₱3M', min: 1000000, max: 3000000 },
    { label: '₱3M - ₱5M', min: 3000000, max: 5000000 },
    { label: '₱5M - ₱10M', min: 5000000, max: 10000000 },
    { label: '₱10M+', min: 10000000, max: null }
  ],

  // ============================================
  // PROPERTY TYPES
  // ============================================
  propertyTypes: [
    { id: 'house', label: 'House & Lot', badgeColor: '#1E3A5F' },
    { id: 'lot', label: 'Lot Only', badgeColor: '#28A745' },
    { id: 'condo', label: 'Condominium', badgeColor: '#B8860B' },
    { id: 'commercial', label: 'Commercial', badgeColor: '#6B7280' }
  ],

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: [
    {
      text: '[PLACEHOLDER_TESTIMONIAL_1]',
      clientName: '[PLACEHOLDER_CLIENT_1_NAME]',
      clientInitials: '[PLACEHOLDER_CLIENT_1_INITIALS]',
      clientLocation: '[PLACEHOLDER_CLIENT_1_LOCATION]',
      rating: 5
    },
    {
      text: '[PLACEHOLDER_TESTIMONIAL_2]',
      clientName: '[PLACEHOLDER_CLIENT_2_NAME]',
      clientInitials: '[PLACEHOLDER_CLIENT_2_INITIALS]',
      clientLocation: '[PLACEHOLDER_CLIENT_2_LOCATION]',
      rating: 5
    },
    {
      text: '[PLACEHOLDER_TESTIMONIAL_3]',
      clientName: '[PLACEHOLDER_CLIENT_3_NAME]',
      clientInitials: '[PLACEHOLDER_CLIENT_3_INITIALS]',
      clientLocation: '[PLACEHOLDER_CLIENT_3_LOCATION]',
      rating: 5
    }
  ],

  // ============================================
  // FAQ SECTION
  // ============================================
  faqs: [
    {
      question: '[PLACEHOLDER_FAQ_1_QUESTION]',
      answer: '[PLACEHOLDER_FAQ_1_ANSWER]'
    },
    {
      question: '[PLACEHOLDER_FAQ_2_QUESTION]',
      answer: '[PLACEHOLDER_FAQ_2_ANSWER]'
    },
    {
      question: '[PLACEHOLDER_FAQ_3_QUESTION]',
      answer: '[PLACEHOLDER_FAQ_3_ANSWER]'
    },
    {
      question: '[PLACEHOLDER_FAQ_4_QUESTION]',
      answer: '[PLACEHOLDER_FAQ_4_ANSWER]'
    }
  ],

  // ============================================
  // SEO & META
  // ============================================
  seo: {
    siteTitle: '[PLACEHOLDER_BUSINESS_NAME] - Trusted Real Estate Services',
    defaultMetaDescription: '[PLACEHOLDER_META_DESCRIPTION]',
    keywords: [
      'real estate',
      '[PLACEHOLDER_CITY] properties',
      'house and lot for sale',
      'condominium for sale',
      'lot for sale',
      'property for rent'
    ],
    ogImage: '[PLACEHOLDER_OG_IMAGE_URL]' // Open Graph image for social sharing
  },

  // ============================================
  // WHATSAPP MESSAGE TEMPLATES
  // ============================================
  whatsappMessages: {
    general: "Hi! I found you on your website. I'd like to inquire about your real estate services.",
    propertyInquiry: "Hi! I'm interested in this property: {propertyTitle}. Can you provide more details?",
    listings: "Hi! I'm browsing your property listings and would like more information.",
    contact: "Hi! I'm visiting your contact page and would like to inquire about your real estate services.",
    urgent: "Hi! I need immediate assistance regarding a property inquiry."
  },

  // ============================================
  // THEME COLORS (for reference)
  // ============================================
  colors: {
    navy: '#1E3A5F',
    navyDark: '#152B47',
    navyLight: '#2A4A73',
    gold: '#B8860B',
    goldLight: '#D4A017',
    goldDark: '#9A7209',
    success: '#28A745',
    light: '#F8F9FA'
  },

  // ============================================
  // FONTS (for reference)
  // ============================================
  fonts: {
    display: '"Cormorant Garamond", serif',
    body: 'Karla, sans-serif'
  }
};

// ============================================
// SAMPLE PROPERTIES DATA
// ============================================
// Replace with actual property data or connect to your backend/CMS

const SAMPLE_PROPERTIES = [
  {
    id: 'PROP001',
    title: '[PLACEHOLDER_PROPERTY_1_TITLE]',
    type: 'house', // house, lot, condo, commercial
    status: 'sale', // sale, rent
    price: '[PLACEHOLDER_PROPERTY_1_PRICE]', // Numeric value without formatting
    priceNote: 'Negotiable',
    location: '[PLACEHOLDER_PROPERTY_1_LOCATION]',
    fullAddress: '[PLACEHOLDER_PROPERTY_1_FULL_ADDRESS]',
    bedrooms: 3,
    bathrooms: 2,
    floorArea: 150, // sqm
    lotArea: 200, // sqm
    parking: 2,
    stories: 2,
    yearBuilt: 2020,
    furnishing: 'Semi-Furnished',
    titleStatus: 'Clean Title',
    description: '[PLACEHOLDER_PROPERTY_1_DESCRIPTION]',
    amenities: [
      'Air Conditioning',
      'Balcony',
      'Gated Community',
      'Swimming Pool',
      'Garden',
      '24/7 Security'
    ],
    nearbyLandmarks: '[PLACEHOLDER_PROPERTY_1_LANDMARKS]',
    images: [
      '[PLACEHOLDER_PROPERTY_1_IMAGE_1]',
      '[PLACEHOLDER_PROPERTY_1_IMAGE_2]',
      '[PLACEHOLDER_PROPERTY_1_IMAGE_3]'
    ],
    featured: true
  },
  {
    id: 'PROP002',
    title: '[PLACEHOLDER_PROPERTY_2_TITLE]',
    type: 'condo',
    status: 'sale',
    price: '[PLACEHOLDER_PROPERTY_2_PRICE]',
    priceNote: 'Cash or Financing',
    location: '[PLACEHOLDER_PROPERTY_2_LOCATION]',
    fullAddress: '[PLACEHOLDER_PROPERTY_2_FULL_ADDRESS]',
    bedrooms: 2,
    bathrooms: 1,
    floorArea: 65,
    lotArea: null,
    parking: 1,
    stories: null,
    yearBuilt: 2022,
    furnishing: 'Fully Furnished',
    titleStatus: 'Clean Title',
    description: '[PLACEHOLDER_PROPERTY_2_DESCRIPTION]',
    amenities: [
      'Air Conditioning',
      'Gym',
      'Swimming Pool',
      '24/7 Security',
      'CCTV',
      'Near Malls'
    ],
    nearbyLandmarks: '[PLACEHOLDER_PROPERTY_2_LANDMARKS]',
    images: [
      '[PLACEHOLDER_PROPERTY_2_IMAGE_1]',
      '[PLACEHOLDER_PROPERTY_2_IMAGE_2]'
    ],
    featured: true
  },
  {
    id: 'PROP003',
    title: '[PLACEHOLDER_PROPERTY_3_TITLE]',
    type: 'lot',
    status: 'sale',
    price: '[PLACEHOLDER_PROPERTY_3_PRICE]',
    priceNote: 'Per sqm: ₱X,XXX',
    location: '[PLACEHOLDER_PROPERTY_3_LOCATION]',
    fullAddress: '[PLACEHOLDER_PROPERTY_3_FULL_ADDRESS]',
    bedrooms: null,
    bathrooms: null,
    floorArea: null,
    lotArea: 300,
    parking: null,
    stories: null,
    yearBuilt: null,
    furnishing: null,
    titleStatus: 'Clean Title',
    description: '[PLACEHOLDER_PROPERTY_3_DESCRIPTION]',
    amenities: [
      'Flat Terrain',
      'Road Accessible',
      'Near Utilities',
      'Corner Lot'
    ],
    nearbyLandmarks: '[PLACEHOLDER_PROPERTY_3_LANDMARKS]',
    images: [
      '[PLACEHOLDER_PROPERTY_3_IMAGE_1]'
    ],
    featured: true
  }
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Format price in Philippine Peso
 * @param {number} amount - The numeric price value
 * @returns {string} Formatted price string
 */
function formatPrice(amount) {
  return '₱' + parseFloat(amount).toLocaleString('en-PH', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}

/**
 * Format phone number for display
 * @param {string} phone - Phone number string
 * @returns {string} Formatted phone number
 */
function formatPhone(phone) {
  const clean = phone.replace(/\D/g, '');
  if (clean.length === 11 && clean.startsWith('0')) {
    return clean.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3');
  }
  return phone;
}

/**
 * Generate WhatsApp link
 * @param {string} phone - WhatsApp number (without +)
 * @param {string} message - Pre-filled message
 * @returns {string} WhatsApp URL
 */
function getWhatsAppLink(phone, message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

/**
 * Get property type badge color
 * @param {string} type - Property type id
 * @returns {string} Hex color code
 */
function getPropertyTypeBadgeColor(type) {
  const propertyType = SITE_CONFIG.propertyTypes.find(t => t.id === type);
  return propertyType ? propertyType.badgeColor : '#6B7280';
}

// Export for use in other scripts (if using modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SITE_CONFIG,
    SAMPLE_PROPERTIES,
    formatPrice,
    formatPhone,
    getWhatsAppLink,
    getPropertyTypeBadgeColor
  };
}
