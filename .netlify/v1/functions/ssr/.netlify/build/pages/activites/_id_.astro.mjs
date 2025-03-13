import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_DMsw3aH6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Do0VXsYQ.mjs';
import { $ as $$CardFeaturing } from '../../chunks/CardFeaturing_BHghpDu6.mjs';
import { g as getActivite, a as getInvite } from '../../chunks/backend_Cebkqg68.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const activite = await getActivite(id);
  console.log(activite);
  const invite = await getInvite(activite.encadrer);
  console.log(invite);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": activite.titre }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section flex-row lg:col-span-6"> <img class="w-1/2 h-[150px] object-cover lg:h-[200px]"${addAttribute(activite.photo_URL, "src")} alt="Illustration de l'activité" loading="lazy"> <div class="flex flex-col gap-2"> <p class="font-heading text-xl lg:text-3xl">${activite.titre}</p> <div class="flex flex-wrap gap-2 text-xs font-semibold *:border-1 *:rounded-md *:p-1 lg:text-sm"> <p>${activite.type}</p> </div> <p class="text-xs lg:text-sm"> ${"Le " + activite.jour + " \xE0 " + activite.heure} </p> </div> </section> <section class="section lg:col-span-4"> <h3>Présentation</h3> <p>${activite.description}</p> </section> <section class="section lg:col-span-2"> ${renderComponent($$result2, "CardFeaturing", $$CardFeaturing, { ...invite, "filmBool": false })} </section> <a href="/programme" class="btn self-end lg:col-end-7 lg:col-span-2 lg:justify-self-end">Voir tout le programme</a> ` })}`;
}, "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/pages/activites/[id].astro", void 0);

const $$file = "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/pages/activites/[id].astro";
const $$url = "/activites/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
