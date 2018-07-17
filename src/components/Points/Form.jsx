import React from "react";
import { Field, reduxForm } from "redux-form";

import _connect from "../../redux/connect";

const uid = (() => {
  let id = 5;
  return () => id++;
})();

const mapStateToProps = ({ center }) => ({ center });

export class Form extends React.Component {
  inputName = "inputPoint";

  createPoint = value => {
    const name = value[this.inputName];
    if (!name) {
      this.focusInput();
      return;
    }

    this.props.createPoint({
      id: uid(),
      name,
      placemark: {
        geometry: {
          coordinates: this.props.center
        },
        properties: {
          hintContent: name,
          balloonContent: name
        },
        options: {
          preset: "islands#blueCircleDotIconWithCaption",
          draggable: true
        }
      }
    });
    this.props.reset();
  };

  focusInput = () => {
    this.input.getRenderedComponent().focus();
  };

  render() {
    const title = "Добавить точку";
    return (
      <form
        id="newPointForm"
        className="new-point-form"
        onSubmit={this.props.handleSubmit(this.createPoint)}
      >
        <Field
          component="input"
          name={this.inputName}
          id={this.inputName}
          placeholder=" Введите новую точку маршрута"
          className="new-point-form__input"
          ref={input => {
            this.input = input;
          }}
          withRef
          autoFocus={true}
        />
        <button
          type="submit"
          className="new-point-form__submit-button"
          aria-label={title}
          title={title}
        >
          +
        </button>
      </form>
    );
  }
}

const reduxFormWrapper = reduxForm({ form: "createPoint" })(Form);

export default _connect(mapStateToProps)(reduxFormWrapper);
