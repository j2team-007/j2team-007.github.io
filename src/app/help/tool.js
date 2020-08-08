module.exports = {
    mutipleMongooseObject: (mongooses) => {
        return mongooses.map((mongoose) => mongoose.toObject());
    },
    MongooseObject: (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
