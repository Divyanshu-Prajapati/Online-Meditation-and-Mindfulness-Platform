<!DOCTYPE html>
<html>
<head>
    <title>User List</title>
</head>
<body>
    <h1>User List</h1>
    <c:forEach var="item" items="${userList}">
        <p>${item.name} - ${item.email}</p>
    </c:forEach>
    User user = (User) request.getSession().getAttribute("user");
if (user == null) {
    response.sendRedirect("login.jsp");
}
    
    
</body>
</html>
