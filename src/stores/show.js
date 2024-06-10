import { defineStore } from 'pinia'

export const useShowStore = defineStore('show', {
  state: () => ({
    showFormVideo:false,
    showFormAudio:false,
    showFormSearch:false,
    showSpiner: false,
    showNote:false,
    showKeyBoard:false,
    showNameKeyboard:false,
    showEmailKeyboard:false,
    showLinkFaceBookKeyboard:false,
    showAddressKeyboard:false
  }),
  actions: {
    async SetShowSpinner(data) {
      this.showSpiner = data
    }
  }
})
