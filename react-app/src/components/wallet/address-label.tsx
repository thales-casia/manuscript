function AddressLabel({onClick, address}:any) {
  return (
    <div>
      <label>{address}</label>
      <button onClick={onClick}>断开连接</button>
    </div>
  );
}

export default AddressLabel;
