const mongoose  = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
module.exports =  async (URL) => {
    try {
        mongoose.connect(URL, options);
        console.log(`Connected to ${URL}`);
    } catch (error) {
        throw new Error(error.message);   
    }
}