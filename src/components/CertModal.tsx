import React from 'react';
import { X, Award, CheckCircle2, Calendar } from 'lucide-react';

export interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  validity?: string;
  credentialId?: string;
  description: string;
  highlights: string[];
}

export const credentialsData: Record<string, CredentialItem> = {
  qbo_l1: {
    id: 'qbo_l1',
    title: 'QuickBooks Online Certification — Level 1',
    issuer: 'Intuit ProAdvisor',
    date: 'February 01, 2026',
    description: 'Comprehensive certification demonstrating proficiency in QuickBooks Online setup, chart of accounts management, transaction workflow, and reporting.',
    highlights: [
      'Company setup, navigation & subscription management',
      'Chart of Accounts structure and customized ledger entries',
      'Sales and expense workflow, invoicing and bill management',
      'Bank feed connectivity, rules automation, and monthly reconciliations',
    ],
  },
  qbo_workforce: {
    id: 'qbo_workforce',
    title: 'QuickBooks Workforce Certified',
    issuer: 'Intuit ProAdvisor',
    date: 'August 22, 2026',
    description: 'Specialized credential validating employee setup, payroll documentation, and automated workforce transaction tracking.',
    highlights: [
      'Workforce self-service employee portal configuration',
      'Time-tracking synchronization with payroll accounting',
      'Pay stubs, W-2/1099 supporting document handling',
      'Compliance records and payroll reconciliation procedures',
    ],
  },
  xero_l1: {
    id: 'xero_l1',
    title: 'Xero Certified Associate — Level 1',
    issuer: 'Xero',
    date: 'January 26, 2026',
    validity: 'Valid until January 26, 2027',
    description: 'Official Xero certification covering the full accounting lifecycle from initial organization setup to final bank statement reconciliation.',
    highlights: [
      'Organization financial settings and conversion balance setup',
      'Chart of Accounts customization and multi-currency tracking',
      'Sales invoicing, accounts receivable & tax configuration',
      'Supplier bills, expense reporting & bank rule reconciliation',
    ],
  },
  mab_online: {
    id: 'mab_online',
    title: 'Online Accounting & Bookkeeping Course',
    issuer: 'MAB Online Academy',
    date: 'April 20, 2026',
    credentialId: '357fd928-4c14-4621-9324-1efd9977bcb3',
    description: 'Intensive 40-hour hands-on curriculum encompassing double-entry bookkeeping, adjusting journal entries, and real-world accounting software workflows.',
    highlights: [
      '40 hours of rigorous practical accounting & bookkeeping training',
      'Extensive hands-on case studies in QuickBooks and Xero',
      'Adjusting journal entries, prepaid expenses, and depreciation accruals',
      'End-of-period closing, trial balance preparation, and financial statements',
    ],
  },
  qbo_payroll: {
    id: 'qbo_payroll',
    title: 'QuickBooks Online Payroll Certification',
    issuer: 'Intuit ProAdvisor Academy · 2026',
    date: '2026',
    description: 'Advanced credential focusing on automated payroll processing, employee tax withholdings, and payroll ledger reconciliations.',
    highlights: [
      'Payroll tax calculation, withholding schedules, and filings',
      'Direct deposit setup, contractor 1099 management, and payroll reports',
      'Wage expense allocation across job departments and classes',
      'Quarterly and year-end payroll reconciliation protocols',
    ],
  },
  cebuana_aml: {
    id: 'cebuana_aml',
    title: 'Money Laundering & Terrorism Financing Prevention Program (MTPP) and Consumer Fraud Training',
    issuer: 'Cebuana Lhuillier Academy · October 2024',
    date: 'October 09, 2024',
    description: 'Institutional compliance training on anti-money laundering regulations, suspicious transaction reporting, and financial fraud detection.',
    highlights: [
      'Regulatory compliance for high-volume banking & remittance operations',
      'Know Your Customer (KYC) verification and customer due diligence',
      'Red flag identification for consumer fraud and suspicious fund transfers',
      'Documentation and audit trail retention standards',
    ],
  },
};

interface CertModalProps {
  certId: string | null;
  onClose: () => void;
}

export const CertModal: React.FC<CertModalProps> = ({ certId, onClose }) => {
  if (!certId) return null;
  const cert = credentialsData[certId];
  if (!cert) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#16181D]/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white border border-[#DDE2E8] shadow-2xl rounded-sm p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between pb-4 border-b border-[#DDE2E8]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-[#14315C] text-white flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-[#B79F6A]" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2A64B0]">
                {cert.issuer}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#16181D]">
                {cert.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-[#5B6370] hover:text-[#16181D] hover:bg-[#F4F6F9] rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 space-y-4">
          <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-[#5B6370] pb-2 border-b border-[#DDE2E8]">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#2A64B0]" />
              <span>Issued: {cert.date}</span>
            </div>
            {cert.validity && (
              <span className="text-[#14315C] font-medium">· {cert.validity}</span>
            )}
            {cert.credentialId && (
              <span className="text-[#5B6370] font-mono text-[11px]">· ID: {cert.credentialId}</span>
            )}
          </div>

          <p className="text-sm text-[#16181D]/80 leading-relaxed">
            {cert.description}
          </p>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#14315C] mb-2">
              Key Competencies Demonstrated
            </div>
            <ul className="space-y-2">
              {cert.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#5B6370]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2A64B0] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-[#DDE2E8] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#2A64B0] hover:bg-[#14315C] transition-colors rounded-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
