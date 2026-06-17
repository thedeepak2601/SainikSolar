import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, CheckCircle, ArrowRight, Phone, Shield, BarChart3, Clock, Award, Hammer, HardHat } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import installationImg from "@/assets/solar-installation-premium.png";

const Installation = () => {
    const { t } = useLanguage();

    const features = [
        { icon: HardHat, title: t("Expert Engineers", "विशेषज्ञ इंजीनियर"), desc: t("Our team consists of certified UPNEDA engineers with years of experience in structural and electrical design.", "हमारी टीम में प्रमाणित UPNEDA इंजीनियर शामिल हैं जिन्हें स्ट्रक्चरल और इलेक्ट्रिकल डिज़ाइन में वर्षों का अनुभव है।") },
        { icon: BarChart3, title: t("Maximum Yield", "अधिकतम उपज"), desc: t("We use advanced shadow analysis software to ensure your panels are positioned for peak energy generation year-round.", "हम यह सुनिश्चित करने के लिए उन्नत छाया विश्लेषण सॉफ्टवेयर का उपयोग करते हैं कि आपके पैनल साल भर चरम ऊर्जा उत्पादन के लिए स्थित हों।") },
        { icon: Shield, title: t("Certified Quality", "प्रमाणित गुणवत्ता"), desc: t("We only install Tier-1 components (Adani, Waaree, Tata) that meet stringent BIS and MNRE quality standards.", "हम केवल टियर-1 कंपोनेंट्स इंस्टॉल करते हैं जो BIS और MNRE गुणवत्ता मानकों को पूरा करते हैं।") },
    ];

    const process = [
        { title: t("Technical Site Audit", "तकनीकी साइट ऑडिट"), desc: t("Our engineers visit your site for precise measurements, shadow analysis, and load capacity evaluation.", "हमारे इंजीनियर सटीक माप, छाया विश्लेषण और लोड क्षमता मूल्यांकन के लिए आपकी साइट का दौरा करते हैं।") },
        { title: t("Custom System Design", "कस्टम सिस्टम डिज़ाइन"), desc: t("Creating a tailored structural blueprint and electrical layout optimized for your specific roof geometry.", "आपकी छत के लिए विशेष रूप से अनुकूलित एक स्ट्रक्चरल ब्लूप्रिंट और इलेक्ट्रिकल लेआउट बनाना।") },
        { title: t("Professional Mounting", "पेशेवर माउंटिंग"), desc: t("Precision installation of high-strength mounting structures and panels by our trained technician teams.", "हमारी प्रशिक्षित तकनीशियन टीमों द्वारा उच्च-शक्ति माउंटिंग संरचनाओं और पैनलों का सटीक इंस्टॉलेशन।") },
        { title: t("Grid Integration", "ग्रिड एकीकरण"), desc: t("Final electrical wiring, inverter setup, and liaison for net metering and DISCOM commissioning.", "अंतिम इलेक्ट्रिकल वायरिंग, इनवर्टर सेटअप, और नेट मीटरिंग और DISCOM कमीशनिंग के लिए समन्वय।") },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Cinematic Hero Section */}
            <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden bg-gray-950 text-white">
                <div className="absolute inset-0">
                    <img src={installationImg} alt="Solar Installation" className="w-full h-full object-cover opacity-50 scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-transparent" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <AnimatedSection direction="left">
                            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary font-black text-xs mb-6 uppercase tracking-[0.2em]">
                                {t("Premium Installation Service", "प्रीमियम इंस्टॉलेशन सेवा")}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 leading-tight">
                                {t("Professional Solar", "पेशेवर सोलर")}<br />
                                <span className="text-primary">{t("Deployment", "परिनियोजन")}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-10 font-medium leading-relaxed opacity-90">
                                {t("Experience the highest standards of solar engineering. From technical audits to final commissioning, we ensure your transition to clean energy is seamless and efficient.", "सोलर इंजीनियरिंग के उच्चतम मानकों का अनुभव करें। तकनीकी ऑडिट से लेकर अंतिम कमीशनिंग तक, हम स्वच्छ ऊर्जा में आपके परिवर्तन को सुचारू और कुशल सुनिश्चित करते हैं।")}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/consultation" className="px-10 py-5 rounded-full bg-primary text-gray-900 font-black text-lg hover:bg-white transition-all shadow-2xl shadow-primary/30 text-center">
                                    {t("Start Your Project", "अपना प्रोजेक्ट शुरू करें")}
                                </Link>
                                <a href="tel:+918433284427" className="px-10 py-5 rounded-full border-2 border-white/20 font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                                    <Phone className="w-5 h-5" /> +91 8433284427
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-12 border-b border-border/50 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-60">
                        {/* These could be manufacturer logos later */}
                        <span className="font-heading font-black text-2xl tracking-tighter">ADANI SOLAR</span>
                        <span className="font-heading font-black text-2xl tracking-tighter">WAAREE</span>
                        <span className="font-heading font-black text-2xl tracking-tighter">TATA POWER</span>
                        <span className="font-heading font-black text-2xl tracking-tighter">POLYCAB</span>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">{t("Why Our Installation Matters", "हमारा इंस्टॉलेशन क्यों महत्वपूर्ण है")}</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">{t("Precision engineering is the difference between a system that lasts 5 years and one that lasts 25.", "सटीक इंजीनियरिंग ही 5 साल चलने वाले सिस्टम और 25 साल चलने वाले सिस्टम के बीच का अंतर है।")}</p>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((f, i) => (
                            <AnimatedSection key={i} delay={i * 0.1} direction="up" className="p-10 rounded-[2.5rem] bg-card border border-primary/5 hover:border-primary/20 transition-all shadow-xl hover:shadow-2xl">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                                    <f.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-heading font-black mb-4">{f.title}</h3>
                                <p className="text-muted-foreground leading-relaxed font-medium">{f.desc}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section with Modern Timeline */}
            <section className="py-24 bg-muted/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <AnimatedSection className="text-center mb-20">
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">{t("Our Methodology", "हमारी कार्यप्रणाली")}</span>
                            <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">{t("The Path to Solar Excellence", "सोलर उत्कृष्टता का मार्ग")}</h2>
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
                                            <CheckCircle className="w-8 h-8 text-primary/20 group-hover:text-primary transition-colors" />
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 text-center">
                    <AnimatedSection className="bg-gray-950 p-12 md:p-20 rounded-[4rem] relative overflow-hidden text-white shadow-2xl">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />

                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 relative z-10 leading-tight">
                            {t("Ready for Hassle-Free Solar?", "परेशानी मुक्त सोलर के लिए तैयार हैं?")}
                        </h2>
                        <p className="text-lg md:text-xl opacity-80 mb-12 max-w-2xl mx-auto font-medium relative z-10">
                            {t("Join 2000+ happy customers across UP who switched to solar with Sainik Solar. Get your free site audit today.", "UP के उन 2000+ खुशहाल ग्राहकों में शामिल हों जिन्होंने सािनिक सोलर के साथ सोलर अपनाया।")}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                            <Link to="/consultation" className="px-10 py-5 rounded-full bg-primary text-gray-900 font-black text-lg hover:bg-white transition-all shadow-xl shadow-primary/20 text-center">
                                {t("Book Free Audit", "निःशुल्क ऑडिट बुक करें")}
                            </Link>
                            <a href="tel:+918433284427" className="px-10 py-5 rounded-full border-2 border-white/20 font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                                <Phone className="w-5 h-5" /> +91 8433284427
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Installation;
