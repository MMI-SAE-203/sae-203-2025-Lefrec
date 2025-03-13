import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_DMsw3aH6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Do0VXsYQ.mjs';
import 'clsx';
import { d as allFilms } from '../chunks/backend_Cebkqg68.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CardFilm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardFilm;
  const { id, titre, affiche_URL, annee_string, duree } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="flex w-full text-center border-1 hover:border-ton rounded-md p-2 justify-self-center justify-center"> <a class="flex items-center flex-col no-underline w-[100px] lg:w-[200px]"${addAttribute(`/films/${id}`, "href")}> <img class="w-full h-[150px] object-cover lg:h-[300px]"${addAttribute(affiche_URL, "src")}${addAttribute("Affiche du film " + titre, "alt")} loading="lazy"> <p class="font-heading font-light line-clamp-1">${titre}</p> <div class="flex gap-4 text-sm font-medium"> <p>${annee_string}</p> <p>${duree}min</p> </div> </a> </article>`;
}, "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/components/CardFilm.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const films = await allFilms();
  console.log(films);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Films \xE0 l'affiche", "photo_URL": films[0].photo_URL }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section col-span-6"> <h3>Édition 2025</h3> <div class="grid grid-cols-[repeat(auto-fit,minmax(116px,1fr))] gap-4 my-8 lg:grid-cols-[repeat(auto-fit,minmax(216px,1fr))] lg:gap-8"> ${films.map((film) => renderTemplate`${renderComponent($$result2, "CardFilm", $$CardFilm, { ...film })}`)} </div> <div class="w-full h-[2px] bg-ton"></div> </section> ` })}`;
}, "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/pages/films/index.astro", void 0);

const $$file = "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/pages/films/index.astro";
const $$url = "/films";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
