/**
 * Tutorial Center Website Template - Configuration
 * =================================================
 *
 * This file documents all placeholder values used throughout the template.
 * Replace the placeholder values (marked with [PLACEHOLDER]) in the HTML files
 * with your actual business information.
 *
 * Usage:
 * 1. Copy this file to config.js
 * 2. Fill in all values with your actual business information
 * 3. Use find-and-replace in your HTML files to update placeholders
 *
 * Note: This is a documentation/reference file. The actual HTML files use
 * static placeholders that need to be replaced directly in the HTML.
 */

const SiteConfig = {

  // ============================================
  // BUSINESS INFORMATION
  // ============================================
  business: {
    // Your tutorial center's official name
    // Example: "Bright Minds Tutorial Center"
    name: "[BUSINESS_NAME]",

    // Short tagline for your business (appears under logo)
    // Example: "Excellence in Education"
    tagline: "[TAGLINE]",

    // City/area where your business operates (for SEO)
    // Example: "Zamboanga City"
    city: "[CITY]",

    // Current year for copyright (auto-updates if using JS)
    // Example: "2025"
    currentYear: "[CURRENT_YEAR]",
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    // Primary phone number (with country code for WhatsApp)
    // Example: "0917 123 4567" or "+639171234567"
    phoneNumber: "[PHONE_NUMBER]",

    // WhatsApp number (international format, no spaces or dashes)
    // Example: "639171234567"
    whatsappNumber: "[WHATSAPP_NUMBER]",

    // Default WhatsApp message when clicking the floating button
    // Example: "Hi! I'd like to inquire about your tutoring programs."
    whatsappMessage: "[WHATSAPP_MESSAGE]",

    // Email address for inquiries
    // Example: "info@brightminds.ph"
    emailAddress: "[EMAIL_ADDRESS]",

    // Full address (for display on contact section)
    // Example: "123 Academic Street, Barangay Education, Zamboanga City 7000"
    fullAddress: "[FULL_ADDRESS]",

    // Short address (for footer)
    // Example: "Brgy. Education, Zamboanga City"
    shortAddress: "[SHORT_ADDRESS]",

    // Google Maps URL for "Get Directions" link
    // Example: "https://maps.google.com/?q=Your+Business+Name"
    googleMapsUrl: "[GOOGLE_MAPS_URL]",

    // Google Maps Embed URL for iframe
    // Example: "https://www.google.com/maps/embed?pb=..."
    googleMapsEmbedUrl: "[GOOGLE_MAPS_EMBED_URL]",
  },

  // ============================================
  // SOCIAL MEDIA
  // ============================================
  social: {
    // Facebook page URL
    // Example: "https://facebook.com/brightmindstutorial"
    facebookUrl: "[FACEBOOK_URL]",

    // Facebook page name (for display)
    // Example: "Bright Minds Tutorial"
    facebookPageName: "[FACEBOOK_PAGE_NAME]",

    // Instagram URL
    // Example: "https://instagram.com/brightmindstutorial"
    instagramUrl: "[INSTAGRAM_URL]",
  },

  // ============================================
  // OPERATING HOURS
  // ============================================
  hours: {
    // Weekday hours
    // Example: "8:00 AM - 8:00 PM"
    weekdayHours: "[WEEKDAY_HOURS]",

    // Saturday hours
    // Example: "8:00 AM - 5:00 PM"
    saturdayHours: "[SATURDAY_HOURS]",

    // Sunday hours (or "Closed")
    // Example: "By appointment only"
    sundayHours: "[SUNDAY_HOURS]",
  },

  // ============================================
  // HOMEPAGE CONTENT
  // ============================================
  homepage: {
    hero: {
      // Achievement badge text (appears above headline)
      // Example: "Rated #1 Tutorial Center in Zamboanga"
      achievementBadge: "[ACHIEVEMENT_BADGE]",

      // Main headline
      // Example: "Unlock Your Child's Full Academic Potential"
      headline: "[HERO_HEADLINE]",

      // Subheadline/description
      // Example: "Personalized tutoring programs designed to help students excel in Math, Science, English, and more."
      subheadline: "[HERO_SUBHEADLINE]",

      // Trust indicators (3 short statements)
      // Example: "Licensed Educators"
      trustIndicator1: "[TRUST_INDICATOR_1]",
      trustIndicator2: "[TRUST_INDICATOR_2]",
      trustIndicator3: "[TRUST_INDICATOR_3]",
    },

    programsSection: {
      // Section headline
      // Example: "Programs Designed for Success"
      headline: "[PROGRAMS_SECTION_HEADLINE]",

      // Section description
      // Example: "Choose from our comprehensive range of tutoring programs tailored to every grade level."
      subheadline: "[PROGRAMS_SECTION_SUBHEADLINE]",
    },

    statsSection: {
      // Section headline
      // Example: "Proven Track Record of Excellence"
      headline: "[STATS_SECTION_HEADLINE]",

      // Section description
      // Example: "Our results speak for themselves. Join thousands of successful students."
      subheadline: "[STATS_SECTION_SUBHEADLINE]",

      // Statistics (4 key metrics)
      // Example: "95%"
      stat1Number: "[STAT_1_NUMBER]",
      stat1Label: "[STAT_1_LABEL]", // Example: "Pass Rate"

      stat2Number: "[STAT_2_NUMBER]", // Example: "15+"
      stat2Label: "[STAT_2_LABEL]", // Example: "Years Experience"

      stat3Number: "[STAT_3_NUMBER]", // Example: "5,000+"
      stat3Label: "[STAT_3_LABEL]", // Example: "Students Helped"

      stat4Number: "[STAT_4_NUMBER]", // Example: "50+"
      stat4Label: "[STAT_4_LABEL]", // Example: "Expert Tutors"
    },

    testimonialsSection: {
      headline: "[TESTIMONIALS_HEADLINE]", // Example: "What Parents & Students Say"
      subheadline: "[TESTIMONIALS_SUBHEADLINE]",
    },

    scheduleSection: {
      headline: "[SCHEDULE_SECTION_HEADLINE]", // Example: "Enrollment Now Open"
      description: "[SCHEDULE_SECTION_DESCRIPTION]",

      // Upcoming schedule/enrollment dates
      schedule1Date: "[SCHEDULE_1_DATE]", // Example: "June 3, 2025"
      schedule1Description: "[SCHEDULE_1_DESCRIPTION]", // Example: "Summer Classes Begin"

      schedule2Date: "[SCHEDULE_2_DATE]",
      schedule2Description: "[SCHEDULE_2_DESCRIPTION]",

      schedule3Date: "[SCHEDULE_3_DATE]",
      schedule3Description: "[SCHEDULE_3_DESCRIPTION]",
    },

    infoCard: {
      title: "[INFO_CARD_TITLE]", // Example: "Early Bird Promo"
      description: "[INFO_CARD_DESCRIPTION]",

      feature1: "[INFO_FEATURE_1]", // Example: "Free assessment test"
      feature2: "[INFO_FEATURE_2]", // Example: "10% early bird discount"
      feature3: "[INFO_FEATURE_3]", // Example: "Free learning materials"
      feature4: "[INFO_FEATURE_4]", // Example: "Flexible payment plans"
    },

    contactSection: {
      headline: "[CONTACT_SECTION_HEADLINE]", // Example: "Visit Our Learning Center"
      subheadline: "[CONTACT_SECTION_SUBHEADLINE]",
    },

    ctaSection: {
      headline: "[CTA_HEADLINE]", // Example: "Ready to Start Your Child's Success Journey?"
      subheadline: "[CTA_SUBHEADLINE]",
    },
  },

  // ============================================
  // PROGRAMS PAGE
  // ============================================
  programsPage: {
    pageTitle: "[PROGRAMS_PAGE_TITLE]", // Example: "Our Tutoring Programs"
    pageDescription: "[PROGRAMS_PAGE_DESCRIPTION]",

    introHeadline: "[PROGRAMS_INTRO_HEADLINE]",
    introDescription: "[PROGRAMS_INTRO_DESCRIPTION]",

    ctaHeadline: "[PROGRAMS_CTA_HEADLINE]",
    ctaSubheadline: "[PROGRAMS_CTA_SUBHEADLINE]",

    whyChooseUs: {
      headline: "[WHY_CHOOSE_US_HEADLINE]",
      description: "[WHY_CHOOSE_US_DESCRIPTION]",

      feature1Title: "[FEATURE_1_TITLE]", // Example: "Expert Tutors"
      feature1Description: "[FEATURE_1_DESCRIPTION]",

      feature2Title: "[FEATURE_2_TITLE]", // Example: "Proven Methods"
      feature2Description: "[FEATURE_2_DESCRIPTION]",

      feature3Title: "[FEATURE_3_TITLE]", // Example: "Affordable Rates"
      feature3Description: "[FEATURE_3_DESCRIPTION]",

      feature4Title: "[FEATURE_4_TITLE]", // Example: "Fast Results"
      feature4Description: "[FEATURE_4_DESCRIPTION]",
    },
  },

  // ============================================
  // ENROLLMENT PAGE
  // ============================================
  enrollmentPage: {
    pageTitle: "[ENROLLMENT_PAGE_TITLE]", // Example: "Enroll Today"
    pageDescription: "[ENROLLMENT_PAGE_DESCRIPTION]",

    // Form action URL (where form data is sent)
    // Example: "https://formspree.io/f/your-form-id" or your backend endpoint
    formActionUrl: "[FORM_ACTION_URL]",

    // Requirements checklist
    requirement1: "[REQUIREMENT_1]", // Example: "Recent report card or grades"
    requirement2: "[REQUIREMENT_2]", // Example: "Birth certificate copy"
    requirement3: "[REQUIREMENT_3]", // Example: "2 pcs 1x1 ID photo"
    requirement4: "[REQUIREMENT_4]", // Example: "Parent/Guardian valid ID"
    requirement5: "[REQUIREMENT_5]", // Example: "Registration fee"

    // Payment methods
    paymentMethod1: "[PAYMENT_METHOD_1]", // Example: "Cash Payment"
    paymentMethod2: "[PAYMENT_METHOD_2]", // Example: "GCash / Maya"
    paymentMethod3: "[PAYMENT_METHOD_3]", // Example: "Bank Transfer"
    paymentMethod4: "[PAYMENT_METHOD_4]", // Example: "Credit/Debit Card"

    installmentDetails: "[INSTALLMENT_DETAILS]", // Example: "Pay in 2-3 installments for programs over P5,000"
  },

  // ============================================
  // PROGRAMS (Used across all pages)
  // ============================================
  programs: {
    // Program 1
    program1: {
      id: "[PROGRAM_1_ID]", // URL-friendly ID, e.g., "math-mastery"
      name: "[PROGRAM_1_NAME]", // Example: "Math Mastery"
      level: "[PROGRAM_1_LEVEL]", // Example: "Grades 1-6"
      description: "[PROGRAM_1_DESCRIPTION]", // Short description for cards
      fullDescription: "[PROGRAM_1_FULL_DESCRIPTION]", // Longer description for program page
      duration: "[PROGRAM_1_DURATION]", // Example: "3 months"
      schedule: "[PROGRAM_1_SCHEDULE]", // Example: "MWF 4:00-5:30 PM"
      price: "[PROGRAM_1_PRICE]", // Example: "P3,500"
      paymentTerms: "[PROGRAM_1_PAYMENT_TERMS]", // Example: "per month"
    },

    // Program 2
    program2: {
      id: "[PROGRAM_2_ID]",
      name: "[PROGRAM_2_NAME]", // Example: "Science Explorer"
      level: "[PROGRAM_2_LEVEL]",
      description: "[PROGRAM_2_DESCRIPTION]",
      fullDescription: "[PROGRAM_2_FULL_DESCRIPTION]",
      duration: "[PROGRAM_2_DURATION]",
      schedule: "[PROGRAM_2_SCHEDULE]",
      price: "[PROGRAM_2_PRICE]",
      paymentTerms: "[PROGRAM_2_PAYMENT_TERMS]",
    },

    // Program 3
    program3: {
      id: "[PROGRAM_3_ID]",
      name: "[PROGRAM_3_NAME]", // Example: "English Excellence"
      level: "[PROGRAM_3_LEVEL]",
      description: "[PROGRAM_3_DESCRIPTION]",
      fullDescription: "[PROGRAM_3_FULL_DESCRIPTION]",
      duration: "[PROGRAM_3_DURATION]",
      schedule: "[PROGRAM_3_SCHEDULE]",
      price: "[PROGRAM_3_PRICE]",
      paymentTerms: "[PROGRAM_3_PAYMENT_TERMS]",
    },

    // Program 4
    program4: {
      id: "[PROGRAM_4_ID]",
      name: "[PROGRAM_4_NAME]", // Example: "Computer Skills"
      level: "[PROGRAM_4_LEVEL]",
      description: "[PROGRAM_4_DESCRIPTION]",
      fullDescription: "[PROGRAM_4_FULL_DESCRIPTION]",
      duration: "[PROGRAM_4_DURATION]",
      schedule: "[PROGRAM_4_SCHEDULE]",
      price: "[PROGRAM_4_PRICE]",
      paymentTerms: "[PROGRAM_4_PAYMENT_TERMS]",
    },

    // Program 5
    program5: {
      id: "[PROGRAM_5_ID]",
      name: "[PROGRAM_5_NAME]", // Example: "Reading Enhancement"
      level: "[PROGRAM_5_LEVEL]",
      description: "[PROGRAM_5_DESCRIPTION]",
      fullDescription: "[PROGRAM_5_FULL_DESCRIPTION]",
      duration: "[PROGRAM_5_DURATION]",
      schedule: "[PROGRAM_5_SCHEDULE]",
      price: "[PROGRAM_5_PRICE]",
      paymentTerms: "[PROGRAM_5_PAYMENT_TERMS]",
    },

    // Program 6
    program6: {
      id: "[PROGRAM_6_ID]",
      name: "[PROGRAM_6_NAME]", // Example: "Exam Review Intensive"
      level: "[PROGRAM_6_LEVEL]",
      description: "[PROGRAM_6_DESCRIPTION]",
      fullDescription: "[PROGRAM_6_FULL_DESCRIPTION]",
      duration: "[PROGRAM_6_DURATION]",
      schedule: "[PROGRAM_6_SCHEDULE]",
      price: "[PROGRAM_6_PRICE]",
      paymentTerms: "[PROGRAM_6_PAYMENT_TERMS]",
    },
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: {
    testimonial1: {
      text: "[TESTIMONIAL_1_TEXT]",
      name: "[TESTIMONIAL_1_NAME]", // Example: "Maria Santos"
      role: "[TESTIMONIAL_1_ROLE]", // Example: "Parent of Grade 5 Student"
      initials: "[TESTIMONIAL_1_INITIALS]", // Example: "MS"
    },

    testimonial2: {
      text: "[TESTIMONIAL_2_TEXT]",
      name: "[TESTIMONIAL_2_NAME]",
      role: "[TESTIMONIAL_2_ROLE]",
      initials: "[TESTIMONIAL_2_INITIALS]",
    },

    testimonial3: {
      text: "[TESTIMONIAL_3_TEXT]",
      name: "[TESTIMONIAL_3_NAME]",
      role: "[TESTIMONIAL_3_ROLE]",
      initials: "[TESTIMONIAL_3_INITIALS]",
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    // Short description about the business
    // Example: "Helping students achieve academic excellence since 2010. Quality tutoring programs for all grade levels."
    description: "[FOOTER_DESCRIPTION]",
  },

};

// Export for use if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SiteConfig;
}
