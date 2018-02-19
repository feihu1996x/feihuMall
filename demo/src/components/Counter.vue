<template>
	<div>
		<button @click="increment">+</button>
		<button v-on:click="decrement">-</button>
		<br>
		<span>{{num}}</span>
	</div>
</template>

<style>

</style>

<script>
export default {
	// 接收父组件传递过来的参数
	props: ["num"],
	data() {
			return {
				num: 0
			}
	},
	methods: {
		increment()
		{
			// this.num++;
			// 触发自定义事件
			this.$emit("incre");
		},
		decrement()
		{
			this.num--;
			// 触发自定义事件
			this.$emit("decre");
		},
	}
}
</script>
