import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/5491156902502";

export default function SanacionConSimbolos() {
  return (
    <main className="min-h-screen bg-[#FFFAF5]">
      <header className="flex items-center justify-between bg-[#FFFAF5] px-5 py-4 sm:px-6 md:px-16">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-wide text-[#4B4A7E]"
        >
          DHARMA TERAPIAS HOLÍSTICAS
        </Link>

        <Link
          href="/#servicios"
          className="font-sans text-sm font-semibold text-[#4B4A7E] hover:underline"
        >
          Volver a servicios
        </Link>
      </header>

      <section className="bg-[#9E9FCF] px-5 py-16 sm:px-6 md:px-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 font-sans text-sm font-bold uppercase tracking-[0.2em] text-[#2E2D55]">
            DHARMA · Acompañamiento integral
          </p>

          <h1 className="max-w-4xl font-serif text-4xl leading-tight text-[#2E2D55] sm:text-5xl md:text-6xl">
            Sanación con símbolos
          </h1>

          <p className="mt-6 max-w-3xl font-sans text-lg leading-relaxed text-[#2E2D55]">
            Un espacio de acompañamiento energético orientado a armonizar y
            acompañar procesos personales.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-[#4B4A7E] px-8 py-4 font-sans font-bold !text-white transition hover:bg-[#2E2D55]"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 md:px-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 font-serif text-3xl text-[#4B4A7E] md:text-4xl">
            Un espacio para armonizar
          </h2>

          <div className="max-w-4xl space-y-5 font-sans text-base leading-relaxed text-[#4B4A7E]">
            <p>
              La sanación con símbolos propone un trabajo energético que busca
              acompañar procesos personales desde una mirada integral.
            </p>

            <p>
              Cada encuentro se plantea como un espacio de conexión y
              acompañamiento, respetando el momento y las necesidades
              particulares de cada persona.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#EBC9DD]/40 px-5 py-16 sm:px-6 md:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 font-serif text-3xl text-[#4B4A7E] md:text-4xl">
            Modalidad de atención
          </h2>

          <p className="max-w-3xl font-sans leading-relaxed text-[#4B4A7E]">
            Para conocer la modalidad, duración y detalles de esta propuesta,
            podés comunicarte directamente con Marianela.
          </p>
        </div>
      </section>

      <section className="bg-[#9E9FCF] px-5 py-16 text-center sm:px-6 md:px-16">
        <h2 className="font-serif text-3xl text-[#2E2D55] md:text-4xl">
          ¿Querés realizar una consulta?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl font-sans leading-relaxed text-[#2E2D55]">
          Escribile a Marianela para conocer más sobre esta propuesta y
          coordinar un encuentro.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-block rounded-full bg-[#4B4A7E] px-8 py-4 font-sans font-bold !text-white transition hover:bg-[#2E2D55]"
        >
          Reservar turno
        </a>
      </section>

      <footer className="bg-[#4B4A7E] px-5 py-6 text-center">
        <p className="font-serif text-lg font-semibold tracking-widest text-[#FFFAF5]">
          DHARMA
        </p>
        <p className="mt-1 font-sans text-xs text-[#EBC9DD]">
          Veterinaria y terapias holísticas
        </p>
        <Link
          href="/"
          className="mt-4 inline-block font-sans text-sm text-[#FFFAF5] underline underline-offset-4"
        >
          Volver al inicio
        </Link>
      </footer>
    </main>
  );
}