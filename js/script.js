
new Vue ({
    el:"#app",
    data:{
        list:[],
        list2:[],
        
        mail:'',
        bonus:'false',
    },

    methods:{

        newList:function(){

            
            for(let i=0;i<10;i++){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result)=>{
            
            this.list2.push(result.data.response);
           })
         }
         bunus=true;
        }
    },

    mounted() {
      
        for(let i=0;i<10;i++){

           axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result)=>{
           
           this.list.push(result.data.response);
          })    
      }
    }
})