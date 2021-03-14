<template>
    <section id="intro" class="clearfix">
        <div class="container d-flex h-100">
            <div class="row justify-content-center align-self-center">
                <div class="col-md-6 intro-info order-md-first order-last">
                    <h2>Test Recruitment<br><span>A2o Dev</span></h2>
                </div>
                
                <div class="col-md-6 intro-img order-md-last order-first">
                    <img src="../assets/intro-img.svg" alt="" class="img-fluid">
                </div>
            </div>
        </div>
        
    </section>
    
</template>
<script>

export default {
    name : 'Dashboard', 

    components : {
        
    }
}
</script>
<style scoped>

.align-self-center
{
    margin-top: 100px;
}

.order-md-first
{
    margin-top: 60px;
}

#intro {
  width: 100%;
  height: 100vh;
  position: relative;
  background: #f5f8fd url("../assets/intro-bg.jpg") center top no-repeat;
  background-size: cover;
}

#intro .intro-info h2 {
  color: #413e66;
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 700;
}

#intro .intro-info h2 span {
  color: #1bb1dc;
}

#intro .intro-info .btn-get-started,
#intro .intro-info .btn-services {
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 32px;
  border-radius: 4px;
  transition: 0.5s;
  color: #fff;
  background: #1bb1dc;
  color: #fff;
}

#intro .intro-info .btn-get-started:hover,
#intro .intro-info .btn-services:hover {
  background: #0a98c0;
}

@media (max-width: 767px) {
    #intro {
        padding: 80px 0 60px 0;
    }

    #intro .container {
        height: auto !important;
    }

    #intro .intro-img {
        width: 80%;
    }

    #intro .intro-info {
        text-align: center;
        padding-top: 40px;
    }

    #intro .intro-info h2 {
        font-size: 34px;
        margin-bottom: 30px;
    }
}

</style>