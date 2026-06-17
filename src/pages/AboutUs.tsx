import { motion } from "framer-motion";
import { Sun, Award, Users, Building, CheckCircle, Shield, Star, Target, Briefcase, Phone, ArrowRight, Zap, Target as TargetIcon } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import consultancyImg from "@/assets/solar_consultancy_1772175242455.png";
import professionalHero from "@/assets/professional-hero.png";

type Brand = {
  name: string;
  logo?: string;
  wordmark: string;
  color: string;
  bg: string;
};

const AboutUs = () => {
  const { t } = useLanguage();

  const brandsRow1: Brand[] = [
    { name: "Tata Power Solar", logo: "/logos/tata-power-solar-official.jpg", wordmark: "Tata Power Solar", color: "#486aa8", bg: "bg-white" },
    { name: "Adani Solar", logo: "/logos/adani-solar.svg", wordmark: "Adani Solar", color: "#111827", bg: "bg-white" },
    { name: "Waaree", logo: "/logos/waaree.png", wordmark: "WAAREE", color: "#2da84a", bg: "bg-white" },
    { name: "UTL Solar", logo: "/logos/utl-official.png", wordmark: "UTL Solar", color: "#d71920", bg: "bg-white" },
    { name: "Tata", logo: "/logos/tata.png", wordmark: "TATA", color: "#486aa8", bg: "bg-white" },
    { name: "Polycab", logo: "/logos/polycab-official.png", wordmark: "POLYCAB", color: "#e71c24", bg: "bg-red-50" },
    { name: "Sundak", logo: "/logos/sundak-official.gif", wordmark: "SUNDAK", color: "#f97316", bg: "bg-orange-50" },
  ];

  const brandsRow2: Brand[] = [
    { name: "Luminous", logo: "/logos/luminous-official.webp", wordmark: "luminous", color: "#0071b9", bg: "bg-blue-50" },
    { name: "V-Guard", logo: "/logos/vguard-official.jpg", wordmark: "V-Guard", color: "#ff6b00", bg: "bg-orange-50" },
    { name: "Exide", logo: "/logos/exide-official.png", wordmark: "EXIDE", color: "#003087", bg: "bg-blue-50" },
    { name: "Microtek", logo: "/logos/microtek-official.svg", wordmark: "microtek", color: "#c8192b", bg: "bg-red-50" },
    { name: "Loom Solar", logo: "/logos/loom-solar-official.png", wordmark: "Loom Solar", color: "#2da84a", bg: "bg-green-50" },
    { name: "Pahal", logo: "/logos/pahal-official.jpg", wordmark: "PAHAL", color: "#1a1a1a", bg: "bg-gray-50" },
    { name: "Jakson", logo: "/logos/jakson-official.png", wordmark: "Jakson", color: "#004b8d", bg: "bg-blue-50" },
    { name: "Electrower", logo: "/logos/electrower-official.png", wordmark: "Electrower", color: "#16a34a", bg: "bg-green-50" },
  ];

  const stats = [
    { icon: Zap, value: "2000+", label: t("Projects Installed", "प्रोजेक्ट्स इंस्टॉल"), color: "bg-blue-500/10 text-blue-500" },
    { icon: Award, value: "15+", label: t("Years Experience", "वर्षों का अनुभव"), color: "bg-orange-500/10 text-orange-500" },
    { icon: Users, value: "14+", label: t("Brand Partners", "ब्रांड पार्टनर्स"), color: "bg-green-500/10 text-green-500" },
    { icon: Building, value: "3", label: t("Office Locations", "कार्यालय"), color: "bg-purple-500/10 text-purple-500" },
  ];

  const team = [
    {
      name: "Er. Ashish Dixit",
      role: t("Founder & Chief Engineer", "संस्थापक और मुख्य इंजीनियर"),
      desc: t("Leading the company with deep expertise in solar energy systems design and installation.", "सोलर ऊर्जा सिस्टम डिज़ाइन और इंस्टॉलेशन में गहरी विशेषज्ञता के साथ कंपनी का नेतृत्व।"),
    },
    {
      name: "Mr. Manoj Kumar",
      role: t("Associate Channel Partner — Subedar (Retd.)", "एसोसिएट चैनल पार्टनर — सूबेदार (सेवानिवृत्त)"),
      desc: t("Bringing discipline and dedication from military service to solar energy business development.", "सैन्य सेवा से अनुशासन और समर्पण को सोलर ऊर्जा व्यवसाय विकास में लाना।"),
    },
  ];

  const milestones = [
    { year: "2015", event: t("Company Founded", "कंपनी की स्थापना") },
    { year: "2017", event: t("UPNEDA Empanelment", "UPNEDA पैनलबद्धता") },
    { year: "2019", event: t("500+ Installations Milestone", "500+ इंस्टॉलेशन मील का पत्थर") },
    { year: "2021", event: t("EV & Solar Training Institute Launched", "EV और सोलर ट्रेनिंग संस्थान लॉन्च") },
    { year: "2023", event: t("1500+ Projects Completed", "1500+ प्रोजेक्ट्स पूर्ण") },
    { year: "2025", event: t("2000+ Installations & 3 Offices", "2000+ इंस्टॉलेशन और 3 कार्यालय") },
  ];

  const renderBrandLogo = (brand: Brand) => (
    <>
      {brand.logo && (
        <img
          src={brand.logo}
          alt={`${brand.name} logo`}
          className="max-h-16 max-w-[170px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          onError={(event) => {
            const image = event.currentTarget;
            image.style.display = "none";
            const fallback = image.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.style.display = "inline-block";
          }}
        />
      )}
      <span
        className={`font-black text-lg tracking-tight leading-none group-hover:scale-105 transition-transform duration-300 ${brand.logo ? "hidden" : "inline-block"}`}
        style={{ color: brand.color }}
      >
        {brand.wordmark}
      </span>
    </>
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src={professionalHero}
            alt="Sainik Solar Office"
            className="w-full h-full object-cover opacity-40 scale-105 animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-black tracking-[0.2em] uppercase mb-6">
                {t("Powering the Future", "भविष्य को सशक्त बनाना")}
              </span>
              <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 leading-tight">
                {t("Pioneers in Solar Excellence", "सोलर उत्कृष्टता में अग्रणी")}
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed font-medium mb-8">
                {t(
                  "Sainik Solar (formerly Engineer Solar Wala) is a leading UPNEDA empaneled solar energy firm based in Lucknow. Our mission is to provide affordable, sustainable, and high-quality solar solutions to residential, commercial, and industrial sectors.",
                  "सािनिक सोलर (पूर्व में इंजीनियर सोलर वाला) लखनऊ में स्थित एक प्रमुख UPNEDA पैनलबद्ध सौर ऊर्जा फर्म है। हमारा मिशन आवासीय, वाणिज्यिक और औद्योगिक क्षेत्रों को सस्ती, टिकाऊ और उच्च गुणवत्ता वाले सौर समाधान प्रदान करना है।"
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center gap-3 shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-bold text-base sm:text-lg">{t("UPNEDA Empaneled", "UPNEDA पैनलबद्ध")}</span>
                </div>
                <div className="px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center gap-3 shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="font-bold text-base sm:text-lg">{t("ISO Certified", "ISO प्रमाणित")}</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-background relative z-20 -mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="up">
                <div className="group card-3d bg-card rounded-[2.5rem] p-8 border border-primary/5 hover:border-primary/20 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl ${s.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <s.icon className="w-8 h-8" />
                  </div>
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                    className="block text-4xl md:text-5xl font-heading font-black text-foreground mb-2"
                  >
                    {s.value}
                  </motion.span>
                  <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground opacity-60">{s.label}</span>

                  <div className="mt-6 w-12 h-1 bg-primary/20 rounded-full group-hover:w-24 transition-all duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-[#FFF8F1] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,_transparent_0%,_hsl(var(--primary)/0.06)_48%,_transparent_100%)] pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center relative z-10">
            <AnimatedSection direction="left">
              <div className="relative group w-full max-w-2xl mx-auto lg:mx-0">
                <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-primary/20 via-white to-secondary/20 blur-2xl" />
                <div className="aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white relative z-10">
                  <img src={consultancyImg} alt="Solar Consultancy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/65 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/90 p-4 shadow-xl backdrop-blur">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">{t("Certified Process", "प्रमाणित प्रक्रिया")}</p>
                    <p className="mt-1 font-heading text-xl font-black text-foreground">{t("Survey · Design · Handover", "सर्वे · डिज़ाइन · हैंडओवर")}</p>
                  </div>
                </div>

                <div className="absolute -bottom-6 sm:-bottom-10 -left-2 sm:-left-10 bg-white p-6 sm:p-8 rounded-3xl sm:rounded-[2rem] shadow-2xl border border-primary/10 z-20 animate-float">
                  <p className="text-5xl font-heading font-black text-primary mb-2">10+</p>
                  <p className="text-xs font-black tracking-widest uppercase opacity-60 leading-tight">
                    {t("Years of", "वर्षों की")} <br /> {t("Excellence", "उत्कृष्टता")}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">{t("Our Journey", "हमारी यात्रा")}</span>
              <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 leading-tight">
                {t("Building a Sustainable Future", "एक स्थायी भविष्य का निर्माण")}
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-medium">
                <p>
                  {t(
                    "Sainik Solar (formerly Engineer Solar Wala) was founded by Er. Ashish Dixit with a vision to make solar energy accessible and affordable for every Indian household. As an UPNEDA empaneled firm, we bring credibility and quality to every project.",
                    "इंजीनियर सोलर वाला की स्थापना एर. आशीष दीक्षित ने हर भारतीय परिवार के लिए सोलर ऊर्जा को सुलभ और किफायती बनाने की दृष्टि से की थी। UPNEDA पैनलबद्ध फर्म के रूप में, हम हर प्रोजेक्ट में विश्वसनीयता और गुणवत्ता लाते हैं।"
                  )}
                </p>
                <div className="flex gap-4 p-6 bg-white rounded-3xl border border-primary/10 shadow-lg shadow-primary/5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <TargetIcon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground italic font-semibold">
                    {t(
                      "Our promise: Change your expenditure into future profit!",
                      "हमारा वादा: अपने खर्चे को भविष्य के मुनाफे में बदलें!"
                    )}
                  </p>
                </div>
                <p>
                  {t(
                    "With over 2000+ successful installations across Uttar Pradesh, we have become a leading name in solar energy. We are authorized dealers of top brands like Polycab, Adani, Tata, and more.",
                    "उत्तर प्रदेश में 2000+ सफल इंस्टॉलेशन के साथ, हम सोलर ऊर्जा में एक अग्रणी नाम बन गए हैं। हम Polycab, Adani, Tata जैसे शीर्ष ब्रांडों के अधिकृत डीलर हैं।"
                  )}
                </p>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 rounded-2xl border border-green-500/10 bg-white p-4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="font-bold text-foreground">{t("Expert Engineers", "विशेषज्ञ इंजीनियर")}</span>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-blue-500/10 bg-white p-4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-blue-500" />
                  </div>
                  <span className="font-bold text-foreground">{t("Verified Quality", "सत्यापित गुणवत्ता")}</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-12 bg-background border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: Award, text: t("UPNEDA Empaneled Firm", "UPNEDA पैनलबद्ध फर्म") },
              { icon: Shield, text: t("25 Year Warranty on Panels", "पैनलों पर 25 साल की वारंटी") },
              { icon: Target, text: t("Customized Solutions", "अनुकूलित समाधान") },
              { icon: Briefcase, text: t("Easy EMI & Finance", "आसान EMI और वित्त") },
              { icon: Star, text: t("₹1100 Down Payment", "₹1100 डाउन पेमेंट") },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="up" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{item.text}</span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-20">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">{t("Our Experts", "हमारे विशेषज्ञ")}</span>
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-6">
              {t("Visionary Leadership", "दूरदर्शी नेतृत्व")}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {team.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.2} direction="scale">
                <div className="group relative bg-card rounded-[3rem] p-10 border border-primary/5 hover:border-primary/20 transition-all duration-700 shadow-xl hover:shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100%] transition-all duration-500 group-hover:scale-150" />

                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                    <div className="shrink-0">
                      <div className="w-32 h-32 rounded-3xl bg-gradient-solar p-1 group-hover:rotate-6 transition-transform duration-500">
                        <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center p-6">
                          <Users className="w-full h-full text-primary" />
                        </div>
                      </div>
                    </div>

                    <div className="text-center md:text-left">
                      <h3 className="font-heading font-black text-3xl mb-2 group-hover:text-primary transition-colors">{m.name}</h3>
                      <p className="text-primary font-black uppercase tracking-widest text-xs mb-6 px-3 py-1 bg-primary/10 rounded-full inline-block">
                        {m.role}
                      </p>
                      <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline — horizontal rail */}
      <section className="py-16 bg-[#FDF7F2] relative overflow-hidden">
        {/* background blobs */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-orange-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-3 block">{t("Our History", "हमारा इतिहास")}</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-2">
              {t("Years of Progress", "प्रगति के वर्ष")}
            </h2>
            <p className="text-muted-foreground font-medium text-sm max-w-md mx-auto">
              {t("A decade of solar excellence and growth across Uttar Pradesh.", "उत्तर प्रदेश में दशक भर की सोलर उत्कृष्टता और विकास।")}
            </p>
          </AnimatedSection>

          {/* Desktop: horizontal rail */}
          <div className="hidden md:block relative max-w-6xl mx-auto">
            {/* rail line */}
            <div className="absolute top-[3.75rem] left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="grid grid-cols-6 gap-3">
              {milestones.map((m, i) => {
                const isTop = i % 2 === 0;
                return (
                  <AnimatedSection key={i} delay={i * 0.1} direction="up">
                    <div className="flex flex-col items-center">
                      {/* top card */}
                      {isTop ? (
                        <div className="group mb-3 bg-white rounded-2xl p-4 border border-primary/10 hover:border-primary/40 shadow-md hover:shadow-lg transition-all duration-300 w-full text-center relative overflow-hidden">
                          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-orange-400" />
                          <span className="text-xl font-heading font-black text-primary block leading-none mb-1">{m.year}</span>
                          <p className="text-[11px] font-bold text-muted-foreground leading-snug group-hover:text-primary transition-colors">{m.event}</p>
                        </div>
                      ) : (
                        <div className="mb-3 h-[72px]" /> /* spacer */
                      )}

                      {/* dot + connector */}
                      <div className="relative flex flex-col items-center">
                        <div className={`w-4 h-4 rounded-full border-2 border-primary bg-white shadow-md shadow-primary/20 z-10 ${!isTop ? "mt-0" : ""}`} />
                        {!isTop && <div className="w-px h-3 bg-primary/30" />}
                        {isTop && <div className="w-px h-3 bg-primary/30" />}
                      </div>

                      {/* bottom card */}
                      {!isTop ? (
                        <div className="group mt-3 bg-white rounded-2xl p-4 border border-primary/10 hover:border-primary/40 shadow-md hover:shadow-lg transition-all duration-300 w-full text-center relative overflow-hidden">
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-orange-400" />
                          <span className="text-xl font-heading font-black text-primary block leading-none mb-1">{m.year}</span>
                          <p className="text-[11px] font-bold text-muted-foreground leading-snug group-hover:text-primary transition-colors">{m.event}</p>
                        </div>
                      ) : (
                        <div className="mt-3 h-[72px]" /> /* spacer */
                      )}
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>

          {/* Mobile: vertical stepper */}
          <div className="md:hidden max-w-sm mx-auto relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10" />
            <div className="space-y-5">
              {milestones.map((m, i) => (
                <AnimatedSection key={i} delay={i * 0.08} direction="left">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-white border-2 border-primary shadow-md flex items-center justify-center z-10">
                      <span className="text-[10px] font-black text-primary">{m.year.slice(2)}</span>
                    </div>
                    <div className="group flex-1 bg-white rounded-2xl p-4 border border-primary/10 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-orange-400" />
                      <span className="text-primary font-black text-sm block mb-0.5">{m.year}</span>
                      <p className="font-bold text-foreground text-sm leading-snug group-hover:text-primary transition-colors">{m.event}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-24 bg-background overflow-hidden relative border-t border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.08),_transparent_45%)] pointer-events-none" />
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">{t("Strategic Partners", "रणनीतिक साझेदार")}</span>
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-6">
              {t("Authorized Brands", "अधिकृत ब्रांड")}
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">
              {t("We work with India's top solar equipment manufacturers to ensure quality.", "हम गुणवत्ता सुनिश्चित करने के लिए भारत के शीर्ष सोलर उपकरण निर्माताओं के साथ काम करते हैं।")}
            </p>
          </AnimatedSection>
        </div>

        {/* 2-Row Marquee Ticker */}
        <div className="space-y-5 mt-4">

          {/* Row 1 — scrolls LEFT */}
          <div className="marquee-track relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="flex animate-marquee gap-5" style={{ width: "max-content" }}>
              {[...brandsRow1, ...brandsRow1].map((brand, i) => (
                <div
                  key={`r1-${i}`}
                  className={`flex-shrink-0 flex flex-col items-center justify-center gap-3 ${brand.bg} rounded-3xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-default group`}
                  style={{ width: 210, height: 124, padding: "18px 24px" }}
                >
                  {renderBrandLogo(brand)}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                    {t("Authorized", "अधिकृत")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls RIGHT */}
          <div className="marquee-track relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="flex animate-marquee-reverse gap-5" style={{ width: "max-content" }}>
              {[...brandsRow2, ...brandsRow2].map((brand, i) => (
                <div
                  key={`r2-${i}`}
                  className={`flex-shrink-0 flex flex-col items-center justify-center gap-3 ${brand.bg} rounded-3xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-default group`}
                  style={{ width: 210, height: 124, padding: "18px 24px" }}
                >
                  {renderBrandLogo(brand)}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                    {t("Authorized", "अधिकृत")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-gradient-to-r from-primary/10 via-orange-50 to-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <AnimatedSection delay={0.2} direction="up">
            <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-primary/10">
              {[
                { icon: Award, value: "14+", label: t("Brand Partners", "ब्रांड पार्टनर्स"), sub: t("National & International", "राष्ट्रीय और अंतर्राष्ट्रीय") },
                { icon: Star, value: "4.9★", label: t("Average Rating", "औसत रेटिंग"), sub: t("Across all projects", "सभी प्रोजेक्ट्स में") },
                { icon: CheckCircle, value: "2000+", label: t("Happy Customers", "खुश ग्राहक"), sub: t("Across Uttar Pradesh", "उत्तर प्रदेश भर में") },
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
          </AnimatedSection>
        </div>
      </section>
      <section className="py-16 bg-gray-900 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -mr-64 -mt-64" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[120px] -ml-64 -mb-64" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 leading-tight">
              {t("Ready to Join the", "शामिल होने के लिए तैयार हैं")} <br />
              <span className="text-primary">{t("Solar Revolution?", "सोलर क्रांति में?")}</span>
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg opacity-80 leading-relaxed font-medium">
              {t("Contact Sainik Solar today for a free assessment and start saving on your electricity bills.", "नि:शुल्क मूल्यांकन के लिए आज ही सािनिक सोलर से संपर्क करें और अपने बिजली बिलों पर बचत शुरू करें।")}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/consultation" className="inline-flex items-center gap-3 rounded-full bg-primary text-gray-900 px-10 py-5 font-black text-lg hover:bg-white transition-all shadow-[0_10px_30px_rgba(249,115,22,0.3)] hover:shadow-white/20">
                {t("Get Free Consultation", "निःशुल्क परामर्श प्राप्त करें")} <ArrowRight className="w-5 h-5 font-black" />
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

export default AboutUs;
