import { Span } from "next/dist/trace";
import { ToastType } from "react-hot-toast";
import { toast } from "react-hot-toast";

export function getToast(type: ToastType, message: string, theme: string | undefined) {
  const toastContent = (t: any) => (
    <span className="ml-0.5">
      {message}
      <div className="absolute top-1.5 right-1.5 p-0.5 rounded-md transition-all hover:bg-neutral-200/70 dark:hover:bg-neutral-800 flex items-center justify-center">
        <div className="text-primary" onClick={() => toast.dismiss(t.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </span>
  );

  switch (type) {
    case "error": {
      return toast.error(toastContent, {
        duration: 10000,
        style: {
          backgroundColor: theme === "dark" ? "#09090b" : "#ffffff",
          color: theme === "dark" ? "#F9FAFB" : "#1F2937",
          border: theme === "dark" ? "1px solid #a1a1aa30" : "1px solid #a1a1aa40",
          fontSize: ".85rem",
          fontWeight: 500,
          maxWidth: "300px",
        },
      });
    }
    case "success": {
      return toast.success(toastContent, {
        duration: 5000,
        style: {
          backgroundColor: theme === "dark" ? "#09090b" : "#ffffff",
          color: theme === "dark" ? "#F9FAFB" : "#1F2937",
          border: theme === "dark" ? "1px solid #a1a1aa30" : "1px solid #a1a1aa40",
          fontSize: ".85rem",
          fontWeight: 500,
          maxWidth: "300px",
        },
      });
    }
  }
}
