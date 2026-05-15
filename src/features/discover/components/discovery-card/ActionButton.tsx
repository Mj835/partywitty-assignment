import { Icon, type IconName } from "@/shared/ui/Icon";

export function ActionButton({
  label,
  icon,
  variant,
  onClick,
}: {
  label: string;
  icon: IconName;
  variant: "muted" | "primary";
  onClick: () => void;
}) {
  return (
    <button
      aria-label={label}
      className={`grid size-12 cursor-pointer place-items-center rounded-full transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c229c0] ${
        variant === "primary"
          ? "border border-[#c229c0] bg-linear-to-r from-[#c229c0]/15 to-brand-pink/15 text-[#fc3b79]"
          : "border border-brand-muted/10 bg-brand-muted/5 text-brand-muted"
      }`}
      onClick={onClick}
      type="button"
    >
      <Icon name={icon} className="size-6" />
    </button>
  );
}
