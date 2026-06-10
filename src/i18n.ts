import { Language } from './types';

export const translations = {
  en: {
    home: 'Home',
    about: 'About',
    journey: 'Journey',
    highlights: 'Highlights',
    gallery: 'Gallery',
    contact: 'Contact',
    preferredFoot: 'Preferred Foot',
    favoriteClub: 'Favorite Club',
    favoritePlayer: 'Favorite Player',
    right: 'Right',
    left: 'Left',
    morePhotos: 'More Photos',
    lessPhotos: 'Less Photos',
    createWebsiteHeading: 'Own Your Professional Football Identity',
    createWebsiteBtn: 'Build My Player Profile',
    watchVideo: 'Watch',
    contactMe: 'Get in Touch',
    loading: 'Loading...',
    designedBy: 'Designed & Developed by',
    allRightsReserved: 'All rights reserved.'
  },
  ar: {
    home: 'الرئيسية',
    about: 'نبذة',
    journey: 'المسيرة',
    highlights: 'أبرز اللقطات',
    gallery: 'الصور',
    contact: 'تواصل',
    preferredFoot: 'القدم المفضلة',
    favoriteClub: 'النادي المفضل',
    favoritePlayer: 'اللاعب المفضل',
    right: 'اليمنى',
    left: 'اليسرى',
    morePhotos: 'المزيد من الصور',
    lessPhotos: 'صور أقل',
    createWebsiteHeading: 'امتلك هويتك الاحترافية كلاعب كرة قدم',
    createWebsiteBtn: 'ابنِ ملفي الشخصي كلاعب',
    watchVideo: 'شاهد',
    contactMe: 'تواصل معي',
    loading: 'جاري التحميل...',
    designedBy: 'تصميم وتطوير',
    allRightsReserved: 'جميع الحقوق محفوظة.'
  }
};

export const useTranslation = (lang: Language) => {
  return (key: keyof typeof translations['en']) => translations[lang][key];
};
