import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_DMsw3aH6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Do0VXsYQ.mjs';
import { $ as $$CardFeaturing } from '../../chunks/CardFeaturing_BHghpDu6.mjs';
import { c as getFilm, a as getInvite } from '../../chunks/backend_1KdwUy8H.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const film = await getFilm(id);
  console.log(film);
  const invite = await getInvite(film.accompagner);
  console.log(invite);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": film.titre, "photo_URL": film.photo_URL, "infos": [film.annee_string, film.duree + " min", film.genre[0]] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section flex-row lg:col-span-6"> <img class="w-[125px] h-[175px] object-cover lg:w-[200px] lg:h-[287px]"${addAttribute(film.affiche_URL, "src")} alt="Affiche du film" loading="lazy"> <div class="flex flex-col gap-2 lg:gap-4"> <p class="font-heading text-xl lg:text-3xl">${film.titre}</p> <div class="flex gap-2"> <p>${film.annee_string}</p> <p>${film.duree} min</p> </div> <div class="flex flex-wrap gap-2 text-xs font-semibold *:border-1 *:rounded-md *:p-1 lg:text-sm"> ${film.genre.map((gen) => renderTemplate`<p>${gen}</p>`)} </div> ${film.liste_acteurs ? renderTemplate`<p class="text-xs">Acteurs : ${film.liste_acteurs}</p>` : ""} </div> </section> <section class="section lg:col-span-4"> <h3>Synopsis</h3> <p>${film.description}</p> </section> <section class="section lg:col-span-2"> ${renderComponent($$result2, "CardFeaturing", $$CardFeaturing, { ...invite, "jour": film.jour, "heure": film.heure, "filmBool": true })} </section> ${film.bande_annonce_embed ? renderTemplate`<section class="section lg:col-span-4"> <h3>Bande-annonce</h3> <iframe width="full" height="300"${addAttribute(film.bande_annonce_embed, "src")} allow="autoplay; encrypted-media; gyroscope" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> </section>` : ""}<a href="/films" class="btn self-end lg:col-end-7 lg:col-span-2 lg:justify-self-end">Voir les autres films</a> ` })}`;
}, "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/pages/films/[id].astro", void 0);

const $$file = "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/pages/films/[id].astro";
const $$url = "/films/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
