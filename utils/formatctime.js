const formatctime = () => {
  // Lấy thời gian hiện tại
  var currentTime = new Date();
  
  // Lấy thời gian hiện tại dưới dạng số mili giây kể từ Epoch (1 tháng 1 năm 1970, 00:00:00 UTC)
  var currentTime = currentTime.getTime();
  
  // Tính số mili giây giữa thời gian hiện tại và Epoch
  var secondsSinceEpoch = Math.round(currentTime / 1000);
  return secondsSinceEpoch
}

module.exports = formatctime
