<template>
  <CContainer class="align-items-center min-vh-100" style="margin-top:1%; background-color: #F15455;width:100%">
    <CRow class="row">
      <CCol class="col-md-3" ></CCol> 
      <CCol class="col-md-6" >
       
          <CCard 
           
          
          >
            <CCardBody >
            
            
                        <div class="align-items-center; " style=" margin: auto;
  width: 27%;" >
                           <img style="width:150px;align-item:center" src="../../assets/img/logo_app.png">

   </div>
              <CForm style="width:100%" >
        <h1 class="f">Login</h1>
                <p class="text-muted" >Sign In to your account</p>
                <CInput
                  placeholder="Username"
                  autocomplete="username email"
                  v-model="adminlogin.Email"
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  placeholder="Password"
                  type="password"
                  autocomplete="curent-password"
                  v-model="adminlogin.password"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CRow>
                  <CCol >
                    <CButton color="danger" style="width:150px" v-on:click="login" class="px-4">Login</CButton>
                  </CCol>
                  <CCol  class="text-right danger">
                    <CButton color="link" class="danger" style="color:#F15455">Forgot password?</CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        
       
      </CCol>
    </CRow>
  </CContainer>
</template>
<style  scope>
html body{
  height: 80%;
}
body{
  overflow: hidden;


  margin: auto;
  margin-top: 10%;
  background-color: #F15455;
}
.f{
  font-weight: bold;
}


</style>
<script>

import axios from 'axios';
export default {
  name: 'Login',
  data(){
    return {
      adminlogin:{
        Email:'',password:''

      }
    }
  },
  methods:{

login()
{
  var vm=this
          axios.post('http://217.61.21.52/api/Account/Login'
       ,vm.adminlogin
          )
    .then(response => {
      // JSON responses are automatically parsed.
      if(response.data==="admin")
      {
     window.location.href = '/?id=1' 
     }
  else{
    alert("Wrong")
  }
    })
    .catch(e => {
        alert(e)
      this.errors.push(e)
    })

}
  }
}
</script>
