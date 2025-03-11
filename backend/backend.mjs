import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function allFilms() {
    try {
        let data = await pb.collection('FILM').getFullList(
            { sort: "date_heure" }
        );
        data = data.map((film) => {
            film.affiche_URL = pb.files.getURL(film, film.affiche);
            film.photo_URL = pb.files.getURL(film, film.photo);
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
        data.affiche_URL = pb.files.getURL(data, data.affiche);
        data.photo_URL = pb.files.getURL(data, data.photo);
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