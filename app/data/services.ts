export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  tagline: string;
  intro: string;
  expertise: string[];
  applications: string[];
  relatedProjects: string[];
  faqs: { q: string; a: string }[];
  ogDesc: string;
};

export const SERVICES: Service[] = [
  {
    slug: "ground-improvement",
    title: "Ground Improvement",
    shortTitle: "Ground Improvement",
    icon: "Layers",
    tagline: "Engineered Soil Solutions for Demanding Foundations",
    intro:
      "Ground improvement is the process of enhancing the engineering properties of weak, compressible, or liquefiable soils before construction — transforming marginal ground into a reliable structural platform. Parkline Infra delivers advanced geotechnical and ground engineering solutions that reduce settlement, increase bearing capacity, and eliminate the risk of differential movement across industrial, infrastructure, and energy project sites.",
    expertise: [
      "Stone Column Installation (Vibro Replacement Method)",
      "Vibro Compaction",
      "Sand Compaction Piles",
      "Dynamic Compaction",
      "Preloading & Surcharge",
      "Soil Stabilization (Cement/Lime Treatment)",
      "Geosynthetics Reinforcement",
    ],
    applications: [
      "Industrial plant and warehouse foundations",
      "Solar and renewable energy project sites",
      "Port and logistics park ground preparation",
      "Railway embankment stabilization",
      "Highway and expressway earthworks",
    ],
    relatedProjects: ["adani-ground-improvement", "rays-power-karnataka"],
    faqs: [
      {
        q: "What is the Vibro Replacement (stone column) method?",
        a: "Vibro replacement uses a vibrating probe to create a column-shaped cavity in soft soil, which is then backfilled with crushed stone compacted in lifts. The resulting stone columns increase load-bearing capacity and accelerate drainage consolidation — making them ideal for soft clay and silty soils.",
      },
      {
        q: "When is dynamic compaction used instead of stone columns?",
        a: "Dynamic compaction uses a heavy drop weight to densify loose granular soils and fill materials. It is most effective in granular soils with minimal fines, while stone columns are preferred in cohesive/clay soils. Parkline assesses site-specific soil conditions and recommends the optimal method.",
      },
      {
        q: "How long does a ground improvement programme take?",
        a: "Timelines depend on soil type, area extent, and chosen technique. A stone column programme for a 5,000 m² industrial site typically takes 4–8 weeks. Preloading with surcharge can take 3–6 months to achieve the required consolidation. We provide detailed execution schedules at tendering stage.",
      },
      {
        q: "Does ground improvement eliminate the need for deep piles?",
        a: "In many cases, yes — ground improvement can replace deep pile foundations, significantly reducing cost. However, the right solution depends on load magnitude, allowable settlement, and soil conditions. Our geotechnical team assesses each project to recommend the most cost-effective approach.",
      },
      {
        q: "Which clients has Parkline Infra delivered ground improvement work for?",
        a: "Parkline Infra has delivered large-scale ground improvement projects for Adani Group across multiple locations in Punjab, and for Rays Power Infra on solar energy projects in Karnataka and Uttarakhand.",
      },
    ],
    ogDesc:
      "Parkline Infra delivers expert ground improvement solutions — stone columns, vibro compaction, dynamic compaction, soil stabilization — for industrial, energy, and infrastructure projects across India.",
  },
  {
    slug: "pile-foundation",
    title: "Pile Foundation",
    shortTitle: "Pile Foundation",
    icon: "Building2",
    tagline: "Deep Foundation Systems Built for India's Critical Infrastructure",
    intro:
      "Pile foundations transfer structural loads through weak near-surface soils to competent bearing strata at depth. Parkline Infra designs and installs pile foundation systems for some of India's most demanding projects — major railway and highway bridges, dedicated freight corridor structures, industrial base systems, and energy installations — where ground conditions, load requirements, or settlement sensitivity demands a deep foundation solution.",
    expertise: [
      "Pile Foundation for Major Bridges (Railway, Highways, Canal & others)",
      "Bored Cast-in-Situ Piles",
      "Driven Precast Concrete Piles",
      "Sand Piles and Stone Piles",
      "Piles for Industrial Structural Base Systems",
      "Pile Load Testing and Quality Assurance",
    ],
    applications: [
      "Major railway and road over-bridges (ROBs)",
      "Canal and irrigation structure foundations",
      "Dedicated Freight Corridor (EDFC/WDFC) structures",
      "Industrial plant and equipment foundations",
      "Renewable energy (solar) plant foundations",
    ],
    relatedProjects: [
      "lt-edfc-wdfc",
      "dilip-buildcon-highway",
      "gmr-edfccil",
      "rays-power-karnataka",
      "vrb-residential",
    ],
    faqs: [
      {
        q: "What types of piles does Parkline Infra install?",
        a: "Parkline installs bored cast-in-situ piles, driven precast piles, sand compaction piles, and stone piles — selecting the appropriate type based on structural load, soil profile, and site constraints.",
      },
      {
        q: "What is the maximum pile depth Parkline can achieve?",
        a: "Parkline has installed piles exceeding 25 m depth for major bridge and freight corridor projects. Exact depths are determined by geotechnical investigation and structural design requirements.",
      },
      {
        q: "How are pile foundations quality-tested?",
        a: "We conduct static and dynamic load tests, integrity testing (PIT/CSL), and maintain detailed construction records for every pile. Testing protocols comply with IS codes and project-specific specifications.",
      },
    ],
    ogDesc:
      "Parkline Infra delivers pile foundation systems for major bridges, railway/highway infrastructure, industrial bases, and energy projects — trusted by L&T, GMR, and Dilip Buildcon across India.",
  },
  {
    slug: "structure-work",
    title: "Structure Work",
    shortTitle: "Structure Work",
    icon: "Bridge",
    tagline: "Major Bridges & RCC Structures Engineered to Last",
    intro:
      "Parkline Infra executes major and minor bridge construction and RCC structure works for railway and highway infrastructure across India. Our teams manage the full structural lifecycle — from substructure and foundation to superstructure, deck, and finishing — delivering durable, code-compliant structures in challenging field environments.",
    expertise: [
      "Major Bridges for Canal, Flyover, Railway Under-Bridge (RUB), and other RCC structures",
      "Minor Bridges — Railway Under-Bridges (RUBs), Cross-Drainage structures",
      "Road Over-Bridges (ROBs) and Road Under-Bridges (RUBs)",
      "RCC Structures — retaining walls, culverts, abutments, piers",
      "Box Pushing Works",
    ],
    applications: [
      "National and State Highway bridge construction",
      "Railway infrastructure — DFC corridors",
      "Canal and irrigation crossing structures",
      "Urban flyovers and grade separators",
      "Drainage and cross-drainage structures",
    ],
    relatedProjects: ["lt-edfc-wdfc", "dilip-buildcon-highway", "gmr-edfccil"],
    faqs: [
      {
        q: "What is a Railway Under-Bridge (RUB)?",
        a: "A Railway Under-Bridge (RUB) is a structural underpass constructed beneath an existing railway embankment or track, allowing road or pedestrian traffic to pass without interrupting rail operations. Parkline specializes in RUB construction using box pushing and conventional methods.",
      },
      {
        q: "Has Parkline Infra worked on Dedicated Freight Corridor projects?",
        a: "Yes — Parkline has delivered major bridge construction, pile foundation, and drainage works for both the Eastern Dedicated Freight Corridor (EDFC) and Western Dedicated Freight Corridor (WDFC) in Uttar Pradesh, Rajasthan, Gujarat, and Haryana.",
      },
    ],
    ogDesc:
      "Parkline Infra builds major bridges, railway under-bridges, RCC structures, and flyovers for highway and railway projects across India — delivered with precision for L&T, GMR, and Dilip Buildcon.",
  },
  {
    slug: "fabrication-steel-structures",
    title: "Fabrication & Steel Structure Solutions",
    shortTitle: "Steel Fabrication",
    icon: "Wrench",
    tagline: "High-Precision Steel Fabrication for Infrastructure & Industry",
    intro:
      "Parkline Infra operates advanced in-house fabrication capabilities, engineering and manufacturing precision steel structures and custom frameworks for industrial, energy, and infrastructure applications. Our fabrication team handles everything from structural steel for warehouses and factories to specialised mounting systems and project-specific custom fabrications.",
    expertise: [
      "Structural Steel Fabrication",
      "Warehouse Construction (PEB and conventional steel)",
      "Factory Setup Structures",
      "Solar Mounting Structures",
      "Industrial Racking and Mezzanine Systems",
      "Project-Specific Custom Fabrication",
    ],
    applications: [
      "Industrial warehouses and logistics parks",
      "Solar energy mounting systems",
      "Factory and manufacturing plant structures",
      "Railway infrastructure components",
      "Custom equipment frameworks",
    ],
    relatedProjects: ["lt-rrv-mauritius"],
    faqs: [
      {
        q: "Does Parkline have in-house fabrication infrastructure?",
        a: "Yes. Parkline Infra operates in-house fabrication workshops with precision cutting, welding, and quality inspection capabilities, enabling tighter quality control and faster turnaround compared to outsourced fabrication.",
      },
      {
        q: "Can Parkline handle solar mounting structure fabrication at scale?",
        a: "Yes — Parkline has delivered solar mounting structures for large-scale projects including Rays Power Infra's 125 MW and 102 MW power projects. We engineer mounting systems to site-specific wind and soil load specifications.",
      },
    ],
    ogDesc:
      "Parkline Infra delivers structural steel fabrication, warehouse construction, solar mounting structures, and custom industrial fabrication across India — with full in-house engineering capability.",
  },
  {
    slug: "building-construction",
    title: "Building Construction",
    shortTitle: "Building Construction",
    icon: "Home",
    tagline: "Structurally Sound Buildings Delivered On Time",
    intro:
      "Parkline Infra constructs residential, commercial, institutional, and mixed-use buildings with the same engineering discipline applied to its infrastructure projects. From multi-storied residential complexes to commercial shopping centres, every project is built to structural code, delivered on schedule, and finished to quality specifications that create long-term value for developers and end users.",
    expertise: [
      "Multi-Storied Residential Buildings",
      "Commercial Buildings and Shopping Complexes",
      "Institutional Buildings",
      "Mixed-Use Development Structures",
      "RCC Framed and Load-Bearing Structures",
    ],
    applications: [
      "Residential housing projects",
      "Commercial office and retail buildings",
      "Industrial and institutional buildings",
      "Government building projects",
    ],
    relatedProjects: ["vrb-residential"],
    faqs: [
      {
        q: "Does Parkline undertake turnkey building projects?",
        a: "Yes — Parkline can deliver building projects on a turnkey basis, covering civil structure, finishes, MEP coordination, and site infrastructure from a single point of responsibility.",
      },
      {
        q: "What types of residential projects has Parkline delivered?",
        a: "Parkline has delivered residential pile foundation works and construction of commercial and residential complexes in Jaipur for VRB and other private developers.",
      },
    ],
    ogDesc:
      "Parkline Infra delivers multi-storied residential buildings, commercial complexes, and institutional structures across Rajasthan — backed by AA-Class construction credentials and engineering discipline.",
  },
  {
    slug: "maintenance-repairing-rrv",
    title: "Maintenance / Repairing Work (Road / Rail / Building)",
    shortTitle: "Maintenance & RRV",
    icon: "Train",
    tagline: "Railway Maintenance Excellence with In-House RRV Manufacturing",
    intro:
      "Parkline Infra is an approved manufacturer of mechanically and hydraulically operated Rail-Road Vehicles (RRVs) — specialised inspection and maintenance vehicles deployed across India's Dedicated Freight Corridor network. Beyond RRV manufacturing, Parkline delivers road, rail, and building maintenance and repair works, combining mechanical precision with infrastructure experience to improve inspection speed, maintenance efficiency, and operational safety.",
    expertise: [
      "Rail-Road Vehicle (RRV) Design, Fabrication & Supply",
      "Mechanically Operated RRVs",
      "Hydraulically Operated RRVs for DFC projects",
      "Railway Track and Infrastructure Maintenance Works",
      "Road Resurfacing and Repair",
      "Building Maintenance and Repair",
    ],
    applications: [
      "Dedicated Freight Corridor (EDFC/WDFC) maintenance",
      "Railway inspection and track geometry measurement",
      "Highway and state road resurfacing",
      "Industrial facility maintenance",
    ],
    relatedProjects: ["lt-rrv-mauritius", "jda-road", "pwd-chomu-fatehpur"],
    faqs: [
      {
        q: "What is a Rail-Road Vehicle (RRV)?",
        a: "A Rail-Road Vehicle (RRV) is a dual-mode vehicle capable of operating on both road and railway track. Parkline's RRVs are used for track inspection, maintenance operations, and material transport on the Dedicated Freight Corridor, replacing slower manual inspection methods and improving maintenance efficiency significantly.",
      },
      {
        q: "Is Parkline Infra an approved RRV manufacturer?",
        a: "Yes — Parkline Infra is a railway-approved manufacturer of mechanically and hydraulically operated RRVs, with units successfully deployed on L&T's EDFC and WDFC projects.",
      },
      {
        q: "What road maintenance services does Parkline provide?",
        a: "Parkline delivers flexible pavement resurfacing, road widening, patch repair, and city road development projects, including work for the Jaipur Development Authority (JDA) and PWD Rajasthan.",
      },
    ],
    ogDesc:
      "Parkline Infra manufactures railway-approved Rail-Road Vehicles (RRVs) for DFC projects and delivers road, rail, and building maintenance works across India. Trusted by L&T and government agencies.",
  },
  {
    slug: "customized-equipment-engineering",
    title: "Customized Equipment Integration & Engineering Modifications",
    shortTitle: "Custom Equipment",
    icon: "Settings",
    tagline: "Bespoke Machinery Solutions for Infrastructure Challenges",
    intro:
      "Parkline Infra designs, fabricates, and assembles custom-built machinery for infrastructure and railway applications where off-the-shelf equipment cannot meet project-specific requirements. Our in-house engineering team handles concept design, structural analysis, fabrication, and commissioning — delivering purpose-built equipment that solves complex infrastructure problems with precision.",
    expertise: [
      "Customized Machinery Solutions",
      "In-House Equipment Engineering & Retrofits",
      "Specialized Equipment Configuration Systems",
      "Rail-Road Vehicle (RRV) Engineering Modifications",
      "Ground Improvement Equipment Customization",
      "Project-Specific Equipment Adaptation",
    ],
    applications: [
      "Railway and DFC project equipment",
      "Ground improvement plant modifications",
      "Infrastructure monitoring equipment",
      "Custom lifting and handling systems",
    ],
    relatedProjects: ["lt-rrv-mauritius"],
    faqs: [
      {
        q: "What types of custom machinery has Parkline designed and built?",
        a: "Parkline's most notable custom equipment achievement is the design and fabrication of Rail-Road Vehicles (RRVs) for railway maintenance operations, including units supplied for the Mauritius Metro Project through L&T Construction.",
      },
      {
        q: "Can Parkline modify or retrofit existing equipment?",
        a: "Yes — Parkline's in-house engineering team specialises in equipment retrofits and modifications, adapting existing machinery to new operational requirements without full replacement, often at a fraction of the cost of new equipment.",
      },
    ],
    ogDesc:
      "Parkline Infra designs and manufactures customized machinery, railway equipment, and engineering modifications for infrastructure projects — in-house capability trusted by L&T and railway contractors.",
  },
];
