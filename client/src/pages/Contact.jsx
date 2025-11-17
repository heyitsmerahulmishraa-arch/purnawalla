import React from "react";

const Contact = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="mainContainer flex justify-between flex-col  my-20">
            <h2 className="text-center text-[62px] font-bold uppercase">
              Contact Us
            </h2>
            <div className="contentInfoContiner flex justify-between gap-8">
              <div className="googlemapontainer max-w-[800px] w-full max-h-[800px] my-20">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d915571.8526960415!2d80.34387596406249!3d26.311841712179927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1763129143624!5m2!1sen!2sin"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="innerContainer border shadow-xl my-20 p-2.5 formcontainer  max-w-[800px]  w-full">
                <form action="">
                  <div className="inputsFiels  shadow-xl flex flex-col px-2.5 mb-[60px]">
                    <label htmlFor="userinput" className=" text-[20px]">
                      Name *
                    </label>
                    <input
                      className="px-2.5 py-2.5 outline-none text-[20px] font-normal"
                      id="userinput"
                      name="username"
                      type="text"
                      placeholder="Enter your Name"
                    />
                  </div>
                  <div className="inputsFiels shadow-xl  flex flex-col px-2.5 mb-20">
                    <label htmlFor="emailinput" className=" text-[20px]">
                      Email *
                    </label>
                    <input
                      className="px-2.5 py-2.5 outline-none text-[20px] font-normal"
                      id="emailinput"
                      name="email"
                      type="text"
                      placeholder="Enter your Email"
                    />
                  </div>
                  <div className="inputsFiels shadow-xl  flex flex-col px-2.5 mb-20">
                    <label htmlFor="msginput" className=" text-[20px]">
                      Messages *
                    </label>
                    <textarea
                      className="px-2.5 py-2.5 outline-none text-[20px]
                font-normal"
                      id="msginput"
                      name="meassage"
                      type="text"
                      placeholder="Enter your Name"
                      rows={"6"}
                    ></textarea>
                  </div>
                </form>
                <button className="border w-full py-5 font-bold text-2xl bg-(--primary-color) text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
