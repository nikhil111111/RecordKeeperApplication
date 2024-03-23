const Fields = ({name, email, index}) => {
  return (
    <div className="data_val">
        <h4>{name}</h4>
        <h4>{email}</h4>
        {/* Remove krne ke liye context API ka use krna pdega */}
        <button>Delete</button>
    </div>
  );
}

export default Fields