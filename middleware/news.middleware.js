const checkNumber = (req,res,next) => {
    //how to catch error, we use try catch error 
    try {
      const {number} = req.query;
       if(number < 5) res.send('Baba you are too small')
       next();
   }catch (error){
       console.log(error.message)
   }
}

module.exports = checkNumber