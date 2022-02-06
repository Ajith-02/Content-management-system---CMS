module.exports = {
    mongoDbUrl: 'mongodb+srv://Ajith:welcome123@cluster0.rtsnr.mongodb.net/cms',
    // mongoDbUrl: 'mongodb://localhost:27017/cms_app',
    PORT: process.env.PORT || 3000,
    //this will act as middleware and we will use all over our project
    globalVariables: (req, res, next) => {
        res.locals.success_message = req.flash('success-message');
        res.locals.error_message = req.flash('error-message');
        res.locals.user = req.use || null;
        next();
    }
};