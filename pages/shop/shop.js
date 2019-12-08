// pages/shop/shop.js

var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feed: [],
    feed_length: 0,
    navTab:['商品','评价','商家'],
    currentNavtab: "0",
    classifyTab:"1",
    classifyList:['热销','新品','制动系统','养护美化','行走系统','配件','转向系统','电器']
  },
  switchTab(e){
    // console.log(e.currentTarget.dataset.idx)
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    })
  },
  switchClassify(e){
    // console.log(e)
    console.log(e.currentTarget.dataset.index)
    this.setData({
      classifyTab: e.currentTarget.dataset.index
    })
  },

 
  

  



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.refresh();
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
  //网络请求数据, 实现刷新
  refresh0: function () {
    var index_api = '';
    util.getData(index_api)
      .then(function (data) {
        //this.setData({
        //
        //});
        console.log(data);
      });
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
    this.refresh();
    // console.log('upper')
    setTimeout(function(){
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    },2000)
  },
  //使用本地 fake 数据实现刷新效果
  refresh: function () {
    var feed = util.getDiscovery();
    // console.log("loaddata");
    // console.log(feed)
    var feed_data = feed.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function(){
      wx.hideNavigationBarLoading();
      that.nextLoad();
    },2000);
    // console.log('lower')
  },
  nextLoad: function () {
    var next = util.discoveryNext();
    // console.log("continueload");
    // console.log(next)
    var next_data = next.data;
    // console.log(next_data)
    this.setData({
      feed: this.data.feed.concat(next_data),
      feed_length: this.data.feed_length + next_data.length
    });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})