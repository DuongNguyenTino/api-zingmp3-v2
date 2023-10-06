const favouriteModel = require('../models/favourite.model')
const ErrorHandler = require('../utils/ErrorHandler')

const getFavouriteSong = async (req, res) => {
  try {
    const favourites = await favouriteModel.find({ type: 'song' }).sort({
      createdAt: -1
    })
    res.status(201).json({
      success: true,
      data: favourites,
    })
  } catch (error) {
    return new ErrorHandler(error.message, 500)
  }
}

const getFavouriteAlbum = async (req, res) => {
  try {
    const favourites = await favouriteModel.find({ type: 'album' }).sort({
      createdAt: -1
    })
    res.status(201).json({
      success: true,
      data: favourites,
    })
  } catch (error) {
    return new ErrorHandler(error.message, 500)
  }
}

const getFavouriteMv = async (req, res) => {
  try {
    const favourites = await favouriteModel.find({ type: 'mv' }).sort({
      createdAt: -1
    })
    res.status(201).json({
      success: true,
      data: favourites,
    })
  } catch (error) {
    return new ErrorHandler(error.message, 500)
  }
}

const getOneFavourite = async (req, res) => {
  try {
    const favourite = await favouriteModel.findOne({ encodeId: req.params.encodeId })
    if (!favourite) {
      res.status(201).json({
        success: true,
        isHeart: false
      })
    }
    res.status(201).json({
      success: true,
      isHeart: true
    })
  } catch (error) {
    return new ErrorHandler(error.message, 500)
  }
}

const likeAction = async(req, res) => {
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

    const user = await favouriteModel.findOne({ type, encodeId })

    if (user) {
      user.createdAt = Date.now()
      user.save()
      res.json({
        success: true,
        data: user
      })
    } else {
      const liked = await favouriteModel.create({
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
        message: 'Thêm vào yêu thích !'
      })
    }
  } catch (error) {
    return new ErrorHandler(error.message, 500)
  }
}

const dislikeAction = async(req, res) => {
  try {
    const { type, encodeId } = req.body
    const user = await favouriteModel.deleteOne({ type, encodeId })

    res.json({
      success: true,
      message: 'Xoá khỏi yêu thích !'
    })
  } catch (error) {
    return new ErrorHandler(error.message, 500)
  }
}

module.exports = {
  getFavouriteSong,
  getFavouriteAlbum,
  getFavouriteMv,
  getOneFavourite,
  likeAction,
  dislikeAction
}