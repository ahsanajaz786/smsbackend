<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show.sync="show"
   class="ab"
    
  >
    <CRenderFunction     flat :content-to-render="nav" 
         
    
     class="abc nav"/>
    
  </CSidebar>
</template>

<style>

.nav_color{
  color: black;
}
.c-sidebar-nav-dropdown-toggle{
  font-weight: bold;
}
.abc{
  color:black;
   background-color:white;
 
}

.c-sidebar .c-sidebar-nav-link:hover, .c-sidebar .c-sidebar-nav-dropdown-toggle:hover
{
  background-color:#F15455;
  color: black;
}
.c-sidebar .c-sidebar-nav-link, .c-sidebar .c-sidebar-nav-dropdown-toggle{
 background-color: white;
  color: black;
  font-size: 14px; 
}
.c-sidebar .c-sidebar-nav-dropdown.c-show .c-sidebar-nav-link, .c-sidebar .c-sidebar-nav-dropdown.c-show .c-sidebar-nav-dropdown-toggle {
    color:black ;
   
}
.c-sidebar .c-sidebar-nav-dropdown.c-show {
  background-color: white;
}

</style>
<script>
import nav from './_nav'
import { freeSet } from '@coreui/icons'

export default {
  name: 'TheSidebar',
  data () {
    return {
      minimize: false,
      nav,
      show: 'responsive'
    }
  },
  mounted () {
    this.$root.$on('toggle-sidebar', () => {
      const sidebarOpened = this.show === true || this.show === 'responsive'
      this.show = sidebarOpened ? false : 'responsive'
    })
    this.$root.$on('toggle-sidebar-mobile', () => {
      const sidebarClosed = this.show === 'responsive' || this.show === false
      this.show = sidebarClosed ? true : 'responsive'
    })
  }
}
</script>
