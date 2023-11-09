import styles from './TextInput.module.scss';
import Form from 'react-bootstrap/Form';

const TextInput = props => {

    return (
        <Form.Control value={props.value} onChange={props.onChange} type="text" placeholder="Normal text" />

    );
};

export default TextInput ;