export const email = "info@ridgewaycardetailing.co.uk";

/** Online booking and gift vouchers run in Ridgeway's own system. */
export const bookHref = "https://app.centruscrm.ai/book/ridgeway-car-detailing";
export const giftHref = "https://app.centruscrm.ai/gift/ridgeway-car-detailing";
export const quoteHref = "https://app.centruscrm.ai/book/ridgeway-car-detailing/form/coating-quote";

/** Wendy, the website assistant. The key only works on the domains allowed in Centrus CRM. */
export const assistant = { src: "https://app.centruscrm.ai/chat/ridgeway-car-detailing/widget.js", key: "5b885765e143873c00ae740a" };

export const phones = {
  serviceDesk: { label: "Bookings", number: "07700 900430" },
  outOfHours: { label: "Text or WhatsApp", number: "07700 900431" },
};

export function telHref(number: string) {
  return `tel:${number.replace(/\s/g, "")}`;
}

export const hours = {
  office: "Monday to Saturday, 08:00 to 18:00",
  outOfHours: "Sundays by arrangement, for coatings and dealership work",
};

export const header = {
  openMenu: "Open menu",
  closeMenu: "Close menu",
  cta: { label: "Book online", href: bookHref },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Prices", href: "/services#prices" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footer = {
  legalName: "Ridgeway Car Detailing Ltd",
  blurb:
    "Car valeting, detailing, paint correction and ceramic coatings around Harlow, at your door or at our unit.",
  divisions: "Ridgeway Car Detailing is part of Ridgeway, based in Harlow, Essex.",
  contactTitle: "Contact",
  companyTitle: "Company",
  servicesTitle: "Services",
  links: [
    { label: "Book online", href: bookHref },
    { label: "Gift vouchers", href: giftHref },
    { label: "Coating quote", href: quoteHref },
    { label: "Prices", href: "/services#prices" },
    { label: "About us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Our terms", href: "/terms" },
  ],
  copyright: "© 2026 Ridgeway Car Detailing Ltd. Registered in England and Wales.",
};

export const home = {
  hero: {
    title: "Car valeting and detailing, at your door or at our unit.",
    body: "Ridgeway Car Detailing washes, valets, corrects and protects cars across Harlow, Epping and Bishop's Stortford. Book online in a couple of minutes, with the price shown as you go.",
    primary: { label: "Book online", href: bookHref },
    secondary: { label: "See our prices", href: "/services#prices" },
    image: "/images/hero.jpg",
    imageAlt: "A detailer drying a freshly washed grey hatchback on a driveway",
  },
  facts: [
    {
      title: "We come to you",
      body: "Anywhere within 15 miles of Harlow. We bring water and power if you can't spare yours.",
    },
    {
      title: "Or drop it at our unit",
      body: "In Templefields, under cover and under proper lights. We text you when it's ready.",
    },
    {
      title: "Checked in before we start",
      body: "Photos and a damage map of the car, signed by you, so we both know how it arrived.",
    },
    {
      title: "Rain moves for free",
      body: "If the forecast turns on a mobile booking, we move it at no cost, or bring it inside.",
    },
  ],
  lookAfter: {
    title: "What we do",
    intro:
      "From a quick wash to keep on top of things, to a full correction and a coating that keeps the gloss for years. Every price depends on the size of the car, and you see it before you book.",
    items: [
      {
        title: "Washes and valets",
        body: "For cars that need a proper clean, inside and out, done by hand with the right products.",
        includes: [
          "Maintenance wash from £35",
          "Mini valet from £45",
          "Full valet from £120",
          "Interior detail from £95",
        ],
      },
      {
        title: "Paint correction",
        body: "Swirls, haze and light scratches machine polished out, so the paint looks deep and glossy again.",
        includes: [
          "Paint enhancement from £295",
          "Inspected under lights before and after",
          "Sealant included",
          "At our unit, or at yours if it's dry",
        ],
      },
      {
        title: "Ceramic coatings",
        body: "Decontaminated, corrected and coated, with a five-year guarantee on it.",
        includes: [
          "Ceramic coating from £595",
          "Usually two days at our unit",
          "Five-year guarantee",
          "Coating care plan to keep it right",
        ],
      },
    ],
    link: { label: "See all our services", href: "/services" },
  },
  sectors: {
    title: "Who we work for",
    intro:
      "Most of our customers are people who want their own car looked after properly. We also prepare cars for a local dealership and keep a lettings firm's vans tidy.",
    items: [
      {
        title: "Car owners",
        body: "Family cars, daily drivers and the car that only comes out at weekends, washed at home or work while you get on with your day.",
        points: [
          "Book online, with your price shown as you choose",
          "A text the day before with when we'll arrive",
          "Members get their washes included and money off the rest",
        ],
        reference: "Most of our regulars are on the Maintenance club, with two washes a month",
      },
      {
        title: "Dealerships",
        body: "Used cars prepared for the forecourt and new cars protected before they're handed over, at their site or ours.",
        points: [
          "A set price per car, agreed up front",
          "Before and after photos on every car",
          "One invoice a month with every registration on it",
        ],
        reference: "Latton Motors, preparing their used stock every week",
      },
      {
        title: "Vans and fleets",
        body: "Company cars and vans kept clean on a regular round, so they look right outside a customer's house.",
        points: [
          "A regular round, booked for the year",
          "Done in the yard before or after work",
          "Each vehicle's history kept against its registration",
        ],
        reference: "Stort Valley Lettings, six vans every month",
      },
    ],
    referenceLabel: "For example:",
  },
  howAJobRuns: {
    title: "How a booking runs",
    steps: [
      {
        number: 1,
        title: "You book",
        body: "Choose the service, the size of your car, any extras and where, then a time that suits you. A small deposit confirms it.",
      },
      {
        number: 2,
        title: "We text you",
        body: "The day before, with when we'll arrive. If rain or frost is forecast for a mobile booking, we'll offer another day.",
      },
      {
        number: 3,
        title: "We check the car in",
        body: "Photos and any marks on a picture of the car, signed by you, before we start. Valuables out, keys handed over.",
      },
      {
        number: 4,
        title: "You get it back",
        body: "With photos of the finished car, what we did, and when it'd be worth seeing us again.",
      },
    ],
  },
  reporting: {
    title: "Memberships",
    body: "Keep your car right all year with a membership, or give someone a clean car as a present.",
    items: [
      {
        title: "Maintenance club, £39 a month",
        body: "Two maintenance washes a month at your home or work, and 10% off anything else. Cancel any time.",
      },
      {
        title: "Coating care, £29 a month",
        body: "A coating-safe wash every month, your yearly coating inspection, and 15% off anything else.",
      },
      {
        title: "Gift vouchers",
        body: "Any amount from £20, or a particular service, emailed straight away with your message. Good for 12 months.",
      },
      {
        title: "Aftercare",
        body: "Every booking ends with what we did and how to keep it looking that way, and a reminder when it's time again.",
      },
    ],
  },
  closing: {
    title: "Ready for a clean car?",
    body: "Book online and see your price as you go, or send us a message and we'll help you choose.",
    primary: { label: "Book online", href: bookHref },
  },
};

export const about = {
  title: "About Ridgeway Car Detailing",
  image: "/images/about-unit.jpg",
  imageAlt: "A black SUV under bright lights in a clean detailing unit",
  paragraphs: [
    "Ridgeway Car Detailing is part of Ridgeway, a Harlow company that has looked after buildings across Essex for years. We started detailing because the people who maintained the buildings kept asking who'd look after their cars.",
    "We work from a mobile van across Harlow, Epping and Bishop's Stortford, and from our unit in Templefields for paint correction, coatings and anything that needs to be inside.",
    "Every car is checked in with photos before we touch it, and every booking ends with photos of the finished car and what we did.",
  ],
  howWeWork: {
    title: "How we work",
    items: [
      {
        title: "The price before you book",
        body: "Set by the service and the size of the car, with extras priced on their own. No surprises when we arrive.",
      },
      {
        title: "We tell you what we see",
        body: "If paint, trim or a wheel is damaged before we start, we mark it on the check-in and show you.",
      },
      {
        title: "We own our mistakes",
        body: "If something isn't right, tell us within 48 hours and we'll come back and put it right at no cost.",
      },
    ],
  },
  teamTitle: "The team",
  teamIntro: "A small team. These are the people who'll look after your car.",
  safety: {
    title: "Looking after your car",
    intro: "What our customers ask about most before they hand over the keys.",
    items: [
      {
        title: "Insurance",
        body: "We hold motor trade, public liability and care, custody and control insurance, so your car is covered while it's with us, at your home or at our unit.",
      },
      {
        title: "Checking the car in",
        body: "Photos of every side and any chips, scratches or kerbed wheels marked on a picture of the car, signed by you before we start.",
      },
      {
        title: "Valuables and keys",
        body: "We ask you to take valuables out first. Keys stay with the detailer working on the car, and are kept in a locked box at the unit.",
      },
      {
        title: "Water and power",
        body: "We use yours if you're happy to, and bring our own if not. We never run hoses across a path without a cover.",
      },
      {
        title: "Products",
        body: "pH-neutral shampoos, safe for coatings and wraps, and nothing that harms the drains. Every product we use is on the job sheet.",
      },
      {
        title: "The weather",
        body: "We check the forecast for every booking. Coatings need 5°C and dry air to cure, so those move inside or to another day.",
      },
    ],
  },
  qualifications: {
    title: "Training",
    intro: "Ellis trains everyone in house, and we use the same products on every car so we know how each one behaves.",
    items: [
      { title: "Ceramic coating installer", body: "Approved by the coating's manufacturer, so the five-year guarantee is theirs as well as ours" },
      { title: "Paint correction", body: "Machine polishing, with paint depth readings taken before any correction" },
      { title: "Safe wash method", body: "Two buckets, grit guards and fresh mitts for every car" },
      { title: "Interior steam cleaning", body: "Fabrics, leather and headlining, without soaking anything" },
      { title: "Waste water", body: "Collected on the van and disposed of properly, never into a surface drain" },
    ],
  },
};

export const contact = {
  title: "Contact us",
  intro:
    "The quickest way to book is online, where you see the price as you go. For coatings, dealership work or anything you're not sure about, send us a message or call.",
  panel: {
    emailLabel: "Email",
    hoursLabel: "Opening hours",
    outOfHoursNote:
      "Running late, or need to move a booking? Text or WhatsApp us and the detailer on the day will see it.",
    area: "Our unit is in Templefields, Harlow. We come to you anywhere within 15 miles.",
  },
  formTitle: "Send us a message",
  routes: {
    title: "Who handles what",
    items: [
      {
        id: "book",
        title: "Bookings",
        body: "Book online any time. To move or cancel, give us 48 hours' notice and your deposit moves with you.",
      },
      {
        id: "quotes",
        title: "Coatings",
        body: "Tell us the car and what you'd like, on our quote form or here. Gary will look at it under lights and send you a price.",
      },
      {
        id: "trade",
        title: "Dealerships and fleets",
        body: "Tell us how many vehicles and how often, and we'll agree a set price per car and a regular day.",
      },
      {
        id: "accounts",
        title: "Memberships",
        body: "For a membership, a voucher or a payment, send us your name and the email you used, and we'll sort it.",
      },
    ],
  },
  faqsTitle: "Questions",
  faqs: [
    {
      question: "Do you need water and power?",
      answer:
        "It helps, but no. Tell us when you book, and if you can't spare either we bring our own.",
    },
    {
      question: "What if it rains?",
      answer:
        "We check the forecast for every mobile booking. If steady rain is due we'll offer another day, or to do it at our unit, at no cost.",
    },
    {
      question: "Why is there a deposit?",
      answer:
        "It holds your time. It's usually 20%, at least £20, and comes off the price. Move or cancel with 48 hours' notice and it moves with you.",
    },
    {
      question: "How long does it take?",
      answer:
        "A maintenance wash takes about an hour, a full valet about four, and a ceramic coating usually two days at our unit. The booking page shows the time for your car.",
    },
    {
      question: "My car is full of dog hair. Is that a problem?",
      answer:
        "Not at all. Add pet hair removal when you book, so we bring the right tools and allow the time.",
    },
  ],
  form: {
    name: { label: "Your name", error: "Enter your name." },
    organisation: {
      label: "Company",
      hint: "Only for dealerships and fleets",
    },
    email: {
      label: "Email address",
      error: "Enter an email address, like name@example.co.uk.",
    },
    site: { label: "Your car (make, model and registration)" },
    need: {
      label: "What do you need?",
      placeholder: "Choose what you need",
      error: "Choose what you need.",
      options: [
        "A booking",
        "A quote for a correction or coating",
        "Dealership or fleet work",
        "A membership or gift voucher",
        "Something else",
      ],
    },
    message: { label: "Message", error: "Tell us what you need." },
    submit: "Send message",
    confirmationHeading: "Thanks, {first name}",
    confirmationBody: "Your message is with us. We'll reply to {email}.",
    another: "Send another message",
  },
};

export type TermsSection = {
  title: string;
  paragraphs: string[];
  table?: { caption: string; columns: string[]; rows: string[][] };
};

export const terms = {
  title: "Our terms",
  updated: "Last updated 01/11/2026",
  intro: "These are the terms for bookings, memberships and gift vouchers with Ridgeway Car Detailing Ltd.",
  sections: [
    {
      title: "Prices",
      paragraphs: [
        "Prices depend on the service and the size of the car, and the booking page shows yours before you book. Extras are priced on their own. All prices include VAT.",
        "If a car is far dirtier than usual (mud, sand, mould or heavy pet hair not booked as an extra), we'll tell you before we start and agree any extra time.",
      ],
    },
    {
      title: "Deposits, moving and cancelling",
      paragraphs: [
        "Most bookings take a deposit of 20%, at least £20; paint enhancements and coatings take 25%. It comes off the final price.",
        "Give us 48 hours' notice to move or cancel and your deposit moves with you, or is refunded. With less notice, or if we can't get to the car at the time booked, the deposit is kept. If we move a mobile booking for the weather, it's always free.",
      ],
    },
    {
      title: "Your car",
      paragraphs: [
        "We check the car in with photos and mark any existing damage, and ask you to sign it. Please take valuables out before we start; we're not responsible for items left in the car.",
        "Some marks can't be removed safely, such as scratches through the clear coat or stains set into fabric. We'll tell you if that's the case.",
      ],
    },
    {
      title: "Ceramic coatings",
      paragraphs: [
        "Coatings carry a five-year guarantee, as long as the car is inspected once a year and washed with coating-safe products. The Coating care plan includes both.",
      ],
    },
    {
      title: "Memberships",
      paragraphs: [
        "Memberships are paid monthly by card. Included washes are for the period you've paid for and don't roll over. Cancel any time before your next payment.",
      ],
    },
    {
      title: "Gift vouchers",
      paragraphs: [
        "Vouchers are good for 12 months from the day they're bought, can be used against any booking, and any balance stays on the code. They can't be exchanged for cash.",
      ],
    },
    {
      title: "Payment",
      paragraphs: [
        "The balance is paid by card when we finish, by the link we text you. Dealerships and fleets are invoiced monthly, due in 30 days.",
      ],
    },
    {
      title: "If something isn't right",
      paragraphs: [
        "Tell us within 48 hours with your booking reference and a photo, and we'll come back and put it right at no cost. For anything else, email info@ridgewaycardetailing.co.uk and we'll reply within a working day.",
      ],
    },
    {
      title: "Your information",
      paragraphs: [
        "We use your details to book, carry out and charge for the work, and keep your car's history so we know it next time. We never sell them. To see or correct what we hold, email info@ridgewaycardetailing.co.uk and we'll send it to you.",
      ],
    },
    {
      title: "Law",
      paragraphs: ["These terms are governed by the law of England and Wales."],
    },
  ] as TermsSection[],
  contact: { label: "Contact us", href: "/contact" },
};

export const notFoundPage = {
  title: "We can't find that page",
  body: "The page may have moved. Try our services, or email info@ridgewaycardetailing.co.uk.",
  home: { label: "Go to the home page", href: "/" },
};

export const skipLink = "Skip to content";
