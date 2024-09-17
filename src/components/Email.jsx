export default function Email() {
  return (
    <>
      <div className="hero bg-indigo-950 min-h-screen ">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold ">I'm Here</h1>
            <p className="py-6">Discuss your project or problem !</p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
