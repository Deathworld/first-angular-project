import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../models/book.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class BooksService {

    books: Book[] = [];
    booksSubject = new Subject<Book[]>();

    emitBooks() {
        this.booksSubject.next(this.books);
    }

    /* Save books on a special Node */
    saveBooks() {
        firebase.database().ref('/books').set(this.books);
    }

    getBooks() {
/*        firebase.database().ref('/books').on('value', (data: DataSnapshot) => {
                    this.books = data.val() ? data.val() : [];
                    this.emitBooks();
                    console.log('Successfully retrieved books');
                }
            );*/
        firebase.database().ref('books/').once('value').then(snapshot => {
            this.books = snapshot.val();
            console.log(snapshot.val);
            this.emitBooks();
            console.log('Successfully retrieved books');
        });
    }

    getSingleBook(id: number) {
        return new Promise(
            (resolve, reject) => {
                firebase.database().ref('/books/' + id).once('value').then(
                    (data: DataSnapshot) => {
                        resolve(data.val());
                    }, (error) => {
                        reject(error);
                    }
                );
            }
        );
    }

    createNewBook(newBook: Book) {
        this.books.push(newBook);
        this.saveBooks();
        this.emitBooks();
        this.getBooks();
    }

    removeBook(book: Book) {
        if(book.photo) {
            const storageRef = firebase.storage().refFromURL(book.photo);
            storageRef.delete().then(
                () => {
                    console.log('Photo removed!');
                },
                (error) => {
                    console.log('Could not remove photo! : ' + error);
                }
            );
        }
        const bookIndexToRemove = this.books.findIndex(
            (bookEl) => {
                if(bookEl === book) {
                    return true;
                }
            }
        );
        this.books.splice(bookIndexToRemove, 1);
        this.saveBooks();
        this.emitBooks();
    }

    uploadFile(file: File) {
        return new Promise(
            (resolve, reject) => {
                const almostUniqueFileName = Date.now().toString();
                const upload = firebase.storage().ref()
                    .child('images/' + almostUniqueFileName + file.name).put(file);
                upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
                    () => {
                        console.log('Chargement…');
                    },
                    (error) => {
                        console.log('Erreur de chargement ! : ' + error);
                        reject();
                    },
                    () => {
                        resolve(upload.snapshot.downloadURL);
                    }
                );
            }
        );
    }

}