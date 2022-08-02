import Buahlist from "../components/buahlist";
import Layouts from "../components/layouts";
import Caption from "../components/caption";
import Sayur from "../components/sayur";

export default function Product() {
  return (
    <Layouts title="Our product">
         <Caption />
        <Buahlist />
        <Sayur />
   </Layouts>
  )
}
