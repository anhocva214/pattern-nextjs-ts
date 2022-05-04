import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { userActions, userSelector } from '@redux/user.redux'
import { CircleSpinner, ClapSpinner } from 'react-spinners-kit'


export default function Home() {
  const dispatch = useDispatch()

  const { users, getUsersLoading } = useSelector(userSelector)

  useEffect(() => {
    console.log(users)
  }, [users])

  return (
    <>
      <main>
        <div className="container">
          <h1 className="text-3xl font-bold underline mt-8">
            Hello world!
          </h1>
          <button onClick={() => {
            dispatch(userActions.getUsers())
          }} className='bg-amber-500 w-44 py-2 rounded-md mt-2 flex justify-center items-center gap-2'>
            Get users
            {getUsersLoading && <CircleSpinner size={15} />}
          </button>

          <ul>
            {users.map(user => (
              <li key={user.id} >{user.name}</li>
            ))}
          </ul>

        </div>
      </main>
    </>
  )
}
