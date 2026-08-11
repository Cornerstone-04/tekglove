import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link, { type LinkProps } from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";
type ArrowDirection = "left" | "right" | "none";

type SharedButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: ArrowDirection;
  icon?: ReactNode | false;
  iconPosition?: Exclude<ArrowDirection, "none">;
  fullWidth?: boolean;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-orange bg-orange text-black hover:border-orange/85 hover:bg-orange/85",
  secondary:
    "border-white/25 bg-white/4 text-white hover:border-orange hover:bg-orange/8 hover:text-orange",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-5 py-2 text-[0.78rem]",
  md: "min-h-12 px-7 py-3 text-sm",
  lg: "min-h-14 px-10 py-4 text-[0.88rem]",
};

function getButtonClasses({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
}: Omit<SharedButtonProps, "children" | "arrow" | "icon" | "iconPosition">) {
  return [
    "site-button pressable group inline-flex items-center justify-center gap-3 rounded-full border font-sans font-semibold no-underline transition-[border-color,background-color,color,transform] ease-linear duration-200",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "w-fit",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

function ButtonContent({
  children,
  arrow = "right",
  icon,
  iconPosition,
}: Pick<SharedButtonProps, "children" | "arrow" | "icon" | "iconPosition">) {
  const resolvedPosition =
    iconPosition ?? (arrow === "left" ? "left" : "right");
  const DefaultIcon = arrow === "left" ? BsArrowLeft : BsArrowRight;
  const resolvedIcon =
    icon === false
      ? null
      : (icon ??
        (arrow === "none" ? null : <DefaultIcon aria-hidden="true" />));

  const iconElement = resolvedIcon ? (
    <span
      aria-hidden="true"
      className={`button-icon button-icon-${resolvedPosition} inline-flex shrink-0 text-[1rem] text-current`}
    >
      {resolvedIcon}
    </span>
  ) : null;

  return (
    <>
      {resolvedPosition === "left" && iconElement}
      <span>{children}</span>
      {resolvedPosition === "right" && iconElement}
    </>
  );
}

type ButtonLinkProps = SharedButtonProps &
  LinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function ButtonLink({
  children,
  variant = "primary",
  size = "md",
  arrow = "right",
  icon,
  iconPosition,
  fullWidth = false,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={getButtonClasses({ variant, size, fullWidth, className })}
    >
      <ButtonContent arrow={arrow} icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </Link>
  );
}

type ButtonProps = SharedButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = "primary",
  size = "md",
  arrow = "right",
  icon,
  iconPosition,
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={getButtonClasses({ variant, size, fullWidth, className })}
    >
      <ButtonContent arrow={arrow} icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </button>
  );
}
