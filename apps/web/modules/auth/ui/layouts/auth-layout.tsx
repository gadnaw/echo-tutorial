export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen min-w-screen h-full flex flex-col items-center justify-center bg-gradient-to-b from-primary to-[#0b63f3] p-4 text-primary-foreground">
      {children}
    </div>
  );
};
