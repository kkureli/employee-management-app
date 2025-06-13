import {Router} from '@vaadin/router';

export const initRouter = () => {
  const router = new Router(document.getElementById('outlet'));
  router.setRoutes([
    {path: '/', component: 'employee-list'},
    {path: '/add', component: 'employee-form'},
    {path: '/edit/:id', component: 'employee-form'},
  ]);
};
