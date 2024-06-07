import { defineStore } from 'pinia'

export const useShowStore = defineStore('show', {
  state: () => ({
    showFormVideo:false,
    showFormAudio:false,
    showFormSearch:false,
    showSpiner: false,
    showNote:false,
    showKeyBoard:true
  }),
  actions: {
    async SetShowSpinner(data) {
      this.showSpiner = data
    }
  }
})
