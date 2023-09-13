MovieBox 🍿
MovieBox is a dynamic movie discovery web application designed to showcase top trending movies, offer movie search functionality, and display comprehensive details about individual movies. Integrated seamlessly with The Movie Database (TMDB) API, the application presents real-time data in a visually appealing and user-friendly interface.

MovieBox Screenshot 
![MovieBox Screenshot](../movie/src//Assets//Homepage.png)

Features 🌟
Homepage Display: Showcases the top 10 movies in a visually appealing grid layout.
Movie Search: Robust search functionality to find movies by their titles.
Detailed Movie View: Presents comprehensive details of selected movies, including title, release date, runtime, and an engaging overview.
Prerequisites 🛠
Before you begin, ensure you have met the following requirements:

Node.js and npm
React
A personal TMDB API Key: Obtain yours from TMDB.

Getting Started 🚀

1.Clone the Project: https://github.com/Stensis/movie-discovery-web-application.git
2.Navigate to Project Directory: cd MovieBox
3.Install Required Dependencies: npm install.
4.Environment Setup:
Create a .env file at the project root.
Populate it with your TMDB API Key:REACT_APP_BEARER_TOKEN=YOUR_TMDB_API_KEY
5.Launch the App: npm start
6.This will fire up the development server, and MovieBox will be live at `http://localhost:3000`.

Project Structure 🏗

1.Homepage: 
The landing view showing the top 10 movies. Individual movie listings are managed by the MovieCard component.

2.Search: 
Handles movie search and displays results with movie posters, titles, and release dates.

3.Movie Details: 
Dedicated view to display detailed information about a movie when selected.

4.Error Handling 🔥
In the face of adversity, MovieBox stands tall! Our application is rigged to handle potential errors gracefully. From API failures to minor glitches, users are always presented with friendly and informative error messages.


Links 🔗
Repository: [https://github.com/Stensis/movie-discovery-web-application.git]
Licensing ⚖️
The code in this project is licensed under MIT license

