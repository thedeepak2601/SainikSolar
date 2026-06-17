import { Link } from "react-router-dom";
import { Zap, Shield, TrendingUp, Users, GraduationCap, Wrench, CheckCircle, ArrowRight, Phone, Award, Star, IndianRupee, Clock, HeartHandshake } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import professionalHero from "@/assets/professional-hero.png";
import installationImg from "@/assets/solar-installation-premium.png";
import consultancyImg from "@/assets/solar-consultancy-premium.png";
import subsidyImg from "@/assets/solar-subsidy-premium.png";
import franchiseImg from "@/assets/solar-franchise-premium.png";
import trainingImg from "@/assets/solar-training-premium.png";
import maintenanceImg from "@/assets/solar-maintenance-premium.png";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Zap,
      title: t("Solar Panel Installation", "सोलर पैनल इंस्टॉलेशन"),
      desc: t("Complete end-to-end solar panel installation services for residential, commercial, and industrial properties. Our certified engineers handle everything — from site survey and custom design to commissioning and net metering.", "आवासीय, व्यावसायिक और औद्योगिक संपत्तियों के लिए संपूर्ण सोलर पैनल इंस्टॉलेशन सेवाएं। साइट सर्वे से नेट मीटरिंग तक सब कुछ।"),
      link: "/services/installation",
      image: installationImg,
      tags: [t("Residential", "आवासीय"), t("Commercial", "व्यावसायिक"), t("Industrial", "औद्योगिक")],
      color: "from-blue-500/20 to-blue-600/5",
      accent: "text-blue-500",
      iconBg: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: Shield,
      title: t("Consultancy & Energy Audit", "परामर्श और ऊर्जा ऑडिट"),
      desc: t("Expert consultation to help you choose the optimal solar solution for your specific needs and budget. We perform a full energy audit, calculate your ROI, and recommend the right system size and brand mix.", "आपकी ज़रूरतों और बजट के लिए सर्वोत्तम सोलर समाधान चुनने में विशेषज्ञ परामर्श। पूर्ण ऊर्जा ऑडिट, ROI गणना और सही सिस्टम आकार की सिफारिश।"),
      link: "/services/consultancy",
      image: consultancyImg,
      tags: [t("Energy Audit", "ऊर्जा ऑडिट"), t("ROI Calculation", "ROI गणना"), t("Brand Selection", "ब्रांड चयन")],
      color: "from-purple-500/20 to-purple-600/5",
      accent: "text-purple-500",
      iconBg: "bg-purple-500/10 text-purple-500",
    },
    {
      icon: TrendingUp,
      title: t("Government Subsidy Support", "सरकारी सब्सिडी सहायता"),
      desc: t("Complete assistance with PM Surya Ghar Yojana — up to ₹1,08,000 subsidy for eligible consumers. We handle all paperwork, applications, and liaise with UPNEDA and DISCOM on your behalf.", "पीएम सूर्य घर योजना में पूरी सहायता — पात्र उपभोक्ताओं के लिए ₹1,08,000 तक की सब्सिडी। सभी कागज़ी कार्रवाई, UPNEDA और DISCOM समन्वय हम करते हैं।"),
      link: "/services/subsidy",
      image: subsidyImg,
      tags: [t("Up to ₹1,08,000", "₹1,08,000 तक"), t("All Paperwork", "सभी कागज़ात"), t("UPNEDA Liaison", "UPNEDA समन्वय")],
      color: "from-green-500/20 to-green-600/5",
      accent: "text-green-600",
      iconBg: "bg-green-500/10 text-green-600",
    },
    {
      icon: Users,
      title: t("Franchise Partner Setup", "फ्रैंचाइज़ पार्टनर सेटअप"),
      desc: t("Join our growing network of solar entrepreneurs across UP. We provide training, tools, brand support, and leads. Start your own solar business with as little as ₹1 lakh investment and backed by our 15+ years of expertise.", "उत्तर प्रदेश में हमारे बढ़ते सोलर उद्यमी नेटवर्क से जुड़ें। प्रशिक्षण, ब्रांड सपोर्ट और लीड्स के साथ सिर्फ ₹1 लाख में सोलर व्यवसाय शुरू करें।"),
      link: "/services/franchise",
      image: franchiseImg,
      tags: [t("Low Investment", "कम निवेश"), t("Full Training", "पूर्ण प्रशिक्षण"), t("Lead Support", "लीड सपोर्ट")],
      color: "from-orange-500/20 to-orange-600/5",
      accent: "text-orange-500",
      iconBg: "bg-orange-500/10 text-orange-500",
    },
    {
      icon: GraduationCap,
      title: t("Staff Training & Workshops", "स्टाफ प्रशिक्षण और कार्यशालाएं"),
      desc: t("Comprehensive hands-on training programs for solar technicians, EV mechanics, and business partners. We run certified workshops through our Solar & EV Training Institute with industry-recognized certificates.", "सोलर तकनीशियनों, EV मैकेनिक्स और व्यवसायिक भागीदारों के लिए व्यापक प्रशिक्षण कार्यक्रम। उद्योग-मान्यता प्राप्त प्रमाणपत्रों के साथ।"),
      link: "/services/training",
      image: trainingImg,
      tags: [t("Solar Tech", "सोलर टेक"), t("EV Mechanic", "EV मैकेनिक"), t("Certified", "प्रमाणित")],
      color: "from-pink-500/20 to-pink-600/5",
      accent: "text-pink-500",
      iconBg: "bg-pink-500/10 text-pink-500",
    },
    {
      icon: Wrench,
      title: t("Maintenance & AMC", "रखरखाव और AMC"),
      desc: t("Annual Maintenance Contracts to keep your solar system running at peak efficiency. Our service team provides scheduled cleaning, inverter checks, wiring inspection, and performance reporting — all under one plan.", "आपके सोलर सिस्टम को चरम दक्षता पर चलाने के लिए वार्षिक रखरखाव अनुबंध। शेड्यूल्ड सफाई, इनवर्टर जांच, वायरिंग निरीक्षण और प्रदर्शन रिपोर्टिंग।"),
      link: "/services/maintenance",
      image: maintenanceImg,
      tags: [t("Annual Cleaning", "वार्षिक सफाई"), t("Performance Reports", "प्रदर्शन रिपोर्ट"), t("Quick Response", "त्वरित प्रतिक्रिया")],
      color: "from-yellow-500/20 to-yellow-600/5",
      accent: "text-yellow-600",
      iconBg: "bg-yellow-500/10 text-yellow-600",
    },
  ];

  const whyUs = [
    {
      icon: Award,
      title: t("UPNEDA Empaneled Firm", "UPNEDA पैनलबद्ध फर्म"),
      desc: t("Officially empaneled by UP New & Renewable Energy Development Agency — the highest government certification for solar firms in Uttar Pradesh.", "उत्तर प्रदेश में सोलर फर्मों के लिए सर्वोच्च सरकारी प्रमाणन — UPNEDA के साथ आधिकारिक रूप से पैनलबद्ध।"),
      stat: "UPNEDA", statLabel: t("Certified", "प्रमाणित"),
    },
    {
      icon: Zap,
      title: t("2000+ Successful Projects", "2000+ सफल प्रोजेक्ट्स"),
      desc: t("Over two thousand completed solar installations across residential, commercial, and industrial segments throughout Uttar Pradesh.", "उत्तर प्रदेश में आवासीय, व्यावसायिक और औद्योगिक क्षेत्रों में दो हजार से अधिक सफल सोलर इंस्टॉलेशन।"),
      stat: "2000+", statLabel: t("Projects", "प्रोजेक्ट्स"),
    },
    {
      icon: Clock,
      title: t("15+ Years of Experience", "15+ वर्षों का अनुभव"),
      desc: t("Founded in 2015, our team brings deep expertise in solar energy systems design, installation, and after-sales support in the UP market.", "2015 में स्थापित, हमारी टीम UP बाज़ार में सोलर ऊर्जा सिस्टम डिज़ाइन, इंस्टॉलेशन और आफ्टर-सेल्स में गहरी विशेषज्ञता लाती है।"),
      stat: "15+", statLabel: t("Years", "वर्ष"),
    },
    {
      icon: IndianRupee,
      title: t("Easy EMI from ₹1,100", "₹1,100 से EMI"),
      desc: t("We offer flexible bank EMI plans starting from just ₹1,100 down payment, making solar accessible to every household regardless of budget.", "सिर्फ ₹1,100 डाउन पेमेंट से शुरू होने वाली लचीली बैंक EMI योजनाएं — हर बजट में सोलर सुलभ।"),
      stat: "₹1,100", statLabel: t("Down Payment", "डाउन पेमेंट"),
    },
    {
      icon: Star,
      title: t("25-Year Panel Warranty", "25 वर्ष पैनल वारंटी"),
      desc: t("All solar panels come with a 25-year performance warranty from top manufacturers. We only install tier-1 brands — Adani, Tata, Waaree, Polycab.", "शीर्ष निर्माताओं से 25 वर्ष की प्रदर्शन वारंटी। हम केवल टियर-1 ब्रांड्स — Adani, Tata, Waaree, Polycab इंस्टॉल करते हैं।"),
      stat: "25 Yr", statLabel: t("Warranty", "वारंटी"),
    },
    {
      icon: HeartHandshake,
      title: t("Free Site Assessment", "निःशुल्क साइट मूल्यांकन"),
      desc: t("Every project starts with a completely free site survey by our certified engineers — no obligation, no cost. We assess, design, and quote before you commit.", "हमारे प्रमाणित इंजीनियरों द्वारा पूरी तरह निःशुल्क साइट सर्वे — कोई दायित्व नहीं, कोई लागत नहीं।"),
      stat: "FREE", statLabel: t("Assessment", "मूल्यांकन"),
    },
  ];

  const ecosystem = [
    { icon: Zap, label: t("Installation", "इंस्टॉलेशन"), sub: t("Professional Setup", "पेशेवर सेटअप"), link: "/services/installation" },
    { icon: Shield, label: t("Consultancy", "परामर्श"), sub: t("Expert Advice", "विशेषज्ञ सलाह"), link: "/services/consultancy" },
    { icon: TrendingUp, label: t("Subsidy", "सब्सिडी"), sub: t("Govt. Support", "सरकारी सहायता"), link: "/services/subsidy" },
    { icon: Users, label: t("Franchise", "फ्रैंचाइज़"), sub: t("Partner Setup", "पार्टनर सेटअप"), link: "/services/franchise" },
    { icon: GraduationCap, label: t("Training", "प्रशिक्षण"), sub: t("Staff Workshops", "स्टाफ कार्यशालाएं"), link: "/services/training" },
    { icon: Wrench, label: t("Maintenance", "रखरखाव"), sub: t("AMC Support", "AMC सपोर्ट"), link: "/services/maintenance" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0">
          <img src={professionalHero} alt="Solar Services" className="w-full h-full object-cover opacity-30 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-black tracking-[0.2em] uppercase mb-6">
                {t("End-to-End Solutions", "सम्पूर्ण समाधान")}
              </span>
              <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 leading-tight">
                {t("Our Solar", "हमारी")} <span className="text-primary">{t("Services", "सेवाएं")}</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-80 leading-relaxed font-medium mb-10 max-w-xl">
                {t("From site survey to commissioning — we handle every step of your solar journey with certified engineers.", "साइट सर्वे से कमीशनिंग तक — प्रमाणित इंजीनियरों के साथ आपकी सोलर यात्रा का हर कदम हम संभालते हैं।")}
              </p>

              <div className="flex flex-wrap gap-4 mb-4">
                <Link to="/consultation" className="inline-flex items-center gap-3 rounded-full bg-primary text-gray-900 px-8 py-4 font-black text-lg hover:bg-white transition-all shadow-[0_10px_30px_rgba(249,115,22,0.3)]">
                  {t("Free Assessment", "निःशुल्क मूल्यांकन")} <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:+918433284427" className="inline-flex items-center gap-3 rounded-full border-2 border-white/20 px-8 py-4 font-black text-lg hover:bg-white/10 transition-all">
                  <Phone className="w-5 h-5" /> +91 8433284427
                </a>
              </div>
            </AnimatedSection>

            {/* Ecosystem Grid — High Density Professional Look */}
            <AnimatedSection direction="right" className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl">
              <div className="grid grid-cols-2 gap-6 md:gap-8">
                {ecosystem.map((item, i) => (
                  <Link key={i} to={item.link} className="group flex items-center gap-4 hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all">
                      <item.icon className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-gray-900 transition-colors" />
                    </div>
                    <div>
                      <p className="font-heading font-black text-white text-base md:text-xl leading-tight group-hover:text-primary transition-colors">{item.label}</p>
                      <p className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-0.5">{item.sub}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services — image cards */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">{t("What We Offer", "हम क्या प्रदान करते हैं")}</span>
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-4">
              {t("Complete Solar Solutions", "संपूर्ण सोलर समाधान")}
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">
              {t("From installation to maintenance, we cover every aspect of your solar journey.", "इंस्टॉलेशन से रखरखाव तक, हम आपकी सोलर यात्रा के हर पहलू को कवर करते हैं।")}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.08} direction="up" className="h-full">
                <div className="group bg-card rounded-[2.5rem] h-full flex flex-col border border-primary/5 hover:border-primary/25 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(249,115,22,0.10)] transition-all duration-500">
                  {/* image */}
                  <div className="relative h-52 overflow-hidden shrink-0">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-80`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    {/* icon badge */}
                    <div className={`absolute top-4 left-4 w-12 h-12 rounded-2xl ${s.iconBg} bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg`}>
                      <s.icon className="w-6 h-6" />
                    </div>
                    {/* tags */}
                    <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
                      {s.tags.map((tag, j) => (
                        <span key={j} className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-wider border border-white/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* content */}
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className={`font-heading font-black text-xl mb-3 leading-tight group-hover:${s.accent} transition-colors`}>{s.title}</h3>
                    <p className="text-muted-foreground text-sm flex-1 mb-6 leading-relaxed font-medium">{s.desc}</p>
                    <Link
                      to={s.link}
                      className={`inline-flex items-center gap-2 font-black text-sm uppercase tracking-wider ${s.accent} group/link`}
                    >
                      {t("View Details", "विवरण देखें")}
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose — compact professional strip */}
      <section className="py-20 bg-[#FFF8F1] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,_transparent_0%,_hsl(var(--primary)/0.07)_52%,_transparent_100%)] pointer-events-none" />

        <div className="container mx-auto px-4">
          {/* header */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-2 block">{t("Our Edge", "हमारी खूबी")}</span>
                <h2 className="text-3xl md:text-5xl font-heading font-black leading-tight">
                  {t("Why Choose Sainik Solar?", "सािनिक सोलर ही क्यों?")}
                </h2>
              </div>
              <p className="text-muted-foreground text-base max-w-sm font-semibold leading-relaxed md:text-right">
                {t("Government-backed · Top brands · Genuine care", "सरकारी प्रमाण-पत्र · शीर्ष ब्रांड · वास्तविक देखभाल")}
              </p>
            </div>
          </AnimatedSection>

          {/* 3-col layout: photo | divider | 2×3 reasons */}
          <div className="grid lg:grid-cols-[0.9fr_1px_1.7fr] gap-8 lg:gap-10 items-center relative z-10">

            {/* photo */}
            <AnimatedSection direction="left">
              <div className="relative rounded-[2rem] overflow-hidden h-80 shadow-2xl border-8 border-white group">
                <img
                  src={installationImg}
                  alt="Solar Installation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-wider text-primary shadow-lg">
                  {t("Certified Installation", "प्रमाणित इंस्टॉलेशन")}
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-3xl bg-white/90 p-4 backdrop-blur">
                  <div className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-foreground text-base leading-none">{t("UPNEDA Empaneled", "UPNEDA पैनलबद्ध")}</p>
                    <p className="text-muted-foreground text-xs font-medium mt-1">{t("Govt. of Uttar Pradesh", "उत्तर प्रदेश सरकार")}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* vertical divider */}
            <div className="hidden lg:block h-full min-h-[250px] bg-primary/10 rounded-full" />

            {/* reasons grid */}
            <AnimatedSection direction="right">
              <div className="grid sm:grid-cols-2 gap-3">
                {whyUs.map((w, i) => (
                  <AnimatedSection key={i} delay={i * 0.06} direction="up">
                    <div className="group flex min-h-[96px] items-start gap-4 bg-white rounded-3xl p-5 border border-primary/10 hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                        <w.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <p className="font-heading font-black text-base text-foreground leading-tight group-hover:text-primary transition-colors">{w.title}</p>
                          <span className="text-[10px] font-black text-primary bg-primary/10 px-2.5 py-1 rounded-full shrink-0">{w.stat}</span>
                        </div>
                        <p className="text-muted-foreground text-xs font-semibold mt-1 leading-snug">{w.statLabel}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-gradient-to-r from-primary/10 via-orange-50 to-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-primary/10">
            {[
              { icon: Award, value: "UPNEDA", label: t("Empaneled Firm", "पैनलबद्ध फर्म"), sub: t("Government Certified", "सरकारी प्रमाणित") },
              { icon: Star, value: "2000+", label: t("Installations Done", "इंस्टॉलेशन पूर्ण"), sub: t("Across Uttar Pradesh", "उत्तर प्रदेश भर में") },
              { icon: CheckCircle, value: "25 Yr", label: t("Warranty on Panels", "पैनल वारंटी"), sub: t("Performance Guaranteed", "प्रदर्शन की गारंटी") },
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
      <section className="py-16 bg-gray-900 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -mr-64 -mt-64" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[120px] -ml-64 -mb-64" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 leading-tight">
              {t("Get Your FREE Solar", "निःशुल्क सोलर")} <br />
              <span className="text-primary">{t("Consultation Today!", "परामर्श आज ही लें!")}</span>
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg opacity-80 leading-relaxed font-medium">
              {t("Talk to our expert engineers and discover the perfect solar system for your needs.", "हमारे विशेषज्ञ इंजीनियरों से बात करें और अपनी ज़रूरतों के लिए सही सोलर सिस्टम खोजें।")}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/consultation" className="inline-flex items-center gap-3 rounded-full bg-primary text-gray-900 px-10 py-5 font-black text-lg hover:bg-white transition-all shadow-[0_10px_30px_rgba(249,115,22,0.3)]">
                {t("Book Free Consultation", "निःशुल्क परामर्श बुक करें")} <ArrowRight className="w-5 h-5 font-black" />
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

export default Services;
