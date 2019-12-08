// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topTab:0,
    topList:['全部','待付款','待使用','待评价','退款/售后'],
    orderList:[
      {
        listHead:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1485081754,2164381578&fm=26&gp=0.jpg',
        listTitle:'山东汽配城',
        result:'待评价',
        id:1,
        goodImg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3452817492,2261660109&fm=26&gp=0.jpg',
        num:2,
        price:14,
        pingjia: '评价'
      }, {
        id:2,
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
      }, {
        listHead: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2491588266,1963864761&fm=26&gp=0.jpg',
        listTitle: '汽配模具',
        result: '已完成',
        id: 1,
        goodImg: 'http://img2.imgtn.bdimg.com/it/u=3759435027,3010834785&fm=26&gp=0.jpg',
        num: 52,
        price: 84,
        pingjia: '再来一单'
      }, {
        id: 1,
        listHead: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3157353141,3119034262&fm=111&gp=0.jpg',
        listTitle: '武汉元禾汽配',
        result: '退款成功',
        goodImg: 'http://img1.imgtn.bdimg.com/it/u=498180812,1299413357&fm=26&gp=0.jpg',
        num: 15,
        price: 190,
        pingjia: '退款进度'
      }
    ],
    payList:[
      {
        id: 2,
        listHead: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3307000838,1607974139&fm=26&gp=0.jpg',
        listTitle: '老屯配件',
        result: '待付款',
        goodImg: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2805093414,1022734532&fm=26&gp=0.jpg',
        num: 5,
        price: 90,
        pingjia: '付款'
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
    accessList:[
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
        id: 1,
        listHead: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=50644954,783393136&fm=26&gp=0.jpg',
        listTitle: '鸿图金属制造',
        result: '待评价',
        goodImg: 'http://img2.imgtn.bdimg.com/it/u=3116420779,4093074941&fm=26&gp=0.jpg',
        num: 15,
        price: 190,
        pingjia: '评价'
      }
    ],
    moneyList: [
      {
        listHead: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2491588266,1963864761&fm=26&gp=0.jpg',
        listTitle: '汽配模具',
        result: '已完成',
        id: 1,
        goodImg: 'http://img2.imgtn.bdimg.com/it/u=3759435027,3010834785&fm=26&gp=0.jpg',
        num: 52,
        price: 84,
        pingjia: '再来一单'
      }, {
        id: 1,
        listHead: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3157353141,3119034262&fm=111&gp=0.jpg',
        listTitle: '武汉元禾汽配',
        result: '退款成功',
        goodImg: 'http://img1.imgtn.bdimg.com/it/u=498180812,1299413357&fm=26&gp=0.jpg',
        num: 15,
        price: 190,
        pingjia: '退款进度'
      }
    ],
    access:'',
    pay:'',
    heightScroll:''
  },


  switchTab(e){
    // console.log(e)
    this.setData({
      topTab:e.currentTarget.dataset.index
    })
  },





 switchTap(e){
  //  console.log(e)
  // console.log(e.currentTarget.dataset.id)
  // console.log(e.currentTarget.dataset.index)
   let id = e.currentTarget.dataset.id
   let index = e.currentTarget.dataset.index
  //  console.log(index)
  if(id == 1){
    // console.log(index)
    wx.navigateTo({
      url: '/pages/assess/assess?itemIndex=' + index,
    })
  }else{
    wx.navigateTo({
      url: '/pages/pay/pay?itemIndex=' + index,
    })
  } 
 },



  upper(){
    wx.showNavigationBarLoading();
    setTimeout(function(){
      wx.hideNavigationBarLoading();
    },2000)
  },
lower(){
    wx.showLoading({
      title: '正在加载...',
    })
    setTimeout(function(){
      wx.hideLoading()
    },2000)
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that =this
    wx.getSystemInfo({
      success: function(res) {
        // console.log(res)
        that.setData({
          // heightScroll: parseInt(res.windowHeight) + 200
          heightScroll:res.windowHeight
        })
      },
      
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