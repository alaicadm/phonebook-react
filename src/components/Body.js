import React from 'react';

const Body = ({ title }) => {
  return <div class='body'>
        
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <form>
                        <div class = "row field">
                            <label for="fname" >First Name:</label>
                            <input type="text" id="fname" name="fname" ></input>
                        </div>

                        <div class = "row field">
                            <label for="mname" >Middle Name:</label>
                            <input type="text" id="mname" name="mname" ></input>
                        </div>

                        <div class = "row field">
                            <label for="lname" >Last Name:</label>
                            <input type="text" id="lname" name="lname" ></input>
                        </div>

                        <div class = "row field">
                            <label for="gender">Gender:</label>
                            <select name="gender" id="gender">
                                <option>--select--</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select>
                        </div>

                        <div class = "row field">
                            <label for="mobile" >Mobile Number:</label>
                            <input type="text" id="mobile" name="mobile" ></input>
                        </div>
                    </form>
                    <div class = "row">
                        <div class = "col-md-3">
                            <button class="btn btn-sm btn-def"><i class="bi bi-plus-circle"></i></button>
                        </div>
                        <div class = "col-md-3">
                            <button class="btn btn-sm btn-def"><i class="bi bi-pencil"></i></button>
                        </div>
                        <div class = "col-md-3">
                            <button class="btn btn-sm btn-def"><i class="bi bi-trash"></i></button>
                        </div>
                        <div class = "col-md-3">
                            <button class="btn btn-sm btn-def"><i class="bi bi-arrow-clockwise"></i></button>
                        </div>
                    </div>

                </div>
                <div class="col-8">
                    <table class="table table-bordred table-striped">
                        <thead>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Mobile</th>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
        
  </div>;
};

export default Body;
