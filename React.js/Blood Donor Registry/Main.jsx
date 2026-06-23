import BloodDonors from "./BloodDonors"
import ContactNumbers from "./ContactNumbers"

let noOfBloodDonors = 0

export default function Main() {
    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const name = formData.get("name").trim()
        const age = Number(formData.get("age"))
        const gender = formData.get("gender")
        const bloodType = formData.get("bloodType")
        const contactNumber = formData.get("contactNumber")
        const city = formData.get("city").trim()
        const lastBloodDonationDate = formData.get("lastBloodDonationDate")

        if(name !== "" && 
            city !== "" && 
            age >= 18 && 
            age <= 65 && 
            !ContactNumbers.includes(contactNumber) && 
            contactNumber >= 1000000000 && 
            contactNumber <= 9999999999
        ){
            const newBloodDonor = { 
                id : noOfBloodDonors++,
                name,
                age,
                gender,
                bloodType,
                contactNumber,
                city,
                lastBloodDonationDate
            }
            BloodDonors.push(newBloodDonor)
            ContactNumbers.push(contactNumber)
            event.currentTarget.reset()
            console.log(noOfBloodDonors)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* Name */}
                <label htmlFor="nameInput">Name:</label>
                <input name="name" type="text" placeholder="e.g. Vikas Gupta" id="nameInput" required />
                {/* Age */}
                <label htmlFor="ageInput">Age:</label>
                    <input name="age" type="number" placeholder="e.g. 23" id="ageInput" required />
                {/* Gender */}
                <select name="gender" required>
                    <option value={""} disabled >--Select Gender--</option>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                    <option value={"other"}>Other</option>
                </select>
                {/* Blood Type */}
                <select name="bloodType" required>
                    <option value={""} disabled>--Select Blood Type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>
                {/* Contact Info */}
                <fieldset  >
                    <legend>Contact Info</legend>
                    <label >Contact Number:
                        <input name="contactNumber" type="tel" placeholder="e.g. XXXXXXXX23" required />
                    </label>
                    <label>City:
                        <input name="city" type="text" placeholder="e.g. Pune" required />
                    </label>
                </fieldset>
                {/* Medical Info */}
                <fieldset>
                    <legend>Medical Info</legend>
                    <label>Last Blood Donation Date:
                        <input name="lastBloodDonationDate" type="date" required />
                    </label>
                </fieldset>
                {/* Submit Button */}
                <button>Submit</button>
            </form>
        </>
    )
}