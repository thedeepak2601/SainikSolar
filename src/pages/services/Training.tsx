import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Users, Award, CheckCircle, Phone, ArrowRight, Lightbulb, PenTool, Cpu } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import trainingImg from "@/assets/solar-training-premium.png";

const Training = () => {
    const { t } = useLanguage();

    const courses = [
        { icon: Lightbulb, title: t("Solar Fundamentals", "सोलर फंडामेंटल्स"), desc: t("Comprehensive understanding of solar physics, PV technology, and current industry trends.", "सोलर भौतिकी, PV तकनीक और वर्तमान उद्योग के रुझानों की व्यापक समझ।") },
        { icon: PenTool, title: t("Design & Engineering", "डिजाइन और इंजीनियरिंग"), desc: t("Learn to design efficient solar layouts using advanced CAD tools and shadowing analysis.", "उन्नत CAD टूल्स का उपयोग करके कुशल सोलर लेआउट डिजाइन करना सीखें।") },
        { icon: Cpu, title: t("Advanced Systems", "उन्नत सिस्टम"), desc: t("Specialized training in hybrid systems, battery storage, and smart grid integration.", "हाइब्रिड सिस्टम, बैटरी स्टोरेज और स्मार्ट ग्रिड एकीकरण में विशेष प्रशिक्षण।") },
    ];

    const methodology = [
        { title: t("Theoretical Base", "सैद्धांतिक आधार"), desc: t("Classroom sessions focused on core electrical concepts and safety standards.", "कोर इलेक्ट्रिकल अवधारणाओं और सुरक्षा मानकों पर केंद्रित क्लासरूम सत्र।") },
        { title: t("Live Field Lab", "लाइव फील्ड लैब"), desc: t("Hands-on experience on our actual project sites and engineering workshops.", "हमारे वास्तविक प्रोजेक्ट साइटों और इंजीनियरिंग कार्यशालाओं पर व्यावहारिक अनुभव।") },
        { title: t("Software Mastery", "सॉफ्टवेयर महारत"), desc: t("Training on industry-standard design and simulation software.", "उद्योग-मानक डिजाइन और सिमुलेशन सॉफ्टवेयर पर प्रशिक्षण।") },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Cinematic Hero Section */}
            <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden bg-gray-950 text-white">
                <div className="absolute inset-0">
                    <img src={trainingImg} alt="Solar Training" className="w-full h-full object-cover opacity-50 scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-transparent" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <AnimatedSection direction="left">
                            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary font-black text-xs mb-6 uppercase tracking-[0.2em]">
                                {t("Skill Development", "कौशल विकास")}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 leading-tight">
                                {t("Master the", "निपुण बनें")}<br />
                                <span className="text-primary">{t("Solar Engineering", "सोलर इंजीनियरिंग")}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-10 font-medium leading-relaxed opacity-90">
                                {t("Bridging the gap between theory and practice. Join our expert-led workshops to build a high-growth career in the renewable energy sector.", "सिद्धांत और व्यवहार के बीच की खाई को पाटना। हमारी विशेषज्ञ-नेतृत्व वाली कार्यशालाओं में शामिल हों।")}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/consultation" className="px-10 py-5 rounded-full bg-primary text-gray-900 font-black text-lg hover:bg-white transition-all shadow-2xl shadow-primary/30 text-center">
                                    {t("Enroll Now", "अभी नामांकन करें")}
                                </Link>
                                <a href="tel:+918433284427" className="px-10 py-5 rounded-full border-2 border-white/20 font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                                    <Phone className="w-5 h-5" /> +91 8433284427
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Course List Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">{t("Specialized Training Tracks", "विशेष प्रशिक्षण ट्रैक")}</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">{t("Expert-led curriculum designed by practicing engineers.", "अभ्यास करने वाले इंजीनियरों द्वारा डिजाइन किया गया विशेषज्ञ-नेतृत्व वाला पाठ्यक्रम।")}</p>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-3 gap-8">
                        {courses.map((c, i) => (
                            <AnimatedSection key={i} delay={i * 0.1} direction="up" className="p-10 rounded-[2.5rem] bg-card border border-primary/5 hover:border-primary/20 transition-all shadow-xl hover:shadow-2xl">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                                    <c.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-heading font-black mb-4">{c.title}</h3>
                                <p className="text-muted-foreground leading-relaxed font-medium">{c.desc}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="py-24 bg-muted/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <AnimatedSection className="text-center mb-20">
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">{t("Our Approach", "हमारा दृष्टिकोण")}</span>
                            <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">{t("How We Train Professionals", "हम पेशेवरों को कैसे प्रशिक्षित करते हैं")}</h2>
                        </AnimatedSection>

                        <div className="space-y-4">
                            {methodology.map((step, i) => (
                                <AnimatedSection key={i} delay={i * 0.1} direction="up">
                                    <div className="group flex flex-col md:flex-row gap-8 items-start md:items-center bg-background p-8 rounded-[2rem] border border-primary/5 hover:border-primary/20 transition-all shadow-sm hover:shadow-xl">
                                        <div className="w-14 h-14 rounded-2xl bg-gray-900 text-primary flex items-center justify-center font-black text-2xl shrink-0 shadow-lg">
                                            {i + 1}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-heading font-black mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed font-medium">{step.desc}</p>
                                        </div>
                                        <div className="hidden md:block">
                                            <Award className="w-8 h-8 text-secondary/20 group-hover:text-secondary transition-colors" />
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Training Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <AnimatedSection direction="left">
                            <div className="relative group">
                                <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-muted shadow-2xl">
                                    <img src={trainingImg} alt="Training Session" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" />
                                </div>
                                <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-[2rem] shadow-xl text-gray-900 hidden md:block">
                                    <p className="text-4xl font-black mb-1">500+</p>
                                    <p className="font-bold uppercase tracking-widest text-xs">{t("Trained Pros", "प्रशिक्षित पेशेवर")}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection direction="right" className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-heading font-black mb-6">{t("Why Train with Us?", "हमारे साथ प्रशिक्षण क्यों?")}</h2>
                            <div className="space-y-6">
                                {[
                                    { title: t("Real-World Projects", "वास्तविक दुनिया प्रोजेक्ट"), desc: t("Learn on live residential and commercial installations across UP.", "उत्तर प्रदेश भर में लाइव आवासीय और व्यावसायिक इंस्टॉलेशन पर सीखें।") },
                                    { title: t("Certification", "प्रमाणन"), desc: t("Receive an industry-recognized certificate from Sainik Solar upon completion.", "पूर्ण होने पर सािनیک सोलर से उद्योग-मान्यता प्राप्त प्रमाण पत्र प्राप्त करें।") },
                                    { title: t("Career Paths", "करियर पथ"), desc: t("Job assistance and guidance for starting your own solar consultancy or business.", "अपना खुद का सोलर कंसल्टेंसी या व्यवसाय शुरू करने के लिए जॉब सहायता और मार्गदर्शन।") }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1">
                                            <CheckCircle className="w-6 h-6 text-secondary shrink-0" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-heading font-black mb-1">{item.title}</h4>
                                            <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 text-center">
                    <AnimatedSection className="bg-primary p-12 md:p-20 rounded-[4rem] relative overflow-hidden text-gray-950 shadow-2xl">
                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 relative z-10 leading-tight">
                            {t("Launch Your Green Career", "अपना ग्रीन करियर शुरू करें")}
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6 relative z-10">
                            <Link to="/consultation" className="px-12 py-6 rounded-full bg-gray-950 text-white font-black text-xl hover:bg-white hover:text-gray-950 transition-all shadow-2xl">
                                {t("Reserve Your Spot", "अपनी सीट आरक्षित करें")}
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Training;
