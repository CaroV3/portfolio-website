const projects = [
    {
        id: "smartclock",
        title: "Smart Alarm Clock",
        image: "img/alarm-clock-robot.png",
        html: `
      <p>This project is a smart alarm clock designed to help users wake up more easily using a combination of light, sound, and motion detection.</p>
      <h2>Features</h2>
      <ul>
        <li>Drives away so user has to get out of bed</li>
        <li>Puzzle to solve before being able to turn off the alarm</li>
        <li>Touch interface for controls</li>
      </ul>
      <h2>Technology Used</h2>
      <p>Built using micro:bit and diverse accessories. Enclosure was 3D printed.</p>
    `
    },
    {
        id: "chatbot",
        title: "Einstein Chatbot",
        image: "img/Einstein-chatbot.png",
        html: `
      <p>A Node.js chatbot that lets you talk to Albert Einstein.
        The chatbot uses AI (via Azure OpenAI) combined with vector search (FAISS) to retrieve relevant context from documents. 
        It helps students learn history and science through engaging dialogues.</p>
      <h2>How It Works</h2>
      <ul>
        <li>Chat with a simulated version of Einstein</li>
        <li>Uses document context (vector search with LangChain)</li>
        <li>Chat history is stored in local storage for context and topic tracking</li>
      </ul>
      <h2>Why It Matters</h2>
      <p>Combines AI and education to create a fun, interactive learning tool.</p>
      <a href="https://github.com/CaroV3/einstein-chatbot">Link to Github</a>
    `
    },
    {
        id: "reservationsystem",
        title: "Reservation system",
        image: "img/reservation-system.png",
        html: `
      <p>I developed this reservation system for an agricultural and horticultural machinery company, allowing customers to book a time slot to view specific machines.</p>
      <h2>How It Works</h2>
      <ul>
        <li>Built with Laravel</li>
        <li>Styled using Bootstrap</li>
        <li>Includes an admin section</li>
        <li>Lets users create an account</li>
        <li>Saves data in a MySQL database</li>
      </ul>
      <p>During this project I worked with a real client to gain experience with working in a professional environment, communicating with clients, and responding to their needs.</p>
      <a target="_blank" href="https://github.com/CaroV3/DMReservationSystem">Link to Github</a>
    `
    },
    {
        id: "rock-paper-scissors",
        title: "Rock-paper-scissors game",
        image: "img/rock-paper-scissors.png",
        html: `
      <p>This is an interactive browser-based Rock-Paper-Scissors game that uses real-time hand pose recognition powered by MediaPipe and ml5.js. 
      Players make physical hand gestures (rock, paper, or scissors), which are captured via webcam and classified by a pre-trained neural network. 
      The game then compares the user's gesture with a randomly generated computer move and displays the result.</p>
      <h2>How It Works</h2>
      <ul>
        <li>Real-time hand detection using MediaPipe’s HandLandmarker</li>
        <li>Hand pose classification using a pre-trained ml5.js neural network</li>
        <li>Webcam-based input: lets you play with real poses</li>
        <li>Visual feedback: detected hand landmarks are drawn live on canvas using HTML Canvas</li>
      </ul>
      
      <a target="_blank" href="https://github.com/CaroV3/rock-paper-scissors">Link to Github</a>
    `
    },
    {
        id: "veilige-haven",
        title: "Veilige Haven chatbot",
        image: "img/veilige-haven-home.png",
        html: `
      <p>insert details</p>
      <h2>How It Works</h2>
      <ul>
        <li>feature one</li>
        <li>feature  two</li>
      </ul>
      <h2>Why It Matters</h2>
      <p>blablalbla something something</p>
      
      <a target="_blank" href="https://github.com/CaroV3">Link to Github</a>

    `
    }
];
