import { useReducer } from "react";
import { initialState, reducer, actions, init, connect } from "../../contexts/eth-context";
import AddressLabel from "./address-label";
import ConnectBtn from "./connect-btn";


function Wallet() {
  const [state, dispatch] = useReducer(reducer, initialState);
  init();
  return (
    <div className="demo" >
      {
        state.address?
        <AddressLabel address={state.address} onClick={() => dispatch({type: actions.DISCONNECT})} />
        :
        <ConnectBtn onClick={() =>connect()(dispatch)} />
      }
    </div>
  );
}

export default Wallet;
