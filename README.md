<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![LinkedIn][linkedin-shield-eszter]][linkedin-url-eszter]

<div align="center">
  <a href="https://github.com/Sx4p/petProject">
    <img src="https://i.imgur.com/Tx3TS6S.png" alt="Logo" width="406" height="101">
  </a>

<h3 align="center">CostCalendar</h3>

  <p align="center">
    
CostCalendar is your easy-to-use financial app. Track your spending and earnings, all in one spot. See clear statements and charts to better manage your money. Take control of your financials.
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


## About The Project

The Home page Calendar, where you can add financials for each date:
<br />

![Main][product-gif-main]

<br />

The Financial statements, where you can check details of incomes and expenses between two dates:
<br />

![Financials][product-gif-statements]
<br />



<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

<p>Frontend:</p>

-   [![Javascript][Javascript]][Javascript-url]
-   [![React][React.js]][React-url]
-   [![MUI][MUI]][MUI-url]
-   [![Node.js][NodeJS]][NodeJS-url]
-   [![Express.js][Express.js]][Express.js-url]
  
<p>Backend:</p>

-   [![Java][Java]][Java-url]
-   [![Spring][Spring]][Spring-url]
-   [![PostgreSQL][PostgreSQL]][PostgreSQL-url]

<p>Deployment:</p>

- [![Docker][Docker]][Docker-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Follow this guide to run and try the application. First you have to create a hosted database on Supabase and install Docker Desktop, then you can build the application.

### Prerequisites

- Create hosted DB on Supabase:
1. Create an account on https://supabase.com/
2. Click on the ``New Project`` button on the Projects site.
3. Give a name and add a password [Don't forget it, you have to use it later in environment variables!] to your database, select the nearest Region
4. Click on the ``New Project`` button.
5. Select the Project Settings on the sidebar.
6. Click Database on the left side.
7. Find Connection string and select the JDBC option.

- Install Docker Desktop. Follow this guide: https://docs.docker.com/desktop/install/windows-install/

### Installation

1. Open the terminal.
2. Clone the repository.
    ```sh
    git clone https://github.com/Sx4p/petProject.git
    ```
3. Navigate into the project folder with ``cd petProject`` command.
4. Set the environment variables:
    Username can be found in your Supabase project.
    ```sh
    export DB_USER={your database username}
    ```
    ```sh
    export DB_PASSWORD={your database password}
    ```
    Before this step copy the connection string JDBC URL until the postgres word from Supabase. => E.g.  ``jdbc:postgresql://db.example.supabase.co:5432/postgres``
    ```sh
    export DB_DATABASE={database connection string}
    ```
5. Use the following command for building and running the application:
   ```sh
    docker-compose up -d
    ```
6. After building is finished go to the http://localhost:3000/ URL in your browser.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Contact

Eszter Gyöngyvér Erdélyi -  esztergyerdelyi@gmail.com
<br />

Project Link: https://github.com/Sx4p/petProject

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/Sx4p/petProject.svg?style=for-the-badge
[contributors-url]: https://github.com/Sx4p/petProject/graphs/contributors

[linkedin-shield-eszter]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url-eszter]: https://www.linkedin.com/in/eszter-erdelyi/


[product-gif-main]: gifs-for-readme/calendar.gif
[product-gif-statements]: gifs-for-readme/statements.gif

[Javascript]: https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=typescript&logoColor=white
[Javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[Spring]: https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white
[Spring-url]: https://spring.io/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[NodeJS]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[NodeJS-url]: https://nodejs.org/en
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express.js-url]: https://expressjs.com/
[PostgreSQL]: https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[Docker]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[MUI]: https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=white
[MUI-url]: https://mui.com/
[Java]: https://img.shields.io/badge/java-F80000?style=for-the-badge&logo=oracle&logoColor=white
[Java-url]: https://www.oracle.com/java/
