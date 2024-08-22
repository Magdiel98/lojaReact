import React from "react";
import "./css/FaleConosco.css"

function FaleConosco()
{
    return(
        <main className="container py-5">
            <div className="d-flex flex-column p-5 border rounded-3 shadow bg-body-secondary">
                <h2>Fale Conosco</h2>
                <hr/>
                <form action="" className="w-100">
                    <input type="email" placeholder="Digite o E-mail" className="form-control mb-3 shadow" required/>
                    <input type="text" placeholder="Digite o Nome" className="form-control mb-3 shadow" required/>
                    <input type="text" placeholder="Digite o Telefone" className="form-control mb-3 shadow" required/>
                    <input type="text" placeholder="Digite o CPF" className="form-control mb-3 shadow" required/>

                    <select name="" id="" className="form-select mb-3 shadow" required>
                        <option disabled selected hidden>Categoria</option>
                    </select>

                    <select name="" id="" className="form-select mb-3 shadow" required>
                        <option disabled selected hidden>Estado</option>
                    </select>

                    <input type="text" placeholder="Digite o Assunto" className="form-control mb-3 shadow" required/>

                    <textarea name="" id="" className="form-control mb-3 shadow" rows={"7"}></textarea>

                    <input type="file" className="form-control mb-3 shadow"/>

                    <button type="submit" className="btn bg-success text-white mt-3">Enviar</button>
                </form>
            </div>
        </main>
    )
}

export default FaleConosco; 