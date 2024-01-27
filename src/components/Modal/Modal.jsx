import React, { Component } from 'react';
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

export default class Modal extends Component {
  state = {
    counter: 1,
  };

  componentDidMount() {
    // console.log('Modal has successfully been mounted');
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // console.log('Modal was successfully deleted');
    window.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'auto';
  }

  componentDidUpdate() {
    // console.log('Modal was updated (PROPS os STATE was changed)');
  }

  handleIncrementProduct = () => {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  };

  handleOverlayClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.closeModal();
    }
  };
  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <StyledModal onClick={this.handleOverlayClick}>
        <div className="modal">
          <button
            onClick={this.props.closeModal}
            type="button"
            className="closeBtn"
          >
            &times;
          </button>
          <h2>Product details</h2>
          <div>
            <h3>Title: {this.props.modalData.title}</h3>
            <p>Price: {this.props.modalData.price}$</p>
            <p>Discount: {this.props.modalData.discount}$</p>
            <button onClick={this.handleIncrementProduct}>
              Add product: {this.state.counter}
            </button>
          </div>
        </div>
      </StyledModal>
    );
  }
}
