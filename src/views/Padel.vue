<template>
    <section class="cover-page">
        <div class="wrapper wrapper--w1000 p-t-45">
            <div class="card card-5">
                <div class="card-heading">
                    <h2 class="title">Padel</h2>
                </div>
                <div class="card-body">
                    <form >
                        <div class="form-row ">
                            <div class="col-6">
                                <label for="inlineFormInput" class="col text-center"><strong>Input</strong></label>
                                <label for="inlineFormInput" class="col text-center"><strong>Do not make a line break at the end of the text</strong></label>
                                <textarea class="form-control" id="input-1" rows="8" v-model="input1"></textarea>
                            </div>
                            <div class="col-6">
                                <label for="inlineFormInput" class="col text-center"><strong>Output</strong></label>
                                <pre id="output-1" > </pre>  <!-- {{ res }} -->
                            </div>
                        </div>
                        <div class="mt-3">
                            <button type="button" @click="sendData" class="mr-2 mb-2 btn btn--pill btn-success btn-lg">save</button>
                            <button type="button" @click="resetFields" class="mr-2 mb-2 btn btn--pill btn-danger btn-lg">cleaner up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
</template>
<script>
// import PageFooter from './components/PageFooter.vue'
import axios from "axios"
export default {
    name : 'Padel',

    mounted() {
        // this.getIndex();
    },

    data() {
        return {
            input1: '',
            output1: '',
            data: [],
            category: [],
            partner: [],
            res:'',
        }
    },
    methods: {
        getIndex(){
            // axios.get('/api/demo')
            //     .then(response => {
            //         console.log(response.data);
            //         this.res = response.data;
            //     })
            //     .catch(error => {
            //         console.error(JSON.stringify(error));
            //     });
        },

        sendData() {
            
            try {
                this.data = this.input1.split('\n', 54);
                this.getData(this.data);
                var info = {
                    entry: this.data,
                    data: this.category,
                    partner: this.partner
                };
                console.log(info);   
                axios.post('/api/winner', info)
                .then(response => {
                    console.log(response.data);//this.getIndex();
                })
                .catch(error => {
                    console.error(JSON.stringify(error));
                });
            } catch (error) {
                console.error(error);
            }
        },

        getData(info) {
            // info.forEach(element => {
            //     if (element != 'FIN' && element.length < 17) {
            //         this.category.push(element );
            //     }
            // });
            
            for (let i = 0; i < info.length; i++) {
                const e = info[i];
                if (e != 'FIN' && e.length < 17 ) {
                    this.category.push(e);
                }
                
                if (e != 'FIN' && e.length > 16) {
                    var h = e.indexOf(' ', 0);
                    var p = new Object();
                    p['partner'] = e.slice(' ', h);
                    p['category'] = this.category.length - 1;
                    this.partner.push(new Object(p)); 
                }
                
            }
        },
        resetFields() {
            this.input1 = '';
            this.output1 = '';
            this.data = [];
            this.category = [];
            this.partner = [];
        }
    },

    components : {

    }
};
</script>
<style >
.cover-page
{
    width: 100%;
    height: 100vh;
    position: relative;
    background: #f5f8fd url('../assets/fondo.jpg') center top no-repeat;
    background-size: cover;

}

.title 
{
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    color: #fff;
}

.p-t-45 
{
    padding-top: 160px;
}

.card 
{
     -webkit-border-radius: 3px;
     -moz-border-radius: 3px;
     border-radius: 3px;
     background: #fff;
}

.card-5 
{
    background: #fff;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
}

.card-5 .card-heading 
{
    padding: 20px 0;
    background: #1a1a1a;
    -webkit-border-top-left-radius: 10px;
    -moz-border-radius-topleft: 10px;
    border-top-left-radius: 10px;
    -webkit-border-top-right-radius: 10px;
    -moz-border-radius-topright: 10px;
    border-top-right-radius: 10px;
}

.card-5 .card-body 
{
    padding: 25px 15px;
    padding-bottom: 30px;
}

.wrapper 
{
  margin: 0 auto;
}

.wrapper--w1000 
{
  max-width: 1000px;
}

.btn 
{
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

.btn--pill 
{
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
}

.btn--green 
{
  background: #57b846;
}

.btn--green:hover 
{
  background: #4dae3c;
}

.btn--red 
{
  background: #ff4b5a;
}

.btn--red:hover 
{
  background: #eb3746;
}

</style>