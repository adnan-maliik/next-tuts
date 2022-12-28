/**
 * function for transforming array to firebase
 * @param {Object} docs firebase docs objects
 * @returns {Array} array of firebase docs
 */

export function convertFirebaseObjectToArray(docs) {
    let keys=Object.keys(docs)
    if(!keys.length) return []
    return keys.map(key=>({
        id:key,
        ...docs[key]
    }))
}