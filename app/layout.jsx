import { Nunito } from "next/font/google";
import { Navbar } from "./components/Navbar";
import "./globals.css";
import "./delays.css";

import { RegisterModal } from "./components/modals/RegisterModal";
import { ToasterProvider } from "./providers/ToasterProvider";
import { LoginModal } from "./components/modals/LoginModal";
import { RentModal } from "./components/modals/RentModal";
import { SearchModal } from "./components/modals/SearchModal";
import getCurrentUser from "./actions/getCurrentUser";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb - @danniiigt",
  description: "Airbnb clone made by @danniiigt",
  favicon: "/favicon.ico",
};

export default async function RootLayout({ children }) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* PROVIDERS */}
        <ToasterProvider />

        {/* MODALS */}
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <SearchModal />

        {/* COMPONENTS */}
        <Navbar currentUser={currentUser} />
        <div className="py-5">{children}</div>
      </body>
    </html>
  );
}
