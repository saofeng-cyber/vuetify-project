import type { SnackBar } from './help'
import { GET_SNACBAR_STATE } from './help'

export const snackBarStore = defineStore('snackBar', {
  state: (): SnackBar => GET_SNACBAR_STATE(),
  actions: {
    showSucessMsg(msg: string) {
      this.isShow = true
      this.snackColor = 'success'
      this.msg = msg
    },
    showErrorMsg(msg: string) {
      this.isShow = true
      this.snackColor = 'error'
      this.msg = msg
    },
    showWarningMsg(msg: string) {
      this.isShow = true
      this.snackColor = 'warning'
      this.msg = msg
    },
    showInfoMsg(msg: string) {
      this.isShow = true
      this.snackColor = 'info'
      this.msg = msg
    },
  },
})
