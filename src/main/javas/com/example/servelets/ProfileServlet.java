import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.IOException;

//WebServlet("/profile")
public class ProfileServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Example data to pass to the JSP
        request.setAttribute("userName", "John Doe");
        request.setAttribute("userEmail", "john.doe@example.com");

        // Forward the request to a JSP
        RequestDispatcher dispatcher = request.getRequestDispatcher("profile.jsp");
        dispatcher.forward(request, response);
    }
}
