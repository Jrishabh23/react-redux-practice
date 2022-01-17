import { useDispatch, useSelector } from "react-redux";
import { dec, inc } from "./action";

const Home = () => {
    const dispatch = useDispatch();
    const selector = useSelector((e: any) => e.addActionNumber.count);
    console.log("sel", selector);

    return (
        <>
            This is redux practice.
            <p>{selector}</p>
            <div>
                <button onClick={() => dispatch(inc())}>Increment</button>
                <button onClick={() => dispatch(dec())}>Decrement</button>
            </div>
        </>
    );
};

export default Home;
