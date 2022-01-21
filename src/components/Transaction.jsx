import { useLocation } from "react-router";
import { Menu } from "antd";

function Transaction() {
  const { pathname } = useLocation();

  return (
    <h1>🖼Transaction</h1>
  );
}

export default Transaction;