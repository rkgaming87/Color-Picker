import React from 'react'

const Admissionform = () => {
    return (
        <div>
            <div className="form-container">
                <h2>School Admission Form</h2>

                <form>
                    <label>Student's Name <span className="required">*</span></label>
                    <div className="name-fields">
                        <input type="text" placeholder="First" required />
                        <input type="text" placeholder="Last" required />
                    </div>

                    <label>Class you want to apply for <span className="required">*</span></label>
                    <input type="text" placeholder="For example: Class 2015–2016." required />

                    <label>Student's DoB <span className="required">*</span></label>
                    <input type="date" required />

                    <label>Parent/Guardian Name <span className="required">*</span></label>
                    <div className="name-fields">
                        <input type="text" placeholder="First" required />
                        <input type="text" placeholder="Last" required />
                    </div>

                    <label>Current Address</label>
                    <input type="text" placeholder="Street Address" />
                    <input type="text" placeholder="Street Address Line 2 " />

                    <div className="address-fields">
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="Region" />
                    </div>
                    <div className="address-fields">
                        <input type="text" placeholder="Postal / Zip Code" />
                        <select>
                            <option value="">Country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>

                        </select>
                    </div>

                    <label>Phone</label>
                    <input type="tel" placeholder="#### ######" />

                    <label>Email <span className="required">*</span></label>
                    <input type="email" placeholder="Your admission confirmation will be sent via email" required />

                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Admissionform
