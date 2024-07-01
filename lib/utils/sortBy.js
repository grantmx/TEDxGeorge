

/**
 * Sorts an array of objects by a given key
 * @param {aray} array 
 * @param {string} key 
 * @returns 
 */

export default function sortBy(array, key){
    return array.toSorted((a, b) => a[key] - b[key])
}