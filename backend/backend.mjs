import PocketBase from 'pocketbase';
const pb = new PocketBase('htts://cine-flash-25.paolo-vincent.fr:443');

export async function allFilms() {
    try {
        let data = await pb.collection('FILM').getFullList(
            { sort: "date_heure" }
        );
        data = data.map((film) => {
            film.affiche_URL = pb.files.getURL(film, film.affiche);
            film.photo_URL = pb.files.getURL(film, film.photo);
            film.annee_string = film.annee_sortie.toString();
            return film;
        })
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des films', error);
        return null;
    }
}

export async function allActivites() {
    try {
        let data = await pb.collection('ACTIVITE').getFullList(
            { sort: "date_heure" }
        );
        data = data.map((activite) => {
            activite.photo_URL = pb.files.getURL(activite, activite.photo);
            return activite;
        })
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des activités', error);
        return null;
    }
}

export async function allInvites() {
    try {
        let data = await pb.collection('INVITE').getFullList(
            { sort: "prenom" }
        );
        data = data.map((invite) => {
            invite.photo_URL = pb.files.getURL(invite, invite.photo);
            return invite;
        })
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des invités', error);
        return null;
    }
}

export async function getFilm(id) {
    try {
        let data = await pb.collection('FILM').getOne(id);
        //Récupération des URL des photos
        data.affiche_URL = pb.files.getURL(data, data.affiche);
        data.photo_URL = pb.files.getURL(data, data.photo);
        //Transformation du lien de la vidéo en lien d'intégration
        let embed_link = data.bande_annonce.replace("watch?v=", "embed/");
        if (data.bande_annonce.indexOf("&")!=-1) {
            embed_link = embed_link.slice(0,data.bande_annonce.indexOf("&")-2);
        }
        data.bande_annonce_embed = embed_link;
        //Formatage de l'année de sortie
        data.annee_string = data.annee_sortie.toString();
        //Formatage de la date et de l'heure de diffusion
        data.jour = formatDate(data.date_heure);
        data.heure = formatHeure(data.date_heure);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant le film', error);
        return null;
    }
}

export async function getActivite(id) {
    try {
        let data = await pb.collection('ACTIVITE').getOne(id);
        data.photo_URL = pb.files.getURL(data, data.photo);
        //Formatage de la date et de l'heure de diffusion
        data.jour = formatDate(data.date_heure);
        data.heure = formatHeure(data.date_heure);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant l activité', error);
        return null;
    }
}

export async function getInvite(id) {
    try {
        let data = await pb.collection('INVITE').getOne(id);
        data.photo_URL = pb.files.getURL(data, data.photo);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant l invité', error);
        return null;
    }
}

export async function getActivitesByInviteId(id) {
    try {
        let data = await pb.collection('ACTIVITE').getFullList(
            { sort: "date_heure" , filter: `encadrer = '${id}'`}
        );
        data = data.map((activite) => {
            activite.photo_URL = pb.files.getURL(activite, activite.photo);
            return activite;
        })
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des activités', error);
        return null;
    }
}

export async function getActivitesByInviteNom(nom) {
    try {
        let data = await pb.collection('ACTIVITE').getFullList(
            { sort: "date_heure" , filter: `encadrer.nom = '${nom}'`}
        );
        data = data.map((activite) => {
            activite.photo_URL = pb.files.getURL(activite, activite.photo);
            return activite;
        })
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des activités', error);
        return null;
    }
}

export async function addEntry(collection, data) {
    try {
        await pb.collection(`${collection}`).create(data);
        return {
            success: true,
            message: 'Entrée ajoutée avec succès'
        };
    } catch (error) {
        console.log('Une erreur est survenue en ajoutant cette entrée', error);
        return {
            success: false,
            message: 'Une erreur est survenue en ajoutant cette entrée'
        };
    }
}

export async function getActivitesAndFilmsById(id) {
    try {
        let activites = await pb.collection('ACTIVITE').getFullList(
            { sort: "date_heure" , filter: `encadrer = '${id}'`}
        );
        activites = activites.map((activite) => {
            activite.photo_URL = pb.files.getURL(activite, activite.photo);
            return activite;
        })

        let films = await pb.collection('FILM').getFullList(
            { sort: "date_heure" , filter: `accompagner = '${id}'`}
        );
        films = films.map((film) => {
            film.photo_URL = pb.files.getURL(film, film.photo);
            return film;
        })
        let data = films.concat(activites);
        return data;

    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des activités et des films', error);
        return null;
    }
}

export async function allFilmsFiltre(jour, genre) {  
    //vérification de quel filtre est actif pour construire le filtre
    let filters = [];
    if (jour) {
        //défini le jour suivant
        let joursuivant = jour.slice(0,-2)+(parseInt(jour.slice(-2))+1 <= 10 ? "0"+parseInt(jour.slice(-2))+1:parseInt(jour.slice(-2))+1);
        filters.push(`date_heure < "${joursuivant}" && date_heure > "${jour}"`);
      }
    if (genre) {
        filters.push(`genre~"${genre}"`);
      }
    const filterString = filters.join(" && ");
    try {
        let data = await pb.collection('FILM').getFullList(
            { sort: "date_heure" , filter: filterString}
        );
        data = data.map((film) => {
            film.affiche_URL = pb.files.getURL(film, film.affiche);
            film.photo_URL = pb.files.getURL(film, film.photo);
            film.annee_string = film.annee_sortie.toString();
            film.jour = formatDate(film.date_heure);
            film.heure = formatHeure(film.date_heure);
            return film;
        })
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des films', error);
        return null;
    }
}

export async function addMessage(data) {
    const records = pb.collection('CONTACT').create(data)
}


export function formatDate(dateStr) {
    const date = new Date(dateStr.replace(" ", "T"));
    return new Intl.DateTimeFormat("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
    }).format(date);
}

function formatHeure(dateStr) {
    const date = new Date(dateStr.replace(" ", "T"));
    return new Intl.DateTimeFormat("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
    }).format(date).replace(":", "h");
}