import "./owners.css";
import { owner } from "./ownersComponent";

export default function Owners() {
  return (
    <section className="owners">
      {owner.map((owner) => (
        <div key={owner.id} className="card">
          <img src={owner.photo} alt="" />
          <div className="details">
            <p>{owner.name}</p>
            <p>{owner.job}</p>
          </div>
        </div>
      ))}
      <h3>
        Follow US <span>@Bellesmo</span>
      </h3>
      <div className="cafe"></div>
    </section>
  );
}
