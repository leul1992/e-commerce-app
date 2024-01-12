import HomePage from './components/Home'
import CreateUserForm from './components/CreateUser/CreateUserForm'
import UsersPage from './components/showUsers/ShowUsers'

export default function Home() {
  return (
    <main className='w-full'>
      <HomePage />
      <CreateUserForm />
      <UsersPage />
    </main>
  )
}
