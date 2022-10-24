import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import Admin from '../pages/admin/Admin.vue'
import Employees from '../pages/admin/Employees.vue'
import EmployeeCreate from '../pages/admin/EmployeeCreate.vue'
import EmployeeEdit from '../pages/admin/EmployeeEdit.vue'


const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: 'employees',
        name: 'Employees',
        component: Employees
      },
      {
        path: 'employees/create',
        name: 'EmployeeCreate',
        component: EmployeeCreate
      },
      {
        path: 'employees/:id/edit',
        name: 'EmployeeEdit',
        component: EmployeeEdit,
        props: true
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
