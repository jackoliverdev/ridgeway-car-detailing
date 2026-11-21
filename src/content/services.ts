export const servicesIntro = {
  title: "What we do",
  body: "Every service is done by hand, at your home or work or at our unit in Templefields. Prices depend on the size of the car, and the booking page shows yours before you book.",
  jumpTitle: "On this page",
  jumpLinks: [
    { label: "Services", href: "#services" },
    { label: "Memberships", href: "#memberships" },
    { label: "Prices", href: "#prices" },
    { label: "Mobile or at our unit", href: "#mobile-or-unit" },
    { label: "Coatings", href: "#coatings" },
    { label: "Extras", href: "#extras" },
  ],
};

export type Trade = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  covers: string[];
  tasks: { task: string; frequency: string }[];
  safety: string[];
  records: string;
};

export const trades = {
  title: "Services",
  intro: "Six services, from a quick wash to a ceramic coating. Each one can be booked online, with extras added as you go.",
  link: "Read about this service",
  back: "All services",
  coversTitle: "What's included",
  tasksTitle: "How we do it",
  tasksIntro: "The steps every car gets with this service, in order.",
  tasksColumns: ["Step", "Why"],
  safetyTitle: "Before we start",
  recordsTitle: "What you get",
  closing: {
    title: "Book this service",
    body: "Choose the size of your car, any extras and a time that suits you, and see the price as you go.",
  },
  contact: { label: "Book online", href: "https://app.centruscrm.ai/book/ridgeway-car-detailing" },
  items: [
    {"slug": "maintenance-wash", "title": "Maintenance wash", "summary": "A safe hand wash, wheels and glass, and a quick tidy inside. For cars kept on top of, from £35.", "image": "/images/maintenance-wash.jpg", "imageAlt": "A wash mitt on snow foam across a blue bonnet", "paragraphs": ["A maintenance wash keeps a clean car clean. Done every two to four weeks, it stops dirt and fallout building up, so the paint never needs heavy work.", "We use the two-bucket method with fresh mitts and pH-neutral shampoo, safe for coatings, wraps and sealants. Most members have two a month on the Maintenance club."], "covers": ["Snow foam pre-wash and two-bucket hand wash", "Wheels, tyres and arches cleaned", "Dried with plush towels and an air blower", "Glass both sides, and a quick tidy inside"], "tasks": [{"task": "Snow foam and rinse", "frequency": "Lifts grit before anything touches the paint"}, {"task": "Two-bucket hand wash", "frequency": "Keeps grit off the mitt and out of the paint"}, {"task": "Wheels and arches", "frequency": "Done with their own brushes and buckets"}, {"task": "Dry and glass", "frequency": "No water spots, no smears"}, {"task": "Quick tidy inside", "frequency": "Mats shaken, seats and dash wiped"}], "safety": ["We check the car in with photos and mark any damage before we start.", "We use your water and power if you're happy to, and bring our own if not."], "records": "Photos of the finished car, and a reminder when your next wash is due."},
    {"slug": "mini-valet", "title": "Mini valet", "summary": "Washed and dried outside, hoovered and wiped down inside, glass done both sides. From £45.", "image": "/images/mini-valet.jpg", "imageAlt": "A detailer hoovering a family car's carpets", "paragraphs": ["A mini valet is the one to book when the car needs a proper going-over but not a deep clean: after a holiday, before selling it, or just because.", "It takes about an hour and a half on a medium car, at your home or work or at our unit."], "covers": ["Full hand wash and dry", "Carpets, mats and seats hoovered", "Dash, doors and console wiped and dressed", "Glass inside and out"], "tasks": [{"task": "Hand wash and dry", "frequency": "The same safe wash as every service"}, {"task": "Hoover throughout", "frequency": "Including the boot and under the seats"}, {"task": "Wipe and dress", "frequency": "Plastics cleaned and left matt, not greasy"}, {"task": "Glass", "frequency": "Inside and out, streak-free"}], "safety": ["Please take valuables and child seats out first, or we'll set them aside.", "Heavy pet hair takes longer: add it when you book so we allow the time."], "records": "Photos of the finished car, inside and out."},
    {"slug": "full-valet", "title": "Full valet", "summary": "Everything, properly: decontamination, sealant, a deep clean inside and seats shampooed. From £120.", "image": "/images/full-valet.jpg", "imageAlt": "A detailer shampooing a fabric car seat", "paragraphs": ["A full valet brings the whole car back. The paint is decontaminated and sealed, and the inside is deep cleaned, with fabric seats and carpets shampooed and extracted.", "It takes most of a day on a large car. Book it at our unit if you'd rather drop the car off."], "covers": ["Washed and decontaminated", "Paint sealant, good for about three months", "Seats and carpets shampooed and extracted", "Every surface, vent and door shut cleaned"], "tasks": [{"task": "Decontaminate", "frequency": "Iron fallout and tar removed so the paint feels smooth"}, {"task": "Seal", "frequency": "A sealant for gloss and easier washing"}, {"task": "Shampoo and extract", "frequency": "Fabric seats and carpets, dried before we hand back"}, {"task": "Detail inside", "frequency": "Vents, seams and door shuts done with brushes"}, {"task": "Tyres and trim", "frequency": "Dressed to a satin finish"}], "safety": ["We check the car in and mark any existing damage, signed by you.", "Seats can take a few hours to dry fully: we'll leave a window open a crack if it's safe to."], "records": "Before and after photos, the products we used, and how to keep it that way."},
    {"slug": "interior-detail", "title": "Interior detail", "summary": "Seats, carpets and headlining steam cleaned, leather fed, every surface and vent done. From £95.", "image": "/images/interior-detail.jpg", "imageAlt": "Steam cleaning the vents of a car's dashboard", "paragraphs": ["For the inside only: stains lifted, smells gone, leather cleaned and fed, and every surface brought back to how it left the showroom.", "Add odour treatment if there's been a smoker, a dog or a spilt pint of milk."], "covers": ["Steam cleaning of fabrics and headlining", "Leather cleaned and fed", "Stains treated and lifted where they'll come out", "Every vent, seam, pedal and door card"], "tasks": [{"task": "Hoover and air purge", "frequency": "Dust blown out of every seam first"}, {"task": "Steam clean", "frequency": "Fabrics, headlining and mats without soaking them"}, {"task": "Leather", "frequency": "Cleaned, then fed to stop it cracking"}, {"task": "Plastics", "frequency": "Cleaned and protected from the sun"}], "safety": ["Some stains are set into the fabric and won't come out safely. We'll tell you before we start.", "Valuables out, please."], "records": "Before and after photos of the inside, and what we used."},
    {"slug": "paint-enhancement", "title": "Paint enhancement", "summary": "A single-stage machine polish that lifts swirls and brings the gloss back, then a sealant. From £295.", "image": "/images/paint-enhancement.jpg", "imageAlt": "Machine polishing a black bonnet under an inspection light", "paragraphs": ["Most swirls and haze come from washing with the wrong mitt or through a car wash. A single-stage polish takes most of them out and leaves the paint deep and glossy.", "We inspect the paint under lights and take depth readings first, so we never take off more than we should."], "covers": ["Full wash and decontamination", "Paint depth readings and inspection under lights", "Single-stage machine polish", "Sealant to protect the finish"], "tasks": [{"task": "Inspect", "frequency": "Under lights, with depth readings on every panel"}, {"task": "Wash and decontaminate", "frequency": "So the polish works on clean paint"}, {"task": "Machine polish", "frequency": "One stage, to lift swirls and haze"}, {"task": "Seal", "frequency": "Protects the finish for months"}], "safety": ["Polishing needs dry, still air. We do most at our unit, and move mobile ones for the weather.", "Deep scratches through the clear coat can't be polished out. We'll show you which before we start."], "records": "Before and after photos under the same light, and the paint readings."},
    {"slug": "ceramic-coating", "title": "Ceramic coating", "summary": "Decontamination, a correction and a ceramic coating with a five-year guarantee. From £595.", "image": "/images/ceramic-coating.jpg", "imageAlt": "Applying a ceramic coating to deep red paint", "paragraphs": ["A ceramic coating is a hard, glossy layer that bonds to the paint. Dirt slides off, washing is quicker, and the gloss lasts for years, not months.", "It's usually two days at our unit: one to prepare and correct the paint, one to coat it and let it cure in the warm. We'll talk it through and quote after a look at the car."], "covers": ["Wash, decontamination and clay", "Paint correction to the level the car needs", "Ceramic coating on paint, wheels and glass", "A yearly inspection to keep the guarantee"], "tasks": [{"task": "Prepare", "frequency": "Washed, decontaminated and clayed"}, {"task": "Correct", "frequency": "Swirls and haze taken out before they're locked in"}, {"task": "Coat", "frequency": "Applied panel by panel and levelled"}, {"task": "Cure", "frequency": "Kept warm and dry overnight at our unit"}, {"task": "Hand back", "frequency": "With how to wash it and your guarantee"}], "safety": ["Coatings need 5°C and dry air to cure, so we only do them inside.", "Booked as a request: we look at the car first and confirm the price."], "records": "Your five-year guarantee, before and after photos, and the date of your first yearly inspection."},
  ] satisfies Trade[],
};

export const plannedMaintenance = {
  title: "Memberships",
  intro: "Pay monthly and your car stays right all year. Join when you book, or ask us.",
  caption: "Our membership plans",
  columns: ["Plan", "A month", "What's included"],
  rows: [
    ["Maintenance club", "£39", "Two maintenance washes a month at your home or work, and 10% off anything else"],
    ["Coating care", "£29", "A coating-safe wash every month, your yearly coating inspection, and 15% off anything else"],
  ],
  gradesTitle: "How memberships work",
  grades: [
    { title: "Paid monthly by card", body: "Cancel any time before your next payment, with nothing to pay to leave." },
    { title: "Washes are for the month", body: "Included washes are for the month you've paid for, and don't roll over." },
    { title: "Money off everything else", body: "Your discount comes off any other service or extra, automatically when you book." },
  ],
};

export const responseTimes = {
  title: "Prices",
  intro: "Prices by the size of the car, including VAT. Add extras as you book.",
  caption: "Prices by service and size of car",
  columns: ["Service", "Small", "Medium", "Large", "Van"],
  rows: [["Maintenance wash", "£35", "£40", "£45", "£50"], ["Mini valet", "£45", "£50", "£55", "£60"], ["Full valet", "£120", "£140", "£160", "£180"], ["Interior detail", "£95", "£105", "£115", "£125"], ["Paint enhancement", "£295", "£345", "£395", "£445"], ["Ceramic coating", "£595", "£695", "£795", "£845"]],
  note: "Small is a Fiesta, Corsa, Polo or Mini; medium a Golf, Focus, A3 or 3 Series; large an SUV like a Qashqai, X5 or Tiguan, or an estate; vans include a Transit Custom, Vivaro or a camper. Most bookings take a 20% deposit, at least £20.",
};

export const outOfHours = {
  title: "Mobile or at our unit",
  body: [
    "We come to your home or work anywhere within 15 miles of Harlow. All we need is a space around the car. If you can't spare water or power, we bring our own.",
    "Or drop the car at our unit in Templefields. It's under cover and under proper lights, and we text you when it's ready. Paint corrections and coatings are always done at the unit.",
  ],
  lineLabel: "Text or WhatsApp",
  note: "If rain is forecast for a mobile booking, we'll move it or bring it to the unit, at no cost.",
};

export const smallWorks = {
  title: "Coatings",
  intro: "The bigger jobs, done at our unit by Ellis, who has corrected and coated everything from family cars to show cars.",
  examplesTitle: "Recent cars",
  quote: { label: "Get a coating quote", href: "https://app.centruscrm.ai/book/ridgeway-car-detailing/form/coating-quote" },
  examples: ["A black Range Rover Sport, swirls corrected and coated", "A red Mazda MX-5, faded paint brought back", "A white Tesla Model 3, new car protection before it was delivered", "A grey Golf R, coated wheels and glass", "A Transporter camper, corrected and sealed for the summer"],
  stepsTitle: "How a coating goes",
  steps: [
    { title: "A look at the car", body: "Under lights at the unit, with paint readings, so we can quote properly." },
    { title: "Quote", body: "What we'll do and the price, with a 25% deposit to book the two days." },
    { title: "Preparation", body: "Washed, decontaminated, clayed and corrected to the level the car needs." },
    { title: "Coating", body: "Applied, levelled and cured overnight in the warm." },
    { title: "Handover", body: "Your guarantee, before and after photos, and how to wash it." },
  ],
};

export const fixedPrices = {
  title: "Extras",
  intro: "Add any of these when you book. Prices are the same whatever the size of the car.",
  items: [
    { job: "Pet hair removal", price: "£20.00" },
    { job: "Engine bay clean", price: "£25.00" },
    { job: "Leather clean and feed", price: "£25.00" },
    { job: "Odour treatment", price: "£30.00" },
    { job: "Headlight restoration", price: "£40.00" },
    { job: "Wheels off, cleaned and sealed", price: "£45.00" },
  ],
  note: "Prices include VAT. Members get their discount off extras too.",
};
