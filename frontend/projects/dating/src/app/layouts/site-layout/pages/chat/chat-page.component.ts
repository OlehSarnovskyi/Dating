import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ChatService} from "./services/chat.service";
import {Store} from "@ngrx/store";
import {getUserId} from "../../../auth-layout/pages/login";

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ChatService]
})
export class ChatPageComponent implements OnInit {

  userId$
  // TODO for matching
  matchedUserId$
  // TODO "store" for chat

  socket: any
  messageFC = new FormControl()
  userId: string
  matchedUserId: string
  roomId: string
  messages: {userId: string, message: string}[] = []

  constructor(private chatService: ChatService,
              private store: Store,
              private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.observeNewMessages()
    this.joinChat()
  }

  sendMessage(): void {
    this.chatService.sendMessage({userId: this.userId, message: this.messageFC.value, room: this.roomId})
    this.messageFC.setValue(null)
  }

  joinChat() {
    this.store.select(getUserId).subscribe(val => {
      this.userId = val
      if (val === '5f68ad0a363b7a06888b3490') {
        this.matchedUserId = '5f68ad2e363b7a06888b3491'
      } else if (val === '5f68ad2e363b7a06888b3491') {
        this.matchedUserId = '5f68ad0a363b7a06888b3490'
      }

      this.roomId = this.userId > this.matchedUserId
        ? this.userId + this.matchedUserId
        : this.matchedUserId + this.userId

      this.chatService.join({user: this.userId, room: this.roomId})
    })
  }

  observeNewMessages() {
    this.chatService.newMessageReceived()
      .subscribe((res) => {
        this.messages = [...this.messages, res]
        // TODO why detectChanges
        this.cd.detectChanges()
      })
  }
}
