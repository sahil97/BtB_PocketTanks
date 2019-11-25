const mongoose = require("mongoose");
const schema = require("./schema/schema");
const bcrypt = require("bcrypt");


UserSchema = new mongoose.Schema(schema.dbSchema['users']);

// UserSchema.methods = {
//     comparePassword: function (password) {
//       return bcrypt.compareSync(password, this.hashPassword);
//     }
//   }

const user= mongoose.model('User', UserSchema)

module.exports = user