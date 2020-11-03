<template>
<footer class="footer">
  <div class="bg-primary text-light">
    <div class="container">
      <div class="row">
        <div class="col d-flex flex-column align-items-center py-4">
          <h4 class="font-weight-bold mb-4">聯絡我們</h4>
          <ul class="h5 footer-list d-flex flex-column align-items-center mb-2">
            <li>
              <a href="mailto:icelifed@outlook.com" class="d-flex">
                <i class="fas fa-envelope mr-2"></i><p>icelife@outlook.com</p>
              </a>
            </li>
            <li>
              <a href="tel:+886910123456" class="d-flex">
                <i class="fas fa-phone-alt mr-2"></i><p>0910-123456</p>
              </a>
            </li>
            <li class="mb-3">
                <a href="#" class="d-flex">
                  <i class="fas fa-map-marker-alt mr-2"></i>
                  <p>桃園市桃園區艾思路666號</p>
                </a>
            </li>
            <li>
              <p>
                2020 &copy; IceLife | 非商業用途，僅做為個人學習使用
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.footer-list {
  list-style-type: none;
  padding-inline-start: 0px;
  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
    &:hover {
      font-size: 18px;
      font-style:italic;
    }
  }
}
</style>
