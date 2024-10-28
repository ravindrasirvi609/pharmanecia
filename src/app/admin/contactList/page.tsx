"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface Contact {
  name: string;
  email: string;
  mobile: string;
  message: string;
  registrationId: string;
  timeStamp: string;
}

const ContactList = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("/api/contactList");
        setContacts(response.data.contacts);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Contact List</h1>

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by name or email"
          className="border p-2 rounded w-full max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : filteredContacts.length > 0 ? (
        <table className="w-full text-left table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border-b">Name</th>
              <th className="p-2 border-b">Email</th>
              <th className="p-2 border-b">Mobile</th>
              <th className="p-2 border-b">Message</th>
              <th className="p-2 border-b">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((contact) => (
              <tr key={contact.registrationId} className="hover:bg-gray-100">
                <td className="p-2 border-b">{contact.name}</td>
                <td className="p-2 border-b">{contact.email}</td>
                <td className="p-2 border-b">{contact.mobile}</td>
                <td className="p-2 border-b">{contact.message}</td>
                <td className="p-2 border-b">
                  {new Date(contact.timeStamp).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center">No contacts found</div>
      )}
    </div>
  );
};

export default ContactList;
