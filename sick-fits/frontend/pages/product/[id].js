import { SingleProduct } from '../../components/SingleProducts';

export default function SingleProductPage({ query }) {
  return <SingleProduct id={query.id} />;
}
