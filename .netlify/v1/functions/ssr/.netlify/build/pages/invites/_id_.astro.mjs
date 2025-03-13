import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_DMsw3aH6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Do0VXsYQ.mjs';
import { a as getInvite, e as getActivitesAndFilmsById } from '../../chunks/backend_1KdwUy8H.mjs';
import { $ as $$Carousel, a as $$CardCarousel } from '../../chunks/CardCarousel_xiKZ-A5v.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const invite = await getInvite(id);
  console.log(invite);
  const events = await getActivitesAndFilmsById(id);
  console.log(events);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": invite.prenom + " " + invite.nom, "infos": [invite.role] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section flex-row lg:col-span-6"> <img class="w-[150px] h-[150px] object-cover lg:w-[200px] lg:h-[200px]"${addAttribute(invite.photo_URL, "src")}${addAttribute("Photo portrait de " + invite.prenom + " " + invite.nom, "alt")} loading="lazy"> <div class="flex flex-col gap-2"> <p class="font-heading text-xl lg:text-3xl">${invite.prenom} ${invite.nom}</p> <p>${invite.role}</p> <p>
est l'un.e des invités spéciaux pour la première édition du
                    festival !
</p> </div> </section> <section class="section lg:col-span-3"> <h3>Présentation</h3> <p>${invite.biographie}</p> </section> <section class="section lg:col-span-3"> <h3>Films et activités</h3> ${renderComponent($$result2, "Carousel", $$Carousel, { "unique": events.length == 1 ? true : false }, { "default": ($$result3) => renderTemplate`${events.map((event) => renderTemplate`${renderComponent($$result3, "CardCarousel", $$CardCarousel, { ...event, "unique": events.length == 1 ? true : false, "lien": event.collectionName === "FILM" ? `/films/${event.id}` : `/activites/${event.id}` })}`)}` })} </section> <a href="/invites" class="btn self-end lg:col-end-7 lg:col-span-2 lg:justify-self-end">Voir les autres invités</a> ` })}`;
}, "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/pages/invites/[id].astro", void 0);

const $$file = "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/pages/invites/[id].astro";
const $$url = "/invites/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$id,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
