import { useEffect, useState } from "react";
import USER_LIST from "../mockData/userList";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
const UserList = () => {
    const [users, setUsers] = useState(() => {
        const storedUsers = localStorage.getItem("users");

        return storedUsers
            ? JSON.parse(storedUsers)
            : USER_LIST;
    });
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );
    }, [users]);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this user?"
        );

        if (!confirmDelete) return;

        const updatedUsers = users.filter(
            (user) => user.id !== id
        );

        setUsers(updatedUsers);

        toast.success("User deleted successfully!");
    };
    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>User List</h2>

                <button className="btn btn-primary" onClick={() => navigate("/users/add")}>
                    Add User
                </button>
            </div>

            <div className="card shadow">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped table-hover align-middle">

                            <thead className="table-dark">
                                <tr>
                                    <th>ID</th>
                                    {/* <th>Profile</th> */}
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Gender</th>
                                    <th>Department</th>
                                    <th>Skills</th>
                                    <th>Address</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {users.length > 0 ? (
                                    users.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>

                                            {/* <td>
                        <img
                          src={
                            user.image ||
                            "https://via.placeholder.com/50"
                          }
                          alt={user.name}
                          width="50"
                          height="50"
                          className="rounded-circle"
                        />
                      </td> */}

                                            <td>{user.name}</td>

                                            <td>{user.email}</td>

                                            <td>{user.phone}</td>

                                            <td>{user.gender}</td>

                                            <td>{user.department}</td>

                                            <td>
                                                {user.skills?.join(", ")}
                                            </td>

                                            <td>{user.address}</td>

                                            <td>
                                                <span
                                                    className={`badge ${user.status
                                                            ? "bg-success"
                                                            : "bg-danger"
                                                        }`}
                                                >
                                                    {user.status
                                                        ? "Active"
                                                        : "Inactive"}
                                                </span>
                                            </td>

                                            <td>
                                                <button className="btn btn-warning btn-sm me-2" onClick={() => navigate(`/users/${user.id}`)}>
                                                    Edit
                                                </button>

                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => handleDelete(user.id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="11"
                                            className="text-center text-danger"
                                        >
                                            No Users Found
                                        </td>
                                    </tr>
                                )}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserList;