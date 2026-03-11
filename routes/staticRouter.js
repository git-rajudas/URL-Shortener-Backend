const express = require("express");
const router = express.Router();
const URL = require("../modules/url")
router.get("/",async (req,res)=>{
    if(!req.user) return res.render("login");
    const allurls = await URL.find({createdBy:req.user._id})
    return res.render("home",{
        urls: allurls,
    });
});


router.get("/signup",(req,res)=>{
    return res.render("signup");
})

router.get("/login",(req,res)=>{
    return res.render("login");
})


router.get("/links",async(req,res)=>{
    const allurls = await URL.find({})
    return res.render("links",{
        urls: allurls,
    });
})


module.exports = router;