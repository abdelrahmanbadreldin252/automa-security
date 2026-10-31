import {
  BlogArticle, ContactSubmission, DownloadRecord, NotificationItem,
  OrderRecord, ProductItem, SecurityReportRecord, UserAccount,
} from "@/types";

/**
 * NOTICE: All data in this module is [SAMPLE / PLACEHOLDER DATA] for frontend
 * demonstration until backend API endpoints are connected.
 */

export const SAMPLE_PRODUCTS: ProductItem[] = [
  {
    id: "PRD-AV-01",
    name: "AUTOMA Antivirus Core (Windows .EXE)",
    slug: "antivirus",
    category: "Endpoint EXE",
    version: "v4.2.0-stable",
    status: "Active",
    price: "$49.00 / yr",
    releaseDate: "2025-02-10",
    downloadsCount: 1420,
    description: "Standalone signed Windows executable (.exe) providing real-time behavioral process monitoring, ransomware canary protection, and offline heuristic quarantine.",
  },
  {
    id: "PRD-WVS-02",
    name: "AUTOMA Web Vulnerability Scanner (External Portal)",
    slug: "web-vulnerability-scanner",
    category: "External Cloud Platform",
    version: "Cloud Engine v3.8",
    status: "Active",
    price: "$149.00 / mo",
    releaseDate: "2025-01-28",
    downloadsCount: 0,
    description: "Dedicated external web application for authenticated and unauthenticated DAST crawling, SQLi/XSS detection, TLS cipher auditing, and CSP verification.",
  },
];

export const SAMPLE_DOWNLOADS: DownloadRecord[] = [
  {
    id: "DL-9081",
    productName: "AUTOMA Antivirus Core (Windows x64)",
    version: "v4.2.0-stable",
    fileName: "AutomaAntivirus-Setup-x64.exe",
    fileSize: "68.4 MB",
    downloadDate: "2025-02-14 14:22 UTC",
    ipAddress: "198.51.100.42 (Sample)",
    sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  },
  {
    id: "DL-8840",
    productName: "AUTOMA Antivirus Core (Windows x64)",
    version: "v4.1.2-stable",
    fileName: "AutomaAntivirus-Setup-v4.1.2-x64.exe",
    fileSize: "66.9 MB",
    downloadDate: "2024-12-03 09:15 UTC",
    ipAddress: "198.51.100.42 (Sample)",
    sha256: "8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4",
  },
];

export const SAMPLE_ORDERS: OrderRecord[] = [
  {
    id: "ORD-2025-0419",
    customerName: "Alex Mercer (Sample Account)",
    customerEmail: "alex.mercer@example.com",
    product: "AUTOMA Antivirus Core – 5 Endpoint Seat Pack",
    date: "2025-02-01", price: "$245.00", paymentStatus: "Paid",
  },
  {
    id: "ORD-2025-0388",
    customerName: "Alex Mercer (Sample Account)",
    customerEmail: "alex.mercer@example.com",
    product: "AUTOMA Web Vulnerability Scanner – Pro Access",
    date: "2025-01-12", price: "$149.00", paymentStatus: "Paid",
  },
  {
    id: "ORD-2025-0501",
    customerName: "Elena Vance (Sample Account)",
    customerEmail: "elena.vance@example.org",
    product: "AUTOMA Antivirus Core – Enterprise Site License",
    date: "2025-02-18", price: "$1,490.00", paymentStatus: "Pending",
  },
];

export const SAMPLE_REPORTS: SecurityReportRecord[] = [
  {
    id: "RPT-701",
    title: "[Sample] Q1 Endpoint Signature & Integrity Verification",
    scope: "Endpoint Telemetry", generatedAt: "2025-02-15",
    severitySummary: "Informational (Demo Template)", status: "Ready",
  },
  {
    id: "RPT-689",
    title: "[Sample] External Web Surface Security Posture Overview",
    scope: "Web Surface Advisory", generatedAt: "2025-01-29",
    severitySummary: "Sample Advisory Document", status: "Ready",
  },
];

export const SAMPLE_NOTIFICATIONS: NotificationItem[] = [
  {
    id: "NOTIF-1",
    title: "AUTOMA Antivirus v4.2.0-stable Released",
    message: "[Sample Notification] New signed Windows x64 installer (.exe) is available in your Downloads portal with updated kernel driver signatures.",
    timestamp: "2 hours ago", category: "Release", read: false,
  },
  {
    id: "NOTIF-2",
    title: "New Login Session Verified",
    message: "[Sample Notification] Authenticated session established from San Francisco, US via TLS 1.3.",
    timestamp: "1 day ago", category: "Security", read: false,
  },
  {
    id: "NOTIF-3",
    title: "Invoice #ORD-2025-0419 Receipt Available",
    message: "[Sample Notification] Your annual license receipt has been archived in My Orders.",
    timestamp: "14 days ago", category: "Billing", read: true,
  },
];

export const SAMPLE_BLOG_POSTS: BlogArticle[] = [
  {
    id: "POST-01",
    slug: "kernel-level-ransomware-canary-architecture",
    title: "[Sample Article] Designing Zero-Latency Ransomware Canaries in Windows Endpoints",
    excerpt: "An architectural deep-dive into how AUTOMA Antivirus monitors file-system entropy and blocks unauthorized encryption routines in user and kernel space.",
    content: [
      "Note: This article is clearly labeled sample editorial content demonstrating the AUTOMA SECURITY knowledge base layout.",
      "Modern ransomware families increasingly utilize intermittent encryption and living-off-the-land binaries (LOLBins) to bypass traditional static file hashes. Defending Windows workstations requires deterministic behavioral interception before shadow volumes are tampered with.",
      "AUTOMA Antivirus operates as a native Windows executable (.exe) paired with a signed mini-filter driver. By monitoring I/O Request Packets (IRPs) and calculating Shannon entropy deltas on write operations in real time, suspicious process trees can be suspended within milliseconds.",
      "Administrators can download the latest standalone installer directly via the Antivirus portal and verify its cryptographic SHA-256 checksum prior to air-gapped deployment.",
    ],
    category: "Endpoint Engineering",
    author: "AUTOMA Threat Research Lab (Sample)",
    publishedAt: "2025-02-12", readTime: "6 min read", featured: true, published: false,
  },
  {
    id: "POST-02",
    slug: "owasp-api-security-automated-dast-scanning",
    title: "[Sample Article] Detecting Broken Object Level Authorization in Modern Web APIs",
    excerpt: "How external black-box vulnerability scanners evaluate state transitions, CORS misconfigurations, and authentication tokens without agent installation.",
    content: [
      "Note: This article is clearly labeled sample editorial content.",
      "Web applications expose dozens of REST and GraphQL endpoints that traditional perimeter firewalls allow through port 443. Automated external scanning helps engineering teams uncover misconfigurations before attackers enumerate them.",
      "Our dedicated external Web Vulnerability Scanner portal operates independently of your internal network, testing TLS configurations, Content Security Policy headers, SQL injection vectors, and cross-site scripting reflections safely.",
    ],
    category: "Web Application Security",
    author: "AppSec Engineering Team (Sample)",
    publishedAt: "2025-02-04", readTime: "5 min read", published: false,
  },
  {
    id: "POST-03",
    slug: "automa-antivirus-v4-2-release-notes",
    title: "[Sample Article] AUTOMA Antivirus v4.2 Release Notes & Checksum Verification Guide",
    excerpt: "Review the latest memory optimization improvements, offline signature bundle updates, and Authenticode verification steps for Windows 11 24H2.",
    content: [
      "Note: This article is clearly labeled sample editorial content.",
      "Release v4.2.0 reduces idle RAM consumption by 18% and introduces stricter Authenticode verification for child processes spawned by scripting engines.",
    ],
    category: "Product Updates",
    author: "Release Engineering (Sample)",
    publishedAt: "2025-01-25", readTime: "4 min read", published: false,
  },
];

export const SAMPLE_USERS: UserAccount[] = [
  { id: "USR-101", name: "Alex Mercer (Sample)", email: "alex.mercer@example.com", role: "Enterprise Client", status: "Active", joinedAt: "2024-11-10", productsCount: 2 },
  { id: "USR-102", name: "Elena Vance (Sample)", email: "elena.vance@example.org", role: "Security Analyst", status: "Active", joinedAt: "2025-01-05", productsCount: 1 },
  { id: "USR-103", name: "Marcus Holloway (Sample)", email: "m.holloway@example.net", role: "Enterprise Client", status: "Pending Verification", joinedAt: "2025-02-17", productsCount: 0 },
];

export const SAMPLE_MESSAGES: ContactSubmission[] = [
  {
    id: "MSG-301", name: "David Sarif (Sample Inquiry)", email: "d.sarif@example.com",
    subject: "Volume Licensing for 250 Windows Endpoints",
    message: "[Sample Contact Message] We are evaluating AUTOMA Antivirus .exe for offline deployment across 250 air-gapped Windows 11 workstations. Please share MSI/EXE silent flag documentation.",
    receivedAt: "2025-02-18 11:40 UTC", read: false, replied: false,
  },
  {
    id: "MSG-302", name: "Aria T'Loak (Sample Inquiry)", email: "aria@example.org",
    subject: "External Web Vulnerability Scanner Dedicated IP Whitelisting",
    message: "[Sample Contact Message] Could you provide the egress IP ranges used by the external Web Vulnerability Scanner so we can whitelist them in our staging WAF?",
    receivedAt: "2025-02-16 16:05 UTC", read: true, replied: true,
  },
];

export const SAMPLE_ANALYTICS_SERIES = [
  { month: "Sep (Sample)", downloads: 210, orders: 48, activeUsers: 320 },
  { month: "Oct (Sample)", downloads: 295, orders: 62, activeUsers: 410 },
  { month: "Nov (Sample)", downloads: 340, orders: 79, activeUsers: 495 },
  { month: "Dec (Sample)", downloads: 410, orders: 94, activeUsers: 580 },
  { month: "Jan (Sample)", downloads: 485, orders: 112, activeUsers: 670 },
  { month: "Feb (Sample)", downloads: 560, orders: 134, activeUsers: 790 },
];

export const SAMPLE_FAQS = [
  {
    category: "Product development",
    question: "Is AUTOMA Antivirus available?",
    answer: "No. AUTOMA Antivirus is in development and no installer is currently available.",
  },
  {
    category: "Product development",
    question: "Is the web vulnerability scanner available?",
    answer: "No. The web vulnerability scanner is in development and cannot currently run scans.",
  },
  {
    category: "Product development",
    question: "When will the products be released?",
    answer: "Release dates have not been announced. Updates will be shared as development progresses.",
  },
  {
    category: "AUTOMA SECURITY",
    question: "Where can I find product updates?",
    answer: "Updates will be published on this website as they become available.",
  },
];
