import React from "react";
import { Camera } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-primary" />
            <span className="font-semibold">Expenginer</span>
          </div>

          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>
              © 2025{" "}
              <a
                href="https://www.instagram.com/expengineer._/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Expenginer
              </a>{" "}
              Class. Semua hak dilindungi.
            </p>
            <p className="mt-1"></p>
            <p className="mt-1">
              Mengabadikan momen berharga dalam perjalanan belajar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
