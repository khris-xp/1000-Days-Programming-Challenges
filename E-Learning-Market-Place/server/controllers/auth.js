const register = (req, res) => {
    res.json({ msg: req.body });
    res.json('Register user response from controller');
}

module.exports = register