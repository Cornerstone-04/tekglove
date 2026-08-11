import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { ecosystemProducts, navLinks, site } from "@/lib/data";

const companyLinks = navLinks.filter(({ label }) => label !== "Get Early Access");

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative scroll-mt-16 overflow-hidden border-t border-white/10 bg-bg text-primary"
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
          <div className="grid gap-4 font-mono text-[0.68rem] leading-relaxed text-white/38 md:grid-cols-2 md:items-center">
            <p>
              © {new Date().getFullYear()} TekGlove. All rights reserved.
            </p>
            <p className="md:text-right">{site.tagline}</p>
          </div>

          <p className="mt-7 border-t border-white/8 pt-7 font-mono text-[0.62rem] leading-[1.8] text-white/24">
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
        <span className="font-heading text-2xl font-bold uppercase leading-[0.88] tracking-[0.09em] text-white">
          Tek
          <br />
          <span className="text-orange">Glove</span>
        </span>
      </Link>

      <p className="mt-7 max-w-[42ch] font-mono text-xs-plus leading-[1.9] text-white/48">
        Turning movement, grip, gestures, and physical response into useful
        intelligence through the connected hand.
      </p>

      <Link
        href="/waitlist"
        className="group mt-8 inline-flex min-h-12 items-center gap-4 border border-white/20 px-5 py-3 font-mono text-xxs uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:border-orange hover:bg-orange/8"
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
              className="group inline-flex items-center gap-2 font-mono text-xs-plus text-white/48 transition-colors duration-200 hover:text-white"
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
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-white/28">
          Flagship
        </p>
        <Link
          href="/product"
          className="group mt-3 inline-flex items-center gap-3 font-heading text-2xl font-bold uppercase text-white/65 transition-colors duration-200 hover:text-white"
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
    <div className="flex items-start gap-4 font-mono text-xs-plus leading-[1.75] text-white/48">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface text-orange">
        {icon}
      </span>
      <div className="pt-1.5">{children}</div>
    </div>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xxs font-medium uppercase tracking-[0.26em] text-white/38">
      {children}
    </h2>
  );
}
