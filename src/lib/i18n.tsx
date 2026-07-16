import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ka" | "ru";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "ka", label: "ქართული", short: "KA" },
  { code: "ru", label: "Русский", short: "RU" },
];

type Dict = Record<string, string | string[]>;

const en: Dict = {
  // Nav
  "nav.home": "Home",
  "nav.tours": "Tours",
  "nav.about": "About",
  "nav.gallery": "Gallery",
  "nav.reviews": "Reviews",
  "nav.contact": "Contact",
  "nav.brandSub": "Tours",
  "nav.toggleMenu": "Toggle menu",
  "nav.language": "Language",

  // Home hero
  "home.hero.badge": "Batumi · Adjara · Georgia",
  "home.hero.title": "See Georgia Like a Local",
  "home.hero.subtitle":
    "Private and group tours across Batumi, Tbilisi & Kutaisi — city sightseeing, mountain hikes, wine tastings and more, led by local guides.",
  "home.hero.whatsapp": "Message us on WhatsApp",
  "home.hero.explore": "Explore tours",
  "home.hero.whatsappMsg": "Hi! I'd like to ask about your tours.",

  // Home intro
  "home.intro.kicker": "Ma Na Van Tours",
  "home.intro.title": "From the Black Sea to the mountains — discover Georgia the Ma Na Van way.",
  "home.intro.body":
    "We're a small, family-run team based in Batumi, sharing the corners of Adjara and greater Georgia we grew up loving. No script, no oversized coach — just a proper Georgian welcome, on your schedule.",

  // Home tours
  "home.tours.kicker": "What we do",
  "home.tours.title": "Our adventures",
  "home.tours.all": "All tours →",
  "home.tours.inquire": "Send inquiry →",
  "home.tours.inquireMsg": "Hi! I'd like to know more about the {title}.",

  // Home why
  "home.why.title": "Why book with Ma Na Van?",
  "home.why.1.t": "Born-and-raised guides",
  "home.why.1.d": "We know the trails, the family kitchens, and the shortcuts you won't find on a map.",
  "home.why.2.t": "Real people on WhatsApp",
  "home.why.2.d": "Message us directly — no bots, no booking portal. We answer in minutes, in English.",
  "home.why.3.t": "Small groups, big welcome",
  "home.why.3.d": "Trips feel like a road trip with friends, not a tour bus. Stumari Rvtisaa — the guest is a gift.",

  // Home CTA
  "home.cta.title": "Plan your Georgia trip with a local",
  "home.cta.body": "Tell us your dates and interests. We'll suggest an itinerary within the day.",
  "home.cta.whatsapp": "WhatsApp",
  "home.cta.inquire": "Send an inquiry",
  "home.cta.whatsappMsg": "Hi! I'd like help planning a trip.",

  // Social proof
  "social.1.v": "100%",
  "social.1.l": "Recommendation rate",
  "social.2.v": "62+",
  "social.2.l": "Verified reviews",
  "social.3.v": "4,200+",
  "social.3.l": "Facebook community",
  "social.4.v": "2,000+",
  "social.4.l": "On Instagram",

  // Tours page
  "tours.kicker": "Tours & Services",
  "tours.title": "Seven ways to see Georgia with a local",
  "tours.subtitle":
    "Every trip is guided by someone who lives here. Pricing depends on group size and season — WhatsApp us for a quote.",
  "tours.whatsapp": "Message on WhatsApp",

  // About
  "about.kicker": "Our story",
  "about.title": "Not just a tour — a proper Georgian welcome.",
  "about.p1":
    "Ma Na Van Tours is a small family operation based at {address}. We started out driving friends of friends around Adjara, and never really stopped. Today we run city, mountain, ATV, and cultural tours across Batumi, Tbilisi, Kutaisi and the villages in between.",
  "about.p2":
    "We believe in the old Georgian saying Stumari Rvtisaa — a guest is a gift from God. That's why our tours look less like a schedule and more like a day out with a friend who happens to know the best khachapuri, the quiet viewpoint above Batumi, and the family who still makes wine in clay qvevri.",
  "about.p3":
    "With 4,200+ Facebook followers, 2,000+ on Instagram, and a 100% recommendation rate from our TripAdvisor reviewers, we're proud of the community that's grown around this small business.",
  "about.seeTours": "See our tours",
  "about.getInTouch": "Get in touch",
  "about.v1.t": "Local expertise",
  "about.v1.d": "Guides born and raised in Adjara. No script, no shortcuts on quality.",
  "about.v2.t": "Personal service",
  "about.v2.d": "We reply on WhatsApp within minutes and adjust plans to fit you.",
  "about.v3.t": "All of Georgia",
  "about.v3.d": "From the Black Sea coast to Tbilisi and the high Caucasus.",

  // Gallery
  "gallery.kicker": "Gallery",
  "gallery.title": "Moments from the road",
  "gallery.body": "A glimpse of what a day out with Ma Na Van looks like. More photos of real trips live on our",
  "gallery.instagram": "Instagram",

  // Reviews
  "reviews.kicker": "Reviews",
  "reviews.big": "100%",
  "reviews.subtitle": "recommendation rate from 62 reviews",
  "reviews.body":
    "We don't reprint testimonials here — our reviews live where you'd expect them, so you can read every honest one directly on the platform.",
  "reviews.card.tripadvisor.stat": "100% recommend",
  "reviews.card.tripadvisor.copy": "62 verified reviews across city sightseeing, ATV, hiking and cultural tours.",
  "reviews.card.facebook.stat": "4,200+ followers",
  "reviews.card.facebook.copy": "Photos, group tour updates and traveler check-ins from every season.",
  "reviews.card.instagram.stat": "2,000+ followers",
  "reviews.card.instagram.copy": "Daily stories from the mountains, kitchens and coastlines of Georgia.",
  "reviews.read": "Read reviews →",
  "reviews.quote": "\"Every single traveler who has reviewed us has recommended us to a friend.\"",
  "reviews.quoteCap": "Something we're quietly proud of.",

  // Contact
  "contact.kicker": "Contact",
  "contact.title": "Let's plan your Georgia trip",
  "contact.subtitle":
    "The fastest way to reach us is WhatsApp. We're online daily from 08:00 to 23:00 and usually reply within minutes.",
  "contact.whatsapp": "WhatsApp",
  "contact.call": "Call",
  "contact.email": "Email",
  "contact.visit": "Visit us",
  "contact.form.title": "Send an inquiry",
  "contact.form.body": "Fill this in and we'll open WhatsApp with your message ready to send.",
  "contact.form.name": "Your name",
  "contact.form.namePh": "Nino",
  "contact.form.dates": "Dates",
  "contact.form.datesPh": "e.g. 12–15 August",
  "contact.form.msg": "What you're looking for",
  "contact.form.msgPh":
    "Two of us, love hiking and food, thinking about a home visit and a day in the mountains…",
  "contact.form.submit": "Open in WhatsApp",
  "contact.form.sent":
    "Opened WhatsApp in a new tab — if nothing happened, please message us directly.",
  "contact.form.greeting": "Hi Ma Na Van! I'm {name}.\n\nDates: {dates}\n\n{message}",

  // Footer
  "footer.tagline":
    "Local guides for the Black Sea coast, Adjara mountains, and the warmth of a Georgian home.",
  "footer.visit": "Visit",
  "footer.contact": "Contact",
  "footer.inquire": "Send an inquiry →",
  "footer.rights": "© {year} Ma Na Van Tours · Batumi, Georgia",
  "footer.motto": "Discover Batumi with local heart",

  // WhatsApp FAB
  "fab.label": "Message us on WhatsApp",
  "fab.text": "WhatsApp us",

  // Tours (per-slug)
  "tour.city-tours.title": "Batumi, Tbilisi & Kutaisi City Tours",
  "tour.city-tours.short": "Walking histories through the heart of Georgia's most beloved cities.",
  "tour.city-tours.long":
    "Explore the colorful facades of Batumi's old town, the winding lanes of Tbilisi's Abanotubani, and the ancient Bagrati Cathedral above Kutaisi — each led by guides who grew up walking these streets.",
  "tour.city-tours.h": ["Old town walks", "Local guides", "Half & full day"],

  "tour.group-tours.title": "Daily & Group Tours",
  "tour.group-tours.short": "Join fellow travelers on scheduled departures every day of the week.",
  "tour.group-tours.long":
    "Small mixed groups, friendly pace, shared discoveries. Perfect for solo travelers and couples who want company on the road without paying private prices.",
  "tour.group-tours.h": ["Daily departures", "Small groups", "Great value"],

  "tour.private-tours.title": "Private & Individual Tours",
  "tour.private-tours.short": "Tailored itineraries designed around what you actually want to see.",
  "tour.private-tours.long":
    "Tell us what you love — hidden viewpoints, quiet monasteries, off-menu restaurants — and we'll build a route that's yours alone. Pickup from your hotel, pace on your terms.",
  "tour.private-tours.h": ["Custom itinerary", "Hotel pickup", "Your pace"],

  "tour.hiking.title": "Adjara Mountain Hiking",
  "tour.hiking.short": "Trek the lush green peaks above Batumi with an experienced local guide.",
  "tour.hiking.long":
    "From cloud-forest ridges to shepherd huts and hidden waterfalls, the Adjara mountains stay wild just an hour from the coast. Routes for gentle walkers up to full-day summit hikers.",
  "tour.hiking.h": ["All skill levels", "Guided routes", "Snacks included"],

  "tour.wine-cooking.title": "Home Visit: Wine Tasting & Cooking Masterclass",
  "tour.wine-cooking.short": "Step inside a local home for khachapuri, khinkali and family-reserve wine.",
  "tour.wine-cooking.long":
    "This is the tour our guests write home about. A family welcomes you into their kitchen for a hands-on Georgian cooking class, followed by a supra feast with homemade wine, toasts, and stories.",
  "tour.wine-cooking.h": ["Hands-on cooking", "Homemade wine", "Real Georgian hospitality"],

  "tour.atv.title": "ATV / Off-Road Mountain Adventures",
  "tour.atv.short": "High-adrenaline quad-bike trails on ridges only reachable by 4x4.",
  "tour.atv.long":
    "Ride mud tracks and switchbacks above Batumi to panoramas most visitors never see. Full safety briefing, gear provided, guide leading the pack.",
  "tour.atv.h": ["Gear provided", "All levels welcome", "Panoramic ridges"],

  "tour.transfers.title": "Airport Transfers (All Airports)",
  "tour.transfers.short": "Reliable, comfortable pickup from Batumi, Kutaisi and Tbilisi airports.",
  "tour.transfers.long":
    "Flight tracked, driver waiting with a name sign, fixed fair price. Available 24/7 for early arrivals and late-night landings.",
  "tour.transfers.h": ["24/7 service", "Flight tracking", "Fixed price"],
};

const ka: Dict = {
  "nav.home": "მთავარი",
  "nav.tours": "ტურები",
  "nav.about": "ჩვენ შესახებ",
  "nav.gallery": "გალერეა",
  "nav.reviews": "შეფასებები",
  "nav.contact": "კონტაქტი",
  "nav.brandSub": "ტურები",
  "nav.toggleMenu": "მენიუ",
  "nav.language": "ენა",

  "home.hero.badge": "ბათუმი · აჭარა · საქართველო",
  "home.hero.title": "ნახეთ საქართველო როგორც ადგილობრივმა",
  "home.hero.subtitle":
    "კერძო და ჯგუფური ტურები ბათუმში, თბილისსა და ქუთაისში — ქალაქის დათვალიერება, მთის ლაშქრობები, ღვინის დეგუსტაცია და სხვა, ადგილობრივი გიდების ხელმძღვანელობით.",
  "home.hero.whatsapp": "მოგვწერეთ WhatsApp-ზე",
  "home.hero.explore": "ტურების ნახვა",
  "home.hero.whatsappMsg": "გამარჯობა! მაინტერესებს თქვენი ტურები.",

  "home.intro.kicker": "Ma Na Van Tours",
  "home.intro.title": "შავი ზღვიდან მთებამდე — აღმოაჩინეთ საქართველო Ma Na Van-თან ერთად.",
  "home.intro.body":
    "ჩვენ ვართ პატარა, ოჯახური გუნდი ბათუმიდან. გვიყვარს აჭარისა და მთელი საქართველოს ის კუთხეები, სადაც გავიზარდეთ. სცენარის გარეშე, დიდი ავტობუსების გარეშე — უბრალოდ ნამდვილი ქართული სტუმართმოყვარეობა თქვენს გრაფიკზე.",

  "home.tours.kicker": "რას ვაკეთებთ",
  "home.tours.title": "ჩვენი თავგადასავლები",
  "home.tours.all": "ყველა ტური →",
  "home.tours.inquire": "დაგვიკავშირდით →",
  "home.tours.inquireMsg": "გამარჯობა! მაინტერესებს მეტი {title}-ის შესახებ.",

  "home.why.title": "რატომ Ma Na Van?",
  "home.why.1.t": "ადგილობრივი გიდები",
  "home.why.1.d": "ვიცნობთ ბილიკებს, საოჯახო სამზარეულოებს და მალსახმობებს, რომლებიც რუკაზე ვერ იპოვით.",
  "home.why.2.t": "ცოცხალი ხალხი WhatsApp-ზე",
  "home.why.2.d": "მოგვწერეთ პირდაპირ — ბოტების გარეშე. ვპასუხობთ წუთებში, ინგლისურად.",
  "home.why.3.t": "პატარა ჯგუფები, დიდი მასპინძლობა",
  "home.why.3.d": "ტურები მეგობრებთან მოგზაურობას ჰგავს, არა ავტობუსით ექსკურსიას. სტუმარი ღვთისაა.",

  "home.cta.title": "დაგეგმეთ თქვენი მოგზაურობა ადგილობრივთან ერთად",
  "home.cta.body": "გვითხარით თარიღები და ინტერესები. მარშრუტს დღეშივე შემოგთავაზებთ.",
  "home.cta.whatsapp": "WhatsApp",
  "home.cta.inquire": "მოთხოვნის გაგზავნა",
  "home.cta.whatsappMsg": "გამარჯობა! მჭირდება დახმარება მოგზაურობის დაგეგმვაში.",

  "social.1.v": "100%",
  "social.1.l": "რეკომენდაცია",
  "social.2.v": "62+",
  "social.2.l": "შემოწმებული შეფასება",
  "social.3.v": "4,200+",
  "social.3.l": "Facebook-ზე",
  "social.4.v": "2,000+",
  "social.4.l": "Instagram-ზე",

  "tours.kicker": "ტურები და სერვისები",
  "tours.title": "საქართველოს ნახვის შვიდი გზა ადგილობრივთან ერთად",
  "tours.subtitle":
    "ყოველ ტურს უძღვება ის, ვინც აქ ცხოვრობს. ფასი დამოკიდებულია ჯგუფის ზომაზე და სეზონზე — მოგვწერეთ WhatsApp-ზე.",
  "tours.whatsapp": "მოგვწერეთ WhatsApp-ზე",

  "about.kicker": "ჩვენი ისტორია",
  "about.title": "უბრალო ტური კი არა — ნამდვილი ქართული მასპინძლობა.",
  "about.p1":
    "Ma Na Van Tours ოჯახური საქმეა მისამართზე {address}. დავიწყეთ მეგობრების მეგობრების აჭარაში ტარებით და აღარ გავჩერდით. დღეს ვმართავთ საქალაქო, სამთო, ATV და კულტურულ ტურებს ბათუმში, თბილისში, ქუთაისსა და მიმდებარე სოფლებში.",
  "about.p2":
    "ჩვენთვის ძვირფასია ძველი ქართული გამონათქვამი „სტუმარი ღვთისაა“. სწორედ ამიტომ ჩვენი ტურები ნაკლებად ჰგავს გრაფიკს და მეტად — მეგობართან ერთად გატარებულ დღეს, რომელმაც იცის საუკეთესო ხაჭაპური, წყნარი სახედი ბათუმის თავზე და ოჯახი, რომელიც ჯერ კიდევ ქვევრში აყენებს ღვინოს.",
  "about.p3":
    "4,200+ Facebook-ის მიმდევრით, 2,000+ Instagram-ზე და 100% რეკომენდაციით TripAdvisor-ზე, ჩვენ ვამაყობთ იმ საზოგადოებით, რომელიც ამ პატარა ბიზნესის გარშემო შეიკრიბა.",
  "about.seeTours": "ტურების ნახვა",
  "about.getInTouch": "დაგვიკავშირდით",
  "about.v1.t": "ადგილობრივი გამოცდილება",
  "about.v1.d": "აჭარაში დაბადებული და გაზრდილი გიდები. სცენარის გარეშე, ხარისხზე კომპრომისის გარეშე.",
  "about.v2.t": "პერსონალური მომსახურება",
  "about.v2.d": "WhatsApp-ზე წუთებში ვპასუხობთ და გეგმას თქვენზე ვარგებთ.",
  "about.v3.t": "მთელი საქართველო",
  "about.v3.d": "შავი ზღვის სანაპიროდან თბილისამდე და მთიან კავკასიამდე.",

  "gallery.kicker": "გალერეა",
  "gallery.title": "მომენტები გზიდან",
  "gallery.body": "მოკლე ჩვენება იმისა, თუ როგორ გამოიყურება Ma Na Van-თან ერთად გატარებული დღე. მეტი ფოტო ჩვენს",
  "gallery.instagram": "Instagram-ზე",

  "reviews.kicker": "შეფასებები",
  "reviews.big": "100%",
  "reviews.subtitle": "რეკომენდაცია 62 შეფასებიდან",
  "reviews.body":
    "ჩვენ არ ვბეჭდავთ შეფასებებს აქ — ისინი გვხვდება იქ, სადაც მოელით, რომ თითოეული პატიოსანი შეფასება პირდაპირ პლატფორმაზე წაიკითხოთ.",
  "reviews.card.tripadvisor.stat": "100% რეკომენდაცია",
  "reviews.card.tripadvisor.copy": "62 შემოწმებული შეფასება საქალაქო, ATV, ლაშქრობის და კულტურული ტურებისთვის.",
  "reviews.card.facebook.stat": "4,200+ მიმდევარი",
  "reviews.card.facebook.copy": "ფოტოები, ჯგუფური ტურების სიახლეები და მოგზაურთა ვიზიტები ყველა სეზონიდან.",
  "reviews.card.instagram.stat": "2,000+ მიმდევარი",
  "reviews.card.instagram.copy": "ყოველდღიური ისტორიები საქართველოს მთებიდან, სამზარეულოებიდან და სანაპიროებიდან.",
  "reviews.read": "შეფასებების ნახვა →",
  "reviews.quote": "„თითოეულმა მოგზაურმა, ვინც შეგვაფასა, გვირჩია მეგობარს.“",
  "reviews.quoteCap": "ეს ის არის, რითიც ჩუმად ვამაყობთ.",

  "contact.kicker": "კონტაქტი",
  "contact.title": "დავგეგმოთ თქვენი მოგზაურობა საქართველოში",
  "contact.subtitle":
    "ჩვენთან დაკავშირების ყველაზე სწრაფი გზა WhatsApp-ია. ვართ ხაზზე ყოველდღე 08:00-დან 23:00-მდე და ვპასუხობთ წუთებში.",
  "contact.whatsapp": "WhatsApp",
  "contact.call": "დარეკვა",
  "contact.email": "ელფოსტა",
  "contact.visit": "მოგვინახულეთ",
  "contact.form.title": "მოთხოვნის გაგზავნა",
  "contact.form.body": "შეავსეთ და ჩვენ WhatsApp-ს გავუშვებთ თქვენი მზა შეტყობინებით.",
  "contact.form.name": "თქვენი სახელი",
  "contact.form.namePh": "ნინო",
  "contact.form.dates": "თარიღები",
  "contact.form.datesPh": "მაგ. 12–15 აგვისტო",
  "contact.form.msg": "რას ეძებთ",
  "contact.form.msgPh":
    "ორნი ვართ, გვიყვარს ლაშქრობა და საკვები, ვფიქრობთ ოჯახურ ვიზიტსა და მთაში დღეზე…",
  "contact.form.submit": "WhatsApp-ის გახსნა",
  "contact.form.sent":
    "WhatsApp ახალ ჩანართში გაიხსნა — თუ ვერაფერი მოხდა, პირდაპირ მოგვწერეთ.",
  "contact.form.greeting": "გამარჯობა Ma Na Van! ვარ {name}.\n\nთარიღები: {dates}\n\n{message}",

  "footer.tagline":
    "ადგილობრივი გიდები შავი ზღვის სანაპიროსთვის, აჭარის მთებისთვის და ქართული ოჯახის სითბოსთვის.",
  "footer.visit": "მოგვინახულეთ",
  "footer.contact": "კონტაქტი",
  "footer.inquire": "მოთხოვნის გაგზავნა →",
  "footer.rights": "© {year} Ma Na Van Tours · ბათუმი, საქართველო",
  "footer.motto": "აღმოაჩინე ბათუმი ადგილობრივი გულით",

  "fab.label": "მოგვწერეთ WhatsApp-ზე",
  "fab.text": "WhatsApp",

  "tour.city-tours.title": "ბათუმის, თბილისისა და ქუთაისის ტურები",
  "tour.city-tours.short": "საფეხმავლო ისტორია საქართველოს საყვარელი ქალაქების გულში.",
  "tour.city-tours.long":
    "დაათვალიერეთ ბათუმის ძველი ქალაქის ფასადები, აბანოთუბნის ქუჩები თბილისში და ბაგრატის ტაძარი ქუთაისში — ყოველ ტურს უძღვება გიდი, რომელიც ამ ქუჩებში გაიზარდა.",
  "tour.city-tours.h": ["ძველი ქალაქი", "ადგილობრივი გიდები", "ნახევარი და მთელი დღე"],

  "tour.group-tours.title": "ყოველდღიური და ჯგუფური ტურები",
  "tour.group-tours.short": "შემოუერთდით სხვა მოგზაურებს ყოველდღიურ გასვლებზე.",
  "tour.group-tours.long":
    "პატარა შერეული ჯგუფები, მეგობრული ტემპი, ერთობლივი აღმოჩენები. იდეალურია მარტოხელა მოგზაურებისთვის და წყვილებისთვის.",
  "tour.group-tours.h": ["ყოველდღიური გასვლა", "პატარა ჯგუფი", "მისაღები ფასი"],

  "tour.private-tours.title": "კერძო და ინდივიდუალური ტურები",
  "tour.private-tours.short": "მარშრუტი მორგებული იმაზე, რაც თქვენ გინდათ.",
  "tour.private-tours.long":
    "გვითხარით რა გიყვართ — დამალული ხედები, წყნარი მონასტრები, საიდუმლო რესტორნები — და ავაწყობთ თქვენს პირად მარშრუტს. სასტუმროდან წამოყვანით, თქვენი ტემპით.",
  "tour.private-tours.h": ["ინდივიდუალური მარშრუტი", "სასტუმროდან წამოყვანა", "თქვენი ტემპი"],

  "tour.hiking.title": "აჭარის მთის ლაშქრობა",
  "tour.hiking.short": "იმოგზაურეთ ბათუმის მწვანე მთებში გამოცდილ ადგილობრივ გიდთან ერთად.",
  "tour.hiking.long":
    "ღრუბლიანი ტყიდან მწყემსების ქოხებამდე და დამალულ ჩანჩქერებამდე — აჭარის მთები ველური რჩება ზღვიდან სულ საათის სავალზე. მარშრუტები ყველა დონისთვის.",
  "tour.hiking.h": ["ყველა დონე", "გიდის თანხლებით", "საჭმლით"],

  "tour.wine-cooking.title": "ოჯახური ვიზიტი: ღვინის დეგუსტაცია და კულინარია",
  "tour.wine-cooking.short": "შედით ოჯახში ხაჭაპურის, ხინკლისა და საოჯახო ღვინის გემოს გამოსაცდელად.",
  "tour.wine-cooking.long":
    "ეს ის ტურია, რომელზეც ჩვენი სტუმრები სახლში წერენ. ოჯახი მოგიწვევთ სამზარეულოში ქართული სამზარეულოს გაკვეთილზე, შემდეგ სუფრა საოჯახო ღვინითა და სადღეგრძელოებით.",
  "tour.wine-cooking.h": ["საკუთარი ხელით მზადება", "საოჯახო ღვინო", "ნამდვილი მასპინძლობა"],

  "tour.atv.title": "ATV / ოფროუდი მთაში",
  "tour.atv.short": "ადრენალინით სავსე კვადროციკლის ბილიკები, სადაც მხოლოდ 4x4 მიდის.",
  "tour.atv.long":
    "ტალახიან ბილიკებზე ბათუმის თავზე პანორამულ ხედებამდე. სრული უსაფრთხოების ინსტრუქტაჟი, აღჭურვილობით, გიდის თანხლებით.",
  "tour.atv.h": ["აღჭურვილობა", "ყველა დონე", "პანორამული ხედი"],

  "tour.transfers.title": "აეროპორტის ტრანსფერი (ყველა აეროპორტი)",
  "tour.transfers.short": "საიმედო ტრანსფერი ბათუმის, ქუთაისისა და თბილისის აეროპორტებიდან.",
  "tour.transfers.long":
    "ფრენას ვადევნებთ თვალს, მძღოლი ცდება სახელის ტაბლოთი, ფიქსირებული ფასი. 24/7 ხელმისაწვდომი.",
  "tour.transfers.h": ["24/7 სერვისი", "ფრენის კონტროლი", "ფიქსირებული ფასი"],
};

const ru: Dict = {
  "nav.home": "Главная",
  "nav.tours": "Туры",
  "nav.about": "О нас",
  "nav.gallery": "Галерея",
  "nav.reviews": "Отзывы",
  "nav.contact": "Контакты",
  "nav.brandSub": "Туры",
  "nav.toggleMenu": "Меню",
  "nav.language": "Язык",

  "home.hero.badge": "Батуми · Аджария · Грузия",
  "home.hero.title": "Откройте Грузию как местный",
  "home.hero.subtitle":
    "Частные и групповые туры по Батуми, Тбилиси и Кутаиси — обзорные экскурсии, горные походы, дегустации вина и многое другое с местными гидами.",
  "home.hero.whatsapp": "Написать в WhatsApp",
  "home.hero.explore": "Смотреть туры",
  "home.hero.whatsappMsg": "Здравствуйте! Хочу узнать о ваших турах.",

  "home.intro.kicker": "Ma Na Van Tours",
  "home.intro.title": "От Чёрного моря до гор — откройте Грузию с Ma Na Van.",
  "home.intro.body":
    "Мы — небольшая семейная команда из Батуми. Показываем уголки Аджарии и всей Грузии, которые любим с детства. Без сценария, без огромных автобусов — только настоящее грузинское гостеприимство в вашем темпе.",

  "home.tours.kicker": "Чем мы занимаемся",
  "home.tours.title": "Наши приключения",
  "home.tours.all": "Все туры →",
  "home.tours.inquire": "Написать →",
  "home.tours.inquireMsg": "Здравствуйте! Хочу узнать больше о туре «{title}».",

  "home.why.title": "Почему Ma Na Van?",
  "home.why.1.t": "Гиды, родившиеся здесь",
  "home.why.1.d": "Знаем тропы, семейные кухни и короткие пути, которых нет на карте.",
  "home.why.2.t": "Живые люди в WhatsApp",
  "home.why.2.d": "Пишите напрямую — никаких ботов и порталов. Отвечаем за минуты, на английском.",
  "home.why.3.t": "Малые группы, большое гостеприимство",
  "home.why.3.d": "Поездка похожа на путешествие с друзьями, а не на туристический автобус. Стумари Гвтисаа — гость это дар.",

  "home.cta.title": "Спланируйте поездку в Грузию с местным",
  "home.cta.body": "Напишите даты и интересы. Предложим маршрут в тот же день.",
  "home.cta.whatsapp": "WhatsApp",
  "home.cta.inquire": "Отправить запрос",
  "home.cta.whatsappMsg": "Здравствуйте! Нужна помощь в планировании поездки.",

  "social.1.v": "100%",
  "social.1.l": "Рекомендуют",
  "social.2.v": "62+",
  "social.2.l": "Проверенных отзывов",
  "social.3.v": "4 200+",
  "social.3.l": "В Facebook",
  "social.4.v": "2 000+",
  "social.4.l": "В Instagram",

  "tours.kicker": "Туры и услуги",
  "tours.title": "Семь способов увидеть Грузию с местным",
  "tours.subtitle":
    "Каждый тур ведёт человек, живущий здесь. Цена зависит от группы и сезона — напишите нам в WhatsApp.",
  "tours.whatsapp": "Написать в WhatsApp",

  "about.kicker": "Наша история",
  "about.title": "Не просто тур — настоящее грузинское гостеприимство.",
  "about.p1":
    "Ma Na Van Tours — небольшое семейное дело по адресу {address}. Мы начинали, катая друзей друзей по Аджарии, и не остановились. Сегодня проводим городские, горные, ATV и культурные туры по Батуми, Тбилиси, Кутаиси и деревням между ними.",
  "about.p2":
    "Мы верим в старую грузинскую поговорку «Стумари Гвтисаа» — гость это дар Божий. Поэтому наши туры больше похожи на день с другом, чем на расписание: с лучшим хачапури, тихой смотровой над Батуми и семьёй, что до сих пор делает вино в глиняных квеври.",
  "about.p3":
    "С 4 200+ подписчиков в Facebook, 2 000+ в Instagram и 100% рекомендацией на TripAdvisor мы гордимся сообществом, выросшим вокруг этого маленького дела.",
  "about.seeTours": "Наши туры",
  "about.getInTouch": "Связаться",
  "about.v1.t": "Местные знания",
  "about.v1.d": "Гиды, родившиеся и выросшие в Аджарии. Без сценария и компромиссов по качеству.",
  "about.v2.t": "Личный сервис",
  "about.v2.d": "Отвечаем в WhatsApp за минуты и подстраиваем план под вас.",
  "about.v3.t": "Вся Грузия",
  "about.v3.d": "От побережья Чёрного моря до Тбилиси и Большого Кавказа.",

  "gallery.kicker": "Галерея",
  "gallery.title": "Моменты в пути",
  "gallery.body": "Немного о том, как выглядит день с Ma Na Van. Больше настоящих фото — в нашем",
  "gallery.instagram": "Instagram",

  "reviews.kicker": "Отзывы",
  "reviews.big": "100%",
  "reviews.subtitle": "рекомендаций из 62 отзывов",
  "reviews.body":
    "Мы не перепечатываем отзывы здесь — они там, где вы их и ждёте, чтобы прочитать каждый честный отклик прямо на платформе.",
  "reviews.card.tripadvisor.stat": "100% рекомендуют",
  "reviews.card.tripadvisor.copy": "62 проверенных отзыва по городским, ATV, походным и культурным турам.",
  "reviews.card.facebook.stat": "4 200+ подписчиков",
  "reviews.card.facebook.copy": "Фото, новости групповых туров и отметки путешественников круглый год.",
  "reviews.card.instagram.stat": "2 000+ подписчиков",
  "reviews.card.instagram.copy": "Ежедневные истории с гор, кухонь и побережий Грузии.",
  "reviews.read": "Читать отзывы →",
  "reviews.quote": "«Каждый путешественник, оставивший отзыв, порекомендовал нас другу.»",
  "reviews.quoteCap": "Тихо этим гордимся.",

  "contact.kicker": "Контакты",
  "contact.title": "Спланируем вашу поездку в Грузию",
  "contact.subtitle":
    "Быстрее всего связаться в WhatsApp. Онлайн ежедневно с 08:00 до 23:00, отвечаем за минуты.",
  "contact.whatsapp": "WhatsApp",
  "contact.call": "Позвонить",
  "contact.email": "Email",
  "contact.visit": "Приходите",
  "contact.form.title": "Отправить запрос",
  "contact.form.body": "Заполните — и мы откроем WhatsApp с готовым сообщением.",
  "contact.form.name": "Ваше имя",
  "contact.form.namePh": "Нино",
  "contact.form.dates": "Даты",
  "contact.form.datesPh": "напр. 12–15 августа",
  "contact.form.msg": "Что ищете",
  "contact.form.msgPh":
    "Нас двое, любим походы и еду, думаем о визите в семью и дне в горах…",
  "contact.form.submit": "Открыть WhatsApp",
  "contact.form.sent":
    "WhatsApp открыт в новой вкладке — если ничего не произошло, напишите нам напрямую.",
  "contact.form.greeting": "Здравствуйте, Ma Na Van! Меня зовут {name}.\n\nДаты: {dates}\n\n{message}",

  "footer.tagline":
    "Местные гиды на побережье Чёрного моря, в горах Аджарии и в тепле грузинского дома.",
  "footer.visit": "Приходите",
  "footer.contact": "Контакты",
  "footer.inquire": "Отправить запрос →",
  "footer.rights": "© {year} Ma Na Van Tours · Батуми, Грузия",
  "footer.motto": "Откройте Батуми с местным сердцем",

  "fab.label": "Написать в WhatsApp",
  "fab.text": "WhatsApp",

  "tour.city-tours.title": "Экскурсии по Батуми, Тбилиси и Кутаиси",
  "tour.city-tours.short": "Пешие истории в сердце любимых городов Грузии.",
  "tour.city-tours.long":
    "Цветные фасады старого Батуми, узкие улочки Абанотубани в Тбилиси и древний Баграти над Кутаиси — с гидами, что выросли на этих улицах.",
  "tour.city-tours.h": ["Старый город", "Местные гиды", "Полдня и день"],

  "tour.group-tours.title": "Ежедневные и групповые туры",
  "tour.group-tours.short": "Присоединяйтесь к другим путешественникам на ежедневных выездах.",
  "tour.group-tours.long":
    "Небольшие смешанные группы, дружелюбный темп, общие открытия. Отлично для одиночных путешественников и пар.",
  "tour.group-tours.h": ["Ежедневно", "Малые группы", "Выгодно"],

  "tour.private-tours.title": "Частные и индивидуальные туры",
  "tour.private-tours.short": "Маршрут под то, что действительно хотите увидеть.",
  "tour.private-tours.long":
    "Расскажите, что любите — скрытые обзоры, тихие монастыри, рестораны без меню — и мы построим маршрут только для вас. Забираем из отеля, темп ваш.",
  "tour.private-tours.h": ["Свой маршрут", "Из отеля", "Ваш темп"],

  "tour.hiking.title": "Походы по горам Аджарии",
  "tour.hiking.short": "Идите по зелёным вершинам над Батуми с опытным местным гидом.",
  "tour.hiking.long":
    "От облачных гребней до хижин пастухов и скрытых водопадов — горы Аджарии остаются дикими в часе от берега. Маршруты для всех уровней.",
  "tour.hiking.h": ["Любой уровень", "С гидом", "Перекус включён"],

  "tour.wine-cooking.title": "В гостях: дегустация вина и мастер-класс",
  "tour.wine-cooking.short": "В грузинскую семью на хачапури, хинкали и домашнее вино.",
  "tour.wine-cooking.long":
    "Тот самый тур, о котором пишут домой. Семья принимает вас на кухне для мастер-класса, затем супра с домашним вином, тостами и историями.",
  "tour.wine-cooking.h": ["Своими руками", "Домашнее вино", "Настоящее гостеприимство"],

  "tour.atv.title": "ATV / горные приключения",
  "tour.atv.short": "Адреналиновые тропы на квадроциклах по хребтам, куда доедет только 4x4.",
  "tour.atv.long":
    "Грязевые треки и серпантины над Батуми к панорамам, что видят немногие. Полный инструктаж, снаряжение, гид впереди.",
  "tour.atv.h": ["Снаряжение", "Любой уровень", "Панорамы"],

  "tour.transfers.title": "Трансферы из аэропортов",
  "tour.transfers.short": "Надёжные трансферы из Батуми, Кутаиси и Тбилиси.",
  "tour.transfers.long":
    "Отслеживаем рейс, водитель встречает с табличкой, фиксированная цена. 24/7.",
  "tour.transfers.h": ["24/7", "Отслеживание", "Фикс. цена"],
};

const dicts: Record<Lang, Dict> = { en, ka, ru };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  tList: (key: string) => string[];
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "manavan.lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved && (saved === "en" || saved === "ka" || saved === "ru")) {
        setLangState(saved);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const dict = dicts[lang];
      const raw = (dict[key] ?? en[key] ?? key) as string | string[];
      const str = typeof raw === "string" ? raw : String(raw);
      if (!vars) return str;
      return str.replace(/\{(\w+)\}/g, (_, k) =>
        vars[k] !== undefined ? String(vars[k]) : `{${k}}`
      );
    },
    [lang]
  );

  const tList = useCallback(
    (key: string) => {
      const dict = dicts[lang];
      const raw = (dict[key] ?? en[key] ?? []) as string | string[];
      return Array.isArray(raw) ? raw : [raw];
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tList }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used inside <LanguageProvider>");
  return ctx;
}
