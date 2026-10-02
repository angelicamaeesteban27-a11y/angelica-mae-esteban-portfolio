import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Mail,
  Linkedin,
  FileText,
  CheckCircle2,
  Award,
  Calendar,
  Building2,
  Clock,
  ExternalLink,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { WorkSampleModal } from './components/WorkSampleModal';
import { CertModal } from './components/CertModal';
import { CertificateCard, allCertificates } from './components/CertificateDisplay';

export default function App() {
  const [selectedSample, setSelectedSample] = useState<string | null>(null);
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Intersection observer hook for subtle editorial scroll reveal animations
  const useScrollReveal = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, []);

    return { ref, isVisible };
  };

  const expReveal = useScrollReveal();
  const certReveal = useScrollReveal();
  const workReveal = useScrollReveal();

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'What accounting platforms do you use?',
      a: 'I work with QuickBooks Online, Xero, SAP, Microsoft Excel, Google Sheets, and Treasury Management Systems. My experience includes both bookkeeping and daily financial and settlement workflows.',
    },
    {
      q: 'Do you have reconciliation experience?',
      a: 'Yes. Reconciliation has been part of my bookkeeping and treasury experience, including bank, credit card, and settlement-related reconciliations.',
    },
    {
      q: 'Can you support remote finance operations?',
      a: "Yes. I'm comfortable working remotely and using online collaboration tools to communicate, organize documents, and keep work moving.",
    },
    {
      q: 'Are you available for US and AU schedules?',
      a: 'Yes. My setup and schedule can accommodate US and AU business hours.',
    },
    {
      q: 'Are you open to long-term opportunities?',
      a: "Yes. I'm open to long-term opportunities in bookkeeping, treasury operations, and financial support.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#16181D] font-sans flex flex-col selection:bg-[#2A64B0]/15 selection:text-[#14315C]">
      {/* 1. Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <section className="relative pt-12 sm:pt-20 pb-20 sm:pb-28 border-b border-[#DDE2E8]">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* LEFT COLUMN: Editorial Typography & Copy */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2">
                  <span className="h-px w-6 bg-[#2A64B0]"></span>
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#2A64B0]">
                    FREELANCE BOOKKEEPER · FINANCE & TREASURY OPERATIONS
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl sm:text-2xl font-medium text-[#5B6370]">
                    Hi, I'm Angelica.
                  </h2>
                  <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#14315C] leading-[1.12]">
                    Accurate Books.
                    <br />
                    Organized Financial Operations.
                    <br />
                    Reliable Support.
                  </h1>
                </div>

                <div className="space-y-4 text-base sm:text-lg text-[#5B6370] leading-relaxed max-w-2xl">
                  <p>
                    I'm a freelance bookkeeper and finance operations professional with experience in bookkeeping, reconciliation, treasury settlements, banking coordination, and financial reporting.
                  </p>
                  <p>
                    I help keep financial records organized, transactions properly tracked, and day-to-day finance workflows running smoothly.
                  </p>
                </div>

                {/* Primary Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href="#experience"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#2A64B0] hover:bg-[#14315C] transition-colors rounded-sm shadow-sm"
                  >
                    View My Experience
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-[#14315C] bg-[#F4F6F9] hover:bg-[#DDE2E8] border border-[#DDE2E8] transition-colors rounded-sm"
                  >
                    Let's Connect
                  </a>
                </div>

                {/* Capability line below buttons */}
                <div className="pt-4 border-t border-[#DDE2E8] text-xs sm:text-sm font-medium text-[#5B6370] flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  <span className="text-[#14315C]">QuickBooks Online</span>
                  <span className="text-[#DDE2E8]">·</span>
                  <span className="text-[#14315C]">Xero</span>
                  <span className="text-[#DDE2E8]">·</span>
                  <span className="text-[#14315C]">Excel</span>
                  <span className="text-[#DDE2E8]">·</span>
                  <span className="text-[#14315C]">Reconciliation</span>
                  <span className="text-[#DDE2E8]">·</span>
                  <span className="text-[#14315C]">Treasury Operations</span>
                </div>
              </div>

              {/* RIGHT COLUMN: Exact Hero Portrait (No overlay, object-contain, natural proportions) */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[420px]">
                  {/* Subtle royal blue framing backdrop block */}
                  <div className="absolute -inset-3 sm:-inset-4 bg-[#F4F6F9] border border-[#DDE2E8] rounded-sm transform translate-x-2 translate-y-2 -z-10" />
                  <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-[#B79F6A]/80 z-10 pointer-events-none" />

                  {/* Clean Rectangular Editorial Photo Container without card overlay */}
                  <div className="relative overflow-hidden rounded-sm border border-[#DDE2E8] bg-white shadow-md flex items-center justify-center">
                    <img
                      src="/portrait-BqFm7goV.jpg"
                      alt="Angelica Mae Esteban - Freelance Bookkeeper and Finance & Treasury Operations Professional"
                      className="w-full h-auto max-h-[580px] object-contain object-center block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TRUSTED PLATFORMS & TOOLS STRIP */}
        <section className="py-7 bg-[#F4F6F9] border-b border-[#DDE2E8]">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5B6370] shrink-0">
                TRUSTED PLATFORMS & TOOLS
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-[#16181D]">
                <span className="hover:text-[#2A64B0] transition-colors">QuickBooks Online</span>
                <span className="text-[#DDE2E8]">·</span>
                <span className="hover:text-[#2A64B0] transition-colors">Xero</span>
                <span className="text-[#DDE2E8]">·</span>
                <span className="hover:text-[#2A64B0] transition-colors">SAP</span>
                <span className="text-[#DDE2E8]">·</span>
                <span className="hover:text-[#2A64B0] transition-colors">Microsoft Excel</span>
                <span className="text-[#DDE2E8]">·</span>
                <span className="hover:text-[#2A64B0] transition-colors">Google Sheets</span>
                <span className="text-[#DDE2E8]">·</span>
                <span className="hover:text-[#2A64B0] transition-colors">Treasury Management Systems</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. A LITTLE ABOUT HOW I WORK */}
        <section className="py-20 sm:py-28 border-b border-[#DDE2E8]">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-14 sm:mb-16 space-y-4">
              <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#2A64B0]">
                A LITTLE ABOUT HOW I WORK
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#14315C]">
                I believe good financial work starts with being organized and consistent.
              </h2>
              <div className="space-y-3 text-base text-[#5B6370] leading-relaxed">
                <p>
                  When you're dealing with financial records, transactions, reconciliations, and banking processes, small details matter.
                </p>
                <p>
                  My approach is simple: I keep records organized, check the details, document my work properly, and make sure financial information is easier to review and understand.
                </p>
              </div>
            </div>

            {/* 3 Editorial Columns with thin top borders and numbers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pt-4">
              <div className="border-t-2 border-[#14315C] pt-6 space-y-3">
                <div className="text-sm font-mono font-semibold text-[#2A64B0]">
                  01
                </div>
                <h3 className="text-lg font-bold text-[#16181D]">
                  Accurate Transaction Handling
                </h3>
                <p className="text-sm text-[#5B6370] leading-relaxed">
                  I pay close attention to transactions and supporting records because errors and delayed reconciliations can affect the rest of the financial workflow.
                </p>
              </div>

              <div className="border-t-2 border-[#14315C] pt-6 space-y-3">
                <div className="text-sm font-mono font-semibold text-[#2A64B0]">
                  02
                </div>
                <h3 className="text-lg font-bold text-[#16181D]">
                  Organized Financial Tracking
                </h3>
                <p className="text-sm text-[#5B6370] leading-relaxed">
                  I like keeping financial information structured and easy to follow, especially when working with multiple transactions, accounts, and banking processes.
                </p>
              </div>

              <div className="border-t-2 border-[#14315C] pt-6 space-y-3">
                <div className="text-sm font-mono font-semibold text-[#2A64B0]">
                  03
                </div>
                <h3 className="text-lg font-bold text-[#16181D]">
                  Dependable Remote Support
                </h3>
                <p className="text-sm text-[#5B6370] leading-relaxed">
                  I understand that remote finance work requires independence, clear communication, and consistency. I make sure the work assigned to me is properly tracked and documented.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHAT I CAN HELP WITH */}
        <section className="py-20 sm:py-28 bg-[#F4F6F9] border-b border-[#DDE2E8]">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="max-w-2xl mb-14 sm:mb-16 space-y-3">
              <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#2A64B0]">
                WHAT I CAN HELP WITH
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#14315C]">
                My experience covers both bookkeeping and financial operations.
              </h2>
            </div>

            {/* 3 Refined Capability Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-7 sm:p-8 border border-[#DDE2E8] rounded-sm space-y-4 hover:border-[#2A64B0] transition-colors">
                <div className="text-xs font-mono font-semibold text-[#2A64B0] pb-2 border-b border-[#DDE2E8]">
                  01 · CORE SERVICE
                </div>
                <h3 className="text-xl font-bold text-[#16181D]">
                  Bookkeeping & Reconciliation
                </h3>
                <p className="text-sm text-[#5B6370] leading-relaxed">
                  I can support the organization of financial records and reconciliation of bank, credit card, payroll-record, and loan-payment transactions.
                </p>
              </div>

              <div className="bg-white p-7 sm:p-8 border border-[#DDE2E8] rounded-sm space-y-4 hover:border-[#2A64B0] transition-colors">
                <div className="text-xs font-mono font-semibold text-[#2A64B0] pb-2 border-b border-[#DDE2E8]">
                  02 · SPECIALIZED
                </div>
                <h3 className="text-xl font-bold text-[#16181D]">
                  Treasury & Settlement Operations
                </h3>
                <p className="text-sm text-[#5B6370] leading-relaxed">
                  I have hands-on experience with daily settlement operations, RTGS and PDDTS transactions, fund transfers, banking confirmations, and treasury workflows.
                </p>
              </div>

              <div className="bg-white p-7 sm:p-8 border border-[#DDE2E8] rounded-sm space-y-4 hover:border-[#2A64B0] transition-colors">
                <div className="text-xs font-mono font-semibold text-[#2A64B0] pb-2 border-b border-[#DDE2E8]">
                  03 · OPERATIONS
                </div>
                <h3 className="text-xl font-bold text-[#16181D]">
                  Financial Reporting & Documentation
                </h3>
                <p className="text-sm text-[#5B6370] leading-relaxed">
                  I can help organize reports, supporting documents, invoices, statements, and other financial records so they are easier to review and maintain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. MY EXPERIENCE (with Subtle Fade-in & Slide-up Entrance Animation) */}
        <section
          id="experience"
          ref={expReveal.ref}
          className={`py-24 sm:py-32 bg-[#14315C] text-white reveal-on-scroll ${
            expReveal.isVisible ? 'reveal-visible' : 'reveal-hidden'
          }`}
        >
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="max-w-2xl mb-16 space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-[#B79F6A]"></span>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#B79F6A]">
                  MY EXPERIENCE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                I've built my experience around bookkeeping, treasury, and financial operations.
              </h2>
            </div>

            {/* FEATURED ROLE: Freelance / Remote Bookkeeper */}
            <div className="border border-white/20 bg-white/[0.04] p-8 sm:p-10 rounded-sm mb-16 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-2 border-b lg:border-b-0 lg:border-r border-white/15 pb-6 lg:pb-0 lg:pr-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#B79F6A]">
                    Current Role
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Freelance / Remote Bookkeeper
                  </h3>
                  <div className="text-sm font-medium text-white/70">
                    March 2026 — Present
                  </div>
                  <div className="pt-3 text-xs text-white/60">
                    <span className="font-semibold text-white/90">Primary platform:</span> QuickBooks Online
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    I'm currently supporting bookkeeping workflows for remote clients and business operations. My work involves organizing financial records, reconciliation, cleanup, documentation, and reporting support.
                  </p>

                  <div className="space-y-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#B79F6A]">
                      What I work on:
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 border border-white/10 bg-white/[0.02] rounded-sm space-y-1">
                        <div className="text-sm font-semibold text-white">
                          Bookkeeping & Reconciliation
                        </div>
                        <p className="text-xs text-white/70 leading-relaxed">
                          I maintain organized financial records and work on bank, credit card, payroll-record, and loan-payment reconciliations.
                        </p>
                      </div>

                      <div className="p-4 border border-white/10 bg-white/[0.02] rounded-sm space-y-1">
                        <div className="text-sm font-semibold text-white">
                          Cleanup & Catch-Up
                        </div>
                        <p className="text-xs text-white/70 leading-relaxed">
                          I work through historical financial records to help bring books up to date and organized.
                        </p>
                      </div>

                      <div className="p-4 border border-white/10 bg-white/[0.02] rounded-sm space-y-1">
                        <div className="text-sm font-semibold text-white">
                          Client & Financial Documentation
                        </div>
                        <p className="text-xs text-white/70 leading-relaxed">
                          I gather invoices and statements, coordinate with clients, and keep supporting documentation organized.
                        </p>
                      </div>

                      <div className="p-4 border border-white/10 bg-white/[0.02] rounded-sm space-y-1">
                        <div className="text-sm font-semibold text-white">
                          Reporting Support
                        </div>
                        <p className="text-xs text-white/70 leading-relaxed">
                          I help prepare and organize financial reports for business review.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PREVIOUS ROLES VERTICAL TIMELINE */}
            <div className="space-y-8 pl-4 sm:pl-6 border-l-2 border-white/20">
              {/* Role 1: Settlement Lead */}
              <div className="relative pl-6 sm:pl-8 group">
                <div className="absolute -left-[25px] sm:-left-[33px] top-1.5 w-3 h-3 rounded-full bg-[#2A64B0] border-2 border-[#14315C]" />
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="text-xl font-bold text-white">
                      Settlement Lead
                    </h3>
                    <span className="text-xs text-white/60 font-mono">
                      June 2024 — June 2026
                    </span>
                  </div>
                  <div className="text-sm font-medium text-[#B79F6A]">
                    PJ Lhuillier Inc.
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed max-w-3xl">
                    In this role, I handled daily settlement operations and worked with domestic and international fund transfers.
                  </p>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                      My responsibilities included:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/75">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2A64B0]" />
                        <span>Processing RTGS and PDDTS transactions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2A64B0]" />
                        <span>Coordinating with banking partners</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2A64B0]" />
                        <span>Maintaining organized, audit-ready records</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2A64B0]" />
                        <span>Supporting treasury settlement workflows</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Role 2: Treasury Settlements Associate */}
              <div className="relative pl-6 sm:pl-8 pt-4 group">
                <div className="absolute -left-[25px] sm:-left-[33px] top-5.5 w-3 h-3 rounded-full bg-white/40 border-2 border-[#14315C]" />
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="text-xl font-bold text-white">
                      Treasury Settlements Associate
                    </h3>
                    <span className="text-xs text-white/60 font-mono">
                      January 2023 — June 2024
                    </span>
                  </div>
                  <div className="text-sm font-medium text-[#B79F6A]">
                    PJ Lhuillier Inc.
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed max-w-3xl">
                    I worked on daily treasury settlement activities, reconciliations, settlement reports, and banking confirmations.
                  </p>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                      My responsibilities included:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/75">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2A64B0]" />
                        <span>Managing treasury settlement transactions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2A64B0]" />
                        <span>Performing reconciliations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2A64B0]" />
                        <span>Preparing settlement reports</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2A64B0]" />
                        <span>Monitoring banking confirmations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2A64B0]" />
                        <span>Supporting daily treasury operations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Role 3: SK Treasurer */}
              <div className="relative pl-6 sm:pl-8 pt-4 group">
                <div className="absolute -left-[25px] sm:-left-[33px] top-5.5 w-3 h-3 rounded-full bg-white/40 border-2 border-[#14315C]" />
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="text-xl font-bold text-white">
                      SK Treasurer
                    </h3>
                    <span className="text-xs text-white/60 font-mono">
                      August 2020 — October 2022
                    </span>
                  </div>
                  <div className="text-sm font-medium text-[#B79F6A]">
                    Sangguniang Kabataan
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed max-w-3xl">
                    This experience gave me hands-on exposure to managing funds and maintaining financial documentation.
                  </p>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                      I handled:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/75">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2A64B0]" />
                        <span>Government youth funds</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2A64B0]" />
                        <span>Financial reports</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2A64B0]" />
                        <span>Liquidation records</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2A64B0]" />
                        <span>Budget documentation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CERTIFICATIONS & TRAINING (Direct Certificate Previews + Scroll Reveal) */}
        <section
          id="certifications"
          ref={certReveal.ref}
          className={`py-20 sm:py-28 bg-[#F4F6F9] border-b border-[#DDE2E8] reveal-on-scroll ${
            certReveal.isVisible ? 'reveal-visible' : 'reveal-hidden'
          }`}
        >
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-14 sm:mb-16 space-y-3">
              <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#2A64B0]">
                CERTIFICATIONS & TRAINING
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#14315C]">
                I continue to build my bookkeeping and accounting skills through certifications and training.
              </h2>
              <p className="text-sm text-[#5B6370]">
                Verified credentials from Intuit ProAdvisor, Xero, MAB Online Academy, and Cebuana Lhuillier Academy.
              </p>
            </div>

            {/* Direct Visual Certificate Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {allCertificates.map((cert) => (
                <CertificateCard
                  key={cert.id}
                  cert={cert}
                  onSelect={(id) => setSelectedCert(id)}
                />
              ))}
            </div>

            {/* XERO WORKFLOW COMPETENCIES SUB-SECTION */}
            <div className="bg-white border border-[#DDE2E8] p-8 sm:p-10 rounded-sm shadow-xs">
              <div className="max-w-2xl mb-8 space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#2A64B0]">
                  XERO WORKFLOW COMPETENCIES
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#14315C]">
                  My Xero training covered the core workflow from setup to reconciliation.
                </h3>
              </div>

              {/* Clean horizontal progression timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-4 border-t border-[#DDE2E8]">
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-[#2A64B0]">
                    01
                  </div>
                  <div className="text-sm font-bold text-[#16181D]">
                    Organization Setup
                  </div>
                  <p className="text-xs text-[#5B6370] leading-relaxed">
                    Financial settings · Chart of accounts · Conversion balances
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-[#2A64B0]">
                    02
                  </div>
                  <div className="text-sm font-bold text-[#16181D]">
                    Sales
                  </div>
                  <p className="text-xs text-[#5B6370] leading-relaxed">
                    Invoice setup · Sales invoices · Tax configuration
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-[#2A64B0]">
                    03
                  </div>
                  <div className="text-sm font-bold text-[#16181D]">
                    Purchases
                  </div>
                  <p className="text-xs text-[#5B6370] leading-relaxed">
                    Supplier bills · Expense accounts · Tax configuration
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-[#2A64B0]">
                    04
                  </div>
                  <div className="text-sm font-bold text-[#16181D]">
                    Bank Reconciliation
                  </div>
                  <p className="text-xs text-[#5B6370] leading-relaxed">
                    Matched transactions · Bank statement reconciliation · Transaction categorization
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-[#2A64B0]">
                    05
                  </div>
                  <div className="text-sm font-bold text-[#16181D]">
                    Dashboard & Financial Workflow
                  </div>
                  <p className="text-xs text-[#5B6370] leading-relaxed">
                    Xero organization dashboard and core accounting workflow navigation
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#DDE2E8] text-xs text-[#5B6370]">
                These competencies were developed through my Xero Certified Associate — Level 1 certification and assessment workbook.
              </div>
            </div>
          </div>
        </section>

        {/* 8. WORK SAMPLES (with Subtle Fade-in & Slide-up Entrance Animation) */}
        <section
          id="work-samples"
          ref={workReveal.ref}
          className={`py-20 sm:py-28 border-b border-[#DDE2E8] reveal-on-scroll ${
            workReveal.isVisible ? 'reveal-visible' : 'reveal-hidden'
          }`}
        >
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-14 sm:mb-16 space-y-3">
              <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#2A64B0]">
                WORK SAMPLES
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#14315C]">
                Here's a look at some of the bookkeeping work I've practiced.
              </h2>
              <p className="text-sm text-[#5B6370] leading-relaxed">
                These reports were prepared in a QuickBooks Online sample company for training and demonstration. They are <strong className="font-semibold text-[#16181D]">not client work</strong>.
              </p>
            </div>

            {/* Exactly 4 Work Samples */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sample 1: Credit Card Reconciliation */}
              <div
                onClick={() => setSelectedSample('reconciliation')}
                className="group border border-[#DDE2E8] bg-white rounded-sm hover:border-[#2A64B0] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Financial Document Preview Box */}
                  <div className="bg-[#F4F6F9] border border-[#DDE2E8] p-4 rounded-sm font-mono text-[11px] text-[#16181D]">
                    <div className="flex items-center justify-between pb-2 border-b border-[#DDE2E8] font-sans">
                      <span className="font-bold text-[#14315C] text-xs">Laundry Design Company</span>
                      <span className="text-[10px] text-[#2A64B0] font-semibold uppercase tracking-wider">Wells Fargo CC 4338</span>
                    </div>
                    <div className="pt-2.5 space-y-1.5 tabular-nums">
                      <div className="flex justify-between text-[#5B6370]">
                        <span>Statement Beginning Balance</span>
                        <span>$149.00</span>
                      </div>
                      <div className="flex justify-between text-[#5B6370]">
                        <span>Charges & Advances Cleared (39)</span>
                        <span>$3,659.47</span>
                      </div>
                      <div className="flex justify-between text-[#5B6370]">
                        <span>Payments & Credits Cleared (4)</span>
                        <span>-$3,519.98</span>
                      </div>
                      <div className="flex justify-between font-bold text-[#16181D] border-t border-[#DDE2E8] pt-1">
                        <span>Statement Ending Balance</span>
                        <span>$288.49</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#2A64B0] mb-1">
                      TRAINING / DEMONSTRATION SAMPLE
                    </div>
                    <h3 className="text-xl font-bold text-[#16181D] group-hover:text-[#2A64B0] transition-colors">
                      Credit Card Reconciliation
                    </h3>
                    <p className="text-sm text-[#5B6370] mt-1.5 leading-relaxed">
                      A reconciliation report matching charges and payments against a statement.
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 py-3.5 bg-[#F4F6F9]/60 border-t border-[#DDE2E8] flex items-center justify-between text-xs text-[#2A64B0] font-medium">
                  <span>View Full Reconciled Report</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Sample 2: Profit & Loss */}
              <div
                onClick={() => setSelectedSample('pnl')}
                className="group border border-[#DDE2E8] bg-white rounded-sm hover:border-[#2A64B0] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Financial Document Preview Box */}
                  <div className="bg-[#F4F6F9] border border-[#DDE2E8] p-4 rounded-sm font-mono text-[11px] text-[#16181D]">
                    <div className="flex items-center justify-between pb-2 border-b border-[#DDE2E8] font-sans">
                      <span className="font-bold text-[#14315C] text-xs">Laundry Design Company</span>
                      <span className="text-[10px] text-[#2A64B0] font-semibold uppercase tracking-wider">March 1–31, 2025</span>
                    </div>
                    <div className="pt-2.5 space-y-1.5 tabular-nums">
                      <div className="flex justify-between text-[#5B6370]">
                        <span>Total Income</span>
                        <span>$18,284.11</span>
                      </div>
                      <div className="flex justify-between text-[#5B6370]">
                        <span>Total Cost of Goods Sold (COGS)</span>
                        <span>$6,716.61</span>
                      </div>
                      <div className="flex justify-between font-bold text-[#14315C]">
                        <span>Gross Profit</span>
                        <span>$11,567.50</span>
                      </div>
                      <div className="flex justify-between text-[#5B6370]">
                        <span>Total Expenses</span>
                        <span>$15,427.30</span>
                      </div>
                      <div className="flex justify-between font-bold text-[#16181D] border-t border-[#DDE2E8] pt-1">
                        <span>Net Income</span>
                        <span>-$3,859.80</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#2A64B0] mb-1">
                      TRAINING / DEMONSTRATION SAMPLE
                    </div>
                    <h3 className="text-xl font-bold text-[#16181D] group-hover:text-[#2A64B0] transition-colors">
                      Profit & Loss
                    </h3>
                    <p className="text-sm text-[#5B6370] mt-1.5 leading-relaxed">
                      A financial report showing income, cost of goods sold, and expenses organized for review.
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 py-3.5 bg-[#F4F6F9]/60 border-t border-[#DDE2E8] flex items-center justify-between text-xs text-[#2A64B0] font-medium">
                  <span>View Full P&L Statement</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Sample 3: Balance Sheet */}
              <div
                onClick={() => setSelectedSample('balanceSheet')}
                className="group border border-[#DDE2E8] bg-white rounded-sm hover:border-[#2A64B0] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Financial Document Preview Box */}
                  <div className="bg-[#F4F6F9] border border-[#DDE2E8] p-4 rounded-sm font-mono text-[11px] text-[#16181D]">
                    <div className="flex items-center justify-between pb-2 border-b border-[#DDE2E8] font-sans">
                      <span className="font-bold text-[#14315C] text-xs">Laundry Design Company</span>
                      <span className="text-[10px] text-[#2A64B0] font-semibold uppercase tracking-wider">As of March 31, 2025</span>
                    </div>
                    <div className="pt-2.5 space-y-1.5 tabular-nums">
                      <div className="flex justify-between text-[#5B6370]">
                        <span>Current Assets (Bank, A/R, Inventory)</span>
                        <span>$109,972.87</span>
                      </div>
                      <div className="flex justify-between text-[#5B6370]">
                        <span>Fixed Assets (Equipment)</span>
                        <span>$13,764.21</span>
                      </div>
                      <div className="flex justify-between font-bold text-[#14315C]">
                        <span>TOTAL ASSETS</span>
                        <span>$123,737.08</span>
                      </div>
                      <div className="flex justify-between text-[#5B6370]">
                        <span>Total Liabilities</span>
                        <span>$103,626.34</span>
                      </div>
                      <div className="flex justify-between font-bold text-[#16181D] border-t border-[#DDE2E8] pt-1">
                        <span>TOTAL LIABILITIES & EQUITY</span>
                        <span>$123,737.08</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#2A64B0] mb-1">
                      TRAINING / DEMONSTRATION SAMPLE
                    </div>
                    <h3 className="text-xl font-bold text-[#16181D] group-hover:text-[#2A64B0] transition-colors">
                      Balance Sheet
                    </h3>
                    <p className="text-sm text-[#5B6370] mt-1.5 leading-relaxed">
                      A report showing assets, liabilities, and equity organized for review.
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 py-3.5 bg-[#F4F6F9]/60 border-t border-[#DDE2E8] flex items-center justify-between text-xs text-[#2A64B0] font-medium">
                  <span>View Full Balance Sheet</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Sample 4: A/R Aging Summary */}
              <div
                onClick={() => setSelectedSample('arAging')}
                className="group border border-[#DDE2E8] bg-white rounded-sm hover:border-[#2A64B0] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Financial Document Preview Box */}
                  <div className="bg-[#F4F6F9] border border-[#DDE2E8] p-4 rounded-sm font-mono text-[11px] text-[#16181D]">
                    <div className="flex items-center justify-between pb-2 border-b border-[#DDE2E8] font-sans">
                      <span className="font-bold text-[#14315C] text-xs">Laundry Design Company</span>
                      <span className="text-[10px] text-[#2A64B0] font-semibold uppercase tracking-wider">Aging As of Mar 31, 2025</span>
                    </div>
                    <div className="pt-2.5 space-y-1.5 tabular-nums">
                      <div className="flex justify-between text-[#5B6370]">
                        <span>Current (0–30 days)</span>
                        <span>$3,350.00</span>
                      </div>
                      <div className="flex justify-between text-[#5B6370]">
                        <span>1–30 Days Past Due</span>
                        <span>$4,659.11</span>
                      </div>
                      <div className="flex justify-between text-[#5B6370]">
                        <span>31–60 Days Past Due</span>
                        <span>$9,539.73</span>
                      </div>
                      <div className="flex justify-between text-[#5B6370]">
                        <span>61–90 Days Past Due</span>
                        <span>$2,369.52</span>
                      </div>
                      <div className="flex justify-between font-bold text-[#16181D] border-t border-[#DDE2E8] pt-1">
                        <span>Total Accounts Receivable</span>
                        <span>$19,918.36</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#2A64B0] mb-1">
                      TRAINING / DEMONSTRATION SAMPLE
                    </div>
                    <h3 className="text-xl font-bold text-[#16181D] group-hover:text-[#2A64B0] transition-colors">
                      A/R Aging Summary
                    </h3>
                    <p className="text-sm text-[#5B6370] mt-1.5 leading-relaxed">
                      A report showing outstanding receivables grouped according to aging period.
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 py-3.5 bg-[#F4F6F9]/60 border-t border-[#DDE2E8] flex items-center justify-between text-xs text-[#2A64B0] font-medium">
                  <span>View Full A/R Aging Report</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-xs text-[#5B6370]">
              Note: All samples use QuickBooks sample company data. No client names, account numbers, or private financial information are shown.
            </div>
          </div>
        </section>

        {/* 9. TOOLS I USE (Editorial Table Layout) */}
        <section id="tools" className="py-20 sm:py-28 bg-[#F4F6F9] border-b border-[#DDE2E8]">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-14 sm:mb-16 space-y-3">
              <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#2A64B0]">
                TOOLS I USE
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#14315C]">
                I use a combination of accounting, finance, productivity, and collaboration tools in my work.
              </h2>
            </div>

            {/* Editorial Table Layout: CATEGORY vs TOOLS with thin dividers */}
            <div className="bg-white border border-[#DDE2E8] rounded-sm divide-y divide-[#DDE2E8] shadow-xs">
              <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="w-full md:w-1/3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#14315C]">
                    Accounting & Finance
                  </div>
                </div>
                <div className="w-full md:w-2/3 text-sm text-[#16181D] font-medium">
                  QuickBooks Online · Xero · SAP · Microsoft Excel · Google Sheets
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="w-full md:w-1/3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#14315C]">
                    Treasury & Banking
                  </div>
                </div>
                <div className="w-full md:w-2/3 text-sm text-[#16181D] font-medium">
                  Treasury Management Systems · RTGS · PDDTS
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="w-full md:w-1/3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#14315C]">
                    Productivity
                  </div>
                </div>
                <div className="w-full md:w-2/3 text-sm text-[#16181D] font-medium">
                  Microsoft Outlook · Google Drive · OneDrive · PDF Tools
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="w-full md:w-1/3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#14315C]">
                    Collaboration
                  </div>
                </div>
                <div className="w-full md:w-2/3 text-sm text-[#16181D] font-medium">
                  Slack · Microsoft Teams · Zoom · Google Meet · WhatsApp
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="w-full md:w-1/3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#14315C]">
                    AI-Assisted Productivity
                  </div>
                </div>
                <div className="w-full md:w-2/3 text-sm text-[#16181D] font-medium">
                  ChatGPT · Claude · Gemini
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. ABOUT ME */}
        <section id="about" className="py-20 sm:py-28 border-b border-[#DDE2E8]">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="max-w-2xl mb-12 space-y-3">
              <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#2A64B0]">
                ABOUT ME
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#14315C]">
                I enjoy work where organization, accuracy, and attention to detail really matter.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* LEFT: About narrative */}
              <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#5B6370] leading-relaxed">
                <p>
                  I'm a freelance bookkeeper and finance operations professional with experience across bookkeeping, treasury settlements, reconciliation, banking coordination, and financial reporting.
                </p>
                <p>
                  My background in high-volume financial operations, together with my QuickBooks Online and Xero certifications, allows me to support businesses with structured financial records, organized workflows, and dependable remote finance support.
                </p>
                <p>
                  I value clear communication, organized documentation, and work that can be checked and understood easily.
                </p>
              </div>

              {/* RIGHT: Education Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#F4F6F9] border border-[#DDE2E8] p-7 sm:p-8 rounded-sm space-y-3 shadow-xs">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#2A64B0]">
                    EDUCATION
                  </div>
                  <h3 className="text-xl font-bold text-[#14315C]">
                    Bachelor of Science in Business Administration
                  </h3>
                  <div className="text-base font-semibold text-[#16181D]">
                    Divine Word College of Vigan
                  </div>
                  <div className="text-xs text-[#5B6370]">
                    2018 — 2022
                  </div>
                  <div className="inline-block mt-2 pt-1 text-xs font-semibold text-[#B79F6A]">
                    Graduated with Distinction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. FAQ ACCORDION (White background, subtle dividers) */}
        <section className="py-20 sm:py-28 border-b border-[#DDE2E8]">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="max-w-2xl mb-12 space-y-3">
              <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#2A64B0]">
                FAQ
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#14315C]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl divide-y divide-[#DDE2E8] border-t border-b border-[#DDE2E8]">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="py-5">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between text-left text-base sm:text-lg font-semibold text-[#16181D] hover:text-[#2A64B0] transition-colors focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#2A64B0] shrink-0 ml-4" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#5B6370] shrink-0 ml-4" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="mt-3 text-sm text-[#5B6370] leading-relaxed pr-8 animate-fade-in">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 12. CONTACT SECTION (CENTERED as requested) */}
        <section id="contact" className="py-24 sm:py-32 bg-[#14315C] text-white">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6 flex flex-col items-center">
              <div className="inline-flex items-center justify-center gap-2">
                <span className="h-px w-6 bg-[#B79F6A]"></span>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#B79F6A]">
                  LET'S CONNECT
                </span>
                <span className="h-px w-6 bg-[#B79F6A]"></span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Let's talk about what you need help with.
              </h2>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
                If you're looking for bookkeeping support, help organizing financial records, or someone who can assist with day-to-day finance operations, I'd be happy to hear about your needs.
              </p>

              {/* Centered Action Buttons */}
              <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
                <a
                  href="mailto:angelicamaeesteban27@gmail.com"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-[#2A64B0] hover:bg-[#1e4b85] transition-colors rounded-sm shadow-md"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/angelica-mae-esteban-48b9b43a4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-[#14315C] bg-white hover:bg-[#F4F6F9] transition-colors rounded-sm shadow-md"
                >
                  <Linkedin className="w-4 h-4 text-[#0077b5]" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>

              {/* Direct Email Address display Centered */}
              <div className="pt-6 border-t border-white/15 text-sm text-white/70 w-full text-center">
                <span className="text-white/50">Email: </span>
                <a
                  href="mailto:angelicamaeesteban27@gmail.com"
                  className="font-medium text-white hover:text-[#B79F6A] transition-colors underline underline-offset-4"
                >
                  angelicamaeesteban27@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 13. FOOTER */}
      <footer className="bg-[#14315C] text-white border-t border-white/10 py-16">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-start">
            <div className="md:col-span-6 space-y-2">
              <div className="text-lg font-bold tracking-tight text-white">
                Angelica Mae R. Esteban
              </div>
              <p className="text-sm text-white/70">
                Freelance Bookkeeper · Finance & Treasury Operations Professional
              </p>
              <div className="text-xs text-white/50 pt-1">
                Vigan City, Philippines
              </div>
            </div>

            <div className="md:col-span-6 md:text-right space-y-2 text-sm text-white/80">
              <div>
                <span className="text-white/50">Email: </span>
                <a
                  href="mailto:angelicamaeesteban27@gmail.com"
                  className="hover:text-[#B79F6A] transition-colors"
                >
                  angelicamaeesteban27@gmail.com
                </a>
              </div>
              <div>
                <span className="text-white/50">LinkedIn: </span>
                <a
                  href="https://www.linkedin.com/in/angelica-mae-esteban-48b9b43a4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B79F6A] transition-colors"
                >
                  linkedin.com/in/angelica-mae-esteban-48b9b43a4
                </a>
              </div>
              <div className="pt-2 text-xs font-medium text-[#B79F6A]">
                Built with care for clarity and trust.
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
            <div>
              © 2026 Angelica Mae R. Esteban. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
              <a href="#work-samples" className="hover:text-white transition-colors">Work Samples</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <WorkSampleModal
        sampleId={selectedSample}
        onClose={() => setSelectedSample(null)}
      />
      <CertModal
        certId={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}
