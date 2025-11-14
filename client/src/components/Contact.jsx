import React from "react";

const Contact = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="mainContainer flex justify-between my-[80px]">
            <div className="googlemapontainer border max-w-[800px] min-h-[500px]">
              <iframe
                className="w-full "
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d915571.8526960415!2d80.34387596406249!3d26.311841712179927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1763129143624!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
            </div>
            <div className="innerContainer my-[80px]  p-[10px] formcontainer  max-w-[800px] border w-full">
              <h2 className="text-center mb-[30px] text-[42px] font-bold">
                Contact Us
              </h2>
              <form action="">
                <div className="inputsFiels border  flex flex-col px-[10px] mb-[60px]">
                  <label htmlFor="userinput" className=" text-[20px]">
                    Name *
                  </label>
                  <input
                    className="px-[10px] py-[10px] outline-none text-[20px] font-normal"
                    id="userinput"
                    name="username"
                    type="text"
                    placeholder="Enter your Name"
                  />
                </div>
                <div className="inputsFiels border  flex flex-col px-[10px] mb-[60px]">
                  <label htmlFor="emailinput" className=" text-[20px]">
                    Email *
                  </label>
                  <input
                    className="px-[10px] py-[10px] outline-none text-[20px] font-normal"
                    id="emailinput"
                    name="email"
                    type="text"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="inputsFiels border  flex flex-col px-[10px] mb-[60px]">
                  <label htmlFor="msginput" className=" text-[20px]">
                    Messages *
                  </label>
                  <textarea
                    className="px-[10px] py-[10px] outline-none text-[20px]
                font-normal"
                    id="msginput"
                    name="meassage"
                    type="text"
                    placeholder="Enter your Name"
                    rows={"6"}
                  ></textarea>
                </div>
              </form>
              <button className="border w-full py-[20px] font-bold text-2xl bg-[var(--primary-color)] text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
