import './App.css';
import { useState } from "react";

const Nav = (props) => {
  const { topics, onChangeMode } = props;
  const topicList = topics.map((objItem) => {
    return (<li key={objItem["id"]}><a id={objItem["id"]} href={`/read/${objItem["id"]}`} onClick={(event) => {
      event.preventDefault();
      onChangeMode(Number(event.target.id));
    }}>{objItem["title"]}</a></li>);
  });
  return (
    <nav>
      <ol>
        {topicList}
      </ol>
    </nav>
  );
}

const Header = (props) => {
  const { title, onChangeMode } = props;
  return (
    <header>
      <h1><a href="/" onClick={(event) => {
        event.preventDefault();
        onChangeMode();
      }}>{title}</a></h1>
    </header>
  );
}

const Article = (props) => {
  const { title, body } = props
  return (
    <article>
      <h2>{title}</h2>
      {body}
    </article>
  );
}

const Create = (props) => {
  const {onCreateMode} = props;
  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      const createObj = {
        title: event.target.title.value,
        body: event.target.body.value
      }
      onCreateMode({...createObj});
    }}>
      <h2>CREATE</h2>
      <p><input type="text" name="title" placeholder="title"/></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="create"/></p>
    </form>
  );
}

const Update = (props) => {
  const [title, setTitle] = useState(props["title"]);
  const [body, setBody] = useState(props["body"]);
  return(
    <form onSubmit={(event)=>{
      event.preventDefault();
      const updateValues = {title: title, body: body}
      props["onUpdateMode"]({...updateValues});
    }}>
      <h2>UPDATE</h2>
      <p><input type="text" name="title" placeholder="title" value={title} onChange={(event)=>{
        setTitle(event.target.value)
      }}/></p>
      <p><textarea name="body" placeholder="body" value={body} onChange={(event)=>{
        setBody(event.target.value)
      }}></textarea></p>
      <p><input type="submit" value="update"/></p>
    </form>
  )
}

const App = () => {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ]);
  let [content, contextControl] = [null, null];


  switch (mode) {
    case "WELCOME": {
      content = <Article title="WELCOME" body="Hello, World" />
      break;
    }
    case "READ": {
      const readItem = topics.filter((objItem) => { return objItem["id"] === id; });
      content = <Article title={readItem[0]["title"]} body={readItem[0]["body"]} />
      contextControl = (<>
        <li><a href={`/update/${id}`} onClick={(event)=>{
          event.preventDefault();
          setMode("UPDATE");
        }}>UPDATE</a></li>
        <li><button onClick={()=>{setMode("DELETE");}}>Delete</button></li>
      </>);
      break;
    }
    case "CREATE":{
      content = <Create onCreateMode={(domValueObj)=>{
        const {title, body} = domValueObj;
        const newTopic = [{id: nextId, title:title, body: body}];
        setTopics([...topics,...newTopic]);
        setMode("READ");
        setId(nextId);
        setNextId(nextId+1);
      }}/>
      break;
    }
    case "UPDATE":{
      let readItem = topics.filter((objItem) => { return objItem["id"] === id; });
      content = <Update title={readItem[0]["title"]} body={readItem[0]["body"]} onUpdateMode={(updateValues)=>{
        const {title, body} = updateValues;
        console.log(updateValues)
        let updateTopics =  [...topics] 
        updateTopics.forEach((obj)=>{
          (obj["id"] === id) && (obj["title"] = title) && (obj["body"] = body)
        });
        setTopics([...updateTopics]);
        setMode("READ");
      }}/>
      break;
    }
    case "DELETE": {
      let deleteTopics = topics.filter((item)=>{return item["id"] !== id;});
      setTopics([...deleteTopics]);
      setMode("WELCOME")
      break;
    }
    default: {break;}
  }

  return (
    <div className="App">
      <Header title="REACT" onChangeMode={() => {
        setMode("WELCOME");
      }} />
      <Nav topics={topics} onChangeMode={(id) => {
        setMode("READ");
        setId(id);
      }} />
      {content}
      <ul>
        <li><a href="/create" onClick={(event)=>{
          event.preventDefault();
          setMode("CREATE");
        }}>CREATE</a></li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
