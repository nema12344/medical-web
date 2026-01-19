'use client';

import Footer from '../components/Footer';
import { FileText, ShieldCheck, Scale, AlertCircle, ChevronRight } from 'lucide-react';

export default function TermsOfService() {
    const sections = [
        {
            title: "Acceptance of Terms",
            content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.",
            icon: ShieldCheck
        },
        {
            title: "Use of Service",
            content: "You agree to use the service only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user.",
            icon: Scale
        },
        {
            title: "Intellectual Property",
            content: "The contents of this website including text, graphics, logos, images, and software are the property of Tnx Surgical and are protected by international copyright laws. You may not reproduce, copy, or distribute any part of the site without our express written permission.",
            icon: FileText
        },
        {
            title: "Disclaimer",
            content: "The information on this website is provided on an 'as is' basis. Tnx Surgical makes no representations or warranties of any kind, express or implied, as to the operation of the site or the information, content, materials, or products included on this site.",
            icon: AlertCircle
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-red-500 uppercase tracking-widest mb-6">
                        <Scale className="w-3 h-3" /> Legal Agreement
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Terms of <span className="text-red-500">Service</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Please read these terms carefully before using our services.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-16">
                        <div className="prose prose-slate max-w-none">
                            <p className="text-slate-500 leading-relaxed mb-12">
                                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </p>

                            <div className="space-y-16">
                                {sections.map((section, index) => {
                                    const Icon = section.icon;
                                    return (
                                        <div key={index} className="relative pl-12">
                                            <div className="absolute left-0 top-0 w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
                                                <Icon className="w-4 h-4" />
                                            </div>
                                            <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
                                            <p className="text-slate-600 leading-relaxed">{section.content}</p>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-20 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                                <h2 className="text-xl font-bold text-slate-900 mb-4">Questions?</h2>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    If you have any questions regarding these terms, please contact our legal department:
                                </p>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-red-600">
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                        <span className="font-bold text-slate-900">Tnxsuurgicals@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
