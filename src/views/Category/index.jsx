import data from "../../Components/Json/arrayProductos.json";
import { useParams } from "react-router-dom";


const { data: { items } } = data;
const PageCategory = () => {

    const { categoryId } = useParams();

    const products = items.filter((item) => item.category === categoryId);

    return (
        <>
            <div className="container">
                <h2>Productos por categoría</h2>
                <div className="row">
                    {products.map((product) => {
                        return (
                            <div className="col-md-4" key={`product-${product.id}`} >
                                <div className="card">
                                    <h6>{product.category}</h6>
                                    <img src={product.img} className="card-img-top" alt={product.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">${product.price}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default PageCategory;