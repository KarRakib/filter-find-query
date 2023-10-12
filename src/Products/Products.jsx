
// eslint-disable-next-line react/prop-types
const Products = ({ result }) => {

    console.log('ami result', result);
    return (


        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {result}
        </div>
    )
}
export default Products