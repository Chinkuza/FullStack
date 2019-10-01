DROP DATABASE IF EXISTS HTMLphones;
CREATE DATABASE IF NOT EXISTS HTMLphones;

USE HTMLphones;

/*DROP TABLE IF EXISTS Phones; */

CREATE TABLE IF NOT EXISTS Products ( 
		ID int Primary key auto_increment ,
		Names VARCHAR(200),
		 Maker VARCHAR(200),
         Color VARCHAR(200),
         URL VARCHAR(200));




INSERT INTO Products (Names, Maker, Color,url  )
VALUES ('IPHONE 6sPLUS', 'APPLE' , 'BLACK','https://bit.ly/2mm9eMb'),
        ('IPHONE 7PLUS','APPLE','GOLD','https://bit.ly/2mm9eMb '),
        ('IPHONE 8','APPLE','GOLD', 'https://bit.ly/2nUvyNs'),
        ('IPHONE 8PLUS','APPLE','ROSE GOLD','https://bit.ly/2nUvyNs'),
        ('IPHONE X','APPLE','SILVER', 'https://bit.ly/2mr3D7u'),
        ('IPHONE XsMAX','APPLE','MATTE BLACK', 'https://bit.ly/2mr3D7u'),
        ('Samsung NOTE9','Samsung','BLUE', 'https://bit.ly/2z3Xb93'),
        ('Samsung S10','Samsung','GOLD', 'https://t-mo.co/30amnqq'),
        ('NOKIA Next','NOKIA','ARMY GREEN', 'https://bit.ly/2YWnyx9');
        
 CREATE TABLE IF NOT EXISTS Contacts ( 
		ID int Primary key auto_increment ,
		Names VARCHAR(200),
		 Adress VARCHAR(200),
         City VARCHAR(200),
         Zip VARCHAR(200));       
        
        
        


INSERT INTO Contacts (names , Adress , City , Zip)
VALUES ('Juan Rosario', '1224 Apple St' , 'Charlotte' , '28215'),
        ('Ricky Elias','1249 Echo Glen Ave','Ponce','96789'),
        ('Diana Hinojosa','516 vrdas way','Charlotte','28227'),
        ('Jose Perez','3141 bradstreet commons','Charlotte','28227'),
        ('Nancy Lopez','1235 La Florida Ave','Charlotte','28227'),
        ('Ivan Rosario','3603 la frontera Dr','Ponce','96789'),
        ('Sam Walton','1400 Walton Way','New York','90210'),
        ('Marco Roo ','1605 N Sharon Amity','Ponce','96789'),
        ('Edgar SR','1711 Echo Glen Ave','Charlotte','28213'),
        ('Edgar JR','1711 Echo Glen Ave','Charlotte','28213')
        ;
        
        


CREATE TABLE IF NOT EXISTS Price (
		
        Product_id int NOT NULL AUTO_INCREMENT Key,
		Price VARCHAR(200),
		Price_date VARCHAR(200));
	

INSERT INTO Price (Price , Price_date)
VALUES ('Juan Rosario', '1224 Apple St'),
        ('Ricky Elias','1249 Echo Glen Ave');     
        



