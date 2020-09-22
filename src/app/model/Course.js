const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Course = new Schema(
    {
        _id: { type: Number },
        name: { type: String },
        decription: { type: String },
        author: { type: String },
        tranings: { type: Number },
        image: { type: String },
        videoId: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        _id: false,
        timestamps: true,
    },
);

Course.plugin(AutoIncrement);

Course.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const validateParameter = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: validateParameter ? req.query.type : 'desc',
        });
    }
    return this;
};

Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});
mongoose.plugin(slug);

module.exports = mongoose.model('Course', Course);
