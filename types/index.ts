export interface ProductItem {
  id: string; name: string; slug: string;
  category: "Endpoint EXE" | "External Cloud Platform";
  version: string; status: "Active" | "Maintenance" | "Deprecated";
  price: string; releaseDate: string; downloadsCount: number; description: string;
}
export interface DownloadRecord {
  id: string; productName: string; version: string; fileName: string;
  fileSize: string; downloadDate: string; ipAddress: string; sha256: string;
}
export interface OrderRecord {
  id: string; customerName: string; customerEmail: string; product: string;
  date: string; price: string; paymentStatus: "Paid" | "Pending" | "Refunded";
}
export interface SecurityReportRecord {
  id: string; title: string;
  scope: "Endpoint Telemetry" | "Web Surface Advisory" | "Compliance Audit";
  generatedAt: string; severitySummary: string; status: "Ready" | "Archived";
}
export interface NotificationItem {
  id: string; title: string; message: string; timestamp: string;
  category: "Security" | "Release" | "Billing"; read: boolean;
}
export interface BlogArticle {
  id: string; slug: string; title: string; excerpt: string; content: string[];
  category: "Threat Research" | "Endpoint Engineering" | "Web Application Security" | "Product Updates";
  author: string; publishedAt: string; readTime: string; featured?: boolean; published: boolean;
}
export interface UserAccount {
  id: string; name: string; email: string;
  role: "Enterprise Client" | "Security Analyst" | "Admin";
  status: "Active" | "Suspended" | "Pending Verification";
  joinedAt: string; productsCount: number;
}
export interface ContactSubmission {
  id: string; name: string; email: string; subject: string; message: string;
  receivedAt: string; read: boolean; replied: boolean;
}
