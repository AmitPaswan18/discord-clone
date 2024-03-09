export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full border-2 p-16 flex justify-center  items-center">
      {children}
    </div>
  );
}
