import { FormVariant } from "@/lib/types";
import { cn } from "@/lib/utils";
import { getFormSubmissionButtonText } from "@/lib/form-helpers";
import { CgSpinner } from "react-icons/cg";
import { Button } from "../ui/button";

type FormSubmissionButtonProps = {
  variant: FormVariant;
  isLoading: boolean;
  className?: string;
};

export default function FormSubmissionButton({
  variant,
  isLoading,
  className,
}: FormSubmissionButtonProps) {
  const { buttonText } = getFormSubmissionButtonText(variant, isLoading);

  return (
    <div className={cn(className)}>
      <Button className="w-full gap-2" disabled={isLoading} type="submit">
        {isLoading && <CgSpinner size={20} className="animate-spin" />} {buttonText}
      </Button>
    </div>
  );
}
