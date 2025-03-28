import {Container} from 'react-bootstrap';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import ProductDetails from '../../Components/Products/ProductDetails';
import RateContainer from '../../Components/Rate/RateContainer';

const ProductDetailsPage = () => {
  return (
    <div className="min-vh-100">
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer />
      </Container>
    </div>
  );
};
export default ProductDetailsPage;
