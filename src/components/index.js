menus: [
    {
        key: 'ad',
        path: '/admin/ad/0',
        name: '广告列表',
        icon: '333'
      },
]



generateMenu = function(menus) {
    let items = [];
    items = menus.map(menu => (
      <Breadcrumb.Item key={menu.key}>
        <Link to={menu.path}>
          {menu.icon ? <Icon type={menu.icon} /> : null}
          <span className="nav-text">{menu.name}</span>
        </Link>
      </Breadcrumb.Item>
    ));
    return items;
  };


  <Breadcrumb>{generateMenu(menus)}</Breadcrumb>

