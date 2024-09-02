<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2 bg-light sidebar">
        <!-- sidebar content here -->
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
      <div class="col-md-10 main-content">
        <!-- main content here -->
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-header">Profit<i class="bi bi-graph-up"></i></div>
              <div class="card-body">
                <p class="card-text">Card content</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-header">Loss<i class="bi bi-graph-down-arrow"></i></div>
              <div class="card-body">
                <p class="card-text">Card content</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-header">Card title</div>
              <div class="card-body">
                <p class="card-text">Card content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.sidebar {
  height: 100vh;
  position: sticky;
  top: 0;
}

.main-content {
  padding: 20px;
}
::-webkit-scrollbar{
  display:none;
}
.card-headerO{
 background-color: green;
}
.card-header{
  background-color: red;
  font-family:monospace;
}
</style>
