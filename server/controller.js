const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
      const db = req.app.get('db')
      const { email, password } = req.body

      const [user] = await db.check_user([email])
  

      if (user) {
        return res.status(409).send('user already exists')
      }
  
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt)
  

      const [newUser] = await db.register_user([email, hash])

      req.session.user = newUser

      res.status(200).send(req.session.user)
    }
}