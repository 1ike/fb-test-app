import React from "react";
import { Field, reduxForm } from "redux-form";

import _connect from "../../redux/connect";

class Form extends React.Component {
  inputName = "inputPoint";

  сreatePoint = value => {
    const name = value[this.inputName];
    if (!name) {
      this.focusInput();
      return;
    }
    console.log(this.props);
    this.props.сreatePoint(name);
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
        onSubmit={this.props.handleSubmit(this.сreatePoint)}
      >
        <Field
          component="input"
          name={this.inputName}
          id={this.inputName}
          placeholder=" Новая точка маршрута"
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

export default _connect()(reduxFormWrapper);
