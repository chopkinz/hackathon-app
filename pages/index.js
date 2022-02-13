import Hero from "../components/Hero";
import { useWeb3 } from "@3rdweb/hooks";
import { useEffect } from "react";
import { client } from "../lib/sanityClient";
import toast, { Toaster } from "react-hot-toast";

const style = {
  wrapper: `relative`,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#363840] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
};

export default function Home() {
  const { address, connectWallet } = useWeb3();
  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back, ${
        userName !== "Unnamed" ? ` ${userName}` : "Unknown User"
      }!`,
      {
        style: {
          background: "#04111d",
          color: "#fff",
        },
      }
    );
  };

  useEffect(() => {
    if (!address) return;
    (async () => {
      const userDoc = {
        _type: "users",
        _id: address,
        userName: "Unnamed",
        walletAddress: address,
      };

      const result = await client.createIfNotExists(userDoc); // create if user does not exist

      welcomeUser(result.userName);
    })();
  }, [address]);
  () => console.log(userName);
  console.log(address);

  return (
    <div className={style.wrapper}>
      <div className="before:content-[''] before:bg-black before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[{pic}] before:bg-cover before:bg-center before:opacity-30 before:blur">
        <Toaster position="top-center" reverseOrder={false} />
        {address ? (
          <>
            <Hero />
          </>
        ) : (
          <div className={style.walletConnectWrapper}>
            <button
              className="text-gray-900 relative text-lg font-semibold px-12 py-4 bg-[white] rounded-lg mr-5 hover:bg-gray-200 cursor-pointer"
              onClick={() => connectWallet("injected")}
            >
              Connect Your Wallet
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
