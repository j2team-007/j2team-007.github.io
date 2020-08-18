const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema(
    {
        name: { type: String },
        decription: { type: String },
        author: { type: String },
        tranings: { type: Number },
        image: { type: String },
        videoId: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});
mongoose.plugin(slug);

module.exports = mongoose.model('Course', Course);
