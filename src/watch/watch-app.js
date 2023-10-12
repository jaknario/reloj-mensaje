import { getMessage } from "../component/get-message";
import { renderClock } from "../component/render-watch"
import { updateClock } from "../component/update-clock";



export const watchApp = ( element ) => {

  renderClock(element);
  updateClock( element );
  getMessage( element );

}
