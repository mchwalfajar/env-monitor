const { InfluxDB, FieldType } = require('influx');
const {
    INFLUX_HOST,
    INFLUX_PORT,
    INFLUX_USERNAME,
    INFLUX_PASSWORD,
    INFLUX_DATABASE,
} = require('../config/influx-credentials');

function getConnection() {

    try{
        return new InfluxDB({
            host: INFLUX_HOST,
            port: INFLUX_PORT,
            username: INFLUX_USERNAME,
            password: INFLUX_PASSWORD,
            database: INFLUX_DATABASE,
            schema: [
                {
                    measurement: 'temperature',
                    fields: {
                        T: FieldType.INTEGER,
                    },
                    tags: [],
                },
                {
                    measurement: 'humidity',
                    fields: {
                        H: FieldType.FLOAT,
                    },
                    tags: [],
                },
                {
                    measurement: 'lux',
                    fields: {
                        L: FieldType.FLOAT,
                    },
                    tags: [],
                },
                {
                    measurement: 'soil',
                    fields: {
                        S: FieldType.FLOAT,
                    },
                    tags: [],
                },
            ],
        });
    }catch(err){
        console.log('Error > ' + err)
    }
    
}

module.exports = {
    getConnection,
}
