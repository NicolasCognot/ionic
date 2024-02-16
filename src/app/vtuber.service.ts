import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Vtuber } from './models/vtuber.model';

@Injectable({
  providedIn: 'root'
})
export class VtuberService {
  private dbPath = '/vtubers';
  vtubersRef: AngularFirestoreCollection<Vtuber>;


  constructor(
    private db: AngularFirestore
  ) { 
    this.vtubersRef = db.collection(this.dbPath);
  }

  getAll() : any {
    return this.vtubersRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewVtuber(vtuber: Vtuber) : any {
    return new Observable(obs => {
      this.vtubersRef.add({...vtuber}).then(() => {
        obs.next();
      });
    });
  }

  get(id: any):any {
    return  new Observable(obs => {
      this.vtubersRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(vtuber:Vtuber) {
    return new Observable(obs => {
      this.vtubersRef.doc(vtuber.id).update(vtuber);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`vtubers/${id}`).delete();
  }
}
