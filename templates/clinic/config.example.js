/**
 * Clinic Template - Configuration
 * ================================
 * Copy this file to config.js and fill in your client's information.
 * Use find-and-replace in your HTML files to swap placeholders.
 */

const CONFIG = {

  // ============================================
  // CLINIC INFORMATION
  // ============================================

  clinicName: "[CLINIC_NAME]",
  // Example: "Zamboanga Dental Care"

  specialization: "[SPECIALIZATION]",
  // Example: "Dental Clinic" or "OB-GYN" or "Pediatrics"

  clinicDescription: "[CLINIC_DESCRIPTION]",
  // Example: "Providing exceptional dental care for you and your family..."


  // ============================================
  // DOCTOR INFORMATION
  // ============================================

  drName: "[DR_NAME]",
  // Example: "Dr. Maria Santos-Cruz"

  drSpecialization: "[SPECIALIZATION]",
  // Same as clinic specialization or more specific

  doctorBio: "[DOCTOR_BIO]",
  // Example: "Dr. Maria Santos-Cruz is a board-certified dentist with over 15 years of experience..."

  credentials: [
    "[CREDENTIAL_1]", // Example: "DMD"
    "[CREDENTIAL_2]", // Example: "FPDS"
  ],

  licenseNo: "[LICENSE_NO]",
  // Example: "12345"

  yearsExperience: "[YEARS_EXPERIENCE]",
  // Example: "15"

  patientsServed: "[PATIENTS_SERVED]",
  // Example: "10,000"


  // ============================================
  // CONTACT INFORMATION
  // ============================================

  phone: "[PHONE]",
  // Example: "0917 123 4567"

  whatsappNumber: "[WHATSAPP_NUMBER]",
  // Example: "639171234567" (no + sign)

  email: "[EMAIL]",
  // Example: "info@zambodental.com"


  // ============================================
  // LOCATION
  // ============================================

  fullAddress: "[FULL_ADDRESS]",
  // Example: "Unit 5, ABC Building, Gov. Camins Avenue"

  shortAddress: "[SHORT_ADDRESS]",
  // Example: "Gov. Camins Ave., Zamboanga City"

  googleMapsEmbedUrl: "[GOOGLE_MAPS_EMBED_URL]",
  googleMapsDirectionsUrl: "[GOOGLE_MAPS_LINK]",


  // ============================================
  // OPERATING HOURS
  // ============================================

  operatingHours: "[OPERATING_HOURS]",
  // Example: "Mon-Sat 9AM-6PM"

  weekdayHours: "[WEEKDAY_HOURS]",
  // Example: "9:00 AM - 6:00 PM"

  saturdayHours: "[SATURDAY_HOURS]",
  // Example: "9:00 AM - 3:00 PM"

  sundayHours: "[SUNDAY_HOURS]",
  // Example: "Closed" or "By Appointment Only"

  walkInPolicy: "[WALK_IN_POLICY]",
  // Example: "Walk-ins are welcome but appointments are preferred to minimize wait times."


  // ============================================
  // SERVICES
  // ============================================

  services: [
    {
      name: "[SERVICE_1_NAME]",
      description: "[SERVICE_1_DESCRIPTION]",
      duration: "[SERVICE_1_DURATION]",
      price: "[SERVICE_1_PRICE]",
    },
    {
      name: "[SERVICE_2_NAME]",
      description: "[SERVICE_2_DESCRIPTION]",
      duration: "[SERVICE_2_DURATION]",
      price: "[SERVICE_2_PRICE]",
    },
    // Add more as needed
  ],


  // ============================================
  // SOCIAL MEDIA
  // ============================================

  facebookUrl: "[FACEBOOK_URL]",
  // Example: "https://facebook.com/zambodental"


  // ============================================
  // TESTIMONIALS
  // ============================================

  testimonials: [
    {
      text: "[TESTIMONIAL_1]",
      reviewerName: "[REVIEWER_1_NAME]",
      reviewerInitial: "[REVIEWER_1_INITIAL]",
    },
    {
      text: "[TESTIMONIAL_2]",
      reviewerName: "[REVIEWER_2_NAME]",
      reviewerInitial: "[REVIEWER_2_INITIAL]",
    },
    {
      text: "[TESTIMONIAL_3]",
      reviewerName: "[REVIEWER_3_NAME]",
      reviewerInitial: "[REVIEWER_3_INITIAL]",
    },
  ],


  // ============================================
  // HMO/INSURANCE (Optional)
  // ============================================

  hmoProviders: "[HMO_PROVIDERS]",
  // Example: "Maxicare, Intellicare, Medicard"


  // ============================================
  // FOOTER
  // ============================================

  currentYear: "[CURRENT_YEAR]",
  yourBusinessName: "[YOUR_BUSINESS_NAME]",

};

export default CONFIG;


// ============================================
// FIND & REPLACE QUICK REFERENCE
// ============================================
/*

[CLINIC_NAME]            → Clinic name
[SPECIALIZATION]         → Medical specialty
[DR_NAME]                → Doctor's full name
[PHONE]                  → Main phone number
[WHATSAPP_NUMBER]        → WhatsApp (country code, no +)
[EMAIL]                  → Email address
[FULL_ADDRESS]           → Complete street address
[SHORT_ADDRESS]          → Brief address
[GOOGLE_MAPS_EMBED_URL]  → Google Maps embed src
[GOOGLE_MAPS_LINK]       → Google Maps directions link
[OPERATING_HOURS]        → Brief hours
[WEEKDAY_HOURS]          → Mon-Fri hours
[SATURDAY_HOURS]         → Saturday hours
[SUNDAY_HOURS]           → Sunday hours
[FACEBOOK_URL]           → Facebook page
[LICENSE_NO]             → PRC license number
[YEARS_EXPERIENCE]       → Years of practice
[PATIENTS_SERVED]        → Total patients (approximate)
[CURRENT_YEAR]           → Current year
[YOUR_BUSINESS_NAME]     → Your web dev business name

For services, testimonials, and features - replace the specific
numbered placeholders like [SERVICE_1_NAME], [TESTIMONIAL_1], etc.

*/
