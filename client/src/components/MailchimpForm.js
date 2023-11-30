import { Newsletter } from "./Newsletter";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export const MailchimpForm = () => {
  // const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
      <NavBar />
      <div className="consult-div">
        <h1>hekki</h1>
      {/* <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        /> */}
      </div>
      <Footer />
    </>
  )
}