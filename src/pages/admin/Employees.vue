<template>
  <router-link :to="{name:'EmployeeCreate'}" class="btn">Add Employee</router-link>

  <table>
    <thead>
      <tr>
        <th>#id</th>
        <th>Name</th>
        <th>Address</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="employee in employees" :key="employee.id">
        <td>{{employee.id}}</td>
        <td>{{employee.Name}}</td>
        <td>{{employee.Address}}</td>
        <td>{{employee.Role}}</td>
        <td>
          <button @click="del(employee.id)" class="btn btn-del">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';

export default {
  name:'Employees',
  setup() {
    const employees = ref([]);

    onMounted ( async () => {
      const res = await fetch('http://localhost:3000/employees');
      employees.value = await res.json();
    })

    const del = async (id) => {
      await fetch(`http://localhost:3000/employees/${id}`, {
        method:'DELETE'
      });

      employees.value = employees.value.filter( p => p.id !== id);
    }

    return { employees, del }
  }
}
</script>

<style>

</style>