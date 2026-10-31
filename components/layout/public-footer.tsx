import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/config/routes";
import { siteConfig } from "@/config/site";

const col = "mt-4 space-y-2.5 text-sm text-automa-muted";
const head = "font-mono text-xs font-semibold uppercase tracking-wider text-automa-green";
const lnk = "inline-flex min-h-10 items-center hover:text-automa-text";

export function PublicFooter() {
  return (
    <footer className="border-t border-[rgba(0,255,136,0.15)] bg-automa-secondaryBg">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Image src="/logo.png" alt="Automa Security" width={160} height={80} className="h-14 w-40 object-contain" />
            <p className="mt-4 max-w-sm text-sm text-automa-muted leading-relaxed">{siteConfig.description}</p>
            <div className="mt-6 inline-flex items-center rounded-full bg-automa-card border border-[rgba(0,255,136,0.15)] px-3 py-1.5 text-xs font-mono text-automa-muted">
              Product development updates will be shared here.
            </div>
          </div>

          <div>
            <h3 className={head}>Products & Services</h3>
            <ul className={col}>
              <li><Link href={ROUTES.services} className={lnk}>Services Overview</Link></li>
              <li><Link href={ROUTES.antivirus} className={lnk}>AUTOMA Antivirus (.EXE)</Link></li>
              <li><Link href={ROUTES.scanner} className={lnk}>Web Vulnerability Scanner</Link></li>
              <li><Link href={ROUTES.dashboard} className={lnk}>Client Portal</Link></li>
            </ul>
          </div>
          <div>
            <h3 className={head}>Company & Support</h3>
            <ul className={col}>
              <li><Link href={ROUTES.about} className={lnk}>About Us</Link></li>
              <li><Link href={ROUTES.blog} className={lnk}>Security News & Blog</Link></li>
              <li><Link href={ROUTES.faq} className={lnk}>FAQ & Documentation</Link></li>
              <li><Link href={ROUTES.contact} className={lnk}>Contact</Link></li>
              <li className="pt-3 font-mono text-xs uppercase tracking-wider text-automa-green">Social</li>
              <li className="text-automa-muted">LinkedIn — coming soon</li>
              <li className="text-automa-muted">GitHub — coming soon</li>
            </ul>
          </div>
          <div>
            <h3 className={head}>Legal & System</h3>
            <ul className={col}>
              <li><Link href={ROUTES.privacy} className={lnk}>Privacy Policy</Link></li>
              <li><Link href={ROUTES.terms} className={lnk}>Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[rgba(0,255,136,0.15)] pt-8 text-xs text-automa-muted sm:flex-row">
          <p>© {new Date().getFullYear()} AUTOMA SECURITY. All rights reserved.</p>
          <p className="font-mono">Products in development</p>
        </div>
      </div>
    </footer>
  );
}
