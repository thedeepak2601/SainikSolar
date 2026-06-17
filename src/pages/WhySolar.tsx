import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sun, TrendingUp, Leaf, Shield, Zap, AlertTriangle, IndianRupee,
  ArrowRight, Phone, XCircle, CheckCircle, ThermometerSun, Factory,
  BatteryCharging, X, Check
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import professionalHero from "@/assets/professional-hero.png";
import galleryRooftop from "@/assets/gallery-rooftop.jpg";
import galleryResidential from "@/assets/gallery-residential.jpg";

const WhySolar = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: IndianRupee, title: t("Save ₹3,000+/Month", "₹3,000+/माह बचाएं"), desc: t("A 3KW system saves approximately ₹3,000 per month on electricity bills. Over 25 years, that's ₹9,00,000+ in savings!", "3KW सिस्टम बिजली बिलों पर प्रति माह लगभग ₹3,000 बचाता है।"), color: "bg-green-500/10 text-green-600" },
    { icon: TrendingUp, title: t("High ROI — Payback in 30-48 Months", "उच्च ROI — 30-48 महीनों में वापसी"), desc: t("After the payback period, you enjoy FREE electricity for 22+ years. Solar is the best long-term investment for your home.", "पेबैक अवधि के बाद, आप 22+ वर्षों तक मुफ्त बिजली का आनंद लेते हैं।"), color: "bg-blue-500/10 text-blue-600" },
    { icon: Sun, title: t("Zero Electricity Bills", "शून्य बिजली बिल"), desc: t("With net metering, generate more electricity than you consume. Export surplus to the grid and earn credits.", "नेट मीटरिंग के साथ, अतिरिक्त बिजली ग्रिड को निर्यात करें और क्रेडिट अर्जित करें।"), color: "bg-yellow-500/10 text-yellow-600" },
    { icon: Shield, title: t("25-Year Warranty & 40-Year Life", "25 साल वारंटी और 40 साल जीवनकाल"), desc: t("Solar panels come with a 25-year performance warranty and can last 40+ years. Minimal maintenance required.", "सोलर पैनल 25 साल की प्रदर्शन वारंटी के साथ आते हैं और 40+ साल तक चल सकते हैं।"), color: "bg-purple-500/10 text-purple-600" },
    { icon: Leaf, title: t("Go Green — Save the Planet", "हरित बनें — ग्रह बचाएं"), desc: t("A 5KW solar system offsets about 7.5 tonnes of CO₂ per year. That's like planting 375 trees every year!", "5KW सोलर सिस्टम प्रति वर्ष लगभग 7.5 टन CO₂ कम करता है।"), color: "bg-emerald-500/10 text-emerald-600" },
    { icon: BatteryCharging, title: t("Energy Independence", "ऊर्जा स्वतंत्रता"), desc: t("Reduce dependence on the grid and rising electricity prices. Enjoy uninterrupted power even during outages.", "ग्रिड पर निर्भरता कम करें। बिजली कटौती के दौरान भी निर्बाध बिजली।"), color: "bg-orange-500/10 text-orange-600" },
  ];

  const withoutSolar = [
    { icon: AlertTriangle, title: t("Rising Bills", "बढ़ते बिल"), stat: "5–8%", unit: t("annual hike", "वार्षिक वृद्धि"), desc: t("You'll pay ₹15–30 Lakhs in electricity bills over 25 years.", "25 वर्षों में ₹15–30 लाख बिजली बिल।") },
    { icon: XCircle, title: t("Missed Subsidy", "सब्सिडी छूटना"), stat: "₹1.08L", unit: t("subsidy lost", "सब्सिडी खोई"), desc: t("PM Surya Ghar Yojana subsidy won't last forever.", "पीएम सूर्य घर योजना सब्सिडी हमेशा नहीं रहेगी।") },
    { icon: ThermometerSun, title: t("Power Cuts", "बिजली कटौती"), stat: "8–12h", unit: t("daily outages", "दैनिक कटौती"), desc: t("Frequent power cuts especially in UP summers.", "UP गर्मियों में बार-बार बिजली कटौती।") },
    { icon: Factory, title: t("CO₂ Damage", "CO₂ नुकसान"), stat: "7.5T", unit: t("CO₂/year", "CO₂/वर्ष"), desc: t("Conventional electricity from coal causes pollution and health issues.", "कोयले से बिजली — प्रदूषण और स्वास्थ्य समस्याएं।") },
    { icon: IndianRupee, title: t("Zero Returns", "शून्य रिटर्न"), stat: "₹0", unit: t("returns ever", "रिटर्न कभी नहीं"), desc: t("Electricity bills are pure expense — no asset, no return.", "बिजली बिल शुद्ध खर्च — कोई संपत्ति नहीं, कोई रिटर्न नहीं।") },
  ];

  const comparison = [
    { aspect: t("Monthly Cost", "मासिक लागत"), without: t("₹3,000–10,000+ bill", "₹3,000–10,000+ बिल"), withSolar: t("₹0 after payback", "पेबैक के बाद ₹0") },
    { aspect: t("25-Year Cost", "25 वर्ष लागत"), without: t("₹15–30 Lakhs wasted", "₹15–30 लाख बर्बाद"), withSolar: t("₹1.5–3 Lakhs (after subsidy)", "₹1.5–3 लाख (सब्सिडी बाद)") },
    { aspect: t("Power Backup", "पावर बैकअप"), without: t("Expensive inverter needed", "महंगा इन्वर्टर ज़रूरी"), withSolar: t("Free solar battery backup", "मुफ्त सोलर बैटरी बैकअप") },
    { aspect: t("Property Value", "संपत्ति मूल्य"), without: t("No increase", "कोई वृद्धि नहीं"), withSolar: t("Rises by 3–5%", "3–5% बढ़ जाता है") },
    { aspect: t("Environment", "पर्यावरण"), without: t("Carbon footprint grows", "कार्बन फुटप्रिंट बढ़ता है"), withSolar: t("7.5 tonnes CO₂ saved/year", "7.5 टन CO₂/वर्ष बचत") },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img src={professionalHero} alt="Why Solar" className="w-full h-full object-cover opacity-40 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-black tracking-[0.2em] uppercase mb-6">
                {t("The Smart Choice", "स्मार्ट विकल्प")}
              </span>
              <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 leading-tight">
                {t("Why Solar Energy?", "सोलर ऊर्जा क्यों?")}
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed font-medium mb-8">
                {t("Understand why solar is the smartest investment for your home, business, and the planet. See what you gain — and what you lose without it.", "समझें कि सोलर आपके घर, व्यवसाय और ग्रह के लिए सबसे समझदारी भरा निवेश क्यों है।")}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-bold">{t("Save ₹3,000+/Month", "₹3,000+/माह बचाएं")}</span>
                </div>
                <div className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-bold">{t("25-Year Warranty", "25 साल वारंटी")}</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits of Solar */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">{t("The Benefits", "फायदे")}</span>
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-4">
              <CheckCircle className="inline w-10 h-10 text-green-500 mr-3 -mt-1" />
              {t("Benefits of Going Solar", "सोलर अपनाने के फायदे")}
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="up">
                <div className="group bg-card rounded-[2.5rem] p-8 h-full border border-primary/5 hover:border-primary/20 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(249,115,22,0.08)] transition-all duration-500">
                  <div className={`w-16 h-16 rounded-2xl ${b.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <b.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-black text-xl mb-3 group-hover:text-primary transition-colors">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium">{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WITHOUT SOLAR ─── dark background with red-glow stat cards */}
      <section className="py-20 bg-gray-950 relative overflow-hidden text-white border-y border-red-500/10">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] -ml-40 -mt-40" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] -mr-40 -mb-40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end gap-5 justify-between border-l-4 border-red-600 pl-6">
              <div>
                <span className="text-red-500 font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">{t("The Real Cost of Delay", "देरी की वास्तविक लागत")}</span>
                <h2 className="text-3xl md:text-5xl font-heading font-black leading-tight uppercase">
                  {t("Without Solar", "बिना सोलर")}<br />
                  <span className="text-red-500">{t("What You Lose", "आप क्या खोते हैं")}</span>
                </h2>
              </div>
              <p className="text-white/40 text-sm max-w-sm font-medium leading-relaxed md:text-right">
                {t("Continuing with traditional grid power is more than just a bill — it's a growing financial drain.", "पारंपरिक ग्रिड बिजली का उपयोग करना केवल एक बिल नहीं है - यह एक बढ़ता हुआ वित्तीय बोझ है।")}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {withoutSolar.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08} direction="up">
                <div className="group h-full rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent border border-red-500/20 hover:border-red-500/50 hover:bg-red-950/20 p-6 flex flex-col gap-4 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(239,68,68,0.12)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/5 rounded-full blur-xl -mr-10 -mt-10" />
                  <div className="w-11 h-11 rounded-xl bg-red-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-500/30 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <p className="text-3xl font-heading font-black text-red-500 leading-none mb-1.5">{item.stat}</p>
                    <p className="text-[10px] font-black text-red-400/60 uppercase tracking-widest">{item.unit}</p>
                  </div>
                  <div className="mt-auto">
                    <p className="font-black text-white text-sm mb-1">{item.title}</p>
                    <p className="text-white/40 text-[11px] font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UNIFIED SAVINGS DASHBOARD ─── light background Comparison & Profit Engine */}
      <section className="py-20 bg-gray-50 text-gray-900 relative overflow-hidden flex items-center">
        {/* Professional Background Graphics */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(249,115,22,0.06),_transparent_50%)]" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_rgba(34,197,94,0.04),_transparent_40%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-3 block">
              {t("Financial Intelligence", "वित्तीय बुद्धिमत्ता")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-4 uppercase text-gray-900">
              {t("Solar vs No Solar", "सोलर vs बिना सोलर")}
            </h2>
            <p className="text-gray-500 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              {t("One single view to understand your energy future. Stop paying for power and start owning it.", "अपने ऊर्जा भविष्य को समझने के लिए एक ही नज़र। बिजली के लिए भुगतान करना बंद करें और उसके मालिक बनें।")}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch max-w-[1400px] mx-auto">

            {/* COLUMN 1: WITHOUT SOLAR (The Liability) */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left" className="h-full">
                <div className="h-full rounded-[2.5rem] bg-white border border-red-500/10 p-6 shadow-xl flex flex-col group hover:bg-red-50/30 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent" />
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-red-600/10 flex items-center justify-center shrink-0">
                      <X className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-black text-gray-900">{t("Without Solar", "बिना सोलर")}</h3>
                      <p className="text-red-600 font-black uppercase tracking-widest text-[9px]">{t("The Daily Liability", "दैनिक देनदारी")}</p>
                    </div>
                  </div>

                  <div className="space-y-3 flex-1">
                    {comparison.map((r, i) => (
                      <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-100 group-hover:border-red-500/10 transition-all duration-300">
                        <p className="text-gray-400 text-[8px] font-black uppercase tracking-widest mb-1">{r.aspect}</p>
                        <p className="text-red-700 font-bold text-xs leading-tight uppercase tracking-tight">{r.without}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* COLUMN 2: WITH SOLAR (The Asset) */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="up" className="h-full">
                <div className="h-full rounded-[2.5rem] bg-white border border-green-500/20 p-6 shadow-2xl flex flex-col group hover:bg-green-50/30 transition-all duration-500 relative overflow-hidden ring-1 ring-green-500/10">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent" />
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-black text-gray-900">{t("With Solar", "सोलर के साथ")}</h3>
                      <p className="text-green-600 font-black uppercase tracking-widest text-[9px]">{t("The Growing Asset", "बढ़ती संपत्ति")}</p>
                    </div>
                  </div>

                  <div className="space-y-3 flex-1">
                    {comparison.map((r, i) => (
                      <div key={i} className="p-4 rounded-xl bg-green-50/50 border border-green-500/10 group-hover:bg-green-50 transition-all duration-300">
                        <p className="text-green-600/40 text-[8px] font-black uppercase tracking-widest mb-1">{r.aspect}</p>
                        <p className="text-green-700 font-black text-sm leading-tight uppercase tracking-tight">{r.withSolar}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* COLUMN 3: PROFIT ENGINE (The Dashboard) */}
            <div className="lg:col-span-6">
              <AnimatedSection direction="right" className="h-full">
                <div className="h-full rounded-[3rem] bg-white border border-primary/20 p-8 shadow-2xl flex flex-col relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-56 h-56 bg-primary/5 rounded-full blur-[80px] -mr-28 -mt-28" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/5 rounded-full blur-[60px] -ml-20 -mb-20" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                          <TrendingUp className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-heading font-black text-gray-900">{t("The Profit Engine", "प्रॉफिट इंजन")}</h3>
                          <p className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">{t("Wealth Generation Dashboard", "धन सृजन डैशबोर्ड")}</p>
                        </div>
                      </div>
                      <div className="hidden md:block px-4 py-1.5 rounded-full border border-gray-100 bg-gray-50/50 backdrop-blur-md">
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">{t("Live ROI Calc", "लाइव ROI गणना")}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {[
                        { value: "3 KW", label: t("System", "सिस्टम"), color: "text-primary", bg: "bg-primary/5" },
                        { value: "₹3,000", label: t("Mo. Savings", "मा. बचत"), color: "text-green-600", bg: "bg-green-600/5" },
                        { value: "₹9L+", label: t("ROI Profit", "ROI लाभ"), color: "text-blue-600", bg: "bg-blue-600/5" },
                      ].map((s, i) => (
                        <div key={i} className={`${s.bg} border border-gray-50 rounded-[2rem] p-5 text-center transition-all duration-300 hover:-translate-y-1 shadow-sm`}>
                          <p className={`text-xl md:text-3xl font-heading font-black ${s.color} mb-1`}>{s.value}</p>
                          <p className="text-gray-400 text-[9px] font-black uppercase tracking-widest leading-tight">{s.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mb-8 p-6 rounded-[2rem] bg-gray-50 border border-gray-100 flex-1 relative flex flex-col justify-center">
                      <div className="flex items-center justify-between mb-6">
                        <p className="text-gray-400 text-[9px] font-black uppercase tracking-[0.4em]">{t("The High-Growth Path", "उच्च-विकास पथ")}</p>
                        <Zap className="w-4 h-4 text-primary animate-pulse" />
                      </div>
                      <div className="flex items-center w-full relative h-16">
                        <div className="absolute h-1 w-full bg-gray-200 rounded-full top-1/2 -translate-y-1/2" />
                        <div className="absolute h-1 w-[80%] bg-gradient-to-r from-primary via-green-500 to-green-600 rounded-full top-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(34,197,94,0.2)]" />

                        {[
                          { label: t("Start", "शुरू"), color: "bg-primary", glow: "shadow-primary/50", active: true },
                          { label: t("ROI", "ROI"), color: "bg-primary", glow: "shadow-primary/30", active: true },
                          { label: t("Profit", "लाभ"), color: "bg-green-500", glow: "shadow-green-500/50", active: true },
                          { label: t("Wealth", "धन"), color: "bg-green-600/20", glow: "", active: false }
                        ].map((step, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center relative group/step h-full justify-between">
                            <div className="flex items-center justify-center w-full relative">
                              <div className={`w-3.5 h-3.5 rounded-full z-10 transition-all duration-500 group-hover/step:scale-150 ${step.color} shadow-lg ${step.glow}`} />
                            </div>
                            <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-colors ${step.active ? (i < 2 ? "text-primary" : "text-green-600") : "text-gray-300"}`}>{step.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 items-center">
                      <Link to="/consultation" className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-3 rounded-[1.25rem] bg-primary text-white px-8 py-4 font-black text-base hover:bg-gray-900 transition-all shadow-[0_12px_30px_rgba(249,115,22,0.3)]">
                        {t("Secure Your Savings", "अपनी बचत सुरक्षित करें")} <ArrowRight className="w-5 h-5" />
                      </Link>
                      <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-[1.25rem] border border-gray-100">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                          <Phone className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-0.5">{t("Talk to Expert", "एक्सपर्ट से बात करें")}</p>
                          <a href="tel:+918433284427" className="text-sm text-gray-900 font-black hover:text-primary transition-colors">+91 8433284427</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -mr-64 -mt-64" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[120px] -ml-64 -mb-64" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 leading-tight">
              {t("Don't Wait —", "इंतज़ार न करें —")} <br />
              <span className="text-primary">{t("Every Day Without Solar is Money Wasted!", "सोलर के बिना हर दिन पैसा बर्बाद है!")}</span>
            </h2>
            <p className="opacity-80 mb-8 max-w-xl mx-auto text-lg font-medium leading-relaxed">
              {t("Government subsidy won't last forever. Install now and start saving from Day 1.", "सरकारी सब्सिडी हमेशा नहीं रहेगी। अभी इंस्टॉल करें और पहले दिन से बचत शुरू करें।")}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/installation" className="inline-flex items-center gap-3 rounded-full bg-primary text-gray-900 px-8 py-4 font-black text-lg hover:bg-white transition-all shadow-[0_10px_30px_rgba(249,115,22,0.3)]">
                {t("Request Installation", "इंस्टॉलेशन अनुरोध")} <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+918433284427" className="inline-flex items-center gap-3 rounded-full border-2 border-white/20 px-8 py-4 font-black text-lg hover:bg-white/10 transition-all">
                <Phone className="w-5 h-5" /> +91 8433284427
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default WhySolar;
