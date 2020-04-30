<template>
<div class="quick-details container">
    <div class="details-title">Quick Details</div>
    <div class="details">
        <div class="detail">
            <div class="detail-description">
                <img src="images/hours icon.png" alt="">
                <span class="text-opacity">Last 24 Hours</span>
            </div>
            <div class="detail-value">290 new customers</div>
        </div>
        <div class="detail">
            <div class="detail-description">
                <img src="images/awaiting icon.png" alt="">
                <span class="text-opacity">Awaiting Process</span>
            </div>
            <div class="detail-value">490 orders</div>
        </div>
        <div class="detail">
            <div class="detail-description">
                <img src="images/on hold icon.png" alt="">
                <span class="text-opacity">On Hold</span>
            </div>
            <div class="detail-value">120 orders</div>
        </div>
        <div class="detail">
            <div class="detail-description">
                <img src="images/stock icon.png" alt="">
                <span class="text-opacity">Low in Stock</span>
            </div>
            <div class="detail-value">490 orders</div>
        </div>
        <div class="detail">
            <div class="detail-description">
                <img src="images/out of stock icon.png" alt="">
                <span class="text-opacity">Out of Stock</span>
            </div>
            <div class="detail-value">42 items</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'SideContent'
}
</script>

<style>
.home .home-wrapper .home-content .quick-details {
  width: 32%;
  padding: 1em;
}

.home .home-wrapper .home-content .quick-details .details-title {
  font-size: 1.125rem;
  line-height: 13px;
  margin: 1em 0;
}

.home .home-wrapper .home-content .quick-details .details .detail {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 80px;
}

.home .home-wrapper .home-content .quick-details .details .detail .detail-description {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: 0.8125rem;
  line-height: 20px;
}

.home .home-wrapper .home-content .quick-details .details .detail .detail-description img {
  margin-right: 1em;
}

.home .home-wrapper .home-content .quick-details .details .detail .detail-value {
  font-size: 0.9375rem;
  line-height: 25px;
}

@media (max-width: 768px) {
  .home .home-wrapper .home-content .quick-details {
    width: 100%;
  }
}
</style>