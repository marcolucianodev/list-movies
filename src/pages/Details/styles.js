import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    padding: 5%;
    height: 100%;
  }

  .details {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    background-color: #333333;
    border-radius: 10px;

    @media (max-width: 680px) {
      flex-direction: column;
    }

    img {
      width: 300px;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;

      @media (max-width: 680px) {
        border-top-right-radius: 10px;
        border-bottom-left-radius: 0px;
      }
    }

    .info-movie {
      padding: 2rem;
      display: flex;
      flex-direction: column;

      @media (max-width: 680px) {
        max-width: 300px;
      }

      span.sinopse {
        margin: 30px 0 15px;
        display: inline-block;
        line-height: 160%;
      }

      span.release {
        display: block;
        margin: 0 0 20px 0;
      }

      button {
        background-color: #FFFFFF;
        padding: 10px 30px;
        font-size: 15px;
        font-weight: 900;
        color: 000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
`

