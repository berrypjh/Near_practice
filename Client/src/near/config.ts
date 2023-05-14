import { keyStores } from "near-api-js";

const CONTRACT_NAME = "dev.mytestberry.testnet";

const connectionConfig = {
  networkId: "testnet",
  nodeUrl: "https://archival-rpc.testnet.near.org",
  contractName: CONTRACT_NAME,
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
  deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() },
};

export default connectionConfig;
