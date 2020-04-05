import { Component, EventEmitter, Output } from '@angular/core'

@Component({
selector: 'app-post-create',
templateUrl: './post-create.component.html',
styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{
  valueEntered = '';
  titleEntered = '';
  @Output() postCreated = new EventEmitter();

  onAddPost(){

    const post = {
      title: this.titleEntered,
      content: this.valueEntered };

      this.postCreated.emit(post);
  }
}
