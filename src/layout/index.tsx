


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030511] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-8 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl animate-float"></div>
        <div className="absolute right-[-12%] top-1/4 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute left-1/3 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl animate-float animation-delay-3000"></div>
      </div>
      {children}
    </main>
  );
};

export default Layout;