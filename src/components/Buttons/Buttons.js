import Button from 'react-bootstrap/Button';

const Buttons = props => {

    return(
        <Button type="submit">{props.children}</Button>
    );
};

export default Buttons;