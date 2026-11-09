import { getAssetUrl } from '../utils/assets';

export type Language = 'en' | 'te';

export interface MemoryItem {
  id: number;
  image: string;
  title: {
    en: string;
    te: string;
  };
  caption: {
    en: string;
    te: string;
  };
  tag: {
    en: string;
    te: string;
  };
}

export interface SpecialReason {
  id: number;
  title: {
    en: string;
    te: string;
  };
  description: {
    en: string;
    te: string;
  };
  iconName: string;
  badge: string;
  accentColor: string;
}

export const siteContent = {
  nav: {
    home: { en: 'Home', te: 'హోమ్' },
    memories: { en: 'Memories', te: 'జ్ఞాపకాలు' },
    letter: { en: 'Letter', te: 'లేఖ' },
    special: { en: 'Why Special', te: 'ప్రత్యేకత' },
    cake: { en: 'Cake', te: 'కేక్' },
    surprise: { en: 'Final Surprise', te: 'సర్ ప్రైజ్' },
  },
  hero: {
    tag: { en: 'For The Queen Of My Heart', te: 'నా హృదయ రాణి కోసం' },
    title: { en: 'Happy Birthday, Amma!', te: 'పుట్టినరోజు శుభాకాంక్షలు అమ్మ!' },
    teluguTitle: 'పుట్టినరోజు శుభాకాంక్షలు అమ్మ!',
    subtitle: {
      en: 'To the most special person in my world',
      te: 'నా జీవితంలో అత్యంత ప్రత్యేకమైన దేవతకు',
    },
    button: { en: 'Open Your Surprise ✨', te: 'మీ సర్ ప్రైజ్ తెరవండి ✨' },
    surpriseMessage: {
      en: 'Amma, this little surprise is made with all my love!',
      te: 'అమ్మా, ఈ చిన్న ఆశ్చర్యం నీపై ఉన్న అనంతమైన ప్రేమతో చేశాను!',
    },
    surpriseSubNote: {
      en: 'You bring unconditional warmth, comfort, and boundless light into my life every single day. Wishing you endless joy, radiant health, and all the happiness in the universe. 🌸✨',
      te: 'నువ్వు ప్రతిరోజూ నా జీవితంలో వెలుగులు నింపుతున్నావు. నీకు సంపూర్ణ ఆయురారోగ్యాలు, నిరంతర ఆనందం కలగాలని మనసారా కోరుకుంటున్నాను. 🌸✨',
    },
    closeButton: { en: 'With All My Love ❤️', te: 'ప్రేమతో ❤️' },
  },
  memories: {
    heading: { en: "Amma's Beautiful Memories", te: 'అమ్మ మధుర జ్ఞాపకాలు' },
    teluguHeading: 'అమ్మ ప్రేమ మధురిమలు',
    subtitle: {
      en: 'A timeless gallery celebrating the sweetest moments, gentle smiles, and boundless warmth of our beloved Amma.',
      te: 'అమ్మ నవ్వులు, వెలకట్టలేని క్షణాలు మరియు ఆత్మీయతతో నిండిన అందమైన ఫోటో గ్యాలరీ.',
    },
    clickHint: { en: 'Click any photo to enlarge ✨', te: 'పెద్దదిగా చూడటానికి ఫోటోపై క్లిక్ చేయండి ✨' },
    items: [
      {
        id: 1,
        image: getAssetUrl('images/amma1.jpeg'),
        title: { en: 'Gentle Hands, Endless Love', te: 'అమ్మ అమృత హస్తాలు' },
        caption: {
          en: 'Holding my hands through every step of life with tenderness and unshakeable belief.',
          te: 'నా ప్రతి అడుగులోనూ చేయి పట్టి నడిపించే అమ్మ ప్రేమ.',
        },
        tag: { en: 'First Touch', te: 'తొలి స్పర్శ' },
      },
      {
        id: 2,
        image: getAssetUrl('images/amma2.jpeg'),
        title: { en: 'That Radiant Smile', te: 'మధురమైన చిరునవ్వు' },
        caption: {
          en: 'Her bright smile can dissolve any worry and brighten up the darkest day.',
          te: 'ఎలాంటి కష్టాన్నైనా దూరం చేసే అమ్మ చల్లని నవ్వు.',
        },
        tag: { en: 'Pure Sunshine', te: 'వెన్నెల వెలుగు' },
      },
      {
        id: 3,
        image: getAssetUrl('images/amma3.jpeg'),
        title: { en: 'Festive Joy & Warm Blessings', te: 'పండుగ వెలుగులు' },
        caption: {
          en: 'Every celebration is magical and memorable because of Amma’s prayers and blessings.',
          te: 'అమ్మ దీవెనలతోనే ప్రతి పండుగ ఎంతో సంబరంగా మారుతుంది.',
        },
        tag: { en: 'Tradition & Grace', te: 'దివ్య ఆశీస్సులు' },
      },
      {
        id: 4,
        image: getAssetUrl('images/amma4.jpeg'),
        title: { en: "Made with Mother's Love", te: 'అమ్మ చేతి వంట' },
        caption: {
          en: 'Nothing in this universe compares to the sweetness and comfort of food made by Amma.',
          te: 'అమృతాన్ని మించిన రుచి అమ్మ వండిన అన్నంలో మాత్రమే ఉంటుంది.',
        },
        tag: { en: 'Sweet Memories', te: 'అమృతపు రుచి' },
      },
      {
        id: 5,
        image: getAssetUrl('images/amma5.jpeg'),
        title: { en: 'Peaceful Evenings & Endless Talks', te: 'ఆత్మీయ సంభాషణలు' },
        caption: {
          en: 'Sharing quiet conversations, cherished laughter, and listening to her timeless wisdom.',
          te: 'అమ్మతో గడిపే ప్రతి క్షణం ఒక మధురమైన అనుభూతి.',
        },
        tag: { en: 'Heart to Heart', te: 'మనసులోని మాట' },
      },
      {
        id: 6,
        image: getAssetUrl('images/amma6.jpeg'),
        title: { en: "The Safest Place: Amma's Hug", te: 'అమ్మ ఒడి' },
        caption: {
          en: 'A warm embrace where all fears vanish and pure peace wraps around the soul.',
          te: 'సమస్త భయాలను దూరం చేసి ప్రశాంతతను ఇచ్చే అమూల్యమైన చోటు అమ్మ ఒడి.',
        },
        tag: { en: 'Eternal Home', te: 'శాశ్వత ఆశ్రయం' },
      },
    ] as MemoryItem[],
  },
  letter: {
    heading: { en: 'A Letter for Amma', te: 'అమ్మకు ప్రేమలేఖ' },
    subtitle: {
      en: 'Words straight from the heart for the queen who gave me life and meaning.',
      te: 'నా ప్రాణం, నా సర్వస్వం అయిన అమ్మకు హృదయం నుండి రాసిన మాటలు.',
    },
    openLabel: { en: 'Open Letter ✉️', te: 'లేఖ తెరవండి ✉️' },
    sealText: { en: 'With Love for Amma', te: 'అమ్మకు ప్రేమతో' },
    englishLetter: [
      'Dear Amma,',
      'You are my first teacher, my biggest supporter and my greatest blessing.',
      'Thank you for every sacrifice, every smile, every prayer and every little thing you do for me.',
      'I may not express my love every day, but you mean everything to me.',
      'Your love gives me strength, your words give me courage, and your presence makes my world beautiful.',
      'I wish you endless happiness, good health and beautiful moments.',
      'I love you so much, Amma!',
      'Happy Birthday!',
    ],
    teluguLetter: [
      'ప్రియమైన అమ్మా,',
      'నువ్వే నా మొదటి గురువు, నా అతిపెద్ద బలం మరియు నా జీవితంలో దేవుడిచ్చిన గొప్ప వరం.',
      'నా కోసం నువ్వు చేసిన ప్రతి త్యాగానికి, నీ ప్రతి చిరునవ్వుకి, ప్రతి ప్రార్థనకి మరియు ప్రతి చిన్న విషయానికి నీకు నా హృదయపూర్వక ధన్యవాదాలు.',
      'నేను ప్రతిరోజూ నా ప్రేమను మాటల్లో చెప్పలేకపోవచ్చు, కానీ నా ప్రపంచంలో నువ్వే సర్వస్వం.',
      'నీ ప్రేమ నాకు బలాన్నిస్తుంది, నీ మాటలు నాకు ధైర్యాన్నిస్తాయి, మరియు నీ సాన్నిధ్యం నా ప్రపంచాన్ని ఎంతో అందంగా మారుస్తుంది.',
      'నీకు అనంతమైన ఆనందం, సంపూర్ణ ఆరోగ్యం మరియు మధురమైన క్షణాలు కలగాలని మనస్ఫూర్తిగా కోరుకుంటున్నాను.',
      'ఐ లవ్ యు సో మచ్, అమ్మా!',
      'పుట్టినరోజు శుభాకాంక్షలు!',
    ],
    signature: { en: 'With all my love & gratitude, Forever your child ❤️', te: 'అనంతమైన ప్రేమతో, ఎల్లప్పుడూ నీ బిడ్డ ❤️' },
  },
  special: {
    heading: { en: 'Why You Are Special', te: 'నువ్వెందుకు ఇంత ప్రత్యేకమో తెలుసా?' },
    subtitle: {
      en: 'Six cherished reasons among the countless blessings you bring into our lives every single day.',
      te: 'నా జీవితానికి నువ్వు దేవుడిచ్చిన అత్యంత గొప్ప వరం అని నిరూపించే కొన్ని అమూల్యమైన కారణాలు.',
    },
    cards: [
      {
        id: 1,
        title: { en: 'Your unconditional love ❤️', te: 'నీ నిస్వార్థమైన ప్రేమ ❤️' },
        description: {
          en: 'A boundless ocean of affection that asks for nothing in return and forgives everything with an open heart.',
          te: 'ఏదీ ఆశించకుండా కేవలం ఇవ్వడం మాత్రమే తెలిసిన అనంతమైన, స్వచ్ఛమైన ప్రేమ నీది.',
        },
        iconName: 'Heart',
        badge: '01',
        accentColor: '#ec4899',
      },
      {
        id: 2,
        title: { en: 'Your beautiful smile 😊', te: 'నీ మధురమైన చిరునవ్వు 😊' },
        description: {
          en: 'Your cheerful face brings warmth and brightness to the entire house, even on the hardest of days.',
          te: 'నీ చిన్న నవ్వు చాలు మా ఇల్లంతా వెలుగులతో, సంతోషంతో నిండిపోవడానికి.',
        },
        iconName: 'Smile',
        badge: '02',
        accentColor: '#f59e0b',
      },
      {
        id: 3,
        title: { en: 'Your endless sacrifices 🌷', te: 'నీ అనంతమైన త్యాగాలు 🌷' },
        description: {
          en: 'Silently putting our happiness before your own without ever complaining or asking for credit.',
          te: 'నీ సుఖాలన్నింటినీ పక్కన పెట్టి, మా సంతోషమే నీ ఊపిరిగా జీవించిన త్యాగశీలివి.',
        },
        iconName: 'Flower2',
        badge: '03',
        accentColor: '#a855f7',
      },
      {
        id: 4,
        title: { en: 'Your caring heart 💗', te: 'నీ ప్రేమగల మనసు 💗' },
        description: {
          en: 'Knowing what we need before we even ask, and sensing every heartbeat and feeling instinctively.',
          te: 'నేను అడగకముందే నా కళ్ళను చూసి నా అవసరాన్ని, నా బాధను అర్థం చేసుకునే దైవానివి.',
        },
        iconName: 'HeartHandshake',
        badge: '04',
        accentColor: '#f43f5e',
      },
      {
        id: 5,
        title: { en: 'Your strength and courage ✨', te: 'నీ ధైర్యం మరియు బలం ✨' },
        description: {
          en: 'Facing every life challenge with grace, resilience, and teaching us how to stand tall with dignity.',
          te: 'ఎలాంటి కష్టాలనైనా చిరునవ్వుతో ఎదుర్కొంటూ మాకు ధైర్యాన్నిచ్చే మార్గదర్శివి.',
        },
        iconName: 'Sparkles',
        badge: '05',
        accentColor: '#8b5cf6',
      },
      {
        id: 6,
        title: { en: 'Your blessings 🙏', te: 'నీ అమూల్యమైన దీవెనలు 🙏' },
        description: {
          en: 'The protective shield that guards us wherever we go, turning our dreams into reality.',
          te: 'మేము ఎక్కడున్నా మమ్మల్ని రక్షించే రక్షారేకు నీ పావనమైన ఆశీర్వాదం.',
        },
        iconName: 'HandHeart',
        badge: '06',
        accentColor: '#10b981',
      },
    ] as SpecialReason[],
  },
  cake: {
    heading: { en: 'Interactive Birthday Cake', te: 'అమ్మ పుట్టినరోజు కేక్' },
    subtitle: {
      en: 'Close your eyes, make a heartfelt wish, and tap the button to blow out the magical candles!',
      te: 'కళ్ళు మూసుకుని మనసులో ఒక మంచి కోరిక కోరుకోండి, కొవ్వొత్తులను ఆర్పి కేక్ వేడుక జరుపుకోండి!',
    },
    makeWishButton: { en: 'Make a Wish 💨', te: 'కోరిక కోరుకోండి 💨' },
    cutCakeButton: { en: 'Cut the Cake 🍰', te: 'కేక్ కట్ చేయండి 🍰' },
    relightButton: { en: 'Relight Candles 🕯️', te: 'మళ్ళీ వెలిగించండి 🕯️' },
    wishMessage: {
      en: 'May all your wishes come true, Amma!',
      te: 'అమ్మా, నీ కోరికలన్నీ నెరవేరాలని ఆశిస్తున్నాను!',
    },
    wishSubtext: {
      en: 'Wishing you a year filled with radiant health, peace of mind, sweet laughter, and everlasting love! 🌸🎂',
      te: 'ఈ ఏడాది నీకు సంపూర్ణ ఆయురారోగ్యాలు, ప్రశాంతత మరియు ఆనందాన్ని ప్రసాదించాలని కోరుకుంటున్నాను! 🌸🎂',
    },
    sliceCutMessage: {
      en: 'Sweetest slice of cake for the sweetest Amma in the world! ❤️',
      te: 'ప్రపంచంలోనే అత్యంత మధురమైన అమ్మకు కేక్ ముక్క ప్రేమతో! ❤️',
    },
  },
  music: {
    title: { en: 'Birthday Melody', te: 'పుట్టినరోజు సంగీతం' },
    playing: { en: 'Playing gentle melody', te: 'సంగీతం ప్లే అవుతోంది' },
    paused: { en: 'Play background melody', te: 'నేపథ్య సంగీతం ప్లే చేయండి' },
    missingNotice: {
      en: 'To play your custom song, place amma-birthday.mp3 inside public/music/. Playing synthesizer melody for now! 🎶',
      te: 'మీ స్వంత పాట కోసం public/music/amma-birthday.mp3 లో ఉంచండి. ప్రస్తుతానికి మంత్రముగ్ధమైన ట్యూన్ వినండి! 🎶',
    },
  },
  surprise: {
    heading: { en: 'You Are My World, Amma!', te: 'అమ్మా, నువ్వే నా ప్రపంచం!' },
    teluguMessage: 'అమ్మా, నువ్వే నా ప్రపంచం!',
    subheading: { en: 'Happy Birthday, My Beautiful Amma!', te: 'పుట్టినరోజు శుభాకాంక్షలు, నా ప్రియమైన అమ్మా!' },
    emotionalMessage: {
      en: 'No gift in this entire world is grand enough to express how truly grateful I am to be your child. You are my compass, my safe haven, and my forever hero. May your birthday be as magical, gentle, and radiant as your golden heart! 💖✨',
      te: 'నీ బిడ్డగా పుట్టడం నా పూర్వజన్మ సుకృతం. నువ్వు చూపించే ప్రేమకు ఈ లోకంలో ఏదీ సరితూగదు. నువ్వే నా ధైర్యం, నా ఆశ్రయం, నా సర్వస్వం. ఈ జన్మదినం నీ జీవితంలో సరికొత్త వెలుగులు నింపాలని కోరుకుంటున్నాను! 💖✨',
    },
    replayButton: { en: 'Replay Birthday Surprise ✨', te: 'మళ్ళీ వేడుక చూడండి ✨' },
    daughterLoveTag: { en: 'Crafted with Infinite Love for Amma ❤️', te: 'అమ్మ కోసం అమితమైన ప్రేమతో తయారుచేయబడింది ❤️' },
  },
  backToTop: {
    en: 'Back to Top',
    te: 'పైకి వెళ్ళండి',
  },
};

