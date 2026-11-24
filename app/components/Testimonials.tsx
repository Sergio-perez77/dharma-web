"use client";

import { useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Virginia y Julián",
    detail: "Tutores de Roger",
    text: `Cuando arrancamos con Marianela, Roger tenía 1 año y 7 meses. Sufría de ansiedad por separación: al quedarse solo lloraba y orinaba por toda la casa, entre otras cosas. A partir del tratamiento el cambio fue enorme. Nunca más orinó adentro y viajamos dejándolo al cuidado de la abuela sin problemas. Entiende perfectamente que si nos vamos, volvemos, y puede dormir en otra habitación sin miedo. Siempre recomendamos a Marianela porque efectiva y felizmente comprobamos los cambios en nuestro perrhijo.`,
  },
  {
    id: 2,
    name: "Candela",
    detail: "Tutora de Blanquita y Pol",
    text: `Conocer a Marianela fue no solo una conexión maravillosa, sino una tranquilidad en mi día a día. Fue entender las emociones de mis gatitos, conocerlos desde un lado íntimo. Puedo afirmar al 100% que tenerla como veterinaria y como terapeuta floral es algo maravilloso y muy tranquilizador. El vínculo que mis gatitos generaron con ella fue hermoso, y hacer los estudios en casa evita que se estresen al salir. Mi gatito pasó por una uretrostomía, que deja una patología urinaria crónica, y ella lo acompaña de forma emocional y física. Su compromiso diario por saber cómo están y cuidarlos es enorme. Una calidad humana que no se encuentra en cualquier lado: con ella te sentís acompañado y seguro.`,
  },
  {
    id: 3,
    name: "Mía y Simba",
    detail: "",
    text: `Conocí a Marian trabajando juntas, cuando aún no era la profesional que es hoy, pero desde entonces se notaba su amor y dedicación. Muchos años más tarde, se convirtió en la profesional holística que ayuda a nuestros compañeros de vida, Mia y Simba, a superar sus ansiedades, miedos, y en el caso de Simba, sus ataques de dermatitis atópica.

Hace poco, me empezó a acompañar a mí a atravesar un accidente leve que tuve.

Realmente, no podemos pensar en mejor acompañante integral para nuestra familia!`,
  },
  {
    id: 4,
    name: "Amira",
    detail: "La Plata",
    text: `Mi nombre es Amira, vivo en la ciudad de La Plata.
Llegué a Marianella a través de la recomendación de una amiga, ya que estaba interesada en un acompañamiento en Flores de Bach para mi gatita porque la notaba demasiado "alterada" y quería una respuesta amorosa para ambas.

En la primera entrevista, ella detectó que era yo quien necesitaba el acompañamiento floral y comenzamos un proceso de varios meses donde me permitió dar un paso importante en mi vida y empezar a prestarle más atención a mi cuerpo, junto a mis deseos y necesidades.

Fue una experiencia hermosa, súper cálida y profesional a la vez! Obvio que mi gatita fue calmándose y volviendo a su personalidad a medida que iba sanando y abriéndome a la sabiduría de todas esas emociones no dichas en mi interior (para luego tomar las acciones correspondientes).

Recomiendo totalmente el acompañamiento de Mari 🫶🏽`,
  },
  {
    id: 5,
    name: "Coco y Nilo",
    detail: "",
    text: `Quienes nos conocen saben que nuestro primer gato Coco era muy mala onda, pero también bastante agresivo. En noviembre de 2022, llegamos a la veterinaria llorando, en crisis por no saber qué hacer con él. Sumado a las mordidas vivía nervioso maullando día y noche y tirando todo lo que encontraba.

La veterinaria nos recomendó a Marian, quien vino a casa, al llegar se sentó en el piso para estar con ellos y comenzó a interactuar. Ella, una profesional llena de amor, nos recomendó iniciar un tratamiento con flores de Bach, junto con rutinas nuevas y más sanas para la convivencia.

No fue un proceso fácil, requirió de mucha paciencia y dedicación, de muchísimo amor.
Marian nos enseñó muchísimo, con su ayuda pudimos darles una mejor vida a nuestros bebés, hoy viven más tranquilos, Coco dejó de morder y ponerse en alerta cada vez que sentía un ruido y Nilo, nuestro segundo gato, dejó de vivir con el miedo que tenía hacia todo y ahora es alguien muy confiado y relajado.

Nota importante para nosotros, fue que más adelante nos ayudó con el proyecto de emigrar, otro proceso que nos llevó un tiempo de preparación para que ellos tuvieran el mejor viaje posible.

Gracias Marian! Realmente cambiaste la vida de todos en esta casa y siempre vamos a estar agradecidos.`,
  },
];

function TestimonialCard({
  name,
  detail,
  text,
}: {
  name: string;
  detail: string;
  text: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="flex h-full w-[85%] max-w-[460px] shrink-0 snap-start flex-col rounded-3xl border border-[#EBC9DD] bg-white p-6 sm:w-[70%] sm:p-8 md:w-[calc(50%-12px)]">
      <p className="mb-4 font-serif text-4xl leading-none text-[#9E9FCF]">
        “
      </p>

      <p
        className={`whitespace-pre-line font-sans text-base leading-relaxed text-[#4B4A7E] ${
          expanded ? "" : "line-clamp-5"
        }`}
      >
        {text}
      </p>

      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="mt-3 w-fit font-sans text-sm font-bold text-[#4B4A7E] underline decoration-[#9E9FCF] underline-offset-4 transition hover:text-[#2E2D55]"
      >
        {expanded ? "Leer menos" : "Leer más"}
      </button>

      <div className="mt-6 border-t border-[#EBC9DD] pt-5">
        <p className="font-serif text-xl text-[#4B4A7E]">{name}</p>
        {detail && (
          <p className="mt-1 font-sans text-sm text-[#4B4A7E]">
            {detail}
          </p>
        )}
      </div>
    </article>
  );
}

export default function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const moveCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const distance = carouselRef.current.clientWidth * 0.8;

    carouselRef.current.scrollBy({
      left: direction === "right" ? distance : -distance,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="testimonios"
      className="bg-[#FFFAF5] px-5 py-14 sm:px-6 sm:py-16 md:px-16 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="mb-4 font-sans text-sm font-bold uppercase tracking-[0.2em] text-[#4B4A7E]">
            Experiencias compartidas
          </p>

          <h2 className="font-serif text-4xl leading-tight text-[#4B4A7E] md:text-5xl">
            Historias de bienestar y acompañamiento
          </h2>
        </div>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                detail={testimonial.detail}
                text={testimonial.text}
              />
            ))}
          </div>

          <div className="mt-6 hidden items-center justify-end gap-3 md:flex">
            <button
              type="button"
              aria-label="Testimonio anterior"
              onClick={() => moveCarousel("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#9E9FCF] text-2xl text-[#4B4A7E] transition hover:bg-[#EBC9DD]"
            >
              ‹
            </button>

            <button
              type="button"
              aria-label="Siguiente testimonio"
              onClick={() => moveCarousel("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#9E9FCF] text-2xl text-[#4B4A7E] transition hover:bg-[#EBC9DD]"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}