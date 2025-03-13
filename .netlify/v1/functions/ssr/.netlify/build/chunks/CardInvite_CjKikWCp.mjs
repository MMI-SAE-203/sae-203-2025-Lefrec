import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_DMsw3aH6.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$CardInvite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardInvite;
  const { id, prenom, nom, photo_URL, role } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="flex w-full text-center border-1 hover:border-ton rounded-lg p-2 justify-self-center justify-center"> <a class="flex items-center flex-col no-underline w-full lg:w-[200px]"${addAttribute(`/invites/${id}`, "href")}> <img class="w-full h-[150px] object-cover rounded-md lg:h-[200px]"${addAttribute(photo_URL, "src")}${addAttribute("Photo portrait de " + prenom + " " + nom, "alt")} loading="lazy"> <p class="font-heading font-light line-clamp-1">${prenom + " " + nom}</p> <div class="flex gap-4 text-sm font-medium"> <p>${role}</p> </div> </a> </article>`;
}, "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/components/CardInvite.astro", void 0);

export { $$CardInvite as $ };
