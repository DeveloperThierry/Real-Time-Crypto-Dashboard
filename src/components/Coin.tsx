import React from "react";
import { currencyFormat } from "../utils";
import { TrendingDown, TrendingUp } from "../icons/icon";
import { Link } from "react-router-dom";

const Coin = ({ coin }) => {
  console.log(coin);

  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="grid grid-cols-3 sm:grid-cols-4 font-light p-2 rounded border-gray-200 boder-b hover:bg-gray-200">
        <div className="flex item-center gap-1 w-full">
          <img
            className="w-6 w-6 h-6 rounded-full object-cover"
            src={coin.image}
            alt={coin.name}
          />
          <p>{coin.name}</p>
          <span className="text-xs">({coin.symbol})</span>
        </div>
        <span className="w-full text-center">
          {currencyFormat(coin.current_price)}
        </span>
        <span
          className={`flex gap-1 ${
            coin.price_change_percentage_24h < 0
              ? "text-red-400"
              : "text-green-400"
          }`}
        >
          {coin.price_change_percentage_24h < 0 ? (
            <TrendingDown />
          ) : (
            <TrendingUp />
          )}{" "}
          ${coin.price_change_percentage_24h}
        </span>
        <div className="hidden sm:block">
          <p className="front-semibold">Market Cap</p>
          <span>{currencyFormat(coin.market_cap)}</span>
        </div>
      </div>
    </Link>
  );
};

export default Coin;
