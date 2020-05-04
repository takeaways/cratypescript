import { useSelector } from "react-redux";
import { RootState } from "../../Reducer";

export default () => {
    const user = useSelector((state: RootState) => state.user.user);
    return user
}