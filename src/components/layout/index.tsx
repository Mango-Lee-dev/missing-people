import Navbar from "../gnb/NavBar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />
      {children}
    </div>
  );
};
