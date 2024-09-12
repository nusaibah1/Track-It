<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">  <router-link class="navbar-brand" to="/"></router-link></span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/report" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Report</span> </router-link>
                        <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                          
                            
                        </ul>
                    </li>
                    <li>
                        <router-link to="/orders" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span></router-link>
                    </li>
                    
        <li>
                        <router-link to="/items" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-shop"></i><span class="ms-1 d-none d-sm-inline">Items</span></router-link>
                        
                    </li>
                    <li>
                        <router-link to="/users" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-people"></i><span class="ms-1 d-none d-sm-inline">Users</span></router-link>
                        
                    </li>
                    <li>
                        <router-link href="#submenu3" to="/about" class="nav-link px-0 align-middle" >
                            <i class="fs-4 bi-blockquote-left"></i><span class="ms-1 d-none d-sm-inline">About</span> </router-link>
                           
                    </li>
                    <li>
                        <router-link to="/suppliers" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-truck"></i> <span class="ms-1 d-none d-sm-inline">Suppliers</span> </router-link>
                    </li>
                </ul>
                <hr>
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://nusaibah1.github.io/inventoryImages/images/admin.jpg" alt="hugenerd" width="30" height="30" class="rounded-circle">
                        <span class="d-none d-sm-inline mx-1">Admin</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col py-3">
            
            <!-- <button class="btn bg-secondary"  @click="downloadSalesReport">Generate Report</button> -->
            <div class="container-fluid">
              <div>
    <h3>Sales Report</h3>
    <ul v-if="sales && sales.length">
                    <li v-for="sale in sales" :key="sale.saleID">
                        <CardComp>
                            <template #cardHeader> <svg version="1.1" viewBox="0 0 2048 2048" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
<path transform="translate(797)" d="m0 0h23l16 6 13 9 10 11 29 44 29 43 29 44 29 43 29 44 15 22 4 6h2l158-237 10-14 9-9 14-8 12-4h22l20 7 120 48 149 60 27 11 95 38 44 18 85 34 37 15 14 8 10 9 6 8 5 10 4 16v11l-3 14-8 16-140 210-9 14-1 4-1 552-3 12-7 14-8 10-10 7-19 9-95 38-37 15-65 26-32 13-100 40-34 14-95 38-27 11-90 36-27 11-18 6-6 1h-16l-12-3-132-53-32-13-100-40-34-14-90-36-27-11-65-26-139-56-14-7-10-9-7-8-6-12-3-11-1-10v-546l-10-16-29-43-29-44-29-43-29-44-26-39-6-12-3-12v-16l4-15 6-11 9-10 8-7 14-7 152-61 27-11 75-30 27-11 112-45 75-30 37-15 47-19z" fill="#FEC251"/>
<path transform="translate(797)" d="m0 0h23l16 6 13 9 10 11 29 44 29 43 29 44 29 43 29 44 15 22 4 6h2l158-237 10-14 9-9 14-8 12-4h22l20 7 120 48 149 60 27 11 95 38 44 18 85 34 37 15 14 8 10 9 6 8 5 10 4 16v11l-3 14-8 16-150 225-5 3-22 8-12 5-29 12-50 20-71 29-23 9-24 10-18 7-11 5-45 18-27 11-70 28-18 7-12 5-25 10-27 11-85 34-66 26-25 10-13 5h-3v-493l-1-49-3-2-18 7-16 6-21 9-32 13-20 8-16 6-27 11-36 15-17 7-50 20-29 12-23 9-140 56-28 11-12 5-32 13-50 20-37 15-26 10-11 5-19 8-11 4h-7l-29-44-29-43-29-44-29-43-29-44-7-11-5-10-3-12v-16l4-15 6-11 9-10 8-7 14-7 152-61 27-11 75-30 27-11 112-45 75-30 37-15 47-19z" fill="#FEA650"/>
<path transform="translate(344,549)" d="m0 0 6 1 24 9 36 15 28 11 29 12 30 12 34 14 45 18 42 17 37 15 65 26 49 20 205 82 48 20 2 2 1 370v203l-1 7h7v1h-16l-12-3-132-53-32-13-100-40-34-14-90-36-27-11-65-26-139-56-14-7-10-9-7-8-6-12-3-11-1-10v-543z" fill="#FEE982"/>
<path transform="translate(1228)" d="m0 0h22l20 7 120 48 149 60 27 11 95 38 44 18 85 34 37 15 14 8 10 9 6 8 5 10 4 16v11l-3 14-8 16-140 210-9 14h-7l-23-10-28-11-27-11-30-12-22-9-13-5-70-28-127-51-37-15-27-11-30-12-21-8-60-25-30-12-27-11-25-10-28-11-9-4-21-9-14-5-4-3 1-5 156-234 10-14 9-9 14-8z" fill="#FC7935"/>
<path transform="translate(1582,1524)" d="m0 0h105l30 1 27 4 22 6 24 10 20 11 16 12 11 9 18 18 13 17 12 19 11 21 10 26 7 24 5 25 3 23 1 12v47l-3 28-5 26-8 28-11 27-11 21-9 14-12 16-18 20-11 10-16 12-16 10-25 12-22 7-23 5-27 3h-127l-16-5-12-7-9-8-7-10-6-13-2-10-1-10v-408l3-12 7-14 7-9 10-8 14-7 7-2zm59 121v282h25l39-1 14-3 13-5 14-8 11-9 7-7 10-14 9-17 7-21 4-18 2-15v-46l-3-23-5-21-8-20-8-14-9-11-7-7-14-10-16-7-15-4-10-1z" fill="#2E6AE6"/>
<path transform="translate(820,1524)" d="m0 0h11l23 2 23 5 15 5 16 7 17 9 17 12 15 13 11 11 11 14 7 10 10 17 10 24 6 21 3 20 1 13v159l-2 21-4 19-8 24-8 16-9 16-12 16-12 13-10 10-17 13-18 11-19 9-24 8-24 5-6 1h-36l-29-6-17-5-15-6-21-11-13-9-10-8-10-9-12-12-13-17-10-16-10-21-7-21-5-24-1-8-1-24v-136l1-19 3-19 6-22 8-20 10-19 9-13 10-13 20-20 13-10 17-11 16-8 14-6 20-6 23-4zm-4 121-16 4-12 6-9 7-5 4-8 10-8 16-3 10-1 10v146l2 16 5 13 5 9 8 10 8 7 14 8 11 4 10 2h16l16-4 16-8 12-11 6-7 7-12 4-13 1-6v-160l-4-16-6-12-7-9-4-5-12-9-15-7-14-3z" fill="#4CA1FE"/>
<path transform="translate(308,1524)" d="m0 0h42l22 3 24 6 26 10 23 12 16 11 13 10 8 8 7 11 5 14 1 5v17l-3 12-7 14-11 12-9 6-11 5-13 3h-13l-16-4-15-8-14-9-17-8-19-6-13-2h-19l-15 3-12 5-9 8-4 9v10l3 6 14 7 36 15 33 13 36 14 22 10 17 10 17 12 13 12 12 12 11 15 8 14 7 15 5 17 3 17 1 21-3 24-6 21-7 16-10 18-13 16-9 10-11 10-17 12-18 10-16 7-22 7-24 5-6 1h-43l-33-6-23-6-22-8-23-11-18-11-16-12-14-12-14-14-9-14-5-14-1-7v-10l3-14 8-16 9-10 8-7 13-6 9-2h21l12 3 11 6 10 8 11 11 13 9 14 8 17 7 16 4 15 2h18l16-3 12-5 11-7 7-7 6-11 1-10-6-12-8-8-13-8-17-8-42-16-44-18-35-15-14-8-10-8-10-9-10-11-7-10-8-14-5-11-5-15-3-14-1-8v-28l3-18 6-20 8-17 10-16 12-14 13-13 15-11 16-9 15-7 26-8 22-4z" fill="#4CA1FE"/>
<path transform="translate(1196,1524)" d="m0 0 18 2 12 5 10 7 10 10 7 12 4 12 1 7v348h89l15 4 12 7 10 9 7 10 5 10 3 12v16l-5 16-6 11-11 12-11 7-12 5-7 2h-156l-17-5-11-6-10-9-7-9-6-12-3-14v-417l4-14 6-11 9-10 9-8 13-6 7-2z" fill="#2E6AE6"/>
</svg>{{ sale.quantitySold }}</template>
                            <template #cardBody>
                              <router-link :to="{ name: 'itemDetails', params: { id: sale.prodID } }">
 <button>Details</button>
</router-link>

<p>Product ID: {{ sale.prodID }}</p>
                               
                                <p>Selling Price: {{ sale.sellingPrice }}</p>
                            </template>
                        </CardComp>
                    </li>
                </ul>
                <Spinner v-else />

  </div>
       
       
       
       
       
       
       
       
       
       
              <h3>Tasks</h3>
       
     
      <button @click="sortTasksAlphabetically()">Sort</button><input type="text" id="task-input" placeholder="Enter a task"> <button @click="addTask()">Add Task</button>
   <br>
      <ul id="task-list"></ul>

</div>

           
          
            
       </div>
    </div>
</div>

</template>


<script>
import CardComp from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue';

export default {
  components: {
   CardComp,
   Spinner
  },
  data() {
    return {
      tasks: JSON.parse(localStorage.getItem('tasks')) || [],
      sale: {
        saleID: "",
        prodID: "", 
        quantitySold: "",
        sellingPrice: ""
      }
    }
  },
  methods: {
    downloadReport() {
      this.$store.dispatch('downloadSalesReport');
    },
    addTask() {
      const taskInput = document.getElementById('task-input');
      const taskName = taskInput.value.trim();

      if (taskName) {
        const newTask = {
          id: this.tasks.length + 1,
          name: taskName,
          createdDate: new Date().toLocaleDateString(),
          completed: false
        };

        this.tasks.push(newTask);
        this.saveTasks();
        this.renderTasks();
        taskInput.value = '';
      }
    },
    renderTasks() {
      const taskList = document.getElementById('task-list');
      taskList.innerHTML = '';

      this.tasks.forEach(task => {
        const taskItem = document.createElement('li');
        const taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        taskCheckbox.checked = task.completed;
        taskCheckbox.addEventListener('change', () => this.toggleTaskCompletion(task.id));

        const taskLabel = document.createElement('label');
        taskLabel.textContent = `${task.name} (DOS: ${task.createdDate})`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => this.deleteTask(task.id));

        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskLabel);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
      });
    },
    toggleTaskCompletion(taskId) {
      const task = this.tasks.find(t => t.id === taskId);
      task.completed = !task.completed;
      this.saveTasks();
      this.renderTasks();
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(t => t.id !== taskId);
      this.saveTasks();
      this.renderTasks();
    },
    sortTasksAlphabetically() {
      this.tasks.sort((a, b) => a.name.localeCompare(b.name));
      this.saveTasks();
      this.renderTasks();
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      console.log('Tasks saved to local storage:', this.tasks);
    }
  },
  computed: {
   sales() {
    return this.$store.state.sales
   }
  },
  mounted() {
    this.renderTasks();
    this.$store.dispatch('fetchSales')
    this.$store.dispatch('fetchProfit')
    this.$store.dispatch('fetchLoss')
 
  }
}
</script>




<style  scoped>
/* h3{
    text-align: center;
    color: black;
    font-weight: bold;
  
} */
 h3{
  justify-self: flex-end;

 }
input, button, li, ul{
    float: right;
}
table,h3, button{
    font-family: "Michroma", sans-serif;   
}
button{
  background-color: black;
  color: bisque;
}
</style>