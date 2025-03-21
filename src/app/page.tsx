import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const games = [
    { id: 1, name: "Calculator", path: "/games/calculator" },
    { id: 2, name: "Traffic Light", path: "/games/traffic-light" },
    { id: 3, name: "Rock Paper Scissors", path: "/games/rock-paper-scissors" },
    { id: 4, name: "Connect Four", path: "/games/connect-four" },
    { id: 5, name: "Quiz App", path: "/games/quiz-app" },
    { id: 6, name: "Simon Says", path: "/games/simon-says" },
    { id: 7, name: "Whack-a-Mole", path: "/games/whack-a-mole" },
    { id: 8, name: "Tic Tac Toe", path: "/games/tic-tac-toe" },
    { id: 9, name: "Tower of Hanoi", path: "/games/tower-of-hanoi" },
    { id: 10, name: "Memory Game", path: "/games/memory-game" },
    { id: 11, name: "Gradient Generator", path: "/games/gradient-generator" },
    { id: 12, name: "Histogram", path: "/games/histogram" },
    { id: 13, name: "Tree Visualization", path: "/games/tree-visualization" },
    { id: 14, name: "Stopwatch", path: "/games/stopwatch" },
    { id: 15, name: "Speed Test", path: "/games/speed-test" },
    { id: 16, name: "Expense Tracker", path: "/games/expense-tracker" },
    { id: 17, name: "Dice Roller", path: "/games/dice-roller" },
    { id: 18, name: "Quote Generator", path: "/games/quote-generator" },
    { id: 19, name: "Split View", path: "/games/split-view" },
    { id: 20, name: "Bonus Game", path: "/games/bonus-game" },
  ];
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Interactive Games</h1>
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-5">
          {games.map((game) => (
            <Link
              key={game.id}
              href={game.path}
              className="flex items-center justify-center h-36 w-36 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-center p-2">
                <span className="text-sm font-medium">{game.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
