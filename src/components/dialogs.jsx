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
        <div className="modal-box min-h-[95%] min-w-[80%] ">
          {/* model screen  */}
          <div className="flex flex-col">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost rounded-lg absolute right-4 top-4 bg-red-400">
                ✕
              </button>
            </form>
          </div>
          <div className="flex flex-row justify-start gap-4">
            <div className="mockup-phone m-0">
              {" "}
              {/* Increased to 5/6 */}
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1 ">
                  <Carousel />
                </div>
              </div>
            </div>
            <div className="self-center basis-1/12">
              {" "}
              {/* Adjusted to fit remaining space */}
              <a className="">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="3x"
                  className="hover:animate-tada"
                />
              </a>
            </div>
            <div className="flex m-10 items-start basis-6/12">
              {" "}
              {/* Reduced to 5/12 */}
              <div className="">
                <h3 className="font-bold text-lg">GameRaid</h3>
                <p className="py-4">
                  Video Game Tracker And Collection Manager
                </p>
                <h3 className="font-bold text-lg">Features</h3>
                <ul className="list-disc ml-4 py-2">
                  <li>Wishlist</li>
                  <li>New Releases</li>
                  <li>Categories</li> {/* Corrected spelling mistake */}
                  <li>Search</li>
                  <li>Offline Support</li>
                </ul>
                <h3 className="font-bold text-lg py-2">Description</h3>
                <p>
                  Designed for passionate gamers. Easily manage your game
                  library, from tracking your wishlist to staying updated on the
                  latest releases. With comprehensive categories, searching for
                  your next favorite title is a breeze. Whether you're building
                  a collection or simply staying organized, GameRaid simplifies
                  it all. Dive deep into your gaming world with features
                  tailored to enhance your experience. Stay on top of your
                  gaming life and never miss a beat with GameRaid – your
                  one-stop solution for managing your video game collection
                  effortlessly.
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
