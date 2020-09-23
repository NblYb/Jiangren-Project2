import React from 'react';
import '../scss/Background.scss'

class Background extends React.Component {
    render() {
        
        if (this.props.currentHour <= 12) {
            return (
                <div className="morning">Hello World!</div>
            )
        }

    }
}

export default Background;