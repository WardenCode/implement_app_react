import Header from '../../components/navigation/Header';

interface DashboardProps {
  userUsername: string
  setIsLoggedIn: (value: boolean) => void
}

function Dashboard({
  userUsername,
  setIsLoggedIn
}: DashboardProps) {
  return (
    <div>
      <Header
        setIsLoggedIn={setIsLoggedIn}
        userUsername={userUsername}
      />
    </div>
  )
}

export default Dashboard;