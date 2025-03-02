// import { jsPDF } from "jspdf";

// export const generatePDF = (formData) => {
//     const updatedObject = {
//         ...formData, // Copy existing properties
//         "hobbies": "Watching Movies, Playing Football, Listening to Music", // Add new key-value pair
//     };

//     delete updatedObject._id;
//     delete updatedObject.user_id;
//     delete updatedObject.job_id;
   

//     const doc = new jsPDF();

//     // Header - Name & Position
//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(22);
//     doc.text(updatedObject.fullName, 105, 20, { align: "center" });
//     doc.setFontSize(14);
//     doc.text(updatedObject.position, 105, 28, { align: "center" });

//     // Contact Details
//     doc.setFont("helvetica", "normal");
//     doc.setFontSize(12);
//     doc.text(`Phone: ${updatedObject.mobile}`, 15, 40);
//     doc.text(`Email: ${updatedObject.email}`, 15, 50);
//     doc.text(`Location: ${updatedObject.location}`, 15, 60);
//     doc.text(`LinkedIn: ${updatedObject.linkedIn}`, 15, 70);
//     doc.text(`GitHub: ${updatedObject.github}`, 15, 80);

//     let y = 90; // Dynamic Y position

//     // About Me Section
//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(16);
//     doc.text("About Me", 15, y);
//     y += 10;
//     doc.setFont("helvetica", "normal");
//     let profileText = doc.splitTextToSize(updatedObject.profile, 180);
//     doc.text(profileText, 15, y);
//     y += profileText.length * 7;

//     // Skills
//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(16);
//     doc.text("Skills", 15, y);
//     y += 10;
//     doc.setFont("helvetica", "normal");
//     let skillsArray = updatedObject.skills.split(",").map(skill => skill.trim());
//     skillsArray.forEach((skill, index) => {
//         doc.text(`• ${skill}`, 15, y + index * 7);
//     });
//     y += skillsArray.length * 7 + 5;

//     // Experience
//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(16);
//     doc.text("Experience", 15, y);
//     y += 10;
//     doc.setFont("helvetica", "normal");
//     updatedObject.experience.split(",").forEach((exp, index) => {
//         doc.text(`• ${exp.trim()}`, 15, y + index * 7);
//     });
//     y += updatedObject.experience.split(",").length * 7 + 5;


//     // Certifications
//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(16);
//     doc.text("Certifications", 15, y);
//     y += 10;
//     doc.setFont("helvetica", "normal");
//     doc.text(`• ${updatedObject.certificate}`, 15, y);
//     y += 10;

//     // Hobbies
//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(16);
//     doc.text("Hobbies", 15, y);
//     y += 10;
//     doc.setFont("helvetica", "normal");
//     let hobbiesArray = updatedObject.hobbies.split(",").map(hobby => hobby.trim());
//     hobbiesArray.forEach((hobby, index) => {
//         doc.text(`• ${hobby}`, 15, y + index * 7);
//     });
//     y += hobbiesArray.length * 7;

//     // Save PDF
//     doc.save("resume.pdf");
// };
import { jsPDF } from "jspdf";

export const generatePDF = async (formData) => {
    const updatedObject = {
        ...formData,
        "hobbies": "Watching Movies, Playing Football, Listening to Music",
    };

    delete updatedObject._id;
    delete updatedObject.user_id;
    delete updatedObject.job_id;

    const doc = new jsPDF();

    // Header - Name & Position
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text(updatedObject.fullName, 105, 20, { align: "center" });
    doc.setFontSize(14);
    doc.text(updatedObject.position, 105, 28, { align: "center" });

    // Contact Details
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Phone: ${updatedObject.mobile}`, 15, 40);
    doc.text(`Email: ${updatedObject.email}`, 15, 50);
    doc.text(`Location: ${updatedObject.location}`, 15, 60);
    doc.text(`LinkedIn: ${updatedObject.linkedIn}`, 15, 70);
    doc.text(`GitHub: ${updatedObject.github}`, 15, 80);

    let y = 90;

    // About Me Section
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("About Me", 15, y);
    y += 10;
    doc.setFont("helvetica", "normal");
    let profileText = doc.splitTextToSize(updatedObject.profile, 180);
    doc.text(profileText, 15, y);
    y += profileText.length * 7;

    // Skills
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Skills", 15, y);
    y += 10;
    doc.setFont("helvetica", "normal");
    let skillsArray = updatedObject.skills.split(",").map(skill => skill.trim());
    skillsArray.forEach((skill, index) => {
        doc.text(`• ${skill}`, 15, y + index * 7);
    });
    y += skillsArray.length * 7 + 5;

    // Experience
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Experience", 15, y);
    y += 10;
    doc.setFont("helvetica", "normal");
    updatedObject.experience.split(",").forEach((exp, index) => {
        doc.text(`• ${exp.trim()}`, 15, y + index * 7);
    });
    y += updatedObject.experience.split(",").length * 7 + 5;

    // Certifications
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Certifications", 15, y);
    y += 10;
    doc.setFont("helvetica", "normal");
    doc.text(`• ${updatedObject.certificate}`, 15, y);
    y += 10;

    // Hobbies
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Hobbies", 15, y);
    y += 10;
    doc.setFont("helvetica", "normal");
    let hobbiesArray = updatedObject.hobbies.split(",").map(hobby => hobby.trim());
    hobbiesArray.forEach((hobby, index) => {
        doc.text(`• ${hobby}`, 15, y + index * 7);
    });
    y += hobbiesArray.length * 7;

    // Convert PDF to Blob
    const pdfBlob = doc.output("blob");

    // Prepare FormData
    const formDataToSend = new FormData();
    
    formDataToSend.append("file", pdfBlob, "resume.pdf");

    // Send PDF to FastAPI backend
    try {
        const response = await fetch("http://localhost:8000/upload", {
            method: "POST",
            body: formDataToSend,
        });

        if (response.ok) {
            console.log("PDF saved successfully!");
        } else {
            console.error("Failed to save PDF.");
        }
    } catch (error) {
        console.error("Error saving PDF:", error);
    }
};
