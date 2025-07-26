import SingleCard from "./card";

export default function Showcase() {
  return (
    <>
      <div id="portfolio" className="bg-gradient-to-b from-[#2E294E] to-[#201c35]">
        <div className="flex justify-center items-center flex-col gap-4 p-4 pb-20 md:flex-row">
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
            Img_url={"/images/notecom_logo.png"}
            modal_name={"modal_2"}
          />
          <SingleCard
            CardTitle={"Novelty"}
            Card_Details={
              "Wallpaper Downloader inspired by variety app from linux "
            }
            Img_url={"/images/novelty_logo.png"}
            modal_name={"modal_3"}
          />
        </div>
      </div>
    </>
  );
}
