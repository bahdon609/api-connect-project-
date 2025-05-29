import React, { useState } from "react";
import { IoImageSharp } from "react-icons/io5";

function InstituteSettings() {
  const [formData, setFormData] = useState({
    institute_name_bangla: "",
    institute_name_english: "",
    institute_contact_no: "",
    institute_contact_no_2: "",
    institute_contact_email: "",
    image_opacity: "",

    emis_code: "",
    institute_established: "",
    institute_address_bangla: "",
    institute_address: "",
  });
const [logo, setLogo] = useState();
const [headerBG, setHeaderBG] = useState();
const [favion, setFavicon] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted", formData);
  };

  

  const handleLogoChange = (e) => {
     const file = e.target.files?.[0]
    if (!file) return
    const fileReader = new FileReader()
    fileReader.onload = async () => {
      if (fileReader.readyState === 2) {
        const imageUrl = fileReader.result ;
        setLogo(imageUrl);
      
      }
    }
    fileReader.readAsDataURL(file)
  };

    const imageHandlerHeaderBg = async (e) => {

    const file = e.target.files?.[0]
    if (!file) return
    const fileReader = new FileReader()
    fileReader.onload = async () => {
      if (fileReader.readyState === 2) {
        const imageUrl = fileReader.result ;
        setHeaderBG(imageUrl);
      
      }
    }
    fileReader.readAsDataURL(file)

  }

      const imageHandlerFavicon= async (e) => {

    const file = e.target.files?.[0]
    if (!file) return
    const fileReader = new FileReader()
    fileReader.onload = async () => {
      if (fileReader.readyState === 2) {
        const imageUrl = fileReader.result ;
        setFavicon(imageUrl);
      
      }
    }
    fileReader.readAsDataURL(file)

  }
  return (
    <div className="p-4">
      <div className="text-left mb-4">
        <h3 className="text-2xl font-bold">Update Institute Setting</h3>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-6 rounded space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">
              Institute Name Bangla *
            </label>
            <input
              type="text"
              name="institute_name_bangla"
              value={formData.institute_name_bangla}
              onChange={handleChange}
              className="w-full border border-blue-500 p-2 rounded bg-transparent outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-300 transition"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Institute Name English *
            </label>
            <input
              type="text"
              name="institute_name_english"
              value={formData.institute_name_english}
              onChange={handleChange}
              className="w-full border border-blue-500 p-2 rounded bg-transparent outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-300 transition"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Institute Contact 1 *
            </label>
            <input
              type="number"
              name="institute_contact_no"
              value={formData.institute_contact_no}
              onChange={handleChange}
              className="w-full border border-blue-500 p-2 rounded bg-transparent outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-300 transition"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Institute Contact 2
            </label>
            <input
              type="number"
              name="institute_contact_no_2"
              value={formData.institute_contact_no_2}
              onChange={handleChange}
              className="w-full border border-blue-500 p-2 rounded bg-transparent outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-300 transition"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Institute Email</label>
            <input
              type="email"
              name="institute_contact_email"
              value={formData.institute_contact_email}
              onChange={handleChange}
              className="w-full border border-blue-500 p-2 rounded bg-transparent outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-300 transition"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              HoloGram Image Opacity *
            </label>
            <input
              type="number"
              name="image_opacity"
              min="1"
              max="99"
              value={formData.image_opacity}
              onChange={handleChange}
              className="w-full border border-blue-500 p-2 rounded bg-transparent outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-300 transition"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">EMIS Code *</label>
            <input
              type="number"
              name="emis_code"
              value={formData.emis_code}
              onChange={handleChange}
              className="w-full border border-blue-500 p-2 rounded bg-transparent outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-300 transition"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Established *</label>
            <input
              type="number"
              name="institute_established"
              value={formData.institute_established}
              onChange={handleChange}
              className="w-full border border-blue-500 p-2 rounded bg-transparent outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-300 transition"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Institute Address Bangla *
            </label>
            <input
              type="text"
              name="institute_address_bangla"
              value={formData.institute_address_bangla}
              onChange={handleChange}
              className="w-full border border-blue-500 p-2 rounded bg-transparent outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-300 transition"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Institute Address English *
            </label>
            <input
              type="text"
              name="institute_address"
              value={formData.institute_address}
              onChange={handleChange}
              className="w-full border border-blue-500 p-2 rounded bg-transparent outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-300 transition"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-5 justify-items-center">
          <div className="w-full max-w-md">
            <label htmlFor="logo" className="block text-lg font-medium mb-2">
              Website Logo <span className="text-red-500 text-2xl">*</span>
            </label>

            <label
              htmlFor="logo"
              className="cursor-pointer p-2 rounded bg-transparent border border-dashed border-gray-600 transition h-[300px] flex items-center justify-center overflow-hidden"
            >
              {logo ? (
                <img
                  src={logo}
                  alt="Selected logo"
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="text-gray-500"><IoImageSharp size={150} /></span>
              )}
            </label>

            <input
              type="file"
              id="logo"
              className="hidden"
              accept="image/*"
              required
              onChange={handleLogoChange}
            />
          </div>

          <div className="w-full max-w-md">
            <label htmlFor="HeaderBG" className="block text-lg font-medium mb-2">
              Website Header Background <span className="text-red-500 text-2xl">*</span>
            </label>

            <label
              htmlFor="HeaderBG"
              className="cursor-pointer p-2 rounded bg-transparent border border-dashed border-gray-600 transition h-[300px] flex items-center justify-center overflow-hidden"
            >
              {headerBG ? (
                <img
                  src={headerBG}
                  alt="Selected logo"
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="text-gray-500"><IoImageSharp size={150} /></span>
              )}
            </label>

            <input
              type="file"
              id="HeaderBG"
              className="hidden"
              accept="image/*"
              required
              onChange={imageHandlerHeaderBg}
            />
          </div>

          <div className="w-full max-w-md">
            <label htmlFor="Favion" className="block text-lg font-medium mb-2">
              Website Favicon<span className="text-red-500 text-2xl">*</span>
            </label>

            <label
              htmlFor="Favion"
              className="cursor-pointer p-2 rounded bg-transparent border border-dashed border-gray-600 transition h-[300px] flex items-center justify-center overflow-hidden"
            >
              {favion ? (
                <img
                  src={favion}
                  alt="Selected logo"
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="text-gray-500"><IoImageSharp size={150} /></span>
              )}
            </label>

            <input
              type="file"
              id="Favion"
              className="hidden"
              accept="image/*"
              required
              onChange={imageHandlerFavicon}
            />
          </div>
        </div>

        <div className="pt-6">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded"
          >
            Update Data
          </button>
        </div>
      </form>
    </div>
  );
}

export default InstituteSettings;
