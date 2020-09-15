const models = require('../models');

const moment = require('moment');


const controller = {
    add: (req, res) => {

        let rightNow = moment();

        let entryExists = 'entry already exists';

        let placenta = {
            gestage: req.body.ga,
            weight: req.body.weight,
            twin: req.body.twin,
            country: req.body.country,
            state: req.body.state,
            city: req.body.city,
        //+++++ TODO front-end sanitization, check if values supplied ++++++
            // sex: req.body.plac_sex || 'unknown',
            // maternalAge: req.body.plac_mother || null,
            // postFormalin: typeof(req.body.plac_formalin) === 'boolean' ? req.body.plac_formalin : null,
            // abnormal: typeof(req.body.plac_abnormal) === 'boolean' ? req.body.plac_abnormal : null,
            userId: req.session.user,
        };

        let thirtySecondsAgo = {
            createdAt: {
                $gte: rightNow.subtract(30, 'seconds').toDate()
            }
        }

        //will check to see if the entry already exists; if not, will insert
        return models.PlacRefs.findAll({
            where: Object.assign({}, placenta, thirtySecondsAgo)
        })
        .then(data => {
            // console.log(data);
            if(!data.length) {
                return models.PlacRefs.create(placenta)
            } else {
                return Promise.reject(new Error(entryExists));
            }
        })
        .then(data => {
            // console.log(data);
            if(data.dataValues) {
                // console.log('success!');
                res.status(204).end(); // status 204 returned to let client browser know not to wait for content
                return Promise.resolve(true);
            } else {
                return Promise.reject(new Error('data not inserted?'))
            }
        })
        .catch(err => {
            console.error(err);
            err.message === entryExists ? res.status(204).end() : res.status(500).end();
            return Promise.resolve(false);
        })
    },
    allData: (req, res) => {
        return models.PlacRefs.findAll({
            attributes: ['gestage', 'weight', 'twin', 'country', 'state', 'city']
        })
        .then(result => {
            // console.log(result);
            if(result.length) {
                let data = result.map(r => {
                    if(r.dataValues) {
                        return r.dataValues;
                    } else {
                        throw new Error(`DB Sql get error: no data`);
                    }
                });
                res.json(data);
                return Promise.resolve(true);
            } else {
                return Promise.reject(new Error(`DB Sql get error: no results returned`));
            }
        })
        .catch(err => {
            console.error(err);
            res.status(404).end();
            return Promise.resolve(false);
        });
    }
}

module.exports = controller;