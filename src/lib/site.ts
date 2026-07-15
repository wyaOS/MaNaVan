export const site = {
  name: "Ma Na Van Tours",
  tagline: "See Georgia Like a Local",
  phone: "+995 511 71 85 16",
  phoneHref: "tel:+995511718516",
  whatsappHref: "https://wa.me/995511718516",
  email: "manavantours@gmail.com",
  address: "Tchaikovsky Street 40, Batumi, Georgia",
  hours: "Daily · 08:00 – 23:00",
  instagram: "https://instagram.com/manavantours",
  facebook: "https://facebook.com/manavantours",
  tripadvisor: "https://www.tripadvisor.com/",
};

export const whatsappMessage = (text: string) =>
  `${site.whatsappHref}?text=${encodeURIComponent(text)}`;
