import Link from 'next/link';


const ProductCategory = (props) => {
    const {category} = props;
    return (
        <div className="container d-inline-flex p-2" style={{
            float: 'left',
            width: '300px',
            margin: '30px',
            height: '400px'}}>
        <div className="card mb-3 w-100 border-dark h-60">
        <h3 className="card-header">{category?.name}</h3>
            <Link href={`/category?slug=${category?.slug}-${category?.productCategoryId}`} as={`/category/${category?.slug}-${category?.productCategoryId}`} >
            <a>
            <img src={category?.image?.sourceUrl} className="w-100" style={{height: '270px'}} />
            </a>
            </Link>
      </div>
      </div>
    )
}

export default ProductCategory;