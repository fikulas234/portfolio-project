import { useState } from "react";
import Link from "next/link";

import Card from "../layout/card";
import NavigationElements from "../left-navigation/navigation";
import RightSideContent from "./main-content";
import Image from "next/image";
import classes from "./contact.module.css";

import ContactForm from "./contact-form";

function ContactPageContent() {
  const [messageSent, setMessageSent] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [sendingNotification, setSendingNotification] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setErrorMessage("");
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);

    const box = document.getElementById("message");
    const height = box.offsetHeight;

    if (height < box.scrollHeight) {
      box.style.height = box.scrollHeight + "px";
    }
    if (height > box.scrollHeight) {
      box.style.height = box.scrollHeight + "px";
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const mailFormat =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.match(mailFormat)) {
      const data = new FormData(e.currentTarget);

      try {
        setSendingNotification("Sending message...");
        const response = await fetch("/api/contact", {
          method: "post",
          body: new URLSearchParams(data),
        });
        if (!response.ok) {
          throw new Error(`Invalid response: ${response.status}`);
        }
      } catch (err) {
        console.error(err);
        setSendingNotification("Can't submit the form, try again later?");
      }

      setMessageSent(true);
      setSendingNotification("");
      setErrorMessage("");
      setEmail("");
      setMessage("");
      return true;
    } else {
      setErrorMessage("Please enter a valid email");
      return false;
    }
  }

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
              <Link href="https://github.com/fikulas234" target="_blank">
                <Image
                  src="/images/social-networks/github.svg"
                  height={30}
                  width={30}
                  alt="github icon"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/filip-trbojevic/"
                target="_blank"
              >
                <Image
                  src="/images/social-networks/linkedin.svg"
                  height={30}
                  width={30}
                  alt="linkedin icon"
                />
              </Link>
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
              <div className={classes.message_status}>
                <p>{sendingNotification}</p>
              </div>
            </div>
            <ContactForm
              handleChangeEmail={handleChangeEmail}
              handleChangeMessage={handleChangeMessage}
              handleSubmit={handleSubmit}
              errorMsg={errorMessage}
              emailContent={email}
              messageContent={message}
            />
          </div>
        </div>
      </RightSideContent>
    </Card>
  );
}

export default ContactPageContent;
