// pages/find/find.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerList:['关注','推荐','最新'],
    currentTab:'0',
    scrollHeight:'',
    reLoad:[],
    reLoad_length:0
    
  },

  switchTab(e){
    // console.log(e.currentTarget.dataset.index)
    this.setData({
      currentTab: e.currentTarget.dataset.index
    })
  },

  // scroll(){
  //   console.log('scroll')
  // },
  upper(){
    // console.log('upper')
    wx.showNavigationBarLoading()
    this.loading()
    // console.log('upper1')
    setTimeout(function(){
      wx.hideNavigationBarLoading()
    },2000)
  },
  lower(){
    var that = this
    wx.showLoading({
      title: '加载中...',
    })
    setTimeout(function(){
      wx.hideLoading()
      that.nextLoading()
    },1000)
  },
  //网络请求数据, 实现刷新
  // refresh0: function () {
  //   var index_api = '';
  //   util.getData(index_api)
  //     .then(function (data) {
  //       //this.setData({
  //       //
  //       //});
  //       console.log(data);
  //     });
  // },








  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //这里需要注意，微信的scroll-view必须设置高度，需要在页面的onload中给scroll-view高度变量赋值
    let that = this
    //高度的获取从微信获取客户端信息开始
    wx.getSystemInfo({
      success(res) {
        // console.log(res)
        that.setData({
          scrollHeight: res.windowHeight
        })
      },
    }),
    this.loading();

  },
  loading() {
    var reLoad = util.getData2();
    // console.log(reLoad)
    var reLoad_data = reLoad.data;
    // console.log(reLoad_data)
    this.setData({
      reLoad: reLoad_data,
      reLoad_length: reLoad_data.length
    })
  },

  nextLoading(){
    var renextLoading = util.getNext()
    // console.log(renextLoading)
    var renextLoading_data = renextLoading.data;
    // console.log(renextLoading_data)
    this.setData({
      reLoad:this.data.reLoad.concat(renextLoading_data),
      reLoad_length:this.data.reLoad_length +renextLoading_data.length
    })
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