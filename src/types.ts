export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';

export interface PlayerData {
  name: { en: string; ar: string };
  number: number;
  position: { en: string; ar: string };
  positionCode: string;
  club: { en: string; ar: string };
  clubLogo: string;
  socials: {
    tiktok: string;
    facebook: string;
    instagram: string;
    whatsapp: string;
    phone: string;
  };
  preferredFoot: 'right' | 'left';
  favoriteClub: { en: string; ar: string };
  favoriteClubLogo: string;
  favoritePlayer: { en: string; ar: string };
  rating: number;
  quote: { en: string; ar: string };
  bio: { en: string; ar: string };
  heroImage: string;
  videos: {
    main: string;
    others: string[];
  };
  gallery: string[];
  timeline: {
    year: string;
    title: { en: string; ar: string };
    club: { en: string; ar: string };
    logo: string;
  }[];
}

export const DUMMY_DATA: PlayerData = {
  name: { en: 'Abdallah Shaarawy', ar: 'عبدالله شعراوي' },
  number: 10,
  position: { en: 'Center-Back', ar: 'قلب الدفاع' },
  positionCode: 'CB',
  club: { en: 'Fayoum FC', ar: 'نادي محافظة الفيوم ' },
  clubLogo: 'https://www.facebook.com/ChickenClubFYM/',
  socials: {
    tiktok: 'https://www.tiktok.com/@abdallah_shaarawyy',
    facebook: 'https://www.instagram.com/abdallah_shaarawyy/',
    instagram: 'https://instagram.com',
    whatsapp: '+1234567890',
    phone: '+1234567890',
  },
  preferredFoot: 'right',
  favoriteClub: { en: 'Real Madrid', ar: 'ريال مدريد' },
  favoriteClubLogo: '../public/Real_Madrid_CF.svg.png', // Replace with an actual logo-like image later
  favoritePlayer: { en: 'Mohamed Salah', ar: 'محمد صلاح' },
  rating: 88,
  quote: { 
    en: "Hard work beats talent when talent doesn't work hard.", 
    ar: "العمل الجاد يتفوق على الموهبة عندما لا تعمل الموهبة بجد." 
  },
  bio: {
    en: 'Creative attacking midfielder known for vision, passing accuracy, and goal-scoring ability.',
    ar: 'لاعب خط وسط هجومي مبدع يتميز بالرؤية ودقة التمرير والقدرة على تسجيل الأهداف.'
  },
  heroImage: '../public/profile.jpg',
  videos: {
    main: '../public/ssstik.io_@abdallah_shaarawyy_1781135258505.mp4',
    others: [
      '../public/ssstik.io_@abdallah_shaarawyy_1781135277389.mp4',
      '../public/ssstik.io_@abdallah_shaarawyy_1781135258505.mp4'
    ]
  },
  gallery: [
    '../public/e1.jpg',
    '../public/e2.jpg',
    '../public/e3.jpg',
    '../public/e4.jpg',
    '../public/e5.jpg'
  ],
  timeline: [
    {
      year: '2025',
      title: { en: 'Fayoum SC', ar: 'نادي الفيوم' },
      club: { en: 'Fayoum SC', ar: 'نادي الفيوم' },
      logo: '../public/fayoum.jpg'
    },
    {
      year: '2021 - 2022',
      title: { en: 'CD Leganés', ar: 'نادي ليجانيس الإسباني' },
      club: { en: 'CD Leganés', ar: 'نادي ليجانيس الإسباني' },
      logo: '../public/CD_Leganés.svg'
    },
    {
      year: '2022 - 2025',
      title: { en: 'AL AHLY SC ', ar: 'النادي الأهلي المصري' },
      club: { en: 'AL AHLY SC', ar: 'النادي الأهلي المصري' },
      logo: '../public/Al_Ahly_SC_logo_23.svg.png'
    }
  ]
};
