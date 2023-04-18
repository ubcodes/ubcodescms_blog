import React from 'react'
import { useState } from 'react'
import { decode } from 'html-entities'



const NewsletterForm = ({ status, message, onValidated }) => {

     const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if ( !message ) {
     return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
     return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode( formattedMessage ) : null;
  }

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12 d-flex newsletter-input-fields">
        <h3 className='text-xl mb-5 font-semibold border-b pb-4'>
            Subscribe to My Newsletter
        </h3>
        <div className="gap-4 mb-4 mc-field-group">
            <p className='text-lg pb-5'>Receive inspiring articles and other exclusive content from myself. <br />You&apos;ll never receive any spam and can always unsubscribe. </p>
          <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder="Your Email"
            className="py-3 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 mr-2"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
        <div className="button-wrap wp-block-button">
          <button className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-purple-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer wp-block-button__link" onClick={handleFormSubmit}>
            Subscribe
          </button>
        </div>
      
      <div className="text-xl font-semibold mt-3 text-green-500 newsletter-form-info">
        {status === "sending" && <div>Sending...</div>}
        {status === "error" || error ? (
          <div
            className="newsletter-form-error"
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
        ) : null }
        {status === "success" && status !== "error" && !error && (
          <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
        )}
      </div>
      </div>
    </>
  )
}

export default NewsletterForm
