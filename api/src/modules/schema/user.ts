import { Schema } from "mongoose";

interface User {

    name: string;
    email: string;
    password: string;
    feedback?: Array<object>;
    admin: boolean;

}

const schema = new Schema <User>({

    name: { type: String, required: true }, 
    email:{ type: String, required: true },
    password: { type: String, required: true },
    feedback: { type: Array },
    admin: { type: Boolean, required: true}

});

export default schema