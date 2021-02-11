exports.sideMenu = [
  {
    id: 1,
    title: 'General',
    icon: 'fa fa-home',
    items: [
      {
        id: 1,
        title: 'Profile',
        icon: 'fa fa-home'
      }
    ]
  },
  {
    id: 1,
    title: 'Settings',
    icon: 'fa fa-home',
    items: [
      {
        id: 1,
        title: 'User',
        icon: 'fa fa-laptop',
        items: [
          {
            id: 1,
            title: 'Baru',
            icon: null,
            route: 'admin.user',
            link: 'user'
          },
          {
            id: 2,
            title: 'List',
            icon: null
          }
        ]
      }
    ]
  }
]
