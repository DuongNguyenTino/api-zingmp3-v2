const ZingMp3 = require('../utils/Zingmp3')

class ZingController {
  getFullInfoSong(req, res) {
    ZingMp3.getFullInfoSong(req.query.id).then((data) => {
      res.json(data)
    })
  }

  getSectionBottom(req, res) {
    ZingMp3.getSectionBottom(req.query.id).then((data) => {
      res.json(data)
    })
  }

  getDetailPlaylist(req, res) {
    ZingMp3.getDetailPlaylist(req.query.id).then((data) => {
      res.json(data)
    })
  }

  getDetailArtist(req, res) {
    ZingMp3.getDetailArtist(req.query.alias).then((data) => {
      res.json(data)
    })
  }

  getInfo(req, res) {
    ZingMp3.getInfoSong(req.query.id).then((data) => {
      res.json(data);
    })
  }

  getSong(req, res) {
    ZingMp3.getSong(req.query.id).then((data) => {
      res.json(data)
    })
  }

  getHome(req, res) {
    ZingMp3.getHome().then((data) => {
      res.json(data)
    }).catch(err => console.log(err))
  }

  getChartHome(req, res) {
    ZingMp3.getChartHome().then((data) => {
      res.json(data);
    })
  }

  getWeekChart(req, res) {
    ZingMp3.getWeekChart(req.query.id).then((data) => {
      res.json(data);
    })
  }

  getNewReleaseChart(req, res) {
    ZingMp3.getNewReleaseChart().then((data) => {
      res.json(data)
    })
  }

  getTop100(req, res) {
    ZingMp3.getTop100().then((data) => {
      res.json(data);
    })
  }
  
  getSearch(req, res) {
    ZingMp3.getSearch(req.query.keyword).then((data) => {
      res.json(data)
    })
  }

  getHubHome(req, res) {
    ZingMp3.getHubHome().then((data) => {
      res.json(data)
    })
  }

  getHubDetail(req, res) {
    ZingMp3.getHubDetail(req.quey.id).then((data) => {
      res.json(data)
    })
  }

  getVideo(req, res) {
    ZingMp3.getVideo(req.query.id).then((data) => {
      res.json(data)
    })
  }

  getSectionRelateVideo(req, res) {
    ZingMp3.getSectionRelateVideo(req.query.id).then((data) => {
      res.json(data)
    })
  }
  
  getRadio(req, res) {
    ZingMp3.getRadio().then((data) => {
      res.json(data)
    })
  }

  getLyric(req, res) {
    ZingMp3.getLyric(req.query.id).then((data) => {
      res.json(data)
    })
  }
}

module.exports = new ZingController
