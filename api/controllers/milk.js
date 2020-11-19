const Milk = require('../models').detailsmilk;

module.exports = {
    list(req, res) {
        return Milk
            .findAll()
            .then((milks) => res.status(200).send(milks))
            .catch((error) => {
                res.status(400).send(error);
            });
    },

    getById(req, res) {
        return Milk
            .findByPk(req.params.id, {
                include: [{
                    model: Student,
                    as: 'students'
                },
                    {
                        model: Units,
                        as: 'units'
                    }],
            })
            .then((milk_detail) => {
                if (!milk_detail) {
                    return res.status(404).send({
                        message: 'Detail milk Not Found',
                    });
                }
                return res.status(200).send(milk_detail);
            })
            .catch((error) => {
                console.log(error);
                res.status(400).send(error);
            });
    },

    add(req, res) {
        return Milk
            .create({
                class_name: req.body.class_name,
            })
            .then((milk_detail) => res.status(201).send(milk_detail))
            .catch((error) => res.status(400).send(error));
    },

    // addWithStudents(req, res) {
    //     return Milk
    //         .create({
    //             class_name: req.body.class_name,
    //             students: req.body.students,
    //         }, {
    //             include: [{
    //                 model: Student,
    //                 as: 'students'
    //             }]
    //         })
    //         .then((classroom) => res.status(201).send(classroom))
    //         .catch((error) => res.status(400).send(error));
    // },

    update(req, res) {
        return Milk
            .findByPk(req.params.id, {
                include: [{
                    model: Student,
                    as: 'students'
                },
                    {
                        model: Units,
                        as: 'units'
                    }],
            })
            .then(milk_detail => {
                if (!milk_detail) {
                    return res.status(404).send({
                        message: 'Milk_detail Not Found',
                    });
                }
                return milk_detail
                    .update({
                        class_name: req.body.class_name || milk_detail.quantity,
                    })
                    .then(() => res.status(200).send(milk_detail))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return Milk
            .findByPk(req.params.id)
            .then(milk_detail => {
                if (!milk_detail) {
                    return res.status(400).send({
                        message: 'Milk detail Not Found',
                    });
                }
                return milk_detail
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
};
