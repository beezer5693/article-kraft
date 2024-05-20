import { ToastType, toast } from "react-hot-toast";
import { Close } from "@/components/icons/close";

type ToastProps = {
    type: ToastType;
    message: string;
};

export const useToast = (type: ToastType, message: string) => {
    const toastContent = (t: any) => (
        <span className="mr-3">
            {message}
            <div className="absolute top-1 right-1 p-0.5 rounded transition-all hover:bg-neutral-200/70 flex items-center justify-center">
                <div className="text-foreground" onClick={() => toast.dismiss(t.id)}>
                    <Close className="w-3.5 h-3.5" />
                </div>
            </div>
        </span>
    );

    switch (type) {
        case "error": {
            return toast.error(toastContent, {
                duration: 10000,
                style: {
                    backgroundColor: "#ffffff0",
                    color: "#1F2937",
                    border: "1px solid #a1a1aa40",
                    fontSize: ".85rem",
                    fontWeight: 500,
                    maxWidth: "350px",
                },
            });
        }
        case "success": {
            return toast.success(toastContent, {
                duration: 5000,
                style: {
                    backgroundColor: "#ffffff0",
                    color: "#1F2937",
                    border: "1px solid #a1a1aa40",
                    fontSize: ".85rem",
                    fontWeight: 500,
                    maxWidth: "350px",
                },
            });
        }
    }
};
