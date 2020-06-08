import { Component, OnInit } from "@angular/core"
import { AngularFireUploadTask } from "@angular/fire/storage/task"
import { Observable } from "rxjs"
import { AngularFireStorage } from "@angular/fire/storage"
import { finalize, map, shareReplay } from "rxjs/operators"
import { AngularFirestore } from "@angular/fire/firestore"
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout"

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.scss"],
})
export class FileUploadComponent implements OnInit {
  fileReader = new FileReader()
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset]).pipe(
    map((result) => result.matches),
    shareReplay()
  )
  task: AngularFireUploadTask
  percentage: Observable<number>
  snapshot: Observable<any>
  downloadURL: Observable<string>
  isHovering: boolean
  imageURL: ArrayBuffer | string
  imageMessage: string

  constructor(
    private breakpointObserver: BreakpointObserver,
    private storage: AngularFireStorage,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {}

  toggleHover(event: boolean) {
    this.isHovering = event
  }

  onSelectFile(files: FileList) {
    this.validateFile(files[0])
    this.fileReader.readAsDataURL(files[0])
    this.fileReader.onload = (event) => {
      this.imageURL = this.fileReader.result
    }
  }

  validateFile(file: File) {
    if (file.type.split("/")[0] !== "image") {
      this.imageMessage = "This is an unsupported file type."
      return null
    }
    return file
  }

  startUpload(files: FileList) {
    // const file = files[0]
    // this.image = file
    // if (file.type.split("/")[0] !== "image") {
    //   console.error("unsupported file type :( ")
    // }
    // const path = `recipe_image/${new Date().getTime()}_${file.name}`
    // const fileRef = this.storage.ref(path)
    // this.task = this.storage.upload(path, file)
    // this.percentage = this.task.percentageChanges()
    // this.snapshot = this.task.snapshotChanges().pipe(
    //   finalize(async () => {
    //     this.downloadURL = await fileRef.getDownloadURL().toPromise()
    //     this.firestore.collection("files").add({ downloadURL: this.downloadURL, path })
    //   })
    // )
  }
}
