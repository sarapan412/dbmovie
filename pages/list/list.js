Page({
    data: {
        
      },

      onLoad: function () {

        wx.request({
          url: 'http://127.0.0.1:8000/top250?page=0',
          success: function(res) {
              console.log(res)
          }
        })
      }
    })

