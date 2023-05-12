export type Anchor =
  | 'top'
  | 'bottom'
  | 'center'
  | 'right'
  | 'left'
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right'
  | 'center center'
export type Color = 'success' | 'error' | 'warning' | 'info'
export interface SnackBar {
  isShow: boolean
  msg: string
  snackLocation: Anchor
  snackColor: Color
  timeout: number
}
export function GET_SNACBAR_STATE(): SnackBar {
  return {
    isShow: false,
    msg: '',
    snackLocation: 'top',
    snackColor: 'success',
    timeout: 3000,
  }
}
