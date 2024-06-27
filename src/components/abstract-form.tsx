"use client";

import { useState, ChangeEvent } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Errors {
  email?: string;
  whatsappNumber?: string;
  name?: string;
  affiliation?: string;
  title?: string;
  subject?: string;
  abstractFile?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
}

export function AbstractForm() {
  const [email, setEmail] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [name, setName] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [coAuthor, setCoAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [abstractFile, setAbstractFile] = useState<File | null>(null);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Errors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!whatsappNumber) {
      newErrors.whatsappNumber = "WhatsApp number is required";
    } else if (!/^[1-9]\d{9}$/.test(whatsappNumber)) {
      newErrors.whatsappNumber = "Invalid WhatsApp number format";
    }
    if (!name) {
      newErrors.name = "Name is required";
    }
    if (!affiliation) {
      newErrors.affiliation = "Affiliation is required";
    }
    if (!title) {
      newErrors.title = "Title is required";
    }
    if (!subject) {
      newErrors.subject = "Subject is required";
    }
    if (!abstractFile) {
      newErrors.abstractFile = "Abstract file is required";
    } else if (abstractFile.size > 1024 * 1024) {
      newErrors.abstractFile = "Abstract file must be less than 1 MB";
    } else if (
      ![
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(abstractFile.type)
    ) {
      newErrors.abstractFile = "Only document files are allowed";
    }
    if (!address) {
      newErrors.address = "Address is required";
    }
    if (!city) {
      newErrors.city = "City is required";
    }
    if (!state) {
      newErrors.state = "State is required";
    }
    if (!pincode) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(pincode)) {
      newErrors.pincode = "Invalid pincode format";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("whatsappNumber", whatsappNumber);
      formData.append("name", name);
      formData.append("affiliation", affiliation);
      formData.append("coAuthor", coAuthor);
      formData.append("title", title);
      formData.append("subject", subject);
      if (abstractFile) {
        formData.append("abstractFile", abstractFile);
      }
      formData.append("address", address);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("pincode", pincode);

      try {
        const response = await fetch("/api/submitAbstract", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Failed to submit abstract");
        }

        const result = await response.json();
        console.log(result);

        if (result.newAbstract) {
          window.location.href = `/abstractForm/${result.newAbstract._id}`;
        } else {
          throw new Error("Failed to submit abstract");
        }
        console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-4xl font-bold">
          Conference Abstract Submission
        </CardTitle>
        <CardDescription>
          Please fill out the form below to submit your abstract.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-bold">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              {errors.email && (
                <p className="text-red text-sm">{errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="whatsappNumber" className="font-bold">
                WhatsApp Number
              </Label>
              <div className="flex items-center gap-2">
                <Input
                  id="whatsappNumber"
                  type="tel"
                  placeholder="Enter your WhatsApp number"
                  value={whatsappNumber}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setWhatsappNumber(e.target.value)
                  }
                />
                <div className="bg-muted px-2 py-1 rounded-md text-sm text-muted-foreground">
                  +91
                </div>
              </div>
              {errors.whatsappNumber && (
                <p className="text-red text-sm">{errors.whatsappNumber}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name" className="font-bold">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            {errors.name && <p className="text-red text-sm">{errors.name}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="affiliation" className="font-bold">
              Affiliation of Author
            </Label>
            <Input
              id="affiliation"
              placeholder="Enter your affiliation"
              value={affiliation}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAffiliation(e.target.value)
              }
            />
            {errors.affiliation && (
              <p className="text-red text-sm">{errors.affiliation}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="coAuthor" className="font-bold">
              Co-Author (if any)
            </Label>
            <Input
              id="coAuthor"
              placeholder="Enter co-author's name"
              value={coAuthor}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCoAuthor(e.target.value)
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title" className="font-bold">
              Title of Abstract
            </Label>
            <Input
              id="title"
              placeholder="Enter the title of your abstract"
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
            />
            {errors.title && <p className="text-red text-sm">{errors.title}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject" className="font-bold">
              Select Presentation Subject
            </Label>
            <Select
              value={subject}
              onValueChange={(value: string) => setSubject(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="subject1">Subject 1</SelectItem>
                <SelectItem value="subject2">Subject 2</SelectItem>
                <SelectItem value="subject3">Subject 3</SelectItem>
                <SelectItem value="subject4">Subject 4</SelectItem>
              </SelectContent>
            </Select>
            {errors.subject && (
              <p className="text-red text-sm">{errors.subject}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="abstractFile" className="font-bold">
              Upload Abstract File
            </Label>
            <Input
              id="abstractFile"
              type="file"
              accept=".doc,.docx,.pdf"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAbstractFile(e.target.files ? e.target.files[0] : null)
              }
            />
            {errors.abstractFile && (
              <p className="text-red text-sm">{errors.abstractFile}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="address" className="font-bold">
              Address for Communication
            </Label>
            <Textarea
              id="address"
              placeholder="Enter your address"
              value={address}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setAddress(e.target.value)
              }
            />
            {errors.address && (
              <p className="text-red text-sm">{errors.address}</p>
            )}
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city" className="font-bold">
                City
              </Label>
              <Input
                id="city"
                placeholder="Enter your city"
                value={city}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCity(e.target.value)
                }
              />
              {errors.city && <p className="text-red text-sm">{errors.city}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="state" className="font-bold">
                State
              </Label>
              <Input
                id="state"
                placeholder="Enter your state"
                value={state}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setState(e.target.value)
                }
              />
              {errors.state && (
                <p className="text-red text-sm">{errors.state}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="pincode" className="font-bold">
                Pincode
              </Label>
              <Input
                id="pincode"
                type="number"
                placeholder="Enter your pincode"
                value={pincode}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPincode(e.target.value)
                }
              />
              {errors.pincode && (
                <p className="text-red text-sm">{errors.pincode}</p>
              )}
            </div>
          </div>
          <Button type="submit" className="mt-4 text-white">
            Submit Abstract
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default AbstractForm;
