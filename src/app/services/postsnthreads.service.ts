import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class PostsnthreadsService {
  // create currentThread variable
  currentThread: string = '';
  currentTitle: string = '';
  constructor(private firestore: AngularFirestore) { }

  get messageThread(){
    return this.firestore.collection('threads').valueChanges({idField: 'id'});
  };

  get messagePost(){
    return this.firestore.collection('posts').valueChanges({idField: 'id'});
  };
  
  // Create a getter for posts by threadID (using currentThread variable)
  getPostById(){
    return this.firestore.collection('posts', ref => ref.where('threadId', '==', this.currentThread).orderBy('date')).valueChanges({idField: 'id'});
  };
  
  newThread(title: string, user: string, post: string){
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

  newPost(user: string, post: string){
    if(this.currentThread){
    this.firestore.collection('posts').add({
      date: new Date,
      user: user,
      post: post,
      threadId: this.currentThread
    })
  }
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
