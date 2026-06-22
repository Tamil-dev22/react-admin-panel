import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UserForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        gender: "",
        department: "",
        skills: [],
        address: "",
        image: null,
        status: true,
    });
useEffect(() => {
  if (id) {
    const users = JSON.parse(
      localStorage.getItem("users")
    );

    const user = users.find(
      (u) => u.id === Number(id)
    );

    if (user) {
      setFormData(user);
    }
  }
}, [id]);
    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        if (type === "checkbox" && name === "skills") {
            let updatedSkills = [...formData.skills];

            if (checked) {
                updatedSkills.push(value);
            } else {
                updatedSkills = updatedSkills.filter(
                    (skill) => skill !== value
                );
            }

            setFormData({
                ...formData,
                skills: updatedSkills,
            });
        } else if (type === "checkbox") {
            setFormData({
                ...formData,
                [name]: checked,
            });
        } else if (type === "file") {
            setFormData({
                ...formData,
                image: files[0],
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };
const handleSubmit = (e) => {
  e.preventDefault();

  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  if (id) {
    const updatedUsers = users.map((user) =>
      user.id === Number(id)
        ? { ...formData, id: Number(id) }
        : user
    );

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    toast.success("User Updated");
  } else {
 const newUser = {
  ...formData,
  id: users.length
    ? Math.max(...users.map(u => u.id)) + 1
    : 1,
};

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

      toast.success("User Added");
  }

  navigate("/users");
};

    return (
        <div className="container mt-4">
            <div className="card shadow">
                <div className="card-header">
                    <h3>{id ? "Edit User" : "Add User"}</h3>
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row">

                            {/* Name */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Email */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Phone */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Department */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Department
                                </label>

                                <select
                                    className="form-select"
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                >
                                    <option value="">
                                        Select Department
                                    </option>
                                    <option value="IT">IT</option>
                                    <option value="HR">HR</option>
                                    <option value="Finance">
                                        Finance
                                    </option>
                                </select>
                            </div>

                            {/* Gender */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label d-block">
                                    Gender
                                </label>

                                <div className="form-check form-check-inline">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        name="gender"
                                        value="Male"
                                        checked={
                                            formData.gender === "Male"
                                        }
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label">
                                        Male
                                    </label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        name="gender"
                                        value="Female"
                                        checked={
                                            formData.gender === "Female"
                                        }
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label">
                                        Female
                                    </label>
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label d-block">
                                    Skills
                                </label>

                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="skills"
                                        value="React"
                                          checked={formData.skills.includes("React")}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label">
                                        React
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="skills"
                                        value="Angular"
                                          checked={formData.skills.includes("Angular")}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label">
                                        Angular
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="skills"
                                        value="NodeJS"
                                          checked={formData.skills.includes("NodeJS")}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label">
                                        NodeJS
                                    </label>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="col-md-12 mb-3">
                                <label className="form-label">
                                    Address
                                </label>

                                <textarea
                                    rows="3"
                                    className="form-control"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Image Upload */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Profile Image
                                </label>

                                <input
                                    type="file"
                                    className="form-control"
                                    name="image"
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Status */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label d-block">
                                    Status
                                </label>

                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="status"
                                        checked={formData.status}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label">
                                        Active
                                    </label>
                                </div>
                            </div>

                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            {id ? "Update User" : "Save User"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserForm;