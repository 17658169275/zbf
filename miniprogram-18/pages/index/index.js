// index.js
var benjin,lilv,sum,year,a;
Page({
  benjinNum:function (e) {
    benjin=parseInt(e.detail.value);
  },
  lilvNum:function (e) {
    lilv=parseInt(e.detail.value);
  },
  yearNum:function (e) {
    year=parseInt(e.detail.value);
  },
  calc:function () {
    sum=0;
    for(var i=1;i<=year;i++){
      a=Math.pow((1+lilv/100),i);
      sum=benjin*a
    }
    this.setData({
      sum:sum
    })
  }
})