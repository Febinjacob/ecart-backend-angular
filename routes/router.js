//To define route for  client request

//1 import express
const express = require('express')
//4 import product controller 
const ProductContoller = require('../controllers/productController')
const wishlistContoller = require('../controllers/wishlistController')
const wishlists = require('../models/wishlistSchema')
const cartController = require('../controllers/cartController')
//2 using express create object for router class inorder to setup path
const router = new express.Router()
//3 Use router object to resolve client request

  //get all product api request 

router.get('/products/all-products',ProductContoller.getAllProducts)

//get a particular product details
router.get('/products/view-product/:id',ProductContoller.viewProduct)

//add a new product to the wishlist
router.post('/wishlists/add-to-wishlist',wishlistContoller.addToWishlist)

//view all wishlist items
router.get('/wishlists/view-all-wishlists',wishlistContoller.getWishlistItem)

//delete a particular wishlist Items
router.delete('/wishlists/delete-wishlist-product/:id',wishlistContoller.deleteProduct)

//add to cart
router.post('/carts/add-to-cart',cartController.addToCart)

//get cart products
router.get('/carts/view-all-cart',cartController.getCart)

//delete cart products
router.delete('/carts/delete-products/:id',cartController.deleteCartProduct)

//increment cart quantity
router.get('/carts/increment-product/:id',cartController.incrementProductCount)

//decrement cart quantity
router.get('/carts/decrement-product/:id',cartController.decrementProductCount)

//5 export routes
module.exports = router;