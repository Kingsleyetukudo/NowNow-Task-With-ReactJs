import React, { useRef, useState } from "react";

export default function Form() {
  const [primaryColor, setPrimaryColor] = useState("#dddddd");
  const [ascentColor, setAscentColor] = useState("#ffffff");
  const [file, setFile] = useState([]);
  const fileInput = useRef(null);
  const fileInput2 = useRef(null);

  const handleUpload = () => {
    fileInput.current.click();
  };

  const handleChange = (e) => {
    setFile([...file, e.target.files[0]]);
    console.log(e);
  };
  const handleUpload2 = () => {
    fileInput2.current.click();
  };

  const handleChange2 = (e) => {
    setFile([...file, e.target.files[0]]);
    console.log(e);
  };

  return (
    <div>
      <div className="w-4/5 sidebar:w-90 mobile:w-full mobile:px-6 m-auto mt-9">
        <form>
          <div className="flex flex-col gap-5">
            <div className="flex justify-between mobile:flex mobile:flex-wrap gap-12 mobile:gap-5">
              <div className="md:w-1/2 w-full">
                <label className="text-lg">Community Name</label>
                <div className="border border-black flex items-center px-3 py-3 rounded-md">
                  <input
                    type="text"
                    placeholder="Community Name"
                    className=" placeholder:text-sm w-full outline-none"
                  />
                </div>
              </div>

              <div className="md:w-1/2 w-full">
                <label className="text-lg">Community Slug</label>
                <div className="border border-black flex items-center px-3 py-3 rounded-md">
                  <input
                    type="text"
                    placeholder="Community Slug"
                    className=" placeholder:text-sm w-full outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-12">
              <div className="w-full">
                <label className="text-lg">Describe your Community</label>
                <div className="border border-black flex items-center px-3 py-3 rounded-md">
                  <input
                    type="text"
                    placeholder="Describe your Community"
                    className=" placeholder:text-sm w-full outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-12 mobile:flex mobile:flex-wrap mobile:gap-5">
              <div className="md:w-1/2 w-full">
                <label className="text-lg">Category</label>
                <div className="border border-black flex items-center px-3 py-3 rounded-md">
                  <input
                    type="text"
                    placeholder="Category"
                    className=" placeholder:text-sm w-full outline-none"
                  />
                </div>
              </div>

              <div className="md:w-1/2 w-full">
                <label className="text-lg">Color Palette</label>
                <div className="grid grid-cols-2 gap-20">
                  <div className=" flex items-center">
                    <p className="mr-4">Primary</p>
                    <input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className=" placeholder:text-sm  w-full outline-none border-none appearance-none bg-transparent style1 h-14"
                    />
                  </div>
                  <div className=" flex items-center">
                    <p className="mr-4">Ascent</p>
                    <input
                      type="color"
                      value={ascentColor}
                      onChange={(e) => setAscentColor(e.target.value)}
                      placeholder="Community Slug"
                      className=" placeholder:text-sm  w-full outline-none border-none appearance-none bg-transparent style1 h-14"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <label className="text-lg">Typograhy</label>
              <div className="flex justify-between gap-12 mobile:flex mobile:flex-wrap mobile:gap-5">
                <div className="md:w-1/2 w-full">
                  <div className="flex items-center">
                    <p className="mr-4">Headline</p>
                    <div className="border border-black flex items-center px-3 py-3 rounded-md w-full">
                      <select className="w-full outline-none">
                        <option value="">Select Font</option>
                        <option value="h1">H1</option>
                        <option value="h2">H2</option>
                        <option value="h3">H3</option>
                        <option value="h4">H4</option>
                        <option value="h5">H5</option>
                        <option value="h6">H6</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 w-full">
                  <div className="flex items-center">
                    <p className="mr-4">Body</p>
                    <div className="border border-black flex items-center px-3 py-3 rounded-md w-full">
                      <select className="w-full outline-none">
                        <option value="">Select Font</option>
                        <option value="p">P</option>
                        <option value="span">Span</option>
                        <option value="article">Article</option>
                        <option value="section">Section</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-12 mobile:flex mobile:flex-wrap mobile:gap-5">
              <div className="md:w-1/2 w-full">
                <label className="text-lg">Brand Icon 1</label>
                <div
                  className="border border-black flex items-center justify-center bg-gray-300 px-3 py-3 rounded-md"
                  onClick={handleUpload}>
                  <input
                    type="file"
                    ref={fileInput}
                    onChange={handleChange}
                    placeholder="Community Name"
                    className=" placeholder:text-sm w-full outline-none hidden"
                  />
                  <p>Click to Upload Image</p>
                </div>
                <p className="text-center mt-2 text-sm">Jpg, Gif and PNG</p>
              </div>

              <div className="md:w-1/2 w-full">
                <label className="text-lg">Brand Icon 2</label>
                <div
                  className="border border-black flex items-center justify-center  bg-gray-300 px-3 py-3 rounded-md"
                  onClick={handleUpload2}>
                  <p>Click to Upload Image</p>
                  <input
                    type="file"
                    ref={fileInput2}
                    onChange={handleChange2}
                    placeholder="Community Name"
                    className=" placeholder:text-sm w-full outline-none hidden"
                  />
                </div>
                <p className="text-center mt-2 text-sm">Jpg, Gif and PNG</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-16">
            <button className="bg-gray-900 w-1/4 py-2 text-brandColor rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
