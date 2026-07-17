import cityImg from "@/assets/tour-city.jpg";
import hikingImg from "@/assets/tour-hiking.jpg";
import wineImg from "@/assets/tour-wine.jpg";
import atvImg from "@/assets/tour-atv.jpg";
import transferImg from "@/assets/tour-transfer.jpg";
import privateImg from "@/assets/tour-private.jpg";
import groupImg from "@/assets/tour-group.jpg";
import { useI18n, type Lang } from "@/lib/i18n";

export type TourContent = {
  title: string;
  short: string;
  long: string;
  highlights: string[];
};

export type Tour = {
  slug: string;
  image: string;
} & TourContent;

type RawTour = {
  slug: string;
  image: string;
  content: Record<Lang, TourContent>;
};

const rawTours: RawTour[] = [
  {
    slug: "city-tours",
    image: cityImg,
    content: {
      en: {
        title: "Batumi, Tbilisi & Kutaisi City Tours",
        short: "Walking histories through the heart of Georgia's most beloved cities.",
        long:
          "Explore the colorful facades of Batumi's old town, the winding lanes of Tbilisi's Abanotubani, and the ancient Bagrati Cathedral above Kutaisi — each led by guides who grew up walking these streets.",
        highlights: ["Old town walks", "Local guides", "Half & full day"],
      },
      ka: {
        title: "ბათუმის, თბილისისა და ქუთაისის ქალაქური ტურები",
        short: "საქართველოს საყვარელი ქალაქების გულში ცოცხალი ისტორია.",
        long:
          "აღმოაჩინე ბათუმის ძველი უბნის ფერადი ფასადები, თბილისის აბანოთუბნის ვიწრო ქუჩები და ქუთაისის ბაგრატის ტაძარი — ყოველი ტური ატარებს გიდი, რომელიც ამ ქუჩებში გაიზარდა.",
        highlights: ["ძველი უბანი", "ადგილობრივი გიდები", "ნახევარი და სრული დღე"],
      },
      ru: {
        title: "Экскурсии по Батуми, Тбилиси и Кутаиси",
        short: "Пешие маршруты по сердцу любимых городов Грузии.",
        long:
          "Пёстрые фасады старого Батуми, извилистые улочки Абанотубани в Тбилиси и древний собор Баграти над Кутаиси — с гидами, выросшими на этих улицах.",
        highlights: ["Старый город", "Местные гиды", "Полдня и день"],
      },
    },
  },
  {
    slug: "group-tours",
    image: groupImg,
    content: {
      en: {
        title: "Daily & Group Tours",
        short: "Join fellow travelers on scheduled departures every day of the week.",
        long:
          "Small mixed groups, friendly pace, shared discoveries. Perfect for solo travelers and couples who want company on the road without paying private prices.",
        highlights: ["Daily departures", "Small groups", "Great value"],
      },
      ka: {
        title: "ყოველდღიური და ჯგუფური ტურები",
        short: "შეუერთდი სხვა მოგზაურებს ყოველდღიურ გასვლებზე.",
        long:
          "პატარა შერეული ჯგუფები, მშვიდი ტემპი, ერთობლივი აღმოჩენები. იდეალურია მარტოხელა მოგზაურებისა და წყვილებისთვის, ვისაც სურს კომპანია პირადი ტურის ფასის გარეშე.",
        highlights: ["ყოველდღიური გასვლა", "პატარა ჯგუფები", "ხელსაყრელი ფასი"],
      },
      ru: {
        title: "Ежедневные и групповые туры",
        short: "Присоединяйтесь к путешественникам на ежедневных выездах.",
        long:
          "Небольшие смешанные группы, спокойный темп, общие открытия. Идеально для одиночных путешественников и пар, кому нужна компания без цены индивидуального тура.",
        highlights: ["Каждый день", "Малые группы", "Выгодная цена"],
      },
    },
  },
  {
    slug: "private-tours",
    image: privateImg,
    content: {
      en: {
        title: "Private & Individual Tours",
        short: "Tailored itineraries designed around what you actually want to see.",
        long:
          "Tell us what you love — hidden viewpoints, quiet monasteries, off-menu restaurants — and we'll build a route that's yours alone. Pickup from your hotel, pace on your terms.",
        highlights: ["Custom itinerary", "Hotel pickup", "Your pace"],
      },
      ka: {
        title: "პირადი და ინდივიდუალური ტურები",
        short: "მარშრუტი მოწყობილი თქვენს ინტერესებზე.",
        long:
          "გვითხარით რას გიყვართ — დამალული ხედები, წყნარი მონასტრები, არაპოპულარული რესტორნები — ჩვენ ავაწყობთ მხოლოდ თქვენს მარშრუტს. სასტუმროდან წამოყვანა, თქვენი ტემპით.",
        highlights: ["ინდივიდუალური მარშრუტი", "სასტუმროდან წამოყვანა", "თქვენი ტემპი"],
      },
      ru: {
        title: "Индивидуальные туры",
        short: "Маршрут под ваши интересы.",
        long:
          "Расскажите, что вам интересно — скрытые виды, тихие монастыри, местные рестораны — и мы соберём маршрут только для вас. Забираем из отеля, темп ваш.",
        highlights: ["Свой маршрут", "Из отеля", "Ваш темп"],
      },
    },
  },
  {
    slug: "hiking",
    image: hikingImg,
    content: {
      en: {
        title: "Adjara Mountain Hiking",
        short: "Trek the lush green peaks above Batumi with an experienced local guide.",
        long:
          "From cloud-forest ridges to shepherd huts and hidden waterfalls, the Adjara mountains stay wild just an hour from the coast. Routes for gentle walkers up to full-day summit hikers.",
        highlights: ["All skill levels", "Guided routes", "Snacks included"],
      },
      ka: {
        title: "ლაშქრობა აჭარის მთებში",
        short: "მწვანე მთები ბათუმის ზემოთ გამოცდილი გიდის თანხლებით.",
        long:
          "ღრუბლიანი ტყეებიდან მეცხვარეთა ქოხებამდე და დამალულ ჩანჩქერებამდე, აჭარის მთები ველური რჩება ზღვისპირიდან სულ ერთი საათის მოშორებით. მარშრუტები ყველა დონისთვის.",
        highlights: ["ყველა დონე", "გიდით", "საჭმელი შედის"],
      },
      ru: {
        title: "Походы в горы Аджарии",
        short: "Зелёные вершины над Батуми с опытным местным гидом.",
        long:
          "От облачных лесов до пастушьих хижин и скрытых водопадов — горы Аджарии остаются дикими всего в часе от побережья. Маршруты для всех уровней.",
        highlights: ["Любой уровень", "С гидом", "Перекус включён"],
      },
    },
  },
  {
    slug: "wine-cooking",
    image: wineImg,
    content: {
      en: {
        title: "Home Visit: Wine Tasting & Cooking Masterclass",
        short: "Step inside a local home for khachapuri, khinkali and family-reserve wine.",
        long:
          "This is the tour our guests write home about. A family welcomes you into their kitchen for a hands-on Georgian cooking class, followed by a supra feast with homemade wine, toasts, and stories.",
        highlights: ["Hands-on cooking", "Homemade wine", "Real Georgian hospitality"],
      },
      ka: {
        title: "ვიზიტი ოჯახში: ღვინის დაგემოვნება და კულინარიის მასტერკლასი",
        short: "ადგილობრივ ოჯახში ხაჭაპური, ხინკალი და საოჯახო ღვინო.",
        long:
          "ეს ის ტურია, რომელზეც ჩვენი სტუმრები ყველაზე მეტს წერენ. ოჯახი გიმასპინძლდებათ სამზარეულოში ქართული კულინარიის მასტერკლასზე, შემდეგ კი — სუფრა სახლის ღვინით, სადღეგრძელოებით და ისტორიებით.",
        highlights: ["საკუთარი ხელით", "სახლის ღვინო", "ნამდვილი მასპინძლობა"],
      },
      ru: {
        title: "В гостях у семьи: дегустация вина и мастер-класс по кухне",
        short: "Домашний хачапури, хинкали и семейное вино.",
        long:
          "Об этом туре гости пишут домой чаще всего. Семья зовёт вас на кухню на мастер-класс по грузинской кухне, а затем — супра с домашним вином, тостами и историями.",
        highlights: ["Своими руками", "Домашнее вино", "Настоящее гостеприимство"],
      },
    },
  },
  {
    slug: "atv",
    image: atvImg,
    content: {
      en: {
        title: "ATV / Off-Road Mountain Adventures",
        short: "High-adrenaline quad-bike trails on ridges only reachable by 4x4.",
        long:
          "Ride mud tracks and switchbacks above Batumi to panoramas most visitors never see. Full safety briefing, gear provided, guide leading the pack.",
        highlights: ["Gear provided", "All levels welcome", "Panoramic ridges"],
      },
      ka: {
        title: "ATV / ბეზდაროგო თავგადასავლები მთაში",
        short: "ადრენალინი კვადროციკლზე ბილიკებზე, სადაც მხოლოდ 4x4 გადის.",
        long:
          "ტალახიანი ბილიკები და სერპანტინი ბათუმის ზემოთ პანორამამდე, რომელსაც უმეტესი ტურისტი ვერასდროს ხედავს. უსაფრთხოების ინსტრუქტაჟი, აღჭურვილობა და გიდი შედის.",
        highlights: ["აღჭურვილობა", "ყველა დონე", "პანორამა"],
      },
      ru: {
        title: "Квадроциклы в горах",
        short: "Адреналин на квадроциклах по горным гребням.",
        long:
          "Грязевые тропы и серпантины над Батуми к панорамам, которых обычные туристы не видят. Инструктаж по безопасности, снаряжение и гид включены.",
        highlights: ["Снаряжение", "Любой уровень", "Панорама"],
      },
    },
  },
  {
    slug: "transfers",
    image: transferImg,
    content: {
      en: {
        title: "Airport Transfers (All Airports)",
        short: "Reliable, comfortable pickup from Batumi, Kutaisi and Tbilisi airports.",
        long:
          "Flight tracked, driver waiting with a name sign, fixed fair price. Available 24/7 for early arrivals and late-night landings.",
        highlights: ["24/7 service", "Flight tracking", "Fixed price"],
      },
      ka: {
        title: "აეროპორტის ტრანსფერი (ყველა აეროპორტი)",
        short: "საიმედო ტრანსფერი ბათუმის, ქუთაისისა და თბილისის აეროპორტებიდან.",
        long:
          "ფრენა კონტროლირდება, მძღოლი გხვდებათ სახელით, ფასი ფიქსირებულია. ხელმისაწვდომია 24/7 ადრეული და ღამის ფრენებისთვის.",
        highlights: ["24/7", "ფრენის კონტროლი", "ფიქსირებული ფასი"],
      },
      ru: {
        title: "Трансферы из аэропортов",
        short: "Надёжный трансфер из Батуми, Кутаиси и Тбилиси.",
        long:
          "Отслеживаем рейс, водитель с табличкой, фиксированная цена. Работаем 24/7 для ранних и ночных рейсов.",
        highlights: ["24/7", "Отслеживание рейса", "Фикс. цена"],
      },
    },
  },
];

export function useTours(): Tour[] {
  const { lang } = useI18n();
  return rawTours.map((t) => ({
    slug: t.slug,
    image: t.image,
    ...t.content[lang],
  }));
}

// English fallback list, kept for anywhere that needs a static list (e.g. sitemap).
export const tours: Tour[] = rawTours.map((t) => ({
  slug: t.slug,
  image: t.image,
  ...t.content.en,
}));
