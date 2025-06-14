import {Router} from '@vaadin/router';

export const initRouter = () => {
  const outlet = document.getElementById('outlet');
  const baseUrl =
    location.hostname === 'localhost' ? '/' : '/employee-management-app/';

  const router = new Router(outlet, {baseUrl});
  router.setRoutes([
    {path: '/', component: 'employee-list'},
    {path: '/add', component: 'employee-form'},
    {path: '/edit/:id', component: 'employee-form'},
  ]);
};
