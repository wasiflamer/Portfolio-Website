export default function Dialogs() {
  return (
    <>
      <dialog id="modal_1" className="modal text-gray-900">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 rounded-lg bg-red-400">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">GameRaid</p>
        </div>
      </dialog>
      <dialog id="modal_2" className="modal text-gray-900">
        <div className="modal-box">
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
      <dialog id="modal_3" className="modal text-gray-900">
        <div className="modal-box">
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
