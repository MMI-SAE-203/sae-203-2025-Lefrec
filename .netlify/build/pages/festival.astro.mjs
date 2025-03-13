import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DMsw3aH6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Do0VXsYQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Festival = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Le festival", "photo_URL": "https://paolo-vincent.fr/photo/montagne.avif" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section col-span-4 "> <h2>Notre histoire</h2> <p>
Le festival CinéFlash 25 est né d’<strong>une passion commune</strong> pour le cinéma et d’un désir de rassembler les
                amateurs de courts métrages dans un cadre unique. L'idée a germé en 2023, lorsque ses fondateurs,
                séduits par la richesse artistique du court métrage, ont décidé de créer un événement <strong>accessible à tous</strong>,
                mettant en avant des talents émergents et confirmés. Après deux années de préparation, la première
                édition verra le jour à Ornans, en plein cœur du Doubs, du 8 au 10 août 2025.
</p> <img class="w-full h-[200px] object-cover rounded-lg" src="https://paolo-vincent.fr/photo/groupe-de-personnes.avif" alt="Un groupe de personne" loading="lazy"> <p>
Conçu comme un rendez-vous annuel, le festival se démarque par ses projections en plein air, au sein du
                cadre naturel enchanteur de cette ville pittoresque. L’histoire de CinéFlash 25 s’écrit donc avec une
                ambition claire : offrir une <strong>plateforme de diffusion</strong> aux cinéastes tout en proposant <strong>une expérience
                immersive</strong> et conviviale aux spectateurs. Chaque édition sera une célébration de la diversité artistique,
                mêlant tradition et innovation pour faire du court métrage un moment de partage et d’émotion.
</p> </section> <section class="section col-span-4 col-start-3"> <h2>Notre équipe</h2> <p>
Derrière CinéFlash 25 se cache <strong>une équipe de passionnés</strong>, chacun apportant son expertise pour donner vie
                à ce projet ambitieux. Cinéphiles engagés et habitants d’Ornans, nous sommes unis par une volonté
                commune : faire découvrir au public des œuvres inspirantes et soutenir les créateurs de demain. Le
                festival est dirigé par <strong>un trio enthousiaste</strong>, composé d’un coordinateur artistique, d’un responsable
                logistique et d’une chargée de communication, épaulés par de nombreux bénévoles qui participent
                activement à l’organisation.
</p> <h3 class="section__exergue">
Des collaborations locales
</h3> <p>
Notre équipe croit fermement en l’importance des collaborations locales pour enrichir l’événement. Nous
                travaillons en étroite relation avec les <strong>commerçants</strong> et <strong>associations</strong> de la région pour faire de
                CinéFlash 25 une véritable fête du cinéma, ouverte à tous. Ensemble, nous construisons un festival où
                chaque détail compte, des programmations soigneusement sélectionnées jusqu’aux expériences sur place.
</p> </section> <section class="section col-span-4"> <h2>Nos valeurs</h2> <p>
CinéFlash 25 repose sur des valeurs fortes : la créativité, l’accessibilité et le respect de
                l’environnement. Nous célébrons le cinéma comme un <strong>art universel</strong>, capable de rassembler et d’émouvoir,
                et nous nous engageons à soutenir les jeunes talents tout en valorisant la diversité des récits et des
                perspectives.
</p> <img class="w-full h-[200px] object-cover rounded-lg" src="https://paolo-vincent.fr/photo/maison-ornans.avif" alt="Cinéma en plein air" loading="lazy"> <p>
Le festival se veut aussi écoresponsable : toutes les projections ont lieu en plein air, et nous
                limitons l’impact environnemental en privilégiant des <strong>solutions durables</strong>, comme l’utilisation de
                matériel réutilisable ou recyclable. Enfin, nous accordons une grande importance à l’inclusion en
                rendant nos événements <strong>accessibles à tous</strong>, dans une ambiance conviviale et chaleureuse. Chez CinéFlash
                25, chaque spectateur et chaque créateur a sa place pour célébrer ensemble l’amour du court métrage.
</p> </section> ` })}`;
}, "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/pages/festival.astro", void 0);

const $$file = "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/pages/festival.astro";
const $$url = "/festival";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Festival,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
