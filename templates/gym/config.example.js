/**
 * Gym/Fitness Center Template - Configuration Example
 * =====================================================
 * Copy this file to config.js and replace all [PLACEHOLDER] values
 * with your actual gym information.
 *
 * This configuration powers the dynamic content across all template pages.
 */

const GYM_CONFIG = {

  // ===== BUSINESS INFORMATION =====
  business: {
    name: '[GYM_NAME]',                          // e.g., "Iron Forge Fitness"
    tagline: '[TAGLINE]',                        // e.g., "Transform Your Body, Transform Your Life"
    city: '[CITY]',                              // e.g., "Zamboanga City"
    province: '[PROVINCE]',                      // e.g., "Zamboanga del Sur"
    yearsOpen: '[YEARS_OPEN]',                   // e.g., "5"
    facilitySize: '[FACILITY_SIZE]',             // e.g., "5,000" (in sq ft)
    memberCount: '[MEMBER_COUNT]',               // e.g., "1,500"
    trainerCount: '[TRAINER_COUNT]',             // e.g., "12"
    equipmentCount: '[EQUIPMENT_COUNT]',         // e.g., "200"
  },

  // ===== CONTACT INFORMATION =====
  contact: {
    phone: '[PHONE_NUMBER]',                     // e.g., "+63 917 123 4567"
    email: '[EMAIL_ADDRESS]',                    // e.g., "hello@ironforgefitness.com"
    whatsapp: '[WHATSAPP_NUMBER]',               // e.g., "639171234567" (no + or spaces)
    streetAddress: '[STREET_ADDRESS]',           // e.g., "123 Veterans Avenue"
    zipCode: '[ZIP_CODE]',                       // e.g., "7000"
  },

  // ===== SOCIAL MEDIA =====
  social: {
    facebook: '[FACEBOOK_URL]',                  // e.g., "https://facebook.com/ironforgefitness"
    instagram: '[INSTAGRAM_URL]',                // e.g., "https://instagram.com/ironforgefitness"
    youtube: '[YOUTUBE_URL]',                    // e.g., "https://youtube.com/@ironforgefitness"
    tiktok: '[TIKTOK_URL]',                      // e.g., "https://tiktok.com/@ironforgefitness"
  },

  // ===== OPERATING HOURS =====
  hours: {
    weekdays: {
      open: '5:00 AM',
      close: '10:00 PM',
    },
    saturday: {
      open: '6:00 AM',
      close: '9:00 PM',
    },
    sunday: {
      open: '7:00 AM',
      close: '8:00 PM',
    },
    holidays: {
      open: '8:00 AM',
      close: '6:00 PM',
    },
  },

  // ===== GOOGLE MAPS =====
  maps: {
    embedUrl: '[GOOGLE_MAPS_EMBED_URL]',         // Get from Google Maps > Share > Embed a map
    // e.g., "https://www.google.com/maps/embed?pb=!1m18!1m12..."
  },

  // ===== MEMBERSHIP PRICING =====
  // All prices in PHP (Philippine Peso)
  membership: {
    daily: {
      price: '[DAILY_PRICE]',                    // e.g., "150"
    },
    monthly: {
      price: '[MONTHLY_PRICE]',                  // e.g., "1,500"
    },
    quarterly: {
      price: '[QUARTERLY_PRICE]',                // e.g., "3,999"
      savings: '[QUARTERLY_SAVINGS]',            // e.g., "PHP 501"
    },
    annual: {
      price: '[ANNUAL_PRICE]',                   // e.g., "12,999"
      savings: '[ANNUAL_SAVINGS]',               // e.g., "PHP 5,001"
    },
  },

  // ===== PERSONAL TRAINING PRICING =====
  personalTraining: {
    singleSession: '[PT_SINGLE_PRICE]',          // e.g., "800"
    pack5: {
      price: '[PT_5_PRICE]',                     // e.g., "3,500"
      perSession: '[PT_5_PER_SESSION]',          // e.g., "PHP 700"
      savings: '[PT_5_SAVINGS]',                 // e.g., "PHP 500"
    },
    pack10: {
      price: '[PT_10_PRICE]',                    // e.g., "6,000"
      perSession: '[PT_10_PER_SESSION]',         // e.g., "PHP 600"
      savings: '[PT_10_SAVINGS]',                // e.g., "PHP 2,000"
    },
    discount: '[PT_DISCOUNT]',                   // e.g., "10" (percent off first purchase)
  },

  // ===== PROMOTIONS =====
  promo: {
    text: '[PROMO_TEXT]',                        // e.g., "NEW YEAR SPECIAL: 20% OFF ALL MEMBERSHIPS!"
    code: '[PROMO_CODE]',                        // e.g., "NEWYEAR2024"
    validUntil: '[PROMO_VALID_UNTIL]',           // e.g., "January 31, 2024"
  },

  // ===== PROGRAM SCHEDULES =====
  schedules: {
    crossfit: '[CROSSFIT_SCHEDULE]',             // e.g., "Mon/Wed/Fri"
    zumba: '[ZUMBA_SCHEDULE]',                   // e.g., "Tue/Thu/Sat"
    yoga: '[YOGA_SCHEDULE]',                     // e.g., "Daily 6AM"
    boxing: '[BOXING_SCHEDULE]',                 // e.g., "Tue/Thu 5PM"
  },

  // ===== IMAGES =====
  // Use high-quality images (1920x1080 or larger for hero, 800x600 for cards)
  images: {
    hero: '[HERO_IMAGE_URL]',                    // Main hero background
    weights: '[WEIGHTS_IMAGE_URL]',              // Weight training area
    cardio: '[CARDIO_IMAGE_URL]',                // Cardio equipment area
    studio: '[STUDIO_IMAGE_URL]',                // Group class studio
    functional: '[FUNCTIONAL_IMAGE_URL]',        // CrossFit/functional area
    locker: '[LOCKER_IMAGE_URL]',                // Locker room/amenities
    recovery: '[RECOVERY_IMAGE_URL]',            // Stretching/recovery zone
    pt: '[PT_IMAGE]',                            // Personal training session
    // Program images
    weightTraining: '[WEIGHT_TRAINING_IMAGE]',
    crossfit: '[CROSSFIT_IMAGE]',
    zumba: '[ZUMBA_IMAGE]',
    yoga: '[YOGA_IMAGE]',
    boxing: '[BOXING_IMAGE]',
    personalTraining: '[PERSONAL_TRAINING_IMAGE]',
  },

  // ===== TRAINERS =====
  trainers: [
    {
      name: '[TRAINER_1_NAME]',                  // e.g., "Coach Mike Santos"
      specialty: '[TRAINER_1_SPECIALTY]',        // e.g., "Strength & Conditioning"
      certifications: '[TRAINER_1_CERTIFICATIONS]', // e.g., "NSCA-CPT, CrossFit L2"
      image: '[TRAINER_1_IMAGE]',
    },
    {
      name: '[TRAINER_2_NAME]',                  // e.g., "Coach Sarah Cruz"
      specialty: '[TRAINER_2_SPECIALTY]',        // e.g., "Boxing & Kickboxing"
      certifications: '[TRAINER_2_CERTIFICATIONS]', // e.g., "Boxing Coach Certified"
      image: '[TRAINER_2_IMAGE]',
    },
    {
      name: '[TRAINER_3_NAME]',                  // e.g., "Coach Ana Reyes"
      specialty: '[TRAINER_3_SPECIALTY]',        // e.g., "Yoga & Pilates"
      certifications: '[TRAINER_3_CERTIFICATIONS]', // e.g., "RYT-500, Pilates Certified"
      image: '[TRAINER_3_IMAGE]',
    },
    {
      name: '[TRAINER_4_NAME]',                  // e.g., "Coach Jake Domingo"
      specialty: '[TRAINER_4_SPECIALTY]',        // e.g., "CrossFit & Functional"
      certifications: '[TRAINER_4_CERTIFICATIONS]', // e.g., "CrossFit L3, USAW"
      image: '[TRAINER_4_IMAGE]',
    },
  ],

  // ===== TESTIMONIALS =====
  testimonials: [
    {
      name: '[TESTIMONIAL_1_NAME]',              // e.g., "John D."
      result: '[TESTIMONIAL_1_RESULT]',          // e.g., "Lost 30 lbs in 6 months"
      quote: '[TESTIMONIAL_1_QUOTE]',            // e.g., "The trainers here are incredible..."
      image: '[TESTIMONIAL_1_IMAGE]',
    },
    {
      name: '[TESTIMONIAL_2_NAME]',              // e.g., "Maria S."
      result: '[TESTIMONIAL_2_RESULT]',          // e.g., "Gained confidence & strength"
      quote: '[TESTIMONIAL_2_QUOTE]',            // e.g., "I never thought I could lift weights..."
      image: '[TESTIMONIAL_2_IMAGE]',
    },
    {
      name: '[TESTIMONIAL_3_NAME]',              // e.g., "Robert L."
      result: '[TESTIMONIAL_3_RESULT]',          // e.g., "Completed first marathon"
      quote: '[TESTIMONIAL_3_QUOTE]',            // e.g., "The community here pushed me..."
      image: '[TESTIMONIAL_3_IMAGE]',
    },
  ],

};

// Export for use in other scripts (if using modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GYM_CONFIG;
}
