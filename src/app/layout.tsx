import Modal from "@/components/modals/Modal";
import NavBar from "../components/navbar/NavBar";
import "./globals.css";
import { Nunito } from "next/font/google";

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
        {/* <Modal isOpen /> */}
        <NavBar />
        {children}
      </body>
    </html>
  );
}
