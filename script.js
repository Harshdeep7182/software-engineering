const donors = [
    { name: "Rahul Sharma", bloodGroup: "A+", contact: "9876543210", type: "Hostel - A Block" },
    { name: "Priya Singh", bloodGroup: "B+", contact: "9876543211", type: "Day Scholar" },
    { name: "Amit Verma", bloodGroup: "O+", contact: "9876543212", type: "Hostel - C Block" },
    { name: "Neha Gupta", bloodGroup: "AB-", contact: "9876543213", type: "Day Scholar" }
    
];

function searchDonors() {
    const bloodGroup = document.getElementById("bloodGroup").value;
    const donorTable = document.getElementById("donorTable");
    donorTable.innerHTML = "";

    const filteredDonors = donors.filter(donor => donor.bloodGroup === bloodGroup);

    if (filteredDonors.length === 0) {
        donorTable.innerHTML = `<tr><td colspan="4" class="text-center">No donors available</td></tr>`;
        return;
    }

    filteredDonors.forEach(donor => {
        const row = `<tr>
            <td>${donor.name}</td>
            <td>${donor.bloodGroup}</td>
            <td>${donor.contact}</td>
            <td>${donor.type}</td>
        </tr>`;
        donorTable.innerHTML += row;
    });
}
