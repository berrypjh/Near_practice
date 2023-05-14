import connectionConfig from "./config";
import { Contract, WalletConnection, connect } from "near-api-js";

let contract;

export async function initContract() {
  // Set a connection to the NEAR network
  const near = await connect(connectionConfig);

  // Initialize a Wallet Object
  const walletConnection = await new WalletConnection(near, "");
  // Getting the Account ID

  contract = await new Contract(walletConnection.account(), connectionConfig.contractName, {
    viewMethods: ["get_num"],
    changeMethods: ["increment", "decrement", "reset"],
  });
}

export async function get_num() {
  // type 알아내기
  let count = await contract.get_num({ args: {} });
  return count;
}

export async function increment(count) {
  return await contract.increment({ args: {} });
}

export async function decrement(count) {
  return await contract.decrement({ args: {} });
}

export async function reset() {
  return await contract.reset({ args: {} });
}
