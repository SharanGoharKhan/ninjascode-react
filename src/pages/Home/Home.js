import React from 'react';
import './Home.css';
import CircleList from '../../components/CircleList/CircleList';

class Home extends React.Component {

    render() {
        return (
            <div className="home-container">
                <CircleList />
                <div className="logo-container">
                    <span>ninja's code</span>
                </div>
                <div className="home-text-container">
                    <div className="home-text-1">
                        <h3>fast, agile & bootrsapped</h3>
                    </div>
                    <div className="home-text-2">
                        <h3>team of react, react native<br></br>
                        and node.js developers</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;