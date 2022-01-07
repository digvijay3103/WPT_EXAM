import { useState } from "react";
import { ListGroup } from "react-bootstrap";
export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [input, setMessage] = useState("");
  const [userList, setList] = useState([]);

  const sendMessage = (e) => {
    setMessage(e.target.value);
    alert("Sent successfully...");
    setMessage("");
    if(input == ""){
      alert("Validation Fails...")
      return
    }
  };
  const seeMessage = (e) => {
    const user = {
      input: input,
    };
    const newList = [user, ...userList];
    setList(newList);
  };
  return (
    <div>
      <div>
        <h1 className="bg-dark text-white p-3">MyChatApp</h1>
        <p>by [Name : Digvijay Londhe][ID : 210940520023]</p>
      </div>
      <div>
        <input
          className="border-radius w-50  pt-2"
          type="text"
          value={input}
          placeholder="Lets chat here..."
        />
      </div>
      <div>
        <input
          className="btn btn-secondary w- pt-2 mt-2"
          type="button"
          value="Send"
          onChange={sendMessage}
        />
        <input
          className="btn btn-secondary w- pt-2 mt-2 mr-5"
          type="button"
          value="View All"
          onClick={seeMessage}
        />
      </div>
      <div>
        {userList.map((item, index) => (
          <div key={index}>{item.input}</div>
        ))}
      </div>
    </div>
  );
}
