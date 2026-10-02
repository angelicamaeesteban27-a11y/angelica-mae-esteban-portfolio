import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export interface SampleReport {
  id: string;
  title: string;
  badge: string;
  description: string;
  company: string;
  period: string;
  sections: {
    heading?: string;
    rows: { label: string; amount?: string; note?: string; isTotal?: boolean; isHeader?: boolean }[];
  }[];
  notes: string[];
}

export const sampleReportsData: Record<string, SampleReport> = {
  reconciliation: {
    id: 'reconciliation',
    title: 'Credit Card Reconciliation',
    badge: 'Training / Demonstration Sample',
    description: 'A reconciliation report matching charges and payments against a statement.',
    company: 'Laundry Design Company',
    period: 'Wells Fargo CC 4338 · Period Ending 03/20/2025',
    sections: [
      {
        heading: 'Summary Reconciliation Balances',
        rows: [
          { label: 'Statement Beginning Balance', amount: '$149.00' },
          { label: 'Charges and Cash Advances Cleared (39 transactions)', amount: '$3,659.47' },
          { label: 'Payments and Credits Cleared (4 transactions)', amount: '-$3,519.98' },
          { label: 'Statement Ending Balance', amount: '$288.49', isTotal: true },
          { label: 'Register Balance as of 03/20/2025', amount: '$288.49' },
          { label: 'Cleared Transactions after 03/20/2025', amount: '$0.00' },
          { label: 'Uncleared Transactions after 03/20/2025', amount: '-$1,057.66' },
          { label: 'Register Balance as of 03/19/2026', amount: '-$769.17', isTotal: true },
        ],
      },
      {
        heading: 'Sample Cleared Charges (Subset)',
        rows: [
          { label: '02/17/2025 · Expense · Beanstalk (Ref: 50022)', amount: '$15.00' },
          { label: '02/18/2025 · Expense · Upwork (Ref: 50021)', amount: '$326.75' },
          { label: '02/24/2025 · Expense · Zoho (Ref: 50018)', amount: '$12.00' },
          { label: '02/25/2025 · Expense · Upwork (Ref: 50016)', amount: '$306.20' },
          { label: '03/01/2025 · Expense · DigitalOcean.com (Ref: 50014)', amount: '$92.90' },
          { label: '03/01/2025 · Expense · Google (Ref: 50013)', amount: '$25.00' },
          { label: '03/04/2025 · Expense · Upwork (Ref: 50010)', amount: '$275.20' },
          { label: '03/17/2025 · Expense · Intuit QuickBooks (Ref: 50003)', amount: '$166.38' },
          { label: 'Total Cleared Charges', amount: '$3,659.47', isTotal: true },
        ],
      },
      {
        heading: 'Sample Cleared Payments & Credits',
        rows: [
          { label: '02/22/2025 · Transfer Payment', amount: '-$528.89' },
          { label: '03/04/2025 · Transfer Payment', amount: '-$1,243.00' },
          { label: '03/11/2025 · Transfer Payment', amount: '-$444.32' },
          { label: '03/14/2025 · Transfer Payment', amount: '-$1,303.77' },
          { label: 'Total Payments & Credits Cleared', amount: '-$3,519.98', isTotal: true },
        ],
      },
    ],
    notes: [
      'Reconciled on: 03/19/2026 by Angelica Esteban',
      'Training demonstration performed using QuickBooks Online sample company data.',
      'All matched transactions verified against source credit card statement line items.',
    ],
  },
  pnl: {
    id: 'pnl',
    title: 'Profit & Loss',
    badge: 'Training / Demonstration Sample',
    description: 'A financial report showing income, cost of goods sold, and expenses organized for review.',
    company: 'Laundry Design Company',
    period: 'March 1–31, 2025 · Accrual Basis',
    sections: [
      {
        heading: 'Income',
        rows: [
          { label: 'Discounts Given', amount: '-$550.00' },
          { label: 'Product Income', amount: '$6,469.30' },
          { label: 'Service Income', amount: '$12,364.81' },
          { label: 'Total for Income', amount: '$18,284.11', isTotal: true },
        ],
      },
      {
        heading: 'Cost of Goods Sold (COGS)',
        rows: [
          { label: 'Subcontractors - COS', amount: '$3,585.95' },
          { label: 'Supplies & Materials - COGS', amount: '$3,130.66' },
          { label: 'Total for Cost of Goods Sold', amount: '$6,716.61', isTotal: true },
          { label: 'Gross Profit', amount: '$11,567.50', isTotal: true },
        ],
      },
      {
        heading: 'Expenses',
        rows: [
          { label: 'Bank Charges', amount: '$10.60' },
          { label: 'Hosting Expense', amount: '$11.98' },
          { label: 'Interest Expense', amount: '$2,564.77' },
          { label: 'Meals and Entertainment', amount: '$4,765.21' },
          { label: 'Merchant Fees', amount: '$284.06' },
          { label: 'Office Expenses', amount: '$801.23' },
          { label: 'Professional Fees', amount: '$2,316.87' },
          { label: 'Shipping and Delivery Expense', amount: '$116.20' },
          { label: 'Software Expense', amount: '$1,248.16' },
          { label: 'Travel', amount: '$2,229.28' },
          { label: 'Utilities', amount: '$1,078.94' },
          { label: 'Total for Expenses', amount: '$15,427.30', isTotal: true },
          { label: 'Net Operating Income', amount: '-$3,859.80' },
          { label: 'Net Income', amount: '-$3,859.80', isTotal: true },
        ],
      },
    ],
    notes: [
      'Prepared in QuickBooks Online sample environment.',
      'Accrual basis reporting with clear categorization of COS and operating overhead.',
      'Demonstrates multi-tier account grouping and financial statement formatting.',
    ],
  },
  balanceSheet: {
    id: 'balanceSheet',
    title: 'Balance Sheet',
    badge: 'Training / Demonstration Sample',
    description: 'A report showing assets, liabilities, and equity organized for review.',
    company: 'Laundry Design Company',
    period: 'As of March 31, 2025 · Accrual Basis',
    sections: [
      {
        heading: 'Current Assets',
        rows: [
          { label: 'Bank Accounts (Unionbank, Wells Fargo, Paypal)', amount: '$52,910.50' },
          { label: 'Accounts Receivable (A/R)', amount: '$19,918.36' },
          { label: 'Other Current Assets (Inventory, Investments)', amount: '$37,144.01' },
          { label: 'Total for Current Assets', amount: '$109,972.87', isTotal: true },
        ],
      },
      {
        heading: 'Fixed Assets',
        rows: [
          { label: 'Computer & Office Equipment', amount: '$13,764.21' },
          { label: 'Total for Fixed Assets', amount: '$13,764.21', isTotal: true },
          { label: 'TOTAL ASSETS', amount: '$123,737.08', isTotal: true },
        ],
      },
      {
        heading: 'Current Liabilities',
        rows: [
          { label: 'Accounts Payable (A/P)', amount: '$136.90' },
          { label: 'Credit Cards (Citicard, Wells Fargo CC)', amount: '$579.69' },
          { label: 'Other Current Liabilities (Balboa, Fundbox, LoanBuilder)', amount: '$102,909.75' },
          { label: 'Total for Current Liabilities', amount: '$103,626.34', isTotal: true },
        ],
      },
      {
        heading: 'Equity',
        rows: [
          { label: "Owner's Investment", amount: '$10,000.00' },
          { label: 'Retained Earnings', amount: '-$6,431.70' },
          { label: 'Net Income (YTD)', amount: '$7,717.44' },
          { label: 'Total for Equity', amount: '$20,110.74', isTotal: true },
          { label: 'TOTAL LIABILITIES & EQUITY', amount: '$123,737.08', isTotal: true },
        ],
      },
    ],
    notes: [
      'Report balances in standard fundamental accounting equation: Assets = Liabilities + Equity ($123,737.08).',
      'Accrual basis reconciliation reflecting true financial position.',
      'Training demonstration data from QuickBooks Online.',
    ],
  },
  arAging: {
    id: 'arAging',
    title: 'A/R Aging Summary',
    badge: 'Training / Demonstration Sample',
    description: 'A report showing outstanding receivables grouped according to aging period.',
    company: 'Laundry Design Company',
    period: 'As of March 31, 2025',
    sections: [
      {
        heading: 'Outstanding Receivables by Aging Period',
        rows: [
          { label: 'Amy Lauterbach (Current: $3,350.00 | 31-60: $7,000.00)', amount: '$10,350.00' },
          { label: "Amy's Bird Sanctuary (31-60 days)", amount: '$459.00' },
          { label: "Bill's Windsurf Shop (1-30 days)", amount: '$399.60' },
          { label: 'Cool Cars (61-90 days)', amount: '$2,369.52' },
          { label: "Jeff's Jalopies (31-60 days)", amount: '$162.00' },
          { label: 'Kathy Paulsen (31-60 days)', amount: '$1,193.13' },
          { label: 'Kirby Freeman (1-30 days)', amount: '$1,044.90' },
          { label: 'Peter Dukes (1-30 days)', amount: '$2,799.89' },
          { label: 'Red Rock Diner (31-60 days)', amount: '$725.60' },
          { label: 'Travis Waldron (1-30 days)', amount: '$414.72' },
          { label: 'TOTAL RECEIVABLES', amount: '$19,918.36', isTotal: true },
        ],
      },
      {
        heading: 'Aging Distribution Breakdown',
        rows: [
          { label: 'Current (0–30 days)', amount: '$3,350.00' },
          { label: '1–30 Days Past Due', amount: '$4,659.11' },
          { label: '31–60 Days Past Due', amount: '$9,539.73' },
          { label: '61–90 Days Past Due', amount: '$2,369.52' },
          { label: '91 and Over', amount: '$0.00' },
          { label: 'Total Outstanding A/R', amount: '$19,918.36', isTotal: true },
        ],
      },
    ],
    notes: [
      'Tracks outstanding invoices categorized by past-due buckets to facilitate timely follow-up.',
      'Training demonstration data prepared in QuickBooks Online sample company.',
    ],
  },
};

interface WorkSampleModalProps {
  sampleId: string | null;
  onClose: () => void;
}

export const WorkSampleModal: React.FC<WorkSampleModalProps> = ({ sampleId, onClose }) => {
  if (!sampleId) return null;
  const sample = sampleReportsData[sampleId];
  if (!sample) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#16181D]/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-[#DDE2E8] shadow-2xl rounded-sm p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-start justify-between pb-4 border-b border-[#DDE2E8]">
          <div>
            <div className="text-[11px] font-semibold tracking-wider text-[#2A64B0] uppercase mb-1">
              {sample.badge}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#16181D]">
              {sample.title}
            </h3>
            <p className="text-xs text-[#5B6370] mt-1">
              {sample.company} · {sample.period}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-[#5B6370] hover:text-[#16181D] hover:bg-[#F4F6F9] rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Description */}
        <p className="text-sm text-[#5B6370] my-4 leading-relaxed">
          {sample.description}
        </p>

        {/* Ledger view */}
        <div className="border border-[#DDE2E8] bg-[#F4F6F9]/40 p-4 sm:p-5 rounded-sm my-5">
          <div className="text-center pb-3 border-b border-[#DDE2E8] mb-4">
            <div className="text-xs font-semibold text-[#14315C] uppercase tracking-wide">
              {sample.company}
            </div>
            <div className="text-sm font-bold text-[#16181D] mt-0.5">
              {sample.title} Report
            </div>
            <div className="text-[11px] text-[#5B6370]">
              {sample.period}
            </div>
          </div>

          <div className="space-y-6">
            {sample.sections.map((section, idx) => (
              <div key={idx}>
                {section.heading && (
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#14315C] mb-2 pb-1 border-b border-[#DDE2E8]/80">
                    {section.heading}
                  </div>
                )}
                <div className="space-y-1.5 text-xs">
                  {section.rows.map((row, rIdx) => (
                    <div
                      key={rIdx}
                      className={`flex justify-between items-baseline py-1 px-1.5 ${
                        row.isTotal
                          ? 'font-bold text-[#16181D] border-t border-b border-[#16181D]/30 pt-1.5 mt-1 bg-white/60'
                          : 'text-[#16181D]/90 hover:bg-white/80'
                      }`}
                    >
                      <span className={row.isTotal ? 'font-semibold' : ''}>{row.label}</span>
                      {row.amount && (
                        <span className="tabular-nums font-mono font-medium ml-4 text-right shrink-0">
                          {row.amount}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification notes */}
        <div className="pt-2 border-t border-[#DDE2E8] space-y-1.5">
          <div className="text-[11px] font-semibold text-[#14315C] uppercase tracking-wider mb-1">
            Verification & Method Notes
          </div>
          {sample.notes.map((note, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-[#5B6370]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2A64B0] mt-0.5 shrink-0" />
              <span>{note}</span>
            </div>
          ))}
          <p className="text-[11px] text-[#A9AFB6] pt-2 italic">
            Note: All samples use QuickBooks sample company data. No client names, account numbers, or private financial information are shown.
          </p>
        </div>

        {/* Footer actions */}
        <div className="mt-6 pt-4 border-t border-[#DDE2E8] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#2A64B0] hover:bg-[#14315C] transition-colors rounded-sm"
          >
            Close Report
          </button>
        </div>
      </div>
    </div>
  );
};
