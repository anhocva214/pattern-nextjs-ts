import { Form, Input, Button, Select } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import Web3 from 'web3';
import { useMetaMask } from 'metamask-react'
import contractABI from '@services/abi.json'
import { AbiItem } from 'web3-utils';
import {Contract} from 'web3-eth-contract'
var Tx = require('ethereumjs-tx');
import { useCount, useContractMethod } from "@services/hook";
import axios from 'axios';



const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 10 },
};

const buttonItemLayout = {
  wrapperCol: { span: 14, offset: 4 },
}

interface FormTranfer {
  address: string,
  amount: string
}


export default function Home() {

  const [form] = Form.useForm();

  const [_dataForm, set_dataForm] = useState<FormTranfer>();
  const [_web3, set_web3] = useState<Web3>(null)
  const [_balance, set_balance] = useState<number>(0)
  const [_contract, set_contract] = useState<Contract>()
  const [_balanceToken, set_balanceToken] = useState<number>(0)

  const { status, connect, account } = useMetaMask();

  const count = useCount();
  // const { state, send: incrementCount } = useIncrement();
  const { state: setTransferState, send: transfer } = useContractMethod("transfer");


  const onFormLayoutChange = (form: FormTranfer) => {
    let temp = { ..._dataForm, ...form }
    set_dataForm(temp)
  };


  useEffect(() => {
    console.log("status: ", status)
    console.log("account: ", account)


  }, [status])

  useEffect(() => {
    // if (typeof web3 !== 'undefined')
    // console.log(window.web3.currentProvider);
    // console.log(window)
    if (typeof window !== 'undefined') {
      let Window: any = window;
      Window.ethereum.enable()
      // console.log(Window.web3.currentProvider)
      // console.log(window.Bina)
      let web3 = new Web3(Window.web3.currentProvider)
      let provider: any = web3.currentProvider
      if (provider?.isMetaMask == true) {
        set_web3(web3)
      }
      else {
        alert("Install MetaMask")
      }
    }
  }, [])

  // const enableWeb3 = ()=>{
  //   let Window : any = window;
  //   Window.ethereum.enable()
  //   console.log("connected")
  // }


  useEffect(() => {
    if (!!_web3) {
      (async () => {
        // console.log(await _web3.eth.getAccounts())
        // let balance = await _web3.eth.getBalance(account);
        // console.log("balance: ", _web3.utils.fromWei(balance))
        const abi: any = contractABI;
        let contract = new _web3.eth.Contract(abi, '0xb9DD643d29b9846bF86d82e573A3eb65144D9696', { from: account });
        set_contract(contract);
      })()
    }
  }, [_web3])


  const sendToken = async () => {
    // console.log("send")
    // const abi: any = contractABI;
    // let contract = new _web3.eth.Contract(abi, '0xb9DD643d29b9846bF86d82e573A3eb65144D9696', { from: account });
    

    // console.log(_web3.utils.toBN(10).pow())
    // console.log("contract.defaultAccount: ",  contract.options)
    // console.log(contract.methods.transfer("0x86f3620333a3a70D724BAeB0731C1c32E10BBD36", '10').send())
    // contract.methods.count().call({from: account}, (err, result)=>{
    //   if (err) console.log(err)
    //   console.log("result: ", result)
    // })


    // await contract.methods.approve(account,100)
    // contract.methods.transfer('0x86f3620333a3a70D724BAeB0731C1c32E10BBD36', value).call({from:account}, (err, result)=>{
    //   if (err) console.log(err);
    //   console.log(result)
    // })

    // contract.methods.balanceOf(account).call({from:account}, (err, result)=>{
    //   if (err) console.log(err);
    //   console.log("result: ", result);
    // })

    // await contract.methods.transfer('0x86f3620333a3a70D724BAeB0731C1c32E10BBD36', value).send({from:account})
    // .on('transactionHash', function(hash){
    //   console.log(hash);
    // });


    // .then(console.log)
    // .catch(console.log);

    // console.log("count: ", count)
    // incrementCount()
    // setCount(3)

    // const signer = ethers.Signer
    // await transfer('0x86f3620333a3a70D724BAeB0731C1c32E10BBD36', '7').then((value)=>{
    //   console.log(value);
    // })

    // _contract.methods.balanceOf(account).call({from:account}, (err, result)=>{
    //   if (err) console.log(err)
    //   console.log("result: ", result/Math.pow(10, 18))
    // })

    let decimals = _web3.utils.toBN(18);
    let amount = _web3.utils.toBN(_dataForm.amount);
    let value = amount.mul(_web3.utils.toBN(10).pow(decimals));
    const tx = {
      from: account,
      to: "0xb9DD643d29b9846bF86d82e573A3eb65144D9696",
      data: _contract.methods.transfer(_dataForm.address, value).encodeABI(),
    }
    _web3.eth.sendTransaction(tx).then(res => {
      console.log("res", res)
    }).catch(err => {
      console.log("err", err)
    });

    // const tx = {
    //   from: account,
    //   to: "0x0d39ec5Fd5e47F549865b7aE630367A8e0C4D7fE",
    //   data: contract.methods.setCount(3).encodeABI(),
    // }
    

  //   console.log("tx: ", tx)

  //   let response = await axios({
  //     url: 'https://bsc-testnet.web3api.com/v1/6IUBCSH8SMXAVYNVH47UFZMA6URCPME1AF',
  //     method: 'POST',
  //     // data: {"jsonrpc":"2.0","method":"eth_sendRawTransaction","params":[tx],"id":1}
  //     data: {"jsonrpc":"2.0","method":"eth_call","params": [{"from": account,"to": "0x0d39ec5Fd5e47F549865b7aE630367A8e0C4D7fE","gas": "0x76c0","gasPrice": "0x9184e72a000","value": "0x0","data": tx.data}, "latest"],"id":1}
  //   })

  //   console.log("response: ", response.data)

  }

  // const sendTransaction = async ()=>{
  //   let response = await axios({
  //     url: 'https://bsc-testnet.web3api.com/v1/6IUBCSH8SMXAVYNVH47UFZMA6URCPME1AF',
  //     method: 'POST',
  //     data: {"jsonrpc":"2.0","method":"eth_sendRawTransaction","params":["0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"],"id":1}
  //   })
  // }


  const getBalance = async () => {
    let balance : any = await _web3.eth.getBalance(account);
    // console.log("balance: ", balance/Math.pow(10, 18))
    let b : number = balance/Math.pow(10, 18);
    set_balance(b)
  }

  const getToekn = ()=>{
    _contract.methods.balanceOf(account).call((err, result) =>{
      if (err) console.log(err)
      let tokenBlance = result/Math.pow(10, 18)
      set_balanceToken(tokenBlance)
    })
  }

  return (
    <>
      <h1>Demo metamask</h1>
      <br />
      <Button onClick={connect} type="primary">Connect MetaMask</Button> <span> My Address: {account}</span>

      <br />
      <br />
      <Button type="primary" onClick={() => getBalance()}>Get balance</Button> <span>{_balance} BNB</span>
      <br />
      <br />
      <Button type="primary" onClick={() => getToekn()}>Get token</Button> <span>{_balanceToken} Token</span>
      <br />
      <br />
      <Form {...layout} form={form} onValuesChange={onFormLayoutChange}>
        <Form.Item name="address" label="Adress" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="amount" label="Amount Token" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button onClick={() => sendToken()} type="primary">Send token</Button>
          {/* <Button onClick={() => sendTransaction()} type="primary">Send token</Button> */}

        </Form.Item>
      </Form>

    </>
  )
}
