const express = require("express")
const router = express.Router()

const ZingController = require("../controllers")

// getFullInfoSong
router.get("/full-song", ZingController.getFullInfoSong)

// getSong
router.get("/song", ZingController.getSong)

// getSectionBottom
router.get("/section-bottom", ZingController.getSectionBottom)

// getDetailPlaylist
router.get("/detail-playlist", ZingController.getDetailPlaylist)

// getHome
router.get("/home", ZingController.getHome)

// getTop100
router.get("/top100", ZingController.getTop100)

// getChartHome
router.get("/chart-home", ZingController.getChartHome)

// getNewReleaseChart
router.get("/new-release-chart", ZingController.getNewReleaseChart)

// getInfoSong
router.get("/info-song", ZingController.getInfo)

// getDetailArtist
router.get("/artist", ZingController.getDetailArtist)

// getLyric
router.get("/lyric", ZingController.getLyric)

// getSearch
router.get("/search", ZingController.getSearch)

// getVideo
router.get("/video", ZingController.getVideo)

//getWeekChart
router.get('/week-chart', ZingController.getWeekChart)

//getHubHome
router.get('/hub-home', ZingController.getHubHome)

//getHubDetail
router.get('/hub-detail', ZingController.getHubDetail)

//getRadio
router.get('/radio', ZingController.getRadio)

//getSectionRelateVideo
router.get('/section-relate-video', ZingController.getSectionRelateVideo)

module.exports = router
