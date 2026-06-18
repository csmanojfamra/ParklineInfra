export type StateData = {
  id: string;
  name: string;
  active: boolean;
  marker: { x: number; y: number };
  projects: string[];
  projectTitles: string[];
};

export const INDIA_STATES: StateData[] = [
  {
    id: "RJ",
    name: "Rajasthan",
    active: true,
    marker: { x: 195, y: 235 },
    projects: ["jda-road", "pwd-chomu-fatehpur", "vrb-residential", "lt-edfc-wdfc"],
    projectTitles: [
      "JDA Road Development, Jaipur",
      "PWD Road: Chomu to Fatehpur",
      "VRB Residential & Commercial, Jaipur",
      "L&T EDFC/WDFC Works",
    ],
  },
  {
    id: "GJ",
    name: "Gujarat",
    active: true,
    marker: { x: 155, y: 285 },
    projects: ["lt-edfc-wdfc"],
    projectTitles: ["L&T WDFC Infrastructure Works"],
  },
  {
    id: "HR",
    name: "Haryana",
    active: true,
    marker: { x: 215, y: 195 },
    projects: ["lt-edfc-wdfc"],
    projectTitles: ["L&T EDFC/WDFC Works"],
  },
  {
    id: "UP",
    name: "Uttar Pradesh",
    active: true,
    marker: { x: 280, y: 215 },
    projects: ["lt-edfc-wdfc", "dilip-buildcon-highway", "gmr-edfccil"],
    projectTitles: [
      "L&T EDFC Works",
      "Dilip Buildcon Pile Foundation & Bridge",
      "GMR EDFCCIL — Pile & Bridge Works",
    ],
  },
  {
    id: "MP",
    name: "Madhya Pradesh",
    active: true,
    marker: { x: 245, y: 270 },
    projects: ["kec-solar-power"],
    projectTitles: ["KEC International 250 MW Power Project"],
  },
  {
    id: "PB",
    name: "Punjab",
    active: true,
    marker: { x: 200, y: 170 },
    projects: ["adani-ground-improvement"],
    projectTitles: ["Adani Group — Large-Scale Ground Improvement"],
  },
  {
    id: "KL",
    name: "Kerala",
    active: true,
    marker: { x: 215, y: 430 },
    projects: [],
    projectTitles: ["Infrastructure works in Kerala"],
  },
  {
    id: "DL",
    name: "Delhi NCR",
    active: true,
    marker: { x: 225, y: 200 },
    projects: [],
    projectTitles: ["Infrastructure works in Delhi NCR"],
  },
  {
    id: "KA",
    name: "Karnataka",
    active: true,
    marker: { x: 220, y: 390 },
    projects: ["rays-power-karnataka", "kec-solar-power"],
    projectTitles: [
      "Rays Power Infra — 125 MW Solar Project",
      "KEC International — 30 MW Power Project",
    ],
  },
  {
    id: "UK",
    name: "Uttarakhand",
    active: true,
    marker: { x: 255, y: 185 },
    projects: ["rays-power-karnataka"],
    projectTitles: ["Rays Power Infra — 102 MW Solar Project"],
  },
  {
    id: "MH",
    name: "Maharashtra",
    active: true,
    marker: { x: 220, y: 320 },
    projects: ["lt-edfc-wdfc"],
    projectTitles: ["L&T WDFC Maintenance Works"],
  },
  // Inactive states — included for map completeness
  { id: "JK", name: "Jammu & Kashmir", active: false, marker: { x: 205, y: 130 }, projects: [], projectTitles: [] },
  { id: "HP", name: "Himachal Pradesh", active: false, marker: { x: 220, y: 155 }, projects: [], projectTitles: [] },
  { id: "UT", name: "Uttarakhand", active: false, marker: { x: 255, y: 180 }, projects: [], projectTitles: [] },
  { id: "BR", name: "Bihar", active: false, marker: { x: 315, y: 230 }, projects: [], projectTitles: [] },
  { id: "JH", name: "Jharkhand", active: false, marker: { x: 320, y: 265 }, projects: [], projectTitles: [] },
  { id: "WB", name: "West Bengal", active: false, marker: { x: 355, y: 255 }, projects: [], projectTitles: [] },
  { id: "OR", name: "Odisha", active: false, marker: { x: 315, y: 295 }, projects: [], projectTitles: [] },
  { id: "CG", name: "Chhattisgarh", active: false, marker: { x: 280, y: 295 }, projects: [], projectTitles: [] },
  { id: "TG", name: "Telangana", active: false, marker: { x: 260, y: 345 }, projects: [], projectTitles: [] },
  { id: "AP", name: "Andhra Pradesh", active: false, marker: { x: 265, y: 375 }, projects: [], projectTitles: [] },
  { id: "TN", name: "Tamil Nadu", active: false, marker: { x: 235, y: 420 }, projects: [], projectTitles: [] },
  { id: "GA", name: "Goa", active: false, marker: { x: 185, y: 360 }, projects: [], projectTitles: [] },
  { id: "AS", name: "Assam", active: false, marker: { x: 390, y: 205 }, projects: [], projectTitles: [] },
  { id: "SK", name: "Sikkim", active: false, marker: { x: 365, y: 205 }, projects: [], projectTitles: [] },
  { id: "AR", name: "Arunachal Pradesh", active: false, marker: { x: 420, y: 190 }, projects: [], projectTitles: [] },
  { id: "NL", name: "Nagaland", active: false, marker: { x: 415, y: 215 }, projects: [], projectTitles: [] },
  { id: "MN", name: "Manipur", active: false, marker: { x: 415, y: 230 }, projects: [], projectTitles: [] },
  { id: "MZ", name: "Mizoram", active: false, marker: { x: 405, y: 245 }, projects: [], projectTitles: [] },
  { id: "TR", name: "Tripura", active: false, marker: { x: 395, y: 245 }, projects: [], projectTitles: [] },
  { id: "ML", name: "Meghalaya", active: false, marker: { x: 385, y: 220 }, projects: [], projectTitles: [] },
];
