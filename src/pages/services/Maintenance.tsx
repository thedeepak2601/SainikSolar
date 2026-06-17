import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wrench, Shield, CheckCircle, RefreshCcw, Smartphone, Phone, ArrowRight, Activity, Zap, ClipboardCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import maintenanceImg from "@/assets/solar-maintenance-premium.png";

const Maintenance = () => {
    const { t } = useLanguage();

    const servicePoints = [
        { icon: Zap, title: t("Performance Tuning", "प्रदर्शन ट्यूनिंग"), desc: t("Optimizing inverter settings and string configurations to ensure peak energy generation at all times.", "पीक ऊर्जा उत्पादन सुनिश्चित करने के लिए इनवर्टर सेटिंग्स और स्ट्रिंग कॉन्फ़िगरेशन को अनुकूलित करना।") },
        { icon: RefreshCcw, title: t("Precision Cleaning", "सटीक सफाई"), desc: t("Professional-grade panel cleaning using de-ionized water to prevent scale buildup and maximize absorption.", "स्केल बिल्डअप को रोकने और अवशोषण को अधिकतम करने के लिए पेशेवर-ग्रेड पैनल सफाई।") },
        { icon: Activity, title: t("Health Diagnostics", "स्वास्थ्य निदान"), desc: t("Advanced thermal imaging and electrical testing to identify micro-cracks or potential failure points.", "माइक्रो-क्रैक्स या संभावित विफलता बिंदुओं की पहचान करने के लिए उन्नत थर्मल इमेजिंग और इलेक्ट्रिकल परीक्षण।") },
    ];

    const amcFlow = [
        { title: t("Preventive Maintenance", "निवारक रखरखाव"), desc: t("Scheduled quarterly visits to inspect mounting structures and wiring integrity.", "माउंटिंग स्ट्रक्चर और वायरिंग अखंडता का निरीक्षण करने के लिए निर्धारित त्रैमासिक दौरे।") },
        { title: t("Reactive Support", "प्रतिक्रियाशील सहायता"), desc: t("Priority 24-48 hour response time for any system faults or performance drops.", "किसी भी सिस्टम दोष या प्रदर्शन में गिरावट के लिए प्राथमिकता 24-48 घंटे प्रतिक्रिया समय।") },
        { title: t("Remote Monitoring", "रिमोट मॉनिटरिंग"), desc: t("Continuous digital oversight of your generation patterns via our central monitoring desk.", "हमारे केंद्रीय निगरानी डेस्क के माध्यम से आपके उत्पादन पैटर्न की निरंतर डिजिटल निगरानी।") },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Cinematic Hero Section */}
            <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden bg-gray-950 text-white">
                <div className="absolute inset-0">
                    <img src={maintenanceImg} alt="Solar Maintenance" className="w-full h-full object-cover opacity-50 scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-transparent" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <AnimatedSection direction="left">
                            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary font-black text-xs mb-6 uppercase tracking-[0.2em]">
                                {t("System Longevity", "सिस्टम दीर्घायु")}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 leading-tight">
                                {t("Maintenance &", "रखरखाव और")}<br />
                                <span className="text-primary">{t("AMC Support", "AMC सहायता")}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-10 font-medium leading-relaxed opacity-90">
                                {t("Solar is a 25-year investment. Protect it with the industry's most rigorous maintenance protocols. We ensure your system produces every possible watt of energy.", "सोलर 25 साल का निवेश है। इसकी सुरक्षा करें।")}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/consultation" className="px-10 py-5 rounded-full bg-primary text-gray-900 font-black text-lg hover:bg-white transition-all shadow-2xl shadow-primary/30 text-center">
                                    {t("Get AMC Quote", "AMC कोट प्राप्त करें")}
                                </Link>
                                <a href="tel:+918433284427" className="px-10 py-5 rounded-full border-2 border-white/20 font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                                    <Phone className="w-5 h-5" /> +91 8433284427
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">{t("Professional Maintenance", "पेशेवर रखरखाव")}</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">{t("Engineering-grade care for your solar power plant.", "आपके सोलर पावर प्लांट के लिए इंजीनियरिंग-ग्रेड देखभाल।")}</p>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-3 gap-8">
                        {servicePoints.map((s, i) => (
                            <AnimatedSection key={i} delay={i * 0.1} direction="up" className="p-10 rounded-[2.5rem] bg-card border border-primary/5 hover:border-primary/20 transition-all shadow-xl hover:shadow-2xl text-left">
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

            {/* AMC Workflow Section */}
            <section className="py-24 bg-muted/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <AnimatedSection className="text-center mb-20">
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">{t("Service Lifecycle", "सेवा जीवनचक्र")}</span>
                            <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">{t("Comprehensive AMC Protection", "व्यापक AMC सुरक्षा")}</h2>
                        </AnimatedSection>

                        <div className="space-y-4">
                            {amcFlow.map((step, i) => (
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
                                            <ClipboardCheck className="w-8 h-8 text-secondary/20 group-hover:text-secondary transition-colors" />
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Guarantee Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 text-center">
                    <AnimatedSection className="bg-gray-950 p-12 md:p-20 rounded-[4rem] relative overflow-hidden text-white shadow-2xl">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

                        <Shield className="w-20 h-20 text-primary mx-auto mb-8 relative z-10" />
                        <h2 className="text-3xl md:text-5xl font-heading font-black mb-8 relative z-10">
                            {t("98% Uptime Guarantee", "98% अपटाइम गारंटी")}
                        </h2>
                        <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed">
                            {t("We don't just fix problems; we prevent them. Our UPNEDA-certified solar technicians monitor your data daily to ensure you never lose a single unit of energy.", "हम केवल समस्याओं को ठीक नहीं करते हैं; हम उन्हें रोकते हैं।")}
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 relative z-10">
                            <Link to="/consultation" className="px-10 py-5 rounded-full bg-primary text-gray-900 font-black text-lg hover:bg-white transition-all shadow-xl shadow-primary/20">
                                {t("Start AMC Today", "आज ही AMC शुरू करें")}
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Maintenance;
