import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/7.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/9.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip to France"
          text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history."
        />

        <TripData
          image={Trip2}
          heading="Trip to Malaysia"
          text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences. The capital, Kuala Lumpur, is home to colonial buildings, busy shopping districts such as Bukit Bintang and skyscrapers such as the iconic, 451m-tall Petronas Twin Towers."
        />

        <TripData
          image={Trip3}
          heading="Trip to Bali"
          text="Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands and the easternmost of the Sunda Shelf. East of Java and west of Lombok, the province includes the island of Bali and a few smaller offshore islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast."
        />
      </div>
    </div>
  );
}

export default Trip;
