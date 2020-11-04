<template>
  <div class="homepage">
      <!-- 首頁置頂圖開始 -->
      <div class="homepage-banner-bg  d-flex justify-content-center align-items-center">
        <div class="container">
          <div class="row">
            <div class="col d-flex justify-content-center align-items-center">
              <div class="text-center text-light p-5">
                <h2 class="homepage-banner-title mb-4">IceLife</h2>
                <h4 class="mb-4">優質冰品，最好的選擇</h4>
                <router-link
                  class="btn btn-lg btn-primary px-5"
                  :to="{ name: '前台產品頁面'}"
                  >
                  立即購買
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 首頁置頂圖結束 -->

      <!-- 商品展示圖開始 -->
      <section class="mb-4 bg-light">
        <div class="container py-5">
          <h2 class="subtitle font-weight-bold text-center">
              系列商品推薦
          </h2>
          <div class="row py-4" data-aos="fade-up">
            <div class="col-lg-6 mb-3">
              <a class="rotated d-block bg-white p-4"
                 @click.prevent="toCategory('甜入你心')"
                 href="#"
                 style="text-decoration:none">
                <div class="d-flex">
                  <img class="imgsz" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/91fxEPvMLQLwgRhJf35uJt75GyN3Tzw0VSisbQFGlkrw0y7yT8XKxSRRM0QBqyAMHny0t89gBRRubqYwU62E2yfl3NfzT09UL1ZcX2ieNcvfeh5OuufjxpMmG4xT9rYx.jpg" alt="">
                  <div class="d-flex flex-column">
                    <h5 class="font-weight-bold">
                      甜入你心系列
                    </h5>
                    <p class="text-secondary mb-auto">
                      甜入你心系列 2018 奪得全國甜點金獎，
                      不論男女老少咸宜，喚起你的童年！
                    </p>
                    <button type="button"
                            class="btn btn-primary rounded adbtn"
                            >立即逛
                    </button>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-6 mb-3">
              <a class="rotated d-block bg-white p-4"
                 @click.prevent="toCategory('成熟午後')"
                 href="#"
                style="text-decoration:none">
                <div class="d-flex">
                  <img class="imgsz" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/L1Ps9GdSyBypZSDYe98EjgMBgEm1m10IF4cUnChO5sorufYFhEllQa9y0lWhRzM3uhFCGYA8XFRf08oUMvIeAvd6v8BuOQOfBoijinH59XrAmKJDGCM97x2nnnqrmFMl.jpg" alt="">
                  <div class="d-flex flex-column">
                    <h5 class="font-weight-bold">
                      成熟午後系列
                    </h5>
                    <p class="text-secondary mb-auto">
                      工作累了，想要來點冰品嗎？
                      成熟午後系列冰品，讓你享有午後放鬆的時光。
                    </p>
                    <button type="button"
                            class="btn btn-primary rounded adbtn"
                            >放鬆去
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <!-- 商品展示圖結束 -->

      <!-- 介紹開始 -->
      <section>
        <div class="container py-5">
          <h2 class="subtitle font-weight-bold text-center">
              三大保證
          </h2>
          <div class="row" data-aos="fade-up">
            <div class="col-sm-12 col-md-4">
              <div class="d-flex flex-column align-items-center p-4">
                <i class="fas fa-hand-sparkles iconsz text-primary mb-3"></i>
                <h3 class="font-weight-bold">純淨</h3>
                <p class="produce-content">
                  產品鮮乳採用「低溫長時間殺菌(LTLT)」，保留維生素和乳清蛋白等營養成分
                  維持鮮乳本身的營養完整度。
                </p>
              </div>
            </div>
            <div class="col-sm-12 col-md-4">
              <div class="d-flex flex-column align-items-center p-4">
                <i class="fas fa-tint-slash iconsz text-primary mb-3"></i>
                <h3 class="font-weight-bold">濃郁</h3>
                <p class="produce-content">
                  IceLife 香濃冰淇淋，製造過程100%使用紐西蘭純鮮乳，
                  不加入任何一滴水，口感綿密、入口即化。
                </p>
              </div>
            </div>
            <div class="col-sm-12 col-md-4">
              <div class="d-flex flex-column align-items-center p-4">
                <i class="fas fa-thumbs-up iconsz text-primary mb-3"></i>
                <h3 class="font-weight-bold">安全</h3>
                <p class="produce-content">
                  生產工廠已通過 ISO22000 與 HACCP 國際認證。
                  全部產品已投保一億產品責任險，讓您吃得安心。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 介紹卡片結束 -->

      <!-- 優惠券活動開始 -->
      <section class="coupon">
        <div class="coupon-banner-bg d-flex justify-content-center align-items-center">
          <div class="coupon-banner-content d-flex flex-column justify-content-center">
            <h2 class="font-weight-bold text-primary text-center mb-4">
              IceLife 週年慶活動進行中！
            </h2>
            <router-link
              class="btn btn-lg btn-cyan"
              :to="{ name: '優惠活動進行中'}"
            >
              立刻取得優惠券
            </router-link>
          </div>
        </div>
      </section>
      <!-- 優惠券活動結束 -->

      <!-- 前往頂部 -->
    <ScrollTopArrow></ScrollTopArrow>
  </div>
</template>

<script>
import ScrollTopArrow from '@/components/ScrollTopArrow.vue';

export default {
  name: 'HomePage',
  components: {
    ScrollTopArrow,
  },
  data() {
    return {
      coupon: ['icelife5', 'icelife8', 'icelife9'],
      tempCoupon: '',
      copytempCoupon: '',
      copyResult: '',
    };
  },
  methods: {
    toCategory(Name) {
      this.$router.push({
        name: '前台產品頁面',
        params: { categoryName: Name },
      });
    },
  },
};
</script>

<style lang="scss" scope>
  .subtitle {
    color: #6f6f6f;
    padding: 30px 0;
  }
  .homepage {
    min-height: 100vh;
    &-banner-bg {
      max-width: 100%;
      min-height: 50vh;
      background-size: cover;
      background-position: center;
      background-image: url("https://hexschool-api.s3.us-west-2.amazonaws.com/custom/d9cAZq25cCtZa6aqkTKCF7OIz775c9JTWEvoAsG4AQaxfdYnL40eJ1f8XWD3hqvhR6UsiipzNzXh5paEdeSnCDaWrWuOBTN5ib6kzuGZ3tCRDlvMDrkmtxQ4YTiRbCkn.jpg");
    }
    &-banner-title {
      font-family: 'Fugaz One', cursive;
      font-size: 64px;
    }
  }
  .imgsz {
    max-width: 150px;
    max-height: 150px;
    margin-right: 16px;
  }
  .adbtn {
    width: 25%;
  }
  .hotproduct {
    position: relative;
    img {
      width: 100%;
    }
  }
  .rotated {
    &:hover {
      transform: rotate(-5deg);
    }
  }
  .iconsz {
    font-size: 80px;
  }
  .produce-content {
    letter-spacing: 2px;
  }
  .coupon {
    &-banner-bg {
      max-width: 100%;
      min-height: 60vh;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-image: url("https://hexschool-api.s3.us-west-2.amazonaws.com/custom/YcM1OZCYNtrq03qu0YtDv33BGqr6MhH8MQcMEcoiEREpHtVCJta5BSewlLzM0pk8Sw3b6iKZ1c197cSq61jrNnqZLRo94hD9Ggafp0wpTvhdNFxy6t9wIvBJpDnDclSH.jpg");
    }
     &-banner-content {
       padding: 60px;
       border-radius: 8px;
       background: rgba(255, 255, 255, .8);
       &:hover {
         transition: all 0.3s cubic-bezier(.25,.8,.25,1);
         box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
         transform: scale(1.1);
       }
     }
  }

</style>
