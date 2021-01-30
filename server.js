const { CronJob } = require('cron');
const { run } = require('./src');

const job = new CronJob('0 */1 * * * *', run, null, true);

job.start();