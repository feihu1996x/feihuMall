<template>
	<div>
		这是商品列表页面
		<span>{{$route.params.goodsId}}</span>
		<br>
		<span>{{$route.params.username}}</span>
		<router-link to="/goods/image">商品图片</router-link>
		<router-link to="/goods/title">商品标题</router-link>
		<div>
			<router-view/>
		</div>
		<!-- <button v-on:click="jumpToCart">跳转到购物车页面</button> -->
		<!-- 使用命名路由 -->
		<router-link v-bind:to="{name: 'Cart', params:{cartId:123}}">调转到购物车页面</router-link>
	</div>
</template>

<style>

</style>

<script>
export default {
	data()
	{
		return {
			msg: "goodList"
		}
	},
	methods: {
		jumpToCart()
		{
			// this.$router.push("/cart")
			// this.$router.push({path: '/cart'})
			this.$router.push({path: '/cart?goodsId=123'})
		}
	}
}
</script>

