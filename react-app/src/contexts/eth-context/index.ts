import { ethers } from "ethers";

const KEY = 'LAST_ACTIVE_ACCOUNT';
let lastActiveAccount:any = null;
const provider = new ethers.providers.Web3Provider(window.ethereum);
// console.log(provider.provider.selectedAddress?);
/**
 * 获得账号
 */
function getAccount() {
  lastActiveAccount = window.localStorage.getItem(KEY);
  return lastActiveAccount;
}

export function getSigner() {
  const signer = provider.getSigner();
  console.log(signer);
}



export const actions = {
  INIT: "INIT",
  CONNECT: 'CONNECT',
  DISCONNECT: 'DISCONNECT'
};

export const initialState = {
  address: null,
  artifact: null,
  web3: null,
  accounts: [],
  networkID: null,
  contract: null
};

export const reducer = (state:any, action:any) => {
  const { type, data } = action;
  let address = null;
  let accounts:string[] = [];
  switch (type) {
    case actions.INIT:
      address = getAccount();
      return {...state, address}
    case actions.CONNECT:
      accounts = data;
      if(accounts && accounts.length > 0) {
        window.localStorage.setItem(KEY, accounts[0]);
        address = accounts[0];
      }
      return {...state, address, accounts}
    case actions.DISCONNECT:
      address = null;
      accounts = [];
      window.localStorage.removeItem(KEY);
      return {...state, address, accounts}
    default:
      throw new Error("Undefined reducer action type");
  }
};

export function init() {
  initialState.address = getAccount();
  provider.getSigner().getAddress().then(res => {
    if(res.toLowerCase() == String(initialState.address).toLowerCase()) {
    } else {
      initialState.address = null;
      initialState.accounts = [];
      window.localStorage.removeItem(KEY);
    }
  });
}

export function connect() {
  return (dispatch:any) => {
    provider.send("eth_requestAccounts", []).then(res => {
      lastActiveAccount = res;
      window.localStorage.setItem(KEY, res);
      dispatch({type: actions.CONNECT, data:res});
    });
  }
}