import { useEffect } from "react";
import $ from "jquery";

const Faq = () => {
  useEffect(() => {
    $(".question-and-answer").click(function () {
      $(this).find(".answer").toggleClass("hidden");
      $(this).find(".question-chevron").toggleClass("hidden");
    });
  }, []);

  return (
    <div className="mx-auto text-center px-4  text-2xl bg-indigo-600 text-white font-semibold">
      <p className="text-[10px] text-white pt-10">Common Question </p>
      Frequently asked questions
      <dl className="mt-8 mx-auto max-w-screen-sm lg:max-w-screen-lg flex flex-col lg:flex-row lg:flex-wrap">
        <div className="lg:w-1/2 ">
          <div className="question-and-answer select-none cursor-pointer border-2 mx-8 my-3 px-6 py-4 rounded-lg text-sm group bg-white">
            <dt className="question">
              <div className="flex justify-between">
                <div className="text-indigo-800 font-semibold">
                  What kind of data can I see in FieldX?
                </div>
                <div>
                  <svg
                    fill="currentColor"
                    className="question-chevron group-hover:bg-gray-500 h-5 block text-indigo-800 bg-gray-400 rounded-full p-1"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="currentColor"
                      stroke-width="1"
                      fill="currentColor"
                      fill-rule="evenodd"
                    >
                      <g>
                        <polygon points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8"></polygon>
                      </g>
                    </g>
                  </svg>
                  <svg
                    fill="currentColor"
                    className="question-chevron hidden group-hover:bg-gray-500 h-5 block text-indigo-800 bg-gray-400 rounded-full p-1"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="currentColor"
                      stroke-width="1"
                      fill="currentColor"
                      fill-rule="evenodd"
                    >
                      <g>
                        <polygon points="10.7071068 7.05025253 10 6.34314575 4.34314575 12 5.75735931 13.4142136 10 9.17157288 14.2426407 13.4142136 15.6568542 12"></polygon>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </dt>
            <dd className="answer hidden mt-2 leading-snug text-gray-700">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in voluptate.
            </dd>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="question-and-answer select-none cursor-pointer border-2 mx-8 my-3 px-6 py-4 rounded-lg text-sm group bg-white">
            <dt className="question">
              <div className="flex justify-between">
                <div className="text-indigo-800 font-semibold">
                  How do you take payments?
                </div>
                <div>
                  <svg
                    fill="currentColor"
                    className="question-chevron group-hover:bg-gray-500 h-5 block text-indigo-800 bg-gray-400 rounded-full p-1"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="currentColor"
                      stroke-width="1"
                      fill="currentColor"
                      fill-rule="evenodd"
                    >
                      <g>
                        <polygon points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8"></polygon>
                      </g>
                    </g>
                  </svg>
                  <svg
                    fill="currentColor"
                    className="question-chevron hidden group-hover:bg-gray-500 h-5 block text-indigo-800 bg-gray-400 rounded-full p-1"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="currentColor"
                      stroke-width="1"
                      fill="currentColor"
                      fill-rule="evenodd"
                    >
                      <g>
                        <polygon points="10.7071068 7.05025253 10 6.34314575 4.34314575 12 5.75735931 13.4142136 10 9.17157288 14.2426407 13.4142136 15.6568542 12"></polygon>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </dt>
            <dd className="answer hidden mt-2 leading-snug text-gray-700">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in voluptate.
            </dd>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="question-and-answer select-none cursor-pointer border-2 mx-8 my-3 px-6 py-4 rounded-lg text-sm group bg-white">
            <dt className="question">
              <div className="flex justify-between">
                <div className="text-indigo-800 font-semibold">
                  Does Bizzy read my customers' data?
                </div>
                <div>
                  <svg
                    fill="currentColor"
                    className="question-chevron group-hover:bg-gray-500 h-5 block text-indigo-800 bg-gray-400 rounded-full p-1"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="currentColor"
                      stroke-width="1"
                      fill="currentColor"
                      fill-rule="evenodd"
                    >
                      <g>
                        <polygon points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8"></polygon>
                      </g>
                    </g>
                  </svg>
                  <svg
                    fill="currentColor"
                    className="question-chevron hidden group-hover:bg-gray-500 h-5 block text-indigo-800 bg-gray-400 rounded-full p-1"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="currentColor"
                      stroke-width="1"
                      fill="currentColor"
                      fill-rule="evenodd"
                    >
                      <g>
                        <polygon points="10.7071068 7.05025253 10 6.34314575 4.34314575 12 5.75735931 13.4142136 10 9.17157288 14.2426407 13.4142136 15.6568542 12"></polygon>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </dt>
            <dd className="answer hidden mt-2 leading-snug text-gray-700">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in voluptate.
            </dd>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="question-and-answer select-none cursor-pointer border-2 mx-8 my-3 px-6 py-4 rounded-lg text-sm group bg-white">
            <dt className="question">
              <div className="flex justify-between">
                <div className="text-indigo-800 font-semibold">
                  Can I also track website analytics on fieldX?
                </div>
                <div>
                  <svg
                    fill="currentColor"
                    className="question-chevron group-hover:bg-gray-500 h-5 block text-indigo-800 bg-gray-400 rounded-full p-1"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="currentColor"
                      stroke-width="1"
                      fill="currentColor"
                      fill-rule="evenodd"
                    >
                      <g>
                        <polygon points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8"></polygon>
                      </g>
                    </g>
                  </svg>
                  <svg
                    fill="currentColor"
                    className="question-chevron hidden group-hover:bg-gray-500 h-5 block text-indigo-800 bg-gray-400 rounded-full p-1"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="currentColor"
                      stroke-width="1"
                      fill="currentColor"
                      fill-rule="evenodd"
                    >
                      <g>
                        <polygon points="10.7071068 7.05025253 10 6.34314575 4.34314575 12 5.75735931 13.4142136 10 9.17157288 14.2426407 13.4142136 15.6568542 12"></polygon>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </dt>
            <dd className="answer hidden mt-2 leading-snug text-gray-700">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in voluptate.
            </dd>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="question-and-answer select-none cursor-pointer border-2 mx-8 my-3 px-6 py-4 rounded-lg text-sm group bg-white">
            <dt className="question">
              <div className="flex justify-between">
                <div className="text-indigo-800 font-semibold">
                  What's your refund and cancellation policy?
                </div>
                <div>
                  <svg
                    fill="currentColor"
                    className="question-chevron group-hover:bg-gray-500 h-5 block text-indigo-800 bg-gray-400 rounded-full p-1"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="currentColor"
                      stroke-width="1"
                      fill="currentColor"
                      fill-rule="evenodd"
                    >
                      <g>
                        <polygon points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8"></polygon>
                      </g>
                    </g>
                  </svg>
                  <svg
                    fill="currentColor"
                    className="question-chevron hidden group-hover:bg-gray-500 h-5 block text-indigo-800 bg-gray-400 rounded-full p-1"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="currentColor"
                      stroke-width="1"
                      fill="currentColor"
                      fill-rule="evenodd"
                    >
                      <g>
                        <polygon points="10.7071068 7.05025253 10 6.34314575 4.34314575 12 5.75735931 13.4142136 10 9.17157288 14.2426407 13.4142136 15.6568542 12"></polygon>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </dt>
            <dd className="answer hidden mt-2 leading-snug text-gray-700">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in voluptate.
            </dd>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="question-and-answer select-none cursor-pointer border-2 mx-8 my-3 px-6 py-4 rounded-lg text-sm group bg-white">
            <dt className="question">
              <div className="flex justify-between">
                <div className="text-indigo-800 font-semibold">
                  What makes Bizzy different from other analytics tools?
                </div>
                <div>
                  <svg
                    fill="currentColor"
                    className="question-chevron group-hover:bg-gray-500 h-5 block text-indigo-800 bg-gray-400 rounded-full p-1"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="currentColor"
                      stroke-width="1"
                      fill="currentColor"
                      fill-rule="evenodd"
                    >
                      <g>
                        <polygon points="9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8"></polygon>
                      </g>
                    </g>
                  </svg>
                  <svg
                    fill="currentColor"
                    className="question-chevron hidden group-hover:bg-gray-500 h-5 block text-indigo-800 bg-gray-400 rounded-full p-1"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="currentColor"
                      stroke-width="1"
                      fill="currentColor"
                      fill-rule="evenodd"
                    >
                      <g>
                        <polygon points="10.7071068 7.05025253 10 6.34314575 4.34314575 12 5.75735931 13.4142136 10 9.17157288 14.2426407 13.4142136 15.6568542 12"></polygon>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </dt>
            <dd className="answer hidden mt-2 leading-snug text-gray-700">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in voluptate.
            </dd>
          </div>
        </div>
      </dl>
      <br />
      <br />
    </div>
  );
};

export default Faq;
