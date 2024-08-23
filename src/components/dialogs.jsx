// import font awesome arrow right icon here
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

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
            <div>
              <h3 className="font-bold text-lg">GameRaid</h3>
              <p className="py-4">Video Game Tracker And Collection Manager</p>
            </div>
          </div>
          <div className="flex flex-row justify-start gap-4 items-stretch border-2 border-red-500">
            <div className="mockup-phone border-primary m-0">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1 ">
                  <Carousel />
                </div>
              </div>
            </div>
            <div className="self-center">
              <button className="">
                <FontAwesomeIcon icon={faArrowAltCircleRight} size="3x" />
              </button>
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
