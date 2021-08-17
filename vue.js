const app = Vue.createApp({
    data(){
        return {
          buy:10,
          sell:15,
          amount:1000,
          self:0.6,
          stock:0.003
        }
    },
    computed:{
        comArray(){
            let array = [];
            
            for(i=0;i<=8;i++){
                array[i]=(this.sell-2)+0.5*i
            }
            return array
        }
    }
})



app.mount('#container')