import React from 'react';
import { Main } from './main/Main';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        // setInterval(() => {
        //     let newCount = this.state.count + 1;
        //     this.setState({
        //         count: newCount 
        //     });
        // }, 1000);
    }

    render() {
        return (
            <div className="layout">
                <Header></Header>
                <Main count={this.state.count}></Main>
                <Footer></Footer>
            </div>
        );
    }
}

export default Layout;