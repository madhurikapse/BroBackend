import { ContactForm } from "../model/ContactForm.js";

export const submitContactForm = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      country,
      organization,
      industry,
      role,
      services,
    } = req.body;

    const savedContact = await new ContactForm({
      firstName,
      lastName,
      email,
      phone,
      country,
      organization,
      industry,
      role,
      services,
    }).save();

    return res.status(201).json({
      message: 'Form submitted successfully',
      contact: savedContact,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error submitting form',
      error: error.message,
    });
  }
};
