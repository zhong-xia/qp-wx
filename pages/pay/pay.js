// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [
      {
        listHead: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1485081754,2164381578&fm=26&gp=0.jpg',
        listTitle: '山东汽配城',
        result: '待评价',
        id: 1,
        goodImg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3452817492,2261660109&fm=26&gp=0.jpg',
        num: 2,
        price: 14,
        pingjia: '评价'
      }, {
        id: 2,
        listHead: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3307000838,1607974139&fm=26&gp=0.jpg',
        listTitle: '老屯配件',
        result: '待付款',
        goodImg: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2805093414,1022734532&fm=26&gp=0.jpg',
        num: 5,
        price: 90,
        pingjia: '付款'
      }, {
        id: 1,
        listHead: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=50644954,783393136&fm=26&gp=0.jpg',
        listTitle: '鸿图金属制造',
        result: '待评价',
        goodImg: 'http://img2.imgtn.bdimg.com/it/u=3116420779,4093074941&fm=26&gp=0.jpg',
        num: 15,
        price: 190,
        pingjia: '评价'
      }, {
        id: 2,
        listHead: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3307000838,1607974139&fm=26&gp=0.jpg',
        listTitle: '汽配模具|汽车配件模具',
        result: '待付款',
        goodImg: 'http://img2.imgtn.bdimg.com/it/u=3759435027,3010834785&fm=26&gp=0.jpg',
        num: 75,
        price: 890,
        pingjia: '付款'
      }
    ],
  },

  pay(){
    wx.scanCode({
      onlyFromCamera: true,
      success(res){
        console.log(res)
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    wx.showLoading({
      title: '加载中...',
    })
    this.setData({
      Index:options.itemIndex
    })
    wx.hideLoading()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})