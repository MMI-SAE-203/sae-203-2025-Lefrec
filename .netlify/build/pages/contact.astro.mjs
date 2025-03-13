import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DMsw3aH6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Do0VXsYQ.mjs';
import { b as addMessage } from '../chunks/backend_DR-lhMRY.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    console.log(data);
    await addMessage(data);
    return Astro2.redirect("/contact?success=1");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Nous contacter", "photo_URL": "https://paolo-vincent.fr/photo/telephone-fixe.avif" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section lg:col-span-3"> <h2>On vous écoute</h2> <p>
N'hésitez pas à nous contacter en cas de question, de doute, de
                requête ou quoi que ce soit d'autre. Nous ne sommes pas
                disponibles tout le temps mais nous ferons de notre mieux pour
                vous répondre au plus vite.
</p> <p>
Vous pouvez nous joindre par téléphone au <strong>01 23 45 67 89</strong>.
</p> <p>
Ou par e-mail grâce à l'adresse <strong>CinéFlash25Ornans@gmail.com</strong>.
</p> <p>
Ou encore par lettre si vous êtes plutôt vieu jeu : <strong>22 Rue Pierre D'Ornans</strong>.
</p> <p>
Enfin vous pouvez nous joindre directement par ce <strong>formulaire de contact</strong>.
</p> </section> <section class="section lg:col-span-3"> <h3>Formulaire de contact</h3> ${Astro2.url.searchParams.get("success") ? renderTemplate`<p class="text-center">Message envoyé avec succès !</p>` : ""} <form class="flex flex-col gap-4" action="/contact" method="post" enctype="multipart/form-data"> <input type="text" name="nom_prenom" required placeholder="Nom et prénom" class="border p-2 rounded-md w-full"> <input type="email" name="email" required placeholder="Adresse email" class="border p-2 rounded-md w-full"> <textarea name="message" required rows="5" placeholder="Votre message" class="border p-2 rounded-md w-full"></textarea> <input type="submit" value="Envoyer le formulaire" class="btn w-full text-base"> </form> </section> ` })}`;
}, "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/pages/contact.astro", void 0);

const $$file = "C:/Users/black/Desktop/Cours S2/SAE 203/sae-203-2025-Lefrec/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
