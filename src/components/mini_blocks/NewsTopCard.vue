<template>
  <a href="#!" class="news-top-card">
    <img src="@/assets/img/news1.jpg">
    <div class="mask">  </div>
    <div class="body">
      <span class="status"> Type </span>
      <strong>Lorem ipsum dolor sit amet consectetur.</strong>
      <p><span>24 july, 2022</span> / <span>BY JOHN</span></p>
    </div>
  </a>
</template>

<script>
export default {};
</script>

<style lang="scss">
.news-top-card {
  display: flex;
  align-items: flex-end;
  position: relative;
  height: 287px;
  padding: 16px 24px;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s ease;
    object-fit: cover;
  }
  
  .body{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    span.status {
      display: flex;
      align-items: center;
      padding: 2px 8px;
      background: rgba(0, 108, 232, 1);
      font-size: 12px;
      font-family: 'Roboto';
      color: #FFF;
      margin-bottom: 12px;
    }
    strong {
      font-size: 18px;
      font-family: 'Roboto';
      font-weight: 700;
      color: #FFF;
      margin-bottom: 12px;
    }
    p {
      display: flex;
      align-items: center;
      margin-bottom: 0;
      font-size: 12px;
      font-weight: 500;
      font-family: 'Roboto';
      color: #FFF;
      span {
        display: flex;
        align-items: center;
        &:first-child {
          margin-right: 10px;
        }
        &:last-child {
          margin-left: 10px;
        }
      }
    }
  }
  .mask {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(0deg, rgba(0, 108, 232, 0.7) 0%, rgba(0, 0, 0, 0.1) 50%);
    transition: 0.5s ease;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
    .mask {
      top: -100px;
    }
    strong {
      text-decoration: underline;
    }
  }
}
</style>