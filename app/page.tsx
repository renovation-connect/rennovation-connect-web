import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/my-components/navbar-custom";
import SkiperCardDemo from "@/components/my-components/skiper-card-demo";
import CardCaroursalComp from "@/components/my-components/card-caroursal-comp";
import WrapButton  from "@/components/my-components/get-started-home";

export default function Welcome() {
  return (
    <>
      <Navbar />
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-20 max-w-7xl mx-auto">
        {/* HERO */}
        <div
          className="text-center mb-20 bg-cover bg-center py-60 px-4 sm:px-10 rounded-xl"
          style={{ backgroundImage: "url('/img/hero.png')" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow">
            Bienvenido a Renovation Connect
          </h1>
          <p className="text-base sm:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            La plataforma donde clientes y profesionales de reformas se
            encuentran para transformar hogares.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <WrapButton>Get started</WrapButton>
          </div>
        </div>

        <Separator className="my-10" />

        {/* FEATURES */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            ¿Qué te ofrecemos?
          </h2>
          <CardCaroursalComp />
        </div>

        <Separator className="my-10" />

        {/* BENEFITS */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Beneficios para Clientes y Profesionales
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Para Clientes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Encuentra al profesional perfecto en minutos.</li>
                  <li>Recibe notificaciones del progreso.</li>
                  <li>Guarda tus reformas favoritas e ideas.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Para Profesionales</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Consigue más clientes sin complicaciones.</li>
                  <li>
                    Gestiona presupuestos y solicitudes desde un único lugar.
                  </li>
                  <li>Haz crecer tu reputación con valoraciones reales.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-10" />

        {/* HOW IT WORKS */}
        <div className="mb-20">
          <SkiperCardDemo />
        </div>

        <Separator className="my-10" />

        {/* CALL TO ACTION */}
        <div className="text-center py-12 rounded-xl shadow-inner bg-muted">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Únete a Renovation Connect
          </h2>
          <p className="mb-6 max-w-xl mx-auto">
            Empieza hoy mismo a transformar espacios o tu carrera profesional.
          </p>
          <Button variant="default" size="lg">
            Comenzar ahora
          </Button>
        </div>
      </section>
    </>
  );
}
