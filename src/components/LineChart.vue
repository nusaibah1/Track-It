<!-- <template>
    <div>
      <line-chart>
    <Line/>
      </line-chart>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { Line } from 'vue-chartjs';
  import { Chart, registerables } from 'chart.js';
  
  Chart.register(...registerables);
  
  export default defineComponent({
    name: 'LineChart',
    components: {
      Line,
    },
    data() {
      return {
        chartData: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [40, 39, 10, 40, 39, 80, 40],
            },
          ],
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
        },
      };
    },
  });
  </script> -->


