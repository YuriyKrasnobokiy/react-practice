import React, { useEffect, useState } from 'react';
import { StyledModal } from './Modal.Styled';

// Методи життєвого циклу - це зарезервовані реактом методи(функції),
//  які запускаються в певний період життя компоненти самим Реактом.

//  componentDidMount() {} - метод життєвого цикл,
//     що запускається один раз, після успішного монтування компонети в DOM.

//     Використання:
//     - Вішаються глобальні слухачі подій (addEventListener)
//     - Встановлюються асинхронні таймери та лічильники (setTimeout, setInterval)
//     - Зчитуються дані з локального сховища та встановлюємо їх в стейт
//     - Надсилаються мережеві запити (HTTP request)

//  componentWillUnmount() {} - метод життєвого цикл,
//     що запускається один раз, перед повним видаленням компонети з DOM.

//     Використання:
//     - Прибираються глобальні слухачі подій (removeEventListener)
//     - Прибирати асинхронні таймери та лічильники (clearTimeout, clearInterval)
//     - Відхиляти мережеві запити (cancel HTTP request)

//  componentDidUpdate(prevProps, prevState) {} - метод життєвого цикл,
//     що запускається кожен раз, після того, як компонента оновилася(змінилися пропси, або стейт).

//     Використання:
//     - Надсилаються мережеві запити (HTTP request)
//     - Оновлюють(синхронізуються) дані зі стейту з локальним сховищем

const Modal = ({ modalData, closeModal }) => {
  // state = {
  //   counter: 1,
  // };
  const [counter, setCounter] = useState(1);

  // componentDidMount()
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      // componentWillUnmount(
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [closeModal]);

  useEffect(() => {
    console.log('counter:' + counter);
  }, [counter]);
  // componentDidMount() {
  //   // console.log('Modal has successfully been mounted');
  //   document.body.style.overflow = 'hidden';
  //   window.addEventListener('keydown', this.handleKeyDown);
  // }

  // componentWillUnmount() {
  //   // console.log('Modal was successfully deleted');
  //   window.removeEventListener('keydown', this.handleKeyDown);
  //   document.body.style.overflow = 'auto';
  // }

  const handleIncrementProduct = () => {
    // setCounter(counter + 1);
    /////АБО/////
    setCounter(prevState => prevState + 1);
  };

  const handleOverlayClick = evt => {
    if (evt.target === evt.currentTarget) {
      closeModal();
    }
  };

  return (
    <StyledModal onClick={handleOverlayClick}>
      <div className="modal">
        <button onClick={closeModal} type="button" className="closeBtn">
          &times;
        </button>
        <h2>Product details</h2>
        <div>
          <h3>Title: {modalData.title}</h3>
          <p>Price: {modalData.price}$</p>
          <p>Discount: {modalData.discount}$</p>
          <button onClick={handleIncrementProduct}>
            Add product: {counter}
          </button>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
