import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/3.jpg";
import Mountain3 from "../assets/6.jpg";
import Mountain4 from "../assets/5.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>

      <DestinationData
        className="first-des"
        heading="Dubai, United Arab Emirates
      "
        text="Dubai is a destination that mixes modern culture with history, adventure with world-class shopping and entertainment. Catch a show at the Dubai Opera, see downtown from atop the Burj Khalifa and spend an afternoon along Dubai Creek exploring the gold, textile and spice souks. If you’re looking for thrills, you can float above the desert dunes in a hot air balloon, climb aboard a high-speed ride at IMG Worlds of Adventure or skydive over the Palm Jumeirah."
        img1={Mountain2}
        img2={Mountain4}
      />

      <DestinationData
        className="first-des-reverse"
        heading="London"
        text="London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city."
        img1={Mountain1}
        img2={Mountain3}
      />
    </div>
  );
};

export default Destination;
