import { useContractWrite } from "wagmi";
import { erc20ABI } from "wagmi";
import web3 from "web3";

export const Approve = () => {
  let amount1 = web3.utils.toWei("1","ether");
  //сюда с текстового поля загоняется значение
  const { data, error, isLoading, write:test } = useContractWrite(
    {
      addressOrName: "0xF8Cb9f1D136Ff4c883320b5B4fa80048b888F459",
      contractInterface: erc20ABI,
    },
    "approve",
    {
        args:['0x247Ec6cF1736DEFA90C6F714cc855050e8CCA9c1',amount1],
    }
  );  

  return <button onClick={async function (){console.log("approve");test()}}>Approve</button>;
};

