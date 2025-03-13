import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_DMsw3aH6.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$CardFeaturing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardFeaturing;
  const { id, nom, prenom, photo_URL, filmBool, jour, heure } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="flex w-fit self-center gap-4 justify-end border-1 rounded-lg p-2 shadow-lg"> <p class="text-sm"> ${filmBool ? "Ce film vous sera pr\xE9sent\xE9 par notre super invit\xE9.e " : "Lors de cette activit\xE9 vous serez accompagn\xE9 par"} <a${addAttribute(`/invites/${id}`, "href")}> ${prenom} ${nom}</a>${filmBool ? ` le ${jour} \xE0 ${heure}.` : "."} </p> <img class="w-[100px] h-[125px] object-cover rounded-md"${addAttribute(photo_URL, "src")} alt="Photo portrait de l'accompagnateur" loading="lazy"> </article>`;
}, "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/components/CardFeaturing.astro", void 0);

export { $$CardFeaturing as $ };
