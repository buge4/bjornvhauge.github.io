// About page translations
const aboutTranslations = {
    no: {
        'about.badge': 'Grunnlegger av Veriton',
        'about.subtitle': 'Grunnlegger av Veriton',
        'about.writer': 'Forfatter',
        'about.intro': 'Jeg jobber med å gjøre AI bedre gjennom Veriton. Ved siden av skriver jeg bøker som deler kunnskap om AI på ulike måter – barnebøker for de yngste, sakprosa for de som vil forstå reguleringene, og thrillere for de som liker spenning med substans.',
        'about.visitVeriton': 'Besøk veriton.io',
        'about.myStory': 'Min Historie',
        'about.story1': 'Jeg er grunnleggeren av Veriton, et selskap som jobber med å løse fundamentale utfordringer i AI-systemer. Sammen med min far Rolf Hauge startet vi selskapet i Oslo i 2025.',
        'about.story2': 'Med bakgrunn fra IT og finans har jeg brukt de siste årene på å forstå hvordan vi kan gjøre AI mer pålitelig og transparent. Dette arbeidet har resultert i TVRF (Transparent Verifiable Random Function), en tilnærming til verifiserbar tilfeldighet for digitale systemer.',
        'about.story3': 'Ved siden av det tekniske arbeidet skriver jeg bøker. Barnebøkene mine handler om å lære barn om AI på en morsom måte. Sakprosaen forklarer AI-regulering for de som trenger å forstå det. Og thrillerne? De lar meg utforske de mørkere sidene av teknologi – hva skjer når AI går galt?',
        'about.veritonTitle': 'Veriton Technologies',
        'about.veritonIntro': 'Veriton ble grunnlagt i Oslo i 2025 av far og sønn Rolf Hauge og Bjørn Vidar Hauge. Selskapet jobber med å løse fundamentale utfordringer i AI-infrastruktur.',
        'about.veritonDesc': 'Veriton utvikler teknologier som adresserer tilfeldighetsproblemer i AI-systemer. Målet er å gjøre AI mer pålitelig, effektiv og transparent.',
        'about.stat1': 'Tapt årlig på mislykkede AI-treninger',
        'about.stat2': 'AI-modeller krever flere treningsforsøk',
        'about.stat3': 'Teknologi for verifiserbar tilfeldighet',
        'about.competencies': 'Kjernekompetanse',
        'about.comp1': 'Forståelse av regulerte IT-systemer',
        'about.comp2': 'Erfaring med krav fra finanssektoren',
        'about.comp3': 'Infrastruktur som møter regulatoriske standarder',
        'about.comp4': 'Systemer som krever stabilitet og revisjon',
        'about.comp5': 'AI-arkitektur og optimalisering',
        'about.publications': 'Publikasjoner',
        'about.pub1': 'Sakprosa om AI-regulering (22 kapitler)',
        'about.pub2': 'Thriller-roman (32 kapitler)',
        'about.pub3': 'Juridisk thriller (29 kapitler)',
        'about.pub4': 'Kommer snart',
        'about.pub5': 'Barnebokserie (8 bøker)',
        'about.pub6': 'Artikler om AI-regulering og teknologi på veriton.io',
        'about.exploreTitle': 'Utforsk mine bøker',
        'about.exploreDesc': 'Fra sakprosa om AI-regulering til spennende romaner – finn din neste lesning.',
        'about.viewBooks': 'Se alle bøker',
        'about.readVeriton': 'Les om Veriton'
    },
    en: {
        'about.badge': 'Founder of Veriton',
        'about.subtitle': 'Founder of Veriton',
        'about.writer': 'Author',
        'about.intro': 'I work on making AI better through Veriton. On the side, I write books that share knowledge about AI in different ways – children\'s books for the youngest, non-fiction for those who want to understand regulations, and thrillers for those who like suspense with substance.',
        'about.visitVeriton': 'Visit veriton.io',
        'about.myStory': 'My Story',
        'about.story1': 'I am the founder of Veriton, a company working to solve fundamental challenges in AI systems. Together with my father Rolf Hauge, we started the company in Oslo in 2025.',
        'about.story2': 'With a background in IT and finance, I have spent recent years understanding how we can make AI more reliable and transparent. This work has resulted in TVRF (Transparent Verifiable Random Function), an approach to verifiable randomness for digital systems.',
        'about.story3': 'Alongside the technical work, I write books. My children\'s books are about teaching kids about AI in a fun way. The non-fiction explains AI regulation for those who need to understand it. And the thrillers? They let me explore the darker sides of technology – what happens when AI goes wrong?',
        'about.veritonTitle': 'Veriton Technologies',
        'about.veritonIntro': 'Veriton was founded in Oslo in 2025 by father and son Rolf Hauge and Bjørn Vidar Hauge. The company works to solve fundamental challenges in AI infrastructure.',
        'about.veritonDesc': 'Veriton develops technologies that address randomness problems in AI systems. The goal is to make AI more reliable, efficient, and transparent.',
        'about.stat1': 'Lost annually on failed AI trainings',
        'about.stat2': 'AI models require multiple training attempts',
        'about.stat3': 'Technology for verifiable randomness',
        'about.competencies': 'Core Competencies',
        'about.comp1': 'Understanding of regulated IT systems',
        'about.comp2': 'Experience with financial sector requirements',
        'about.comp3': 'Infrastructure meeting regulatory standards',
        'about.comp4': 'Systems requiring stability and auditing',
        'about.comp5': 'AI architecture and optimization',
        'about.publications': 'Publications',
        'about.pub1': 'Non-fiction on AI regulation (22 chapters)',
        'about.pub2': 'Thriller novel (32 chapters)',
        'about.pub3': 'Legal thriller (29 chapters)',
        'about.pub4': 'Coming soon',
        'about.pub5': 'Children\'s book series (8 books)',
        'about.pub6': 'Articles on AI regulation and technology at veriton.io',
        'about.exploreTitle': 'Explore my books',
        'about.exploreDesc': 'From non-fiction on AI regulation to exciting novels – find your next read.',
        'about.viewBooks': 'View all books',
        'about.readVeriton': 'Read about Veriton'
    }
};

// Extend the main translations object
if (typeof translations !== 'undefined') {
    Object.keys(aboutTranslations).forEach(lang => {
        if (translations[lang]) {
            Object.assign(translations[lang], aboutTranslations[lang]);
        } else {
            translations[lang] = aboutTranslations[lang];
        }
    });
}
