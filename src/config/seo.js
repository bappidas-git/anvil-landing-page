/* ============================================
   SEO Configuration
   Central configuration for all SEO-related
   settings, schemas, and page metadata.
   ============================================ */

export const seoConfig = {
  // =========================================
  // Site-level Settings
  // =========================================
  siteName: "Anvil",
  siteUrl: "https://solar.anvil.energy",
  defaultTitle: "Anvil Solar | Rooftop Solar for Homes & Businesses",
  titleTemplate: "%s | Anvil Solar",
  defaultDescription:
    "Switch to rooftop solar with Anvil. End-to-end installation, PM Surya Ghar subsidy, zero-hassle financing, and lifetime support. Calculate your savings today.",
  defaultImage:
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=630&q=80&auto=format&fit=crop",
  locale: "en_IN",
  language: "en",

  // =========================================
  // Organization Details
  // =========================================
  organization: {
    name: "Anvil Energy",
    alternateName: "Anvil",
    url: "https://solar.anvil.energy",
    logo: "https://solar.anvil.energy/svgs/logo.svg",
    email: "hello@anvil.energy",
    phone: "+91-1800-2020-001",
    description:
      "End-to-end rooftop solar installation for homes and businesses across India. Anvil handles design, PM Surya Ghar subsidy, financing, installation, net metering, and lifetime support so you can switch to solar with zero hassle.",
    address: {
      streetAddress: "Anvil Energy HQ",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122001",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/anvilenergy",
      "https://www.instagram.com/anvil.energy",
      "https://www.linkedin.com/company/anvil-energy",
      "https://www.youtube.com/@anvilenergy",
    ],
    founder: {
      name: "Anvil Energy Team",
      jobTitle: "Founding Team",
    },
    foundingDate: "2020",
  },

  // =========================================
  // Page-specific SEO Settings
  // =========================================
  pages: {
    home: {
      title: "Anvil Solar | Rooftop Solar for Homes & Businesses in India",
      description:
        "Switch to rooftop solar with Anvil. End-to-end installation, PM Surya Ghar subsidy, zero-hassle financing, and lifetime support. Book your free consultation today.",
      keywords:
        "rooftop solar India, home solar, PM Surya Ghar, solar calculator, on-grid solar, hybrid solar, solar subsidy, Anvil Saathi",
    },
    thankYou: {
      title: "Thank You | Your Anvil Saathi Will Call You Shortly",
      description:
        "Your Anvil Saathi will call you within the next 30 minutes to discuss your rooftop solar consultation.",
      robots: "noindex, nofollow",
    },
    admin: {
      title: "Anvil Admin",
      description: "Lead management for Anvil Solar",
      robots: "noindex, nofollow",
    },
  },

  // =========================================
  // FAQ Schema Data
  // =========================================
  faqs: [
    {
      question: "How much can I save by going solar with Anvil?",
      answer:
        "Most residential customers cut their electricity bill by 70–90%. The exact savings depend on your monthly consumption, state tariff, system size, and sunlight hours. Use the Anvil Solar Savings Calculator on our homepage for an instant personalised estimate.",
    },
    {
      question: "Does Anvil help me claim the PM Surya Ghar subsidy?",
      answer:
        "Yes. Anvil handles the entire PM Surya Ghar Muft Bijli Yojana process — registration, DISCOM coordination, technical feasibility report, and subsidy disbursal. Eligible households can receive up to ₹78,000 in central government subsidy.",
    },
    {
      question: "What is the difference between on-grid and hybrid solar?",
      answer:
        "An on-grid system exports excess solar to the utility grid for credits (net metering) but shuts off during outages. A hybrid system adds a battery so you keep power during outages and stay self-reliant. Anvil recommends the right fit based on your load profile and state policy.",
    },
    {
      question: "What roof types are suitable for solar?",
      answer:
        "Anvil installs on concrete (RCC) and tin-sheet (metal / asbestos-replacement) roofs. A site survey confirms structural suitability and shading. Minimum usable area: roughly 100 sq ft per kW for residential systems.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Physical installation of a 3–5 kW residential system takes 2–3 days once materials arrive. End-to-end timeline including subsidy approval, net metering, and commissioning is typically 3–6 weeks depending on your DISCOM.",
    },
    {
      question: "What warranties do I get?",
      answer:
        "25-year linear power warranty on solar panels, 10-year comprehensive warranty on the inverter, and 5-year Anvil workmanship warranty on the entire installation — including mounting structures and AC/DC cabling.",
    },
    {
      question: "What happens on cloudy or rainy days?",
      answer:
        "Solar panels still generate electricity on cloudy days (at reduced output). Any shortfall is automatically drawn from the grid for on-grid systems, or from your battery for hybrid systems, so you never lose power.",
    },
    {
      question: "Can Anvil help with financing or EMI?",
      answer:
        "Yes. Anvil partners with leading banks under the PM Surya Ghar loan scheme to offer low-interest solar loans starting at 7% with EMI tenors up to 10 years. Zero down-payment options are available for eligible customers.",
    },
    {
      question: "How much maintenance does a solar system need?",
      answer:
        "Very little. Panels need cleaning every 2–4 weeks in most Indian cities. Anvil offers optional annual maintenance contracts that include panel cleaning, electrical inspection, and remote monitoring.",
    },
    {
      question: "Is Anvil available in my city?",
      answer:
        "Anvil installs across India through a vetted partner network. Enter your state in the savings calculator to see local incentives, and our Anvil Saathi will confirm availability during your free consultation.",
    },
  ],

  // =========================================
  // LocalBusiness Schema Settings
  // =========================================
  localBusiness: {
    type: "SolarEnergyContractor",
    priceRange: "₹₹",
    openingHours: {
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
    geo: {
      latitude: "28.4595",
      longitude: "77.0266",
    },
    knowsAbout: [
      "Rooftop Solar",
      "On-Grid Solar",
      "Hybrid Solar",
      "Solar Net Metering",
      "PM Surya Ghar Yojana",
      "Solar Financing",
    ],
    isAcceptingNewPatients: true,
    hasMap: "https://www.google.com/maps/place/Gurugram,+Haryana,+India",
    availableService: [
      {
        name: "Rooftop Solar Installation",
        description:
          "End-to-end on-grid and hybrid rooftop solar installation for homes and businesses",
      },
      {
        name: "On-Grid Solar Systems",
        description:
          "Net-metered solar systems that export excess power to the utility grid for credits",
      },
      {
        name: "Hybrid Solar Systems",
        description:
          "Solar with battery backup for outage protection and energy independence",
      },
      {
        name: "PM Surya Ghar Subsidy Assistance",
        description:
          "End-to-end help registering and claiming the central government rooftop solar subsidy",
      },
      {
        name: "Solar Financing & EMI",
        description:
          "Low-interest solar loans under PM Surya Ghar with zero down-payment options",
      },
      {
        name: "Annual Maintenance",
        description:
          "Panel cleaning, electrical inspection, and remote monitoring for installed systems",
      },
    ],
  },
};
