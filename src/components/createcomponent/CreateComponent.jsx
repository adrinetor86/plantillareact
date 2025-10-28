import React, {Component} from 'react';
import axios from "axios";
import {Navigate} from "react-router-dom";

class CreateComponent extends Component {

    cajaNumero = React.createRef();
    cajaNombre = React.createRef()
    cajaImagen = React.createRef()
    cajaId = React.createRef()


    state = {
        status: false
    }
    //CAMBIAR NOMBRES
    crear = (event) => {
        event.preventDefault();

        var numero = this.cajaNumero.current.value;
        var nombre = this.cajaNombre.current.value;
        var imagen = this.cajaImagen.current.value;
        var id = this.cajaId.current.value;

        var objetoEnviar = {
            id: id,
            nombre: nombre,
            imagen: imagen,
            numero: numero
        }

        let request = ""

        axios.post(this.url + request, objetoEnviar).then((response) => {
            console.log("Se ha creado el registro")
            this.setState({status: true});

        })
    }

    render() {

        return (
            <div className="container my-5">
                {
                    this.state.status === true &&
                    <Navigate to={"/"}/>
                }
                <div className="card bg-dark border-primary shadow">
                    <div className="card-body p-4">
                        <h3 className="card-title text-primary mb-4">Nuevo Registro</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="id" className="form-label text-light">Id</label>
                                <input type="number"
                                       ref={this.cajaId}
                                       id="id"
                                       className="form-control bg-black text-light border-primary"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label text-light">Nombre</label>
                                <input type="text"
                                       ref={this.cajaNombre}
                                       id="nombre"
                                       className="form-control bg-black text-light border-primary"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="imagen" className="form-label text-light">Imagen</label>
                                <input type="text"
                                       ref={this.cajaImagen}
                                       id="imagen"
                                       className="form-control bg-black text-light border-primary"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="numero" className="form-label text-light">Numero</label>
                                <input type="number"
                                       ref={this.cajaNumero}
                                       id="numero"
                                       className="form-control bg-black text-light border-primary"/>
                            </div>

                            <div className="d-grid gap-2">
                                <button onClick={this.crear} className="btn btn-primary">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateComponent;