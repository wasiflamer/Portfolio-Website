export default function SingleCard({ CardTitle, Card_Details, Img_url }) {
  return (
    <>
      <div className="card bg-[#8360c3] drop-shadow-lg w-96  ">
        <figure className="hover:brightness-150">
          <img src={Img_url} />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{CardTitle}</h2>
          <p>{Card_Details}</p>
          <div className="card-actions justify-end">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Show Details
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box max-w-full max-h-full">
                <div className="card lg:card-side bg-base-100 shadow-xl ">
                  <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                      <div className="artboard artboard-demo phone-1">Hi.</div>
                    </div>
                  </div>
                  <div className="card-body w-2 m-2">
                    <h2 className="card-title">GameRaid</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Consequuntur, minima atque aliquam ab necessitatibus
                      minus. Eum cum, neque impedit pariatur saepe enim, dolore
                      ex labore, consectetur tempore fuga. Animi, alias?
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Listen</button>
                    </div>
                  </div>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
}
