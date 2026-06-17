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
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sun,
  X,
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

type ProductType = "Off-Grid" | "Hybrid";

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

const products = [...offGridProducts, ...hybridProducts];

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
  const [activeSeries, setActiveSeries] = useState("All");
  const [activeBattery, setActiveBattery] = useState("All");
  const [sortBy, setSortBy] = useState("recommended");
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<SolarProduct>(products[0]);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const getBatteryFamily = (battery: string) => {
    if (battery.toLowerCase().includes("lithium")) return "Lithium";
    if (battery.toLowerCase().includes("lead")) return "Lead Acid";
    return "Other";
  };

  const getPriceValue = (price: string) => Number(price.replace(/[₹,]/g, ""));

  const seriesOptions = useMemo(() => {
    const filtered = activeType === "All" ? products : products.filter((item) => item.type === activeType);
    return ["All", ...Array.from(new Set(filtered.map((item) => item.series)))];
  }, [activeType]);

  const visibleProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const filtered = products.filter((item) => {
      const typeMatch = activeType === "All" || item.type === activeType;
      const seriesMatch = activeSeries === "All" || item.series === activeSeries;
      const batteryMatch = activeBattery === "All" || getBatteryFamily(item.battery) === activeBattery;
      const text = `${item.type} ${item.series} ${item.brand} ${item.capacity} ${item.battery} ${item.price}`.toLowerCase();
      return typeMatch && seriesMatch && batteryMatch && (!normalized || text.includes(normalized));
    });
    return [...filtered].sort((a, b) => {
      if (sortBy === "price-low") return getPriceValue(a.price) - getPriceValue(b.price);
      if (sortBy === "price-high") return getPriceValue(b.price) - getPriceValue(a.price);
      if (sortBy === "capacity") return parseFloat(a.capacity) - parseFloat(b.capacity);
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id);
    });
  }, [activeType, activeSeries, activeBattery, query, sortBy]);

  useEffect(() => {
    if (visibleProducts.length && !visibleProducts.some((item) => item.id === selectedProduct.id)) {
      setSelectedProduct(visibleProducts[0]);
    }
  }, [selectedProduct.id, visibleProducts]);

  const resetFilters = () => {
    setActiveType("All");
    setActiveSeries("All");
    setActiveBattery("All");
    setSortBy("recommended");
    setQuery("");
  };

  const typeCounts = {
    All: products.length,
    "Off-Grid": offGridProducts.length,
    Hybrid: hybridProducts.length,
  };

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-gray-950 pt-32 text-white">
        <div className="absolute inset-0">
          <img src={rooftopImage} alt="Solar products" className="h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/45" />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-4 py-2 text-sm font-bold text-primary">
                <CalendarDays className="h-4 w-4" />
                {t("Latest Off-Grid and Hybrid packages", "नवीनतम ऑफ-ग्रिड और हाइब्रिड पैकेज")}
              </div>
              <h1 className="mb-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                {t("Solar Product Catalogue", "सोलर प्रोडक्ट कैटलॉग")}
              </h1>
              <p className="mb-8 max-w-2xl text-lg font-medium leading-relaxed text-white/78 md:text-xl">
                {t(
                  "Every package from the latest price lists is shown as a searchable product. Click any product to view full details, inclusions, validity, and quote actions.",
                  "नवीनतम मूल्य सूची का हर पैकेज searchable product की तरह दिखाया गया है। पूरी डिटेल, validity और quote action देखने के लिए किसी भी product पर क्लिक करें।"
                )}
              </p>
              <div className="grid max-w-2xl gap-3 sm:grid-cols-3">
                {[
                  { label: "Total Variants", value: products.length },
                  { label: "Off-Grid", value: offGridProducts.length },
                  { label: "Hybrid", value: hybridProducts.length },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                    <p className="text-3xl font-black text-primary">{stat.value}</p>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="sticky top-24 z-30 border-b border-border/70 bg-background/95 py-3 backdrop-blur-xl">
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
                  <span>{visibleProducts.length}</span>
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

            <div className={`${filtersOpen ? "mt-4 grid" : "hidden"} gap-3 md:grid md:grid-cols-2 md:gap-3 xl:grid-cols-[minmax(280px,1.35fr)_150px_minmax(220px,1fr)_150px_180px_220px] xl:items-end`}>
              <label className="hidden min-w-0 md:block">
                <span className="mb-1.5 block text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">Search</span>
                <div className="relative">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={t("Search 3.8 KW, lithium, UTL...", "3.8 KW, lithium, UTL search करें...")}
                    className="h-11 w-full rounded-xl border border-border bg-background pl-12 pr-4 text-sm font-bold outline-none ring-primary/20 transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4"
                  />
                </div>
              </label>

              <label>
                <span className="mb-1.5 block text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">Type</span>
                <select
                  value={activeType}
                  onChange={(event) => {
                    setActiveType(event.target.value as "All" | ProductType);
                    setActiveSeries("All");
                  }}
                  className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm font-black outline-none focus:border-primary"
                >
                  {(["All", "Off-Grid", "Hybrid"] as const).map((type) => (
                    <option key={type} value={type}>
                      {type} ({typeCounts[type]})
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span className="mb-1.5 block text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">Series</span>
                <select
                  value={activeSeries}
                  onChange={(event) => setActiveSeries(event.target.value)}
                  className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm font-black outline-none focus:border-primary"
                >
                  {seriesOptions.map((series) => (
                    <option key={series} value={series}>
                      {series}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span className="mb-1.5 block text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">Battery</span>
                <select
                  value={activeBattery}
                  onChange={(event) => setActiveBattery(event.target.value)}
                  className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm font-black outline-none focus:border-primary"
                >
                  <option>All</option>
                  <option>Lead Acid</option>
                  <option>Lithium</option>
                </select>
              </label>

              <label>
                <span className="mb-1.5 block text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">Sort</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm font-black outline-none focus:border-primary"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price Low to High</option>
                  <option value="price-high">Price High to Low</option>
                  <option value="capacity">Capacity</option>
                </select>
              </label>

              <div className="grid grid-cols-[1fr_auto] gap-2 md:col-span-2 xl:col-span-1 xl:self-end">
                <div className="flex h-11 items-center justify-center gap-2 rounded-xl bg-gray-950 px-4 text-sm font-black text-white">
                  <Filter className="h-4 w-4 text-primary" />
                  <span className="whitespace-nowrap">{visibleProducts.length} shown</span>
                </div>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border px-4 text-sm font-black text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  <X className="h-4 w-4" />
                  Reset
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
                <h2 className="text-2xl font-black md:text-5xl">{t("All Solar Packages", "सभी सोलर पैकेज")}</h2>
              </AnimatedSection>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {visibleProducts.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setSelectedProduct(item);
                      setDetailsOpen(true);
                    }}
                    className={`group overflow-hidden rounded-2xl border bg-white text-left shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_22px_55px_rgba(15,23,42,0.14)] ${
                      selectedProduct.id === item.id ? "border-primary ring-2 ring-primary/20 shadow-[0_22px_55px_rgba(249,115,22,0.16)]" : "border-border"
                    }`}
                  >
                    <div className="relative h-40 overflow-hidden bg-gray-950">
                      <img
                        src={getProductVisual(item)}
                        alt={`${item.series} ${item.capacity}`}
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
                        #{index + 1}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-white/60">{item.brand}</p>
                        <h3 className="mt-1 truncate text-base font-black leading-tight text-white">{item.series}</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">Capacity</p>
                          <p className="mt-1 text-2xl font-black leading-none text-foreground">{item.capacity}</p>
                        </div>
                        <p className="shrink-0 whitespace-nowrap rounded-xl bg-primary/10 px-3 py-2 text-base font-black text-primary">{item.price}</p>
                      </div>
                      <p className="truncate text-sm font-bold leading-relaxed text-muted-foreground">{item.battery}</p>
                      {item.panelText && <p className="mt-3 inline-flex max-w-full truncate rounded-full bg-muted px-3 py-1 text-xs font-black text-muted-foreground">{item.panelText}</p>}
                      <span className="mt-5 flex items-center justify-between rounded-xl border border-primary/10 bg-primary/5 px-4 py-3 text-sm font-black text-primary">
                        {t("View Details", "डिटेल देखें")}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
          </div>
        </div>
      </section>

      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="max-h-[92vh] max-w-5xl overflow-y-auto rounded-2xl p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>{selectedProduct.series}</DialogTitle>
            <DialogDescription>{selectedProduct.capacity} {selectedProduct.battery}</DialogDescription>
          </DialogHeader>
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[300px] overflow-hidden bg-gray-950 sm:min-h-[360px] lg:min-h-[620px]">
              <img
                src={getProductVisual(selectedProduct)}
                alt={selectedProduct.series}
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
                <h3 className="mt-2 max-w-[13ch] text-[2rem] font-black leading-[1.05] sm:max-w-none sm:text-4xl lg:text-5xl">{selectedProduct.series}</h3>
                <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                  <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white/80 backdrop-blur">{selectedProduct.capacity}</span>
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-black text-white">{selectedProduct.price}</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="mb-5 grid gap-3 sm:grid-cols-2">
                <div className="min-w-0 rounded-2xl bg-gray-950 p-4 text-white">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/50">Price</p>
                  <p className="mt-2 truncate text-[2rem] font-black leading-none text-primary sm:text-3xl">{selectedProduct.price}</p>
                </div>
                <div className="min-w-0 rounded-2xl bg-muted p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">Capacity</p>
                  <p className="mt-2 truncate text-[2rem] font-black leading-none sm:text-3xl">{selectedProduct.capacity}</p>
                </div>
              </div>

              <div className="mb-5 grid gap-3">
                {[
                  { icon: BatteryCharging, label: "Battery", value: selectedProduct.battery },
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

              <div className="rounded-2xl border border-border p-4">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-foreground">Included / Notes</p>
                <div className="space-y-2.5">
                  {[
                    selectedProduct.panelText || "Customized solar module layout after site survey",
                    "GST and transportation included in Lucknow only",
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
              { icon: Layers3, label: "56", sub: "Listed package variants" },
              { icon: ShieldCheck, label: "UTL", sub: "Off-grid Sigma range" },
              { icon: BatteryCharging, label: "Lead + Lithium", sub: "Battery options" },
              { icon: Sun, label: "June 2026", sub: "Latest effective price lists" },
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
