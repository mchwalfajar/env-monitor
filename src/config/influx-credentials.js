const INFLUX_HOST = process.env.INFLUX_HOST || '127.0.0.1';
const INFLUX_PORT = process.env.INFLUX_PORT || 8086;
const INFLUX_USERNAME = process.env.INFLUX_USERNAME || 'lora-ta';
const INFLUX_PASSWORD = process.env.INFLUX_PASSWORD || 'user-pass';
const INFLUX_DATABASE = process.env.INFLUX_DATABASE || 'lora-db';

module.exports = {
    INFLUX_HOST,
    INFLUX_PORT,
    INFLUX_USERNAME,
    INFLUX_PASSWORD,
    INFLUX_DATABASE,
}
