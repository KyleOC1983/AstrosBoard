import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class PostsnthreadsService {

  constructor(private firestore: AngularFirestore) { }

  get messageThread(){
    return this.firestore.collection('threads').valueChanges();
  };

  get messagePost(){
    return this.firestore.collection('posts').valueChanges();
  };

  newThread(title: string, user: string, post: string){
    console.log(title, user, post);
     this.firestore.collection('threads').add({
      date: new Date(),
      title: title,
      user: user,
      post: post, 
    })
  };

  deleteThread(id: string){
    this.firestore.collection('threads').doc(id).delete().then(function(){
      console.log('Thread successfully deleted')
    })
  };

  newPost(date: Date, user: string, post: string, threadId: string){
    this.firestore.collection('posts').add({
      date: Date,
      user: user,
      post: post,
      threadId: threadId,
    })
  };

  deletePost(id: string){
    this.firestore.collection('posts').doc(id).delete().then(function(){
      console.log('Post Successfully Deleted')
    })
  };

  movePost(forum: string){
    this.firestore.collection('posts').doc(forum).update(forum)
  };

}
