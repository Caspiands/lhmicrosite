import { Link } from "react-router";
import logoImg from "../../imports/Logo-Learning.png";

export function Logo({
  variant = "light",
  size = "md",
}: {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}) {
  const scale = size === "sm" ? 0.8 : size === "lg" ? 1.3 : 1;

  return (
    <Link
      to="/"
      aria-label="Learning Horizon - Home"
      className="block shrink-0"
      style={{ width: `${70 * scale}px` }}
    >
      <img
        src={logoImg}
        alt="Learning Horizon"
        className="w-full h-auto"
        style={variant === "dark" ? { filter: "brightness(0) invert(1)" } : undefined}
      />
    </Link>
  );
}
