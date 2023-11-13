import Button from 'react-bootstrap/Button';

const Buttons = props => {

    return(
        <Button type="submit" className={props.className}>{props.children}</Button>
    );
};

export default Buttons;