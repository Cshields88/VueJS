export const lengthMixin = {
    computed:{
        nameLength(){
           return this.name + ' (' + this.name.length + ')';
       }
   }
}