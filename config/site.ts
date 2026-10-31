export const siteConfig = {
  name: "AUTOMA SECURITY",
  tagline: "Intelligent Security. Absolute Confidence.",
  description:
    "AUTOMA SECURITY is developing separate cybersecurity products for Windows endpoint protection and web vulnerability scanning.",
  products: {
    antivirus: {
      name: "AUTOMA Antivirus Core",
      version: "In development",
      releaseDate: "To be announced",
      fileName: "Not available yet",
      fileSize: "Not available yet",
      sha256: "",
      osRequirements: "To be announced",
      downloadUrl: process.env.NEXT_PUBLIC_ANTIVIRUS_EXE_URL ?? "",
    },
    scanner: {
      name: "AUTOMA Web Vulnerability Scanner",
      version: "In development",
      externalUrl: process.env.NEXT_PUBLIC_SCANNER_EXTERNAL_URL ?? "",
    },
  },
} as const;
