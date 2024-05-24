import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { socket } from '../../../socket';
import '../../../styles/ChatComponents.css';
import user from '../../../assets/user1.jpg';

export function Events() {
  const [events, setEvents] = useState([]);
  const [count, setCount] = useState(1);
  const [prevCharId, setPrevCharId] = useState(null);
  const [borders, setBorders] = useState([]);

  useEffect(() => {
    const handleMessageReceive = (char, value) => {
      setEvents((prevEvents) => [...prevEvents, { char, value: preprocessText(value) }]);
  
      if (prevCharId !== char.id) {
        setCount(1);
        setPrevCharId(char.id);
        setBorders((prevBorders) => [...prevBorders, events.length]);
      } else {
        setCount(count + 1);
      }
    };

    if (count % 5 === 0) {
      setBorders((prevBorders) => [...prevBorders, events.length]);
    }
  
    socket.on('receive message', handleMessageReceive);
  
    return () => {
      socket.off('receive message', handleMessageReceive);
    };
  }, [prevCharId, count, events.length]);
  
  /*
  useEffect(() => {
    if (count % 5 === 0) {
      setBorders((prevBorders) => [...prevBorders, events.length]);
    }
  }, [count, events.length]);

  */

  const preprocessText = (text) => {
    return text.replace(/([*#])\n/g, (match, p1) => `${p1}  \n`);
  };
  

  const parseNewLines = (text) => {
    if (typeof text === 'string') {
      return text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
    } else {
      return text;
    }
  };

  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <div className="code-wrapper" key={props.key}>
          <SyntaxHighlighter
            {...props}
            children={String(children).replace(/\n$/, '')}
            style={dark}
            language={match[1]}
            PreTag="div"
          />
        </div>
      ) : (
        <code {...props} className={className}>
          {children}
        </code>
      );
    },
    p: ({ node, children }) => parseNewLines(children),
  };

  return (
    <div>
      {events.map((event, index) => (
        <div className="event-wrapper" key={index}>
          {borders.includes(index) && <div className="border"></div>}
          {borders.includes(index) && <div className="top-table">
            <img src={user} alt="user" />
            <b>{event.char['name']}</b>
          </div>}
          <div className="event-text">
            <ReactMarkdown key={event.value} components={components}>
              {event.value}
            </ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
}
