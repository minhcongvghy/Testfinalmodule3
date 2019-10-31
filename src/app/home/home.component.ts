import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public bookList: Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBookList().subscribe(
      result => {
        this.bookList = result;
        console.log(this.bookList);
      }, error => {
        alert('Lỗi dữ liệu');
      });
  }
  seen(i) {
    const book = this.bookList[i];
    book.read = !book.read;
    console.log(book.read)

    return this.bookService.editBook(book).subscribe(
      next => {
        alert('Chỉnh sửa thành công');
        document.location.reload();
      }, error => {
        alert('Chỉnh sửa thất bại');
      }
    );
  }

}
