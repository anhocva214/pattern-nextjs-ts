import { alertActions } from '@actions/alert.action'
import { userActions } from '@actions/user.action'
import { userSelector } from '@store/slices/user.slice'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'


export default function Home() {

  const { users } = useSelector(userSelector)

  useEffect(() => {
    console.log(users)
  }, [users])

  return (
    <>
      <h1>Hello world</h1>
      <button onClick={() => alertActions.alertSuccess("Successfully")}>alert success</button>
      <button onClick={() => userActions.getUsers()}>get users</button>
      <p>{process.env.ENDPOINT}</p>

      {
        users.map((user) => (
          <div key={user.id}>
            <h6>{user.fullname}</h6>
          </div>
        ))

      }

    </>
  )
}
