import React, {Component} from 'react';

class EditComponent extends Component {


    edit=(event)=>{
        event.preventDefault();
        //añadir

    }

    render() {
        return (
            <div className="container my-5">

                <div className="card bg-dark border-primary shadow">
                    <div className="card-body p-4">
                        <h3 className="card-title text-primary mb-4">Edit Registro</h3>
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
                                <button onClick={this.edit} className="btn btn-primary">Editar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditComponent;