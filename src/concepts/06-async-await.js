
/**
 * 
 * @param {HTMLDivElement} element
 */

import { heroes } from "../data/heroes";

export const asyncAwaitComponent = async (element) =>{

    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f97c29d020f1e1f6d';

    try {        
        const hero1 = await findHero( id1 );
        const hero2 = await findHero( id2 );

        element.innerHTML = `${hero1.name} / ${hero2.name}`;

    } catch (error) {
        element.innerHTML = error;
    }
}

const findHero = async ( id ) =>{

    const hero = heroes.find( hero => hero.id === id );
    if ( !hero ) {
        throw `Hero with id ${ id } not found`;        
    }

    return hero;
}