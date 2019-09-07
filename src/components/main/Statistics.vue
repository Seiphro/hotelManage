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
        <div name="etable" id="consumptionTable" :style="{width: '500px', height: '300px', margin: '10px'}"></div>
      </div>
    </div>
  </div>
</template>
<script>
import {roomStatus} from '@/apis'
export default {
  data () {
    return {
      pieData: {
        checkIn: '',
        ordered: '0',
        empty: ''
      }
    }
  },
  mounted () {
    roomStatus().then(res => {
      let data = res.data
      console.log(data)
      this.pieData = data[0]
      console.log(this.pieData)
    })
    this.drawChart()
  },
  methods: {
    drawChart () {
      console.log('进入echart')
      console.log(this.pieData.ordered)
      // 获取room后台数据
      // let roomData = getRoomData()
      // console.log(roomData)
      // 基于准备好的dom,插入图
      let myChart = this.$echarts.init(document.getElementById('homechart'))
      let myTable = this.$echarts.init(document.getElementById('consumptionTable'))
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
            center: ['35%', '55%'],
            data: [
              { value: this.pieData.checkIn, name: '入住' },
              { value: this.pieData.ordered, name: '预订' },
              { value: this.pieData.empty, name: '空房' }
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
            data: [' ', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
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
            data: [null, 30, 11, 15, 13, 12, 13, 10, 50, 80],
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