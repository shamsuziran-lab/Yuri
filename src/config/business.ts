/**
 * Central business configuration for Roti Jala Dila.
 *
 * IMPORTANT: All values below are editable placeholders.
 * Replace them with the real business details before going live.
 * Never commit real secrets here — this file is public configuration only.
 */
export const business = {
  name: 'Roti Jala Dila',
  tagline: 'Tradisi Rasa, Istimewa Selera',
  positioning: 'Keaslian Rasa, Sentuhan Istimewa',

  /**
   * WhatsApp number in international format WITHOUT the leading "+".
   * Example: "60123456789"
   * PLACEHOLDER — replace with the real business WhatsApp number.
   */
  whatsappNumber: '60123456789',

  /** Email is optional. Leave empty string to hide. */
  email: '',

  /**
   * Business location. Leave empty until the owner confirms the address.
   * The site will show a friendly "location to be announced" notice instead
   * of a fictional address.
   */
  address: '',
  area: '',

  /** Service / delivery coverage areas (editable list). */
  serviceAreas: ['Kawasan Tempatan', 'Sila hubungi untuk kepastian liputan'],

  /** Operating hours. Editable placeholder. */
  operatingHours: 'Waktu operasi akan dimaklumkan. Sila tempah melalui WhatsApp.',

  /** Delivery / collection information. */
  deliveryInfo: 'Penghantaran dan kutipan sendiri boleh diatur melalui WhatsApp mengikut kesesuaian.',

  social: {
    facebook: '',
    instagram: '',
    tiktok: '',
  },

  /** Announcement bar shown at the top of every page. Empty string hides it. */
  announcement: 'Tempahan khas untuk majlis & kenduri — pesan awal untuk kepastian!',

  /** Currency */
  currency: 'RM',
} as const;

/** True while the WhatsApp number is still the placeholder value. */
export const isPlaceholderWhatsApp = business.whatsappNumber === '60123456789';

/**
 * True only when a WhatsApp number has actually been configured.
 * When false, WhatsApp links are disabled and a notice is shown instead.
 */
export const isWhatsAppConfigured = business.whatsappNumber.trim().length > 0;

/** True when the site is running with placeholder/demo business data. */
export const isDemoMode = isPlaceholderWhatsApp || business.address.trim().length === 0;
