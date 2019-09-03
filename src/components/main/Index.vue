<template>
  <div id="index">
    <div>
      <!-- 提供额外的视觉效果，标识一组按钮中的原始动作 -->
      <button type="button" class="btn btn-primary">增加</button>
      <!-- 表示一个成功的或积极的动作 -->
      <button type="button" class="btn btn-success">删除</button>
      <!-- 信息警告消息的上下文按钮 -->
      <button type="button" class="btn btn-info">修改</button>
      <!-- 表示应谨慎采取的动作 -->
      <button type="button" class="btn btn-warning">查找</button>
    </div>
    <div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  // el: '#app',
  mounted () {
    this.open()
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