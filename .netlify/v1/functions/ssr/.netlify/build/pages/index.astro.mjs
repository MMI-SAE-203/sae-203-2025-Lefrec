import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DMsw3aH6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Do0VXsYQ.mjs';
import { $ as $$Carousel, a as $$CardCarousel } from '../chunks/CardCarousel_xiKZ-A5v.mjs';
import { $ as $$CardInvite } from '../chunks/CardInvite_CjKikWCp.mjs';
import { d as allFilms, f as allInvites } from '../chunks/backend_DR-lhMRY.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const films = await allFilms();
  let invites = await allInvites();
  invites = invites.slice(0, 3);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Cin\xE9 Flash 25", "photo_URL": "https://paolo-vincent.fr/photo/montagne.avif" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section col-span-6"> <h2>Le festival</h2> <p class="line-clamp-4">
Le festival <strong>CinéFlash 25</strong> est un événement de courts
                métrages en plein air qui se tiendra pour la première fois à <strong>Ornans</strong>, dans le Doubs, <strong>du 8 au 10 août 2025</strong>. Ce
                festival unique proposera une sélection variée de
<strong>films courts</strong>, mettant en lumière le talent de
                cinéastes émergents et confirmés. Dans le cadre pittoresque de
                la ville, les spectateurs pourront profiter de projections sous
                les étoiles, créant une ambiance conviviale et immersive.
</p> <a class="btn self-end" href="/festival">En apprendre plus sur le festival</a> </section> <section class="section col-span-6"> <h3>Une sélection variée</h3> ${renderComponent($$result2, "Carousel", $$Carousel, { "unique": films.length == 1 ? true : false }, { "default": ($$result3) => renderTemplate`${films.map((film) => renderTemplate`${renderComponent($$result3, "CardCarousel", $$CardCarousel, { ...film, "lien": `/films/${film.id}` })}`)}` })} <p>
Notre équipe vous a préparé un programme au petits oignons pour
                vous offrir un festival <strong>enrichissant et mémorable</strong>.
</p> <a class="btn self-end" href="/programme">Voir le programme</a> </section> <section class="section col-span-4"> <h3>Des invités magnifiques</h3> <p>
Nous sommes ravis d'accueillir pour notre première édition une
                poignée d'invités de divers horizons pour vous accompagner
                durant le festival.
</p> <div class="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4 my-8"> ${invites.map((invite) => renderTemplate`${renderComponent($$result2, "CardInvite", $$CardInvite, { ...invite })}`)} </div> <a class="btn self-end" href="/invites">Voir tous les invités</a> </section> <section class="section col-span-2"> <h2>La billeterie</h2> <p>
Réservez <strong>dès maintenant</strong> vos billets pour l’édition
                2025 du festival !
</p> <p>
Choisissez entre <strong>3 tarifs personnalisés</strong> et abordables
                pour préparer votre week-end fantastique.
</p> <a class="btn h-[50px] w-full text-center text-light text-base font-bold bg-[url(https://paolo-vincent.fr/photo/billetterie.avif)] bg-center bg-cover" href="/">Prendre mon billet</a> </section> ` })}`;
}, "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/pages/index.astro", void 0);

const $$file = "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Index,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
