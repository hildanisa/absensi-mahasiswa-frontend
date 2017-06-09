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

    {
      path: 'new',  // path for our page
      data: { // custom menu declaration
        menu: {
          title: 'New Page', // menu title
          icon: 'ion-android-home', // menu icon
          pathMatch: 'prefix', // use it if item children not displayed in menu
          selected: false,
          expanded: false,
          order: 0
        }
      },
      children: [
        {
          path: 'inputan',
          data: {
            menu: {
              title: 'inputan',
            }
          }
        },
        {
          path: 'datatables',
          data: {
            menu: {
              title: 'Data Tables',
            }
          }
        },

      ]
    },

    {
      path: 'input',
      data: {
        menu: {
          title: 'general.menu.input',
          icon: 'ion-android-home',
          selected: false,
          expanded: false,
          order: 500,
        }
      },
      },


      {
        path: 'tables',
        data: {
          menu: {
            title: 'general.menu.tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'smart',
              }
            }
          },
          {
            path: 'datatables',
            data: {
              menu: {
                title: 'Rekapitulasi',
              }
            }
          },
        ]
      },

    ]
  }
];
