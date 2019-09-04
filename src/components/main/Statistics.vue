<template>
  <div>
    <div class="line-chart-example card">
      <div class="card-header d-flex align-items-center">
        <h3 class="h4">房间入住情况统计</h3>
      </div>
      <div name="echart" id="homechart" :style="{width: '500px', height: '300px'}"></div>
    </div>
  </div>
</template>
<script>
import { getIncome } from '@/views/hotelMgmt/apis'

// import {getIncomeEveryYear} from '@apis'

// import { Json } from 'Json'
export default {
  data () {
    return {
      tableData: [],
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now() - 8.64e6
        }
      }
    }
  },
  mounted () {
    this.drawChart()
    getIncome().then(res => {
      this.tableData = res.data
    })
  },
  methods: {
    drawChart () {
      console.log('进入echart')
      // 获取room后台数据
      // let roomData = getRoomData()
      // console.log(roomData)
      // 基于准备好的dom,插入图
      let myChart = this.$echarts.init(document.getElementById('homechart'))
      // 绘制图表
      let roomOption = {
        // title: {
        //   // text: '房间入住情况统计',
        //   // subtext: '纯属虚构',
        //   x: 'center'
        // },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['入住', '预订', '空房']
        },
        series: [
          {
            name: '房间状态',
            type: 'pie',
            radius: '55%',
            center: ['45%', '55%'],
            data: [
              { value: 134, name: '入住' },
              { value: 310, name: '预订' },
              { value: 234, name: '空房' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      myChart.setOption(roomOption)
    }
  }
}
</script>
<style lang="less" scoped>
.h4 {
  margin: 0 auto;
}
.card {
  width: 50%;
}
</style>