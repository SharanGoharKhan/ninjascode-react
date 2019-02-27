import React from 'react';
import Circle from './Circle/Circle';
import './styles.css'

class CircleList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            width: 0,
            height: 0,
            circles: 0
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions() {
        let circles = ((window.innerWidth-(window.innerWidth%70)) / 70) * ((window.innerHeight-(window.innerHeight%70)) / 70)
        circles = Math.floor(circles)
        this.setState({ width: window.innerWidth, height: window.innerHeight, circles: circles })
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    render() {
        return (
            <div className="circleList">
                {Array(this.state.circles).fill(0).map((v,ind)=>(
                    <Circle key={ind}/>
                ))}
            </div>
        )
    }

}

export default CircleList;