import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { UpdateModal } from "./style";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/generalContext";

const UpdateContactModal = () => {

  const { modalUpdateContact, setModalUpdateContact, onUpdateContact } = useContext(GeneralContext);

  const formUpdateContactSchema = yup.object().shape({
    full_name: yup.string(),
    email: yup.string(),
    number: yup.string()
  })

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({
    resolver:yupResolver(formUpdateContactSchema)
  })
  
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
              {/* <span>{errors?.full_name?.message}</span> */}
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="text" 
                placeholder="example@email.com"
                autoComplete="off"
                {...register("email")}
              />
              {/* <span>{errors?.email?.message}</span> */}
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <input type="text" 
                placeholder="11981828384"
                {...register("number")}
              />
              {/* <span>{errors?.number?.message}</span> */}
            </div>
            <button type="submit">Criar</button>
          </form>
        </div>
      </section>
    </UpdateModal>    
  )
}

export default UpdateContactModal;