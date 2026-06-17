import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Landmark, FileText, CheckCircle, Phone, ArrowRight, ShieldCheck, BadgeIndianRupee, HelpCircle, ClipboardList, Wallet } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import subsidyImg from "@/assets/solar-subsidy-premium.png";

const Subsidy = () => {
    const { t } = useLanguage();

    const details = [
        { icon: Wallet, title: t("Up to ₹1,08,000", "₹1,08,000 तक"), desc: t("Direct financial assistance for eligible residential consumers under the PM Surya Ghar Yojana.", "पीएम सूर्य घर योजना के तहत पात्र आवासीय उपभोक्ताओं के लिए प्रत्यक्ष वित्तीय सहायता।") },
        { icon: FileText, title: t("End-to-End Filing", "एंड-टू-एंड फाइलिंग"), desc: t("We handle all UPNEDA and DISCOM paperwork, from application to final subsidy disbursement.", "हम आवेदन से लेकर अंतिम सब्सिडी वितरण तक सभी UPNEDA और DISCOM कागजी कार्रवाई संभालते हैं।") },
        { icon: ShieldCheck, title: t("Empaneled Trust", "पैनलबद्ध ट्रस्ट"), desc: t("As a UPNEDA-empaneled firm, we ensure your system meets all technical specs required for successful subsidy approval.", "UPNEDA-पैनलबद्ध फर्म के रूप में, हम यह सुनिश्चित करते हैं कि आपका सिस्टम सभी तकनीकी चश्मे को पूरा करता है।") },
    ];

    const process = [
        { title: t("Eligibility Check", "पात्रता जाँच"), desc: t("Verify your consumer ID, roof ownership, and electricity load against current government criteria.", "अपने उपभोक्ता आईडी, छत के स्वामित्व और बिजली लोड को वर्तमान सरकारी मानदंडों के विरुद्ध सत्यापित करें।") },
        { title: t("Portal Registration", "पोर्टल पंजीकरण"), desc: t("Registration on the National Portal for Rooftop Solar and submission of initial feasibility requests.", "रूफटॉप सोलर के लिए नेशनल पोर्टल पर पंजीकरण और प्रारंभिक व्यवहार्यता अनुरोध प्रस्तुत करना।") },
        { title: t("Installation & PCR", "इंस्टॉलेशन और PCR"), desc: t("Execution of installation and filing of the Project Completion Report (PCR) on the subsidy portal.", "इंस्टॉलेशन का निष्पादन और सब्सिडी पोर्टल पर प्रोजेक्ट पूर्णता रिपोर्ट (PCR) दाखिल करना।") },
        { title: t("Inspection & Disbursement", "निरीक्षण और वितरण"), desc: t("Final inspection by DISCOM and direct credit of subsidy amount to your bank account.", "DISCOM द्वारा अंतिम निरीक्षण और आपके बैंक खाते में सब्सिडी राशि का सीधा क्रेडिट।") },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Cinematic Hero Section */}
            <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden bg-gray-950 text-white">
                <div className="absolute inset-0">
                    <img src={subsidyImg} alt="Solar Subsidy" className="w-full h-full object-cover opacity-50 scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-transparent" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <AnimatedSection direction="left">
                            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary font-black text-xs mb-6 uppercase tracking-[0.2em]">
                                {t("Government Schemes", "सरकारी योजनाएं")}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 leading-tight">
                                {t("Maximum", "अधिकतम")}<br />
                                <span className="text-primary">{t("Subsidy Support", "सब्सिडी सहायता")}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-10 font-medium leading-relaxed opacity-90">
                                {t("Reduce your solar investment by up to ₹1,08,000. Our experts handle the complex paperwork and liaison with UPNEDA/DISCOM so you get your subsidy without the hassle.", "अपने सोलर निवेश को ₹1,08,000 तक कम करें। हमारे विशेषज्ञ जटिल कागजी कार्रवाई संभालते हैं।")}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/consultation" className="px-10 py-5 rounded-full bg-primary text-gray-900 font-black text-lg hover:bg-white transition-all shadow-2xl shadow-primary/30 text-center">
                                    {t("Check Your Eligibility", "अपनी पात्रता जाँचें")}
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
                        <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">{t("Government Financial Benefits", "सरकारी वित्तीय लाभ")}</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">{t("We navigate the PM Surya Ghar Yojana so you don't have to.", "हम पीएम सूर्य घर योजना को नेविगेट करते हैं ताकि आपको न करना पड़े।")}</p>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-3 gap-8">
                        {details.map((s, i) => (
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

            {/* Subsidy Workflow Section */}
            <section className="py-24 bg-muted/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <AnimatedSection className="text-center mb-20">
                            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">{t("Approval Lifecycle", "अनुमोदन जीवनचक्र")}</span>
                            <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">{t("Your Path to Direct Savings", "सीधी बचत का आपका मार्ग")}</h2>
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
                                            <ClipboardList className="w-8 h-8 text-secondary/20 group-hover:text-secondary transition-colors" />
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ/Info Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <AnimatedSection className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">{t("Frequently Asked Questions", "अक्सर पूछे जाने वाले प्रश्न")}</h2>
                        </AnimatedSection>
                        <div className="grid gap-6">
                            {[
                                { q: t("Who is eligible?", "कौन पात्र है?"), a: t("All residential consumers with a valid electricity connection and roof rights are eligible for the PM Surya Ghar Yojana subsidy.", "वैध बिजली कनेक्शन और छत के अधिकार वाले सभी आवासीय उपभोक्ता पीएम सूर्य घर योजना सब्सिडी के लिए पात्र हैं।") },
                                { q: t("How much is the subsidy amount?", "सब्सिडी की राशि कितनी है?"), a: t("The central subsidy is ₹30,000 per kW up to 2kW, and ₹18,000 for the 3rd kW. Total maximum subsidy can reach ₹78,000 central + state incentives totaling up to ₹1,08,000.", "केंद्रीय सब्सिडी 2kW तक ₹30,000 प्रति kW है, और तीसरे kW के लिए ₹18,000 है।") },
                                { q: t("How is it disbursed?", "इसका वितरण कैसे किया जाता है?"), a: t("The subsidy is credited directly to the beneficiary's bank account after system commissioning and verification by DISCOM within 30-45 days.", "सब्सिडी सीधे लाभार्थी के बैंक खाते में जमा की जाती है।") },
                            ].map((faq, i) => (
                                <AnimatedSection key={i} delay={i * 0.1} direction="up" className="bg-muted/30 p-8 rounded-[2rem] border border-border/50 group hover:border-primary/30 transition-all">
                                    <div className="flex gap-4 items-start">
                                        <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                                        <div>
                                            <h4 className="text-xl font-heading font-black mb-3">{faq.q}</h4>
                                            <p className="text-muted-foreground font-medium leading-relaxed">{faq.a}</p>
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
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

                        <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 relative z-10 leading-tight">
                            {t("Claim Your Govt.", "अपनी सरकारी")} <br /> <span className="text-primary">{t("Subsidy Today", "सब्सिडी आज ही लें")}</span>
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6 relative z-10">
                            <Link to="/consultation" className="px-10 py-5 rounded-full bg-primary text-gray-900 font-black text-lg hover:bg-white transition-all shadow-xl shadow-primary/20">
                                {t("Apply for Subsidy", "सब्सिडी के लिए आवेदन करें")}
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Subsidy;
