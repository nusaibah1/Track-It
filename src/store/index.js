import { createStore } from 'vuex'
import axios  from 'axios'
import {toast} from 'vue3-toastify'
import router from '@/router'
import { useToken } from '@/service/userAuth'
import { useCookies } from 'vue3-cookies'

  
const {cookies} = useCookies()


const apiURL = 'https://track-it-0aeb.onrender.com/'

useToken(cookies.get('LegitUser')?.token)
export default createStore({
  state: {
    users: null,
    user: null,
    items: null,
    item: null,
    recentItems: null,
    orders: null,
    order: null
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
    }
  },
  actions: {
    // ===Fetch All Users ===
  async retrieveUsers(context) {
    try{
      const { results, msg } = await(await axios.get(`${apiURL}users`)).data
    if(results) {
      context.commit('setUsers', results )
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

  //===Fetch A Single User===
  async  retrieveUser(context, id) {
    try{
      const { result, msg } = await (await axios.get(`${apiURL}users/${id}`)).data 
      if(result) {
        context.commit('setUser', result)
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
 
  // ===Add A User====
 async register(context, payload) {
  try{
  const { msg, err, token } = await (await axios.post(`${apiURL}users/register`, payload)).data
  if(token) {
    context.dispatch('retrieveUsers')
    toast.success(`${msg}` , {
      autoClose: 3000
    })
    router.push({ name: 'login'})
  } else {
    toast.error(`${err}`, {
      autoClose: 3000
    })
  }
  }catch(e) {
 toast.error(`${e.message}`, {
  autoClose: 3000
 })
  }
 },
//  ===Update A Single User====
async updateUser(context, payload) {
  try{
    const { msg, err} = await (await axios.patch(`${apiURL}users/update/${payload.userID}`, payload)).data
    if(msg) {
      context.dispatch('retrieveUsers')
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
// ===Remove A User===
async removeUser(context, id) {
  try{
    const {msg, err} = await (await axios.delete(`${apiURL}users/delete/${id}`)).data
  if(msg) {
    context.dispatch('retrieveUsers')
  } else {
    toast.error(`${err}` ,{
      autoClose: 3000
    })
  }
  } catch(e) {
    toast.error(`${e.message}`, {
      autoClose: 3000
    })
  }
},

// ===Retrieve All Items ====

async retrieveItems(context) {
  try{
    const {results} = await (await axios.get(`${apiURL}items`)).data
    if(results) {
      context.commit('setItems', results)
    } else {
      router.push({ name: 'login'})
    }
  } catch(e) {
    toast.error(`${e.message}`, {
      autoClose: 3000
    })
  }
},

// ===Retrieve New Items ===
async newItems(context) {
  try{
   const { results, msg } = await (await axios.get(`${apiURL}items/new`)).data
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
 async retrieveItem(context, id) {
  try{
   const { result, msg } = await (await axios.get(`${apiURL}items/${id}`)).data
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
      const { msg } = await (await axios.post(`${apiURL}products/add`, payload)).data
    if(msg) {
      context.dispatch('retrieveItems')
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
    const { msg } = await (await axios.patch(`${apiURL}items/update/${payload.prodID}`)).data
    if(msg) {
      context.dispatch('retrieveItems')
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
async removeItem(context, id) {
  try{
    const { msg } = await ( await axios.delete(`${apiURL}items/delete/${id}`)).data
  if(msg) {
    context.dispatch('retrieveItems')
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

// === Retrieve All Orders ===
async fetchOrders(context, payload) {
  try{
    const { results, msg} = await (await axios.get(`${apiURL}user/${payload.userID}/orders`)).data
    if(results) {
      context.commit( 'setOrders', results)
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

//=== Retrieve a Single Order ===
async fetchOrder(context, payload) {
  try{
    const { result, msg } = await (await axios.get(`${apiURL}user/${payload.userID}/order/${payload.oderID}`)).data
    if (result) {
      context.commit('setOrder', result)
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
}
  },
  modules: {
  }
})
