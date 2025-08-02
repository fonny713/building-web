import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, Hammer, Package, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <Image
          src="/hero-bg.jpg"
          alt="Construction site background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-90" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
              Buduj Swoją{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Przyszłość
              </span>{" "}
              Z Nami
            </h1>
            <p className="mb-8 text-lg text-gray-300 sm:text-xl md:text-2xl">
              Perfekcja w Budownictwie, Zarządzaniu Projektami i Dostawie
              Materiałów Budowlanych
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="min-w-[200px] bg-blue-600 hover:bg-blue-700 text-white"
                asChild
              >
                <Link
                  href="/contact"
                  className="flex items-center gap-2"
                  style={{ fontWeight: "600" }}
                >
                  Darmowa Wycena{" "}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="min-w-[200px] border-2 border-white text-black hover:bg-white hover:text-slate-900"
                asChild
              >
                <Link href="/portfolio">Zobacz Nasze Projekty</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4">
              Nasze{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Usługi
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Kompleksowe rozwiązania dla wszystkich Twoich potrzeb budowlanych
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-lg bg-blue-50 p-2 text-blue-600">
                  <Building2 className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Budownictwo</CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  Rozwiązania budowlane dla klientów indywidualnych, komercyjnych i przemysłowych dostosowane do Twoich potrzeb.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  className="group w-full text-blue-600"
                  asChild
                >
                  <Link
                    href="/services/construction"
                    className="flex items-center justify-between"
                  >
                    Dowiedz się więcej{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-lg bg-blue-50 p-2 text-blue-600">
                  <Hammer className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Usługi Profesjonalne</CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  Eksperckie zarządzanie projektami, doradztwo i usługi remontowe.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  className="group w-full text-blue-600"
                  asChild
                >
                  <Link
                    href="/services"
                    className="flex items-center justify-between"
                  >
                    Dowiedz się więcej{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-lg bg-blue-50 p-2 text-blue-600">
                  <Package className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Materiały Budowlane</CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  Wysokiej jakości materiały budowlane dla wszystkich Twoich potrzeb.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  className="group w-full text-blue-600"
                  asChild
                >
                  <Link
                    href="/materials"
                    className="flex items-center justify-between"
                  >
                    Dowiedz się więcej{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="o-nas" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4">
              O{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Nas
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Od ponad 15 lat jesteśmy liderem w branży budowlanej na polskim rynku. Nasza firma łączy tradycyjne wartości rzemiosła z nowoczesnymi technologiami, zapewniając najwyższą jakość usług budowlanych i materiałów.
            </p>
            <p className="text-gray-600 text-lg">
              Nasz zespół doświadczonych specjalistów jest zaangażowany w realizację każdego projektu z najwyższą starannością i profesjonalizmem. Stawiamy na innowacyjne rozwiązania, zrównoważone budownictwo i pełną satysfakcję naszych klientów.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="text-blue-100">Zrealizowanych Projektów</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">15+</h3>
              <p className="text-blue-100">Lat Doświadczenia</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">100+</h3>
              <p className="text-blue-100">Ekspertów w Zespole</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">98%</h3>
              <p className="text-blue-100">Zadowolonych Klientów</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="kontakt" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4">
                Skontaktuj się z{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Nami
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                Odpowiemy na wszystkie Twoje pytania i pomożemy w realizacji projektu
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
