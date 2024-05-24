import { getFormSubmissionButtonText } from "@/lib/form-helpers";
import { FormVariant } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Loader from "../ui/loader";

type FormSubmissionButtonProps = {
    variant: FormVariant;
    isSubmitting: boolean;
    className?: string;
};

const FormSubmissionButton = ({ variant, isSubmitting, className }: FormSubmissionButtonProps) => {
    const { buttonText } = getFormSubmissionButtonText(variant, isSubmitting);

    return (
        <div className={cn(className)}>
            <Button className="w-full gap-2" disabled={isSubmitting} type="submit">
                {isSubmitting ? <Loader /> : <span>{buttonText}</span>}
            </Button>
        </div>
    );
};

export default FormSubmissionButton;
