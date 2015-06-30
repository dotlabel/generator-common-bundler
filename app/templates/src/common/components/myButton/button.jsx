
import React from 'react'

export default class MyButton extends React.Component {
    static propTypes = {
        onClick: React.PropTypes.func,
        text: React.PropTypes.string
    }

    static defaultProps = {
        onClick: function() {
            alert( 'MyButton::onClick' )
        },
        text: 'MyButton'
    }

    constructor( props ) {
        super( props )
    }

    render() {
        return (
            <button className="MyButton">
                <span className="MyButton-icon">λ</span>
                { this.props.text }
            </button>
        )
    }
}
