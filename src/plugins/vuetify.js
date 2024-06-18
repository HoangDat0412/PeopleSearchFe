// src/plugins/vuetify.js

import { createVuetify } from 'vuetify'
import 'vuetify/styles'
// import * as mdiJs from '@mdi/js'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
// import { useUserStore } from '@/stores/user'
// const user = useUserStore()


const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  ssr: true,
})

export default vuetify