exports.checkUserHasPremium = async(req, res, next) => {

    console.log("inside chek user has premium...")
    console.log("req url", req.url)
        // if(req.url === '/checkPremium'){
        //     console.log("inside if >>>> ");
        // }else{
        //     console.log("inside else >>>> ");
        // }

    try {
        const isPremium = req.user.isPremium;
        console.log('req user premium >> ', req.user.isPremium);
        // const user
        if (isPremium) {
            if (req.url === '/checkPremium') {
                return res.status(200).json({ message: "premium user" });
            } else {
                next();
            }
            // next();
        } else {
            res.status(401).json({ success: false, message: "You are not an premium member" })
        }
    } catch (err) {
        console.log(err);
    }
}