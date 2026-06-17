import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BatteryCharging,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Filter,
  Layers3,
  Phone,
  RotateCcw,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sun,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import rooftopImage from "@/assets/gallery-rooftop.jpg";
import residentialImage from "@/assets/gallery-residential.jpg";
import installationImage from "@/assets/solar-installation-premium.png";
import professionalHero from "@/assets/professional-hero.png";

type ProductType = "On-Grid" | "Off-Grid" | "Hybrid";

type SolarProduct = {
  id: string;
  type: ProductType;
  series: string;
  brand: string;
  capacity: string;
  panelText?: string;
  battery: string;
  price: string;
  validity: string;
  image: string;
  accent: string;
};

type OnGridEntry = {
  capacity: string;
  detail?: string;
  price: string;
};

type ProductGroup = {
  key: string;
  product: SolarProduct;
  variants: SolarProduct[];
};

const productImages = {
  utlHybrid: "https://d3nut88kxhmnud.cloudfront.net/2025/10/Hybrid-4.png",
  utlPanel: "https://d3nut88kxhmnud.cloudfront.net/2025/03/5KW-GALLERY1.jpeg",
  luminousKit: installationImage,
  genus: professionalHero,
  rooftop: rooftopImage,
  residential: residentialImage,
  install: installationImage,
  hero: professionalHero,
};

const productGalleryImages = [
  "https://source.unsplash.com/1200x900/?rooftop-solar-panels,residential&sig=101",
  "https://source.unsplash.com/1200x900/?solar-panel-installation,house&sig=102",
  "https://source.unsplash.com/1200x900/?solar-inverter,battery&sig=103",
  "https://source.unsplash.com/1200x900/?commercial-solar-panels,roof&sig=104",
  "https://source.unsplash.com/1200x900/?solar-energy-storage,battery&sig=105",
  "https://source.unsplash.com/1200x900/?solar-technician,panels&sig=106",
  "https://source.unsplash.com/1200x900/?solar-farm,panels&sig=107",
  "https://source.unsplash.com/1200x900/?home-solar-system,roof&sig=108",
  "https://source.unsplash.com/1200x900/?industrial-solar,warehouse&sig=109",
  "https://source.unsplash.com/1200x900/?solar-panels,modern-home&sig=110",
  rooftopImage,
  residentialImage,
  installationImage,
  professionalHero,
  productImages.utlPanel,
  productImages.utlHybrid,
];

const makeOnGridProducts = (
  brand: string,
  series: string,
  entries: OnGridEntry[],
  prefix: string,
  accent: string,
  validity = "17 June to 2 July 2026",
) =>
  entries.map((entry, index): SolarProduct => ({
    id: `${prefix}-${index + 1}`,
    type: "On-Grid",
    series,
    brand,
    capacity: entry.capacity,
    battery: entry.detail || series,
    price: entry.price,
    validity,
    image: productImages.rooftop,
    accent,
  }));

const onGridProducts: SolarProduct[] = [
  ...makeOnGridProducts("UTL", "UTL ON-GRID Solar System", [
    { capacity: "3.18 KW", detail: "530W Bifacial x 6 + 3.3 KW GTI", price: "₹1,80,000" },
    { capacity: "4.25 KW", detail: "530W Bifacial x 8 + 4.6 KW GTI", price: "₹2,40,000" },
    { capacity: "4.8 KW", detail: "530W Bifacial x 10 + 5 KW Single Phase GTI", price: "₹2,90,000" },
    { capacity: "5.3 KW", detail: "530W Bifacial x 10 + 5 KW Single Phase GTI", price: "₹3,05,000" },
    { capacity: "8 KW", detail: "530W Bifacial x 15 + 8 KW Three Phase GTI", price: "₹4,60,000" },
    { capacity: "10 KW", detail: "530W Bifacial x 19 + Three Phase GTI", price: "₹5,50,000" },
  ], "on-utl", "red"),

  ...makeOnGridProducts("Luminous", "Luminous ON-GRID 550W Bifacial Series", [
    { capacity: "3.3 KW", detail: "550W Bifacial Series", price: "₹1,90,000" },
    { capacity: "3.85 KW", detail: "550W Bifacial Series", price: "₹2,30,000" },
    { capacity: "4.4 KW", detail: "550W Bifacial Series", price: "₹2,50,000" },
    { capacity: "4.4 KW", detail: "550W Bifacial Series", price: "₹2,70,000" },
    { capacity: "5 KW", detail: "550W Bifacial Series", price: "₹2,95,000" },
    { capacity: "5 KW", detail: "550W Bifacial Series", price: "₹2,95,000" },
    { capacity: "5.5 KW", detail: "550W Bifacial Series", price: "₹3,45,000" },
    { capacity: "8.15 KW", detail: "550W Bifacial Series", price: "₹3,45,000" },
    { capacity: "9.8 KW", detail: "550W Bifacial Series", price: "₹5,35,000" },
  ], "on-lum-550", "blue"),
  ...makeOnGridProducts("Luminous", "Luminous ON-GRID 615W Topcon Bifacial Series", [
    { capacity: "3.1 KW", detail: "615W Topcon Bifacial Series", price: "₹1,90,000" },
    { capacity: "4.3 KW", detail: "615W Topcon Bifacial Series", price: "₹2,45,000" },
    { capacity: "4.9 KW", detail: "615W Topcon Bifacial Series", price: "₹2,90,000" },
    { capacity: "5.5 KW", detail: "615W Topcon Bifacial Series", price: "₹3,20,000" },
    { capacity: "5 KW", detail: "615W Topcon Bifacial Series", price: "₹3,45,000" },
    { capacity: "5 KW", detail: "615W Topcon Bifacial Three Phase Series", price: "₹3,45,000" },
    { capacity: "5.5 KW", detail: "615W Topcon Bifacial Three Phase Series", price: "₹3,65,000" },
    { capacity: "8 KW", detail: "615W Topcon Bifacial Three Phase Series", price: "₹3,65,000" },
    { capacity: "10.5 KW", detail: "615W Topcon Bifacial Three Phase Series", price: "₹5,65,000" },
  ], "on-lum-615", "blue"),

  ...makeOnGridProducts("Microtek", "Microtek ON-GRID 545W Bifacial Series", [
    { capacity: "3.27 KW", detail: "545W Bifacial Series", price: "₹1,85,000" },
    { capacity: "3.80 KW", detail: "545W Bifacial Series", price: "₹2,30,000" },
    { capacity: "4.4 KW", detail: "545W Bifacial Series", price: "₹2,55,000" },
    { capacity: "4.9 KW", detail: "545W Bifacial Series", price: "₹2,90,000" },
    { capacity: "5.45 KW", detail: "545W Bifacial Series", price: "₹3,20,000" },
  ], "on-micro-545", "green"),
  ...makeOnGridProducts("Microtek", "Microtek ON-GRID 580W Topcon Bifacial Series", [
    { capacity: "3.5 KW", detail: "580W Topcon Bifacial Series", price: "₹2,00,000" },
    { capacity: "4 KW", detail: "580W Topcon Bifacial Series", price: "₹2,15,000" },
    { capacity: "4 KW", detail: "580W Topcon Bifacial Series", price: "₹2,60,000" },
    { capacity: "4.6 KW", detail: "580W Topcon Bifacial Series", price: "₹2,65,000" },
    { capacity: "5.25 KW", detail: "580W Topcon Bifacial Series", price: "₹3,45,000" },
    { capacity: "8.96 KW", detail: "580W Topcon Bifacial Series", price: "₹4,40,000" },
    { capacity: "9.75 KW", detail: "580W Topcon Bifacial Series", price: "₹5,40,000" },
    { capacity: "10.45 KW", detail: "580W Topcon Bifacial Series", price: "₹5,50,000" },
  ], "on-micro-580", "green"),

  ...makeOnGridProducts("Havells", "Havells ON-GRID Solar System", [
    { capacity: "3.27 KW", price: "₹1,90,000" },
    { capacity: "3.80 KW", price: "₹2,30,000" },
    { capacity: "3.80 KW", price: "₹2,35,000" },
    { capacity: "4.36 KW", price: "₹2,50,000" },
    { capacity: "4.36 KW", price: "₹2,55,000" },
    { capacity: "4.90 KW", price: "₹2,95,000" },
    { capacity: "5.45 KW", price: "₹3,15,000" },
  ], "on-havells", "purple"),

  ...makeOnGridProducts("UTL", "UTL Partner On-Grid Project Rate", [
    { capacity: "Up to 3.1 KW", detail: "Partner project rate", price: "₹1,80,000" },
    { capacity: "3.1 KW to 3.3 KW", detail: "Partner project rate", price: "₹1,85,000" },
  ], "partner-utl", "red", "25 May 2026 until next revision"),
  ...makeOnGridProducts("Luminous / Havells / Microtek", "Luminous / Havells / Microtek Partner On-Grid Project Rate", [
    { capacity: "Up to 3.1 KW", detail: "Partner project rate", price: "₹1,85,000" },
    { capacity: "3.1 KW to 3.3 KW", detail: "Partner project rate", price: "₹1,90,000" },
  ], "partner-lhm", "blue", "25 May 2026 until next revision"),
  ...makeOnGridProducts("Waaree", "Waaree Partner On-Grid Project Rate", [
    { capacity: "5 Panels", detail: "Partner project rate", price: "₹1,80,000" },
    { capacity: "6 Panels", detail: "Partner project rate", price: "₹1,95,000" },
  ], "partner-waaree", "green", "25 May 2026 until next revision"),
  ...makeOnGridProducts("Adani", "Adani Partner On-Grid Project Rate", [
    { capacity: "Up to 3.1 KW", detail: "Partner project rate", price: "₹1,90,000" },
    { capacity: "3.1 KW to 3.5 KW", detail: "Partner project rate", price: "₹2,00,000" },
  ], "partner-adani", "purple", "25 May 2026 until next revision"),
  ...makeOnGridProducts("Tata", "Tata Partner On-Grid Project Rate", [
    { capacity: "5 Panels / Up to 2.95 KW", detail: "Partner project rate", price: "₹1,90,000" },
    { capacity: "6 Panels / Up to 3.5 KW", detail: "Partner project rate", price: "₹2,05,000" },
  ], "partner-tata", "red", "25 May 2026 until next revision"),
];

const offGridProducts: SolarProduct[] = [
  { id: "og-3kva24-01", type: "Off-Grid", series: "UTL Sigma 3 KVA / 24V", brand: "UTL", capacity: "3.3 KW", panelText: "550W x 6 Panels", battery: "Lead Acid 150AH/12V x 2", price: "₹1,85,000", validity: "17 June to 2 July 2026", image: productImages.utlHybrid, accent: "red" },
  { id: "og-3kva24-02", type: "Off-Grid", series: "UTL Sigma 3 KVA / 24V", brand: "UTL", capacity: "3.4 KW", panelText: "570W x 6 Panels", battery: "Lead Acid 150AH/12V x 2", price: "₹1,90,000", validity: "17 June to 2 July 2026", image: productImages.utlPanel, accent: "red" },
  { id: "og-3kva24-03", type: "Off-Grid", series: "UTL Sigma 3 KVA / 24V", brand: "UTL", capacity: "3.8 KW", panelText: "630W x 6 Panels", battery: "Lead Acid 150AH/12V x 2", price: "₹1,95,000", validity: "17 June to 2 July 2026", image: productImages.utlHybrid, accent: "red" },
  { id: "og-3kva24-04", type: "Off-Grid", series: "UTL Sigma 3 KVA / 24V", brand: "UTL", capacity: "3.3 KW", panelText: "550W x 6 Panels", battery: "Lead Acid 200AH/12V x 2", price: "₹1,93,000", validity: "17 June to 2 July 2026", image: productImages.install, accent: "red" },
  { id: "og-3kva24-05", type: "Off-Grid", series: "UTL Sigma 3 KVA / 24V", brand: "UTL", capacity: "3.4 KW", panelText: "570W x 6 Panels", battery: "Lead Acid 200AH/12V x 2", price: "₹1,98,000", validity: "17 June to 2 July 2026", image: productImages.rooftop, accent: "red" },
  { id: "og-3kva24-06", type: "Off-Grid", series: "UTL Sigma 3 KVA / 24V", brand: "UTL", capacity: "3.8 KW", panelText: "630W x 6 Panels", battery: "Lead Acid 200AH/12V x 2", price: "₹2,03,000", validity: "17 June to 2 July 2026", image: productImages.utlPanel, accent: "red" },
  { id: "og-3kva24-07", type: "Off-Grid", series: "UTL Sigma 3 KVA / 24V", brand: "UTL", capacity: "3.3 KW", panelText: "550W x 6 Panels", battery: "Lithium 25.2V/100AH x 1", price: "₹1,95,000", validity: "17 June to 2 July 2026", image: productImages.utlHybrid, accent: "red" },
  { id: "og-3kva24-08", type: "Off-Grid", series: "UTL Sigma 3 KVA / 24V", brand: "UTL", capacity: "3.4 KW", panelText: "570W x 6 Panels", battery: "Lithium 25.2V/100AH x 1", price: "₹2,05,000", validity: "17 June to 2 July 2026", image: productImages.hero, accent: "red" },
  { id: "og-3kva24-09", type: "Off-Grid", series: "UTL Sigma 3 KVA / 24V", brand: "UTL", capacity: "3.8 KW", panelText: "630W x 6 Panels", battery: "Lithium 25.2V/100AH x 1", price: "₹2,10,000", validity: "17 June to 2 July 2026", image: productImages.utlHybrid, accent: "red" },
  { id: "og-3kva24-10", type: "Off-Grid", series: "UTL Sigma 3 KVA / 24V", brand: "UTL", capacity: "3.3 KW", panelText: "550W x 6 Panels", battery: "Lithium 25.2V/100AH x 2", price: "₹2,30,000", validity: "17 June to 2 July 2026", image: productImages.residential, accent: "red" },
  { id: "og-3kva24-11", type: "Off-Grid", series: "UTL Sigma 3 KVA / 24V", brand: "UTL", capacity: "3.4 KW", panelText: "570W x 6 Panels", battery: "Lithium 25.2V/100AH x 2", price: "₹2,40,000", validity: "17 June to 2 July 2026", image: productImages.utlHybrid, accent: "red" },
  { id: "og-3kva24-12", type: "Off-Grid", series: "UTL Sigma 3 KVA / 24V", brand: "UTL", capacity: "3.8 KW", panelText: "630W x 6 Panels", battery: "Lithium 25.2V/100AH x 2", price: "₹2,45,000", validity: "17 June to 2 July 2026", image: productImages.utlPanel, accent: "red" },

  { id: "og-3kva48-01", type: "Off-Grid", series: "UTL Sigma 3 KVA / 48V", brand: "UTL", capacity: "3.3 KW", battery: "Lead Acid 150AH/12V x 4", price: "₹1,85,000", validity: "17 June to 2 July 2026", image: productImages.install, accent: "blue" },
  { id: "og-3kva48-02", type: "Off-Grid", series: "UTL Sigma 3 KVA / 48V", brand: "UTL", capacity: "3.4 KW", battery: "Lead Acid 150AH/12V x 4", price: "₹1,90,000", validity: "17 June to 2 July 2026", image: productImages.utlPanel, accent: "blue" },
  { id: "og-3kva48-03", type: "Off-Grid", series: "UTL Sigma 3 KVA / 48V", brand: "UTL", capacity: "3.8 KW", battery: "Lead Acid 150AH/12V x 4", price: "₹1,95,000", validity: "17 June to 2 July 2026", image: productImages.utlHybrid, accent: "blue" },
  { id: "og-3kva48-04", type: "Off-Grid", series: "UTL Sigma 3 KVA / 48V", brand: "UTL", capacity: "3.3 KW", battery: "Lead Acid 200AH/12V x 4", price: "₹1,93,000", validity: "17 June to 2 July 2026", image: productImages.rooftop, accent: "blue" },
  { id: "og-3kva48-05", type: "Off-Grid", series: "UTL Sigma 3 KVA / 48V", brand: "UTL", capacity: "3.4 KW", battery: "Lead Acid 200AH/12V x 4", price: "₹1,98,000", validity: "17 June to 2 July 2026", image: productImages.utlHybrid, accent: "blue" },
  { id: "og-3kva48-06", type: "Off-Grid", series: "UTL Sigma 3 KVA / 48V", brand: "UTL", capacity: "3.8 KW", battery: "Lead Acid 200AH/12V x 4", price: "₹2,03,000", validity: "17 June to 2 July 2026", image: productImages.hero, accent: "blue" },
  { id: "og-3kva48-07", type: "Off-Grid", series: "UTL Sigma 3 KVA / 48V", brand: "UTL", capacity: "3.3 KW", battery: "Lithium 51.2V/100AH x 1", price: "₹2,35,000", validity: "17 June to 2 July 2026", image: productImages.utlHybrid, accent: "blue" },
  { id: "og-3kva48-08", type: "Off-Grid", series: "UTL Sigma 3 KVA / 48V", brand: "UTL", capacity: "3.4 KW", battery: "Lithium 51.2V/100AH x 1", price: "₹2,45,000", validity: "17 June to 2 July 2026", image: productImages.residential, accent: "blue" },
  { id: "og-3kva48-09", type: "Off-Grid", series: "UTL Sigma 3 KVA / 48V", brand: "UTL", capacity: "3.8 KW", battery: "Lithium 51.2V/100AH x 1", price: "₹2,50,000", validity: "17 June to 2 July 2026", image: productImages.utlPanel, accent: "blue" },

  { id: "og-5kva48-01", type: "Off-Grid", series: "UTL Sigma 5 KVA / 48V", brand: "UTL", capacity: "4.9 KW", battery: "Lead Acid 150AH/12V x 4", price: "₹3,05,000", validity: "17 June to 2 July 2026", image: productImages.utlHybrid, accent: "green" },
  { id: "og-5kva48-02", type: "Off-Grid", series: "UTL Sigma 5 KVA / 48V", brand: "UTL", capacity: "5.1 KW", battery: "Lead Acid 150AH/12V x 4", price: "₹3,10,000", validity: "17 June to 2 July 2026", image: productImages.install, accent: "green" },
  { id: "og-5kva48-03", type: "Off-Grid", series: "UTL Sigma 5 KVA / 48V", brand: "UTL", capacity: "5.6 KW", battery: "Lead Acid 150AH/12V x 4", price: "₹3,15,000", validity: "17 June to 2 July 2026", image: productImages.utlPanel, accent: "green" },
  { id: "og-5kva48-04", type: "Off-Grid", series: "UTL Sigma 5 KVA / 48V", brand: "UTL", capacity: "4.9 KW", battery: "Lead Acid 200AH/12V x 4", price: "₹3,25,000", validity: "17 June to 2 July 2026", image: productImages.rooftop, accent: "green" },
  { id: "og-5kva48-05", type: "Off-Grid", series: "UTL Sigma 5 KVA / 48V", brand: "UTL", capacity: "5.1 KW", battery: "Lead Acid 200AH/12V x 4", price: "₹3,30,000", validity: "17 June to 2 July 2026", image: productImages.utlHybrid, accent: "green" },
  { id: "og-5kva48-06", type: "Off-Grid", series: "UTL Sigma 5 KVA / 48V", brand: "UTL", capacity: "5.6 KW", battery: "Lead Acid 200AH/12V x 4", price: "₹3,35,000", validity: "17 June to 2 July 2026", image: productImages.hero, accent: "green" },
  { id: "og-5kva48-07", type: "Off-Grid", series: "UTL Sigma 5 KVA / 48V", brand: "UTL", capacity: "4.9 KW", battery: "Lithium 51.2V/100AH x 1", price: "₹3,25,000", validity: "17 June to 2 July 2026", image: productImages.utlHybrid, accent: "green" },
  { id: "og-5kva48-08", type: "Off-Grid", series: "UTL Sigma 5 KVA / 48V", brand: "UTL", capacity: "5.1 KW", battery: "Lithium 51.2V/100AH x 2", price: "₹3,95,000", validity: "17 June to 2 July 2026", image: productImages.residential, accent: "green" },
  { id: "og-5kva48-09", type: "Off-Grid", series: "UTL Sigma 5 KVA / 48V", brand: "UTL", capacity: "5.6 KW", battery: "Lithium 51.2V/100AH x 2", price: "₹4,00,000", validity: "17 June to 2 July 2026", image: productImages.utlPanel, accent: "green" },
  { id: "og-5kva48-10", type: "Off-Grid", series: "UTL Sigma 5 KVA / 48V", brand: "UTL", capacity: "5.6 KW", battery: "Lithium 51.2V/100AH x 2", price: "₹4,10,000", validity: "17 June to 2 July 2026", image: productImages.utlHybrid, accent: "green" },

  { id: "og-10kva120-01", type: "Off-Grid", series: "UTL Sigma 10 KVA / 120V", brand: "UTL", capacity: "9.9 KW", battery: "Lead Acid 150AH/12V x 10", price: "₹5,40,000", validity: "17 June to 2 July 2026", image: productImages.utlHybrid, accent: "purple" },
  { id: "og-10kva120-02", type: "Off-Grid", series: "UTL Sigma 10 KVA / 120V", brand: "UTL", capacity: "10.2 KW", battery: "Lead Acid 150AH/12V x 10", price: "₹5,50,000", validity: "17 June to 2 July 2026", image: productImages.rooftop, accent: "purple" },
  { id: "og-10kva120-03", type: "Off-Grid", series: "UTL Sigma 10 KVA / 120V", brand: "UTL", capacity: "11.3 KW", battery: "Lead Acid 150AH/12V x 10", price: "₹5,05,000", validity: "17 June to 2 July 2026", image: productImages.utlPanel, accent: "purple" },
  { id: "og-10kva120-04", type: "Off-Grid", series: "UTL Sigma 10 KVA / 120V", brand: "UTL", capacity: "9.9 KW", battery: "Lead Acid 200AH/12V x 10", price: "₹5,80,000", validity: "17 June to 2 July 2026", image: productImages.install, accent: "purple" },
  { id: "og-10kva120-05", type: "Off-Grid", series: "UTL Sigma 10 KVA / 120V", brand: "UTL", capacity: "10.2 KW", battery: "Lead Acid 200AH/12V x 10", price: "₹5,85,000", validity: "17 June to 2 July 2026", image: productImages.utlHybrid, accent: "purple" },
  { id: "og-10kva120-06", type: "Off-Grid", series: "UTL Sigma 10 KVA / 120V", brand: "UTL", capacity: "11.3 KW", battery: "Lead Acid 200AH/12V x 10", price: "₹5,90,000", validity: "17 June to 2 July 2026", image: productImages.hero, accent: "purple" },
  { id: "og-10kva120-07", type: "Off-Grid", series: "UTL Sigma 10 KVA / 120V", brand: "UTL", capacity: "9.9 KW", battery: "Lithium 60V/100AH x 2", price: "₹5,80,000", validity: "17 June to 2 July 2026", image: productImages.utlPanel, accent: "purple" },
  { id: "og-10kva120-08", type: "Off-Grid", series: "UTL Sigma 10 KVA / 120V", brand: "UTL", capacity: "10.2 KW", battery: "Lithium 60V/100AH x 2", price: "₹5,85,000", validity: "17 June to 2 July 2026", image: productImages.residential, accent: "purple" },
  { id: "og-10kva120-09", type: "Off-Grid", series: "UTL Sigma 10 KVA / 120V", brand: "UTL", capacity: "11.3 KW", battery: "Lithium 60V/100AH x 2", price: "₹5,90,000", validity: "17 June to 2 July 2026", image: productImages.utlHybrid, accent: "purple" },
];

const hybridProducts: SolarProduct[] = [
  { id: "hy-utl-01", type: "Hybrid", series: "UTL Hybrid Solar System", brand: "UTL", capacity: "3.25 KW", battery: "Lead Acid Battery - 150AH/12V x 2", price: "₹2,40,000", validity: "13 June to 28 June 2026", image: productImages.utlHybrid, accent: "red" },
  { id: "hy-utl-02", type: "Hybrid", series: "UTL Hybrid Solar System", brand: "UTL", capacity: "3.25 KW", battery: "Lithium Battery - 100AH/25.2V x 1", price: "₹2,50,000", validity: "13 June to 28 June 2026", image: productImages.utlHybrid, accent: "red" },
  { id: "hy-utl-03", type: "Hybrid", series: "UTL Hybrid Solar System", brand: "UTL", capacity: "5 KW", battery: "Lead Acid Battery - 150AH/12V x 4", price: "₹3,50,000", validity: "13 June to 28 June 2026", image: productImages.utlPanel, accent: "red" },
  { id: "hy-utl-04", type: "Hybrid", series: "UTL Hybrid Solar System", brand: "UTL", capacity: "5 KW", battery: "Lithium Battery - 51.2V/100AH x 1", price: "₹3,70,000", validity: "13 June to 28 June 2026", image: productImages.utlHybrid, accent: "red" },
  { id: "hy-utl-05", type: "Hybrid", series: "UTL Hybrid Solar System", brand: "UTL", capacity: "10 KW", battery: "Lead Acid Battery - 150AH/12V x 10", price: "₹6,70,000", validity: "13 June to 28 June 2026", image: productImages.residential, accent: "red" },

  { id: "hy-lm-01", type: "Hybrid", series: "Luminous / Microtek Hybrid Solar System", brand: "Luminous / Microtek", capacity: "3.3 KW", battery: "Lead Acid Battery - 150AH/12V x 4", price: "₹2,70,000", validity: "13 June to 28 June 2026", image: productImages.luminousKit, accent: "blue" },
  { id: "hy-lm-02", type: "Hybrid", series: "Luminous / Microtek Hybrid Solar System", brand: "Luminous / Microtek", capacity: "3.3 KW", battery: "Lithium Battery - 51.2AH/51.2V x 1", price: "₹2,90,000", validity: "13 June to 28 June 2026", image: productImages.luminousKit, accent: "blue" },
  { id: "hy-lm-03", type: "Hybrid", series: "Luminous / Microtek Hybrid Solar System", brand: "Luminous / Microtek", capacity: "5 KW", battery: "Lead Acid Battery - 150AH/12V x 4", price: "₹3,55,000", validity: "13 June to 28 June 2026", image: productImages.install, accent: "blue" },
  { id: "hy-lm-04", type: "Hybrid", series: "Luminous / Microtek Hybrid Solar System", brand: "Luminous / Microtek", capacity: "5 KW", battery: "Lithium Battery - 51.2AH/100AH x 1", price: "₹3,75,000", validity: "13 June to 28 June 2026", image: productImages.luminousKit, accent: "blue" },
  { id: "hy-lm-05", type: "Hybrid", series: "Luminous / Microtek Hybrid Solar System", brand: "Luminous / Microtek", capacity: "10 KW", battery: "Lead Acid Battery - 150AH/12V x 10", price: "₹6,80,000", validity: "13 June to 28 June 2026", image: productImages.rooftop, accent: "blue" },

  { id: "hy-genus-01", type: "Hybrid", series: "Genus Hybrid Solar System", brand: "Genus", capacity: "5 KW", battery: "Lithium Battery - 25.2V/100AH x 1", price: "₹3,30,000", validity: "13 June to 28 June 2026", image: productImages.genus, accent: "green" },
  { id: "hy-genus-02", type: "Hybrid", series: "Genus Hybrid Solar System", brand: "Genus", capacity: "5 KW", battery: "Lithium Battery - 25.2V/100AH x 2", price: "₹3,65,000", validity: "13 June to 28 June 2026", image: productImages.genus, accent: "green" },
  { id: "hy-genus-03", type: "Hybrid", series: "Genus Hybrid Solar System", brand: "Genus", capacity: "7.5 KW", battery: "Lithium Battery - 51.2V/100AH x 1", price: "₹4,60,000", validity: "13 June to 28 June 2026", image: productImages.hero, accent: "green" },
  { id: "hy-genus-04", type: "Hybrid", series: "Genus Hybrid Solar System", brand: "Genus", capacity: "15 KW", battery: "Lithium Battery - 51.2V/100AH x 1", price: "₹9,20,000", validity: "13 June to 28 June 2026", image: productImages.genus, accent: "green" },
  { id: "hy-genus-05", type: "Hybrid", series: "Genus Hybrid Solar System", brand: "Genus", capacity: "15 KW", battery: "Lithium Battery - 51.2V/100AH x 2", price: "₹9,95,000", validity: "13 June to 28 June 2026", image: productImages.genus, accent: "green" },
  { id: "hy-genus-06", type: "Hybrid", series: "Genus Hybrid Solar System", brand: "Genus", capacity: "15 KW", battery: "Lithium Battery - 51.2V/100AH x 3", price: "₹10,65,000", validity: "13 June to 28 June 2026", image: productImages.rooftop, accent: "green" },
];

const products = [...onGridProducts, ...offGridProducts, ...hybridProducts];

const accentClasses: Record<string, string> = {
  red: "bg-red-600 text-white",
  blue: "bg-blue-700 text-white",
  green: "bg-emerald-700 text-white",
  purple: "bg-violet-700 text-white",
};

const getProductVisual = (product: SolarProduct) => {
  const productIndex = products.findIndex((item) => item.id === product.id);
  return productGalleryImages[Math.max(productIndex, 0) % productGalleryImages.length] || product.image;
};

const companyWiseOnGridBrands = new Set(["UTL", "Luminous", "Microtek", "Havells"]);

const shouldGroupCompanyWise = (product: SolarProduct) =>
  product.type === "On-Grid" && companyWiseOnGridBrands.has(product.brand) && !product.validity.includes("25 May");

const getGroupKey = (product: SolarProduct) =>
  shouldGroupCompanyWise(product) ? `on-grid-company__${product.brand}` : product.id;

const getDisplaySeries = (group: ProductGroup) => {
  if (!shouldGroupCompanyWise(group.product)) return group.product.series;
  return `${group.product.brand} ON-GRID Solar System`;
};

const getPriceValue = (price: string) => Number(price.replace(/[₹,]/g, ""));
const getCapacityValue = (capacity: string) => Number(capacity.match(/\d+(\.\d+)?/)?.[0] || 0);

const getPriceRange = (variants: SolarProduct[]) => {
  const sorted = [...variants].sort((a, b) => getPriceValue(a.price) - getPriceValue(b.price));
  if (!sorted.length) return "";
  if (sorted[0].price === sorted[sorted.length - 1].price) return sorted[0].price;
  return `${sorted[0].price} - ${sorted[sorted.length - 1].price}`;
};

const getCapacityRange = (variants: SolarProduct[]) => {
  const sorted = [...variants].sort((a, b) => getCapacityValue(a.capacity) - getCapacityValue(b.capacity));
  if (!sorted.length) return "";
  if (sorted[0].capacity === sorted[sorted.length - 1].capacity) return sorted[0].capacity;
  return `${sorted[0].capacity} - ${sorted[sorted.length - 1].capacity}`;
};

const useFallbackImage = (event: React.SyntheticEvent<HTMLImageElement>, fallback: string) => {
  const image = event.currentTarget;
  if (!image.dataset.fallbackApplied) {
    image.dataset.fallbackApplied = "true";
    image.src = fallback;
    return;
  }
  image.src = rooftopImage;
};

const Product = () => {
  const { t } = useLanguage();
  const [activeType, setActiveType] = useState<"All" | ProductType>("All");
  const [activeBrand, setActiveBrand] = useState("All");
  const [activeSeries, setActiveSeries] = useState("All");
  const [activeBattery, setActiveBattery] = useState("All");
  const [sortBy, setSortBy] = useState("recommended");
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<SolarProduct>(products[0]);
  const [selectedGroupKey, setSelectedGroupKey] = useState(getGroupKey(products[0]));
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeBanner, setActiveBanner] = useState(0);

  const getSystemFamily = (product: SolarProduct) => {
    if (product.type === "On-Grid") return "Grid-Tied";
    if (product.battery.toLowerCase().includes("lithium")) return "Lithium";
    if (product.battery.toLowerCase().includes("lead")) return "Lead Acid";
    return "Other";
  };

  const seriesOptions = useMemo(() => {
    const filtered = products.filter((item) => {
      const typeMatch = activeType === "All" || item.type === activeType;
      const brandMatch = activeBrand === "All" || item.brand === activeBrand;
      return typeMatch && brandMatch;
    });
    return ["All", ...Array.from(new Set(filtered.map((item) => item.series)))];
  }, [activeType, activeBrand]);

  const brandOptions = useMemo(() => {
    const filtered = activeType === "All" ? products : products.filter((item) => item.type === activeType);
    return ["All", ...Array.from(new Set(filtered.map((item) => item.brand)))];
  }, [activeType]);

  const visibleProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const filtered = products.filter((item) => {
      const typeMatch = activeType === "All" || item.type === activeType;
      const brandMatch = activeBrand === "All" || item.brand === activeBrand;
      const seriesMatch = activeSeries === "All" || item.series === activeSeries;
      const batteryMatch = activeBattery === "All" || getSystemFamily(item) === activeBattery;
      const text = `${item.type} ${item.series} ${item.brand} ${item.capacity} ${item.battery} ${item.panelText || ""} ${item.price}`.toLowerCase();
      return typeMatch && brandMatch && seriesMatch && batteryMatch && (!normalized || text.includes(normalized));
    });
    return [...filtered].sort((a, b) => {
      if (sortBy === "price-low") return getPriceValue(a.price) - getPriceValue(b.price);
      if (sortBy === "price-high") return getPriceValue(b.price) - getPriceValue(a.price);
      if (sortBy === "capacity") return getCapacityValue(a.capacity) - getCapacityValue(b.capacity);
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id);
    });
  }, [activeType, activeBrand, activeSeries, activeBattery, query, sortBy]);

  const visibleGroups = useMemo(() => {
    const groupMap = new Map<string, SolarProduct[]>();
    visibleProducts.forEach((product) => {
      const key = getGroupKey(product);
      groupMap.set(key, [...(groupMap.get(key) || []), product]);
    });

    return Array.from(groupMap.entries()).map(([key, variants]): ProductGroup => ({
      key,
      product: variants[0],
      variants,
    }));
  }, [visibleProducts]);

  const selectedGroupVariants = useMemo(() => {
    const variants = products.filter((product) => getGroupKey(product) === selectedGroupKey);
    return variants.length ? variants : [selectedProduct];
  }, [selectedGroupKey, selectedProduct]);

  const selectedIsGrouped = selectedGroupVariants.length > 1;
  const selectedDisplaySeries = getDisplaySeries({ key: selectedGroupKey, product: selectedProduct, variants: selectedGroupVariants });

  useEffect(() => {
    if (visibleGroups.length && !visibleGroups.some((group) => group.key === selectedGroupKey)) {
      setSelectedGroupKey(visibleGroups[0].key);
      setSelectedProduct(visibleGroups[0].product);
    }
  }, [selectedGroupKey, visibleGroups]);

  const resetFilters = () => {
    setActiveType("All");
    setActiveBrand("All");
    setActiveSeries("All");
    setActiveBattery("All");
    setSortBy("recommended");
    setQuery("");
  };

  const typeCounts = {
    All: products.length,
    "On-Grid": onGridProducts.length,
    "Off-Grid": offGridProducts.length,
    Hybrid: hybridProducts.length,
  };

  const heroBanners = [
    {
      kicker: t("Latest On-Grid Packages", "नवीनतम ऑन-ग्रिड पैकेज"),
      title: t("On-Grid Solar Systems", "ऑन-ग्रिड सोलर सिस्टम"),
      subtitle: t("UTL, Luminous, Microtek and Havells variants from 3.1 KW to 10.5 KW.", "UTL, Luminous, Microtek और Havells variants 3.1 KW से 10.5 KW तक।"),
      range: "3.1 KW - 10.5 KW",
      image: productImages.rooftop,
      visual: productImages.utlPanel,
      gradient: "from-emerald-950 via-teal-900 to-slate-950",
      chips: ["GST Included", "Lucknow Transport", "Variant-wise Price"],
    },
    {
      kicker: t("Smart Solar Inverters", "स्मार्ट सोलर इन्वर्टर"),
      title: t("Off-Grid Home Power", "ऑफ-ग्रिड होम पावर"),
      subtitle: t("UTL Sigma systems with lead acid and lithium battery options.", "UTL Sigma systems lead acid और lithium battery options के साथ।"),
      range: "3.3 KW - 11.3 KW",
      image: productImages.utlHybrid,
      visual: productImages.utlHybrid,
      gradient: "from-slate-950 via-cyan-950 to-emerald-950",
      chips: ["Lithium Options", "Lead Acid Options", "Home Backup"],
    },
    {
      kicker: t("Hybrid Solar Systems", "हाइब्रिड सोलर सिस्टम"),
      title: t("Solar + Battery Backup", "सोलर + बैटरी बैकअप"),
      subtitle: t("Hybrid packages for UTL, Luminous, Microtek and Genus systems.", "UTL, Luminous, Microtek और Genus systems के hybrid packages।"),
      range: "3.25 KW - 15 KW",
      image: productImages.residential,
      visual: productImages.luminousKit,
      gradient: "from-indigo-950 via-slate-950 to-emerald-950",
      chips: ["Hybrid Ready", "Battery Backup", "Quote Support"],
    },
    {
      kicker: t("Partner Project Rates", "पार्टनर प्रोजेक्ट रेट"),
      title: t("Brand-wise Solar Deals", "ब्रांड-वाइज सोलर डील्स"),
      subtitle: t("Waaree, Adani and Tata partner project rates for fast comparison.", "Waaree, Adani और Tata partner project rates fast comparison के लिए।"),
      range: "₹1.80L - ₹5.65L",
      image: productImages.install,
      visual: productImages.install,
      gradient: "from-orange-950 via-slate-950 to-gray-950",
      chips: ["Waaree", "Adani", "Tata"],
    },
    {
      kicker: t("Company-wise On-Grid", "कंपनी-वाइज ऑन-ग्रिड"),
      title: t("UTL to Havells Price List", "UTL से Havells प्राइस लिस्ट"),
      subtitle: t("Compare all major on-grid companies with capacity-wise variants in one place.", "सभी major on-grid companies को capacity-wise variants के साथ एक जगह compare करें।"),
      range: "44 On-Grid Products",
      image: productImages.rooftop,
      visual: productImages.residential,
      gradient: "from-blue-950 via-slate-950 to-emerald-950",
      chips: ["UTL", "Luminous", "Microtek", "Havells"],
    },
    {
      kicker: t("UTL Sigma Range", "UTL Sigma रेंज"),
      title: t("Reliable Off-Grid Backup", "रिलायबल ऑफ-ग्रिड बैकअप"),
      subtitle: t("Choose 24V, 48V and 120V Sigma packages with practical battery combinations.", "24V, 48V और 120V Sigma packages practical battery combinations के साथ चुनें।"),
      range: "3 KVA - 10 KVA",
      image: productImages.utlHybrid,
      visual: productImages.utlPanel,
      gradient: "from-red-950 via-slate-950 to-zinc-950",
      chips: ["24V", "48V", "120V"],
    },
    {
      kicker: t("Lithium Battery Packages", "Lithium Battery Packages"),
      title: t("Compact Power Backup", "Compact Power Backup"),
      subtitle: t("Lithium options for cleaner installation, faster backup response and modern homes.", "Modern homes के लिए cleaner installation और faster backup response वाले lithium options।"),
      range: "25.2V - 60V",
      image: productImages.install,
      visual: productImages.luminousKit,
      gradient: "from-violet-950 via-slate-950 to-cyan-950",
      chips: ["Lithium", "Low Maintenance", "Modern Backup"],
    },
    {
      kicker: t("Commercial Solar", "Commercial Solar"),
      title: t("Higher Capacity Systems", "Higher Capacity Systems"),
      subtitle: t("Explore 8 KW, 10 KW and 15 KW systems for larger homes, offices and businesses.", "Large homes, offices और businesses के लिए 8 KW, 10 KW और 15 KW systems देखें।"),
      range: "8 KW - 15 KW",
      image: productImages.hero,
      visual: productImages.genus,
      gradient: "from-gray-950 via-blue-950 to-slate-950",
      chips: ["Three Phase", "Business Ready", "Large Loads"],
    },
    {
      kicker: t("Survey to Quote", "Survey to Quote"),
      title: t("Find the Right Package", "सही Package चुनें"),
      subtitle: t("Filter by company, system type, capacity and price before booking your site survey.", "Site survey book करने से पहले company, system type, capacity और price से filter करें।"),
      range: `${products.length} Variants`,
      image: productImages.residential,
      visual: productImages.rooftop,
      gradient: "from-green-950 via-slate-950 to-orange-950",
      chips: ["Filter", "Compare", "Book Survey"],
    },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveBanner((current) => (current + 1) % heroBanners.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [heroBanners.length]);

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="relative h-[350px] sm:h-[410px] lg:h-[500px] xl:h-[590px]">
          {heroBanners.map((banner, index) => (
            <div
              key={banner.title}
              className={`absolute inset-0 bg-gradient-to-br ${banner.gradient} transition-opacity duration-700 ${activeBanner === index ? "opacity-100" : "opacity-0"}`}
              aria-hidden={activeBanner !== index}
            >
              <img
                src={banner.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen"
                onError={(event) => useFallbackImage(event, rooftopImage)}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,255,255,0.18),transparent_32%)]" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

              <div className="container relative z-10 mx-auto grid h-full grid-cols-1 items-center gap-6 px-4 md:grid-cols-[1fr_0.95fr]">
                <motion.div
                  initial={false}
                  animate={activeBanner === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  transition={{ duration: 0.45 }}
                  className="max-w-3xl pt-4"
                >
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white backdrop-blur md:text-sm">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    {banner.kicker}
                  </div>
                  <h1 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-normal md:text-6xl xl:text-7xl">
                    {banner.title}
                  </h1>
                  <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-white/82 md:text-xl">
                    {banner.subtitle}
                  </p>
                  <div className="mt-5 inline-flex rounded-xl border border-white/35 bg-white/10 px-5 py-2 text-2xl font-black shadow-[0_0_18px_rgba(255,255,255,0.18)] backdrop-blur md:text-4xl">
                    {banner.range}
                  </div>
                  <div className="mt-5 hidden flex-wrap gap-3 sm:flex">
                    {banner.chips.map((chip) => (
                      <span key={chip} className="rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold text-white/90 backdrop-blur">
                        {chip}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <div className="pointer-events-none hidden max-w-xl md:static md:block md:w-full">
                  <div className="relative mx-auto aspect-[1.55/1] max-h-[340px]">
                    <div className="absolute inset-x-10 bottom-0 h-16 rounded-full bg-black/50 blur-2xl" />
                    <img
                      src={banner.visual}
                      alt=""
                      className="relative z-10 h-full w-full rounded-[2rem] object-cover shadow-2xl ring-1 ring-white/15"
                      onError={(event) => useFallbackImage(event, rooftopImage)}
                    />
                    <div className="absolute -bottom-4 left-4 z-20 hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur md:block">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-white/60">{t("Catalogue", "कैटलॉग")}</p>
                      <p className="text-xl font-black text-primary">{products.length} {t("Variants", "Variants")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
            {heroBanners.map((banner, index) => (
              <button
                key={banner.title}
                type="button"
                onClick={() => setActiveBanner(index)}
                className={`h-3 w-3 rounded-full border-2 border-white transition-all ${activeBanner === index ? "bg-transparent ring-2 ring-white/70" : "bg-white"}`}
                aria-label={`Show banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="sticky top-16 z-20 border-b border-border/70 bg-background/95 py-3 backdrop-blur-xl md:top-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-border bg-white p-3 shadow-[0_12px_32px_rgba(15,23,42,0.08)] md:p-4">
            <div className="md:hidden">
              <div className="grid grid-cols-[minmax(0,1fr)_auto_auto] gap-2">
                <label className="block min-w-0">
                  <span className="sr-only">Search</span>
                  <div className="relative">
                    <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder={t("Search product...", "Product search करें...")}
                      className="h-11 w-full rounded-xl border border-border bg-background pl-11 pr-3 text-sm font-bold outline-none ring-primary/20 transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4"
                    />
                  </div>
                </label>

                <div className="inline-flex h-11 items-center justify-center gap-1.5 rounded-xl bg-muted px-3 text-sm font-black text-foreground">
                  <Layers3 className="h-4 w-4 text-primary" />
                  <span>{visibleGroups.length}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setFiltersOpen((open) => !open)}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gray-950 px-3 text-sm font-black text-white shadow-lg"
                  aria-expanded={filtersOpen}
                >
                  <Filter className="h-4 w-4 text-primary" />
                  <span>{filtersOpen ? "Hide" : "Filter"}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${filtersOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
            </div>

            <div className={`${filtersOpen ? "mt-4 grid" : "hidden"} gap-3 md:grid md:grid-cols-2 md:gap-3 xl:grid-cols-[minmax(210px,1.1fr)_105px_minmax(140px,0.8fr)_minmax(170px,1fr)_110px_145px_142px] xl:items-end`}>
              <label className="hidden min-w-0 md:block">
                <span className="mb-1.5 block text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">Search</span>
                <div className="relative">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={t("Search product...", "Product search करें...")}
                    className="h-11 w-full rounded-xl border border-border bg-background pl-11 pr-3 text-sm font-bold outline-none ring-primary/20 transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4"
                  />
                </div>
              </label>

              <label className="min-w-0">
                <span className="mb-1.5 block text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">Type</span>
                <select
                  value={activeType}
                  onChange={(event) => {
                    setActiveType(event.target.value as "All" | ProductType);
                    setActiveBrand("All");
                    setActiveSeries("All");
                  }}
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm font-black outline-none focus:border-primary"
                >
                  {(["All", "On-Grid", "Off-Grid", "Hybrid"] as const).map((type) => (
                    <option key={type} value={type}>
                      {type} ({typeCounts[type]})
                    </option>
                  ))}
                </select>
              </label>

              <label className="min-w-0">
                <span className="mb-1.5 block text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">Company</span>
                <select
                  value={activeBrand}
                  onChange={(event) => {
                    setActiveBrand(event.target.value);
                    setActiveSeries("All");
                  }}
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm font-black outline-none focus:border-primary"
                >
                  {brandOptions.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </label>

              <label className="min-w-0">
                <span className="mb-1.5 block text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">Series</span>
                <select
                  value={activeSeries}
                  onChange={(event) => setActiveSeries(event.target.value)}
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm font-black outline-none focus:border-primary"
                >
                  {seriesOptions.map((series) => (
                    <option key={series} value={series}>
                      {series}
                    </option>
                  ))}
                </select>
              </label>

              <label className="min-w-0">
                <span className="mb-1.5 block text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">System</span>
                <select
                  value={activeBattery}
                  onChange={(event) => setActiveBattery(event.target.value)}
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm font-black outline-none focus:border-primary"
                >
                  <option>All</option>
                  <option>Grid-Tied</option>
                  <option>Lead Acid</option>
                  <option>Lithium</option>
                </select>
              </label>

              <label className="min-w-0">
                <span className="mb-1.5 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">
                  <SlidersHorizontal className="h-3 w-3 text-primary" />
                  Sort
                </span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm font-black outline-none focus:border-primary"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price Low to High</option>
                  <option value="price-high">Price High to Low</option>
                  <option value="capacity">Capacity</option>
                </select>
              </label>

              <div className="flex min-w-0 gap-2 md:col-span-2 xl:col-span-1 xl:self-end">
                <div className="flex h-11 min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-gray-950 px-3 text-sm font-black text-white">
                  <Filter className="h-4 w-4 text-primary" />
                  <span className="whitespace-nowrap">{visibleGroups.length}</span>
                </div>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                  title="Reset filters"
                  aria-label="Reset filters"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-16">
        <div className="container mx-auto px-4">
          <div>
              <AnimatedSection className="mb-5 md:mb-8">
                <span className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary md:mb-3 md:text-sm md:tracking-[0.2em]">
                  <SlidersHorizontal className="h-4 w-4" />
                  {t("Click product to view details", "Details देखने के लिए product click करें")}
                </span>
                <h2 className="text-2xl font-black md:text-5xl">{t("Solar Products", "सोलर products")}</h2>
              </AnimatedSection>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {visibleGroups.map((group, index) => {
                  const item = group.product;
                  const isGrouped = group.variants.length > 1;
                  const displaySeries = getDisplaySeries(group);
                  const priceRange = getPriceRange(group.variants);
                  const capacityRange = getCapacityRange(group.variants);

                  return (
                  <button
                    key={group.key}
                    type="button"
                    onClick={() => {
                      setSelectedGroupKey(group.key);
                      setSelectedProduct(item);
                      setDetailsOpen(true);
                    }}
                    className={`group overflow-hidden rounded-2xl border bg-white text-left shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_22px_55px_rgba(15,23,42,0.14)] ${
                      selectedGroupKey === group.key ? "border-primary ring-2 ring-primary/20 shadow-[0_22px_55px_rgba(249,115,22,0.16)]" : "border-border"
                    }`}
                  >
                    <div className="relative h-40 overflow-hidden bg-gray-950">
                      <img
                        src={getProductVisual(item)}
                        alt={`${displaySeries} ${item.capacity}`}
                        onError={(event) => {
                          useFallbackImage(event, item.image);
                        }}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/10 to-transparent" />
                      <div className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-black ${accentClasses[item.accent]}`}>
                        {item.type}
                      </div>
                      <div className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-black text-gray-950">
                        {isGrouped ? `${group.variants.length} variants` : `#${index + 1}`}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-white/60">{item.brand}</p>
                        <h3 className="mt-1 truncate text-base font-black leading-tight text-white">{displaySeries}</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">{isGrouped ? "Capacity Range" : "Capacity"}</p>
                          <p className="mt-1 break-words text-lg font-black leading-tight text-foreground">{isGrouped ? capacityRange : item.capacity}</p>
                        </div>
                        <p className="max-w-[9rem] shrink-0 rounded-xl bg-primary/10 px-3 py-2 text-right text-xs font-black leading-tight text-primary">{isGrouped ? priceRange : item.price}</p>
                      </div>
                      <p className="truncate text-sm font-bold leading-relaxed text-muted-foreground">{item.battery}</p>
                      {item.panelText && <p className="mt-3 inline-flex max-w-full truncate rounded-full bg-muted px-3 py-1 text-xs font-black text-muted-foreground">{item.panelText}</p>}
                      {isGrouped && <div className="mt-4 space-y-2">
                        {group.variants.slice(0, 3).map((variant) => (
                          <div key={variant.id} className="flex items-center justify-between gap-3 rounded-xl bg-muted px-3 py-2 text-xs font-black">
                            <span className="truncate text-foreground">{variant.capacity}</span>
                            <span className="shrink-0 text-primary">{variant.price}</span>
                          </div>
                        ))}
                        {group.variants.length > 3 && (
                          <p className="text-xs font-black text-muted-foreground">+{group.variants.length - 3} more variants</p>
                        )}
                      </div>}
                      <span className="mt-5 flex items-center justify-between rounded-xl border border-primary/10 bg-primary/5 px-4 py-3 text-sm font-black text-primary">
                        {isGrouped ? t("View Variants", "Variants देखें") : t("View Details", "डिटेल देखें")}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </button>
                  );
                })}
              </div>
          </div>
        </div>
      </section>

      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="max-h-[92vh] max-w-5xl overflow-hidden rounded-2xl p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>{selectedDisplaySeries}</DialogTitle>
            <DialogDescription>{selectedIsGrouped ? `${selectedGroupVariants.length} variants with capacity-wise prices` : `${selectedProduct.capacity} ${selectedProduct.battery}`}</DialogDescription>
          </DialogHeader>
          <div className="grid max-h-[92vh] lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[260px] overflow-hidden bg-gray-950 sm:min-h-[320px] lg:min-h-0 lg:h-[92vh]">
              <img
                src={getProductVisual(selectedProduct)}
                alt={selectedDisplaySeries}
                onError={(event) => {
                  useFallbackImage(event, selectedProduct.image);
                }}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/55 to-gray-950/5" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(249,115,22,0.35),transparent_34%)]" />
              <div className={`absolute left-4 top-4 z-20 rounded-full px-3 py-1.5 text-xs font-black shadow-lg sm:left-5 sm:top-5 sm:px-4 sm:text-sm ${accentClasses[selectedProduct.accent]}`}>
                {selectedProduct.type}
              </div>
              <div className="absolute bottom-5 left-4 right-4 z-20 text-white sm:bottom-6 sm:left-6 sm:right-6">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">{selectedProduct.brand}</p>
                <h3 className="mt-2 max-w-[13ch] text-[2rem] font-black leading-[1.05] sm:max-w-none sm:text-4xl lg:text-5xl">{selectedDisplaySeries}</h3>
                <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                  <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white/80 backdrop-blur">{selectedIsGrouped ? getCapacityRange(selectedGroupVariants) : selectedProduct.capacity}</span>
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-black text-white">{selectedIsGrouped ? getPriceRange(selectedGroupVariants) : selectedProduct.price}</span>
                </div>
              </div>
            </div>

            <div className="max-h-[calc(92vh-260px)] overflow-y-auto p-6 sm:max-h-[calc(92vh-320px)] sm:p-8 lg:max-h-[92vh]">
              <div className="mb-5 grid gap-3 sm:grid-cols-2">
                <div className="min-w-0 rounded-2xl bg-gray-950 p-4 text-white">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/50">{selectedIsGrouped ? "Price Range" : "Price"}</p>
                  <p className="mt-2 truncate text-[1.7rem] font-black leading-none text-primary sm:text-2xl">{selectedIsGrouped ? getPriceRange(selectedGroupVariants) : selectedProduct.price}</p>
                </div>
                <div className="min-w-0 rounded-2xl bg-muted p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">{selectedIsGrouped ? "Variants" : "Capacity"}</p>
                  <p className="mt-2 truncate text-[2rem] font-black leading-none sm:text-3xl">{selectedIsGrouped ? selectedGroupVariants.length : selectedProduct.capacity}</p>
                </div>
              </div>

              <div className="mb-5 grid gap-3">
                {[
                  { icon: selectedProduct.type === "On-Grid" ? Sun : BatteryCharging, label: selectedProduct.type === "On-Grid" ? "Configuration" : "Battery", value: selectedProduct.battery },
                  { icon: CalendarDays, label: "Validity", value: selectedProduct.validity },
                ].map((meta) => (
                  <div key={meta.label} className="flex items-center gap-3 rounded-2xl bg-muted/70 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary">
                      <meta.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">{meta.label}</p>
                      <p className="mt-1 truncate text-base font-black">{meta.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {selectedIsGrouped && <div className="mb-5 rounded-2xl border border-border p-4">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-foreground">Variant-Wise Prices</p>
                <div className="max-h-80 space-y-2 overflow-y-auto pr-1">
                  {[...selectedGroupVariants]
                    .sort((a, b) => getCapacityValue(a.capacity) - getCapacityValue(b.capacity) || getPriceValue(a.price) - getPriceValue(b.price))
                    .map((variant) => (
                      <div key={variant.id} className="grid gap-2 rounded-xl bg-muted/70 p-3 sm:grid-cols-[110px_minmax(0,1fr)_110px] sm:items-center">
                        <p className="text-sm font-black text-foreground">{variant.capacity}</p>
                        <p className="min-w-0 truncate text-sm font-bold text-muted-foreground">{variant.panelText || variant.battery}</p>
                        <p className="text-sm font-black text-primary sm:text-right">{variant.price}</p>
                      </div>
                    ))}
                </div>
              </div>}

              <div className="rounded-2xl border border-border p-4">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-foreground">Included / Notes</p>
                <div className="space-y-2.5">
                  {[
                    selectedProduct.panelText || "Customized solar module layout after site survey",
                    selectedProduct.type === "On-Grid" && selectedProduct.validity.includes("25 May") ? "Rates applicable for partner projects only" : "GST and transportation included in Lucknow only",
                    "Standard back height up to 7 feet with normal structure",
                    "Final quotation depends on site conditions and selected structure",
                  ].map((line) => (
                    <p key={line} className="flex gap-2 text-sm font-semibold leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a href="tel:+918433284427" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-black text-primary-foreground hover:opacity-90">
                  <Phone className="h-4 w-4" />
                  {t("Call Quote", "Quote Call")}
                </a>
                <Link to="/installation" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-5 py-3 text-sm font-black text-primary hover:bg-primary/5">
                  {t("Book Survey", "Survey Book")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <section className="bg-gray-950 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: Layers3, label: String(products.length), sub: "Listed package variants" },
              { icon: Sun, label: String(onGridProducts.length), sub: "On-grid company-wise rates" },
              { icon: ShieldCheck, label: "UTL", sub: "Off-grid Sigma range" },
              { icon: BatteryCharging, label: "Lead + Lithium", sub: "Battery options" },
            ].map((item) => (
              <div key={item.sub} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <item.icon className="mb-5 h-8 w-8 text-primary" />
                <p className="text-3xl font-black">{item.label}</p>
                <p className="mt-2 text-sm font-bold text-white/60">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
