import { ModeToggle } from "@/components/ModeToggle";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from "@clerk/nextjs";
  
  function Header() {
    return (

        <div className=" container flex justify-between items-center">
            <ModeToggle/>
      <header style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
         
        <SignedIn>
          <UserButton  />
        </SignedIn>
        <SignedOut>
        
          <SignInButton  />
        </SignedOut>
      </header>
        </div>
    );
  }
  
  export default Header