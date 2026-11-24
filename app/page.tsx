const WHATSAPP_URL = "https://wa.me/5491156902502";

export default function Home() {
  return (
    <main>
      <header className="flex flex-col gap-5 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-16">
        <a
          href="#inicio"
          className="font-serif text-3xl font-semibold tracking-wide text-[#4B4A7E]"
        >
          DHARMA
        </a>

        <nav className="flex flex-wrap gap-5 font-sans text-sm font-semibold text-[#4B4A7E]">
          <a href="#quien-soy">Quién soy</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto y turnos</a>
        </nav>
      </header>

      <section
        id="inicio"
        className="flex min-h-[650px] items-center bg-[#9E9FCF] px-6 py-20 md:px-16"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-6 font-sans text-sm font-bold uppercase tracking-[0.2em] text-[#2E2D55]">
              Veterinaria y terapias holísticas
            </p>

            <h1 className="mb-8 font-serif text-5xl leading-tight text-[#2E2D55] md:text-7xl">
              Bienestar integral para vos y tu compañero animal
            </h1>

            <p className="mb-10 max-w-2xl font-sans text-lg leading-relaxed text-[#2E2D55] md:text-xl">
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

          <div className="mt-20 border-t border-[#EBC9DD] pt-8">
            <p className="max-w-2xl font-serif text-2xl italic leading-relaxed text-[#2E2D55] md:text-3xl">
              “Sanar lo más sutil del ser para volver al equilibrio.”
            </p>

            <p className="mt-3 font-sans text-sm font-semibold text-[#2E2D55]">
              Marianela Vernetti
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}