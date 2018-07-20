module.exports = {
    getAll: (req,res,next) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_houses()
            .then(houses => res.status(200).send(houses))
            .catch(err => {
                res.status(500).send({errorMessage: "It aint working... Sorry!"})
                console.log(err)
            })
    },
    create: (req,res,next) => {
        const dbInstance = req.app.get('db')

        dbInstance.create_house()
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({errorMessage: "It aint working... Sorry!"})
                console.log(err)
            })
    },
    delete: (req,res,next) => {
        const dbInstance = req.app.get('db')

        dbInstance.delete_house()
            .then(() => res.status(200).send("House Listing Removed"))
            .catch(err => {
                res.status(500).send({errorMessage: "It aint working... Sorry!"})
                console.log(err)
            })
    }
}