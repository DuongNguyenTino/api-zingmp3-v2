const express = require("express")
const router = express.Router()

const ZingController = require("../controllers")
const favouriteController = require('../controllers/favourite.controller')
const historyController = require('../controllers/history.controller')

//getHubHome
router.get('/hub-home', ZingController.getHubHome)

//getRadio
router.get('/radio', ZingController.getRadio)

router.get('/favourite/song', favouriteController.getFavouriteSong)
router.get('/favourite/album', favouriteController.getFavouriteAlbum)
router.get('/favourite/mv', favouriteController.getFavouriteMv)
router.get('/favourite/:encodeId', favouriteController.getOneFavourite)
router.post('/favourite', favouriteController.likeAction)
router.delete('/favourite', favouriteController.dislikeAction)

router.get('/history/song', historyController.getHistorySong)
router.get('/history/album', historyController.getHistoryAlbum)
router.get('/history/mv', historyController.getHistoryMv)
router.get('/history/:encodeId', favouriteController.getOneFavourite)
router.post('/history', historyController.addHistory)
router.delete('/history', historyController.deleteHistory)

module.exports = router
