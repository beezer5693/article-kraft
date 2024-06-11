import { MdVisibility, MdVisibilityOff } from "react-icons/md";

type PasswordVisibilityToggleProps = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
};

export default function PasswordVisibilityToggle({
  isVisible,
  setIsVisible,
}: PasswordVisibilityToggleProps) {
  const iconStyles =
    "text-foreground/30 h-[17px] w-[17px] group-hover:text-foreground/80 transition-all";

  const visibilityIcon = isVisible ? (
    <MdVisibility className={iconStyles} />
  ) : (
    <MdVisibilityOff className={iconStyles} />
  );

  return (
    <div
      onClick={() => setIsVisible(!isVisible)}
      className="group absolute right-2 top-1/2 flex -translate-y-1/2 cursor-pointer items-center justify-center overflow-hidden p-0.5 transition-all"
    >
      {visibilityIcon}
    </div>
  );
}
