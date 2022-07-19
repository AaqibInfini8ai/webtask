import React from 'react'
import { ROUTES } from './RoutesPath'

const Login = React.lazy(() => import('../Auth/Login'))
const Dashboard = React.lazy(() => import('../Pages/Dashboard/Dashboard'))
const DeliverySheet = React.lazy(() => import('../Pages/DeliverySheets/DeliverySheet'))
const AllPickup = React.lazy(() => import('../Pages/Pickups/AllPickup/AllPickup'))
const TodayPickup = React.lazy(() => import('../Pages/Pickups/TodayPickup/TodayPickup'))
const Access = React.lazy(() => import('../Pages/Access/Access'))
const Couriers = React.lazy(() => import('../Pages/Couriers/Couriers'))
const AllManifest = React.lazy(() => import('../Pages/Manifest/AllManifest/AllManifest'))
const HistoryMenifest = React.lazy(() => import('../Pages/Manifest/HistoryManifest/HistoryMenifest'))
const TodayManifest = React.lazy(() => import('../Pages/Manifest/TodayManifest/TodayManifest'))
const OrderDeliver = React.lazy(() => import('../Pages/OrderDeliver/OrderDeliver'))
const OrderPending = React.lazy(() => import('../Pages/OrderPending/OrderPendng'))
const Revenue = React.lazy(() => import('../Pages/Revenue/Revenue'))
const Supervisors = React.lazy(() => import('../Pages/Supervisors/Supervisors'))



const routes = [
  // { path: ROUTES.login, exact: true, name: 'Login', component: Login },

  { path: ROUTES.dashboard, exact: true, name: 'Dashboard', component: Dashboard },
  { path: ROUTES.develiverysheet, exact: true, name: 'DeliverySheet', component: DeliverySheet },
  { path: ROUTES.allpickup, exact: true, name: 'AllPickup', component: AllPickup },
  { path: ROUTES.todaypickup, exact: true, name: 'TodayPickup', component: TodayPickup },
  { path: ROUTES.access, exact: true, name: 'Access', component: Access },
  { path: ROUTES.couriers, exact: true, name: 'Couriers', component: Couriers },
  { path: ROUTES.allmenifest, exact: true, name: 'AllManifest', component: AllManifest },
  { path: ROUTES.historymenifest, exact: true, name: 'HistoryMenifest', component: HistoryMenifest },
  { path: ROUTES.todaymenifest, exact: true, name: 'TodayManifest', component: TodayManifest },
  { path: ROUTES.orderdeliver, exact: true, name: 'OrderDeliver', component: OrderDeliver },
  { path: ROUTES.orderpending, exact: true, name: 'OrderPending', component: OrderPending },
  { path: ROUTES.revenue, exact: true, name: 'Revenue', component: Revenue },
  { path: ROUTES.supersiors, exact: true, name: 'Supervisors', component: Supervisors },


  

  
]

export default routes