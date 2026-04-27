import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
          <AlertTriangle className="w-10 h-10" />
        </div>
        
        <h1 className="text-5xl font-black text-foreground">404</h1>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Halaman tidak ditemukan</h2>
          <p className="text-muted-foreground text-lg">
            Maaf, halaman yang Anda tuju tidak tersedia atau telah dipindahkan.
          </p>
        </div>
        
        <div className="pt-8">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <HomeIcon className="w-5 h-5" />
              Kembali ke Beranda
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}