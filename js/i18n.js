// Internationalization (i18n) System for bjornvhauge.com
// Supports Norwegian (default) and English with IP-based detection

const translations = {
    no: {
        // Navigation
        back: "Tilbake",
        langName: "Norsk",
        
        // Books page
        bookCollection: "Bøker",
        bookCollectionDesc: "Utforsk boksamlingen – fra sakprosa om AI og teknologi til spennende romaner.",
        nonFiction: "Sakprosa",
        nonFictionSub: "Non-Fiction",
        novels: "Romaner",
        novelsSub: "Novels",
        childrenBooks: "Barnebøker",
        childrenBooksSub: "Children's Books",
        chapters: "kapitler",
        audiobookAvailable: "Lydbok tilgjengelig",
        comingSoon: "Kommer snart",
        underConstruction: "Under Construction",
        
        // Subsection headers
        jaktenAiTronenSeries: "Jakten på AI Tronen",
        evaLindgrenTrilogy: "Eva Lindgren Trilogien",
        oracleSeries: "Orakelet",
        
        // Book: Tillit
        tillitTitle: "Tillit",
        tillitSubtitle: "Hva skjer når vi stoler på maskiner vi ikke forstår",
        tillitTeaser: "En dyptgående utforskning av tillit i AI-systemer. Hva skal til for at vi kan stole på maskinene som tar stadig flere beslutninger i livene våre?",
        
        // Book: EU AI Act
        euAiActTitle: "EU AI Act",
        euAiActSubtitle: "AI-regulering i praksis",
        euAiActTeaser: "En praktisk guide til EUs nye AI-forordning. Forstå kravene, unngå bøtene, og implementer ansvarlig AI i din organisasjon.",
        
        // Book: Rettens Time
        rettensTimeTitle: "Rettens Time",
        rettensTimeSubtitle: "En Eva Lindgren-thriller",
        rettensTimeTeaser: "Da en selvkjørende bil dreper åtte år gamle Oliver Berg, må advokat Eva Lindgren forsvare ingeniøren som programmerte bilens beslutningssystem.",
        
        // Book: Jakten på AI-tronen
        jaktenTitle: "Jakten på AI-tronen",
        jaktenSubtitle: "En norsk techno-thriller",
        jaktenTeaser: "I kappløpet om å skape verdens mektigste AI, er ingen regler hellige. En thriller om makt, ambisjoner og de mørke sidene av teknologiindustrien.",
        
        // Book: Jakten på Arven
        jaktenArvenTitle: "Jakten på Arven",
        jaktenArvenSubtitle: "En norsk techno-thriller",
        
        // Book: Blindsone
        blindsoneTitle: "Blindsone",
        blindsoneSubtitle: "En teknologithriller om AI og makt",
        blindsoneTeaser: "Når en analytiker i Oljefondet oppdager at AI-rådgiveren deres er forgiftet med falske data, avdekker han en kinesisk operasjon som truer hele Norges formue.",
        
        // Book: Oracle 2.0
        oracleTitle: "Oracle 2.0",
        oracleSubtitle: "Oppfølgeren til Blindsone - Under utvikling",
        oracleTeaser: "ORACLE-systemets «sleeper agents» våkner i vestlige AI-modeller. Karin Lindberg og teamet hennes må stoppe en ny trussel som truer med å destabilisere hele den globale AI-infrastrukturen.",
        
        // Book: Justitia
        justitiaTitle: "JUSTITIA",
        justitiaSubtitle: "En Eva Lindgren-thriller",
        justitiaTeaser: "Eva Lindgren kjemper mot JUSTITIA - et AI-system som diskriminerer i det norske rettsvesenet.",
        
        // Children's books
        aiPolitietTitle: "AI-Politiet",
        aiPolitietSubtitle: "En barnebokserie om kunstig intelligens",
        aiPolitietSeries: "AI-Politiet Serien",
        aiPolitietDesc: "Følg AI-Politiet på spennende eventyr der de lærer barn om kunstig intelligens på en morsom og engasjerende måte. Perfekt for barn i alderen 6-10 år.",
        
        // Publisher note
        publisherNoteTitle: "For forlag og utgivere",
        publisherNote: "Alle manuskripter er tilgjengelige for lisensiering. Kontakt meg på",
        publisherNoteLink: "LinkedIn",
        publisherNoteEnd: "for forespørsler om utgivelse, oversettelse eller andre samarbeid.",
        
        // Footer
        footerText: "© 2026 Bjørn V. Hauge. Alle rettigheter reservert.",
        footerNote: "Manuskripter tilgjengelige for lisensiering."
    },
    en: {
        // Navigation
        back: "Back",
        langName: "English",
        
        // Books page
        bookCollection: "Books",
        bookCollectionDesc: "Explore the book collection – from non-fiction about AI and technology to exciting novels.",
        nonFiction: "Non-Fiction",
        nonFictionSub: "Sakprosa",
        novels: "Novels",
        novelsSub: "Romaner",
        childrenBooks: "Children's Books",
        childrenBooksSub: "Barnebøker",
        chapters: "chapters",
        audiobookAvailable: "Audiobook available",
        comingSoon: "Coming soon",
        underConstruction: "Under Construction",
        
        // Subsection headers
        jaktenAiTronenSeries: "The Hunt for the AI Throne",
        evaLindgrenTrilogy: "The Eva Lindgren Trilogy",
        oracleSeries: "The Oracle",
        
        // Book: Tillit
        tillitTitle: "Trust",
        tillitSubtitle: "What happens when we trust machines we don't understand",
        tillitTeaser: "A deep exploration of trust in AI systems. What does it take for us to trust the machines that are making more and more decisions in our lives?",
        
        // Book: EU AI Act
        euAiActTitle: "EU AI Act",
        euAiActSubtitle: "AI Regulation in Practice",
        euAiActTeaser: "A practical guide to the EU's new AI regulation. Understand the requirements, avoid the fines, and implement responsible AI in your organization.",
        
        // Book: Rettens Time
        rettensTimeTitle: "The Hour of Justice",
        rettensTimeSubtitle: "An Eva Lindgren thriller",
        rettensTimeTeaser: "When a self-driving car kills eight-year-old Oliver Berg, lawyer Eva Lindgren must defend the engineer who programmed the car's decision system.",
        
        // Book: Jakten på AI-tronen
        jaktenTitle: "The Hunt for the AI Throne",
        jaktenSubtitle: "A Norwegian techno-thriller",
        jaktenTeaser: "In the race to create the world's most powerful AI, no rules are sacred. A thriller about power, ambition, and the dark sides of the technology industry.",
        
        // Book: Jakten på Arven
        jaktenArvenTitle: "The Hunt for the Inheritance",
        jaktenArvenSubtitle: "A Norwegian techno-thriller",
        
        // Book: Blindsone
        blindsoneTitle: "Blind Spot",
        blindsoneSubtitle: "A technology thriller about AI and power",
        blindsoneTeaser: "When an analyst at Norway's sovereign wealth fund discovers their AI advisor has been poisoned with false data, he uncovers a Chinese operation threatening Norway's entire fortune.",
        
        // Book: Oracle 2.0
        oracleTitle: "Oracle 2.0",
        oracleSubtitle: "The sequel to Blind Spot - Under development",
        oracleTeaser: "The ORACLE system's 'sleeper agents' awaken in Western AI models. Karin Lindberg and her team must stop a new threat that threatens to destabilize the entire global AI infrastructure.",
        
        // Book: Justitia
        justitiaTitle: "JUSTITIA",
        justitiaSubtitle: "An Eva Lindgren thriller",
        justitiaTeaser: "Eva Lindgren fights against JUSTITIA - an AI system that discriminates in the Norwegian justice system.",
        
        // Children's books
        aiPolitietTitle: "The AI Police",
        aiPolitietSubtitle: "A children's book series about artificial intelligence",
        aiPolitietSeries: "The AI Police Series",
        aiPolitietDesc: "Follow the AI Police on exciting adventures where they teach children about artificial intelligence in a fun and engaging way. Perfect for children ages 6-10.",
        
        // Publisher note
        publisherNoteTitle: "For publishers",
        publisherNote: "All manuscripts are available for licensing. Contact me on",
        publisherNoteLink: "LinkedIn",
        publisherNoteEnd: "for inquiries about publication, translation, or other collaborations.",
        
        // Footer
        footerText: "© 2026 Bjørn V. Hauge. All rights reserved.",
        footerNote: "Manuscripts available for licensing."
    }
};

// Get user's preferred language from localStorage or detect from IP
function getPreferredLanguage() {
    // Check if user has manually selected a language
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        return savedLang;
    }
    
    // Check browser language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang && browserLang.startsWith('no')) {
        return 'no';
    }
    
    // Default to English for non-Norwegian users
    return 'en';
}

// Detect language based on IP (using free geolocation API)
async function detectLanguageFromIP() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        // If user is in Norway, use Norwegian
        if (data.country_code === 'NO') {
            return 'no';
        }
        
        // Otherwise use English
        return 'en';
    } catch (error) {
        console.log('Could not detect location, using browser language');
        return getPreferredLanguage();
    }
}

// Set language and update UI
function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;
    updatePageContent(lang);
    updateLanguageSelector(lang);
}

// Update all translatable content on the page
function updatePageContent(lang) {
    const t = translations[lang];
    if (!t) return;
    
    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
    
    // Update elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });
    
    // Update book cover images based on language
    document.querySelectorAll('img[data-cover-no][data-cover-en]').forEach(img => {
        const coverNo = img.getAttribute('data-cover-no');
        const coverEn = img.getAttribute('data-cover-en');
        if (lang === 'en' && coverEn) {
            img.src = coverEn;
        } else if (coverNo) {
            img.src = coverNo;
        }
    });
}

// Update language selector UI
function updateLanguageSelector(lang) {
    const langBtn = document.getElementById('langBtn');
    const langOptions = document.querySelectorAll('.lang-option');
    
    if (langBtn) {
        const flag = lang === 'no' ? '🇳🇴' : '🇬🇧';
        const name = lang === 'no' ? 'Norsk' : 'English';
        langBtn.innerHTML = `
            <span class="flag">${flag}</span>
            <span class="lang-text">${name}</span>
            <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        `;
    }
    
    langOptions.forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });
}

// Initialize language system
async function initI18n() {
    // Check if user has a saved preference
    const savedLang = localStorage.getItem('preferredLanguage');
    
    if (savedLang) {
        setLanguage(savedLang);
    } else {
        // Detect from IP for first-time visitors
        const detectedLang = await detectLanguageFromIP();
        setLanguage(detectedLang);
    }
    
    // Set up language selector event listeners
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
        });
        
        document.addEventListener('click', () => {
            langDropdown.classList.remove('show');
        });
    }
    
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.getAttribute('data-lang');
            setLanguage(lang);
            if (langDropdown) {
                langDropdown.classList.remove('show');
            }
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}

// Export for use in other scripts
window.i18n = {
    translations,
    setLanguage,
    getPreferredLanguage,
    detectLanguageFromIP
};
