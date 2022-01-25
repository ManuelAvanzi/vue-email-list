
new Vue ({
    el:"#app",
    data:{
        list:[],
        mail:'',
    },
    methods:{

    },

    mounted() {
      
        for(let i=0;i<10;i++){

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result)=>{
           
           this.list.push(result.data.response);
        })
    }
    }
})