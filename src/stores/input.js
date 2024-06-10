import { defineStore } from 'pinia'
export const useInputStore = defineStore('input', {
  state: () => ({
    search:"",
    name:"",
    gender:"",
    phone:"",
    age:"",
    email:"",
    cccd:"",
    address:"",
    linkfacebook:"",
    national:""
  }),
  actions: {
    async ChangeSearch(search) {
        this.search = search
    },
  }
})
