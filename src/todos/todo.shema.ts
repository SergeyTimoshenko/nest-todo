import * as mongoose from 'mongoose';

export const TodoShema = new mongoose.Schema({
    name: String,
    complete: Boolean
})