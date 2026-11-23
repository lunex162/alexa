import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { FacebookLogo, InstagramLogo, Phone } from "@phosphor-icons/react";
import { clinic, social } from "../content/clinic";
import { easeOutExpo } from "../lib/motion";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, delay, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  );
}

type BtnProps = { to: string; children: ReactNode; variant?: "solid" | "ghost" | "light"; className?: string };

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold whitespace-nowrap transition-[background-color,color,box-shadow,transform] duration-300 ease-[var(--ease-out-expo)] active:scale-[0.97]";

const btnVariants = {
  solid:
    "bg-petrol text-white shadow-[0_10px_30px_-12px_rgba(7,68,74,0.55)] hover:bg-petrol-deep hover:shadow-[0_14px_34px_-12px_rgba(7,68,74,0.7)]",
  ghost: "bg-mint text-petrol-deep hover:bg-mint-strong",
  light: "bg-white text-petrol-night hover:bg-mint",
};

export function Button({ to, children, variant = "solid", className = "" }: BtnProps) {
  const cls = `${btnBase} ${btnVariants[variant]} ${className}`;
  if (to.startsWith("tel:") || to.startsWith("mailto:") || to.startsWith("http"))
    return (
      <a href={to} className={cls} {...(to.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
        {children}
      </a>
    );
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  );
}

export function PhoneButton({ variant = "ghost" as BtnProps["variant"], className = "" }) {
  return (
    <Button to={clinic.phoneHref} variant={variant} className={className}>
      <Phone size={18} weight="bold" aria-hidden />
      <span className="tabular">{clinic.phone}</span>
    </Button>
  );
}

export function SocialIcons({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const items = [
    { label: "Facebook", href: social.facebook, Icon: FacebookLogo },
    { label: "Instagram", href: social.instagram, Icon: InstagramLogo },
  ];
  const cls =
    tone === "light"
      ? "bg-white/10 text-white hover:bg-white/20"
      : "bg-mint text-petrol-deep hover:bg-mint-strong";
  return (
    <div className="flex gap-2">
      {items.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href || "#"}
          aria-label={label}
          title={href ? label : `${label} – odkaz doplníme`}
          {...(href ? { target: "_blank", rel: "noreferrer" } : { onClick: (e) => e.preventDefault() })}
          className={`grid size-11 place-items-center rounded-full transition-colors duration-300 ${cls}`}
        >
          <Icon size={20} weight="fill" aria-hidden />
        </a>
      ))}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 md:px-10 ${className}`}>
      <div className="mx-auto max-w-[1280px]">{children}</div>
    </section>
  );
}

export function PageIntro({ title, lead, photo }: { title: string; lead?: string; photo?: string }) {
  return (
    <header className="relative overflow-hidden bg-petrol-night px-5 pb-16 pt-36 text-white md:px-10 md:pb-24 md:pt-44">
      {photo && (
        <img
          src={photo}
          alt=""
          aria-hidden
          className="absolute inset-0 size-full object-cover opacity-30"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-petrol-night via-petrol-night/85 to-petrol-night/40" />
      <div className="relative mx-auto max-w-[1280px]">
        <Reveal>
          <h1 className="max-w-[18ch] text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-balance md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {lead && (
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-white/80 md:text-xl">{lead}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
