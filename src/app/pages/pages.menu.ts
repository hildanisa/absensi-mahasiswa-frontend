export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'tables',
        data: {
          menu: {
            title: 'general.menu.tables',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0,
          }
        }
      },
      {
      path: 'tables',
        data: {
          menu: {
            title: 'Home',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        
        children: [
           {
             path: 'hottables',
             data: {
               menu: {
                 title: 'Daftar Absensi',
               }
             }
           }
        ]
      },
      
     
    ]
  }
];
