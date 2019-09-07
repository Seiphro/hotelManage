<template>
  <div class="Chart">
    <div class="pieChart">
      <div class="line-chart-example card">
        <div class="card-header d-flex align-items-center">
          <h3 class="h4">房间入住情况统计</h3>
        </div>
        <div name="echart" id="homechart" :style="{width: '500px', height: '300px', margin: '10px'}"></div>
      </div>
    </div>
    <div class="table">
      <div class="line-chart-example card">
        <div class="card-header d-flex align-items-center">
          <h3 class="h4">消费情况统计</h3>
        </div>
        <div name="etable" id="incomeTable" :style="{width: '500px', height: '300px', margin: '10px'}"></div>
      </div>
    </div>
  </div>
  <!-- <span v-if='data.count && data.totalMoney'></span> -->
</template>
<script>
import {roomStatus, incomeStatus} from '@/apis'
export default {
  data () {
    return {
      pieData: {
        status: '',
        count: ''
      },
      tableData: {
        amonth: '',
        totalMoney: ''
      }
    }
  },
  mounted () {
    roomStatus().then(res => {
      console.log(res.data)
      this.pieData = res.data
      this.drawChart()
    })
<<<<<<< HEAD
    incomeStatus().then(res => {
      console.log(res)
      this.tableData = res.data
      console.log(this.tableData)
      let xdata = []
      let ydata = []
      for (let i in this.tableData) {
        xdata.push(this.tableData[i].amonth)
        // let test = {value: this.tableData[i].totalMoney, name: this.tableData[i].amonth}
        // console.log(test)
        ydata.push(this.tableData[i].totalMoney)
      }
      this.drawChart(xdata, ydata)
    })
=======
>>>>>>> e3348a64b990f9347203f0409edaca0bd5decb30
  },
  methods: {
    drawChart (xdata, ydata) {
      console.log('进入echart')
<<<<<<< HEAD
      // var numTotalMoney = Object.keys(this.tableData).length
      // 获取room后台数据
      // let roomData = getRoomData()
      // console.log(roomData)
      // 基于准备好的dom,插入图
=======
      console.log(this.pieData.ordered)
>>>>>>> e3348a64b990f9347203f0409edaca0bd5decb30
      let myChart = this.$echarts.init(document.getElementById('homechart'))
      let myTable = this.$echarts.init(document.getElementById('incomeTable'))
      // 绘制图表
      let roomOption = {
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
            center: ['35%', '55%'],
            data: [
              { value: this.pieData[1].count, name: '入住' },
              { value: this.pieData[0].count, name: '预订' },
              { value: this.pieData[2].count, name: '空房' }
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
      // 消费统计
      let tableOption = {
        title: {
          text: '本年度消费趋势'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['消费金额', '最低气温']
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: xdata,
            // data: [' ', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            axisLabel: {
              show: true,
              'interval': 0, // 横坐标中间间隔
              rotate: 20 // 横坐标斜度
            },
            splitLine: {
              show: true // X轴刻度参考线
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value} 万元'
            }
          }
        ],
        series: [
          {
            name: '消费金额',
            type: 'line',
            data: ydata,
            // data: [
            //   // getData(),
            //   null,
            //   {value: this.tableData[0].totalMoney, name: '一月'},
            //   {value: this.tableData[1].totalMoney, name: '二月'},
            //   {value: this.tableData[2].totalMoney, name: '三月'},
            //   {value: this.tableData[3].totalMoney, name: '四月'},
            //   {value: this.tableData[4].totalMoney, name: '五月'},
            //   {value: this.tableData[5].totalMoney, name: '六月'},
            //   {value: this.tableData[6].totalMoney, name: '七月'},
            //   {value: this.tableData[7].totalMoney, name: '八月'},
            //   {value: this.tableData[8].totalMoney, name: '九月'}
            //   // {value: this.tableData[9].totalMoney, name: '十月'},
            //   // {value: this.tableData[10].totalMoney, name: '十一月'},
            //   // {value: this.tableData[11].totalMoney, name: '十二月'}
            // ],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            // radius: '55%',
            // center: ['90%', '55%'],
            markLine: {
              data: [{ type: 'average', name: '平均值' }]
            },
            symbolSize: 10
          }
        ]
      }
      myChart.setOption(roomOption)
      myTable.setOption(tableOption)
    }
  }
}
// function getData () {
//   var item = []
//   for (var i = 0; i < Object.keys(this.tableData).length; i++) {
//     var json = {}
//     json.value = 'amonth'
//     json.value = this.tableData[i].datalist.totalMoney
//     item.push(json)
//   }
//   return item
// }
</script>
<style lang="less" scoped>
.Chart {
  display: flex;
  flex-direction: row;
  text-align: center;
}
.chartStyle {
  width: 50%;
  display: flex;
  margin: auto;
  padding: 20px;
  border: 0;
  // vertical-align: baseline;
  // font: inherit;
  // font-size: 100%;
  // box-sizing: border-box;
}
.pieChart {
  .chartStyle;
  width: 40%;
}
.table {
  .chartStyle;
  width: 80%;
}
.h4 {
  margin: 0 auto;
}
.card {
  width: 100%;
  align-self: right;
}
</style>