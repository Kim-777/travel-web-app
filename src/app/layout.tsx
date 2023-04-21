import Modal from "@/components/modals/Modal";
import NavBar from "../components/navbar/NavBar";
import "./globals.css";
import { Nunito } from "next/font/google";
import RegisterModal from "@/components/modals/RegisterModal";
import ToasterProvider from "@/providers/ToasterProvider";

export const metadata = {
  title: "traveler",
  description: "travler",
};

const nunito = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.className}>
      <body>
        <ToasterProvider />
        <RegisterModal />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
