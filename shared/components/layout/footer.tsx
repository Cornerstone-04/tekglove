import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { ecosystemProducts, navLinks, site } from "@/content/site";

const companyLinks = navLinks.filter(({ label }) => label !== "Get Early Access");

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative scroll-mt-16 overflow-hidden border-t border-white/8 bg-[#070708] text-primary"
    >
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-orange/5 blur-3xl" />

      <div className="relative w-full px-6 pt-16 pb-8 md:px-12 md:pt-24 md:pb-10">
        <div className="grid gap-14 md:grid-cols-2 xl:grid-cols-[1.35fr_0.7fr_0.9fr_1fr] xl:gap-20">
          <FooterBrand />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn
            title="Ecosystem"
            links={ecosystemProducts.map((product) => ({
              href: "/#ecosystem",
              label: product.mark,
            }))}
          />
          <FooterContact />
        </div>

        <div className="mt-20 border-t border-white/10 pt-7 md:mt-28">
          <div className="grid gap-4 font-mono text-xs leading-relaxed text-white/65 md:grid-cols-2 md:items-center">
            <p>
              © {new Date().getFullYear()} TekGlove. All rights reserved.
            </p>
            <p className="md:text-right">{site.tagline}</p>
          </div>

          <p className="mt-7 max-w-5xl border-t border-white/8 pt-7 font-sans text-xs leading-[1.8] text-white/58">
            TekGlove develops connected wearable systems that capture and
            interpret hand data across sport, health, recovery, defence,
            computing, and industry. Product capabilities described on this
            website may include systems in active development.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterBrand() {
  return (
    <div>
      <Link href="/" className="inline-flex items-center gap-4">
        <Image
          src="/tekglove_icon.png"
          alt=""
          width={58}
          height={58}
          className="opacity-90"
        />
        <span className="font-brand text-2xl font-bold uppercase leading-[0.88] tracking-[0.09em] text-white">
          Tek
          <br />
          <span className="text-orange">Glove</span>
        </span>
      </Link>

      <p className="copy-secondary mt-7 max-w-[42ch] font-sans text-sm leading-[1.8]">
        Turning movement, grip, gestures, and physical response into useful
        intelligence through the connected hand.
      </p>

      <Link
        href="/waitlist"
        className="pressable group mt-8 inline-flex min-h-12 items-center gap-4 rounded-full border border-white/20 bg-white/4 px-5 py-3 font-sans text-sm font-medium text-white transition-[border-color,background-color,transform] duration-200 hover:border-orange hover:bg-orange/8"
      >
        Get early access
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1.5"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <FooterHeading>{title}</FooterHeading>
      <ul className="mt-7 space-y-4">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-2 font-sans text-sm text-white/68 transition-colors duration-200 hover:text-white"
            >
              <span className="h-px w-0 bg-orange transition-[width] duration-300 group-hover:w-3" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterContact() {
  return (
    <div>
      <FooterHeading>Get in touch</FooterHeading>
      <div className="mt-7 space-y-5">
        <ContactItem icon={<Mail size={16} aria-hidden="true" />}>
          <a
            href={`mailto:${site.email}`}
            className="break-all transition-colors duration-200 hover:text-white"
          >
            {site.email}
          </a>
        </ContactItem>
        <ContactItem icon={<MapPin size={16} aria-hidden="true" />}>
          <span>United Kingdom</span>
        </ContactItem>
      </div>

      <div className="mt-9 border-t border-white/10 pt-5">
        <p className="font-mono text-xs tracking-[0.08em] text-white/60">
          Flagship
        </p>
        <Link
          href="/product"
          className="group mt-3 inline-flex items-center gap-3 font-brand text-2xl font-bold uppercase text-white/78 transition-colors duration-200 hover:text-white"
        >
          KINETIX™
          <ArrowRight
            size={16}
            className="text-orange transition-transform duration-300 group-hover:translate-x-1.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}

function ContactItem({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 font-sans text-sm leading-[1.75] text-white/68">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface text-orange">
        {icon}
      </span>
      <div className="pt-1.5">{children}</div>
    </div>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xs font-medium tracking-[0.08em] text-white/65">
      {children}
    </h2>
  );
}
