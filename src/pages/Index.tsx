import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, ArrowRight, Zap, Shield, TrendingUp, Home, Building2, Landmark, Factory, CheckCircle, Phone, Mail, MapPin, Search, FileText, Wrench, Power, ArrowUpRight, BatteryCharging, IndianRupee } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-solar.jpg";
import professionalHero from "@/assets/professional-hero.png";
import installationImage from "@/assets/solar-installation-pro.png";
import resiImage from "@/assets/gallery-residential.jpg";
import commImage from "@/assets/gallery-commercial.jpg";
import govtImage from "@/assets/gallery-ground.jpg";
import indusImage from "@/assets/gallery-industrial.jpg";

const NEW_HERO_IMAGE = professionalHero;
const WHY_CHOOSE_US_IMAGE = installationImage;

const Index = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Zap, title: t("Solar Panel Installation", "सोलर पैनल इंस्टॉलेशन"), desc: t("Complete end-to-end solar panel installation services for all property types", "सभी प्रकार की संपत्तियों के लिए संपूर्ण सोलर पैनल इंस्टॉलेशन सेवाएं") },
    { icon: Shield, title: t("Consultancy & Energy Audit", "परामर्श और ऊर्जा ऑडिट"), desc: t("Expert consultation to help you choose the optimal solar solution", "आपको सर्वोत्तम सोलर समाधान चुनने में मदद के लिए विशेषज्ञ परामर्श") },
    { icon: TrendingUp, title: t("Government Subsidy Support", "सरकारी सब्सिडी सहायता"), desc: t("Complete assistance with government subsidies and paperwork", "सरकारी सब्सिडी और कागज़ी कार्रवाई में पूर्ण सहायता") },
  ];

  const sectors = [
    { icon: Home, title: t("Residential", "आवासीय"), capacity: "1kW - 10kW", desc: t("Perfect solutions for homes", "घरों के लिए उत्तम समाधान"), img: resiImage },
    { icon: Building2, title: t("Commercial", "व्यावसायिक"), capacity: "10kW - 500kW", desc: t("Scalable solutions for businesses", "व्यापार के लिए विस्तारयोग्य समाधान"), img: commImage },
    { icon: Landmark, title: t("Government", "सरकारी"), capacity: "100kW - 5MW", desc: t("Large-scale installations", "बड़े पैमाने पर इंस्टॉलेशन"), img: govtImage },
    { icon: Factory, title: t("Industrial", "औद्योगिक"), capacity: "500kW - 10MW", desc: t("High-capacity systems", "उच्च क्षमता प्रणालियां"), img: indusImage },
  ];

  const steps = [
    { num: "01", icon: Search, title: t("Site Survey", "साइट सर्वे"), desc: t("Free technical assessment of your property", "आपकी संपत्ति का निःशुल्क तकनीकी मूल्यांकन") },
    { num: "02", icon: FileText, title: t("Design & Quote", "डिज़ाइन और कोटेशन"), desc: t("Customized system design and transparent pricing", "अनुकूलित सिस्टम डिज़ाइन और पारदर्शी मूल्य") },
    { num: "03", icon: Wrench, title: t("Installation", "इंस्टॉलेशन"), desc: t("Professional installation by certified technicians", "प्रमाणित तकनीशियनों द्वारा पेशेवर इंस्टॉलेशन") },
    { num: "04", icon: Power, title: t("Commissioning", "कमीशनिंग"), desc: t("Testing, grid connection, and handover", "परीक्षण, ग्रिड कनेक्शन और हस्तांतरण") },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={NEW_HERO_IMAGE} alt="Solar panels" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur px-4 py-2 mb-6 border border-primary/30">
              <Sun className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-background">{t("PM Surya Ghar Yojana — Up to ₹1,08,000 Subsidy", "पीएम सूर्य घर योजना — ₹1,08,000 तक सब्सिडी")}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-background leading-tight mb-6">
              {t("Change Your ", "अपने ")}<span className="text-gradient-solar">{t("Expenditure", "खर्चे")}</span>{t(" into Future Profit with Sainik Solar", " को भविष्य के मुनाफे में बदलें")}
            </h1>
            <p className="text-lg text-background/80 mb-8 max-w-lg">
              {t(
                "Comprehensive solar energy solutions from Sainik Solar (formerly Engineer Solar Wala). Consultancy, Installation & Services UPNEDA Empaneled Firm in Lucknow.",
                "सािनिक सोलर (पूर्व में इंजीनियर सोलर वाला) से व्यापक सोलर ऊर्जा समाधान। परामर्श, इंस्टॉलेशन और सेवाएं — लखनऊ में UPNEDA पैनलबद्ध फर्म।"
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/consultation"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground hover:opacity-90 transition-opacity shadow-lg text-lg"
              >
                {t("Book Free Consultation", "निःशुल्क परामर्श बुक करें")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background/10 backdrop-blur px-8 py-4 font-semibold text-background border border-background/20 hover:bg-background/20 transition-colors text-lg"
              >
                {t("View Latest Price List", "नई कीमतें देखें")}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating 3D Sun */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute right-10 top-1/4 w-40 h-40 opacity-20 hidden lg:block"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary solar-glow" />
        </motion.div>
      </section>

      {/* Premium Scrolling Subsidy Alert */}
      <div className="relative py-5 overflow-hidden border-y border-white/10 bg-gray-950">
        {/* Cinematic Gradient Backgrounds */}
        <div className="absolute inset-0 flex">
          <div className="flex-1 bg-gradient-to-r from-primary/20 via-orange-600/10 to-transparent" />
          <div className="flex-1 bg-gradient-to-l from-primary/20 via-orange-600/10 to-transparent" />
        </div>

        {/* Glassy Overlay */}
        <div className="absolute inset-0 backdrop-blur-3xl opacity-40" />

        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap items-center gap-16 relative z-10"
        >
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <div className="flex items-center gap-6">
                {/* Urgency Badge */}
                <div className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 flex items-center gap-2 group">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-[10px] font-black text-primary uppercase tracking-tighter">
                    {t("LIMITED TIME", "सीमित समय")}
                  </span>
                </div>

                <span className="text-white font-black uppercase tracking-[0.15em] text-sm md:text-lg flex items-center gap-4 drop-shadow-2xl">
                  {t("Government Solar Subsidy Available", "सरकारी सौर सब्सिडी उपलब्ध")}
                  <span className="text-primary/40">★</span>
                  {t("Switch Today Before Scheme Ends!", "योजना समाप्त होने से पहले आज ही बदलें!")}
                </span>

                {/* Elegant Separator Icon */}
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Latest Product Prices */}
      <section className="py-16 bg-white border-b border-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <AnimatedSection direction="left">
              <span className="text-primary font-black uppercase tracking-[0.25em] text-sm mb-3 block">
                {t("Latest June 2026 Price Update", "जून 2026 की नई कीमतें")}
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">
                {t("Transparent Solar Product Packages", "पारदर्शी सोलर प्रोडक्ट पैकेज")}
              </h2>
              <p className="text-muted-foreground text-lg font-medium leading-relaxed mb-6">
                {t(
                  "Hybrid packages are effective from 13 June to 28 June 2026. On-grid rates are effective from 25 May 2026 until the next revision.",
                  "हाइब्रिड पैकेज 13 जून से 28 जून 2026 तक प्रभावी हैं। ऑन-ग्रिड रेट 25 मई 2026 से अगले संशोधन तक लागू हैं।"
                )}
              </p>
              <Link to="/product" className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 font-black text-primary-foreground hover:opacity-90 transition-opacity">
                {t("Open Product Page", "प्रोडक्ट पेज खोलें")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: BatteryCharging, title: t("Hybrid Solar", "हाइब्रिड सोलर"), price: "from ₹2.40L", detail: t("Backup-ready systems", "बैकअप वाले सिस्टम") },
                  { icon: Sun, title: t("On-Grid Solar", "ऑन-ग्रिड सोलर"), price: "from ₹1.80L", detail: t("Partner project rates", "पार्टनर प्रोजेक्ट रेट") },
                  { icon: IndianRupee, title: t("Off-Grid Solar", "ऑफ-ग्रिड सोलर"), price: "from ₹1.85L", detail: t("UTL backup packages", "UTL बैकअप पैकेज") },
                ].map((item, i) => (
                  <AnimatedSection key={item.title} delay={i * 0.08} direction="up">
                    <div className="h-full rounded-2xl border border-primary/10 bg-card p-5 shadow-sm hover:shadow-xl transition-shadow">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-heading font-black text-xl mb-2">{item.title}</h3>
                      <p className="text-2xl font-black text-primary mb-2">{item.price}</p>
                      <p className="text-sm font-semibold text-muted-foreground">{item.detail}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
              <Link to="/product" className="group flex items-center justify-between gap-5 rounded-2xl border border-primary/10 bg-gray-950 p-5 text-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-primary">
                    <BatteryCharging className="h-7 w-7" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">{t("Full Catalogue", "पूरा कैटलॉग")}</p>
                    <p className="mt-1 font-heading text-xl font-black">{t("View 56 Off-Grid & Hybrid Products", "56 ऑफ-ग्रिड और हाइब्रिड प्रोडक्ट देखें")}</p>
                  </div>
                </div>
                <ArrowRight className="h-6 w-6 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#FFF8F1] relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none" />
        <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-24 bottom-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 xl:gap-20 items-center relative z-10">
            <AnimatedSection direction="left">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">{t("Our Edge", "हमारी खूबी")}</span>
              <h2 className="text-3xl md:text-5xl font-heading font-black mb-5 leading-tight">
                {t("Why Choose ", "क्यों चुनें ")}<span className="text-primary">{t("Sainik Solar?", "सािनिक सोलर?")}</span>
              </h2>
              <p className="text-muted-foreground text-lg font-medium leading-relaxed mb-8 max-w-xl">
                {t("Certified engineering, government-backed process, and carefully selected solar brands for long-term performance.", "प्रमाणित इंजीनियरिंग, सरकारी प्रक्रिया और लंबे प्रदर्शन के लिए चुने हुए सोलर ब्रांड।")}
              </p>
              <div className="grid gap-4">
                {[
                  { title: t("UPNEDA Empaneled", "UPNEDA पैनलबद्ध"), desc: t("Authorized and certified firm for government solar projects.", "सरकारी सोलर प्रोजेक्ट्स के लिए अधिकृत और प्रमाणित फर्म।") },
                  { title: t("Expert Engineering", "विशेषज्ञ इंजीनियरिंग"), desc: t("Led by Er. Ashish Dixit with practical field expertise.", "इंजी. आशीष दीक्षित के व्यावहारिक फील्ड अनुभव के साथ।") },
                  { title: t("Quality Assurance", "गुणवत्ता का आश्वासन"), desc: t("Tier-1 components, neat wiring, and strict installation checks.", "टियर-1 कम्पोनेंट, साफ वायरिंग और सख्त इंस्टॉलेशन जांच।") },
                ].map((item, idx) => (
                  <div key={idx} className="group flex gap-4 rounded-3xl border border-primary/10 bg-white/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-lg mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-muted-foreground text-sm font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" className="relative group">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-white to-secondary/20 blur-xl opacity-80" />
              <div className="aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl card-3d relative border-8 border-white">
                <img src={WHY_CHOOSE_US_IMAGE} alt="Solar Installation Professional" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                  {["UPNEDA", "25 Yr Warranty", "Free Survey"].map((badge) => (
                    <span key={badge} className="rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-wider text-foreground shadow-lg">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-8 -left-4 lg:-left-8 bg-white p-6 sm:p-8 rounded-[2rem] shadow-2xl border border-primary/20 hidden md:block animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Sun className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-4xl font-heading font-black text-primary leading-none mb-1">2000+</p>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{t("Projects Done", "प्रोजेक्ट्स पूर्ण")}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              {t("Complete Solar Solutions", "संपूर्ण सोलर समाधान")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("End-to-end services designed to make your transition to clean energy seamless and profitable.", "स्वच्छ ऊर्जा की ओर आपके परिवर्तन को सहज और लाभदायक बनाने के लिए डिज़ाइन की गई संपूर्ण सेवाएं।")}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.15} direction="up">
                <div className="group relative bg-card h-full rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(230,126,34,0.15)] overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary/5 rounded-bl-[80px] sm:rounded-bl-[100px] group-hover:bg-primary/10 transition-colors duration-500" />
                  <div className="relative z-10 text-center sm:text-left">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary group-hover:text-primary-foreground mx-auto sm:mx-0">
                      <s.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl mb-3 sm:mb-4 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">{s.desc}</p>
                    <Link to="/services" className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-primary group-hover:gap-4 transition-all justify-center sm:justify-start w-full sm:w-auto">
                      {t("Explore Service", "सेवा जानें")} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-16">
            <Link to="/services" className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-primary/20 text-primary font-bold hover:bg-primary/5 transition-all group">
              {t("View All Specialized Services", "सभी विशिष्ट सेवाएं देखें")}
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 bg-[#FDF7F2] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              {t("Solar For Every Space", "हर जगह के लिए सोलर")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("Whether it's a small home or a massive industrial plant, we have the specialized expertise to deliver.", "चाहे वह छोटा घर हो या विशाल औद्योगिक संयंत्र, हमारे पास वितरण करने के लिए विशेषज्ञता है।")}
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="up">
                <div className="relative group rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl h-[380px] sm:h-[450px] flex flex-col justify-end text-white border border-primary/10">
                  <div className="absolute inset-0">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent group-hover:via-gray-900/40 transition-all" />
                  </div>
                  <div className="relative p-6 sm:p-8 z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/20 backdrop-blur-md flex items-center justify-center mb-4 sm:mb-6 border border-white/20 group-hover:bg-primary transition-colors">
                      <s.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-2">{s.title}</h3>
                    <p className="text-white/80 mb-4 sm:mb-6 line-clamp-2 text-sm sm:text-base">{s.desc}</p>
                    <div className="py-3 sm:py-4 border-t border-white/10">
                      <p className="text-[10px] uppercase tracking-[0.2em] font-black opacity-60 mb-1">{t("Capacity Range", "क्षमता सीमा")}</p>
                      <p className="text-lg sm:text-xl font-black text-primary">{s.capacity}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_transparent_0%,_hsl(var(--primary)/0.05)_50%,_transparent_100%)] pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2">
              <AnimatedSection direction="left" className="text-center lg:text-left">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-4 block">{t("Our Methodology", "हमारी पद्धति")}</span>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold mb-6 sm:mb-8 leading-tight">
                  {t("Seamless Journey", "सहज यात्रा")}
                </h2>
                <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-8 sm:mb-12">
                  {t("From initial assessment to final grid connection, we handle everything for a stress-free transition to solar.", "प्रारंभिक मूल्यांकन से लेकर अंतिम ग्रिड कनेक्शन तक, हम सब कुछ संभालते हैं।")}
                </p>
                <div className="aspect-[4/5] w-full max-w-2xl rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white relative group mx-auto lg:mx-0">
                  <img src={WHY_CHOOSE_US_IMAGE} alt="Solar Technical Installation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/75 via-transparent to-transparent flex flex-col justify-end p-8 sm:p-12 text-white">
                    <p className="text-2xl sm:text-3xl font-heading font-black mb-1 sm:mb-2">UPNEDA</p>
                    <p className="font-bold tracking-widest uppercase text-xs sm:text-sm">{t("Empaneled Standards", "पैनलबद्ध मानक")}</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-3">
              <div className="relative space-y-6 before:hidden lg:before:block before:absolute before:left-12 before:top-8 before:bottom-8 before:w-px before:bg-gradient-to-b before:from-primary/10 before:via-primary/30 before:to-primary/10">
                {steps.map((s, i) => (
                  <AnimatedSection key={i} delay={i * 0.15} direction="right">
                    <div className={`flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 group bg-white p-7 sm:p-8 rounded-[2rem] border transition-all hover:translate-x-2 shadow-lg shadow-primary/5 text-center sm:text-left ${i === 2 ? "border-primary/35 ring-1 ring-primary/20" : "border-primary/10 hover:border-primary/30"}`}>
                      <div className="relative shrink-0">
                        <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-[1.5rem] sm:rounded-3xl flex items-center justify-center transition-all duration-500 ${i === 2 ? "bg-primary" : "bg-primary/10 group-hover:bg-primary"}`}>
                          {s.icon && <s.icon className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors ${i === 2 ? "text-white" : "text-primary group-hover:text-background"}`} />}
                        </div>
                        <div className="absolute -top-3 -left-3 w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-foreground flex items-center justify-center text-background font-heading font-black text-base sm:text-lg shadow-lg">
                          {s.num}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-2 sm:mb-3 group-hover:text-primary transition-all">{s.title}</h3>
                        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-medium">{s.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-solar text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-background float-animation" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-background float-animation" style={{ animationDelay: "3s" }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              {t("Ready to Start Your Solar Journey?", "अपनी सोलर यात्रा शुरू करने के लिए तैयार?")}
            </h2>
            <p className="max-w-xl mx-auto mb-8 text-lg opacity-90 leading-relaxed font-medium">
              {t(
                "Get expert consultation and customized solar solutions for your needs. Contact us today for a free assessment.",
                "अपनी जरूरतों के लिए विशेषज्ञ परामर्श और अनुकूलित सोलर समाधान प्राप्त करें।"
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/consultation" className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-4 font-bold hover:opacity-90 transition-opacity shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                {t("Book Free Consultation", "निःशुल्क परामर्श बुक करें")}
              </Link>
              <a href="tel:+918433284427" className="inline-flex items-center gap-2 rounded-full border-2 border-background/40 px-8 py-4 font-bold text-background hover:bg-background/10 transition-colors">
                <Phone className="w-5 h-5 line-spin-animation" />
                +91 8433284427
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
