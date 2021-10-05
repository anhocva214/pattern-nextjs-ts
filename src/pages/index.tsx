import {alertActions} from '@actions/alert.action'


export default function Home() {

  return (
    <>
      <h1>Hello world</h1>
      <button onClick={()=>alertActions.alertSuccess("Successfully")}>alert success</button>
    </>
  )
}
