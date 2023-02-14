import styled from "styled-components";

export const CreateModal = styled.div`
  z-index: 4;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.25);

  section {
    animation: zoomIn 1s;
    width: 30%;
    min-width: 300px;

    .base-div-modal{
      width: 100%;
      background-color: #F0E68C;
      border-radius: 5px;
      border: 1px solid #fff;

      text-shadow: -1px -1px 3px #000000;

      button:hover {
        background-color: #FF4500;
      }
      
      header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 20px 30px;
        align-items: center;
        font-style: italic;

        button {
          font-weight: bold;
          font-size: 20px;
          width: 30px;
          height: 30px;
          background-color: #49ccc1;
          border: none;
          border-radius: 5px;
          color: #fff;
        }
      }

      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 30px 20px 30px;
        gap:15px;

        div {
          display: flex;
          align-items: flex-start;
          flex-direction: column;

          label {
            padding: 7px 0;
            font-style: italic;
          }
          input {
            width: 100%;
            border: 1px solid #49ccc1;
            border-radius: 3px;

            color: #2F4F4F;

            padding: 15px 0 15px 10px;
          }
          span {
            color: #B22222;
            margin: 0;
            font-size: 10px;
            padding: 5px 2px;
          }
        }
        button {
          width: 40%;
          height: 2rem;
          margin: 0 auto;
          

          background-color: #49ccc1;
          color: #fff;

          border: none;
          border-radius: 5px;

          font-style: italic;
        }
      }
    }
  }
`