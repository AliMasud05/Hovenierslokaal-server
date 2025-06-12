import config from "../config";
import nodemailer from "nodemailer";

export const sendEmail = async (to: string, payload: any) => {
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: config.sendEmail.brevo_email,
      pass: config.sendEmail.brevo_pass,
    },
  });

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());

  const field = (label: string, value?: string) =>
    value
      ? `<p style="text-align: left; line-height: 28px; color: #000;">
          <strong style="color: #121849;">${label}:</strong> ${value}
        </p>`
      : "";

  const html = `
  <div style="max-width: 600px; margin: 0 auto; background-color: #f3f4fa; color: #333; border-radius: 8px; padding: 24px;">
    <table style="width: 100%;">
      <tr>
        <td>
          <img src="https://i.ibb.co/m528rJkY/logo.png" alt="logo" style="height: 40px; margin-bottom: 16px;" />
        </td>
        <td style="text-align: right; color: #999;">${formattedDate}</td>
      </tr>
    </table>

    <h2 style="text-align: center; color: #122e5b;">Informatie</h2>
    <div style="padding: 0 1em;">
      ${field("companyName", payload?.companyName)}
      ${field("phone", payload?.phone)}
      ${field("contactPerson", payload?.contactPerson)}
      ${field("email", payload?.email)}

  ${field("name", payload?.name)}
  ${field("phone", payload?.phone)}
  ${field("postcode", payload?.postcode)}
  ${field("plaats", payload?.plaats)}
  ${field("straat", payload?.straat)}
  ${field("huisnummer", payload?.huisnummer)}
  ${field("Wat moet er gebeuren?", payload?.dienst || payload?.customService)}
  ${field("Heeft u ontwerptekeningen?", payload?.heeftEenOntwerp)}
  ${field("Wat is de oppervlakte van de tuin in m2?", payload?.tuingrootte)}
  ${field("Wat is de locatie van de tuin?", payload?.tuinlocatie === 'other' ? payload?.customGardenLocation : payload?.tuinlocatie)}
  ${field("formType", payload?.formType)}
  ${field("Wat moet er gebeuren?", payload?.customService)}
  ${field("Wat is de locatie van de tuin?", payload?.customGardenLocation)}

      
    </div>

    <hr style="margin: 24px 0;" />

    <div style="text-align: center;">
      <a href="https://www.facebook.com" style="margin: 0 8px;">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="24" />
      </a>
      <a href="https://www.youtube.com" style="margin: 0 8px;">
        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width="24" />
      </a>
      <a href="https://www.linkedin.com" style="margin: 0 8px;">
        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="LinkedIn" width="24" />
      </a>
      <a href="https://www.instagram.com" style="margin: 0 8px;">
        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png" alt="Instagram" width="24" />
      </a>
    </div>
  </div>
  `;

  await transporter.sendMail({
    from: `Art Of Jyotish <${config.sendEmail.email_from}>`,
    to: config.sendEmail.email_from,
    subject: "User Contact Info",
    text: `User Contact Info\n\nName: ${payload.fullName || ""}\nEmail: ${
      payload.email || ""
    }`,
    html,
  });
};
