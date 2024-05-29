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
            className="cursor-pointer group absolute top-1/2 p-0.5 transition-all overflow-hidden -translate-y-1/2 flex items-center justify-center right-2"
        >
            {visibilityIcon}
        </div>
    );
}
