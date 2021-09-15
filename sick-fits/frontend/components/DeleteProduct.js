import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  console.log(payload);
  console.log('running the update function');
  cache.evict(cache.identify(payload.data.deleteProduct));
}

export default function DeleteProduct({ id, children }) {
  const [deleteProduct, { data, error, loading }] = useMutation(
    DELETE_PRODUCT_MUTATION,
    {
      variables: { id },
      update,
    }
  );
  return (
    <button
      type="button"
      disabled={loading}
      onClick={async () => {
        if (confirm('Are you sure?')) {
          console.log('Delete');
          const res = await deleteProduct().catch((err) => alert(err.message));
          console.log(res);
        }
      }}
    >
      {children}
    </button>
  );
}
DeleteProduct.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.any,
};
