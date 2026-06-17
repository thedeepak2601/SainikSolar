import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BarChart3, Lightbulb, Calculator, Award, UserCheck, Phone, ArrowRight, ClipboardCheck, CheckCircle, Search, PieChart, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import consultancyImg from "@/assets/solar-consultancy-premium.png";

const Consultancy = () => {
    const { t } = useLanguage();

    const services = [
        { icon: Search, title: t("Energy Audit", "ऊर्जा ऑडिट"), desc: t("Comprehensive analysis of your current energy usage, wastage identification, and load profiling.", "आपकी वर्तमान ऊर्जा खपत का व्यापक विश्लेषण, अपव्यय पहचान और लोड प्रोफाइलिंग।") },
        { icon: PieChart, title: t("ROI Analysis", "ROI विश्लेषण"), desc: t("Detailed financial modeling, payback period calculations, and net-savings projections over 25 years.", "विस्तृत वित्तीय मॉडलिंग, पेबैक अवधि की गणना और 25 वर्षों में शुद्ध बचत का अनुमान।") },
        { icon: ShieldCheck, title: t("Technical Feasibility", "तकनीकी व्यवहार्यता"), desc: t("Structural integrity checks, shadow mapping, and optimal brand-mix recommendations for your site.", "स्ट्रक्चरल अखंडता की जांच, छाया मानचित्रण, और आपकी साइट के लिए इष्टतम ब्रांड-मिश्रण की सिफारिशें।") },
    ];

    const process = [
        { title: t("Discovery Call", "डिस्कवरी कॉल"), desc: t("Initial consultation to understand your energy goals, budget, and system requirements.", "आपकी ऊर्जा लक्ष्यों, बजट और सिस्टम आवश्यकताओं को समझने के लिए प्रारंभिक परामर्श।") },
        { title: t("Remote Assessment", "रिमोट मूल्यांकन"), desc: t("Preliminary satellite analysis of your roof geometry and solar potential.", "आपकी छत की ज्यामिति और सोलर क्षमता का प्रारंभिक सैटेलाइट विश्लेषण।") },
        { title: t("On-Site Technical Audit", "ऑन-साइट तकनीकी ऑडिट"), desc: t("Detailed physical inspection by our engineers to finalize structural and electrical specs.", "स्ट्रक्चरल और इलेक्ट्रिकल चश्मा को अंतिम रूप देने के लिए हमारे इंजीनियरों द्वारा विस्तृत भौतिक निरीक्षण।") },
        { title: t("Strategic Roadmap", "रणनीतिक रोडमैप"), desc: t("Delivery of a comprehensive consultancy report with ROI data and recommended execution plan.", "ROI डेटा और अनुशंसित निष्पादन योजना के साथ एक व्यापक परामर्श रिपोर्ट प्रदान करना।") },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Cinematic Hero Section */}
            <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden bg-gray-950 text-white">
                <div className="absolute inset-0">
                    <img src={consultancyImg} alt="Solar Consultancy" className="w-full h-full object-cover opacity-50 scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-transparent" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <AnimatedSection direction="left">
                            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary font-black text-xs mb-6 uppercase tracking-[0.2em]">
                                {t("Strategic Solar Consulting", "रणनीतिक सोलर परामर्श")}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 leading-tight">
                                {t("Expert", "विशेषज्ञ")}<br />
                                <span className="text-primary">{t("Consultancy", "परामर्श")}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-10 font-medium leading-relaxed opacity-90">
                                {t("Don't guess, get expert advice. Our UPNEDA-certified engineers provide technical audits and financial modeling to ensure your solar investment delivers maximum returns.", "अनुमान न लगाएं, विशेषज्ञ सलाह लें। हमारे UPNEDA-प्रमाणित इंजीनियर तकनीकी ऑडिट और वित्तीय मॉडलिंग प्रदान करते हैं।")}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/consultation" className="px-10 py-5 rounded-full bg-primary text-gray-900 font-black text-lg hover:bg-white transition-all shadow-2xl shadow-primary/30 text-center">
                                    {t("Book Free Audit", "निःशुल्क ऑडिट बुक करें")}
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
                        <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">{t("Precision Consulting", "सटीक परामर्श")}</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">{t("We help you navigate the complexities of solar technology and government subsidies.", "हम आपको सोलर तकनीक और सरकारी सब्सिडी की जटिलताओं को सुलझाने में मदद करते हैं।")}</p>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((s, i) => (
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

            {/* Audit Process Section */}
            <section className="py-24 bg-muted/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <AnimatedSection className="text-center mb-20">
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">{t("Strategic Workflow", "रणनीतिक कार्यप्रवाह")}</span>
                            <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">{t("Data-Driven Solar Planning", "डेटा-संचालित सोलर योजना")}</h2>
                        </AnimatedSection>

                        <div className="space-y-4">
                            {process.map((step, i) => (
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
                                            <CheckCircle className="w-8 h-8 text-secondary/20 group-hover:text-secondary transition-colors" />
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Shoutout */}
            <section className="py-24 bg-background border-t border-border/50">
                <div className="container mx-auto px-4">
                    <div className="glass-card rounded-[3rem] p-12 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
                        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center relative z-10">
                            <div className="aspect-square bg-muted rounded-3xl flex items-center justify-center">
                                <UserCheck className="w-24 h-24 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-heading font-black mb-4">{t("Guided by Engineering Excellence", "इंजीनियरिंग उत्कृष्टता द्वारा निर्देशित")}</h3>
                                <p className="text-lg text-muted-foreground font-medium mb-8 leading-relaxed">
                                    {t("Every audit is overseen by Er. Ashish Dixit and our senior engineering team. We don't just sell panels; we design energy solutions that optimize your financial returns while contributing to a greener UP.", "प्रत्येक ऑडिट की देखरेख इंजी. आशीष दीक्षित और हमारी वरिष्ठ इंजीनियरिंग टीम द्वारा की जाती है। हम सिर्फ पैनल नहीं बेचते; हम ऊर्जा समाधान डिज़ाइन करते हैं।")}
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <Award className="w-5 h-5 text-primary" />
                                        <span className="font-black text-sm uppercase tracking-wider">UPNEDA Certified</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="w-5 h-5 text-primary" />
                                        <span className="font-black text-sm uppercase tracking-wider">BIS Compliant</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 text-center">
                    <AnimatedSection className="bg-gray-950 p-12 md:p-20 rounded-[4rem] relative overflow-hidden text-white shadow-2xl">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 relative z-10 leading-tight">
                            {t("Stop Guessing, Start Saving", "अनुमान लगाना बंद करें, बचत करना शुरू करें")}
                        </h2>
                        <p className="text-lg md:text-xl opacity-80 mb-12 max-w-2xl mx-auto font-medium relative z-10">
                            {t("Let our engineers find the perfect solar strategy for your specific needs. Professional audit, zero pressure.", "हमारे इंजीनियरों को आपकी विशिष्ट आवश्यकताओं के लिए सही सोलर रणनीति खोजने दें। व्यावसायिक ऑडिट, शून्य दबाव।")}
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 relative z-10">
                            <Link to="/consultation" className="px-10 py-5 rounded-full bg-primary text-gray-900 font-black text-lg hover:bg-white transition-all shadow-xl shadow-primary/20">
                                {t("Book Free Strategy Session", "निःशुल्क रणनीति सत्र बुक करें")}
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Consultancy;
