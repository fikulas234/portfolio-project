import { Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import classes from "./contact.module.css";

const ContactForm = (props) => {
  const messageHandleChange = () => {
    var box = document.getElementById("message");
    let height = box.offsetHeight;

    if (height < box.scrollHeight) {
      box.style.height = box.scrollHeight + "px";
    }
    if (height > box.scrollHeight) {
      box.style.height = box.scrollHeight + "px";
    }
  };

  return (
    <Fragment>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={props.submitForm}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className={classes.placeholder_div}>
          <Image
            src="/images/avatar-placeholder.svg"
            height={50}
            width={50}
            alt="avatar icon"
          />
        </div>

        <div className={classes.input_fields}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your email"
            onChange={props.handleChange}
          />
          <span>{props.errorMsg}</span>

          <div className={classes.msg_and_btn}>
            <textarea
              rows={2}
              type="text"
              id="message"
              name="message"
              placeholder="message Filip"
              onChange={messageHandleChange}
            />

            <button type="submit">
              <Image
                src="/images/send-icon.svg"
                height={30}
                width={30}
                alt="send icon"
              />
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default ContactForm;
