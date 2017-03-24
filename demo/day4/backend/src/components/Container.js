/**
 * Created by tha on 23-03-2017.
 */
import React, { Component } from 'react';

class Container extends Component{
    constructor(props) {
        super(props);
        this.bookToEdit = this.bookToEdit.bind(this);
        this.saveBook = this.saveBook.bind(this);
        this.bookToDelete = this.bookToDelete.bind(this);
        this.state = { selectedBook: {} }
        this.state = { facade: this.props.facade }
    }
        bookToEdit(){}
        saveBook(){}
        bookToDelete(id){
            this.state.facade.deleteBook(id, () => {
                this.props.facade.deleteBook(id);
                this.setState({ facade: this.props.facade });
            });
        }
        render(){
           return <div>

                    <h4>Number of books in the factory right now: {this.props.facade.books.length}</h4>
               <button onClick={()=>{this.bookToDelete(102);}}>click to delete</button>
            </div>
        }
}
export default Container;