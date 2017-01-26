<template>
  <div class="row row-narrow">
		<div class="col-xs-8">
			<div id="product-cards" class="product-cards" data-equal-height=".product-card--standard .product-title">
        <div class="row row-narrow">		
						<div v-for="(item, index) in productList" class="product-card product-card--standard">
							<div class="panel panel-default panel-product">
								<div class="panel-body">
									<!-- <img src="https://drjaosdejw578.cloudfront.net/tw/static/1480435835091/assets/886/products/1540.png?" class="img-block"> -->
                  <img src="../assets/mac/1044.png" class="img-block">
									<h5 class="product-title" style="height: 19px;">{{item.name}}</h5>
									<div class="product-badges">
										<span class="food-icons-sprite food-icons-new ir"></span>
									</div>
								</div>
								<div class="panel-footer">
									<div class="row row-narrow">
										<div class="col-xs-6">
											<div class="product-details">
												<div class="product-cost">
													價格 <span class="starting-price">NT${{item.price}}</span>起
												</div>
												<div class="product-nutritional-info">						
												</div>
											</div>
										</div>
										<div class="product-controls">
												<a data-productid="789" href="#signin" data-toggle="modal" data-target="#signin" class="btn btn-block action-create btn-red" onclick="onProductClick({ 'name':&quot;韓式炸雞堡&quot;,'id':'31367','price':'NT$95','brand':'McDonalds','cat':&quot;單點和超值全餐&quot;,'variant':'','url':'#signin'})">訂購</a>												
										</div>
									</div>
								</div>
							</div>
						</div>	
  				</div>
  		</div>
  </div>
		<div class="col-xs-4">
			<div class="panel panel-basic panel-narrow">
				<div class="panel-section-group">
					<section class="panel-section how-it-works">
						<a data-toggle="modal" data-target="#signin"><img src="https://drjaosdejw578.cloudfront.net/tw/static/1470850780658/assets/886/img/how_mcdelivery_works_portrait_zh.png"></a>
					</section>
															
				</div>
			</div>
		</div>
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'shoppingCar',
  data () {
    return {
      
    }
  },
  computed: {
    ...mapGetters({
      productList: 'getProductList'
    })
  }
}

</script>
<style scoped lang="scss" src=".././css/shoppingcar.scss" />