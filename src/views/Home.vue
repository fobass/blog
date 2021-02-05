<template>
 <div class="home">
   <table cellpadding="5" cellspacing="5">
     <tbody>
       <tr>
         <td><CardItem/></td>
         <td><CardItem/></td>
         <td><CardItem/></td>
       </tr>
       <tr>
         <td><CardItem/></td>
         <td><CardItem/></td>
         <td><CardItem/></td>
       </tr>
    </tbody>
   </table>
 </div>
</template>
<script>
// @ is an alias to /src
import CardItem from '@/components/CardItem.vue'
export default {
  name: 'Home',
  components: {
    CardItem
  }
}
</script>
<style scoped>
/* .table, th, td {
  border: 10px solid transparent;
} */
/* .table{
  margin-left: auto;
  margin-right: auto;
} */

.table{
  background:green;
  width:50px
}

</style>
