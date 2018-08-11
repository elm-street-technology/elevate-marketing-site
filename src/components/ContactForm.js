import React from "react";
import PropTypes from "prop-types";
import "whatwg-fetch"; // Fetch Polyfill

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
*/

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      showModal: false,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(this.handleSuccess)
      .catch((error) => alert(error));
    event.preventDefault();
  };

  handleSuccess = () => {
    this.setState({
      name: "",
      email: "",
      message: "",
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    if (this.state.showModal) {
      return (
        <div>
          <p>
            Thank you for reaching out. I will get back to you as soon as
            possible.
          </p>
          <button type="button" onClick={this.closeModal}>
            Okay
          </button>
        </div>
      );
    }

    return (
      <form
        name="contact"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot" onChange={this.handleInputChange} />
          </label>
        </p>

        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={this.state.name}
          onChange={this.handleInputChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <input
          name="message"
          type="text"
          placeholder="Message"
          value={this.state.message}
          onChange={this.handleInputChange}
          required
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  data: PropTypes.object,
};

export default ContactForm;
