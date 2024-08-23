// import font awesome arrow right icon here
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Carousel from "./carousel";

export default function Dialogs() {
  return (
    <>
      <dialog
        id="modal_1"
        className="modal bg-[url('/images/background.jpg')] bg-center text-gray-900 "
      >
        <div className="modal-box min-h-[90%] min-w-[95%]">
          {/* model screen  */}
          <div className="flex flex-col border-2 border-green-500">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost rounded-lg absolute right-4 top-4 bg-red-400">
                ✕
              </button>
            </form>
          </div>
          <div className="flex flex-row justify-start gap-2 border-2 border-red-500">
            <div className="mockup-phone border-primary m-0">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1 ">
                  <Carousel />
                </div>
              </div>
            </div>
            <div className="self-center">
              <a className="">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="3x"
                  className="hover:animate-tada"
                />
              </a>
            </div>
            <div className="flex m-10 items-start border-2 border-yellow-600">
              <div className="">
                <h3 className="font-bold text-lg">GameRaid</h3>
                <p className="py-4">
                  Video Game Tracker And Collection Manager
                </p>
                <h3 className="font-bold text-lg">Features</h3>
                <ul className="list-disc ml-4 py-2">
                  <li>Wishlist</li>
                  <li>New Releases</li>
                  <li>Catagories</li>
                  <li>Search</li>
                </ul>
                <h3 className="font-bold text-lg py-2">Description</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  voluptatibus repudiandae omnis eum commodi provident animi
                  dicta. Dolor suscipit vel ipsa id aut quam possimus
                  asperiores, impedit odit officia nisi? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Perspiciatis, aut
                  recusandae! Laboriosam distinctio, ipsam quaerat, facere,
                  error consequatur ullam alias quia quos suscipit libero
                  nesciunt quae atque? Repudiandae, ipsam culpa. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Fugiat repellat
                  temporibus laudantium consequatur perspiciatis itaque, ex
                  eligendi voluptatum neque consequuntur, rerum alias. Sequi
                  ipsam repellat, ullam alias similique fugit amet?
                </p>
              </div>
            </div>
          </div>

          {/* ------------------ */}
        </div>
      </dialog>
      <dialog
        id="modal_2"
        className="modal bg-[url('/images/background.jpg')] bg-center text-gray-900 "
      >
        <div className="modal-box min-h-[90%] min-w-[95%]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Notecome</p>
        </div>
      </dialog>
      <dialog
        id="modal_3"
        className="modal bg-[url('/images/background.jpg')] bg-center text-gray-900"
      >
        <div className="modal-box min-h-[90%] min-w-[95%]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Designs</p>
        </div>
      </dialog>
    </>
  );
}
