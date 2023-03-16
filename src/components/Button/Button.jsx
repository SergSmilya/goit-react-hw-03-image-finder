import css from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({
  children,
  handleLoadMore,
  visibleSpinerBool,
}) {
  return (
    !visibleSpinerBool && (
      <button
        type="button"
        className={css.Button}
        onClick={handleLoadMore}
        disabled={visibleSpinerBool}
      >
        {children}
      </button>
    )
  );
}

Button.propTypes = {
  visibleSpinerBool: PropTypes.bool.isRequired,
  handleLoadMore: PropTypes.func.isRequired,
};
