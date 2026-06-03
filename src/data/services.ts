export type Service = {
  name: string;
  path: string;
  desc: string;
  icon: string;
};

export const itServices: Service[] = [
  {
    name: "Network & End User Connectivity",
    path: "/en-us/services/network-connectivity",
    desc: "Diagnose and resolve network and end-user connectivity issues to keep your team online and productive.",
    icon: "🌐",
  },
  {
    name: "Emergency Onsite Dispatch",
    path: "/en-us/services/emergency-dispatch",
    desc: "Rapid emergency onsite response when critical IT issues can't wait — we come to you.",
    icon: "🚨",
  },
  {
    name: "Cat5/Cat6 Cable Installations",
    path: "/en-us/services/cable-installations",
    desc: "Professional structured cabling installations for reliable, high-performance network infrastructure.",
    icon: "🔌",
  },
  {
    name: "Desktop Support",
    path: "/en-us/services/desktop-support",
    desc: "Hands-on desktop support for workstations, peripherals, and day-to-day user issues.",
    icon: "🖥️",
  },
  {
    name: "Server Support",
    path: "/en-us/services/server-support",
    desc: "Server monitoring, maintenance, and troubleshooting to keep your business systems running.",
    icon: "🖧",
  },
  {
    name: "Networking Issues",
    path: "/en-us/services/networking",
    desc: "Full-spectrum networking support — from troubleshooting to optimization and ongoing maintenance.",
    icon: "📡",
  },
  {
    name: "VOIP Phone Support & Installations",
    path: "/en-us/services/voip",
    desc: "VOIP phone system setup, support, and installations for modern business communications.",
    icon: "📞",
  },
];

export const softwareSolutions: Service[] = [
  {
    name: "Custom Software Development",
    path: "/en-us/software-solutions/custom-development",
    desc: "Tailored software built around your workflows — from internal tools to customer-facing applications.",
    icon: "💻",
  },
  {
    name: "Business Application Solutions",
    path: "/en-us/software-solutions/business-apps",
    desc: "Deploy and integrate business applications that streamline operations and improve efficiency.",
    icon: "📊",
  },
  {
    name: "System Integration",
    path: "/en-us/software-solutions/integration",
    desc: "Connect your existing tools and platforms so data flows seamlessly across your organization.",
    icon: "🔗",
  },
  {
    name: "Automation & Workflow Tools",
    path: "/en-us/software-solutions/automation",
    desc: "Automate repetitive tasks and build smarter workflows to save time and reduce errors.",
    icon: "⚡",
  },
];
