import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { navLinks } from "@/content/navigation";
import { ecosystemProducts } from "@/content/products";
import { site } from "@/content/site";
import { ButtonLink } from "@/shared/components/ui/button";

const companyLinks = navLinks.filter(
  ({ label }) => label !== "Get Early Access",
);

const socialIcons = {
  Instagram: FaInstagram,
  TikTok: FaTiktok,
} as const;

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative z-0 scroll-mt-16 overflow-hidden border-t border-white/8 bg-surface text-primary lg:sticky lg:bottom-0 lg:min-h-[78svh]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-0.18em] overflow-hidden font-brand text-[clamp(13rem,31vw,38rem)] leading-[0.7] font-bold tracking-[-0.075em] whitespace-nowrap text-white/4 uppercase select-none"
      >
        TekGlove
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-orange/35 to-transparent"
      />

      <div className="relative z-10 flex w-full flex-col px-6 pt-16 pb-8 md:px-12 md:pt-24 md:pb-10 lg:min-h-[78svh]">
        <div className="grid gap-14 md:grid-cols-2 xl:grid-cols-[1.35fr_0.7fr_0.9fr_1fr] xl:gap-20">
          <FooterBrand />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn
            title="Ecosystem"
            links={ecosystemProducts.map((product) => ({
              href: product.href,
              label: product.mark,
              status: product.href ? undefined : "In development",
            }))}
          />
          <FooterContact />
        </div>

        <div className="mt-20 border-t border-white/10 pt-7 md:mt-auto md:pt-7">
          <div className="grid gap-4 font-mono text-xs leading-relaxed text-white/65 md:grid-cols-2 md:items-center">
            <p>© {new Date().getFullYear()} TekGlove. All rights reserved.</p>
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
        <span className="font-brand text-2xl leading-[0.88] font-bold tracking-[0.09em] text-white uppercase">
          Tek
          <br />
          <span className="text-orange">Glove</span>
        </span>
      </Link>

      <p className="copy-secondary mt-7 max-w-[42ch] font-sans text-sm leading-[1.8]">
        Turning movement, grip, gestures, and physical response into useful
        intelligence through the connected hand.
      </p>

      <ButtonLink href="/waitlist" variant="secondary" className="mt-8">
        Get early access
      </ButtonLink>
    </div>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string | null; label: string; status?: string }[];
}) {
  return (
    <div>
      <FooterHeading>{title}</FooterHeading>
      <ul className="mt-7 space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            {link.href ? (
              <Link
                href={link.href}
                className="group inline-flex items-center gap-2 font-sans text-sm text-white/68 transition-colors duration-200 hover:text-orange"
              >
                {link.label}
              </Link>
            ) : (
              <div className="flex flex-wrap items-center gap-2 font-sans text-sm text-white/48">
                <span>{link.label}</span>
                <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-xxs tracking-[0.04em] text-white/45">
                  {link.status}
                </span>
              </div>
            )}
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
        {site.socials.map((social) => {
          const Icon = socialIcons[social.platform];
          return (
            <a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 font-sans text-sm leading-[1.75] text-white/68 transition-colors duration-200 hover:text-white"
              aria-label={`TekGlove on ${social.platform}`}
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-surface text-orange transition-colors duration-200 group-hover:bg-orange/10">
                <Icon size={16} aria-hidden="true" />
              </span>
              <span>{social.username}</span>
            </a>
          );
        })}
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
