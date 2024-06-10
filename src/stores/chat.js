import { service } from '@/service/baseService'
import { notify } from '@kyvg/vue3-notification'
import { defineStore } from 'pinia'
export const useChatStore = defineStore('chat', {
  state: () => ({
    chatDetail: [],
    searchResult: {},
    listChat: []
  }),
  actions: {
    async UpdateChat(id, data) {
      try {
        const result = await service.put(`AccountManagement/ChatsUpdateDelete/${id}`, data)
        if (result.status === 200) {
          notify({
            type:"success",
            title:"Update Note Success"
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
    async DeleteChat(id) {
      try {
        const result = await service.delete(`AccountManagement/ChatsUpdateDelete/${id}`)
        if (result.status === 200) {
          await this.GetAllChat()
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
})
