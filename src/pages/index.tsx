import * as React from "react";
import { useAccount } from "wagmi";

import {
  Account,
  Approve,
  Deposit,
  Withdraw,
  Repay,
  Borrow,
  Connect,
  NetworkSwitcher,
} from "../components";
import { useIsMounted } from "../hooks";

function Page() {
  const isMounted = useIsMounted();
  const { data } = useAccount();

  return (
    <>
      <Connect />

      {isMounted && data && (
        <>
          <Account />
          <NetworkSwitcher />
          <Approve />
          <Deposit></Deposit>
          <Withdraw></Withdraw>
          <Repay></Repay>
          <Borrow></Borrow>
        </>
      )}
    </>
  );
}

export default Page;
