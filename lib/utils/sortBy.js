

/**
 * Sorts an array of objects by a given key
 * @param {aray} array 
 * @param {string} key 
 * @returns 
 */

export default function sortBy(array, key){

    return array.sort((a, b) => {
        return String(a[key]).toLowerCase() > String(b[key]).toLowerCase() ? 1 : -1
    });
}