export const site = {
  name: "Zenith Wills Technologies",
  shortName: "Zenith Wills",
  tagline: "We power what matters.",
  description:
    "Professional installation of solar power inverters, CCTV cameras, car trackers, intercoms and system networking across Nigeria.",
  url: "https://zenithwills.ng",
  phone: {
    display: "081-2829-3556",
    tel: "+2348128293556",
  },
  whatsapp: {
    // WhatsApp deep link (Nigeria +234, no leading zero)
    href: "https://wa.me/2348128293556?text=Hello%20Zenith%20Wills%2C%20I%27d%20like%20to%20book%20a%20service.",
    label: "Chat on WhatsApp",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Why us", href: "#why" },
    { label: "How it works", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    {
      id: "solar",
      icon: "sun",
      title: "Solar Power Inverter",
      description:
        "Reliable backup power for homes and offices — sized and installed to keep you running when the grid drops.",
    },
    {
      id: "cctv",
      icon: "cctv",
      title: "CCTV Camera Installation",
      description:
        "Watch over your property day and night with professionally mounted, positioned and configured cameras.",
    },
    {
      id: "tracker",
      icon: "map-pin",
      title: "Car Tracker / Car GPS",
      description:
        "Know where your vehicle is, any time — discreet GPS tracking with real-time location and alerts.",
    },
    {
      id: "intercom",
      icon: "phone-call",
      title: "Intercom",
      description:
        "Secure, clear entry communication for your home, office or compound gate.",
    },
    {
      id: "network",
      icon: "network",
      title: "System Networking",
      description:
        "Stable, secure home and office networks — cabling, Wi-Fi and setup done right.",
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
    { step: "01", title: "Reach out", description: "Message us on WhatsApp or call with what you need." },
    { step: "02", title: "Site assessment", description: "We assess your space and give a clear, itemised quote." },
    { step: "03", title: "Installation", description: "Professional installation, tested and demonstrated." },
    { step: "04", title: "Support", description: "After-install support and follow-up." },
  ],
} as const;

export type ServiceId = (typeof site.services)[number]["id"];
export type IconName = (typeof site.services)[number]["icon"];
