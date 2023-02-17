import { useState } from "react";

import Card from "../layout/card";
import NavigationElements from "../left-navigation/navigation";
import RightSideContent from "./main-content";
import Image from "next/image";
import classes from "./contact.module.css";

import ContactForm from "./contact-form";

function ContactPageContent() {
  const [messageSent, setMessageSent] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const mailFormat =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.match(mailFormat)) {
      setMessageSent(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter a valid email");
    }
  };

  return (
    <Card>
      <NavigationElements />
      <RightSideContent>
        <div className={classes.contact}>
          <div className={classes.chat_top}>
            <div className={classes.chat_name}>
              <Image
                src="/images/slika.png"
                height={30}
                width={30}
                alt="avatar"
              />
              <span>Filip</span>
            </div>

            <div className={classes.chat_title}>
              <span>Direct message</span>
            </div>

            <div className={classes.soc_networks}>
              <Image
                src="/images/social-networks/github.svg"
                height={30}
                width={30}
                alt="github icon"
              />
              <Image
                src="/images/social-networks/linkedin.svg"
                height={30}
                width={30}
                alt="linkedin icon"
              />
            </div>
          </div>
          <div className={classes.form_container}>
            <div className={classes.messages}>
              <div className={`${classes.first_message} ${classes.message}`}>
                <Image
                  src="/images/greetings.png"
                  height={50}
                  width={50}
                  alt="greetings avatar"
                />
                <p>Hello!</p>
              </div>
              <div className={`${classes.message}`}>
                <Image
                  src="/images/slika.png"
                  height={50}
                  width={50}
                  alt="avatar"
                />
                <p>
                  If you have any question or you want to work with me please
                  contact me below 😊
                </p>
              </div>
              {messageSent && (
                <div className={`${classes.message}`}>
                  <Image
                    src="/images/thumbs-up.png"
                    height={50}
                    width={50}
                    alt="thumbs up avatar"
                  />
                  <p>
                    Thank you for contacting me. I will get back to you ASAP! 😊
                  </p>
                </div>
              )}
            </div>
            <ContactForm
              handleChange={handleChange}
              submitForm={submitForm}
              errorMsg={errorMessage}
            />
          </div>
        </div>
      </RightSideContent>
    </Card>
  );
}

export default ContactPageContent;
