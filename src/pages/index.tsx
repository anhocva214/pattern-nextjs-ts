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
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}
