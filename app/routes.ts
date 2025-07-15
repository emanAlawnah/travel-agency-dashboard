import {layout, route, type RouteConfig, } from '@react-router/dev/routes';

export default [
  layout('./routes/admin/MainLayout.tsx',[
    route('Dashboard','./routes/admin/Dashboard.tsx'),
    route('allUsers','./routes/admin/AllUsers.tsx')
  ]),
] satisfies RouteConfig;