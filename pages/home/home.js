// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filterID:1,
    show:true,
    scrollDown:false,
    swiperImg:[
      {
        id:1,
        img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1669294523,3027384011&fm=26&gp=0.jpg'
      },{
        id:2,
        img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2644676016,3157951263&fm=26&gp=0.jpg'
      },{
        id:3,
        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4289834094,3390176533&fm=26&gp=0.jpg'
      },{
        id:4,
        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3286272841,4283318820&fm=26&gp=0.jpg'
      }
    ],
    menuList:[
      {
        id:1,
        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4009701119,3873459584&fm=26&gp=0.jpg',
        name:'制冷配件'
      }, {
        id: 2,
        img: 'http://img4.imgtn.bdimg.com/it/u=3374167875,3213815903&fm=26&gp=0.jpg',
        name: '汽车配件'
      },{
        id:3,
        img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4156204901,3195574987&fm=26&gp=0.jpg',
        name:'汽车用品'
      },{
        id:4,
        img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1012197035,940333455&fm=15&gp=0.jpg',
        name:'电子配件'
      }
    ],
    menuList2:[
      {
        id: 5,
        img: 'http://img5.imgtn.bdimg.com/it/u=268420408,1777128373&fm=15&gp=0.jpg',
        name: '制动系统'
      }, {
        id: 6,
        img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1085134784,871844383&fm=26&gp=0.jpg',
        name: '美容养护'
      }, {
        id: 7,
        img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2052968482,4199325646&fm=15&gp=0.jpg',
        name: '发动机系统'
      },{
        id:8,
        img:'/images/更多.png',
        name:'更多'
      }
      
    ],
    showList:[
      {
        id:1,
        title:'西郊汽配城',
        comment:'一般',
        img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=28759611,358583798&fm=26&gp=0.jpg',
        score:3,
        commentNum:20,
        address:'西郊汽配城',
        introduce:'方便xxx',
        price:10000,
        men:9990,
        shou:5
      }, {
        id: 2,
        title: '老屯汽配城',
        comment: '不错',
        img: 'http://img2.imgtn.bdimg.com/it/u=626585183,4137648745&fm=26&gp=0.jpg',
        score: 2,
        commentNum: 123,
        address: '山东省济南市槐荫区老屯汽配城',
        introduce: '方便灵活省油',
        price: 10000,
        men: 9990,
        shou: 10
      }, {
        id: 3,
        title: '山东汽配城',
        comment: '不错',
        img: 'http://img3.imgtn.bdimg.com/it/u=1496685576,1221577215&fm=26&gp=0.jpg',
        score: 3,
        commentNum: 123,
        address: '山东省济南市槐荫区山东汽配城',
        introduce: '方便灵活省油',
        price: 10000,
        men: 9990,
        shou: 10
      }
    ],
    showList1:[
      {
        id: 3,
        title: '山东汽配城',
        comment: '不错',
        img: 'http://img3.imgtn.bdimg.com/it/u=1496685576,1221577215&fm=26&gp=0.jpg',
        score: 3,
        commentNum: 123,
        address: '山东省济南市槐荫区山东汽配城',
        introduce: '方便灵活省油',
        price: 10000,
        men: 9990,
        shou: 10
      }, {
        id: 2,
        title: '老屯汽配城',
        comment: '不错',
        img: 'http://img2.imgtn.bdimg.com/it/u=626585183,4137648745&fm=26&gp=0.jpg',
        score: 2,
        commentNum: 123,
        address: '山东省济南市槐荫区老屯汽配城',
        introduce: '方便灵活省油',
        price: 10000,
        men: 9990,
        shou: 10
      }
    ],
    showList2:[
      {
        id: 1,
        title: '西郊汽配城',
        comment: '一般',
        img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=28759611,358583798&fm=26&gp=0.jpg',
        score: 3,
        commentNum: 20,
        address: '西郊汽配城',
        introduce: '方便xxx',
        price: 10000,
        men: 9990,
        shou: 5
      }
    ]
  },

  tapFilter(e){
    // console.log(e)
    this.setData({
      filterID:e.currentTarget.dataset.id
    })
  },
  onPageScroll(e){
    // console.log(e)
    if(e.scrollTop >= 100){
     this.setData({
       scrollDown: true
     })
    }else{
      this.setData({
        scrollDown: false
      })
    }
  },
  tapSearch(){
    wx.navigateTo({
      url:'/pages/search/search'
    })
  },

  navigate(){
    wx.navigateTo({
      url: '/pages/shop/shop',
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