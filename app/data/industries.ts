export type Industry = {
  id: string;
  title: string;
  icon: string;
  desc: string;
  services: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    id: "transportation",
    title: "Transportation Infrastructure",
    icon: "Truck",
    desc: "National highways, state roads, railway corridors, bridges, and dedicated freight corridor structures — Parkline Infra delivers the foundation and structural works that move India forward.",
    services: ["pile-foundation", "structure-work", "maintenance-repairing-rrv"],
  },
  {
    id: "energy",
    title: "Energy Infrastructure",
    icon: "Zap",
    desc: "Solar, thermal, and transmission projects demand precision civil and structural works. Parkline delivers pile foundations, ground improvement, and civil structures for utility-scale energy installations.",
    services: ["pile-foundation", "ground-improvement", "fabrication-steel-structures"],
  },
  {
    id: "mining-industrial",
    title: "Mining & Industrial Projects",
    icon: "Factory",
    desc: "Industrial plants, warehouses, and mining facilities require ground improvement and structural systems engineered for heavy loads. Parkline's in-house fabrication and geotechnical expertise serve these demands.",
    services: ["ground-improvement", "fabrication-steel-structures", "building-construction"],
  },
  {
    id: "government-public",
    title: "Government & Public Infrastructure",
    icon: "Landmark",
    desc: "As an AA Class PWD Contractor, Parkline Infra is pre-qualified for government road, bridge, and public building projects across Rajasthan and beyond — delivering to specification, on time, every time.",
    services: ["structure-work", "maintenance-repairing-rrv", "building-construction"],
  },
  {
    id: "communication-urban",
    title: "Communication & Urban Infrastructure",
    icon: "Building",
    desc: "Urban growth demands foundations, structures, and maintenance systems built for density and durability. Parkline delivers urban road resurfacing, commercial structures, and infrastructure maintenance for city development authorities.",
    services: ["building-construction", "maintenance-repairing-rrv", "structure-work"],
  },
  {
    id: "smart-city",
    title: "Urban & Smart-City Infrastructure",
    icon: "Globe",
    desc: "Smart-city projects integrate modern utility systems with robust civil infrastructure. Parkline's multi-discipline capability — from ground improvement to custom equipment — positions it as a partner for integrated urban infrastructure delivery.",
    services: ["ground-improvement", "building-construction", "customized-equipment-engineering"],
  },
];
