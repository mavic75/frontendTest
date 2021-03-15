<template>
    <section class="cover-page">
        <div class="wrapper wrapper--w1000 p-t-45">
            <div class="card card-5">
                <div class="card-heading">
                    <h2 class="title">CHESS</h2>
                </div>
                <div class="card-body">
                    <form action="POST">
                        
                        <div class="form-row ">
                            <div class="col-6">
                                <label for="inlineFormInput" class="col text-center"><strong>Input</strong></label>
                                <textarea class="form-control" id="input-2" rows="8"></textarea>
                            </div>
                            <div class="col-6">
                                <label for="inlineFormInput" class="col text-center"><strong>Output</strong></label>
                                <pre id="output-2" ></pre>
                            </div>
                        </div>
                        <div class="mt-3">
                            <button type="button" class="mr-2 mb-2 btn btn--pill btn-success btn-lg">save</button>
                            <button type="button" class="mr-2 mb-2 btn btn--pill btn-danger btn-lg">cleaner up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
</template>
<script>

export default {
    name : 'Chess',


    components : {
        
    }
};
</script>
<style scoped>

.cover-page
{
    width: 100%;
    height: 100vh;
    position: relative;
    background: #f5f8fd url('../assets/fondo.jpg') center top no-repeat;
    background-size: cover;

}

.title {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    color: #fff;
}

.p-t-45 {
    padding-top: 160px;
}

.card {
     -webkit-border-radius: 3px;
     -moz-border-radius: 3px;
     border-radius: 3px;
     background: #fff;
}

.card-5 {
    background: #fff;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
}

.card-5 .card-heading {
    padding: 20px 0;
    background: #1a1a1a;
    -webkit-border-top-left-radius: 10px;
    -moz-border-radius-topleft: 10px;
    border-top-left-radius: 10px;
    -webkit-border-top-right-radius: 10px;
    -moz-border-radius-topright: 10px;
    border-top-right-radius: 10px;
}

.card-5 .card-body {
    padding: 25px 15px;
    padding-bottom: 30px;
}

.wrapper {
  margin: 0 auto;
}

.wrapper--w1000 {
  max-width: 1000px;
}

.btn {
  display: inline-block;
  line-height: 50px;
  padding: 0 50px;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
  cursor: pointer;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  font-family: inherit;
}

.btn--pill {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
}

.btn--green {
  background: #57b846;
}

.btn--green:hover {
  background: #4dae3c;
}

.btn--red {
  background: #ff4b5a;
}

.btn--red:hover {
  background: #eb3746;
}

</style>