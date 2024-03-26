 create table manufacturer (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  companyName VARCHAR(255) NOT NULL
 );

 create table category (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
 categoryName VARCHAR(255) NOT NULL
 );

 CREATE TABLE location (
    ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 locationName VARCHAR(255) NOT NULL
 );

 CREATE TABLE records (
    record_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
 category INT NOT NULL, 
 manufacturer INT NOT NULL, 
 model VARCHAR(255) NOT NULL, 
 serial VARCHAR(255) NOT NULL, 
 purchase_date DATE NOT NULL, 
 cost DECIMAL(13, 2) NOT NULL, 
 location INT NOT NULL, 
 sub_location VARCHAR(255),
 CONSTRAINT FK_CATEGORYID FOREIGN KEY (category) REFERENCES category(id),
 CONSTRAINT FK_MANUFACTURERID FOREIGN KEY (manufacturer) REFERENCES manufacturer(id);
 CONSTRAINT FK_LOCATIONID FOREIGN KEY (location) REFERENCES location(id);
 );

 SELECT records.record_id, category.categoryName, manufacturer.companyName, records.model, records.serial, records.purchase_date, records.cost, location.locationName, records.sub_location 
 FROM ((
   (records INNER JOIN category ON records.category = category.id) 
   INNER JOIN manufacturer ON records.manufacturer = manufacturer.id) 
   INNER JOIN location ON records.location = location.id);