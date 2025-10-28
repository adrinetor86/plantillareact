import React, {Component} from 'react';
import axios from "axios";

class HomeComponent extends Component {


    state={
        dato:null
    }

    cargarDatos=()=>{
        let request=""
        axios.get(this.url + request).then((response) => {

        console.log(response.data);
            this.setState({
                dato:response.data
            })
        });
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                {
                    this.state.dato &&

                    <table>
                        <thead>
                        <tr>
                            <th>Dato 1</th>
                            <th>Dato 2</th>
                            <th>Dato 3</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.dato.map((dato,index) => {
                                return (<tr key={index}>
                                    <td>{dato.name}</td>
                                    <td>{dato.name}</td>
                                    <td>{dato.name}</td>
                                </tr>)
                        })
                        }
                        </tbody>
                    </table>
                }
            </div>
        );
    }
}

export default HomeComponent;