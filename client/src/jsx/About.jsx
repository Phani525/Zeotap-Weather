import React from 'react';

function About() {
	return <div>
		<center><h1  style={{fontSize: '3.5vw'}}>Weather Sense</h1></center>
		<a style={{fontSize: '2vw'}}>
  <center>
    This is a comprehensive MERN Stack project (MongoDB, ExpressJS, React, and Node.js) designed to fetch and display weather data. <br />
    The application integrates the Weather API to present various weather parameters such as humidity, UV index, and more on the frontend. <br /><br />
    
    The backend utilizes MongoDB to store user information, including Name, Email, Password, and City, allowing for personalized data display based on user-specific details. <br /><br />
    
    ExpressJS and Node.js are employed to bridge the React frontend with the MongoDB database, handling API requests to fetch and deliver relevant data to the client.
  </center>
</a>

	</div>
}
export default About;
