const Shoes = require('../schemas/shoesSchema');

exports.getAllShoes = (req, res) => {
    Shoes.find()
        .then((shoes) => {
            res.status(200).json(shoes);
        })

        .catch((err) => {
            console.log("Could not find shoes");
            res.status(400).json(err);
        });
};


exports.createShoes = (req, res) => {
    const { Name, Description, Price, ImageURL } = req.body;

    Shoes.create({ Name, Description, Price, ImageURL })
        .then((shoes) => {
            res.status(201).json(shoes);
        })

        .catch((err) => {
            console.log("Could not create shoes");  
            res.status(400).json(err);
        });
};

exports.getShoesById = (req, res) => {
    Shoes.findById(req.params.id)
        .then((shoes) => {
            res.status(200).json(shoes);
        })

        .catch((err) => {
            console.log("Could not find shoes with id: " + req.params.id);
            res.status(400).json(err);
        });
};

exports.updateShoesById = (req, res) => {
    const { Name, Description, Price, ImageURL } = req.body;

    Shoes.findByIdAndUpdate(req.params.id, { Name, Description, Price, ImageURL }, { new: true })
        .then((shoes) => {
            res.status(200).json(shoes);
        })

        .catch((err) => {
            console.log("Could not update shoes with id: " + req.params.id);
            res.status(400).json(err);
        });
};

exports.deleteShoesById = (req, res) => {
    Shoes.findByIdAndDelete(req.params.id)
        .then((shoes) => {
            res.status(200).json(shoes);
        })

        .catch((err) => {
            console.log("Could not delete shoes with id: " + req.params.id);
            res.status(400).json(err);
        });
};

