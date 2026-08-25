export const site = {
  name: "Zenith Wills Technologies",
  shortName: "Zenith Wills",
  tagline: "We power what matters.",
  description:
    "Professional installation of solar power inverters, CCTV cameras, car trackers, intercoms and system networking across Nigeria.",
  url: "https://zenithwills.ng",
  phone: { display: "081-2829-3556", tel: "+2348128293556" },
  whatsapp: {
    href: "https://wa.me/2348128293556?text=Hello%20Zenith%20Wills%2C%20I%27d%20like%20to%20book%20a%20service.",
    label: "Chat on WhatsApp",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    {
      id: "solar",
      icon: "sun",
      title: "Solar Power Inverter",
      image: "/images/solar.jpg",
      description:
        "Reliable backup power for homes and offices — sized and installed to keep you running when the grid drops.",
      points: ["Pure sine-wave inverters", "Sized to your actual load", "Battery & solar array options"],
    },
    {
      id: "cctv",
      icon: "cctv",
      title: "CCTV Camera Installation",
      image: "/images/cctv.jpg",
      description:
        "Watch over your property day and night with professionally mounted, positioned and configured cameras.",
      points: ["Indoor & outdoor cameras", "Night vision", "Live view from your phone"],
    },
    {
      id: "tracker",
      icon: "map-pin",
      title: "Car Tracker / Car GPS",
      image: "/images/tracker.jpg",
      description:
        "Know where your vehicle is, any time — discreet GPS tracking with real-time location and alerts.",
      points: ["Real-time GPS location", "Geo-fence alerts", "Engine immobiliser option"],
    },
    {
      id: "intercom",
      icon: "phone-call",
      title: "Intercom",
      image: "/images/intercom.jpg",
      description:
        "Secure, clear entry communication for your home, office or compound gate.",
      points: ["Audio & video models", "Gate & compound use", "Clear two-way talk"],
    },
    {
      id: "network",
      icon: "network",
      title: "System Networking",
      image: "/images/network.jpg",
      description:
        "Stable, secure home and office networks — cabling, Wi-Fi and setup done right.",
      points: ["Structured cabling", "Wi-Fi mesh coverage", "Office & home setup"],
    },
  ],
  whyUs: [
    {
      title: "Professional installs",
      description: "Neat, correct, code-conscious installation — every time.",
    },
    {
      title: "Built for Nigeria",
      description: "Sized for our power and security realities, not a generic template.",
    },
    {
      title: "After-install support",
      description: "We stay reachable once the job is done.",
    },
    {
      title: "Straight talk",
      description: "Clear quotes and honest advice — no surprises.",
    },
  ],
  process: [
    { step: "01", title: "Tell us what you need", description: "Message us on WhatsApp or call with what you have in mind." },
    { step: "02", title: "We visit & quote", description: "We assess your space and give a clear, itemised quote." },
    { step: "03", title: "We install & test", description: "Professional installation, tested and demonstrated to you." },
    { step: "04", title: "You're covered", description: "After-install support and follow-up when you need it." },
  ],
  work: {
    videos: [
      { src: "/videos/work-1.mp4", title: "Recent installation", tag: "Our work" },
      { src: "/videos/work-2.mp4", title: "Recent installation", tag: "Our work" },
    ],
    gallery: [
      { src: "/images/rooftop.jpg", tag: "Solar" },
      { src: "/images/cctv.jpg", tag: "CCTV" },
      { src: "/images/network.jpg", tag: "Networking" },
      { src: "/images/tracker.jpg", tag: "Tracking" },
      { src: "/images/intercom.jpg", tag: "Intercom" },
      { src: "/images/work-extra.jpg", tag: "Installation" },
    ],
  },
  about: {
    intro:
      "Zenith Wills Technologies installs the systems that keep Nigerian homes, offices and estates safe, connected and powered.",
    story: [
      "We focus on one thing and do it properly: professional installation. Whether it's a solar inverter sized for your actual load, a CCTV setup you can trust, or a network that just works — we handle the job end to end, with a clear quote and tidy work.",
      "We keep our promises simple. Straight talk on what you need and what it costs, an installation done to a professional standard, and support that stays reachable after the job is done.",
    ],
    values: [
      { title: "Professionalism", description: "Neat, correct work done by people who take pride in it." },
      { title: "Reliability", description: "Sized for Nigeria's power and security realities." },
      { title: "Honesty", description: "Clear quotes and advice — no surprises, no jargon." },
    ],
  },
} as const;

export type ServiceId = (typeof site.services)[number]["id"];
export type IconName = (typeof site.services)[number]["icon"];
