import React, { Component } from 'react'
import styles from './style.module.css';

class AddProduct extends Component {
   constructor(){
       super();
       this.state={
           title:"",
           price:0,
           rating:"",
           description:"",
       }
   }

   handleItem = (prod, e) => {
       if(prod === "title"){
           this.setState({
               title:e.target.value,
           },console.log(this.state.title))
       }
       if(prod === "price"){
        this.setState({
            price:e.target.value,
        })
    }
    if(prod === "rating"){
        this.setState({
            rating:e.target.value,
        })
    }
    if(prod === "description"){
        this.setState({
            description:e.target.value,
        })
    }
   }


    handleSubmit = () => {
        const { title, price, rating, description } = this.state;
        this.props.handleAddProduct(title, price, rating, description);
    }


    render() {
        return (
            <div className={styles.create_assignment}>
                <div className={styles.header}>
                    <h1>Add A Product</h1>
                </div>
                <div className={styles.form_outer}>
                    <form className={styles.form_container} action="../../db.json" method="POST">
                        <label htmlFor="title" className={styles.label_field}>Name</label>
                        <input 
                            type="text"
                            name="title"
                            className={styles.input_field}
                            onChange={ (e) => this.handleItem("title", e) }
                        />
                        <label htmlFor="description" className={styles.label_field}>Description</label>
                        <textarea
                            rows="3"
                            name="description"
                            className={styles.textarea_field}
                            onChange={ (e) => this.handleItem("description", e) }
                        ></textarea>
                        <label htmlFor="price" className={styles.label_field}>Price</label>
                        <input 
                            type="number"
                            name="price"
                            className={styles.input_field}
                            onChange={ (e) => this.handleItem("price", e) }
                        />
                        <label htmlFor="rating" className={styles.label_field}>Rating</label>
                        <input 
                            type="number"
                            name="rating"
                            className={styles.input_field}
                            onChange={ (e) => this.handleItem("rating", e) }
                        />
                        <div className={styles.submit_container}>
                        <input 
                            type="submit"
                            value="Add"
                            className={styles.input_field}
                            onClick={ () => this.handleSubmit() }
                        />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddProduct;
