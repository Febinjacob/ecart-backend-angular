//logic for wishlist
//import wishlist from model
const wishlists = require('../models/wishlistSchema')

//import for add wishlist
exports.addToWishlist = async (req, res) => {
    //get product details

    // req.body={
    //     id:3952,
    //     title:'erre',
    //     price:'fefc'
    // }

    //Destrcturing
    const { id, title, price, image } = req.body;
    //logic
    try {
        //check if product is already in wishlist
        const item = await wishlists.findOne({ id })
        if (item) {
            res.status(403).json("Product is already available in wishlist")
        }
        else {
            //add a new product to the wishlist
            const newProduct = new wishlists({ id, title, price, image })
            //to store the new product in the wishlists
            await newProduct.save()
            //send response back to the client
            res.status(200).json("Product added successfully")
        }
    }
    catch (error) {
        res.status(401).json(error)
    }
}
//get all wishlists products
exports.getWishlistItem=async(req,res)=>{
    //logic
    try{
       const allWishlist=await wishlists.find()
       res.status(200).json(allWishlist)//wishlists products details
    }
    catch(error){
        res.status(404).json(error)
    }
}

//particular product delete from wishlists
exports.deleteProduct=async(req,res)=>{
    //logic - Id get - delete -to fetch reamaing product details
    //get id from path parameter

    const{id}=req.params
    try {
        const removedProduct=await wishlists.deleteOne({id})
        //get remaing products details after deleting a particular product
        if(removedProduct){
            const allItems=await wishlists.find()
            res.status(200).json(allItems)
        }
    } catch (error) {
       res.status(404).json(error) 
    }
}