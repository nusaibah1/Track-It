import { createStore } from 'vuex'
import axios  from 'axios'
import {toast} from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import router from '@/router'
import { useToken } from '@/service/userAuth'
import { useCookies } from 'vue3-cookies'

const {cookies} = useCookies()


// const apiURL = 'https://track-it-unw3.onrender.com/'
const apiURL =  'http://localhost:3001/'
useToken(cookies.get('LegitUser')?.token)
export default createStore({
  state: {
    users: null,
    user: null,
    items: null,
    item: null,
    recentItems: null,
    orders: null,
    order: null,
    profit: null,
    loss:null,
    sales: null,
    sale: null,
    suppliers: null,
    supplier: null,
    total: null,
    userID: null,
    // salesData: []
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setItems(state, value) {
     state.items = value
    },
    setItem(state, value) {
    state.item = value
    },
    setRecentItems(state, value) {
      state.recentItems = value
    }, 
    setOrders(state, value) {
     state.orders = value
    },
    setOrder(state, value) {
      state.order = value
    },
    setSupplier(state, value) {
      state.supplier = value
    },
    setSuppliers(state, value) {
      state.suppliers = value
    },
    setSale(state, value) {
      state.sale = value
    },
    
      setProfit(state, value) {
        state.profit = value
      
      },
    setLoss(state, value) {
      state.loss = value
    },
    setSales(state, value) {
     state.sales = value
    },
    setTotal(state, value) {
     state.total = value
    },
  
  },
  actions: {

  // ==== Retrieve All Users ========
  async fetchUsers(context) {
    try {
      const { results, msg } = await (await axios.get(`${apiURL}user`)).data
      if (results) {
        context.commit('setUsers', results)
      } else {
        toast.error(`${msg}|| Session Expired. Relogin to proceed`, {
          autoClose: 3000
        })
      }
    } catch (e) {
      toast.error(`${e.message}`, {
        autoClose: 3000
     
      })
    }
  },
  
      // ==== Fetch A User ========
  async fetchUser(context, id) {
    try {
      const { result, msg } = await (await axios.get(`${apiURL}user/${id}`)).data
      if (result) {
        context.commit('setUser', result)
      } else {
        toast.error(`${msg}`, {
          autoClose: 3000
        
        })
      }
    } catch (e) {
      toast.error(`${e.message}`, {
        autoClose: 3000
       
      })
    }
  },
      // ==== Add a User ========
  async register(context, payload) {
    try {
      const { msg, err, token } = await (await axios.post(`${apiURL}user/register`, payload)).data
      if (token) {
        cookies.set('LegitUser', { token: token, expires: 7 });
        context.dispatch('fetchUsers')
        router.push({ name: 'report' }) 
        toast.success(`${msg}`, {
          autoClose: 3000
      
        })
      
      } else {
        toast.error(`${err}`, {
          autoClose: 3000
        
        })
      }
    } catch (e) {
      toast.error(`${e.message}`, {
        autoClose: 3000
    
      })
    }
  },
      // ==== Update a User ========
      async updateUser(context, payload) {
        try {
          const { msg, err } = await (await axios.patch(`${apiURL}user/update/${payload.userID}`, payload)).data
          if (msg) {
            context.dispatch('fetchUsers')
          } else {
            toast.error(`${err}`, {
              autoClose: 3000
       
            })
          }
        } catch (e) {
          toast.error(`${e.message}`, {
            autoClose: 3000
         
         
          })
        }
      },
      // ==== Remove a User ========
  async deleteUser(context, id) {
    try {
      const { msg, err } = await (await axios.delete(`${apiURL}user/delete/${id}`)).data
      if (msg) {
        context.dispatch('fetchUsers')
      } else {
        toast.error(`${err}`, {
          autoClose: 3000
         
        })
      }
    } catch (e) {
      toast.error(`${e.message}`, {
        autoClose: 3000
      })
    }
  },


// === Login  ===
async login(context, payload) {
  try {
    const { msg, result, token } = await (await axios.post(`${apiURL}user/login`, payload)).data
    if (result) {
      toast.success(`${msg}`, {
        autoClose: 3000,
       
      })
     
      context.commit('setUser', {
        msg,
        result
      })
      cookies.set('LegitUser', {token, msg, result})
      useToken(token)
     
      
      router.push({ name: 'report' }) 
      toast.success('Welcome Back!'), {
        autoClose: 10000,
      }
    } else {
      toast.error(`${msg}`, {
        autoClose: 3000
    
      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 3000
   
    })
  }
},







// ===Retrieve All Items ====
async fetchItems(context) {
  try {
    const { results } = await (await axios.get(`${apiURL}item`)).data
    console.log(results);
    
    if (results) {
      context.commit('setItems', results)
    } 
    // else {
    //   router.push({ name: 'login' })
    // }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 3000
      
    })
  }

},

// ===Retrieve New Items ===
async newItems(context) {
  try{
   const { results, msg } = await (await axios.get(`${apiURL}item/new`)).data
  if(results) {
    context.commit('setNewItems', results)
  } else{
    toast.error(`${msg}`, {
      autoClose: 3000
    })
  }
  } catch(e) {
   toast.error(`${e.message}`, {
    autoClose: 3000
   })
  }
},
//==== Retrieve an Item ====
 async fetchItem(context, id) {
  try{
   const { result, msg } = await (await axios.get(`${apiURL}item/${id}`)).data
    if(result) {
      context.commit('setItem', result)
    } else {
      toast.error(`${msg}` , {
        autoClose: 3000
      })
     
    }
  } catch(e) {
   toast.error(`${e.message}`, {
    autoClose: 3000

   })
  }
 },
//  ====Add an Item ===
  async  addItem(context, payload) {
    try{
      const { msg } = await (await axios.post(`${apiURL}item/add`, payload)).data
    if(msg) {
      context.dispatch('fetchItems')
      toast.success(`${msg}`, {
        autoClose: 3000
      })
    }
    
    } catch(e) {
      toast.error(`${e.message}`, {
        autoClose: 3000
      })
    }
  },
  // Update an Item
async updateItem(context, payload) {
  try{
    const { msg } = await (await axios.patch(`${apiURL}item/update/${payload.prodID}`)).data
    if(msg) {
      context.dispatch('fetchItems')
      toast.success(`${msg}`, {
        autoClose: 3000
      })
    }
  } catch(e) {
    toast.error(`${e.message}` , {
      autoClose: 3000
    })
  }
},

// === Remove An Item ===
async deleteItem(context, id) {
  try{
    const { msg } = await ( await axios.delete(`${apiURL}item/delete/${id}`)).data
  if(msg) {
    context.dispatch('fetchItems')
    toast.success(`${msg}`, {
      autoClose: 3000
    })
  }
  } catch(e) {
    toast.error(`${e.message}` , {
      autoClose: 3000
    })
  }
},
//  ====Fetch All Suppliers ====
async fetchSupplier(context, id) {
try{
  const { result, msg } = await ( await axios.get(`${apiURL}supplier/${id}`)).data
  if(result) {
    context.commit('setSupplier', result)
  } else {
    toast.error(`${msg}`, {
      autoClose: 3000
    })
  }
} catch(e) {
  toast.error(`${e.message}`, {
    autoClose: 3000
  })
}
},

// ====Fetch A Single Supplier

async fetchSuppliers(context) {
try{
  const {results, msg} = await (await axios.get(`${apiURL}supplier`)).data
if(results) {
  context.commit('setSuppliers', results)
} else {
  toast.error(`${msg}`, {
    autoClose: 3000
  })
}
} catch(e) {
toast.error(`${e.message}`, {
  autoClose: 3000
})
}
},

async addSupplier(context, payload) {
 try{
  const {msg} = await (await axios.post(`${apiURL}supplier/add`, payload)).data
if(msg) {
  context.dispatch('fetchSuppliers')
  toast.success(`${msg}`, {
    autoClose: 3000
  })
} 
} catch(e) {
toast.error(`${e.message}`, {
  autoClose: 3000
})
 }
},


//  ==== Remove Supplier ===

async deleteSupplier(context, id) {
try {
const {msg} = await (await axios.delete(`${apiURL}/supplier/delete/${id}`)).data
if(msg) {
  context.dispatch('fetchSuppliers')
  toast.success(`${msg}`, {
    autoClose: 3000
  })
}
} catch(e) {
  toast.error(`${e.message}`, {
    autoClose: 3000
  })

}
},


// === Retrieve All Orders ===
async fetchOrders(context, payload) {
  try {
    const { results, msg } = await (await axios.get(`${apiURL}user/${payload.userID}/orders`, payload)).data
    console.log('API URL:', `${apiURL}user/${payload.userID}/orders`);
console.log('Payload:', payload);

    if (results) {
      context.commit('setOrders', results)
    } else {
      toast.warning(`${msg}`, {
        autoClose: 3000
 
      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 3000
   
   
    })
  }
},





//=== Retrieve a Single Order ===
async fetchOrder(context,payload ,id) {
  try {
    const { result, msg } = await (await axios.get(`${apiURL}user/${payload.userID}/order/${id}`, payload)).data
    if (result) {
      context.commit('setOrder', result)
    } else {
      toast.error(`${msg}`, {
        autoClose: 3000
      
      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 3000
     
    })
  }
},
 // fetch sales data from API
//  async fetchSalesData({ commit }) {
//   try {
//     const response = await axios.get('/api/sales'); // Adjust your endpoint
//     commit('SET_SALES_DATA', response.data);
//   } catch (error) {
//     console.error('Error fetching sales data:', error);
//   }
// },

// download sales report as a PDF
// async downloadSalesReport({ dispatch }) {
//   try {
//     // Fetch sales data before downloading
//     await dispatch('fetchSalesData');

//     // Trigger PDF download
//     const response = await axios({
//       url: '/sales-report', // Adjust your endpoint
//       method: 'GET',
//       responseType: 'blob', // Important for handling binary data
//     });

//     const url = window.URL.createObjectURL(new Blob([response.data]));
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', 'sales-report.pdf');
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   } catch (error) {
//     console.error('Error downloading sales report:', error);
//   }
// },
// === Add an Order ===
async addOrder(context, payload) {
  try{
    const  { msg, err, token } = await (await axios.post(`${apiURL}user/${payload.userID}/order`, payload)).data
  if(token) {
    context.dispatch('fetchOrders')
    toast.success(`${msg}`, {
      autoClose: 3000
    })
    router.push({ name: 'login'})
  } else {
    toast.error(`${err}` , {
      autoClose: 3000
    })
  }
  } catch(e) {
  toast.error(`${e.message}`, {
    autoClose: 3000
  })
  }
}, 

//  === Update  an Order ===
async updateOrder(context, payload) {
  try{
    const { msg, err} = await (await axios.patch(`${apiURL}user/${payload.userID}/order/${payload.orderID}`, payload)).data
  if(msg) {
    context.dispatch('fetchOrders')
  } else {
    toast.error(`${err}`, {
      autoClose: 3000
    })
  }
  } catch(e) {
  toast.error(`${e.message}` , {
    autoClose: 3000
  })
  }
},

//  ===Delete An Order ===
async removeOrder(context, payload) {
  try{
   const { msg, err } = await (await axios.delete(`${apiURL}user/${payload.userID}/order/${payload.orderID}`, {data : payload})).data
   if(msg) {
    context.dispatch('fetchOrders')
   } else {
    toast.error(`${err}`, {
      autoClose: 3000
    })
   }
  } catch(e) {
  toast.error(`${e.message}`, {
    autoClose: 3000
  })
  }
},
// Fetch Sales
async fetchSales(context) {
  try {
    const { results, msg } = await (await axios.get(`${apiURL}sales`)).data
    if (results) {
      context.commit('setSales', results)
    } else {
      toast.error(`${msg}`, {
        autoClose: 3000
      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 3000
   
    })
  }
},

// Fetch a Single Sale
async fetchSale(context, id) {
  try {
    const { result, msg } = await (await axios.get(`${apiURL}sales/${id}`)).data
    if (result) {
      context.commit('setSale', result)
    } else {
      toast.error(`${msg}`, {
        autoClose: 3000
      
      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 3000
     
    })
  }
},
// Fetch Profit
// async fetchProfit(context, id) {
// try{
//  const {result, msg} = await(await axios.get(`${apiURL}sales/${id}/profit`)).data
//  if(result) {
//   context.commit('setProfit', result)
//  }else{
//   toast.error(`${msg}`, {
//     autoClose: 3000
//   })
//  }
// }catch(e) {
//   toast.error(`${e.message}`, {
//     autoClose: 3000
   
//   })
// }
// },

// Fetch Loss 
// async fetchLoss(context, id) {
//   try{
//     const {result, msg} = await(await axios.get(`${apiURL}sales/${id}/loss`)).data
//     if(result) {
//       context.commit('setLoss' ,result)
//     }else{
//       toast.error(`${msg}`, {
//         autoClose: 3000
//       })
//     }
//   } catch(e) {
//     toast.error(`${e.message}` ,{
//       autoClose: 3000
//     })
//   }
// }
async fetchTotal(context, id) {
  try{
    const { result, msg } = await (await axios.get(`${apiURL}item/totals/${id}`)).data
     if(result) {
       context.commit('setItem', result)
     } else {
       toast.error(`${msg}` , {
         autoClose: 3000
       })
      
     }
   } catch(e) {
    toast.error(`${e.message}`, {
     autoClose: 3000
 
    })
   }
  }
  },
  modules: {
  }
})
