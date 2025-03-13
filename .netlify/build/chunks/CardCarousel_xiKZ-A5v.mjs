import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, j as renderSlot, i as renderComponent, r as renderTemplate } from './astro/server_DMsw3aH6.mjs';
import 'kleur/colors';
import { c as createSvgComponent } from './Layout_Do0VXsYQ.mjs';
import 'clsx';

const RightArrow = createSvgComponent({"meta":{"src":"/_astro/right-arrow.CEQOwXF3.svg","width":800,"height":800,"format":"svg"},"attributes":{"mode":"inline","fill":"#000000","height":"800px","width":"800px","id":"Layer_1","viewBox":"0 0 330 330","xml:space":"preserve"},"children":"\r\n<path id=\"XMLID_222_\" d=\"M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001\r\n\tc-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213\r\n\tC82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606\r\n\tC255,161.018,253.42,157.202,250.606,154.389z\" />\r\n"});

const $$Astro$1 = createAstro();
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { unique } = Astro2.props;
  console.log(unique);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`carousel ${unique ? "overflow-hidden" : ""}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div> <div${addAttribute(`{ 
    scrollNext() {
    let carousel = document.querySelector('.carousel');
    carousel.scrollBy({ left: (carousel?.firstElementChild.clientWidth), behavior: 'smooth' });
    },
    scrollPrevious() {
    let carousel = document.querySelector('.carousel');
    carousel.scrollBy({ left: -(carousel?.firstElementChild.clientWidth), behavior: 'smooth' });
    },
    unique : ${unique}}`, "x-data")} class="flex justify-center gap-4" x-show="!unique"> <button @click="scrollPrevious"> ${renderComponent($$result, "RightArrow", RightArrow, { "class": "h-10 w-auto border-dom border-2 p-2 rounded-4xl rotate-180" })} </button> <button @click="scrollNext"> ${renderComponent($$result, "RightArrow", RightArrow, { "class": "h-10 w-auto border-dom border-2 p-2 rounded-4xl" })} </button> </div>`;
}, "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/components/Carousel.astro", void 0);

const $$Astro = createAstro();
const $$CardCarousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardCarousel;
  const { titre, photo_URL, description, lien, unique } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<artcile class="flex flex-col gap-2 w-fit border p-2 rounded-lg snap-center"> <a${addAttribute(unique ? "w-full lg:w-[400px]" : "w-[300px] lg:w-[400px]", "class")}${addAttribute(lien, "href")}> <img class="w-full h-[150px] object-cover rounded-md
        lg:h-[200px]"${addAttribute(photo_URL, "src")} alt="Photo d'illustration de la section" loading="lazy"> </a> <p class="font-heading font-light text-lg">${titre}</p> <p class="line-clamp-3">${description}</p> <a class="btn_discret self-end"${addAttribute(lien, "href")}>Y aller</a> </artcile>`;
}, "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/components/CardCarousel.astro", void 0);

export { $$Carousel as $, $$CardCarousel as a };
