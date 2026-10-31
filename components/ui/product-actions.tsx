"use client";
import React from "react";
import { Download, ExternalLink, ShieldAlert, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { isValidConfiguredUrl } from "@/lib/utils";
import { toast } from "sonner";

const btn =
  "inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#00FF88] px-6 py-3.5 text-sm font-semibold text-[#050705] transition hover:bg-[#00CC66] focus:outline-none focus:ring-2 focus:ring-[#00FF88]";

/** Connects to NEXT_PUBLIC_ANTIVIRUS_EXE_URL. Never fakes a download if unconfigured. */
export function DownloadAntivirusButton({
  className = "", label = "Download AUTOMA Antivirus",
}: { className?: string; label?: string }) {
  const { downloadUrl, fileName, version, fileSize } = siteConfig.products.antivirus;
  const isConfigured = isValidConfiguredUrl(downloadUrl);

  if (!isConfigured) {
    return (
      <div className="inline-flex flex-col items-start gap-2">
        <button
          type="button"
          onClick={() =>
            toast.error("Executable URL Not Configured", {
              description: "Set NEXT_PUBLIC_ANTIVIRUS_EXE_URL in .env.local to point to the hosted Windows .exe binary.",
            })
          }
          className={`${btn} ${className}`}
        >
          <Download className="h-4 w-4" />
          <span>{label}</span>
        </button>
        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-300/90">
          <ShieldAlert className="h-3.5 w-3.5" />
          Awaiting NEXT_PUBLIC_ANTIVIRUS_EXE_URL configuration
        </span>
      </div>
    );
  }

  return (
    <div className="inline-flex flex-col items-start gap-1.5">
      <a
        href={downloadUrl}
        download={fileName}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          toast.success(`Initiating download: ${fileName}`, {
            description: `Version ${version} (${fileSize}) — verify the SHA-256 checksum before installing.`,
          })
        }
        className={`${btn} shadow-cyber-sm ${className}`}
      >
        <Download className="h-4 w-4" />
        <span>{label}</span>
      </a>
      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9BAAA1]">
        <CheckCircle2 className="h-3.5 w-3.5 text-[#00FF88]" />
        Signed Windows x64 Binary ({version} • {fileSize})
      </span>
    </div>
  );
}

/** Redirects to NEXT_PUBLIC_SCANNER_EXTERNAL_URL. Never simulates scans. */
export function LaunchScannerButton({
  className = "", label = "Launch Vulnerability Scanner",
}: { className?: string; label?: string }) {
  const { externalUrl, version } = siteConfig.products.scanner;
  const isConfigured = isValidConfiguredUrl(externalUrl);

  if (!isConfigured) {
    return (
      <div className="inline-flex flex-col items-start gap-2">
        <button
          type="button"
          onClick={() =>
            toast.error("External Scanner URL Not Configured", {
              description: "Set NEXT_PUBLIC_SCANNER_EXTERNAL_URL in .env.local to the hosted scanner website.",
            })
          }
          className={`${btn} ${className}`}
        >
          <span>{label}</span>
          <ExternalLink className="h-4 w-4" />
        </button>
        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-300/90">
          <ShieldAlert className="h-3.5 w-3.5" />
          Awaiting NEXT_PUBLIC_SCANNER_EXTERNAL_URL configuration
        </span>
      </div>
    );
  }

  return (
    <div className="inline-flex flex-col items-start gap-1.5">
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => toast.info("Opening External Scanner Platform")}
        className={`${btn} shadow-cyber-sm ${className}`}
      >
        <span>{label}</span>
        <ExternalLink className="h-4 w-4" />
      </a>
      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9BAAA1]">
        <CheckCircle2 className="h-3.5 w-3.5 text-[#00FF88]" />
        Redirects to isolated external cloud scanner ({version})
      </span>
    </div>
  );
}
