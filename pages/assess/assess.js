// pages/assess/assess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Index:'',
    // show:true,
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
    flag: [0, 0, 0],
    startext: ['', '', ''],
    stardata: [1, 2, 3, 4, 5]
  },
  changeColor: function (e) {
    var index = e.currentTarget.dataset.index;
    var num = e.currentTarget.dataset.no;
    var a = 'flag[' + index + ']';
    var b = 'startext[' + index + ']';
    var that = this;
    if (num == 1) {
      that.setData({
        [a]: 1,
        [b]: '非常不满意'
      });
    } else if (num == 2) {
      that.setData({
        [a]: 2,
        [b]: '不满意'
      });
    } else if (num == 3) {
      that.setData({
        [a]: 3,
        [b]: '一般'
      });
    } else if (num == 4) {
      that.setData({
        [a]: 4,
        [b]: '满意'
      });
    } else if (num == 5) {
      that.setData({
        [a]: 5,
        [b]: '非常满意'
      });
    }
  },
  switchCamera(){
    wx.showActionSheet({
      itemList: ['拍摄','从相册选择'],
      success(res){
        // console.log('success',res)
        if(res.tapIndex == 0){
          wx.showLoading({
            title: '加载中...',
          })
          wx.navigateTo({
            url: '/pages/camera/camera',
          })
          wx.hideLoading();
        }else{
          wx.showLoading({
            title: '加载中...',
          })
          wx.navigateTo({
            url: '/pages/xiangce/xiangce',
          })
          wx.hideLoading()
        }
      },
      fail(res) {
        console.log('showActionSheet-fail', res)
      },
      complete(res) {
        console.log('showActionSheet-complete', res)
      }
    })
  },
  switchVideo(){
      wx.showModal({
        title: '提示',
        content: '允许使用摄像头吗',
        showCancel: true,
        cancelText: '取消',
        cancelColor: '#f00',
        confirmText: '确定',
        confirmColor: '#0f0',
        success(res) {
          wx.navigateTo({
            url: '/pages/video/video',
          })
        },
        fail(res) {
          console.log('fail', res)
        },
        complete(res) {
          console.log('complete', res)
        }
      })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    this.setData({
      Index:options.itemIndex
    })
    wx.hideLoading()
    // console.log(options.itemIndex)
    
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