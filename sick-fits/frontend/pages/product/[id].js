import PropTypes from 'prop-types';
import { SingleProduct } from '../../components/SingleProducts';

export default function SingleProductPage({ query }) {
  return <SingleProduct id={query.id} />;
}
SingleProductPage.propTypes = {
  query: PropTypes.object.isRequired,
};
