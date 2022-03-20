import axios from "axios";
import React, { FormEvent, useRef } from "react";
import "./additem.scss";
const AddItem = () => {
  const itemnameRef = useRef<HTMLInputElement | null>(null);
  const unitpriceRef = useRef<HTMLInputElement | null>(null);
  const addToMenu = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const details = {
        itemName: itemnameRef.current?.value,
        unitPrice: unitpriceRef.current?.value,
      };
      const data = await axios.post(
        "http://localhost:8000/admin/additem",
        details
      );
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="additem-container">
      <form onSubmit={addToMenu} action="#">
        <label htmlFor="itemname">ItemName:</label>
        <input ref={itemnameRef} type="text" name="itemname" id="itemnae" />
        <label htmlFor="unitprice">ItemPrice:</label>
        <input
          ref={unitpriceRef}
          type="number"
          name="unitprice"
          id="unitprice"
        />
        <button>Add item to Menu</button>
      </form>
    </div>
  );
};

export default AddItem;
