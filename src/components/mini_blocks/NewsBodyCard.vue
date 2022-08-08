<template>
  <a href="#!" class="news__body__card">
    <div class="img">
      <img src="@/assets/img/news2.jpg" />
      <div class="mask"></div>
    </div>
    <div class="body">
      <strong>Lorem ipsum dolor sit amet consectetur.</strong>
      <p class="title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non vitae
        nostrum at dolores rem similique quia cum aperiam praesentium? Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, aut.
      </p>
      <div class="bottom">
        <span class="status">Type</span>
        <p>
          <span>21 JULY,2022</span>/<span>MY JOHN</span>
          <span class="see">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-eye-fill"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path
                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
              />
            </svg>
            112
          </span>
        </p>
      </div>
    </div>
  </a>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.news__body__card {
  display: flex;
  align-items: flex-start;

  .img {
    display: flex;
    width: 210px;
    height: 175px;
    position: relative;
    flex-shrink: 0;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.5s ease;
    }
    .mask {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: linear-gradient(
        0deg,
        rgba(0, 108, 232, 0.7) 0%,
        rgba(0, 0, 0, 0.1) 40%
      );
      transition: 0.5s ease;
    }
  }
  strong {
    display: flex;
    align-items: center;
    padding: 16px 24px;
    background-color: #fafafa;
    transform: translateX(-80px);
    font-size: 24px;
    font-family: "Roboto";
    font-weight: 700;
    color: #000;
  }
  .body {
    padding: 16px 30px;
    .title {
      color: #5e5e5e;
      font-size: 15px;
      line-height: 26px;
      font-family: "Roboto";
      margin-bottom: 8px;
    }
    .bottom {
      display: flex;
      align-items: center;
      span.status {
        display: flex;
        align-items: center;
        padding: 2px 8px;
        background: rgba(0, 108, 232, 1);
        font-size: 12px;
        font-family: "Roboto";
        color: #fff;
        margin-right: 16px;
      }
      p {
        font-size: 11px;
        color: #999;
        display: flex;
        align-items: center;
        margin: 0;
        span {
          margin: 0 8px;
          &.see {
            display: flex;
            align-items: center;
            svg {
              margin-right: 5px;
            }
          }
        }
      }
    }
  }

  &:hover {
    .img {
      img {
        transform: scale(1.1);
      }
      .mask {
        top: -60px;
      }
    }
    strong {
      text-decoration: underline;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    .img {
      width: 100%;
      margin-bottom: 16px;
    }
    .body {
      padding: 16px;
    }
    strong {
      padding: 16px 24px;
      transform: translateX(0);
      margin-top: -60px;
      margin-bottom: 10px;
      border: #5e5e5e7e 1px solid;
    }
  }
}
</style>