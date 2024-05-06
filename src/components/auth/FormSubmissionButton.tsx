import { useFormSubmissionButtonText } from "@/hooks/useForm";
import { cn } from "@/lib/utils";
import { FormVariant } from "@/types/types";
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
  const { buttonText } = useFormSubmissionButtonText(variant, isLoading);

  return (
    <div className={cn(className)}>
      <Button className="w-full gap-2" disabled={isLoading} type="submit">
        {isLoading && <CgSpinner size={20} className="animate-spin" />} {buttonText}
      </Button>
    </div>
  );
}
