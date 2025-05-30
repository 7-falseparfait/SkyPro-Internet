export function Button({
  children,
  variant = "primary",
  className = "",
  ...rest
}) {
  const baseStyles = `
      px-8 py-[0.8rem]  cursor-pointer font-dm-sans font-[500]
   `;

  const variants = {
    primary: "bg-primary text-white   w-full rounded-[0.3rem]",
    secondary: "text-primary border border-primary w-full rounded-[0.3rem]",
    subscribe: "text-primary bg-white rounded-[110px]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
