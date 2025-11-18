import React from "react";

const Contact = () => {
  return (
    <>
      <section>
        <div className="container ">
          <div className="mainContainer  justify-between my-5">
            <h2 className="text-center text-3xl font-bold uppercase">
              Contact Us
            </h2>
            <div className="contentInfoContiner flex flex-col justify-between gap-8  ">
              <div className="innerContainer shadow-xl mt-5 p-2.5 formcontainer  max-w-[800px]  w-full">
                <form>
                  <div className="inputsFiels flex flex-col px-2.5 mb-4">
                    <label htmlFor="userinput" className=" text-[18px]">
                      Name *
                    </label>
                    <input
                      className="px-2.5 py-1.5 outline-none text-[18px] font-normal border border-gray-400 rounded"
                      id="userinput"
                      name="username"
                      type="text"
                      placeholder="Enter your Name"
                    />
                  </div>
                  <div className="inputsFiels  flex flex-col px-2.5 mb-4">
                    <label htmlFor="emailinput" className=" text-[18px]">
                      Email *
                    </label>
                    <input
                      className="px-2.5 py-1.5 outline-none text-[18px] font-normal border border-gray-400 rounded"
                      id="emailinput"
                      name="email"
                      type="text"
                      placeholder="Enter your Email"
                    />
                  </div>
                  <div className="inputsFiels  flex flex-col px-2.5 mb-4">
                    <label htmlFor="msginput" className=" text-[18px]">
                      Messages *
                    </label>
                    <textarea
                      className="px-2.5 py-2.5 outline-none text-[18px] font-normal border border-gray-400 rounded"
                      id="msginput"
                      name="meassage"
                      type="text"
                      placeholder="Enter your Name"
                      rows={"5"}
                    ></textarea>
                  </div>
                </form>
                <button className="border w-full py-3 rounded font-bold text-[18px] tracking-wider bg-(--primary-color) text-white">
                  Submit
                </button>
              </div>

              <div className="formcontainer googlemapontainer max-w-[800px] w-full max-h-[800px] h-[200px] border border-gray-500 my-3">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d915571.8526960415!2d80.34387596406249!3d26.311841712179927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1763129143624!5m2!1sen!2sin"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
