import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
    name: String,
    password: String,
    created_at: { type: Date, default: Date.now }
})