import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RulesModal: React.FC<RulesModalProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-[rgba(13,12,34,0.95)] backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <div
              className="relative bg-gradient-to-br from-[rgba(28,27,60,0.98)] to-[rgba(18,17,40,0.98)] rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/5">
                <motion.h2
                  className="text-3xl font-bold bg-gradient-to-r from-tictac-blue via-tictac-purple to-tictac-blue bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Ultimate Tic-Tac-Toe Rules
                </motion.h2>
                <motion.button
                  onClick={onClose}
                  className="text-white/80 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-all duration-300 hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-tictac-blue/50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[calc(85vh-80px)] p-6">
                <div className="space-y-6">
                  <motion.div
                    className="rule-section bg-white/5 p-6 rounded-xl border border-white/10 hover:border-tictac-blue/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <h3 className="text-tictac-blue text-xl font-semibold mb-3">
                      Basic Concept
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      Ultimate Tic-Tac-Toe is played on a 3×3 grid of 3×3
                      Tic-Tac-Toe boards. Win three games in a row to win the
                      ultimate game!
                    </p>
                    <div className="mt-4 p-4 bg-white/5 rounded-lg">
                      <p className="text-white/80 text-sm">
                        <span className="text-tictac-blue font-semibold">
                          Note:
                        </span>{" "}
                        Each small board is like a regular Tic-Tac-Toe game, but
                        your move in one board determines where your opponent
                        must play next.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="rule-section bg-white/5 p-6 rounded-xl border border-white/10 hover:border-tictac-blue/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <h3 className="text-tictac-blue text-xl font-semibold mb-3">
                      How to Play
                    </h3>
                    <ol className="text-white/90 list-decimal pl-5 space-y-3">
                      <li className="hover:text-white transition-colors">
                        <span className="font-semibold">First Move:</span> The
                        first player can play in any small board and any cell
                        within that board.
                      </li>
                      <li className="hover:text-white transition-colors">
                        <span className="font-semibold">Subsequent Moves:</span>{" "}
                        The cell you play in determines which board your
                        opponent must play in next. For example, if you play in
                        the top-right cell of a board, your opponent must play
                        in the top-right board.
                      </li>
                      <li className="hover:text-white transition-colors">
                        <span className="font-semibold">Winning a Board:</span>{" "}
                        Win a small board by getting three of your marks in a
                        row (horizontally, vertically, or diagonally).
                      </li>
                      <li className="hover:text-white transition-colors">
                        <span className="font-semibold">Winning the Game:</span>{" "}
                        Win the game by winning three small boards in a row
                        (horizontally, vertically, or diagonally).
                      </li>
                    </ol>
                  </motion.div>

                  <motion.div
                    className="rule-section bg-white/5 p-6 rounded-xl border border-white/10 hover:border-tictac-blue/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <h3 className="text-tictac-blue text-xl font-semibold mb-3">
                      Special Rules
                    </h3>
                    <ul className="text-white/90 list-disc pl-5 space-y-3">
                      <li className="hover:text-white transition-colors">
                        <span className="font-semibold">Completed Boards:</span>{" "}
                        If you're sent to a board that's already won, you can
                        play in any open board of your choice.
                      </li>
                      <li className="hover:text-white transition-colors">
                        <span className="font-semibold">Full Boards:</span> If
                        you're forced to play in a full board (all cells
                        filled), you can play in any open board.
                      </li>
                      <li className="hover:text-white transition-colors">
                        <span className="font-semibold">Tied Boards:</span> If a
                        small board ends in a tie, no player gets that square in
                        the meta-board.
                      </li>
                      <li className="hover:text-white transition-colors">
                        <span className="font-semibold">Meta-Board:</span> The
                        meta-board tracks which player has won each small board.
                        It's crucial for planning your strategy.
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    className="rule-section bg-white/5 p-6 rounded-xl border border-white/10 hover:border-tictac-blue/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <h3 className="text-tictac-blue text-xl font-semibold mb-3">
                      Strategy Tips
                    </h3>
                    <ul className="text-white/90 list-disc pl-5 space-y-3">
                      <li className="hover:text-white transition-colors">
                        <span className="font-semibold">Think Ahead:</span> Your
                        move determines where your opponent plays next. Try to
                        send them to unfavorable positions.
                      </li>
                      <li className="hover:text-white transition-colors">
                        <span className="font-semibold">Center Control:</span>{" "}
                        The center board is often the most valuable as it's part
                        of multiple winning combinations.
                      </li>
                      <li className="hover:text-white transition-colors">
                        <span className="font-semibold">Multiple Paths:</span>{" "}
                        Create situations where you have multiple ways to win,
                        forcing your opponent to defend against all
                        possibilities.
                      </li>
                      <li className="hover:text-white transition-colors">
                        <span className="font-semibold">Defensive Play:</span>{" "}
                        Sometimes it's better to prevent your opponent from
                        winning a board than to try to win one yourself.
                      </li>
                      <li className="hover:text-white transition-colors">
                        <span className="font-semibold">Board Priority:</span>{" "}
                        Focus on boards that are part of multiple winning
                        combinations in the meta-board.
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RulesModal;
