"use client";

import { useOTPForm } from "@/hooks/useForm";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/Form";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "../ui/InputOTP";
import ErrorMessage from "./ErrorMessage";
import FormSubmissionButton from "./FormSubmissionButton";

type OTPFormProps = {
    email: string;
};

export default function OTPForm({ email }: OTPFormProps) {
    const { form, onSubmit } = useOTPForm(email);

    const { isSubmitting } = form.formState;

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="pin"
                    render={({ field }) => (
                        <FormItem>
                            <div className="pb-1">
                                <FormLabel>Verification code</FormLabel>
                            </div>
                            <FormControl>
                                <InputOTP maxLength={6} {...field}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </FormControl>
                            <ErrorMessage form={form} field="pin" />
                        </FormItem>
                    )}
                />
                <FormSubmissionButton
                    className="mt-6"
                    variant={"OTP"}
                    isSubmitting={isSubmitting}
                />
            </form>
        </Form>
    );
}
