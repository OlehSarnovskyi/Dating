import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private SOCKET_ENDPOINT = 'localhost:3000'
  private socket = io(this.SOCKET_ENDPOINT)

  constructor() { }

  join(data: any): void {
    this.socket.emit('join', data)
  }

  leave(data: any): void {
    this.socket.emit('leave', data)
  }

  userJoined(): Observable<{message: string}> {
    const observable = new Observable<{message: string}>(observer => {
      this.socket.on('joined chat', data => {
        observer.next(data)
      })
      return () => {this.socket.disconnect()}
    })
    return observable
  }

  userLeft(): Observable<{message: string}> {
    let observable = new Observable<{message: string}>(observer => {
      this.socket.on('left chat', data => {
        observer.next(data)
      })
      return () => {this.socket.disconnect()}
    })
    return observable
  }

  sendMessage(data: any): void {
    this.socket.emit('message', data)
  }

  newMessageReceived(): Observable<{userId: string, message: string}> {
    let observable = new Observable<{userId: string, message: string}>(observer => {
      this.socket.on('new message', data => {
        observer.next(data)
      })
      return () => {this.socket.disconnect()}
    })

    return observable
  }
}
