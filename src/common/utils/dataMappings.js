

module.exports = {

    date : (date) => new Date(date).toDateString(),

    convertArrayToObject: (array, key1 , key2) => {
        const initialValue = {};
        return array.reduce((obj, item) => { 
            return {
                ...obj,
                [item[key1]]: item[key2],
            };
        }, initialValue);
    },

}