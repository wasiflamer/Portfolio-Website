import SingleCard from "./card";

export default function Showcase() {
  return (
    <>
      <div className="flex justify-center flex-row gap-4 p-4 ">
        <SingleCard
          CardTitle={"Gameraid"}
          Card_Details={"Video Games tracker"}
          Img_url={
            "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNvbnN8ZW58MHx8MHx8fDA%3D"
          }
        />
        <SingleCard
          CardTitle={"Notecom"}
          Card_Details={"Note Taking App"}
          Img_url={
            "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWNvbnN8ZW58MHx8MHx8fDA%3D"
          }
        />
        <SingleCard
          CardTitle={"Designs"}
          Card_Details={"25+ Landing Pages"}
          Img_url={
            "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aWNvbnN8ZW58MHx8MHx8fDA%3D"
          }
        />
      </div>
    </>
  );
}