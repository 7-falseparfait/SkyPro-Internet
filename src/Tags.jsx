export function Tags({ children, icon, className = "" }) {
  const baseStyles = `
       py-[0.24rem] rounded-[18px]
     w-[7rem] bg-tagBg border-[0.2px] border-tagBorder text-[12px] text-primary font-[700] flex items-center justify-center gap-1`;
  return (
    <div className={`${baseStyles} ${className}`}>
      {icon}
      {children}
    </div>
  );
}
