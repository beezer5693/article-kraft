import { IoEye, IoEyeOff } from "react-icons/io5";

type PasswordVisibilityToggleProps = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
};

export default function PasswordVisibilityToggle({
  isVisible,
  setIsVisible,
}: PasswordVisibilityToggleProps) {
  const iconStyles = "text-foreground/30 group-hover:text-foreground transition-all";

  const visibilityIcon = isVisible ? (
    <IoEye size={19} className={iconStyles} />
  ) : (
    <IoEyeOff size={19} className={iconStyles} />
  );

  return (
    <div
      onClick={() => setIsVisible(!isVisible)}
      className="cursor-pointer group absolute top-1/2 px-1 py-0.5 overflow-hidden -translate-y-1/2 flex items-center justify-center right-2"
    >
      {visibilityIcon}
    </div>
  );
}
