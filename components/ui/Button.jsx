export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded px-4 py-2 text-sm font-medium transition";

  const variants = {
   primary:  "bg-white text-[#5A6ACF] border border-gray-300 hover:bg-[#5A6ACF] hover:text-white hover:border-[#5A6ACF] transition-colors",


    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
