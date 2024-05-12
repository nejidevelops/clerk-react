import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/clerk-react"

function App() {

  return (
    <>
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </>
  )
}

export default App
