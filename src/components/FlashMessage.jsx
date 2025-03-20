import { useEffect } from "react";

export default function FlashMessage({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Auto-close after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  // Define colors based on message type (success, error, warning, etc.)
  const colors = {
    success: "border-blue-700/50 text-blue-700",
    error: "border-red-700/50 text-red-700",
    warning: "border-yellow-500",
    info: "border-blue-700/50",
  };

  return (
    <div
      className={`fixed bottom-5 right-5 border ${colors[type]} px-6 py-3 rounded-lg text-sm font-semibold animate-fadeInOut`}
    >
      {message}
    </div>
  );
}
