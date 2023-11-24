const jwt = require("jsonwebtoken");

const userController = {
    auth: function (req, res, next) {
        const token = req.header("authorization-token");
      
        if (!token) {
          return res.status(401).send("Acesso negado");
        }
      
        try{
          const userVerified = jwt.verify(token, process.env.TOKEN_SECRET);
          req.user = userVerified;
          next()
        }catch(error){
          return res.status(401).send("Acesso negado");
        }
      },
      
      verifyAdmin: function (req, res){
        if(req.user.admin){
            res.send("Esse dado só pode ser visto pelo admin")
        }else{
            return res.status(401).send("Não é admin: Acesso negado");
        }
    }
}

module.exports = userController;