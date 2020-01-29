export default [
  {
    _name: 'CSidebarNav',
    _children: [
     
      {
        _name: 'CSidebarNavDropdown',
        name: 'School',
        route: '/base',
        icon: 'cil-home',
          class:'a',
        
        items: [
          
          {
            name: 'School List',
            to: '/base/School',
            icon: 'cil-list-rich'
          },
          {
            name: 'Add School',
            to: '/base/AddSchool',
            icon: 'cil-plus'
          }
          ,
         
         
          {
            name: ' Add School Year',
            to: '/base/SchoolYear',
            icon: 'cil-plus'
          }
          ,
         
         
        ]
      },
     
   
    
   
      
    
   
    ]
  }
]