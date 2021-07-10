import React, { useRef } from 'react';
var onDelete
var a=null
class Borrar extends React.Component {
    constructor(props) {
        super(props)
        onDelete = () => {
            a = JSON.parse(window.localStorage.getItem("todos"));
            a.splice(this.state.aux, 1);
            window.location.reload();
            window.localStorage.setItem("todos", JSON.stringify(a))
        }
        this.state = {
            aux: this.props.aux,
            action: this.props.action
        }
    }
    render() {
        return (
            <>
                <button onClick={onDelete} id={this.props.aux}>Borrar</button>
            </>
        )
    }
};
export default Borrar;