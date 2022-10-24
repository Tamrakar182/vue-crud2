<template>
  <div class="sidebar">
    <ul class="side-menu">
      <li><router-link :to="{name: 'Employees'}">Employees</router-link></li>
      <li><router-link :to="{name: 'EmployeeCreate'}">Add Employee</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'Sidebar'
}
</script>

<style>

</style>