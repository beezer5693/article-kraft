import { getFormSubmissionButtonText } from "@/lib/formHelpers";
import { FormVariant } from "@/lib/types";
import { cn } from "@/lib/utils";
import { LuLoader2 } from "react-icons/lu";
import { Button } from "../ui/Button";

type FormSubmissionButtonProps = {
    variant: FormVariant;
    isSubmitting: boolean;
    className?: string;
};

export default function FormSubmissionButton({
    variant,
    isSubmitting,
    className,
}: FormSubmissionButtonProps) {
    const { buttonText } = getFormSubmissionButtonText(variant);

    return (
        <div className={cn(className)}>
            <Button className="w-full gap-2" disabled={isSubmitting} type="submit">
                {isSubmitting ? (
                    <LuLoader2 className="animate-spin h-4 w-4" />
                ) : (
                    <span>{buttonText}</span>
                )}
            </Button>
        </div>
    );
}
