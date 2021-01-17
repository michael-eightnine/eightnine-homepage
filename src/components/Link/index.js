import PropTypes from 'prop-types'
import './link.scss';

/**
 * Basic link component
 *
 * @param {object} props - react props
 * @param {node} props.children - content to display within the anchor
 * @param {string} props.className - optional classname
 * @param {string} props.href - destination
 * @param {string} props.target - anchor property
 *
 * @returns {JSX}
 */
const Link = ({ children, className, href, target }) => (
  <a className={`link ${className}`} {...{ href, target }}>
    {children}
  </a>
)

Link.defaultProps = {
  className: ''
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  target: PropTypes.string
}

export default Link
