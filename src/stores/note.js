import { service } from '@/service/baseService'
import { notify } from '@kyvg/vue3-notification'
import { defineStore } from 'pinia'

export const useNoteStore = defineStore('note', {
  state: () => ({
    chatid:0
  }),
  actions: {
    async UpdateNote(id, data) {
      try {
        const result = await service.put(`AccountManagement/NotesUpdateDelete/${id}/`, data)
        if (result.status === 200) {
          await this.GetAllNote()
          notify({
            text: 'Update note success',
            type: 'success'
          })
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
})
