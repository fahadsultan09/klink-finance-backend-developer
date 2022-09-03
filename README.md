# Klink Backend Developer Coding Challenge

Welcome to the Klink backend coding challenge.

The assignment consists of a simple web application and helper scripts to automate the most common tasks. Feel free to modify the project for your convenience while keeping focused on the assignment goals.

## Running instructions

Make sure the dependencies are installed.

```
npm install
```

Generate the data for the app.

```
npm run data:generate
```

To start the web application, use the following command.

```
npm run start
```
To create a mySQL database , i am using Docker for that. 
use the following docker command(assuming Docker is already installed) : 

```
docker run --name mysql-standalone -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=main -e MYSQL_USER=sa -e MYSQL_PASSWORD=password -p 3306:3306 -d mysql:5.6
```

To connect the database , You can use any Database Management Tool for MySQL i.e MySQL Workbench , phpMyAdmin
I used "DBeaver" for that.

To create the DDL , use the following commands :

```
-- main.banks definition

CREATE TABLE `banks` (
  `id` varchar(100) NOT NULL,
  `iban` varchar(100) NOT NULL,
  `bic` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- main.employees definition

CREATE TABLE `employees` (
  `id` varchar(100) NOT NULL,
  `position` varchar(100) NOT NULL,
  `salary` varchar(100) NOT NULL,
  `crypto` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- main.users definition

CREATE TABLE `users` (
  `userid` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `birthdate` varchar(100) NOT NULL,
  `registeredAt` varchar(100) NOT NULL,
  `employeeID` varchar(100) NOT NULL,
  `bankID` varchar(100) NOT NULL,
  PRIMARY KEY (`userid`),
  KEY `bankID` (`bankID`),
  KEY `employeeID` (`employeeID`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`bankID`) REFERENCES `banks` (`id`),
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`employeeID`) REFERENCES `employees` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
```

Now you can use , the postman collection attached in the root folder to call the routes.
