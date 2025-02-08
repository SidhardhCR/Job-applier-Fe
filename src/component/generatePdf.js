import { jsPDF } from "jspdf";

export const generatePDF = (formData) => {
    const doc = new jsPDF();

    // Header - Name & Position
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text(formData.fullName, 105, 20, { align: "center" });
    doc.setFontSize(14);
    doc.text(formData.position, 105, 28, { align: "center" });

    // Contact Details
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Phone: ${formData.mobile}`, 15, 40);
    doc.text(`Email: ${formData.email}`, 15, 50);
    doc.text(`Location: ${formData.location}`, 15, 60);
    doc.text(`LinkedIn: ${formData.linkedIn}`, 15, 70);
    doc.text(`GitHub: ${formData.github}`, 15, 80);

    let y = 90; // Dynamic Y position

    // About Me Section
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("About Me", 15, y);
    y += 10;
    doc.setFont("helvetica", "normal");
    let profileText = doc.splitTextToSize(formData.profile, 180);
    doc.text(profileText, 15, y);
    y += profileText.length * 7;

    // Skills
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Skills", 15, y);
    y += 10;
    doc.setFont("helvetica", "normal");
    let skillsArray = formData.skills.split(",").map(skill => skill.trim());
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
    formData.experience.split(",").forEach((exp, index) => {
        doc.text(`• ${exp.trim()}`, 15, y + index * 7);
    });
    y += formData.experience.split(",").length * 7 + 5;


    // Certifications
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Certifications", 15, y);
    y += 10;
    doc.setFont("helvetica", "normal");
    doc.text(`• ${formData.certificate}`, 15, y);
    y += 10;

    // Hobbies
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Hobbies", 15, y);
    y += 10;
    doc.setFont("helvetica", "normal");
    let hobbiesArray = formData.hobbies.split(",").map(hobby => hobby.trim());
    hobbiesArray.forEach((hobby, index) => {
        doc.text(`• ${hobby}`, 15, y + index * 7);
    });
    y += hobbiesArray.length * 7;

    // Save PDF
    doc.save("resume.pdf");
};