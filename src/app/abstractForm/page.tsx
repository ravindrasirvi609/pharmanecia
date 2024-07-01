"use client";
import AbstractForm from "@/components/abstract-form";
import React, { useState } from "react";

const AbstractFormPage: React.FC = () => {
  return (
    <div className="p-16 bg-gradient-to-bl from-blue-600 via-violet-600 to-blue-800">
      <AbstractForm />
    </div>
  );
};

export default AbstractFormPage;
