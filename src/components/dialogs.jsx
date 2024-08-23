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
              {/* Reduced to 5/12 */}
              <div className="">
                <h3 className="font-bold text-lg">Notecome</h3>
                <p className="py-4">
                  Visiually Stunning Note-Taking App with Dynamic Colors, Full
                  CRUD
                </p>
                <h3 className="font-bold text-lg">Features</h3>
                <ul className="list-disc ml-4 py-2">
                  <li>Dynamic Colors</li>
                  <li>Update notes</li>
                  <li>Delete notes </li> {/* Corrected spelling mistake */}
                  <li>Create notes </li>
                  <li>Settings</li>
                  <li>Social integration</li>
                </ul>
                <h3 className="font-bold text-lg py-2">Description</h3>
                <p>
                  Notecom is a visually stunning note-taking app with dynamic
                  colors that brings your notes to life. Designed for those who
                  value organization and creativity, Notecom offers full CRUD
                  (Create, Read, Update, Delete) operations, ensuring you have
                  complete control over your notes. Whether you're
                  brainstorming, organizing task, Notecom makes it seamless and
                  enjoyable, staying on top of your thoughts and projects has
                  never been easier. Let Notecom transform the way you capture
                  and manage your ideas, making note-taking an inspiring and
                  efficient experience.
                </p>
              </div>
            </div>
          </div>
          {/* ------------------ */}
        </div>
      </dialog>
      <dialog
        id="modal_3"
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
          <div className="flex m-10 items-start">
            <div className="">
              <div className="mockup-window bg-base-300 ">
                <div className="flex justify-center bg-base-200 px-4 py-4">
                  <Carousel />
                </div>
              </div>
              <div className="justify-center">
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
              <h3 className="font-bold text-lg">Novelty</h3>
              <p className="py-4">
                Wallpaper downloader inspired by variety app from linux sleek
                and modern look looking, snapy animations, one click download.
              </p>
              <h3 className="font-bold text-lg">Features</h3>
              <ul className="list-disc ml-4 py-2">
                <li>One Click Download</li>
                <li>Seacrh by Color</li>
                <li>Categories</li> {/* Corrected spelling mistake */}
                <li>Snappy Animations</li>
              </ul>
              <h3 className="font-bold text-lg py-2">Description</h3>
              <p>
                Introducing Novelty, a wallpaper downloader inspired by the
                sleek and modern aesthetic of Linux's Variety app. Novelty
                offers a visually appealing design with smooth, snappy
                animations, making your wallpaper selection process both stylish
                and effortless. With just one click, you can download stunning
                wallpapers that perfectly match your taste. Whether you're
                personalizing your desktop or refreshing your device's look,
                Novelty makes it easy to access a wide variety of wallpapers
                with a seamless blend of style and functionality. Transform your
                screen with Novelty—where style meets simplicity.
              </p>
            </div>
          </div>
        </div>

        {/* ------------------ */}
      </dialog>
    </>
  );
}
