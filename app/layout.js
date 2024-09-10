import { Suspense } from "react";
import "@/app/_styles/globals.css";
import Spinner from "@/app/_components/Spinner";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

// Import the font , And We Use It As A ClassName 
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});


export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>
              <Suspense fallback={<Spinner />}>{children}</Suspense>
            </ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
