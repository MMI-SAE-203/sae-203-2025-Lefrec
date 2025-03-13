import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_DMsw3aH6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Do0VXsYQ.mjs';
import 'clsx';
import { $ as $$Carousel, a as $$CardCarousel } from '../chunks/CardCarousel_xiKZ-A5v.mjs';
import { h as allFilmsFiltre, i as allActivites, j as formatDate } from '../chunks/backend_Cebkqg68.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$CardProgramme = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardProgramme;
  const { titre, photo_URL, jour, heure, lien } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(lien, "href")} class="flex gap-2 justify-between border-1 rounded-lg p-2 decoration-transparent hover:border-ton"> <div class="flex w-fit h-fit gap-2"> <img class="w-[75px] h-[100px] object-cover rounded-md"${addAttribute(photo_URL, "src")}${addAttribute("Affiche du film " + titre, "alt")} loading="lazy"> <p class="font-heading text-xl font-light self-center">${titre}</p> </div> <div class="flex flex-col gap-4 justify-center font-medium text-sm items-end text-end"> <p>${jour}</p> <p>${heure}</p> </div> </a>`;
}, "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/components/CardProgramme.astro", void 0);

const $$Astro = createAstro();
const $$Programme = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Programme;
  let message_film = "";
  let films = await allFilmsFiltre();
  let activites = await allActivites();
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const jour = data.get("jour");
    const genre = data.get("genre");
    films = await allFilmsFiltre(jour, genre);
    if (films.length == 0) {
      message_film = "Malheureusement, aucun des films pr\xE9vus cette ann\xE9e ne correspond \xE0 votre recherche :(";
    } else {
      message_film = "Voici les films " + (genre ? "de type " + genre + " " : "") + "qui seront au festival" + (jour ? " le " + formatDate(jour) : "");
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Le programme", "photo_URL": "https://paolo-vincent.fr/photo/onecalendar-1024x683.avif" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section col-span-6"> <h2>Projections</h2> <div class="flex flex-col gap-2 border-2 border-ton rounded-lg p-2"> <p>Filter les séances</p> <form id="FormFilms" method="POST" class="flex flex-col gap-2"> <div class="flex flex-wrap gap-4"> <select name="jour" class="p-2 border border-gray-300 rounded-md bg-white text-gray-700"> <option value="">Tous les jours</option> <option value="2025-08-08">Vendredi</option> <option value="2025-08-09">Samedi</option> <option value="2025-08-10">Dimanche</option> </select> <select name="genre" class="p-2 border border-gray-300 rounded-md bg-white text-gray-700"> <option value="">Tous les genres</option> <option value="drame">Drame</option> <option value="comédie">Comédie</option> <option value="science-fiction">Science-Fiction</option> <option value="horreur">Horreur</option> <option value="animation">Animation</option> </select> </div> <button type="submit" class="btn self-end">
Appliquer les filtres
</button> </form> </div> <div class="flex flex-col gap-2 lg:grid lg:grid-cols-2"> ${films.map((film) => renderTemplate`${renderComponent($$result2, "CardProgramme", $$CardProgramme, { ...film, "lien": `/films/${film.id}` })}`)} </div> <p class="text-center">${message_film}</p> </section> <section class="section col-span-6"> <h2>Activités</h2> <p>
Tout au long du festival, des activités diverses vous serons
                proposées. Encadré par nos <strong>très chers invités</strong>,
                ces moments de partage vous permettrons de plongez de l'univers
                de cinéma.
</p> ${renderComponent($$result2, "Carousel", $$Carousel, { "unique": activites.length == 1 ? true : false }, { "default": ($$result3) => renderTemplate`${activites.map((activite) => renderTemplate`${renderComponent($$result3, "CardCarousel", $$CardCarousel, { ...activite, "lien": `/activites/${activite.id}`, "unique": activites.length == 1 ? true : false })}`)}` })} </section> <section class="section col-span-4 col-start-2"> <h3>Comment s'organiser ?</h3> <p>
Si vous avez des questions sur la programmation ou
                l'organisation du festival ou si vous ne savez pas comment vous
                organiser pour Ciné Flash 25, vous pouvez prendre contact avec
                l'équipe via la page dédiée ou peut-être être aiguillé par la page infos
                pratiques.
</p> <div class="flex flex-wrap gap-4 justify-between"> <a class="btn" href="/contact">Nous contacter</a> <a class="btn" href="/infos">Infos pratiques</a> </div> </section> ` })}`;
}, "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/pages/programme.astro", void 0);

const $$file = "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/pages/programme.astro";
const $$url = "/programme";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Programme,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
