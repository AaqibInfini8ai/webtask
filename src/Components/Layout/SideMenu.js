
import Dashboard from '../../assets/sidebar/dashboardlogo.png'
import Pickup from '../../assets/sidebar/pickup.png'
import DeliverySheet from '../../assets/sidebar/delivery.png'
import Manifest from '../../assets/sidebar/boy-2.png'
import Orderdeliver from '../../assets/sidebar/orderdeliver.png'
import Revenue from '../../assets/sidebar/revenue.png'
import Courier from '../../assets/sidebar/courier.png'
import Supervisor from '../../assets/sidebar/supervisor2.png'


let SideMenu = [
  {
    key: 1,
    value: 'Dashboard',
    label: 'Dashboard',
    icon: 'icon-home',
    image: Dashboard,
    active: true,
    rights: true,
    path: '/dashboard',
    isSubMenuOpen: false,
    SubMenu: [],
  },
  {
    key: 2,
    value: 'Pickups',
    label: 'Pickups',
    icon: 'icon-diamond',
    image: Pickup,
    active: false,
    rights: true,
    isSubMenuOpen: false,
    path: '/allpickup',
    SubMenu: [
      {
        key: 21,
        value: 'AllPickup',
        label: 'AllPickup',
        // icon: "",
        // image: database,
        active: false,
        rights: true,
        path: '/allpickup',
      },
      {
        key: 22,
        value: 'TodayPickup',
        label: 'TodayPickup',
        // icon: "",
        // image: client,
        active: false,
        rights: true,
        path: '/todaypickup',
      },

    ],
  },
  {
    key: 3,
    value: 'Manifest',
    label: 'Manifest',
    icon: 'icon-coding',
    image: Manifest,
    active: false,
    rights: true,
    isSubMenuOpen: false,
    path: '/todaymenifest',
    SubMenu: [
      {
        key: 31,
        value: 'TodaysManifest',
        label: 'TodaysManifest',
        // icon: "",
        // image: database,
        active: false,
        rights: true,
        path: '/todaymenifest',
      },
      {
        key: 32,
        value: 'AllManifest',
        label: 'AllManifest',
        // icon: "",
        // image: client,
        active: false,
        rights: true,
        path: '/allmenifest',
      },
      {
        key: 33,
        value: 'ManifestHistory',
        label: 'ManifestHistory',
        // icon: "",
        // image: client,
        active: false,
        rights: true,
        path: '/historymenifest',
      },
    ],


  },
  {
    key: 4,
    value: 'DeliverySheet',
    label: 'DeliverySheet',
    icon: 'icon-coding',
    image: DeliverySheet,
    active: false,
    rights: true,
    isSubMenuOpen: false,
    path: '/devilerysheet',
    SubMenu: [],


  },

  {
    key: 5,
    value: 'Access',
    label: 'Access',
    icon: 'icon-coding',
    image: DeliverySheet,
    active: false,
    rights: true,
    isSubMenuOpen: false,
    path: '/access',
    SubMenu: [],
  },
  {
    key: 6,
    value: 'OrdersPending',
    label: 'OrdersPending',
    icon: 'icon-coding',
    image: Orderdeliver,
    active: false,
    rights: true,
    isSubMenuOpen: false,
    path: '/orderpending',
    SubMenu: [],
  },

  {
    key: 7,
    value: 'OrdersDelivered',
    label: 'OrdersDelivered',
    icon: 'icon-coding',
    image: Orderdeliver,
    active: false,
    rights: true,
    isSubMenuOpen: false,
    path: '/orderdeliver',
    SubMenu: [],
  },
  {
    key: 8,
    value: 'Revenue',
    label: 'Revenue',
    icon: 'icon-coding',
    image: Revenue,
    active: false,
    rights: true,
    isSubMenuOpen: false,
    path: '/revenue',
    SubMenu: [],
  },
  {
    key: 9,
    value: 'Couriers',
    label: 'Couriers',
    icon: 'icon-coding',
    image: Courier,
    active: false,
    rights: true,
    isSubMenuOpen: false,
    path: '/couriers',
    SubMenu: [],
  },
  {
    key: 10,
    value: 'Supervisors',
    label: 'Supervisors',
    icon: 'icon-coding',
    image: Supervisor,
    active: false,
    rights: true,
    isSubMenuOpen: false,
    path: '/supersiors',
    SubMenu: [],
  },
  {
    key: 11,
    value: 'Logout',
    label: 'Logout',
    icon: 'icon-coding',
    image: Supervisor,
    active: false,
    rights: true,
    isSubMenuOpen: false,
    path: '/login',
    SubMenu: [],
  },

]

export { SideMenu }