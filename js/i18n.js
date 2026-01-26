/**
 * Internationalization (i18n) System for bjornvhauge.com
 */

const I18N = {
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

  async init() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && this.languages[urlLang]) {
      this.currentLang = urlLang;
      localStorage.setItem('preferredLang', urlLang);
    } else if (localStorage.getItem('preferredLang')) {
      this.currentLang = localStorage.getItem('preferredLang');
    } else {
      await this.detectLanguageByIP();
    }
    await this.loadTranslations(this.currentLang);
    this.applyTranslations();
    this.createLanguageSelector();
    this.updateHreflangTags();
    this.updateHTMLLang();
  },

  async detectLanguageByIP() {
    try {
      const response = await fetch('https://ipapi.co/json/', { timeout: 3000 });
      const data = await response.json();
      const countryCode = data.country_code;
      for (const [lang, config] of Object.entries(this.languages)) {
        if (config.countries.includes(countryCode)) {
          this.currentLang = lang;
          return;
        }
      }
      this.currentLang = 'en';
    } catch (error) {
      const browserLang = navigator.language.split('-')[0];
      this.currentLang = this.languages[browserLang] ? browserLang : 'en';
    }
  },

  async loadTranslations(lang) {
    try {
      const response = await fetch(`lang/${lang}.json`);
      this.translations = await response.json();
    } catch (error) {
      const response = await fetch('lang/no.json');
      this.translations = await response.json();
    }
  },

  applyTranslations() {
    const t = this.translations;
    this.setText('[data-i18n="hero.badge"]', t.hero?.badge);
    this.setText('[data-i18n="hero.name"]', t.hero?.name);
    this.setHTML('[data-i18n="hero.tagline"]', t.hero?.tagline);
    this.setText('[data-i18n="hero.bio"]', t.hero?.bio);
    this.setText('[data-i18n="hero.founderBadge"]', t.hero?.founderBadge);
    this.setText('[data-i18n="hero.btnBooks"]', t.hero?.btnBooks);
    this.setText('[data-i18n="hero.btnAbout"]', t.hero?.btnAbout);
    this.setText('[data-i18n="hero.btnVeriton"]', t.hero?.btnVeriton);
    this.setText('[data-i18n="books.sectionTitle"]', t.books?.sectionTitle);
    this.setText('[data-i18n="books.sectionSubtitle"]', t.books?.sectionSubtitle);
    this.setText('[data-i18n="books.categories.nonfiction.title"]', t.books?.categories?.nonfiction?.title);
    this.setText('[data-i18n="books.categories.nonfiction.subtitle"]', t.books?.categories?.nonfiction?.subtitle);
    this.setText('[data-i18n="books.categories.novels.title"]', t.books?.categories?.novels?.title);
    this.setText('[data-i18n="books.categories.children.title"]', t.books?.categories?.children?.title);
    this.setText('[data-i18n="books.categories.children.subtitle"]', t.books?.categories?.children?.subtitle);
    this.setText('[data-i18n="books.series.aiThrone.title"]', t.books?.series?.aiThrone?.title);
    this.setText('[data-i18n="books.series.aiThrone.subtitle"]', t.books?.series?.aiThrone?.subtitle);
    this.setText('[data-i18n="books.series.evaLindgren.title"]', t.books?.series?.evaLindgren?.title);
    this.setText('[data-i18n="books.series.evaLindgren.subtitle"]', t.books?.series?.evaLindgren?.subtitle);
    this.setText('[data-i18n="books.series.oracle.title"]', t.books?.series?.oracle?.title);
    this.setText('[data-i18n="books.series.oracle.subtitle"]', t.books?.series?.oracle?.subtitle);
    const bookItems = ['tillit', 'euAiAct', 'jaktenAiTronen', 'jaktenArven', 'rettensTime', 'justitia', 'blindsone', 'oracle2', 'aiPolitiet'];
    bookItems.forEach(book => {
      this.setText(`[data-i18n="books.items.${book}.title"]`, t.books?.items?.[book]?.title);
      this.setText(`[data-i18n="books.items.${book}.titleEn"]`, t.books?.items?.[book]?.titleEn);
      this.setText(`[data-i18n="books.items.${book}.description"]`, t.books?.items?.[book]?.description);
    });
    document.querySelectorAll('[data-i18n="books.status.completed"]').forEach(el => {
      el.textContent = t.books?.status?.completed || 'Completed';
    });
    document.querySelectorAll('[data-i18n="books.status.construction"]').forEach(el => {
      el.textContent = t.books?.status?.construction || '🚧 Under Construction';
    });
    this.setHTML('[data-i18n="books.publisherNote"]', t.books?.publisherNote);
    this.setText('[data-i18n="about.title"]', t.about?.title);
    this.setHTML('[data-i18n="about.p1"]', t.about?.p1);
    this.setHTML('[data-i18n="about.p2"]', t.about?.p2);
    this.setHTML('[data-i18n="about.p3"]', t.about?.p3);
    this.setText('[data-i18n="about.connectTitle"]', t.about?.connectTitle);
    this.setText('[data-i18n="footer.copyright"]', t.footer?.copyright);
    this.setText('[data-i18n="common.contactLinkedIn"]', t.common?.contactLinkedIn);
  },

  setText(selector, text) {
    const el = document.querySelector(selector);
    if (el && text) el.textContent = text;
  },

  setHTML(selector, html) {
    const el = document.querySelector(selector);
    if (el && html) el.innerHTML = html;
  },

  createLanguageSelector() {
    const selector = document.getElementById('language-selector');
    if (!selector) return;
    let html = `<button class="lang-btn" onclick="I18N.toggleDropdown()">${this.languages[this.currentLang].flag} ${this.languages[this.currentLang].name}<svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="2" fill="none"/></svg></button><div class="lang-dropdown" id="lang-dropdown">`;
    for (const [code, config] of Object.entries(this.languages)) {
      const active = code === this.currentLang ? 'active' : '';
      html += `<button class="lang-option ${active}" onclick="I18N.changeLanguage('${code}')">${config.flag} ${config.name}</button>`;
    }
    html += '</div>';
    selector.innerHTML = html;
  },

  toggleDropdown() {
    document.getElementById('lang-dropdown').classList.toggle('show');
  },

  async changeLanguage(lang) {
    if (lang === this.currentLang) return;
    this.currentLang = lang;
    localStorage.setItem('preferredLang', lang);
    await this.loadTranslations(lang);
    this.applyTranslations();
    this.createLanguageSelector();
    this.updateHreflangTags();
    this.updateHTMLLang();
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
    document.getElementById('lang-dropdown')?.classList.remove('show');
  },

  updateHreflangTags() {
    document.querySelectorAll('link[hreflang]').forEach(el => el.remove());
    const head = document.head;
    const baseUrl = window.location.origin + window.location.pathname;
    for (const lang of Object.keys(this.languages)) {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = `${baseUrl}?lang=${lang}`;
      head.appendChild(link);
    }
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = baseUrl;
    head.appendChild(defaultLink);
  },

  updateHTMLLang() {
    document.documentElement.lang = this.currentLang;
  }
};

document.addEventListener('click', (e) => {
  if (!e.target.closest('#language-selector')) {
    document.getElementById('lang-dropdown')?.classList.remove('show');
  }
});

document.addEventListener('DOMContentLoaded', () => I18N.init());
