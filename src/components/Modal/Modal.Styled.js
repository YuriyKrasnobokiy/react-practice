import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ///OR///
  /* width: 100vw;
  height: 100vh; */
  background-color: rgba(0, 0, 0, 0.5);
  &:hover {
    cursor: pointer;
  }

  .modal {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    max-width: 450px;
    width: 100%;
    min-height: 450px;

    background: white;
    border-radius: 10px;
    cursor: auto;
  }

  .closeBtn {
    position: absolute;
    top: 12px;
    right: 12px;
  }
`;
