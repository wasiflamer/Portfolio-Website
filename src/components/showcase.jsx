import SingleCard from "./card";

// TODO : include actual images here

export default function Showcase() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#2E294E] to-[#201c35]">
        <div className="flex justify-center flex-row gap-4 p-4  ">
          <SingleCard
            CardTitle={"Gameraid"}
            Card_Details={
              "Video Game Tracker And Collection Manager For Android "
            }
            Img_url={"/images/gameraid_img.png"}
            modal_name={"modal_1"}
          />
          <SingleCard
            CardTitle={"Notecom"}
            Card_Details={
              "Visiually Stunning Note-Taking App with Dynamic Colors, Full CRUD"
            }
            Img_url={
              "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWNvbnN8ZW58MHx8MHx8fDA%3D"
            }
            modal_name={"modal_2"}
          />
          <SingleCard
            CardTitle={"Novelty"}
            Card_Details={
              "Wallpaper Downloader inspired by variety app from linux "
            }
            Img_url={
              "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aWNvbnN8ZW58MHx8MHx8fDA%3D"
            }
            modal_name={"modal_3"}
          />
        </div>
      </div>
    </>
  );
}
