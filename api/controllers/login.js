const MilkMan = require('../models').milkman;

module.exports = {
    login(req, res) {
        console.log(req.body);
        console.log('_________________________');
        console.log(res);

        return MilkMan
            .findOne({
                where: {
                    user: req.body.username,
                    password: req.body.password
                }
            })
            .then((milks) => {
                    res.status(200).send(milks);
                    console.log(milks)
                }
            )
            .catch((error) => {
                res.status(400).send(error);
            });
    },
};
