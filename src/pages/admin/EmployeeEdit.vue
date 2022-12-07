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

    <button>Save</button>
  </form>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default {
    name:"EmployeeEdit",
    props: ['id'],

    setup () {
      const name = ref('');
      const address = ref('');
      const department = ref('');
      const role = ref('');
      const date = ref('');

      const router = useRouter();
      const route = useRoute();


      onMounted(async() => {
        const res = await fetch(`http://localhost:3000/employees/${route.params.id}`)
        const employee = await res.json();
        name.value = employee.name;
        address.value = employee.address;
        department.value = employee.department;
        role.value = employee.role;
        date.value = employee.date;

      })

      const submit = async() => {
        await fetch(`http://localhost:3000/employees/${route.params.id}`,{
          method:'PUT',
          headers: {"Content-type": "application/json"},
          body: JSON.stringify({
            name:name.value,
            address:address.value,
            department:department.value,
            role:role.value,
            date:date.value
          })
        });

        await router.push('/admin/employees');
      }

      return {name,address,department,role,date,submit}
    }
}
</script>

<style>

</style>