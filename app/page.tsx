import Image from "next/image";
import Testimonials from "./components/Testimonials";

const WHATSAPP_URL = "https://wa.me/5491156902502";

export default function Home() {
  return (
    <main>
      <header className="flex flex-col items-center gap-1 px-5 py-1 sm:px-6 md:flex-row md:justify-between md:gap-6 md:px-16 md:py-2">
        <a
          href="#inicio"
          className="flex flex-col items-center gap-0"
        >
          <Image
            src="/images/InShot-dharma.png"
            alt="Logo Dharma"
            width={110}
            height={110}
            priority
            className="h-auto w-16 object-contain sm:w-20"
          />

          <span className="font-serif text-2xl font-semibold tracking-wide text-[#4B4A7E]">
            DHARMA
          </span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-center font-sans text-xs font-semibold text-[#4B4A7E] sm:text-sm md:justify-end">
          <a href="#quien-soy">Quién soy</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto y turnos</a>
        </nav>
      </header>

      <section
        id="inicio"
        className="flex min-h-[550px] items-center bg-[#9E9FCF] px-5 py-14 sm:px-6 sm:py-16 md:min-h-[650px] md:px-16 md:py-20"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-6 font-sans text-sm font-bold uppercase tracking-[0.2em] text-[#2E2D55]">
              Veterinaria y terapias holísticas
            </p>

            <h1 className="mb-6 font-serif text-4xl leading-tight text-[#2E2D55] sm:text-5xl md:mb-8 md:text-7xl">
              Bienestar integral para vos y tu compañero animal
            </h1>

            <p className="mb-8 max-w-2xl font-sans text-base leading-relaxed text-[#2E2D55] sm:text-lg md:mb-10 md:text-xl">
              Flores de Bach · Sanación con símbolos · Veterinaria con enfoque
              integral. Para animales y personas.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[#B8CDB0] px-9 py-4 font-sans font-bold text-[#2E2D55] transition-colors hover:bg-[#FFFAF5]"
            >
              Reservá tu turno
            </a>
          </div>

          <div className="mt-14 border-t border-[#EBC9DD] pt-6 md:mt-20 md:pt-8">
            <p className="max-w-2xl font-serif text-xl italic leading-relaxed text-[#2E2D55] sm:text-2xl md:text-3xl">
              “Sanar lo más sutil del ser para volver al equilibrio.”
            </p>

            <p className="mt-3 font-sans text-sm font-semibold text-[#2E2D55]">
              Marianela Vernetti
            </p>
          </div>
        </div>
      </section>

        <section
        id="quien-soy"
        className="bg-[#FFFAF5] px-5 py-14 sm:px-6 sm:py-16 md:px-16 md:py-28"
      >
            <div className="mx-auto grid w-full max-w-6xl gap-10 sm:gap-12 md:grid-cols-2 md:items-center">
              <div>
                <p className="mb-4 font-sans text-sm font-bold uppercase tracking-[0.2em] text-[#4B4A7E]">
                  Conocé a Marianela
                </p>

                <h2 className="mb-8 font-serif text-4xl leading-tight text-[#4B4A7E] md:text-5xl">
                  <strong>Quién soy</strong>
                </h2>

                <div className="space-y-5 font-sans text-base leading-relaxed text-[#4B4A7E]">
                  <p>
                    Desde muy chica sentí una <strong>conexión especial con los animales</strong>.
                    No era solo amor: era un llamado a <strong>comprenderlos, cuidarlos,
                    curarlos y acompañarlos</strong> en sus procesos.
                  </p>

                  <p>
                    Ese llamado me llevó a estudiar <strong>Veterinaria</strong>, y en 2019 me
                    recibí. Con el tiempo entendí que <strong>el bienestar no se juega
                    solo en el cuerpo el bienestar no se juega
                    solo en el cuerpo</strong>: las emociones, la energía y el vínculo
                    entre las personas y sus animales también forman parte de la
                    salud.
                  </p>

                  <p>
                    Así nació <strong>Dharma</strong>, un espacio de<strong>acompañamiento holístico e
                    integral para animales y personas.</strong>  Trabajo con <strong>flores de Bach
                    y sanación con símbolos,</strong> con una mirada que integra lo físico,
                    lo emocional y lo espiritual, sostenida en mi formación
                    veterinaria.
                  </p>

                  <p>
                    Creo que <strong>sanar es mirar al ser en su totalidad</strong>. Cuando
                    encontramos equilibrio en el cuerpo, la mente y el espíritu,
                    ese equilibrio también llega a quienes nos acompañan, y <strong>el
                    hogar se vuelve un lugar más armónico.</strong>
                  </p>

                  <p>
                    Si llegaste hasta acá, quizás este sea <strong>el comienzo de un
                    nuevo camino</strong> para vos y tu compañero animal. Te doy la
                    bienvenida.
                  </p>
                </div>

                <div className="mt-8 border-t border-[#EBC9DD] pt-5">
                  <p className="font-serif text-xl italic text-[#4B4A7E]">
                    Marianela Vernetti
                  </p>
                  <p className="mt-1 font-sans text-sm font-semibold text-[#4B4A7E]">
                    MN 10241
                  </p>
                </div>
              </div>

              <div className="mx-auto flex min-h-[280px] w-full max-w-[280px] items-center justify-center rounded-full border-2 border-[#EBC9DD] bg-[#9E9FCF]/20 p-6 text-center sm:min-h-[350px] sm:max-w-[350px] sm:p-8 md:min-h-[450px] md:max-w-none">
                <p className="max-w-xs font-serif text-xl italic text-[#4B4A7E]">
                  Aquí irá el retrato de Marianela.
                </p>
              </div>
            </div>
        </section>

        <section
        id="servicios"
        className="bg-[#9E9FCF] px-5 py-14 sm:px-6 sm:py-16 md:px-16 md:py-28"
      >
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-14 max-w-3xl">
              <p className="mb-4 font-sans text-sm font-bold uppercase tracking-[0.2em] text-[#2E2D55]">
                Acompañamiento integral
              </p>

              <h2 className="mb-6 font-serif text-4xl leading-tight text-[#2E2D55] md:text-5xl">
                Terapias y acompañamiento
              </h2>
            </div>

            <div className="grid items-start gap-5 sm:gap-6 md:grid-cols-3 md:gap-8 [&>article]:min-h-[280px] md:[&>article]:min-h-[320px]">
              <article className="flex flex-col rounded-3xl border border-[#EBC9DD] bg-[#FFFAF5] p-6 sm:p-8">
                <h3 className="mb-5 font-serif text-2xl text-[#4B4A7E]">
                  Veterinaria con enfoque integral
                </h3>

                <p className="mb-8 font-sans leading-relaxed text-[#4B4A7E]">
                  Medicina veterinaria y herramientas holísticas para acompañar
                  el bienestar físico y emocional de animales.
                </p>

                <details className="mt-auto">
                  <summary className="inline-block cursor-pointer list-none rounded-full bg-[#B8CDB0] px-6 py-3 font-sans font-bold text-[#2E2D55]">
                    Conocé más
                  </summary>

                  <div className="mt-5 border-t border-[#EBC9DD] pt-5 font-sans leading-relaxed text-[#4B4A7E]">
                    <p>
                      Atención veterinaria que integra la medicina convencional con
                      herramientas holísticas, contemplando el bienestar físico y emocional
                      de cada animal.
                    </p>

                    <p className="mt-4">
                      Modalidad presencial a domicilio en CABA y online. Fuera de CABA,
                      atención online.
                    </p>
                  </div>
                </details>
              </article>

              <article className="flex flex-col rounded-3xl border border-[#EBC9DD] bg-[#FFFAF5] p-6 sm:p-8">
                <h3 className="mb-5 font-serif text-2xl text-[#4B4A7E]">
                  Terapia floral para humanos y animales
                </h3>

                <p className="mb-8 font-sans leading-relaxed text-[#4B4A7E]">
                  Flores de Bach para personas, animales o para acompañar el
                  vínculo entre ambos.
                </p>

                <details className="mt-auto">
                  <summary className="inline-block cursor-pointer list-none rounded-full bg-[#B8CDB0] px-6 py-3 font-sans font-bold text-[#2E2D55]">
                    Conocé más
                  </summary>

                  <div className="mt-5 border-t border-[#EBC9DD] pt-5 font-sans leading-relaxed text-[#4B4A7E]">
                    <p>
                      Terapia floral con Flores de Bach para acompañar a una persona,
                      a un animal o a ambos, contemplando también el vínculo entre ellos.
                    </p>

                    <p className="mt-4">
                      La propuesta incluye sesiones y un mensaje final a modo de oráculo.
                    </p>

                    <p className="mt-4">
                      Modalidad online.
                    </p>
                  </div>
                </details>
              </article>

              <article className="flex flex-col rounded-3xl border border-[#EBC9DD] bg-[#FFFAF5] p-6 sm:p-8">
                <h3 className="mb-5 font-serif text-2xl text-[#4B4A7E]">
                  Sanación con símbolos
                </h3>

                <p className="mb-8 font-sans leading-relaxed text-[#4B4A7E]">
                  Trabajo energético orientado a armonizar y acompañar procesos
                  personales.
                </p>

                <details className="mt-auto">
                  <summary className="inline-block cursor-pointer list-none rounded-full bg-[#B8CDB0] px-6 py-3 font-sans font-bold text-[#2E2D55]">
                    Conocé más
                  </summary>

                  <div className="mt-5 border-t border-[#EBC9DD] pt-5 font-sans leading-relaxed text-[#4B4A7E]">
                    <p>
                      Trabajo energético con símbolos orientado a armonizar,
                      desbloquear y ordenar procesos.
                    </p>

                    <p className="mt-4">
                      Modalidad online.
                    </p>
                  </div>
                </details>
              </article>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <Testimonials />

        {/* CONTACTO */}
          <section
            id="contacto"
            className="bg-[#9E9FCF] px-5 py-16 sm:px-6 sm:py-20 md:px-16 md:py-28"
          >
            <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-2 md:items-center">
              <div>
                <p className="mb-4 font-sans text-sm font-bold uppercase tracking-[0.2em] text-[#2E2D55]">
                  Contacto y turnos
                </p>

                <h2 className="mb-6 font-serif text-4xl leading-tight text-[#2E2D55] md:text-5xl">
                  Empecemos este camino
                </h2>

                <p className="mb-8 max-w-xl font-sans text-lg leading-relaxed text-[#2E2D55]">
                  Los turnos se coordinan por WhatsApp. Escribime y coordinamos el encuentro.
                </p>

                <a
                  href="https://wa.me/5491156902502"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FFFFFF", backgroundColor: "#4B4A7E" }}
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-sans text-base font-bold shadow-sm transition-colors hover:bg-[#2E2D55]"
                >
                  <span style={{ color: "#FFFFFF", opacity: 1 }}>
                    Escribime por WhatsApp
                  </span>
                </a>
              </div>

              <div className="rounded-3xl border border-white/60 bg-[#FFFAF5] p-7 sm:p-9">
                <div className="mb-7">
                  <h3 className="mb-3 font-serif text-2xl text-[#4B4A7E]">
                    Modalidad de atención
                  </h3>

                  <p className="font-sans leading-relaxed text-[#4B4A7E]">
                    En CABA: presencial a domicilio u online.
                    <br />
                    Resto del país y exterior: online, por videollamada.
                  </p>
                </div>

                <div className="mb-7 border-t border-[#EBC9DD] pt-6">
                  <h3 className="mb-3 font-serif text-2xl text-[#4B4A7E]">
                    Horarios
                  </h3>

                  <p className="font-sans text-[#4B4A7E]">
                    Lunes a viernes, de 10 a 18 hs.
                  </p>
                </div>

                <div className="border-t border-[#EBC9DD] pt-6">
                  <h3 className="mb-3 font-serif text-2xl text-[#4B4A7E]">
                    También podés encontrarme en
                  </h3>

                  <a
                    href="https://www.instagram.com/dharma.terapias.holisticas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans font-bold text-[#4B4A7E] underline underline-offset-4"
                  >
                    Instagram · @dharma.terapias.holisticas
                  </a>

                  <p className="mt-5 font-sans text-sm text-[#4B4A7E]">
                    Marianela Vernetti · MN 10241
                  </p>
                </div>
              </div>
            </div>
          </section>

          
          {/* FOOTER */}
          <footer className="bg-[#4B4A7E] px-5 py-3 sm:px-6">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
              <h2 className="font-serif text-xl font-semibold tracking-widest text-[#FFFAF5]">
                DHARMA
              </h2>
              <p className="mt-1 font-sans text-xs text-[#EBC9DD]">
                Veterinaria y terapias holísticas
              </p>
              <p className="mt-2 max-w-xl font-serif text-sm italic leading-relaxed text-[#FFFAF5]">
                Sanar lo más sutil del ser para volver al equilibrio.
              </p>
              <div className="my-2 h-px w-10 bg-[#9E9FCF]" />
              <p className="font-serif text-sm text-[#FFFAF5]">
                Marianela Vernetti
              </p>
              <p className="mt-0.5 font-sans text-xs text-[#EBC9DD]">
                MN 10241
              </p>
              <p className="mt-3 font-sans text-[10px] text-[#EBC9DD]">
                © 2026 DHARMA. Todos los derechos reservados.
              </p>
            </div>
          </footer>

    </main>
  );
}