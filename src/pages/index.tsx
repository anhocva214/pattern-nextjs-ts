import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { userActions, userSelector } from '@redux/user.redux'
import { CircleSpinner, ClapSpinner } from 'react-spinners-kit'
import { Img } from 'src/resources/img'


export default function Home() {
  const dispatch = useDispatch<any>()

  const { users, getUsersLoading } = useSelector(userSelector)

  useEffect(() => {
    console.log(users)
  }, [users])

  return (
    <>
      <main className='p-24'>
        <div>
          <button onClick={()=>dispatch(userActions.increase())} >increase</button>
        </div>
        <div className='flex items-center justify-between gap-3 border border-amber-500 w-fit p-3 rounded-md w-96'>
          <h1 className='text-3xl'>List users</h1>
          <button onClick={() => dispatch(userActions.getUsers())} className='bg-amber-500 p-2 rounded-md w-12 h-12'>
            <i className={`fa-regular fa-arrows-rotate text-2xl ${getUsersLoading && 'animate-spin'}`}></i>
          </button>
        </div>
        {users.length > 0 && (
          <div className='flex items-center justify-between gap-3 border border-amber-500 w-fit p-3 rounded-md w-96 mt-3'>
            <ul>
              {users.map(user => {
                return (<>
                  <li key={user.id}>{user.name}</li>
                </>)
              })}
            </ul>
          </div>
        )}
      </main>
    </>
  )
}
