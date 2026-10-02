import React from 'react';
import { Award, CheckCircle2, Calendar, ShieldCheck, ExternalLink, QrCode } from 'lucide-react';

export interface CertItemData {
  id: string;
  title: string;
  issuer: string;
  date: string;
  validity?: string;
  credentialId?: string;
  recipient: string;
  signatory: string;
  signatoryTitle: string;
  theme: 'intuit' | 'xero' | 'mab' | 'cebuana';
  badgeLabel: string;
  badgeSub: string;
  description: string;
  highlights: string[];
}

export const allCertificates: CertItemData[] = [
  {
    id: 'qbo_l1',
    title: 'QuickBooks Online Certification — Level 1',
    issuer: 'Intuit ProAdvisor',
    date: 'Feb 01, 2026',
    recipient: 'Angelica Mae Esteban',
    signatory: 'Ted Callahan',
    signatoryTitle: 'Accountant Leader, Global Business Solutions Group',
    theme: 'intuit',
    badgeLabel: 'QuickBooks',
    badgeSub: 'Level 1',
    description: 'Comprehensive certification demonstrating proficiency in QuickBooks Online setup, chart of accounts management, transaction workflow, and reporting.',
    highlights: [
      'Company setup, navigation & subscription management',
      'Chart of Accounts structure and customized ledger entries',
      'Sales and expense workflow, invoicing and bill management',
      'Bank feed connectivity, rules automation, and monthly reconciliations',
    ],
  },
  {
    id: 'qbo_workforce',
    title: 'QuickBooks Workforce Certified',
    issuer: 'Intuit ProAdvisor',
    date: 'Aug 22, 2026',
    recipient: 'Angelica Mae Esteban',
    signatory: 'Simon Williams',
    signatoryTitle: 'VP, Accountant Segment Leader, Global Business Solutions',
    theme: 'intuit',
    badgeLabel: 'QuickBooks',
    badgeSub: 'Workforce',
    description: 'Specialized credential validating employee setup, payroll documentation, and automated workforce transaction tracking.',
    highlights: [
      'Workforce self-service employee portal configuration',
      'Time-tracking synchronization with payroll accounting',
      'Pay stubs, W-2/1099 supporting document handling',
      'Compliance records and payroll reconciliation procedures',
    ],
  },
  {
    id: 'xero_l1',
    title: 'Xero Certified Associate — Level 1',
    issuer: 'Xero',
    date: '26/01/2026',
    validity: 'Valid until: 26/01/2027',
    recipient: 'Angelica Mae Esteban',
    signatory: 'Vikki Bean',
    signatoryTitle: 'GM - Education & Content Delivery, Xero',
    theme: 'xero',
    badgeLabel: 'XERO',
    badgeSub: 'L1 ASSOCIATE',
    description: 'Official Xero certification covering the full accounting lifecycle from initial organization setup to final bank statement reconciliation.',
    highlights: [
      'Organization financial settings and conversion balance setup',
      'Chart of Accounts customization and multi-currency tracking',
      'Sales invoicing, accounts receivable & tax configuration',
      'Supplier bills, expense reporting & bank rule reconciliation',
    ],
  },
  {
    id: 'mab_online',
    title: 'Online Accounting & Bookkeeping Course',
    issuer: 'MAB Online Academy',
    date: '2026-04-20',
    credentialId: '357fd928-4c14-4621-9324-1efd9977bcb3',
    recipient: 'Angelica Mae R. Esteban',
    signatory: 'Mary Anne C. Bantog',
    signatoryTitle: 'Founder, Head Instructor',
    theme: 'mab',
    badgeLabel: '40-HOUR',
    badgeSub: 'COMPLETION',
    description: '40 hours of intensive hands-on accounting and bookkeeping training with extensive activities in QuickBooks and Xero.',
    highlights: [
      '40 hours of rigorous practical accounting & bookkeeping training',
      'Extensive hands-on case studies in QuickBooks and Xero',
      'Adjusting journal entries, prepaid expenses, and depreciation accruals',
      'End-of-period closing, trial balance preparation, and financial statements',
    ],
  },
  {
    id: 'qbo_payroll',
    title: 'QuickBooks Online Payroll Certification',
    issuer: 'Intuit ProAdvisor Academy · 2026',
    date: '2026',
    recipient: 'Angelica Mae Esteban',
    signatory: 'Intuit ProAdvisor Academy',
    signatoryTitle: 'Professional Education Board',
    theme: 'intuit',
    badgeLabel: 'QuickBooks',
    badgeSub: 'Payroll',
    description: 'Advanced credential focusing on automated payroll processing, employee tax withholdings, and payroll ledger reconciliations.',
    highlights: [
      'Payroll tax calculation, withholding schedules, and filings',
      'Direct deposit setup, contractor 1099 management, and payroll reports',
      'Wage expense allocation across job departments and classes',
      'Quarterly and year-end payroll reconciliation protocols',
    ],
  },
  {
    id: 'cebuana_aml',
    title: 'Money Laundering & Terrorism Financing Prevention Program (MTPP) and Consumer Fraud Training',
    issuer: 'Cebuana Lhuillier Academy · October 2024',
    date: 'October 09, 2024',
    recipient: 'Esteban, Angelica Mae Riotoc',
    signatory: 'Emmanuel A. Santiago & Marie Joyce Orgasan',
    signatoryTitle: 'AML Compliance Leadership, Cebuana Lhuillier',
    theme: 'cebuana',
    badgeLabel: 'AML / MTPP',
    badgeSub: 'COMPLIANT',
    description: 'Institutional compliance training on anti-money laundering regulations, suspicious transaction reporting, and financial fraud detection.',
    highlights: [
      'Regulatory compliance for high-volume banking & remittance operations',
      'Know Your Customer (KYC) verification and customer due diligence',
      'Red flag identification for consumer fraud and suspicious fund transfers',
      'Documentation and audit trail retention standards',
    ],
  },
];

interface CertificateCardProps {
  cert: CertItemData;
  onSelect: (certId: string) => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ cert, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(cert.id)}
      className="group relative bg-white border border-[#DDE2E8] hover:border-[#2A64B0] shadow-sm hover:shadow-md transition-all duration-300 rounded-sm cursor-pointer overflow-hidden flex flex-col justify-between"
    >
      {/* Top Banner based on theme */}
      {cert.theme === 'intuit' && (
        <div className="h-2 w-full bg-gradient-to-r from-[#14315C] via-[#2A64B0] to-[#00AEEF]" />
      )}
      {cert.theme === 'xero' && (
        <div className="h-2 w-full bg-[#00AEEF]" />
      )}
      {cert.theme === 'mab' && (
        <div className="h-2 w-full bg-gradient-to-r from-[#14315C] via-[#B79F6A] to-[#14315C]" />
      )}
      {cert.theme === 'cebuana' && (
        <div className="h-2 w-full bg-gradient-to-r from-[#14315C] via-[#B79F6A] to-[#2A64B0]" />
      )}

      {/* Visual Certificate Body */}
      <div className="p-6 sm:p-7 space-y-5">
        {/* Certificate Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#DDE2E8]/80">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#2A64B0]">
              {cert.issuer}
            </div>
            <div className="text-xs text-[#5B6370] mt-0.5">
              Certificate of Completion
            </div>
          </div>

          {/* Authentic Badge Icon */}
          <div className="shrink-0">
            {cert.theme === 'intuit' && (
              <div className="w-14 h-16 bg-[#14315C] text-white rounded-t-sm rounded-b-xl flex flex-col items-center justify-center p-1 border border-white/20 shadow-xs">
                <span className="text-[8px] font-bold text-white tracking-tighter uppercase">INTUIT</span>
                <span className="text-[9px] font-bold text-[#00AEEF] leading-tight text-center">{cert.badgeSub}</span>
                <span className="text-[7px] text-[#A9AFB6] uppercase tracking-widest mt-0.5">CERTIFIED</span>
              </div>
            )}
            {cert.theme === 'xero' && (
              <div className="w-14 h-14 bg-[#00AEEF] text-white rounded-full flex flex-col items-center justify-center p-1 shadow-xs border-2 border-white">
                <span className="text-[10px] font-bold tracking-tight">xero</span>
                <span className="text-[7px] font-semibold uppercase tracking-wider">LEVEL 1</span>
              </div>
            )}
            {cert.theme === 'mab' && (
              <div className="w-14 h-14 bg-[#14315C] text-[#B79F6A] rounded-sm flex flex-col items-center justify-center p-1 border border-[#B79F6A]/50 shadow-xs">
                <Award className="w-5 h-5 text-[#B79F6A]" />
                <span className="text-[7px] font-bold uppercase tracking-wider text-white">40 HOURS</span>
              </div>
            )}
            {cert.theme === 'cebuana' && (
              <div className="w-14 h-14 bg-[#14315C] text-[#B79F6A] rounded-full flex flex-col items-center justify-center p-1 border-2 border-[#B79F6A] shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#B79F6A]" />
                <span className="text-[7px] font-bold uppercase tracking-wider text-white">MTPP</span>
              </div>
            )}
          </div>
        </div>

        {/* Recipient & Certificate Name */}
        <div className="space-y-2">
          <div className="text-xs text-[#5B6370]">
            Awarded to:
          </div>
          <div className="text-lg font-bold text-[#14315C] font-serif tracking-tight">
            {cert.recipient}
          </div>
          <h3 className="text-base font-bold text-[#16181D] group-hover:text-[#2A64B0] transition-colors pt-1">
            {cert.title}
          </h3>
        </div>

        {/* Certificate Meta Details */}
        <div className="bg-[#F4F6F9] p-3.5 rounded-sm border border-[#DDE2E8]/60 space-y-1.5 text-xs">
          <div className="flex justify-between items-center text-[#5B6370]">
            <span>Date Issued:</span>
            <span className="font-semibold text-[#16181D]">{cert.date}</span>
          </div>
          {cert.validity && (
            <div className="flex justify-between items-center text-[#5B6370]">
              <span>Status:</span>
              <span className="font-semibold text-[#14315C]">{cert.validity}</span>
            </div>
          )}
          {cert.credentialId && (
            <div className="flex justify-between items-center text-[#5B6370]">
              <span>Credential ID:</span>
              <span className="font-mono text-[10px] text-[#16181D] truncate max-w-[170px]">{cert.credentialId}</span>
            </div>
          )}
          <div className="flex justify-between items-center text-[#5B6370] pt-1 border-t border-[#DDE2E8]">
            <span>Authorized by:</span>
            <span className="font-medium text-[#16181D] text-right truncate max-w-[180px]">{cert.signatory}</span>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 sm:px-7 py-3.5 bg-[#F4F6F9]/60 border-t border-[#DDE2E8] flex items-center justify-between text-xs text-[#2A64B0] font-semibold">
        <span>Inspect Official Certificate</span>
        <span className="text-[11px] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
          View Details →
        </span>
      </div>
    </div>
  );
};
