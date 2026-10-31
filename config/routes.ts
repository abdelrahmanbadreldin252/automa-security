import { siteConfig } from "@/config/site";

export type NavChild = {
  label: string;
  href: string;
  description: string;
  icon: string;
  comingSoon: boolean;
};

type PublicNavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const ROUTES = {
  home: "/",
  services: "/services",
  antivirus: "/antivirus",
  scanner: "/web-vulnerability-scanner",
  about: "/about",
  contact: "/contact",
  faq: "/faq",
  blog: "/blog",
  login: "/login",
  register: "/register",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
  verifyEmail: "/verify-email",
  dashboard: "/dashboard",
  dashboardProducts: "/dashboard/products",
  dashboardDownloads: "/dashboard/downloads",
  dashboardOrders: "/dashboard/orders",
  dashboardReports: "/dashboard/reports",
  dashboardNotifications: "/dashboard/notifications",
  dashboardProfile: "/dashboard/profile",
  dashboardSettings: "/dashboard/settings",
  admin: "/admin",
  adminUsers: "/admin/users",
  adminProducts: "/admin/products",
  adminOrders: "/admin/orders",
  adminDownloads: "/admin/downloads",
  adminMessages: "/admin/messages",
  adminBlog: "/admin/blog",
  adminAnalytics: "/admin/analytics",
  adminSettings: "/admin/settings",
  privacy: "/privacy-policy",
  terms: "/terms",
  notFound: "/not-found",
  unauthorized: "/unauthorized",
  maintenance: "/maintenance",
} as const;

export const PUBLIC_NAV_ITEMS: PublicNavItem[] = [
  { label: "Home", href: ROUTES.home },
  {
    label: "Services",
    href: ROUTES.services,
    children: [
      {
        label: "AUTOMA Antivirus",
        href: ROUTES.antivirus,
        description: "A Windows desktop product in development.",
        icon: "Shield",
        comingSoon: !siteConfig.products.antivirus.downloadUrl,
      },
      {
        label: "Web Vulnerability Scanner",
        href: ROUTES.scanner,
        description: "A separate cloud scanner in development.",
        icon: "ScanSearch",
        comingSoon: !siteConfig.products.scanner.externalUrl,
      }
    ]
  },
  { label: "About Us", href: ROUTES.about },
  { label: "Blog", href: ROUTES.blog },
  { label: "FAQ", href: ROUTES.faq },
  { label: "Contact Us", href: ROUTES.contact },
];

export const USER_DASHBOARD_NAV = [
  { label: "Overview", href: ROUTES.dashboard, icon: "LayoutDashboard" },
  { label: "My Products", href: ROUTES.dashboardProducts, icon: "Shield" },
  { label: "My Downloads", href: ROUTES.dashboardDownloads, icon: "Download" },
  { label: "My Orders", href: ROUTES.dashboardOrders, icon: "CreditCard" },
  { label: "Security Reports", href: ROUTES.dashboardReports, icon: "FileCheck" },
  { label: "Notifications", href: ROUTES.dashboardNotifications, icon: "Bell" },
  { label: "My Profile", href: ROUTES.dashboardProfile, icon: "User" },
  { label: "Account Settings", href: ROUTES.dashboardSettings, icon: "Settings" },
];

export const ADMIN_DASHBOARD_NAV = [
  { label: "Admin Overview", href: ROUTES.admin, icon: "Activity" },
  { label: "Users Management", href: ROUTES.adminUsers, icon: "Users" },
  { label: "Products Management", href: ROUTES.adminProducts, icon: "Package" },
  { label: "Orders Management", href: ROUTES.adminOrders, icon: "ShoppingCart" },
  { label: "Downloads Management", href: ROUTES.adminDownloads, icon: "HardDriveDownload" },
  { label: "Contact Messages", href: ROUTES.adminMessages, icon: "MessageSquare" },
  { label: "Blog Management", href: ROUTES.adminBlog, icon: "FileText" },
  { label: "Reports & Analytics", href: ROUTES.adminAnalytics, icon: "BarChart3" },
  { label: "Admin Settings", href: ROUTES.adminSettings, icon: "Sliders" },
];
