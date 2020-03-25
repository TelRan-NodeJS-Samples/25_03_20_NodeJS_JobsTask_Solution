const fsp = require('fs').promises;
const path = require('path');

const FILE_NAME = 'data.json';

const allJobs = () => {
    return fsp.readFile(path.resolve(__dirname,FILE_NAME),"utf8")
        .then(json => JSON.parse(json));
};

const findBy = (id) => {
    return fsp.readFile(path.resolve(__dirname,FILE_NAME),'utf8')
        .then(json => JSON.parse(json))
        .then(jobs => {
            let job = jobs.body.find(j => j.id === id);
            if(!job){
                return Promise.reject(`Job with id: ${id} not found`);
            }
            return {...jobs,body:job};
        })
};

module.exports = {allJobs,findBy};
