import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Briefcase, TrendingUp, ShieldCheck, Handshake, Phone, ArrowRight, Building2, MapPin, Target, Landmark } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import franchiseImg from "@/assets/solar-franchise-premium.png";

const Franchise = () => {
    const { t } = useLanguage();

    const benefits = [
        { icon: Briefcase, title: t("Proven Model", "प्रमाणित मॉडल"), desc: t("Leverage our 15+ years of solar expertise and a business model optimized for the Indian market.", "हमारे 15+ वर्षों के सोलर अनुभव और भारतीय बाजार के लिए अनुकूलित व्यावसायिक मॉडल का लाभ उठाएं।") },
        { icon: TrendingUp, title: t("High Growth", "उच्च विकास"), desc: t("Join the rapidly expanding solar sector with a brand that has 2000+ completed projects.", "2000+ पूर्ण प्रोजेक्ट्स वाले ब्रांड के साथ तेजी से बढ़ते सोलर क्षेत्र में शामिल हों।") },
        { icon: ShieldCheck, title: t("Brand Power", "ब्रांड की शक्ति"), desc: t("Operate under the trusted 'Sainik Solar' brand name, recognized for engineering excellence.", "इंजीनियरिंग उत्कृष्टता के लिए पहचाने जाने वाले विश्वसनीय 'सािनिक सोलर' برند کے تحت کام करें।") },
    ];

    const roadmap = [
        { title: t("Investment & Setup", "निवेश और सेटअप"), desc: t("Start with as low as ₹1 Lakh investment. We assist with office branding and basic inventory setup.", "सिर्फ ₹1 लाख के निवेश से शुरू करें। हम ऑफिस ब्रांडिंग और बुनियादी इन्वेंट्री सेटअप में सहायता करते हैं।") },
        { icon: MapPin, title: t("Territory Rights", "क्षेत्रीय अधिकार"), desc: t("Get exclusive rights to operate in your assigned district/territory with direct lead support.", "सीधे लीड सपोर्ट के साथ अपने असाइन किए गए जिले/क्षेत्र में काम करने के विशेष अधिकार प्राप्त करें।") },
        { icon: Target, title: t("Marketing Support", "मार्केटिंग सहायता"), desc: t("Strategic digital marketing, physical branding materials, and lead generation from our central team.", "रणनीतिक डिजिटल मार्केटिंग, भौतिक ब्रांडिंग सामग्री और हमारी केंद्रीय टीम से लीड जेनरेशन।") },
        { icon: Landmark, title: t("Liaison Assistance", "समन्वय सहायता"), desc: t("We handle the UPNEDA/DISCOM empanelment complexities on your behalf for all client projects.", "हम सभी क्लाइंट प्रोजेक्ट्स के लिए आपकी ओर से UPNEDA/DISCOM समन्वय की जटिलताओं को संभालते हैं।") },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Cinematic Hero Section */}
            <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden bg-gray-950 text-white">
                <div className="absolute inset-0">
                    <img src={franchiseImg} alt="Solar Franchise" className="w-full h-full object-cover opacity-50 scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-transparent" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <AnimatedSection direction="left">
                            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary font-black text-xs mb-6 uppercase tracking-[0.2em]">
                                {t("Business Opportunity", "व्यावसायिक अवसर")}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 leading-tight">
                                {t("Franchise", "फ्रैंचाइज़")}<br />
                                <span className="text-primary">{t("Partnership", "साझेदारी")}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-10 font-medium leading-relaxed opacity-90">
                                {t("Empower your entrepreneurial journey. Join UP's fastest-growing solar network and build a profitable business with the backing of engineering experts.", "अपनी उद्यमशीलता की यात्रा को सशक्त बनाएं। उत्तर प्रदेश के सबसे तेजी से बढ़ते सोलर नेटवर्क में शामिल हों।")}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/consultation" className="px-10 py-5 rounded-full bg-primary text-gray-900 font-black text-lg hover:bg-white transition-all shadow-2xl shadow-primary/30 text-center">
                                    {t("Apply for Franchise", "फ्रेंचाइजी के लिए आवेदन करें")}
                                </Link>
                                <a href="tel:+918433284427" className="px-10 py-5 rounded-full border-2 border-white/20 font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                                    <Phone className="w-5 h-5" /> +91 8433284427
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">{t("Why Partner with Us?", "हमारे साथ साझेदारी क्यों?")}</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">{t("Build your business on a foundation of technical excellence and proven results.", "तकनीकी उत्कृष्टता और प्रमाणित परिणामों की नींव पर अपना व्यवसाय बनाएं।")}</p>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((s, i) => (
                            <AnimatedSection key={i} delay={i * 0.1} direction="up" className="p-10 rounded-[2.5rem] bg-card border border-primary/5 hover:border-primary/20 transition-all shadow-xl hover:shadow-2xl">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                                    <s.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-heading font-black mb-4">{s.title}</h3>
                                <p className="text-muted-foreground leading-relaxed font-medium">{s.desc}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Roadmap Section */}
            <section className="py-24 bg-muted/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <AnimatedSection className="text-center mb-20">
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">{t("Growth Path", "विकास पथ")}</span>
                            <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">{t("Franchise Success Roadmap", "फ्रैंचाइज़ सफलता रोडमैप")}</h2>
                        </AnimatedSection>

                        <div className="space-y-4">
                            {roadmap.map((step, i) => (
                                <AnimatedSection key={i} delay={i * 0.1} direction="up">
                                    <div className="group flex flex-col md:flex-row gap-8 items-start md:items-center bg-background p-8 rounded-[2rem] border border-primary/5 hover:border-primary/20 transition-all shadow-sm hover:shadow-xl">
                                        <div className="w-14 h-14 rounded-2xl bg-primary text-gray-900 flex items-center justify-center font-black text-2xl shrink-0 shadow-lg shadow-primary/20">
                                            {i + 1}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-heading font-black mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed font-medium">{step.desc}</p>
                                        </div>
                                        <div className="hidden md:block">
                                            <ArrowRight className="w-8 h-8 text-primary/20 group-hover:text-primary transition-colors" />
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="bg-gray-950 rounded-[4rem] p-12 md:p-20 overflow-hidden relative text-white">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-48 -mt-48" />
                        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                            <AnimatedSection direction="left">
                                <h3 className="text-3xl md:text-5xl font-heading font-black mb-6 leading-tight">
                                    {t("Comprehensive Ecosystem Support", "व्यापक पारिस्थितिकी तंत्र समर्थन")}
                                </h3>
                                <p className="text-lg opacity-80 font-medium mb-10 leading-relaxed">
                                    {t("We don't just give you a brand; we give you a business system. From site branding to government liaison, we are with you at every step.", "हम आपको सिर्फ एक ब्रांड नहीं देते; हम आपको एक व्यावसायिक प्रणाली देते हैं।")}
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { icon: ShieldCheck, label: t("Certifications", "प्रमाणपत्र") },
                                        { icon: Users, label: t("Lead Support", "लीड सहायता") },
                                        { icon: Handshake, label: t("Supply Chain", "आपूर्ति श्रृंखला") },
                                        { icon: Building2, label: t("Brand Assets", "ब्रांड संपत्ति") },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <item.icon className="w-6 h-6 text-primary" />
                                            <span className="font-black text-sm uppercase tracking-wider">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>
                            <AnimatedSection direction="right" className="relative group">
                                <div className="aspect-video rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl">
                                    <img src={franchiseImg} alt="Business Support" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 text-center">
                    <AnimatedSection className="bg-primary p-12 md:p-20 rounded-[4rem] relative overflow-hidden text-gray-950 shadow-2xl">
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 relative z-10 leading-tight">
                            {t("Start Your Solar Empire", "अपना सोलर साम्राज्य शुरू करें")}
                        </h2>
                        <p className="text-xl font-black mb-12 opacity-80 max-w-2xl mx-auto relative z-10">
                            {t("Join 20+ successful partners across Uttar Pradesh. Your journey to a profitable green business starts here.", "उत्तर प्रदेश भर के 20+ सफल भागीदारों में शामिल हों।")}
                        </p>
                        <Link to="/consultation" className="px-10 py-5 rounded-full bg-gray-950 text-white font-black text-lg hover:bg-white hover:text-gray-950 transition-all shadow-2xl">
                            {t("Request Partnership Details", "साझेदारी विवरण का अनुरोध करें")}
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Franchise;
