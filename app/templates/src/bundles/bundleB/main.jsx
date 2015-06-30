
import React from 'react'

import MyButton from 'components/myButton/button'

export default class BundleB extends React.Component {
    constructor( props ) {
        super( props )
    }

    onClick = () => {
        alert( 'BundleB::onClick passed to MyButton' )
    }

    render() {
        return (
            <div>
                <h2>Bundle B</h2>
                <MyButton onClick={ this.onClick }></MyButton>
            </div>
        )
    }
}

console.log( 'BundleB included' )

const el = document.createElement( 'div' )
document.body.appendChild( el )

React.render( <BundleB />, el )
