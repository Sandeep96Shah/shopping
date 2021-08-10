import React, { Component } from 'react'
import styles from './style.module.css';
import ProductDetails from './ProductDetails';
import { FaPencilAlt, FaTrash, FaCartPlus } from 'react-icons/fa';


class ProductItem extends Component {

    constructor(props){
        super();
        this.state={
            edit:false,
            description:props.Description,
            title:props.Title,
            rating:props.Rating,
            price:props.Price,
            poster:props.Poster,
            Id:props.Id,
            detail:false,
            cart:false,
        }
    }

    handleEdit = () => {
        this.setState({
            edit:true,
        })
        console.log("editting");
    }

    handleChange = (e) => {
        const name = e.target.name;
        this.setState({
            [name]:e.target.value,
        })
    }

    handleCancel = () => {
        this.setState({
            edit:false,
        })
    }

    handleSave = (id, product) => {
        this.setState({
            edit:false,
        })
        this.props.handleSave(id, product);
    }

    handleCartProduct = (product,val) => {
        if(val){
            this.props.handleAddToCart(product);
        }else{
            this.props.handleDeleteCartProduct(this.props.id);
        }
        this.setState({
            cart:val,
        })
    }

    handleDetail = (val) => {
        this.setState({
            detail:val,
        })
    }

    render() {
        const { Id, poster, price, rating, description, title } = this.state;
        const product ={
            Id:Id,
            Title:title,
            Price:price,
            Rating:rating,
            Description:description,
            Poster:poster
        }
        const { Poster, Title, Price, Rating, Description, handleDelete, handleDeleteCartProduct } = this.props;
        const productCart = {
            Id:this.props.Id,
            id:this.props.id,
            Title:Title,
            Price:Price,
            Rating:Rating,
            Poster:Poster,
            Description:Description
        }
        return (
            <div className={styles.item}>
                <div className={styles.item_detail}>
                    <div className={styles.poster}>
                        <img src={Poster} alt="poster" onClick={ () => this.handleDetail(true)} />
                        {
                            this.state.detail &&
                            <ProductDetails 
                                Poster={Poster}
                                Title={Title}
                                Rating={Rating}
                                Price={Price}
                                Description={Description}
                                handleDetail={this.handleDetail}
                            />
                        }
                    </div>
                    <div className={styles.description}>
                        <div className={styles.title}>
                            {
                                this.state.edit &&
                                <input className={styles.area} type="text" name="title" defaultValue={Title} onChange={ (e) => this.handleChange(e) }/>
                            }
                            {
                                !this.state.edit &&
                                <h2>{Title}</h2>
                            }
                        </div>
                        <div className={styles.price}>
                            {
                                this.state.edit &&
                                <input className={styles.area} type="number" name="price" defaultValue={Price} onChange={ (e) => this.handleChange(e) }/>
                            }
                            {
                                !this.state.edit &&
                                <h3>{Price}</h3>
                            }
                            
                        </div>
                        <div className={styles.rating}>
                            {
                                this.state.edit &&
                                <input className={styles.area} type="text" name="rating" defaultValue={Rating} onChange={ (e) => this.handleChange(e) }/>
                            }
                            {
                                !this.state.edit && 
                                <h4>Rating : {Rating}/10</h4>
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.item_description}>
                    <div className={styles.desc}>
                        {
                            this.state.edit && 
                                <textarea className={styles.area} name="description" defaultValue={Description} onChange={ (e) => this.handleChange(e) }>
                                </textarea>
                        }
                        {
                            !this.state.edit &&
                            <p>{Description}</p>
                        }
                    </div>
                    <div className={styles.btn}>
                        {
                            !this.state.edit && this.props.cart &&
                            <div className={styles.delete_btn} onClick={ () => handleDeleteCartProduct(this.props.id) }><FaTrash color="red" fontSize="30px" /></div>
                        }
                        <div className={styles.btn_option}>
                            {
                                !this.state.edit && !this.props.cart &&
                                <div className={styles.delete_btn} onClick={ () => handleDelete(this.props.Id, this.props.id) }><FaTrash color="red" fontSize="30px" /></div>
                            }
                            {
                                !this.state.edit && !this.props.cart &&
                                <div className={styles.edit_btn} onClick={ () => this.handleEdit(this.props.Id) } ><FaPencilAlt color="green" fontSize="30px"/></div>
                            }
                        </div>
                        <div>
                            {
                                !this.state.edit && !this.props.cart &&
                                <div className={styles.edit_btn} onClick={ () => this.handleCartProduct(productCart, !this.state.cart) }><FaCartPlus color={ this.state.cart ? "red" : "blue"} fontSize="30px" /></div>                        
                            }
                        </div>
                        {
                            this.state.edit &&
                            <div className={styles.cancel} onClick={ () => this.handleCancel() }>Cancel</div>
                        }
                        {
                            this.state.edit &&
                            <div className={styles.save} onClick={ () => this.handleSave(this.props.id, product) } >Save</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductItem;
