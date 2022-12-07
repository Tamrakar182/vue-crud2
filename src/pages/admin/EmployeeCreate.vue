<template>
  <form @submit.prevent="submit">

    <label>Name</label>
    <input type="text" name="name" v-model="name" />

    <label>Address</label>
    <input type="text" name="address" v-model="address" />

    <label>Department</label>
    <select name = 'Department' v-model="department">
      <option value="Department 1">Department 1</option>
      <option value="Department 2">Department 2</option>
      <option value="Department 3">Department 3</option>
    </select>

    <label>Role</label>
    <select name="Role" v-model="role">
      <option value="Manager">Manager</option>
      <option value="Employee">Employee</option>
    </select>

    <label>Joining Date</label>
    <input type="date" v-model="date"/>

    <button>Add Employee</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name:"EmployeeCreate",
    setup () {
      const name = ref('');
      const address = ref('');
      const department = ref('');
      const role = ref('');
      const date = ref('');

      const router= useRouter();

      const submit = async() => {
        await fetch('http://localhost:3000/employees',{
          method:'POST',
          headers: {"Content-type": "application/json"},
          body: JSON.stringify({
            name:name.value,
            address:address.value,
            department:department.value,
            role:role.value,
            date:date.value
          }),
        });

        console.log(date)

        await router.push('/admin/employees');
      }
      return {name,address,department,role,date,submit}
    }
}
</script>

<style>

</style>