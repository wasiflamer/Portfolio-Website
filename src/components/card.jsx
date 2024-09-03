import Dialogs from "./dialogs";

export default function SingleCard({
  CardTitle,
  Card_Details,
  Img_url,
  modal_name,
}) {
  return (
    <>
      <div className="card bg-gray-700 text-white w-96 shadow-xl">
        <figure className="hover:brightness-150 h-80">
          <img src={Img_url} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{CardTitle}</h2>
          <p>{Card_Details}</p>
          <div className="card-actions justify-end">
            {/* Card Actions Here */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById(modal_name).showModal()}
            >
              show
            </button>
            <Dialogs />
          </div>
        </div>
      </div>
    </>
  );
}
