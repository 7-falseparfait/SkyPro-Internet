export function Button({ children, variant = 'primary', className = '', ...rest }) {
  const baseStyles = `
      px-8 py-[0.9rem]  cursor-pointer font-dm-sans font-[500]
   `;

  const variants = {
    primary: 'text-primary w-full rounded-[2.1rem]',
    secondary: 'text-white border border-white w-full rounded-[2.1rem]',
    subscribe: 'text-primary bg-white rounded-[110px]',
    coverage: 'text-white bg-primary rounded-[2.1rem]',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
