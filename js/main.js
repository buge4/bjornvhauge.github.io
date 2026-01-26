// Language Selector
document.addEventListener('DOMContentLoaded', function() {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    
    // Toggle dropdown
    langBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        langBtn.classList.toggle('open');
        langDropdown.classList.toggle('open');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        langBtn.classList.remove('open');
        langDropdown.classList.remove('open');
    });
    
    // Language selection
    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.dataset.lang;
            
            // Update active state
            langOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Update button text
            const flag = this.querySelector('.flag').textContent;
            const text = lang === 'no' ? 'Norsk' : 'English';
            langBtn.querySelector('.flag').textContent = flag;
            langBtn.querySelector('.lang-text').textContent = text;
            
            // Close dropdown
            langBtn.classList.remove('open');
            langDropdown.classList.remove('open');
            
            // Update page content
            updateLanguage(lang);
            
            // Save preference
            localStorage.setItem('preferredLanguage', lang);
        });
    });
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'no';
    if (savedLang !== 'no') {
        const option = document.querySelector(`[data-lang="${savedLang}"]`);
        if (option) {
            option.click();
        }
    }
});

// Translation data
const translations = {
    no: {
        'hero.badge': 'Grunnlegger av Veriton',
        'hero.tagline': 'Utforsker grensene mellom',
        'hero.ai': 'kunstig intelligens',
        'hero.technology': 'teknologi',
        'hero.and': 'og',
        'hero.society': 'samfunn',
        'hero.through': 'gjennom ord.',
        'hero.description': 'Jeg jobber med å gjøre AI bedre gjennom Veriton. Ved siden av skriver jeg bøker – barnebøker, sakprosa og thrillere – alle fokusert på å dele kunnskap om AI på engasjerende måter, enten du er 8 eller 80.',
        'hero.exploreBooks': 'Utforsk bøkene',
        'hero.aboutMe': 'Om meg',
        'books.title': 'Boksamling',
        'books.subtitle': 'Fra sakprosa om AI-regulering til spennende romaner – utforsk mine bøker i skjæringspunktet mellom teknologi og samfunn.',
        'category.nonfiction': 'Sakprosa',
        'category.nonfiction.alt': 'Non-Fiction',
        'category.nonfiction.desc': 'Fagbøker om AI, teknologi og samfunn',
        'category.novels': 'Romaner',
        'category.novels.alt': 'Novels',
        'category.novels.desc': 'Spenning og drama i AI-alderen',
        'category.children': 'Barnebøker',
        'category.children.alt': "Children's Books",
        'category.children.desc': 'Eventyr for de minste',
        'category.animations': 'Animasjonsfilmer',
        'category.animations.alt': 'Animation Films',
        'category.animations.desc': 'Animerte historier for alle aldre',
        'category.podcasts.desc': 'Samtaler om AI og teknologi',
        'category.articles': 'Artikler',
        'category.articles.alt': 'Articles',
        'category.articles.desc': 'Dybdeartikler og analyser',
        'books.count': 'bøker',
        'items.count': 'elementer',
        'books.viewAll': 'Alle bøker',
        'books.completeOverview': 'Komplett oversikt',
        'footer.tagline': 'Forfatter, Oppfinner & Grunnlegger av Veriton',
        'footer.rights': 'Alle rettigheter reservert.'
    },
    en: {
        'hero.badge': 'Founder of Veriton',
        'hero.tagline': 'Exploring the boundaries between',
        'hero.ai': 'artificial intelligence',
        'hero.technology': 'technology',
        'hero.and': 'and',
        'hero.society': 'society',
        'hero.through': 'through words.',
        'hero.description': 'I work on making AI better through Veriton. On the side, I write books – children\'s books, non-fiction, and thrillers – all focused on sharing knowledge about AI in engaging ways, whether you\'re 8 or 80.',
        'hero.exploreBooks': 'Explore the books',
        'hero.aboutMe': 'About Me',
        'books.title': 'Book Collection',
        'books.subtitle': 'From non-fiction about AI regulation to exciting novels – explore my books at the intersection of technology and society.',
        'category.nonfiction': 'Non-Fiction',
        'category.nonfiction.alt': 'Sakprosa',
        'category.nonfiction.desc': 'Non-fiction about AI, technology and society',
        'category.novels': 'Novels',
        'category.novels.alt': 'Romaner',
        'category.novels.desc': 'Suspense and drama in the AI age',
        'category.children': "Children's Books",
        'category.children.alt': 'Barnebøker',
        'category.children.desc': 'Adventures for the little ones',
        'category.animations': 'Animation Films',
        'category.animations.alt': 'Animasjonsfilmer',
        'category.animations.desc': 'Animated stories for all ages',
        'category.podcasts.desc': 'Conversations about AI and technology',
        'category.articles': 'Articles',
        'category.articles.alt': 'Artikler',
        'category.articles.desc': 'In-depth articles and analyses',
        'books.count': 'books',
        'items.count': 'items',
        'books.viewAll': 'All books',
        'books.completeOverview': 'Complete overview',
        'footer.tagline': 'Author, Inventor & Founder of Veriton',
        'footer.rights': 'All rights reserved.'
    }
};

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}
