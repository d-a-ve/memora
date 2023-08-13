import { getSVGFromString } from "../../../../Utils/getSVGFromString";

export default function DNavLogoutBtn() {
  return (
		<button
      onClick={() => console.log("Logged Out!!")}
			className="nav-logout-btn">
			{getSVGFromString("logout", 20, 20)}
			<span>Log out</span>
		</button>
	);
}
