import { useState } from "react";
import Card from "../layout/card";
import NavigationElements from "../left-navigation/navigation";
import RightSideContent from "./main-content";
import Image from "next/image";
import classes from "./contact.module.css";

function ContactPageContent() {
  const handleChange = () => {
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
                  src="/images/slika.png"
                  height={50}
                  width={50}
                  alt="avatar"
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
                  contact me below.
                </p>
              </div>
            </div>
            <form>
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
                />

                <div className={classes.msg_and_btn}>
                  <textarea
                    rows={2}
                    onChange={handleChange}
                    type="text"
                    id="message"
                    name="message"
                    placeholder="message Filip"
                  />

                  <button>
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
          </div>
        </div>
      </RightSideContent>
    </Card>
  );
}

export default ContactPageContent;
