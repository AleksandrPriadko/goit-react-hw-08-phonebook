import style from '../Contacts/Style.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux/contacts';

const Filter = ({ value, onChange }) => (
  <label className={style.contacts}>
    <h3>Find contacts by name</h3>
    <input
      className={style.input}
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
