CREATE TABLE Categories(
    Categoryid INT AUTO_INCREMENT,
    Tenloai varchar(50),
    PRIMARY KEY (categoryid)
)

CREATE TABLE Products(
    Productid INT AUTO_INCREMENT,
    Tensanpham varchar(50),
    Giasanpham INT,
    Soluong INT,
    MotaHH varchar(50),
    Categoryid INT,
    PRIMARY KEY (productid),
    Constraint FK_Products_Categories FOREIGN KEY (Categoryid) REFERENCES Categories(Categoryid)
)

Create Image(
    Imageid INT AUTO_INCREMENT,
    Image varchar(50),
    Productid INT,
    PRIMARY KEY (imageid),
    Constraint FK_Images_Products FOREIGN KEY (Productid) REFERENCES Products(Productid)
)

CREATE TABLE Groups(
    Groupid INT AUTO_INCREMENT,
    Tennhom varchar(50),
    Description varchar(50),
    PRIMARY KEY (groupid)
)

CREATE TABLE Roles(
    Roleid INT AUTO_INCREMENT,
    Description varchar(50),
    Url varchar(50),
    PRIMARY KEY (roleid)
)

CREATE TABLE GroupsRoles(
    Groupid INT,
    Roleid INT,
    PRIMARY KEY (groupid,roleid),
    Constraint FK_GroupsRoles_Groups FOREIGN KEY (Groupid) REFERENCES Groups(Groupid),
    Constraint FK_GroupsRoles_Roles FOREIGN KEY (Roleid) REFERENCES Roles(Roleid)
)


CREATE TABLE Users(
	Userid INT AUTO_INCREMENT ,
    MotaHHatkhau varchar(50),
    Diachi varchar(50),
    Sodienthoai varchar(50),
    Groupid INT,
    PRIMARY KEY (userid,Sodienthoai),
    Constraint FK_Users_Groups FOREIGN KEY (Groupid) REFERENCES Groups(Groupid)
)

CREATE TABLE Orders(
    Orderid INT AUTO_INCREMENT,
    Userid INT,
    Sodonhang INT,
    Trangthai INT,
    Ngaydathang INT,
    PRIMARY KEY (orderid),
    Constraint FK_Orders_Users FOREIGN KEY (Userid) REFERENCES Users(Userid)
)

CREATE TABLE OrderDetails(
    Orderid INT,
    Productid INT,
    Soluong INT,
    PRIMARY KEY (orderid,productid),
    Constraint FK_OrderDetails_Orders FOREIGN KEY (Orderid) REFERENCES Orders(Orderid),
    Constraint FK_OrderDetails_Products FOREIGN KEY (Productid) REFERENCES Products(Productid)
)

