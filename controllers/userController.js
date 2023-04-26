const User = require("../model/user");

exports.buscarUsuario = async (req,res) =>{
    let { email } = req.params;
    console.log(email);
    const user = await User.findOne({email});
    console.log(user);
    res.json({user});

}