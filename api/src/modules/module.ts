import  mongoose  from "mongoose";
import User from "./schema/user";

const model = mongoose.model.bind(mongoose);

module.exports = {
    
    User: model('User', User)
}