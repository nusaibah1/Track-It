import { createStore } from 'vuex'
import axios  from 'axios'
import {toast} from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
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
    order: null,
    suppliers: null,
    supplier: null
  },
  getters: {
    getUserID: (state) => state.user?.userID
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
    }
  },
  actions: {
  // ==== Fetch All Users ========
  async fetchUsers(context) {
    try {
      const { results, msg } = await (await axios.get(`${apiURL}user`)).data
      if (results) {
        context.commit('setUsers', results)
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
      console.log(payload?.userID);
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
      const { msg, err } = await (await axios.delete(`${apiURL}users/delete/${id}`)).data
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
    const { msg, err, token} = await( await axios.post(`${apiURL}user/login`, payload)).data
    if(token) {
      context.commit('fetchUser')
      toast.success(`${msg}`, {
        autoClose: 3000
      })
      cookies.set('LegitUser', token)
    }
    else{
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

// ===Retrieve All Items ====

async fetchItems(context) {
  try {
    const { results } = await (await axios.get(`${apiURL}item`)).data
    if (results) {
      context.commit('setItems', results)
    } else {
      router.push({ name: 'login' })
    }
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
const {msg} = await (await axios.delete(`${apiURL}/suppliers/delete/${id}`)).data
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
async fetchOrders(context) {
  try {
    const userID = context.getters.getUserID; // Use the getter to fetch userID

    if (!userID) {
      throw new Error('User ID is undefined');
    }

    const { results, msg } = await (await axios.get(`${apiURL}user/${userID}/orders`)).data;

    if (results) {
      context.commit('setOrders', results);
    } else {
      toast.error(`${msg}`, {
        autoClose: 3000
      });
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 3000
    });
  }
},



//=== Retrieve a Single Order ===
async fetchOrder(context, payload) {
  try{
    const { result, msg } = await (await axios.get(`${apiURL}user/${payload.userID || 1}/order/${payload.oderID || 1}`)).data
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
