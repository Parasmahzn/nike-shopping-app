import { useState } from "react";
import Button from "../components/Button";
import { validateEmail } from "../utils/inputValidators";

const Subscribe = () => {
  const [subscriberEmail, setSubscriberEmail] = useState('');

  const handleSignUpClick = () => {

    if (!validateEmail(subscriberEmail)) {
      console.log("Please enter a valid email address.");
      return;
    }

    console.log(subscriberEmail);
  }

  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
        Sign Up for
        <span className='text-coral-red'> Updates </span>& Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input
          type='text'
          placeholder='subscribe@nike.com'
          className='input'
          value={subscriberEmail}
          onChange={(e) => setSubscriberEmail(e.target.value)}

        />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='Sign Up' fullWidth handleOnClick={handleSignUpClick} />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;