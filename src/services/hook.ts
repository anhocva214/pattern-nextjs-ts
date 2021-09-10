import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useContractCall, useContractFunction } from "@usedapp/core";
import contractABI from "./abi.json";

const simpleContractInterface = new ethers.utils.Interface(contractABI);
const contract : any = new Contract("0x0d39ec5Fd5e47F549865b7aE630367A8e0C4D7fE", simpleContractInterface);


export function useCount() {
    const [count]: any = useContractCall({
        abi: simpleContractInterface,
        address: "0x0d39ec5Fd5e47F549865b7aE630367A8e0C4D7fE",
        method: "count",
        args: [],
    }) ?? [];
    return count;
}

export function useIncrement() {
    const { state, send } = useContractFunction(contract, "incrementCount", {});
    return { state, send };
}

export function useContractMethod(methodName: string) {
  const { state, send } = useContractFunction(contract, methodName, {});
  return { state, send };
}