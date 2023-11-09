import styles from './InputForm.module.scss'
import Form from 'react-bootstrap/Form';

const InputForm = props => {

    return (
 
    <Form.Select value={props.value} onChange={props.onChange} aria-label="Default select example">     
      <option value="Reserved">Reserved</option>
      <option value="Busy">Busy</option>
      <option value="Free">Free</option>
      <option value="Cleaning">Cleaning</option>
    </Form.Select>

    );
};
export default InputForm;