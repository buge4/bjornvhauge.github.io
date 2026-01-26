/**
 * Internationalization (i18n) System for bjornvhauge.com
 * Features:
 * - IP-based automatic language detection
 * - Manual language selector
 * - Dynamic text loading from JSON files
 * - SEO-friendly with hreflang tags
 */

const I18N = {
  // Supported languages with country codes for IP detection
  languages: {
    'no': { countries: ['NO'], name: 'Norsk', flag: '🇳🇴' },
    'en': { countries: ['US', 'GB', 'AU', 'CA', 'NZ', 'IE'], name: 'English', flag: '🇬🇧' },
    'de': { countries: ['DE', 'AT', 'CH'], name: 'Deutsch', flag: '🇩🇪' },
    'fr': { countries: ['FR', 'BE', 'CH', 'CA'], name: 'Français', flag: '🇫🇷' },
    'es': { countries: ['ES', 'MX', 'AR', 'CO', 'CL', 'PE'], name: 'Español', flag: '🇪🇸' },
    'zh': { countries: ['CN', 'TW', 'HK', 'SG'], name: '中文', flag: '🇨🇳' },
    'ja': { countries: ['JP'], name: '日本語', flag: '🇯🇵' },
    'ko': { countries: ['KR'], name: '한국어', flag: '🇰🇷' }
  },

  currentLang: 'no',
  translations: {},

  // Initialize the i18n system
  async init() {
    // Check URL parameter first
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    if (urlLang && this.languages[urlLang]) {
      this.currentLang = urlLang;
      localStorage.setItem('preferredLang', urlLang);
    } 
    // Check localStorage for saved preference
    else if (localStorage.getItem('preferredLang')) {
      this.currentLang = localStorage.getItem('preferredLang');
    }
    // Auto-detect based on IP
    else {
      await this.detectLanguageByIP();
    }

    // Load translations and apply
    await this.loadTranslations(this.currentLang);
    this.applyTranslations();
    this.createLanguageSelector();
    this.updateHreflangTags();
    this.updateHTMLLang();
  },

  // Detect language based on visitor's IP/country
  async detectLanguageByIP() {
    try {
      // Using free IP geolocation API
      const response = await fetch('https://ipapi.co/json/', { timeout: 3000 });
      const data = await response.json();
      const countryCode = data.country_code;

      // Find matching language
      for (const [lang, config] of Object.entries(this.languages)) {
        if (config.countries.includes(countryCode)) {
          this.currentLang = lang;
          return;
        }
      }
      
      // Default to English for unknown countries
      this.currentLang = 'en';
    } catch (error) {
      console.log('IP detection failed, using browser language');
      // Fallback to browser language
      const browserLang = navigator.language.split('-')[0];
      if (this.languages[browserLang]) {
        this.currentLang = browserLang;
      } else {
        this.currentLang = 'en';
      }
    }
  },

  // Load translations from JSON file
  async loadTranslations(lang) {
    try {
      const response = await fetch(`lang/${lang}.json`);
      this.translations = await response.json();
    } catch (error) {
      console.error(`Failed to load ${lang} translations, falling back to Norwegian`);
      const response = await fetch('lang/no.json');
      this.translations = await response.json();
    }
  },

  // Apply translations to the page
  applyTranslations() {
    const t = this.translations;
    
    // Hero section
    this.setText('[data-i18n="hero.badge"]', t.hero?.badge);
    this.setText('[data-i18n="hero.name"]', t.hero?.name);
    this.setHTML('[data-i18n="hero.tagline"]', t.hero?.tagline);
    this.setText('[data-i18n="hero.bio"]', t.hero?.bio);
    this.setText('[data-i18n="hero.founderBadge"]', t.hero?.founderBadge);
    this.setText('[data-i18n="hero.btnBooks"]', t.hero?.btnBooks);
    this.setText('[data-i18n="hero.btnAbout"]', t.hero?.btnAbout);
    this.setText('[data-i18n="hero.btnVeriton"]', t.hero?.btnVeriton);

    // Books section
    this.setText('[data-i18n="books.sectionTitle"]', t.books?.sectionTitle);
    this.setText('[data-i18n="books.sectionSubtitle"]', t.books?.sectionSubtitle);
    
    // Categories
    this.setText('[data-i18n="books.categories.nonfiction.title"]', t.books?.categories?.nonfiction?.title);
    this.setText('[data-i18n="books.categories.nonfiction.subtitle"]', t.books?.categories?.nonfiction?.subtitle);
    this.setText('[data-i18n="books.categories.novels.title"]', t.books?.categories?.novels?.title);
    this.setText('[data-i18n="books.categories.children.title"]', t.books?.categories?.children?.title);
    this.setText('[data-i18n="books.categories.children.subtitle"]', t.books?.categories?.children?.subtitle);

    // Series
    this.setText('[data-i18n="books.series.aiThrone.title"]', t.books?.series?.aiThrone?.title);
    this.setText('[data-i18n="books.series.aiThrone.subtitle"]', t.books?.series?.aiThrone?.subtitle);
    this.setText('[data-i18n="books.series.evaLindgren.title"]', t.books?.series?.evaLindgren?.title);
    this.setText('[data-i18n="books.series.evaLindgren.subtitle"]', t.books?.series?.evaLindgren?.subtitle);
    this.setText('[data-i18n="books.series.oracle.title"]', t.books?.series?.oracle?.title);
    this.setText('[data-i18n="books.series.oracle.subtitle"]', t.books?.series?.oracle?.subtitle);

    // Book items
    const bookItems = ['tillit', 'euAiAct', 'jaktenAiTronen', 'jaktenArven', 'rettensTime', 'justitia', 'blindsone', 'oracle2', 'aiPolitiet'];
    bookItems.forEach(book => {
      this.setText(`[data-i18n="books.items.${book}.title"]`, t.books?.items?.[book]?.title);
      this.setText(`[data-i18n="books.items.${book}.titleEn"]`, t.books?.items?.[book]?.titleEn);
      this.setText(`[data-i18n="books.items.${book}.description"]`, t.books?.items?.[book]?.description);
    });

    // Status badges
    document.querySelectorAll('[data-i18n="books.status.completed"]').forEach(el => {
      el.textContent = t.books?.status?.completed || 'Completed';
    });
    document.querySelectorAll('[data-i18n="books.status.construction"]').forEach(el => {
      el.textContent = t.books?.status?.construction || '🚧 Under Construction';
    });

    // Publisher note
    this.setHTML('[data-i18n="books.publisherNote"]', t.books?.publisherNote);

    // About section
    this.setText('[data-i18n="about.title"]', t.about?.title);
    this.setHTML('[data-i18n="about.p1"]', t.about?.p1);
    this.setHTML('[data-i18n="about.p2"]', t.about?.p2);
    this.setHTML('[data-i18n="about.p3"]', t.about?.p3);
    this.setText('[data-i18n="about.connectTitle"]', t.about?.connectTitle);

    // Footer
    this.setText('[data-i18n="footer.copyright"]', t.footer?.copyright);

    // Common
    this.setText('[data-i18n="common.contactLinkedIn"]', t.common?.contactLinkedIn);
  },

  // Helper to set text content
  setText(selector, text) {
    const el = document.querySelector(selector);
    if (el && text) el.textContent = text;
  },

  // Helper to set HTML content
  setHTML(selector, html) {
    const el = document.querySelector(selector);
    if (el && html) el.innerHTML = html;
  },

  // Create language selector dropdown
  createLanguageSelector() {
    const selector = document.getElementById('language-selector');
    if (!selector) return;

    let html = `
      <button class="lang-btn" onclick="I18N.toggleDropdown()">
        ${this.languages[this.currentLang].flag} ${this.languages[this.currentLang].name}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="2" fill="none"/>
        </svg>
      </button>
      <div class="lang-dropdown" id="lang-dropdown">
    `;

    for (const [code, config] of Object.entries(this.languages)) {
      const active = code === this.currentLang ? 'active' : '';
      html += `
        <button class="lang-option ${active}" onclick="I18N.changeLanguage('${code}')">
          ${config.flag} ${config.name}
        </button>
      `;
    }

    html += '</div>';
    selector.innerHTML = html;
  },

  // Toggle dropdown visibility
  toggleDropdown() {
    const dropdown = document.getElementById('lang-dropdown');
    dropdown.classList.toggle('show');
  },

  // Change language
  async changeLanguage(lang) {
    if (lang === this.currentLang) return;
    
    this.currentLang = lang;
    localStorage.setItem('preferredLang', lang);
    
    await this.loadTranslations(lang);
    this.applyTranslations();
    this.createLanguageSelector();
    this.updateHreflangTags();
    this.updateHTMLLang();
    
    // Update URL without reload
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
    
    // Close dropdown
    document.getElementById('lang-dropdown')?.classList.remove('show');
  },

  // Update hreflang tags for SEO
  updateHreflangTags() {
    // Remove existing hreflang tags
    document.querySelectorAll('link[hreflang]').forEach(el => el.remove());
    
    // Add hreflang tags for all languages
    const head = document.head;
    const baseUrl = window.location.origin + window.location.pathname;
    
    for (const lang of Object.keys(this.languages)) {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = `${baseUrl}?lang=${lang}`;
      head.appendChild(link);
    }
    
    // Add x-default
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = baseUrl;
    head.appendChild(defaultLink);
  },

  // Update HTML lang attribute
  updateHTMLLang() {
    document.documentElement.lang = this.currentLang;
  }
};

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('#language-selector')) {
    document.getElementById('lang-dropdown')?.classList.remove('show');
  }
});

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => I18N.init());
