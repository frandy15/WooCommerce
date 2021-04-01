

const ProductCategory = (props) => {
    const {category} = props;
    return (
        <div className="container d-inline-flex p-2" style={{
            float: 'left',
            width: '300px',
            margin: '30px',
            height: '400px'}}>
        <div className="card mb-3 w-100 border-dark">
        <h3 className="card-header">{category?.name}</h3>
        <img src={category?.image?.sourceUrl} className="w-100 h-75" />
      </div>
      </div>
    )
}

export default ProductCategory;