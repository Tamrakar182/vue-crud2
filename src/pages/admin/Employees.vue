<template>
  <router-link :to="{name:'EmployeeCreate'}" class="btn">Add Employee</router-link>

  <table v-if = "(employees.length > 0)">

	<thead>
	  <tr>
		<th>#id</th>
		<th>Name</th>
		<th>Address</th>
		<th>Role</th>
		<th>Department</th>
		<th>Joined Date</th>
		<th>Actions</th>
	  </tr>
	</thead>

	<tbody>
	  <tr v-for="employee in employees" :key="employee.id" >
		<td>{{ employee.id }}</td>
		<td>{{ employee.name }}</td>
		<td>{{ employee.address }}</td>
		<td>{{ employee.role }}</td>
		<td>{{ employee.department }}</td>
		<td>{{ moment(employee.date).fromNow() }}</td>
		<td>
		<router-link :to="{name: 'EmployeeEdit', params: {id:employee.id}}" class="btn">Edit</router-link>
		<button @click="del(employee.id)" class="btn btn-del">Delete</button>
		</td>
	  </tr>

	</tbody>
	
	</table>

	<h1 v-else>No records found</h1>

</template>

<script>
import { ref, onMounted } from 'vue';
import moment from 'moment';


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

	return { employees, del, moment }
  }
}



</script>

<style>

</style>