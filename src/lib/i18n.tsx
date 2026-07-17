import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ka" | "ru";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ka", label: "ქარ" },
  { code: "ru", label: "RU" },
];

type UIStrings = {
  nav: Record<"home" | "tours" | "about" | "gallery" | "reviews" | "contact", string>;
  cta: {
    whatsapp: string;
    exploreTours: string;
    allTours: string;
    sendInquiry: string;
    messageWhatsapp: string;
    seeTours: string;
    getInTouch: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    introEyebrow: string;
    introTitle: string;
    introBody: string;
    whatWeDo: string;
    ourAdventures: string;
    whyTitle: string;
    why: { n: string; t: string; d: string }[];
    ctaTitle: string;
    ctaBody: string;
    planPrefix: string;
  };
  tourPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  waMessages: {
    general: string;
    tour: (title: string) => string;
    plan: string;
  };
};

const strings: Record<Lang, UIStrings> = {
  en: {
    nav: {
      home: "Home",
      tours: "Tours",
      about: "About",
      gallery: "Gallery",
      reviews: "Reviews",
      contact: "Contact",
    },
    cta: {
      whatsapp: "Message us on WhatsApp",
      exploreTours: "Explore tours",
      allTours: "All tours →",
      sendInquiry: "Send inquiry →",
      messageWhatsapp: "Message on WhatsApp",
      seeTours: "See our tours",
      getInTouch: "Get in touch",
    },
    home: {
      heroEyebrow: "Batumi · Adjara · Georgia",
      heroTitle: "See Georgia Like a Local",
      heroSubtitle:
        "Private and group tours across Batumi, Tbilisi & Kutaisi — city sightseeing, mountain hikes, wine tastings and more, led by local guides.",
      introEyebrow: "Ma Na Van Tours",
      introTitle:
        "From the Black Sea to the mountains — discover Georgia the Ma Na Van way.",
      introBody:
        "We're a small, family-run team based in Batumi, sharing the corners of Adjara and greater Georgia we grew up loving. No script, no oversized coach — just a proper Georgian welcome, on your schedule.",
      whatWeDo: "What we do",
      ourAdventures: "Our adventures",
      whyTitle: "Why book with Ma Na Van?",
      why: [
        { n: "01", t: "Born-and-raised guides", d: "We know the trails, the family kitchens, and the shortcuts you won't find on a map." },
        { n: "02", t: "Real people on WhatsApp", d: "Message us directly — no bots, no booking portal. We answer in minutes, in English." },
        { n: "03", t: "Small groups, big welcome", d: "Trips feel like a road trip with friends, not a tour bus. Stumari Rvtisaa — the guest is a gift." },
      ],
      ctaTitle: "Plan your Georgia trip with a local",
      ctaBody: "Tell us your dates and interests. We'll suggest an itinerary within the day.",
      planPrefix: "WhatsApp",
    },
    tourPage: {
      eyebrow: "Tours & Services",
      title: "Seven ways to see Georgia with a local",
      subtitle:
        "Every trip is guided by someone who lives here. Pricing depends on group size and season — WhatsApp us for a quote.",
    },
    waMessages: {
      general: "Hi! I'd like to ask about your tours.",
      tour: (title) => `Hi! I'd like to know more about the ${title}.`,
      plan: "Hi! I'd like help planning a trip.",
    },
  },
  ka: {
    nav: {
      home: "მთავარი",
      tours: "ტურები",
      about: "ჩვენ შესახებ",
      gallery: "გალერეა",
      reviews: "შეფასებები",
      contact: "კონტაქტი",
    },
    cta: {
      whatsapp: "მოგვწერეთ WhatsApp-ზე",
      exploreTours: "ტურების ნახვა",
      allTours: "ყველა ტური →",
      sendInquiry: "მოთხოვნის გაგზავნა →",
      messageWhatsapp: "მოგვწერეთ WhatsApp-ზე",
      seeTours: "ჩვენი ტურები",
      getInTouch: "დაგვიკავშირდით",
    },
    home: {
      heroEyebrow: "ბათუმი · აჭარა · საქართველო",
      heroTitle: "აღმოაჩინე საქართველო ადგილობრივივით",
      heroSubtitle:
        "პირადი და ჯგუფური ტურები ბათუმში, თბილისსა და ქუთაისში — ქალაქის დათვალიერება, ლაშქრობა მთაში, ღვინის დეგუსტაცია და მეტი, ადგილობრივი გიდების თანხლებით.",
      introEyebrow: "Ma Na Van Tours",
      introTitle:
        "შავი ზღვიდან მთებამდე — გაიცანი საქართველო Ma Na Van-ის სტილში.",
      introBody:
        "ჩვენ ვართ პატარა, ოჯახური გუნდი ბათუმიდან, რომელიც გიზიარებთ აჭარისა და საქართველოს იმ კუთხეებს, სადაც გავიზარდეთ. სცენარის გარეშე, დიდი ავტობუსების გარეშე — უბრალოდ ნამდვილი ქართული სტუმართმოყვარეობა თქვენს გრაფიკზე.",
      whatWeDo: "რას ვაკეთებთ",
      ourAdventures: "ჩვენი თავგადასავლები",
      whyTitle: "რატომ Ma Na Van?",
      why: [
        { n: "01", t: "ადგილობრივი გიდები", d: "ვიცნობთ ბილიკებს, ოჯახურ სამზარეულოებს და მალსახმობებს, რომლებსაც რუკაზე ვერ ნახავთ." },
        { n: "02", t: "ცოცხალი ადამიანები WhatsApp-ში", d: "მოგვწერეთ პირდაპირ — ბოტების და ჯავშნის პორტალის გარეშე. ვპასუხობთ წუთებში, ინგლისურად." },
        { n: "03", t: "პატარა ჯგუფები, დიდი მასპინძლობა", d: "მოგზაურობა მეგობრებთან ერთად, არა ტურისტულ ავტობუსში. სტუმარი ღვთისაა." },
      ],
      ctaTitle: "დაგეგმე მოგზაურობა ადგილობრივთან ერთად",
      ctaBody: "მოგვწერეთ თარიღები და ინტერესები. მარშრუტს იმავე დღეს შემოგთავაზებთ.",
      planPrefix: "WhatsApp",
    },
    tourPage: {
      eyebrow: "ტურები და მომსახურება",
      title: "შვიდი გზა საქართველოს გასაცნობად ადგილობრივთან ერთად",
      subtitle:
        "ყოველ ტურს ატარებს ადამიანი, რომელიც აქ ცხოვრობს. ფასი დამოკიდებულია ჯგუფის ზომაზე და სეზონზე — მოგვწერეთ WhatsApp-ზე ფასის დასაზუსტებლად.",
    },
    waMessages: {
      general: "გამარჯობა! მინდა შევიტყო თქვენი ტურების შესახებ.",
      tour: (title) => `გამარჯობა! მინდა მეტი გავიგო ტურის შესახებ: ${title}.`,
      plan: "გამარჯობა! მჭირდება დახმარება მოგზაურობის დაგეგმვაში.",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      tours: "Туры",
      about: "О нас",
      gallery: "Галерея",
      reviews: "Отзывы",
      contact: "Контакты",
    },
    cta: {
      whatsapp: "Напишите нам в WhatsApp",
      exploreTours: "Все туры",
      allTours: "Все туры →",
      sendInquiry: "Отправить запрос →",
      messageWhatsapp: "Написать в WhatsApp",
      seeTours: "Наши туры",
      getInTouch: "Связаться",
    },
    home: {
      heroEyebrow: "Батуми · Аджария · Грузия",
      heroTitle: "Откройте Грузию как местный",
      heroSubtitle:
        "Индивидуальные и групповые туры по Батуми, Тбилиси и Кутаиси — экскурсии по городу, походы в горы, дегустации вина и многое другое с местными гидами.",
      introEyebrow: "Ma Na Van Tours",
      introTitle:
        "От Чёрного моря до гор — откройте Грузию вместе с Ma Na Van.",
      introBody:
        "Мы небольшая семейная команда из Батуми и показываем те уголки Аджарии и всей Грузии, которые сами любим с детства. Без сценариев и больших автобусов — только настоящее грузинское гостеприимство по вашему графику.",
      whatWeDo: "Чем мы занимаемся",
      ourAdventures: "Наши приключения",
      whyTitle: "Почему Ma Na Van?",
      why: [
        { n: "01", t: "Местные гиды", d: "Знаем тропы, домашние кухни и короткие пути, которых нет ни на одной карте." },
        { n: "02", t: "Живые люди в WhatsApp", d: "Пишите напрямую — без ботов и платформ. Отвечаем за минуты, по-английски." },
        { n: "03", t: "Малые группы, тёплый приём", d: "Поездка как с друзьями, а не в туристическом автобусе. Гость — подарок от Бога." },
      ],
      ctaTitle: "Спланируйте поездку в Грузию с местным",
      ctaBody: "Напишите даты и интересы — предложим маршрут в тот же день.",
      planPrefix: "WhatsApp",
    },
    tourPage: {
      eyebrow: "Туры и услуги",
      title: "Семь способов увидеть Грузию с местным",
      subtitle:
        "Каждый тур проводит человек, который здесь живёт. Цена зависит от размера группы и сезона — напишите нам в WhatsApp.",
    },
    waMessages: {
      general: "Здравствуйте! Хочу узнать о ваших турах.",
      tour: (title) => `Здравствуйте! Хочу узнать больше о туре: ${title}.`,
      plan: "Здравствуйте! Нужна помощь с планированием поездки.",
    },
  },
};

type I18nCtx = { lang: Lang; setLang: (l: Lang) => void; t: UIStrings };

const Ctx = createContext<I18nCtx | null>(null);

const STORAGE_KEY = "mnv-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved && (saved === "en" || saved === "ka" || saved === "ru")) {
        setLangState(saved);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<I18nCtx>(
    () => ({
      lang,
      setLang: (l) => {
        setLangState(l);
        try {
          localStorage.setItem(STORAGE_KEY, l);
        } catch {
          /* ignore */
        }
      },
      t: strings[lang],
    }),
    [lang]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useI18n must be used within I18nProvider");
  return v;
}
