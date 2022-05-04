import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { userActions, userSelector } from '@redux/user.redux'
import { CircleSpinner, ClapSpinner } from 'react-spinners-kit'
import { Img } from 'src/resources/img'


export default function Home() {
  const dispatch = useDispatch()

  const { users, getUsersLoading } = useSelector(userSelector)

  useEffect(() => {
    console.log(users)
  }, [users])

  return (
    <>
      <header>
        <div className="container">
          <div className="logo w-60">
            <img src={Img.logo} alt="" />
          </div>
        </div>
      </header>
    </>
  )
}
