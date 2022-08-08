<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div data-aos="fade-up" class="card b-1 hover-shadow mb-20">
            <div class="media card-body">
              <div class="media-left pr-12">
                <img
                  class="avatar avatar-xl no-radius"
                  src="@/assets/img/icons/user.png"
                  alt="..."
                />
              </div>
              <div class="media-body flex-grow-1">
                <div class="info">
                  <div class="">
                    <span class="fs-20">Ism Familiya Sharif</span>
                  </div>
                  <small class="fs-16 fw-300 ls-1 mx-3">Tashkitot nomi</small>
                  <small class="fs-16 fw-300 ls-1">Mutahasisligi</small>
                </div>
                <p class="fs-14 text-fade mb-0 d-flex align-items-center">
                  <i class="bi bi-geo-alt-fill"></i> Menlo Park, CA
                </p>
              </div>
            </div>
            <div class="card-footer flexbox align-items-center">
              <div>
                <strong>Applied on:</strong>
                <span>21 Jan, 2017</span>
              </div>
              <div class="card-hover-show">
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <ul class="pagination justify-content-center">
          <li class="page-item active">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">4</a></li>
          <li class="page-item"><a class="page-link" href="#">5</a></li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css";

.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  * {
    margin-bottom: 0;
    line-height: 16px;
  }
  margin-bottom: 8px;
}

.pr-12 {
  padding-right: 12px !important;
}
i.bi {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px !important;
  margin-right: 5px;
}
.card * {
  font-family: "Roboto", sans-serif;
}

.card-hover-show a {
  border-radius: 4px !important;
}

.mb-20 {
  margin-bottom: 20px !important;
}

.b-1 {
  border: 1px solid #ebebeb !important;
}

.card {
  border: 0;
  border-radius: 0;
  margin-bottom: 30px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.media {
  padding: 16px 12px;
  -webkit-transition: background-color 0.2s linear;
  transition: background-color 0.2s linear;
}

.media {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
}

.card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
}

.media .avatar {
  flex-shrink: 0;
}

.no-radius {
  border-radius: 0 !important;
}

.avatar-xl {
  width: 64px;
  height: 64px;
  line-height: 64px;
  font-size: 1.25rem;
}

.avatar {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 60px;
  line-height: 36px;
  text-align: center;
  border-radius: 100%;
  background-color: #f5f6f7;
  color: #8b95a5;
  text-transform: uppercase;
}

img {
  max-width: 100%;
}

img {
  vertical-align: middle;
  border-style: none;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.fs-20 {
  font-size: 20px !important;
}

.pr-16 {
  padding-right: 16px !important;
}

.ls-1 {
  letter-spacing: 1px !important;
}

.fw-300 {
  font-weight: 300 !important;
}

.fs-16 {
  font-size: 16px !important;
}

small,
time,
.small {
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 11px;
  color: #8b95a5;
}

.fs-14 {
  font-size: 14px !important;
}

.mb-12 {
  margin-bottom: 12px !important;
}

.text-fade {
  color: rgba(77, 82, 89, 0.7) !important;
}

.card-footer:last-child {
  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}

.card-footer {
  background-color: #fcfdfe;
  border-top: 1px solid rgba(77, 82, 89, 0.07);
  color: #8b95a5;
  padding: 10px 20px;
}

.flexbox {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.align-items-center {
  -ms-flex-align: center !important;
  align-items: center !important;
}

.card-footer {
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}

.card-footer {
  background-color: #fcfdfe;
  border-top: 1px solid rgba(77, 82, 89, 0.07);
  color: #8b95a5;
  padding: 10px 20px;
}

.card-footer > *:last-child {
  margin-bottom: 0;
}

.hover-shadow {
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.11);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.11);
}

.fs-10 {
  font-size: 10px !important;
}
</style>