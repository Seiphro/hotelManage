<template>
  <div id="index">
    <el-carousel :interval="3000" type="card" height="300px">
      <el-carousel-item v-for="(item,index) in img" :key="index">
        <img v-bind:src="item.src" width="80%" height="80%">
      </el-carousel-item>
    </el-carousel>
      <el-col :span="3" v-for="(rs,index) in roomState" :key="index" :offset="index > 0 ? 0.9 : 0">
        <el-card class="box-card" shadow="hover" v-if="rs.state=='0'">
          <div style="padding: 1px;">
            <h6>房间号：{{rs.id}}</h6>
            <h6>住户：</h6>
          </div>
        </el-card>
        <el-card class="box-card" shadow="hover" v-else-if="rs.state=='1'" style="background-color: #E6A23C">
          <div style="padding: 1px;">
            <h6>房间号：{{rs.id}}</h6>
            <h6>住户：{{rs.guestName}}</h6>
          </div>
        </el-card>
      </el-col>
  </div>
</template>
<script type="text/javascript">
import {roomStateList} from '@/apis'
export default {
  data () {
    return {
      roomState: {
        id: '',
        state: '',
        guestName: ''
      },
      state: false,
      img: [
        {src: require('../../assets/images/hotelDiv.jpg')},
        {src: require('../../assets/images/hotelDiv2.jpg')},
        {src: require('../../assets/images/hotelDiv3.jpg')},
        {src: require('../../assets/images/hotelDiv4.jpg')}
      ]
    }
  },

  mounted () {
    roomStateList().then(res => {
      let data = res.data
      console.log(data)
      this.roomState = data
      console.log(this.roomState)
    })
    // this.open()
  },
  methods: {
    open () {
      const h = this.$createElement
      this.$notify({
        // title: "欢迎光临",
        message: h('i', { style: 'color: teal' }, '欢迎进入U成长公寓管理平台'),
        offset: 200
      })
    }
  }
}
</script>
<style>
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card{
  background-color: #67C23A;
  opacity:0.9;
}
</style>