import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ClipboardCheck, PenTool, Wrench, Zap, Phone, ArrowRight, FileText, HelpCircle, CheckCircle, Award, Star, IndianRupee, Sun } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import subsidyImg from "@/assets/solar_subsidy_gov_1772175258947.png";

const HowItWorks = () => {
  const { t } = useLanguage();
  const [activeHero, setActiveHero] = useState(0);

  const steps = [
    { num: "01", icon: Phone, title: t("Contact Us & Book Free Consultation", "हमसे संपर्क करें और मुफ्त परामर्श बुक करें"), desc: t("Call us at +91 8433284427 or fill the online form. Our expert will schedule a free consultation to understand your energy needs, budget, and property details.", "हमें +91 8433284427 पर कॉल करें या ऑनलाइन फॉर्म भरें। हमारे विशेषज्ञ आपकी ऊर्जा ज़रूरतों, बजट और संपत्ति विवरण को समझने के लिए निःशुल्क परामर्श शेड्यूल करेंगे।"), color: "bg-blue-500" },
    { num: "02", icon: ClipboardCheck, title: t("Free Site Survey & Assessment", "निःशुल्क साइट सर्वे और मूल्यांकन"), desc: t("Our certified technicians visit your property to assess roof area (1KW needs ~60 sq.ft shadow-free area), structural strength, electrical setup, and solar exposure.", "हमारे प्रमाणित तकनीशियन आपकी संपत्ति का निरीक्षण करते हैं — छत का क्षेत्र (1KW के लिए ~60 वर्ग फीट), संरचनात्मक मजबूती, बिजली सेटअप और सोलर एक्सपोज़र।"), color: "bg-purple-500" },
    { num: "03", icon: PenTool, title: t("Custom Design & Transparent Quote", "कस्टम डिज़ाइन और पारदर्शी कोटेशन"), desc: t("We design a customized solar system with optimal panel placement. You get a detailed quotation with equipment specs, the latest Product page rates, savings estimate, and ROI calculation.", "हम इष्टतम पैनल प्लेसमेंट के साथ अनुकूलित सोलर सिस्टम डिज़ाइन करते हैं। आपको उपकरण विनिर्देश, नवीनतम प्रोडक्ट पेज रेट, बचत अनुमान और ROI गणना के साथ विस्तृत कोटेशन मिलता है।"), color: "bg-orange-500" },
    { num: "04", icon: FileText, title: t("Government Subsidy Application", "सरकारी सब्सिडी आवेदन"), desc: t("We handle all PM Surya Ghar Yojana paperwork. Subsidies: 1KW = ₹45,000 | 2KW = ₹90,000 | 3KW+ = ₹1,08,000. Easy bank EMI options also available from ₹1,100 down payment.", "हम पूरा पीएम सूर्य घर योजना कागज़ी काम संभालते हैं। सब्सिडी: 1KW = ₹45,000 | 2KW = ₹90,000 | 3KW+ = ₹1,08,000। ₹1,100 डाउन पेमेंट से आसान बैंक EMI विकल्प भी उपलब्ध।"), color: "bg-green-500" },
    { num: "05", icon: Wrench, title: t("Professional Installation", "पेशेवर इंस्टॉलेशन"), desc: t("Our certified team installs your system using top-quality equipment from brands like Polycab, Adani, Tata, Waaree, Luminous. Installation typically takes 1-3 days depending on system size.", "हमारी प्रमाणित टीम Polycab, Adani, Tata, Waaree, Luminous जैसे शीर्ष ब्रांडों के उपकरणों से आपका सिस्टम इंस्टॉल करती है। सिस्टम के आकार के आधार पर इंस्टॉलेशन में 1-3 दिन लगते हैं।"), color: "bg-yellow-500" },
    { num: "06", icon: Zap, title: t("Testing, Grid Connection & Handover", "परीक्षण, ग्रिड कनेक्शन और हस्तांतरण"), desc: t("We test the entire system, connect to the grid for net metering, install the bidirectional meter, and hand over with complete documentation and a 25-year warranty.", "हम पूरे सिस्टम का परीक्षण करते हैं, नेट मीटरिंग के लिए ग्रिड से जोड़ते हैं, बाइडायरेक्शनल मीटर लगाते हैं, और पूर्ण दस्तावेज़ और 25 वर्ष की वारंटी के साथ हस्तांतरण करते हैं।"), color: "bg-primary" },
  ];

  const subsidyTable = [
    { capacity: "1 KW", central: "₹30,000", state: "₹15,000", total: "₹45,000", saving: "₹1,000/mo", area: "70 Sq.Ft.", payback: "30 months" },
    { capacity: "2 KW", central: "₹60,000", state: "₹30,000", total: "₹90,000", saving: "₹2,000/mo", area: "140 Sq.Ft.", payback: "30 months" },
    { capacity: "3 KW", central: "₹78,000", state: "₹30,000", total: "₹1,08,000", saving: "₹3,000/mo", area: "210 Sq.Ft.", payback: "36 months" },
    { capacity: "5 KW", central: "₹78,000", state: "₹30,000", total: "₹1,08,000", saving: "₹5,000/mo", area: "350 Sq.Ft.", payback: "~4 years" },
    { capacity: "10 KW", central: "₹78,000", state: "₹30,000", total: "₹1,08,000", saving: "₹10,000/mo", area: "700 Sq.Ft.", payback: "~4 years" },
  ];

  const faqs = [
    { q: t("Where can I see the latest solar package prices?", "नवीनतम सोलर पैकेज कीमतें कहां देखें?"), a: t("Visit the Product page for the latest June 2026 hybrid, on-grid, and off-grid package prices. Final quotation is confirmed after site survey.", "जून 2026 के नवीनतम हाइब्रिड, ऑन-ग्रिड और ऑफ-ग्रिड पैकेज कीमतों के लिए प्रोडक्ट पेज देखें। फाइनल कोटेशन साइट सर्वे के बाद तय होता है।") },
    { q: t("How much roof area is needed?", "कितनी छत की जगह चाहिए?"), a: t("About 60 sq.ft shadow-free area per 1KW. A 3KW system needs approximately 210 sq.ft.", "प्रति 1KW लगभग 60 वर्ग फीट छाया-मुक्त क्षेत्र। 3KW सिस्टम के लिए लगभग 210 वर्ग फीट चाहिए।") },
    { q: t("What is net metering?", "नेट मीटरिंग क्या है?"), a: t("Net metering allows you to sell excess solar electricity back to the grid, reducing your electricity bill. A bidirectional meter tracks both import and export.", "नेट मीटरिंग आपको अतिरिक्त सोलर बिजली ग्रिड को वापस बेचने की सुविधा देता है। एक बाइडायरेक्शनल मीटर आयात और निर्यात दोनों को ट्रैक करता है।") },
    { q: t("Can I get solar on EMI?", "क्या मैं EMI पर सोलर ले सकता हूँ?"), a: t("Yes! We offer easy bank EMI options starting from just ₹1,100 down payment. Government bank financing available.", "हाँ! हम सिर्फ ₹1,100 डाउन पेमेंट से शुरू होने वाले आसान बैंक EMI विकल्प प्रदान करते हैं।") },
  ];

  const heroSlides = [
    {
      kicker: t("Simple Process", "सरल प्रक्रिया"),
      title: t("How It Works", "यह कैसे काम करता है"),
      subtitle: t("Simple, transparent, 6-step process from consultation to commissioning. We handle everything!", "परामर्श से कमीशनिंग तक सरल, पारदर्शी, 6-चरणीय प्रक्रिया। हम सब कुछ संभालते हैं!"),
      image: subsidyImg,
      range: "6 Steps",
      chips: [t("Free Consultation", "निःशुल्क परामर्श"), t("End-to-End Support", "सम्पूर्ण सहायता"), t("Site Survey", "साइट सर्वे")],
      visualTitle: t("Solar Journey", "सोलर यात्रा"),
      visualItems: steps.slice(0, 3),
      gradient: "from-slate-950 via-gray-950 to-blue-950",
    },
    {
      kicker: t("Free Site Survey", "निःशुल्क साइट सर्वे"),
      title: t("Survey & Assessment", "Survey और Assessment"),
      subtitle: t("We check roof area, shadow-free space, structure strength, electricity load, and solar exposure before quote.", "Quote से पहले roof area, shadow-free space, structure strength, load और solar exposure check करते हैं।"),
      image: subsidyImg,
      range: "60 Sq.Ft / KW",
      chips: [t("Roof Check", "Roof Check"), t("Load Study", "Load Study"), t("Free Visit", "Free Visit")],
      visualTitle: t("Before Quote", "Quote से पहले"),
      visualItems: steps.slice(1, 4),
      gradient: "from-emerald-950 via-slate-950 to-gray-950",
    },
    {
      kicker: t("Subsidy Support", "सब्सिडी सहायता"),
      title: t("PM Surya Ghar Help", "PM Surya Ghar Help"),
      subtitle: t("We handle subsidy paperwork, net metering coordination, and documentation for eligible residential projects.", "Eligible residential projects के लिए subsidy paperwork, net metering और documentation हम handle करते हैं।"),
      image: subsidyImg,
      range: "Up to ₹1.08L",
      chips: [t("Paperwork", "Paperwork"), t("UPNEDA", "UPNEDA"), t("DISCOM", "DISCOM")],
      visualTitle: t("Documentation", "Documentation"),
      visualItems: steps.slice(3, 6),
      gradient: "from-orange-950 via-slate-950 to-green-950",
    },
    {
      kicker: t("Installation to Handover", "Installation से Handover"),
      title: t("Commissioning Made Easy", "Commissioning आसान"),
      subtitle: t("Certified installers complete mounting, wiring, inverter setup, testing, grid connection, and handover.", "Certified installers mounting, wiring, inverter setup, testing, grid connection और handover complete करते हैं।"),
      image: subsidyImg,
      range: "1-3 Days",
      chips: [t("Installation", "Installation"), t("Testing", "Testing"), t("Handover", "Handover")],
      visualTitle: t("Final Stage", "Final Stage"),
      visualItems: [steps[4], steps[5], steps[0]],
      gradient: "from-indigo-950 via-slate-950 to-zinc-950",
    },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="relative h-[350px] sm:h-[410px] lg:h-[500px] xl:h-[590px]">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.title}
              className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} transition-opacity duration-700 ${activeHero === index ? "opacity-100" : "opacity-0"}`}
              aria-hidden={activeHero !== index}
            >
              <img src={slide.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-24 mix-blend-screen" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(255,255,255,0.16),transparent_34%)]" />

              <div className="container relative z-10 mx-auto grid h-full grid-cols-1 items-center gap-6 px-4 md:grid-cols-[1fr_0.9fr]">
                <motion.div
                  initial={false}
                  animate={activeHero === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  transition={{ duration: 0.45 }}
                  className="max-w-3xl"
                >
                  <span className="mb-4 inline-block rounded-full border border-primary/35 bg-primary/20 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary md:text-sm">
                    {slide.kicker}
                  </span>
                  <h1 className="text-4xl font-heading font-black leading-[0.95] md:text-6xl xl:text-7xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-white/82 md:text-xl">
                    {slide.subtitle}
                  </p>
                  <div className="mt-5 inline-flex rounded-xl border border-white/35 bg-white/10 px-5 py-2 text-2xl font-black shadow-[0_0_18px_rgba(255,255,255,0.18)] backdrop-blur md:text-4xl">
                    {slide.range}
                  </div>
                  <div className="mt-5 hidden flex-wrap gap-3 sm:flex">
                    {slide.chips.map((chip) => (
                      <span key={chip} className="rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold text-white/90 backdrop-blur">
                        {chip}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <div className="hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl md:block">
                  <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-primary">{slide.visualTitle}</p>
                  <div className="space-y-3">
                    {slide.visualItems.map((item) => (
                      <div key={`${slide.title}-${item.num}`} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-black uppercase tracking-[0.16em] text-white/50">{t("Step", "चरण")} {item.num}</p>
                          <p className="truncate text-lg font-black text-white">{item.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActiveHero(index)}
                className={`h-3 w-3 rounded-full border-2 border-white transition-all ${activeHero === index ? "bg-transparent ring-2 ring-white/70" : "bg-white"}`}
                aria-label={`Show process banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Steps - Interactive Circular Journey */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.05),_transparent_50%)] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-20">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">
              {t("The Journey", "यात्रा")}
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-4">
              {t("6 Simple Steps to Solar", "सोलर के 6 आसान कदम")}
            </h2>
          </AnimatedSection>

          {/* Desktop Side-by-Side Journey View */}
          <div className="hidden lg:flex items-center justify-between gap-12 max-w-7xl mx-auto min-h-[700px] relative">
            {/* Left Column (Steps 1, 3, 5) */}
            <div className="flex flex-col gap-8 flex-1">
              {[steps[0], steps[2], steps[4]].map((s, i) => (
                <AnimatedSection key={i} delay={i * 0.1} direction="left">
                  <div className="group relative bg-white rounded-[2rem] p-8 border border-primary/5 hover:border-primary/20 shadow-xl transition-all duration-500 hover:-translate-x-2">
                    <div className="flex gap-6 items-start">
                      <div className="shrink-0 flex flex-col items-center gap-2">
                        <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                          <s.icon className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-[10px] font-black text-primary uppercase tracking-wider">{t("Step", "चरण")} {s.num}</span>
                      </div>
                      <div>
                        <h3 className="font-heading font-black text-xl mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed font-medium">{s.desc}</p>
                      </div>
                    </div>
                    {/* Dash Connector to Hub */}
                    <div className="absolute top-1/2 -right-12 w-12 h-px border-t-2 border-dashed border-primary/20 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Central Hub */}
            <div className="shrink-0 relative z-10 px-4">
              <div className="w-64 h-64 rounded-full bg-primary flex flex-col items-center justify-center text-center p-8 shadow-[0_0_50px_rgba(249,115,22,0.4)] border-4 border-white animate-float">
                <Sun className="w-12 h-12 text-white mb-4 animate-[spin_15s_linear_infinite]" />
                <p className="text-xl font-heading font-black text-white leading-tight uppercase tracking-tighter">
                  {t("The Solar", "सोलर")}<br />{t("Journey", "यात्रा")}
                </p>
                <div className="absolute inset-2 rounded-full border border-white/20 border-dashed animate-[spin_30s_linear_infinite]" />
              </div>
            </div>

            {/* Right Column (Steps 2, 4, 6) */}
            <div className="flex flex-col gap-8 flex-1">
              {[steps[1], steps[3], steps[5]].map((s, i) => (
                <AnimatedSection key={i} delay={i * 0.1} direction="right">
                  <div className="group relative bg-white rounded-[2rem] p-8 border border-primary/5 hover:border-primary/20 shadow-xl transition-all duration-500 hover:translate-x-2">
                    <div className="flex gap-6 items-start">
                      <div className="shrink-0 flex flex-col items-center gap-2">
                        <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                          <s.icon className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-[10px] font-black text-primary uppercase tracking-wider">{t("Step", "चरण")} {s.num}</span>
                      </div>
                      <div>
                        <h3 className="font-heading font-black text-xl mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed font-medium">{s.desc}</p>
                      </div>
                    </div>
                    {/* Dash Connector to Hub */}
                    <div className="absolute top-1/2 -left-12 w-12 h-px border-t-2 border-dashed border-primary/20 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet List View */}
          <div className="lg:hidden max-w-2xl mx-auto space-y-6">
            {steps.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="up">
                <div className="group flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:items-start text-center sm:text-left bg-card rounded-[2rem] p-6 sm:p-7 border border-primary/5 hover:border-primary/20 shadow-lg transition-all duration-500">
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <s.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs font-black text-primary uppercase tracking-wider">{t("Step", "चरण")} {s.num}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-xl mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-medium">{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidy Info */}
      <section className="py-24 bg-[#FDF7F2] overflow-hidden relative">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" className="relative w-full max-w-2xl mx-auto lg:mx-0">
              <div className="aspect-video rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white">
                <img src={subsidyImg} alt="Government Subsidy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-[2rem] sm:rounded-[2.5rem]" />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 bg-white p-4 sm:p-6 rounded-3xl sm:rounded-[2rem] shadow-2xl border border-primary/10 animate-float z-10">
                <p className="text-3xl sm:text-4xl font-heading font-black text-primary mb-1">₹1.08L</p>
                <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase opacity-60">{t("Max Subsidy", "अधिकतम सब्सिडी")}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">{t("Government Scheme", "सरकारी योजना")}</span>
              <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 leading-tight">
                {t("PM Surya Ghar Yojana", "पीएम सूर्य घर योजना")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 font-medium leading-relaxed">
                {t("Government subsidy available up to ₹1,08,000 for residential consumers. We handle the entire application process for you.", "आवासीय उपभोक्ताओं के लिए ₹1,08,000 तक की सरकारी सब्सिडी उपलब्ध है। हम आपके लिए पूरी आवेदन प्रक्रिया संभालते हैं।")}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "1 KW", value: "₹45,000" },
                  { label: "2 KW", value: "₹90,000" },
                  { label: "3 KW+", value: "₹1,08,000" },
                  { label: t("Payback", "वापसी"), value: "30-36 Mo" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                    <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-2xl font-heading font-black text-primary">{stat.value}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Subsidy Table */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">{t("Subsidy Details", "सब्सिडी विवरण")}</span>
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-4">
              {t("Subsidy Breakdown Table", "सब्सिडी विवरण तालिका")}
            </h2>
            <p className="text-muted-foreground font-medium max-w-2xl mx-auto">
              {t("Transparent financial breakdown of government incentives for different solar capacities.", "विभिन्न सोलर क्षमताओं के लिए सरकारी प्रोत्साहन का पारदर्शी वित्तीय विवरण।")}
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-6xl mx-auto overflow-hidden">
              {/* Desktop Table */}
              <div className="hidden lg:block rounded-[2.5rem] bg-gray-900 shadow-2xl overflow-hidden border border-white/10">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-primary">{t("System Capacity", "सिस्टम क्षमता")}</th>
                      <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-white/60">{t("Subsidy (Central + State)", "सब्सिडी (केंद्र + राज्य)")}</th>
                      <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-white/60">{t("Total Benefit", "कुल लाभ")}</th>
                      <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-white/60">{t("Monthly Saving", "मासिक बचत")}</th>
                      <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-white/60">{t("Roof Area", "छत क्षेत्र")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {subsidyTable.map((r, i) => (
                      <tr key={i} className={`group hover:bg-primary/5 transition-colors duration-300 ${r.capacity === "3 KW" || r.capacity === "5 KW" ? "bg-primary/3" : ""}`}>
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black group-hover:scale-110 transition-transform">
                              {r.capacity.split(' ')[0]}
                            </div>
                            <span className="font-heading font-black text-xl text-white">{r.capacity}</span>
                            {(r.capacity === "3 KW" || r.capacity === "5 KW") && (
                              <span className="ml-2 text-[10px] font-black uppercase tracking-widest bg-primary text-gray-900 px-2.5 py-1 rounded-full">{t("Popular", "लोकप्रिय")}</span>
                            )}
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <p className="text-white/80 font-medium text-sm">{r.central} <span className="text-white/40 mx-1">+</span> {r.state}</p>
                        </td>
                        <td className="px-8 py-6">
                          <p className="text-green-400 font-black text-xl">{r.total}</p>
                        </td>
                        <td className="px-8 py-6">
                          <p className="text-primary font-black text-lg">{r.saving}</p>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-2 text-white/60 font-medium">
                            <span className="text-sm">{r.area}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-4">
                {subsidyTable.map((r, i) => (
                  <div key={i} className={`rounded-3xl p-6 border ${r.capacity === "3 KW" || r.capacity === "5 KW" ? "bg-primary/5 border-primary/30" : "bg-card border-primary/5 shadow-lg"}`}>
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-gray-900 font-black text-lg">
                          {r.capacity.split(' ')[0]}
                        </div>
                        <h3 className="font-heading font-black text-2xl">{r.capacity}</h3>
                      </div>
                      {(r.capacity === "3 KW" || r.capacity === "5 KW") && (
                        <span className="text-[10px] font-black uppercase tracking-widest bg-primary text-gray-900 px-3 py-1.5 rounded-full">{t("Most Popular", "सबसे लोकप्रिय")}</span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{t("Total Subsidy", "कुल सब्सिडी")}</p>
                        <p className="text-green-600 font-black text-xl">{r.total}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{t("Monthly Saving", "मासिक बचत")}</p>
                        <p className="text-primary font-black text-xl">{r.saving}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{t("Roof Area", "छत क्षेत्र")}</p>
                        <p className="font-bold">{r.area}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{t("Payback", "वापसी")}</p>
                        <p className="font-bold">{r.payback}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 p-6 rounded-3xl bg-muted/30 border border-primary/5 text-center max-w-3xl mx-auto">
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                <Star className="inline w-4 h-4 text-primary mr-2 -mt-1" />
                {t("* See the Product page for the latest June 2026 package rates. High-quality panels and tier-1 inverters guaranteed. Conditions apply.", "* जून 2026 के नवीनतम पैकेज रेट के लिए प्रोडक्ट पेज देखें। उच्च गुणवत्ता वाले पैनल और टियर-1 इनवर्टर की गारंटी। शर्तें लागू।")}
              </p>
              <Link to="/product" className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-black text-primary-foreground hover:opacity-90 transition-opacity">
                {t("View Product Prices", "प्रोडक्ट कीमतें देखें")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#FDF7F2]">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">{t("FAQs", "सामान्य प्रश्न")}</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">
              {t("Frequently Asked Questions", "अक्सर पूछे जाने वाले प्रश्न")}
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <details className="group bg-white rounded-2xl border border-primary/10 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden">
                  <summary className="flex items-center justify-between p-6 font-heading font-black list-none gap-4">
                    <span className="flex items-center gap-3 text-lg">
                      <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                      {f.q}
                    </span>
                    <ArrowRight className="w-5 h-5 text-primary shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="px-6 pb-6 text-sm text-muted-foreground font-medium leading-relaxed pl-14">{f.a}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-gradient-to-r from-primary/10 via-orange-50 to-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-primary/10">
            {[
              { icon: Award, value: "UPNEDA", label: t("Empaneled Firm", "पैनलबद्ध फर्म"), sub: t("Government Certified", "सरकारी प्रमाणित") },
              { icon: IndianRupee, value: "₹1.08L", label: t("Max Subsidy Available", "अधिकतम सब्सिडी"), sub: t("PM Surya Ghar Yojana", "पीएम सूर्य घर योजना") },
              { icon: Star, value: "2000+", label: t("Happy Customers", "खुश ग्राहक"), sub: t("Across Uttar Pradesh", "उत्तर प्रदेश भर में") },
            ].map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-5 px-6 sm:px-10 py-6 sm:py-8 flex-1 justify-center group hover:bg-white/40 transition-colors duration-300">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-black text-foreground leading-none mb-0.5">{item.value}</p>
                  <p className="text-xs font-black uppercase tracking-widest text-primary">{item.label}</p>
                  <p className="text-[11px] text-muted-foreground font-medium mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -mr-64 -mt-64" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[120px] -ml-64 -mb-64" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-7xl font-heading font-black mb-8 leading-tight">
              {t("Start Your Solar", "आज ही अपनी")} <br />
              <span className="text-primary">{t("Journey Today!", "सोलर यात्रा शुरू करें!")}</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/installation" className="inline-flex items-center gap-3 rounded-full bg-primary text-gray-900 px-10 py-5 font-black text-lg hover:bg-white transition-all shadow-[0_10px_30px_rgba(249,115,22,0.3)]">
                {t("Request Installation", "इंस्टॉलेशन अनुरोध")} <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+918433284427" className="inline-flex items-center gap-3 rounded-full border-2 border-white/20 px-10 py-5 font-black text-lg hover:bg-white/10 transition-all">
                <Phone className="w-5 h-5" /> +91 8433284427
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
