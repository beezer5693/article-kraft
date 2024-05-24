import { ToastType, toast } from "react-hot-toast";
import { Close } from "@/components/icons/close";

export const useToast = () => {
    const getToast = (type: ToastType, message: string) => {
        const toastContent = (t: any) => (
            <span className="py-1 mr-auto">
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
                        border: "1px solid #dddddd",
                        fontSize: ".85rem",
                        fontWeight: 400,
                        maxWidth: "350px",
                        minWidth: "250px",
                        boxShadow: "0 0 10px 0 #a1a1aa60",
                    },
                });
            }
            case "success": {
                return toast.success(toastContent, {
                    duration: 5000,
                    style: {
                        backgroundColor: "#ffffff0",
                        color: "#1F2937",
                        border: "1px solid #dddddd",
                        fontSize: ".85rem",
                        fontWeight: 400,
                        maxWidth: "350px",
                        minWidth: "250px",
                        boxShadow: "0 0 10px 0 #a1a1aa60",
                    },
                });
            }
        }
    };

    return { getToast };
};
