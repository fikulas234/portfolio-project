import { Fragment } from "react";
import Image from "next/image";
import classes from "./contact.module.css";

const ContactForm = (props) => {
  return (
    <Fragment>
      <form name="contact" method="POST" onSubmit={props.handleSubmit}>
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
            value={props.emailContent}
            type="email"
            id="email"
            name="email"
            placeholder="your email"
            onChange={props.handleChangeEmail}
          />
          <span>{props.errorMsg}</span>

          <div className={classes.msg_and_btn}>
            <textarea
              value={props.messageContent}
              rows={2}
              type="text"
              id="message"
              name="message"
              placeholder="message Filip"
              onChange={props.handleChangeMessage}
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
