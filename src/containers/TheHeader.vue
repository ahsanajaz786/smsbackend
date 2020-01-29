<template>
  <CHeader fixed with-subheader  style="height:80px;width:100%;border: none;">
    
  <div style="width:20%;height:50px;margin-left:20px;margin-bottom:20px;">
   <img src="../assets/img/logo_app.png" width="25%"> 
   </div>
    <div style="width:60%"></div>

    <div class="header" style="float:right; margin-top: 30px;font-size: 15;
  font-weight: bold">
       Notifications 
      
        <img style="margin-left:20px;margin-bottom:10px;" src="../assets/img/icon-user.png">
      
     <a  class="danger"  style="color:#F15455;margin-left:20px;"
     href="/#/login"
                      >
                      
   Log Out
            </a> 

   </div>
    
 
  </CHeader>
</template>
<style>
.header{
  align-items: center;
 
  float: right;
  font-size: 15;
  font-weight: bold
}
</style>
<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

export default {
  name: 'TheHeader',
  components: {
  //  TheHeaderDropdownAccnt
  }
}
</script>
