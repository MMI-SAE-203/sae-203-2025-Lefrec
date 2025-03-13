import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DMsw3aH6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Do0VXsYQ.mjs';
import { $ as $$CardInvite } from '../chunks/CardInvite_CjKikWCp.mjs';
import { f as allInvites } from '../chunks/backend_1KdwUy8H.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const invites = await allInvites();
  console.log(invites);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Les invit\xE9s" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section col-span-6"> <p class="mb-4">
Pour cette première édition, <strong>CinéFlash 25</strong> a l'honneur
            d'accueillir des invités exceptionnels issus de divers horizons du monde
            cinématographique. <strong>Réalisateurs, acteurs, scénaristes et personnalités locales</strong> seront présents pour enrichir le festival par leurs expériences, leurs
            talents et leur passion du cinéma.
</p> <h3>Édition 2025</h3> <div class="grid grid-cols-[repeat(auto-fit,minmax(116px,1fr))] gap-4 my-8 lg:grid-cols-[repeat(auto-fit,minmax(216px,1fr))] lg:gap-8"> ${invites.map((invite) => renderTemplate`${renderComponent($$result2, "CardInvite", $$CardInvite, { ...invite })}`)} </div> <div class="w-full h-[2px] bg-ton"></div> </section> ` })}`;
}, "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/pages/invites/index.astro", void 0);

const $$file = "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/pages/invites/index.astro";
const $$url = "/invites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
