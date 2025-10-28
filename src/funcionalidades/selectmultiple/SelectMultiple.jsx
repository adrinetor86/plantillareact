import React, {Component} from 'react';

class SelectMultiple extends Component {
    selectHospital= React.createRef();
    getSeleccion = () => {

        let aux = [];
        let options = this.selectHospital.current.options;

        for (var option of options){

            if (option.selected == true){
                aux.push(option.value);
            }
        }
        return aux;

    }



    render() {
        return (
            <div>

                <form>
                    <select ref={this.selectHospital}>


                    </select>
                    {/*Meter eventlistener*/}
                    <button>Buscar</button>
                </form>
            </div>
        );
    }
}

export default SelectMultiple;