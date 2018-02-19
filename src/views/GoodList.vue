<template>
	<div class="good-list">
		<nav-header></nav-header>

		<BreadCrumb>
			<span>Goods</span>
		</BreadCrumb>

		<div class="accessory-result-page accessory-page">
			<div class="container">
				<div class="filter-nav">
					<span class="sortby">Sort by:</span>
					<a href="javascript:void(0)" class="default cur">Default</a>
					<a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
					<a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
				</div>
				<div class="accessory-result">
					<!-- filter -->
					<div class="filter stopPop" id="filter" v-bind:class="{'filterby-show': filterBy}">
						<dl class="filter-price">
						<dt>Price:</dt>
						<dd><a href="javascript:void(0)" v-bind:class="{'cur':priceChecked==='all'}">All</a></dd>
						<dd v-for="(item,index) in priceFilter" v-bind:key="index" @click="setPriceFilter(index)">
							<a href="javascript:void(0)" v-bind:class="{'cur':priceChecked===index}">{{item.startPrice}}- {{item.endPrice}}</a>
						</dd>
						</dl>
					</div>

				<!-- search result accessories list -->
				<div class="accessory-list-wrap">
					<div class="accessory-list col-4">
					<ul>
						<li v-for="item in goodsList" v-bind:key="item.productId">
							<div class="pic">
								<a href="#"><img v-lazy="'/static/'+item.prodcutImg" alt=""></a>
							</div>
							<div class="main">
								<div class="name">{{item.productName}}</div>
								<div class="price">{{item.prodcutPrice}}</div>
								<div class="btn-area">
								<a href="javascript:;" class="btn btn--m">加入购物车</a>
								</div>
							</div>
						</li>
					</ul>
					</div>
				</div>
				</div>
			</div>
		</div>

		<!-- overLay -->
		<div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>

		<nav-footer></nav-footer>

	</div>
</template>

<script>
//  导入样式文件
import "./../assets/css/base.css"
import "./../assets/css/product.css"
import "./../assets/css/login.css"

//  导入组件
import NavHeader from "@/components/Header"
import NavFooter from "@/components/Footer"
import BreadCrumb from "@/components/BreadCrumb"

export default {
	data(){
		return {
			msg : "Hello, World!",
			goodsList : [],
			priceFilter : [] ,
			priceChecked: 'all',
			filterBy : false,
			overLayFlag: false
		}
	},
	components: {
		NavHeader : NavHeader,
		NavFooter: NavFooter,
		BreadCrumb: BreadCrumb,
	},
	mounted()
	{
		// console.log("mounted!")
		this.getGoodsList();
		this.getPriceFilter();
	},
	methods:{
		getGoodsList()
		{
			let goods = require("./../../mock/goods.json");
			this.goodsList = goods.result
		},
		getPriceFilter()
		{
			let filters = require("./../../mock/priceFilter.json");
			this.priceFilter = filters.result;
		},
		showFilterPop()
		{
			this.filterBy = true;
			this.overLayFlag = true;
		},
		setPriceFilter(index)
		{
			this.priceChecked = index;
			this.closePop();
		},
		closePop()
		{
			this.filterBy = false;
			this.overLayFlag = false;
		}
	}
}
</script>

<style>

</style>

