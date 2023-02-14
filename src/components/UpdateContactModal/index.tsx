import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { UpdateModal } from "./style";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/generalContext";

const UpdateContactModal = () => {

  const { modalUpdateContact, setModalUpdateContact, onUpdateContact } = useContext(GeneralContext);

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm()
  
  return (
    <UpdateModal>
      <section>
        <div className="base-div-modal">
          <header>
            <h2>Atualizar Contato</h2>
            <button onClick={() => setModalUpdateContact(!modalUpdateContact)}>x</button>
          </header>
          <form onSubmit={handleSubmit(onUpdateContact)}>
            <div>
              <label htmlFor="full_name">Nome:</label>
              <input type="text" 
                placeholder="Nome completo"
                autoComplete="off"
                {...register("full_name")}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="text" 
                placeholder="example@email.com"
                autoComplete="off"
                {...register("email")}
              />
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <input type="text" 
                placeholder="11981828384"
                {...register("number")}
              />
            </div>
            <button type="submit">Criar</button>
          </form>
        </div>
      </section>
    </UpdateModal>    
  )
}

export default UpdateContactModal;