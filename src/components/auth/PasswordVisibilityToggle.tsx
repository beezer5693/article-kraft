import { MdVisibility, MdVisibilityOff } from "react-icons/md";

type PasswordVisibilityToggleProps = {
    isVisible: boolean;
    setIsVisible: (isVisible: boolean) => void;
};

const PasswordVisibilityToggle = ({ isVisible, setIsVisible }: PasswordVisibilityToggleProps) => {
    const iconStyles =
        "text-foreground/30 h-[16px] w-[16px] group-hover:text-foreground/80 transition-all";

    const visibilityIcon = isVisible ? (
        <MdVisibility className={iconStyles} />
    ) : (
        <MdVisibilityOff className={iconStyles} />
    );

    return (
        <div
            onClick={() => setIsVisible(!isVisible)}
            className="cursor-pointer group absolute top-1/2 px-1 py-0.5 overflow-hidden -translate-y-1/2 flex items-center justify-center right-1.5"
        >
            {visibilityIcon}
        </div>
    );
};

export default PasswordVisibilityToggle;
