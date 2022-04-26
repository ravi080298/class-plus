import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      {open && <Modal open={open} />}
      <button onClick={openModal}>Modal</button>
    </div>
  );
}

const Modal = (props) => {
  const { open } = props;
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);
  return (
    <>
      <h1>hello, modal</h1>
      <p>{counter}</p>
    </>
  );
};
