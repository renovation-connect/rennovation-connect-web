import { Navbar1 } from "@/components/navbar1";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"

export default function Welcome() {
  return (
    <>
      <div className="fixed top-0  w-full z-50 shadow bg-background">
        <Navbar1 />
      </div>
      <section className="px-6 py-40 mx-auto">
        {/* HERO */}
        <div className="text-center py-15 mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Bienvenido a Renovation Connect
          </h1>
          <p className="text-lg mb-6">
            La plataforma donde clientes y profesionales de reformas se
            encuentran para transformar hogares.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button variant="default">Explora Profesionales</Button>
            <Button variant="secondary">Soy Profesional</Button>
          </div>
        </div>
        <Separator className="my-4" />
        {/* FEATURES */}
        <div className="mb-16 py-15 ">
          <h2 className="text-2xl font-bold mb-6 text-center">
            ¿Qué te ofrecemos?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Presupuestos Personalizados</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Solicita y compara presupuestos de manera rápida y gratuita.
                  Encuentra la mejor opción para tu reforma.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Profesionales Verificados</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Trabajamos solo con profesionales evaluados por otros usuarios
                  para garantizar un servicio de calidad.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Gestión del Proyecto</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Visualiza el progreso de tu reforma, haz seguimiento y
                  comunica cambios fácilmente desde tu panel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <Separator className="my-4" />
        {/* BENEFITS */}
        <div className="mb-16 py-15">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Beneficios para Clientes y Profesionales
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
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
        <Separator className="my-4" />
        {/* HOW IT WORKS */}
        <div className="mb-16 py-15">
          <h2 className="text-2xl font-bold mb-4 text-center">
            ¿Cómo funciona?
          </h2>
          <Card className="max-w-xl mx-auto">
            <CardContent className="pt-6">
              <ol className="list-decimal list-inside space-y-2">
                <li>Regístrate como cliente o profesional.</li>
                <li>Publica o responde a solicitudes de reforma.</li>
                <li>Comparte ideas, firma acuerdos y empieza la obra.</li>
              </ol>
            </CardContent>
          </Card>
        </div>
        <Separator className="my-4" />
        {/* CALL TO ACTION */}
        <div className="text-center py-12 rounded-xl shadow-inner">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Únete a Renovation Connect
          </h2>
          <p className="mb-6">
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
