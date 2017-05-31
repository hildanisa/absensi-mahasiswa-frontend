export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
      path: 'tables',
        data: {
          menu: {
            title: 'Home',
            icon: 'ion-android-home',
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
