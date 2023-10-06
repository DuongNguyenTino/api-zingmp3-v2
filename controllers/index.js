
const ZingMp3 = require('../utils/Zingmp3')

class ZingController {
  getHubHome(req, res) {
    ZingMp3.getHubHome().then((data) => {
      res.json(data)
    })
  }
  
  getRadio(req, res) {
    ZingMp3.getRadio().then((data) => {
      res.json(data)
    })
  }
}

module.exports = new ZingController
