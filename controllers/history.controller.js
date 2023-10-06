const historyModel = require('../models/history.model')
const ErrorHandler = require('../utils/ErrorHandler')

const getHistorySong = async (req, res) => {
  try {
    const historys = await historyModel.find({ type:'song' }).sort({
      createdAt: -1
    })
    res.status(201).json({
      success: true,
      data: historys,
    })
  } catch (error) {
    return new ErrorHandler(error.message, 500)
  }
}

const getHistoryAlbum = async (req, res) => {
  try {
    const historys = await historyModel.find({ type:'album' }).sort({
      createdAt: -1
    })
    res.status(201).json({
      success: true,
      data: historys,
    })
  } catch (error) {
    return new ErrorHandler(error.message, 500)
  }
}

const getHistoryMv = async (req, res) => {
  try {
    const historys = await historyModel.find({ type:'mv' }).sort({
      createdAt: -1
    })
    res.status(201).json({
      success: true,
      data: historys,
    })
  } catch (error) {
    return new ErrorHandler(error.message, 500)
  }
}

const getOneHistory = async (req, res) => {
  try {
    const history = await historyModel.findOne({ encodeId: req.params.encodeId })
    if (!history) {
      res.status(201).json({
        success: true,
        isHistory: false
      })
    }
    res.status(201).json({
      success: true,
      isHistory: true
    })
  } catch (error) {
    return new ErrorHandler(error.message, 500)
  }
}

const addHistory = async(req, res) => {
  try {
    const { 
      type,
      encodeId,
      thumbnail,
      title,
      sortDescription,
      artists,
      artistsName,
      album,
      duration,
      hasLyric,
      mvlink,
      releaseDate,
      streamingStatus
    } = req.body

    const user = await historyModel.findOne({ type, encodeId })

    if (user) {
      user.createdAt = Date.now()
      user.save()
      res.json({
        success: true,
        data: user
      })
    } else {
      const liked = await historyModel.create({
        type,
        encodeId,
        thumbnail,
        title,
        sortDescription,
        artists,
        artistsName,
        album,
        duration,
        hasLyric,
        mvlink,
        releaseDate,
        streamingStatus
      })

      res.json({
        success: true,
        data: liked,
        message: 'Thêm vào lịch sử !'
      })
    }
  } catch (error) {
    return new ErrorHandler(error.message, 500)
  }
}

const deleteHistory = async(req, res) => {
  try {
    const { type, encodeId } = req.body
    const user = await historyModel.deleteOne({ type, encodeId })

    res.json({
      success: true,
      message: 'Xoá khỏi lịch sử !'
    })
  } catch (error) {
    return new ErrorHandler(error.message, 500)
  }
}

module.exports = {
  getHistorySong,
  getHistoryAlbum,
  getHistoryMv,
  getOneHistory,
  addHistory,
  deleteHistory
}