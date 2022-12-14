import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

function App() {
  // Variants
  // const [isOpen, setIsOpen] = useState(true);
  // const variants = {
  //   open: { opacity: 1, x: 0 },
  //   closed: { opacity: 0, x: "-100%" },
  // };

  // exit
  // const [list, setList] = useState([1]);

  return (
    <>
      {/* basic */}
      {/* <motion.div
        className="box"
        animate={{ x: 0, y: 0, rotate: 0 }}
        transition={{ type: "spring" }}
      /> */}

      {/* initial */}
      {/* <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      /> */}

      {/* Keyframes */}
      {/* <motion.div
        style={{ marginLeft: 200 }}
        className="box"
        animate={{
          scale: [4, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ duration: 4 }}
      /> */}

      {/* Variants */}
      {/* <button
        style={{ zIndex: 22, marginBottom: 20, background: "gray", color: "white" }}
        onClick={() => {
          console.log("hola");
          setIsOpen((isOpen) => !isOpen)
        }}
      >
        test
      </button>
      <motion.div
        className="box"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      ></motion.div> */}

      {/* Gestures */}
      {/* <div className="example-container">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
      </div> */}

      {/* Exit animations */}
      {/* <div style={{ marginLeft: 20 }}>
        <button
          style={{
            zIndex: 22,
            marginBottom: 20,
            background: "gray",
            color: "white",
          }}
          onClick={() => {
            setList([1, 2]);
          }}
        >
          add
        </button>
        <button
          style={{
            zIndex: 22,
            background: "gray",
            color: "white",
            margin: "0 10px",
          }}
          onClick={() => {
            setList([1]);
          }}
        >
          remove
        </button>
        <AnimatePresence>
          {list.map((list, index) => (
            <motion.div
              key={index}
              className="box"
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            />
          ))}
        </AnimatePresence>
      </div> */}

      {/* Layout */}
      {/* https://codesandbox.io/s/framer-motion-layout-animations-snxgv?from-embed=&file=/src/App.tsx */}
    </>
  );
}

export default App;
