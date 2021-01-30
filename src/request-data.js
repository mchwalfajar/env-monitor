const { saveData } = require('./save-data');
const fetch = require('fetch').fetchUrl;

const URL = 'https://platform.antares.id:8443/~/antares-cse/antares-id/chw-al/dev/la'
const options = {
        headers: {
            "X-M2M-Origin": "181b1730efb9f453:1860de96ede6acb0",
            "Content-Type": "application/json;ty=23",
            "Accept": "application/json",
        }
}

function rewriteData(data) {
return data
    .split(",")
    .map((i) => i.split(":"))
    .reduce((temp, i) => {
    temp[i[0]] = Number(i[1]);
    return temp;
    }, {});
}

async function requestData() {
    try {
        fetch(URL, options, (error, meta, body) => {
            const fromBody = JSON.parse(body.toString())
            const conn = JSON.parse(fromBody["m2m:cin"].con)
            const data = rewriteData(conn.data);
            const newData = { ...fromBody, data }
            saveData(newData)
        })
    } catch (err) {
        console.log('Error > ' + err)
    }
}

module.exports = {
    requestData
}