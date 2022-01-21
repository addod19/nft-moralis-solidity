import { useLocation } from "react-router";
import { Menu } from "antd";

function NFTMarket() {
  const { pathname } = useLocation();

  return (
    <h1>🖼NFT Marketplace</h1>
  );
}

export default NFTMarket;
