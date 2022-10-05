import { FC, ReactNode } from "react";
import { Header } from "~/components/common/Header";
import { Footer } from "~/components/Footer";
export interface MainLayoutInterface {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutInterface> = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="padding-layout">{children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;
