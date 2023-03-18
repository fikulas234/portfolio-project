import Head from "next/head";
import ContactPageContent from "@/components/right-content/contact";
import { Fragment } from "react";

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
      </Head>
      <ContactPageContent />
    </Fragment>
  );
};

export default ContactPage;
