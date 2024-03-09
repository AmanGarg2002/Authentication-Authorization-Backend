
The authentication and authorization system in this project leverages JSON Web Tokens (JWT) for secure and stateless user authentication. The implementation extends beyond the traditional approach by utilizing JWT tokens in three key areas: cookies, headers, and within the token itself.

JWT Token in Cookies:

User authentication tokens are securely stored as HTTP cookies.
Cookies provide a secure and convenient way to manage and transmit authentication tokens between the client and server.
The HttpOnly flag may be set to enhance security by preventing client-side JavaScript access to the cookie.
JWT Token in Headers:

JWT tokens are included in the headers of HTTP requests.
This ensures that the token is sent with each request, allowing the server to verify the user's identity and permissions for authorized actions.
Embedded JWT Token:

User roles, permissions, and other relevant information are embedded within the JWT token itself.
The token is digitally signed, providing a secure and tamper-proof method of transmitting user details between the client and server.
The server can decode the token to extract user information without the need for additional database queries.
This approach enhances security, scalability, and efficiency by combining the benefits of token-based authentication with different transport mechanisms. By using cookies, headers, and embedded tokens, the system ensures a flexible and robust authentication and authorization process for seamless user interactions with the application.
