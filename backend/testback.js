import {addEntry, allActivites, allFilms, allFilmsFiltre, allInvites, getActivite, getActivitesByInviteId, getActivitesByInviteNom, getFilm, getInvite} from "./backend.mjs"

// try {
//     const records = await allFilms();
//     console.log(JSON.stringify(records,null,2));
//     }catch(e){
//     console.error(e)
// }

// try {
//     const records = await allActivites();
//     console.log(JSON.stringify(records,null,2));
//     }catch(e){
//     console.error(e)
// }

// try {
//     const records = await allInvites();
//     console.log(JSON.stringify(records,null,2));
//     }catch(e){
//     console.error(e)
// }

// try {
//     const records = await getFilm('pq4b153f0n2946y');
//     console.log(JSON.stringify(records,null,2));
//     }catch(e){
//     console.error(e)
// }

// try {
//     const records = await getActivite('ugjwiy57nm2p3af');
//     console.log(JSON.stringify(records,null,2));
//     }catch(e){
//     console.error(e)
// }

// try {
//     const records = await getInvite('jy1651v25j3q6q0');
//     console.log(JSON.stringify(records,null,2));
//     }catch(e){
//     console.error(e)
// }

// try {
//     const records = await getActivitesByInviteId('jy1651v25j3q6q0');
//     console.log(JSON.stringify(records,null,2));
//     }catch(e){
//     console.error(e)
// }

// try {
//     const records = await getActivitesByInviteNom('Vesco');
//     console.log(JSON.stringify(records,null,2));
//     }catch(e){
//     console.error(e)
// }

// const data_invite = {
//     "titre" : "Jaj",
//     "description" : "Sanglier",
// }

// try {
//     const records = await addEntry('FILM',data_invite);
//     console.log(JSON.stringify(records,null,2));
//     }catch(e){
//     console.error(e)
// }

try {
    const records = await allFilmsFiltre();
    console.log(JSON.stringify(records,null,2));
    }catch(e){
    console.error(e)
}