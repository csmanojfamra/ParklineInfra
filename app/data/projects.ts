export type Project = {
  id: string;
  client: string;
  clientLogo?: string;
  title: string;
  scope: string;
  states: string[];
  sector: "ground-improvement" | "railway" | "roads" | "energy" | "buildings";
  sectorLabel: string;
  services: string[];
  highlights: string[];
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "adani-ground-improvement",
    client: "Adani Group",
    clientLogo: "/images/clients/adani.png",
    title: "Large-Scale Ground Improvement — Punjab",
    scope:
      "Large-scale ground improvement projects across multiple locations in Punjab — one of Parkline Infra's largest and most technically demanding assignments, covering stone column installation and vibro replacement works for Adani's industrial and infrastructure developments.",
    states: ["Punjab"],
    sector: "ground-improvement",
    sectorLabel: "Ground Improvement",
    services: ["ground-improvement"],
    highlights: [
      "Stone column installation using vibro replacement method",
      "Multi-site programme across Punjab",
      "Delivered for one of India's largest industrial conglomerates",
      "Stringent quality and settlement monitoring throughout",
    ],
    featured: true,
  },
  {
    id: "lt-edfc-wdfc",
    client: "L&T Construction",
    clientLogo: "/images/clients/lt.png",
    title: "EDFC & WDFC — Pile Foundation, Drainage & Maintenance Works",
    scope:
      "Comprehensive infrastructure works across the Eastern Dedicated Freight Corridor (EDFC) and Western Dedicated Freight Corridor (WDFC), including pile foundation installation, drainage works, and infrastructure maintenance across UP, Rajasthan, Gujarat, Haryana, and Maharashtra.",
    states: ["Uttar Pradesh", "Rajasthan", "Gujarat", "Haryana", "Maharashtra"],
    sector: "railway",
    sectorLabel: "Railway Infrastructure",
    services: ["pile-foundation", "maintenance-repairing-rrv", "structure-work"],
    highlights: [
      "Multi-state execution across 5 Indian states",
      "Pile foundations for DFC structures",
      "Drainage and maintenance infrastructure works",
      "Delivered under L&T's rigorous quality and safety standards",
    ],
    featured: true,
  },
  {
    id: "lt-rrv-mauritius",
    client: "L&T Construction",
    clientLogo: "/images/clients/lt.png",
    title: "Rail-Road Vehicle Fabrication — Mauritius Metro Project",
    scope:
      "Design, fabrication, and supply of rail-mounted trolleys (Rail-Road Vehicles) for the Mauritius Metro Project, executed through L&T Construction. These custom-engineered RRVs were deployed for track inspection and maintenance operations on the metro network.",
    states: ["Rajasthan"],
    sector: "railway",
    sectorLabel: "Railway Equipment",
    services: ["maintenance-repairing-rrv", "customized-equipment-engineering", "fabrication-steel-structures"],
    highlights: [
      "Custom RRV design and fabrication for international metro project",
      "Mechanical and hydraulic operating systems",
      "Exported through L&T Construction for Mauritius deployment",
      "Demonstrates Parkline's railway equipment manufacturing capability",
    ],
    featured: true,
  },
  {
    id: "jda-road",
    client: "Jaipur Development Authority (JDA)",
    title: "City Road Development & Resurfacing — Jaipur",
    scope:
      "Flexible pavement road resurfacing and city road development projects under the Jaipur Development Authority's urban infrastructure programme — improving road quality and connectivity across Jaipur city.",
    states: ["Rajasthan"],
    sector: "roads",
    sectorLabel: "Roads & Urban Infrastructure",
    services: ["maintenance-repairing-rrv"],
    highlights: [
      "Flexible pavement resurfacing across multiple corridors",
      "City road development under JDA programme",
      "Delivered to government specifications and timelines",
      "Urban connectivity improvement in Jaipur",
    ],
    featured: false,
  },
  {
    id: "rays-power-karnataka",
    client: "Rays Power Infra",
    clientLogo: "/images/clients/rays-power.png",
    title: "Civil Works & Pile Foundation — 125 MW & 102 MW Solar Projects",
    scope:
      "Civil works and pile foundation installation for 125 MW and 102 MW solar power projects in Karnataka and Uttarakhand, delivering the structural foundation infrastructure for large-scale renewable energy plants.",
    states: ["Karnataka", "Uttarakhand"],
    sector: "energy",
    sectorLabel: "Energy Infrastructure",
    services: ["pile-foundation", "ground-improvement"],
    highlights: [
      "125 MW solar project, Karnataka",
      "102 MW solar project, Uttarakhand",
      "Pile foundation and civil works for utility-scale solar",
      "Delivered to Rays Power Infra's technical specifications",
    ],
    featured: false,
  },
  {
    id: "vrb-residential",
    client: "VRB",
    title: "Pile Foundation & Residential/Commercial Construction — Jaipur",
    scope:
      "Residential pile foundation work and construction of commercial and residential complexes in Jaipur, delivering structural foundation and building works for private development projects.",
    states: ["Rajasthan"],
    sector: "buildings",
    sectorLabel: "Buildings",
    services: ["pile-foundation", "building-construction"],
    highlights: [
      "Residential pile foundation works",
      "Commercial complex construction",
      "Residential building construction in Jaipur",
      "Private sector building delivery",
    ],
    featured: false,
  },
  {
    id: "pwd-chomu-fatehpur",
    client: "Public Works Department (PWD)",
    title: "Road Development — Chomu to Fatehpur, Rajasthan",
    scope:
      "Road development and construction from Chomu to Fatehpur under the Public Works Department, Rajasthan — delivering improved connectivity along this important regional corridor.",
    states: ["Rajasthan"],
    sector: "roads",
    sectorLabel: "Roads & Highways",
    services: ["maintenance-repairing-rrv"],
    highlights: [
      "State highway road development",
      "Chomu to Fatehpur corridor improvement",
      "Executed under PWD Rajasthan",
      "Improved regional connectivity",
    ],
    featured: false,
  },
  {
    id: "dilip-buildcon-highway",
    client: "Dilip Buildcon",
    clientLogo: "/images/clients/dilip-buildcon.png",
    title: "Pile Foundation & Major Bridge Construction — Uttar Pradesh",
    scope:
      "Pile foundation installation and major bridge construction for highway projects in Uttar Pradesh, executed as a subcontractor to Dilip Buildcon — one of India's leading highway infrastructure companies.",
    states: ["Uttar Pradesh"],
    sector: "roads",
    sectorLabel: "Roads & Highways",
    services: ["pile-foundation", "structure-work"],
    highlights: [
      "Major bridge construction for NH project",
      "Bored pile foundation installation",
      "Executed under Dilip Buildcon's programme",
      "Uttar Pradesh highway infrastructure",
    ],
    featured: false,
  },
  {
    id: "kec-solar-power",
    client: "KEC International",
    clientLogo: "/images/clients/kec.png",
    title: "30 MW & 250 MW Power Projects — Karnataka & Madhya Pradesh",
    scope:
      "Infrastructure and civil works for KEC International's 30 MW power project in Karnataka and 250 MW power project in Madhya Pradesh, contributing to India's growing energy infrastructure.",
    states: ["Karnataka", "Madhya Pradesh"],
    sector: "energy",
    sectorLabel: "Energy Infrastructure",
    services: ["pile-foundation", "structure-work"],
    highlights: [
      "30 MW power project, Karnataka",
      "250 MW power project, Madhya Pradesh",
      "Civil and structural works for power infrastructure",
      "Delivered for KEC International",
    ],
    featured: false,
  },
  {
    id: "gmr-edfccil",
    client: "GMR Infrastructure Limited",
    clientLogo: "/images/clients/gmr.png",
    title: "EDFCCIL Projects — Pile, Sand Pile, Stone Pile & Major Bridge — UP",
    scope:
      "Comprehensive infrastructure works for GMR Infrastructure on EDFCCIL (Eastern Dedicated Freight Corridor Corporation of India Limited) projects in Uttar Pradesh, including pile foundation, sand pile, stone pile installation, and major bridge construction.",
    states: ["Uttar Pradesh"],
    sector: "railway",
    sectorLabel: "Railway Infrastructure",
    services: ["pile-foundation", "ground-improvement", "structure-work"],
    highlights: [
      "Pile foundation, sand pile, and stone pile installation",
      "Major bridge construction for DFC corridor",
      "Executed under EDFCCIL programme",
      "Complex multi-discipline railway infrastructure",
    ],
    featured: true,
  },
];

export const PROJECT_SECTORS = [
  { value: "all", label: "All Projects" },
  { value: "ground-improvement", label: "Ground Improvement" },
  { value: "railway", label: "Railway" },
  { value: "roads", label: "Roads & Highways" },
  { value: "energy", label: "Energy" },
  { value: "buildings", label: "Buildings" },
];
