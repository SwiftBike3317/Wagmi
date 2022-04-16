import { useContractWrite } from "wagmi";
import { erc20ABI } from "wagmi";
let lendingABI = require("./abi/lendingabi.json");
import web3 from "web3";

export const Deposit = () => {
  let amount1 = web3.utils.toWei("1","ether");
  const { data, error, isLoading, write:test } = useContractWrite(
    {
      addressOrName: "0x247Ec6cF1736DEFA90C6F714cc855050e8CCA9c1",
      contractInterface: lendingABI,
    },
    "deposit",
    {
        args:['0xF8Cb9f1D136Ff4c883320b5B4fa80048b888F459',amount1], //токен меняется в зависимости от выбраной пары. Эмаунт чел вводит в окошко
    }
  );  

  return <button onClick={async function (){console.log("deposit");test()}}>deposit</button>;
};

