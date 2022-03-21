import React, { Component } from 'react';
import {useParams} from 'react-router-dom';
import Data from './Data';
import Header from "./Header";


export class Weather extends Component {
    render() {

        const Wrapper = (props) => {
            const params = useParams();
            return(
                <>
                <Header city={params.city}/>
                <Data city={params.city}/>
                </>
            )
        }

        return (
                <Wrapper />
        );
    }
}
export default Weather