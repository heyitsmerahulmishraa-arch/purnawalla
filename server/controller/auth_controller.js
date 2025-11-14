const home = async (req,res) => {
    try {
        res.send("using auth controller")
    }
    catch(erroe) {
        console.log(erroe)
    }
}
module.exports = home;