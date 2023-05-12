import { snackBarStore } from '@/store/snackBar/snack'

const useSnackBar = snackBarStore()
export class WebSocketClient {
  private webSocket!: WebSocket
  private pingTimerId!: number
  constructor(private url: string, private pingInterval = 5000) {}
  public connect(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.webSocket = new WebSocket(this.url)
      this.webSocket.onopen = (event: Event) => {
        console.log('WebSocket connected: ', event)
        this.startPing()
        resolve(event)
      }
      this.webSocket.onmessage = (event: MessageEvent) => {
        console.log('WebSocket message: ', event.data)
      }
      this.webSocket.onerror = (event: Event) => {
        console.error('WebSocket error: ', event)
        useSnackBar.showErrorMsg('连接错误')
        this.stopPing()
        reject(event)
      }
      this.webSocket.onclose = (event: CloseEvent) => {
        console.log('WebSocket closed: ', event)
        useSnackBar.showErrorMsg(`连接断开: ${event.type}`)
        this.stopPing()
      }
    })
  }

  public send(data: any) {
    this.webSocket.send(JSON.stringify(data))
  }

  public receive(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.webSocket.onmessage = (event: MessageEvent) => {
        resolve(JSON.parse(event.data))
      }
      this.webSocket.onerror = (event: Event) => reject(event)
    })
  }

  public close() {
    this.stopPing()
    this.webSocket.close()
  }

  private startPing() {
    this.pingTimerId = window.setInterval(() => {
      this.webSocket.send(JSON.stringify({ type: 'ping', name: 'saofeng' }))
    }, this.pingInterval)
  }

  private stopPing() {
    clearInterval(this.pingTimerId)
  }
}
