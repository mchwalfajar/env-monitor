const { getConnection } = require('./database/model');

async function saveData(newData) {
    const data = newData.data;
    console.log('Before Saving Data > ', data)
    const T = { T: data.T }
    const H = { H: data.H }
    const L = { L: data.L }
    const S = { S: data.S }

    const database = getConnection();

    await database.writePoints([
        {
            measurement: 'temperature',
            fields: T,
            tags: {},
        },
        {
            measurement: 'humidity',
            fields: H,
            tags: {},
        },
        {
            measurement: 'lux',
            fields: L,
            tags: {},
        },
        {
            measurement: 'soil',
            fields: S,
            tags: {},
        },
    ]).then(result=> {
        console.log("Result Saving Data > ", result)
    });
}

module.exports = {
    saveData,
}
