'use client';

import Footer from '../components/Footer';
import { Shield, Lock, Eye, FileText, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
    const sections = [
        {
            title: "Information We Collect",
            content: "We collect information that you provide directly to us, such as when you create an account, request a quote, or communicate with us. This may include your name, email address, phone number, and company information.",
            icon: Eye
        },
        {
            title: "How We Use Your Information",
            content: "We use the information we collect to provide, maintain, and improve our services, to process your requests, and to communicate with you about our products and services.",
            icon: FileText
        },
        {
            title: "Information Sharing",
            content: "We do not share your personal information with third parties except as described in this policy, such as with your consent or to comply with legal obligations.",
            icon: Shield
        },
        {
            title: "Data Security",
            content: "We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.",
            icon: Lock
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
                        <Shield className="w-3 h-3" /> Security & Trust
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Privacy <span className="text-red-500">Policy</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Your privacy is important to us. Learn how Tnx Surgical handles and protects your data.
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
                                <h2 className="text-xl font-bold text-slate-900 mb-4">Contact Us</h2>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    If you have any questions about this Privacy Policy, please contact us at:
                                </p>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-red-600">
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                        <span className="font-bold text-slate-900">Tnxsuurgicals@gmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-red-600">
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                        <span className="font-bold text-slate-900">+91 9950241240</span>
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
