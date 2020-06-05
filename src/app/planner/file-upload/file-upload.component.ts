import { Component, OnInit } from '@angular/core';
import { AngularFireUploadTask } from '@angular/fire/storage/task';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  task: AngularFireUploadTask
  percentage: Observable<number>
  snapshot: Observable<any>
  downloadURL: Observable<string>
  isHovering: boolean

  constructor(private storage: AngularFireStorage, private firestore:AngularFirestore) { }

  ngOnInit(): void { }

  toggleHover(event: boolean) {
    this.isHovering = event
  }

  onDrop(file: File) {
    this.startUpload(file)
  }

  startUpload(event: File) {
    const file = event

    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ')
    }

    const path = `test/${new Date().getTime()}_${file.name}`
    const fileRef = this.storage.ref(path)
    
    this.task = this.storage.upload(path, file)
    this.percentage = this.task.percentageChanges()
    this.snapshot = this.task.snapshotChanges().pipe(
      finalize( async() => {
        this.downloadURL = await fileRef.getDownloadURL().toPromise()
        this.firestore.collection('files').add( { downloadURL: this.downloadURL, path } )
      })
    )
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }

}
