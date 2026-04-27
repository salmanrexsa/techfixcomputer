import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { 
  Wrench, 
  Monitor, 
  HardDrive, 
  Printer, 
  Cpu, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  ChevronRight,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const WA_LINK = "https://wa.me/6285894719962";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
              T
            </div>
            <span className="font-bold text-xl tracking-tight">TechFix</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#layanan" className="hover:text-foreground transition-colors">Layanan</a>
            <a href="#keunggulan" className="hover:text-foreground transition-colors">Keunggulan</a>
            <a href="#proses" className="hover:text-foreground transition-colors">Proses</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            <a href="#kontak" className="hover:text-foreground transition-colors">Kontak</a>
          </div>
          <Button asChild size="sm" className="hidden md:flex gap-2">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="w-4 h-4" />
              Hubungi Kami
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-0 -z-10 w-full h-full bg-primary/5 rounded-full blur-3xl opacity-50 transform translate-x-1/3 -translate-y-1/4"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Spesialis IT Sukoharjo
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Laptop Rusak? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                  Biar Kami Yang Bereskan.
                </span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Pusat layanan servis dan perawatan perangkat IT terpercaya. Kami melayani perbaikan hardware dan software untuk komputer, laptop, dan printer dengan teknisi yang berpengalaman, proses transparan, serta garansi perbaikan.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="h-12 px-8 text-base shadow-lg shadow-primary/20">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="w-5 h-5 mr-2" />
                    Konsultasi Gratis
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="h-12 px-8 text-base">
                  <a href="#layanan">
                    Lihat Layanan
                  </a>
                </Button>
              </motion.div>
              
              <motion.div variants={fadeIn} className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs overflow-hidden">
                      <div className="w-full h-full bg-secondary/50"></div>
                    </div>
                  ))}
                </div>
                <p>Dipercaya oleh <strong>500+</strong> pelanggan di Baki & sekitarnya</p>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border aspect-[4/3] md:aspect-auto md:h-[500px]">
                <img 
                  src="/images/workbench.png" 
                  alt="Modern repair workbench" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-background/95 backdrop-blur rounded-xl p-4 border border-white/10 shadow-xl inline-block">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">Garansi Servis</p>
                        <p className="text-xs text-muted-foreground">Perbaikan aman & terjamin</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Kami</h2>
            <p className="text-muted-foreground text-lg">Solusi lengkap untuk segala masalah perangkat IT Anda. Dikerjakan oleh profesional dengan peralatan memadai.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Monitor className="w-6 h-6" />,
                title: "Servis PC & Laptop",
                desc: "Penanganan mati total, overheat, ganti LCD, keyboard, hingga upgrade RAM dan SSD untuk performa maksimal."
              },
              {
                icon: <Cpu className="w-6 h-6" />,
                title: "Instalasi OS & Software",
                desc: "Install ulang Windows, Linux, dan berbagai software pendukung untuk kebutuhan kerja atau sekolah Anda."
              },
              {
                icon: <HardDrive className="w-6 h-6" />,
                title: "Recovery Data",
                desc: "Penyelamatan data penting dari Hardisk, SSD, atau Flashdisk yang rusak, tidak terbaca, atau terformat."
              },
              {
                icon: <Printer className="w-6 h-6" />,
                title: "Servis Printer",
                desc: "Perbaikan berbagai error printer, masalah tinta macet, reset counter, hingga penggantian sparepart."
              },
              {
                icon: <Wrench className="w-6 h-6" />,
                title: "Aksesori & Sparepart",
                desc: "Kami juga menyediakan dan menjual berbagai aksesori serta sparepart komputer berkualitas."
              }
            ].map((service, idx) => (
              <Card key={idx} className="bg-background border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="keunggulan" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img src="/images/motherboard.png" alt="Teknisi berpengalaman" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 rounded-2xl overflow-hidden shadow-xl border-4 border-background hidden md:block">
                <img src="/images/printer.png" alt="Servis printer" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Kenapa Memilih TechFix?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Kami mengerti betapa pentingnya perangkat kerja Anda. Oleh karena itu, kami berkomitmen memberikan pelayanan terbaik, cepat, dan transparan.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
                    title: "Teknisi Berpengalaman",
                    desc: "Dikerjakan oleh teknisi ahli yang sudah menangani ratusan kasus kerusakan dari berbagai merk."
                  },
                  {
                    icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
                    title: "Proses Transparan",
                    desc: "Pengecekan di awal dan estimasi biaya selalu diinfokan sebelum tindakan perbaikan dilakukan. Tidak ada biaya tersembunyi."
                  },
                  {
                    icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
                    title: "Garansi Perbaikan",
                    desc: "Setiap layanan servis kami lindungi dengan garansi agar Anda merasa tenang setelah perbaikan."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proses" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Proses Servis Mudah</h2>
            <p className="text-primary-foreground/80 text-lg">Hanya butuh 4 langkah sederhana untuk mengembalikan perangkat Anda seperti semula.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-primary-foreground/20"></div>
            
            {[
              { num: "01", title: "Hubungi & Konsultasi", desc: "Ceritakan masalah perangkat Anda via WhatsApp atau datang langsung." },
              { num: "02", title: "Cek Kerusakan", desc: "Teknisi kami akan melakukan diagnosa mendalam untuk menemukan akar masalah." },
              { num: "03", title: "Estimasi Biaya", desc: "Kami sampaikan kerusakan & biaya. Perbaikan dimulai setelah Anda setuju." },
              { num: "04", title: "Perbaikan & Garansi", desc: "Perbaikan dilakukan dengan presisi, diserahkan kepada Anda dengan garansi." }
            ].map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center text-xl font-bold mx-auto mb-6 relative z-10 shadow-lg">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Estimasi Biaya</h2>
            <p className="text-muted-foreground text-lg">Harga bersahabat, disesuaikan dengan tingkat kerusakan perangkat Anda.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-2">Pengecekan</h3>
                <div className="text-3xl font-extrabold text-primary mb-4">Gratis*</div>
                <p className="text-muted-foreground text-sm mb-6">Konsultasi dan pengecekan ringan untuk mengetahui masalah dasar.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Cek software</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Cek fisik luar</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Estimasi awal</li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">Tanya Sekarang</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary shadow-lg shadow-primary/10 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Paling Sering
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-2">Servis Ringan / Software</h3>
                <div className="text-3xl font-extrabold text-primary mb-4">Mulai <span className="text-2xl">Rp 50rb</span></div>
                <p className="text-muted-foreground text-sm mb-6">Perbaikan sistem, instalasi, pembersihan, dan masalah non-komponen.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Instalasi Ulang OS</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Pembersihan Virus/Malware</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Cleaning kipas laptop</li>
                </ul>
                <Button className="w-full" asChild>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">Pesan Servis</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-2">Servis Berat / Hardware</h3>
                <div className="text-3xl font-extrabold text-primary mb-4">Mulai <span className="text-2xl">Rp 150rb</span></div>
                <p className="text-muted-foreground text-sm mb-6">Perbaikan motherboard, mati total, dan penggantian sparepart.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Mati total / Konslet</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Ganti LCD/Keyboard/Baterai</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Upgrade RAM/SSD</li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">Konsultasi Harga</a>
                </Button>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">*Pengecekan mendalam yang membutuhkan bongkar total mungkin dikenakan biaya pembatalan jika servis dibatalkan.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Mereka?</h2>
            <p className="text-muted-foreground text-lg">Kepercayaan pelanggan adalah prioritas utama kami.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Budi Santoso",
                role: "Karyawan Swasta",
                text: "Laptop kerja tiba-tiba mati total. Dibawa ke TechFix, dicek detail banget dan dijelaskan kerusakannya di bagian IC. Harga jujur, sekarang laptop lancar jaya!"
              },
              {
                name: "Siti Rahmawati",
                role: "Mahasiswi",
                text: "Layanan sangat ramah! Upgrade RAM dan SSD pengerjaannya cepat bisa ditunggu. Harga sparepart juga terjangkau dibanding tempat lain."
              },
              {
                name: "Agus Wibowo",
                role: "Pemilik Usaha",
                text: "Langganan untuk servis printer kantor. Hasil servisnya rapi, selalu dikasih tips cara merawat printer biar awet. Teknisi sangat profesional."
              }
            ].map((testi, idx) => (
              <Card key={idx} className="bg-background">
                <CardContent className="p-6">
                  <div className="flex text-amber-400 mb-4">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6">"{testi.text}"</p>
                  <div>
                    <p className="font-bold">{testi.name}</p>
                    <p className="text-sm text-muted-foreground">{testi.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pertanyaan Umum (FAQ)</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold text-lg">Berapa lama proses perbaikan laptop?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Lama perbaikan tergantung jenis kerusakan. Untuk masalah software (install ulang, virus) biasanya 1-2 hari. Untuk kerusakan hardware ringan (ganti LCD/Keyboard) bisa ditunggu jika part tersedia. Untuk mati total atau kerusakan motherboard bisa memakan waktu 3-7 hari kerja.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold text-lg">Apakah ada garansi setelah perbaikan?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Tentu saja. Kami memberikan garansi servis selama 14 - 30 hari tergantung jenis perbaikannya. Untuk penggantian sparepart baru, garansi mengikuti garansi resmi distributor (bisa sampai 1 tahun).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold text-lg">Apakah data saya aman saat diservis?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Keamanan privasi dan data pelanggan adalah prioritas kami. Kecuali untuk kasus kerusakan hardisk/SSD atau install ulang OS yang mengharuskan format ulang (yang akan kami konfirmasikan terlebih dahulu), kami tidak akan mengutak-atik data pribadi Anda.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold text-lg">Apakah melayani servis panggilan ke rumah?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Saat ini kami fokus memberikan pelayanan maksimal di bengkel kami agar pengecekan menggunakan alat bisa lebih akurat. Namun, untuk kasus tertentu Anda dapat menghubungi kami terlebih dahulu untuk berdiskusi.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact & Footer */}
      <section id="kontak" className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
              <p className="text-muted-foreground mb-8">
                Punya pertanyaan atau butuh estimasi perbaikan? Jangan ragu untuk menghubungi kami. Teknisi kami siap membantu Anda.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Alamat Bengkel</h4>
                    <p className="text-muted-foreground">Baki, Sukoharjo<br/>Jawa Tengah, Indonesia</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Telepon / WhatsApp</h4>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+62 858-9471-9962</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <a href="mailto:halo@techfixsolo.com" className="text-primary hover:underline">halo@techfixsolo.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Jam Operasional</h4>
                    <p className="text-muted-foreground">Senin - Sabtu: 09:00 - 17:00<br/>Minggu: Tutup</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-2xl p-8 border border-border flex flex-col justify-center text-center items-center h-full min-h-[300px]">
                <div className="w-16 h-16 bg-green-500 rounded-full text-white flex items-center justify-center mb-6 shadow-lg shadow-green-500/30">
                  <FaWhatsapp className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Butuh Bantuan Cepat?</h3>
                <p className="text-muted-foreground mb-8 max-w-sm">Konsultasikan kerusakan perangkat Anda langsung dengan teknisi kami via WhatsApp.</p>
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 bg-green-600 hover:bg-green-700 text-white" asChild>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    Chat WhatsApp Sekarang
                  </a>
                </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border text-center text-muted-foreground">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-2 mb-4">
             <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">
              T
            </div>
            <span className="font-bold text-foreground">TechFix Komputer</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} TechFix Komputer. Pusat servis IT terpercaya di Baki, Sukoharjo.</p>
        </div>
      </footer>

      {/* Floating WA Button */}
      <a 
        href={WA_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
        aria-label="Chat via WhatsApp"
      >
        <span className="absolute right-full mr-4 bg-white text-foreground px-3 py-1.5 rounded-lg text-sm font-medium shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
          Konsultasi Gratis!
        </span>
        <FaWhatsapp className="w-8 h-8" />
      </a>

    </div>
  );
}
