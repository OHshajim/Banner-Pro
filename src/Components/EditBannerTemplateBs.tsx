import { useState } from "react";
import Image from "next/image";

const EditBannerTemplateBs = ({
  banner,
  onSave,
}: {
  banner: any;
  onSave: (updatedBanner: any) => void;
}) => {
  const [editedBanner, setEditedBanner] = useState(banner);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setEditedBanner((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedBanner);
  };

  return (
    <div className="max-w-screen-sm mx-auto fixed bottom-0 left-0 right-0 bg-white p-5 rounded-t-xl border-t border-gray-200 shadow-lg ">
      <div
        className=" p-5 bg-cover bg-center rounded-lg shadow-lg sm:p-6 md:p-8 lg:p-10"
        style={{ backgroundImage: `url(${editedBanner.background})` }}
      >
        <div className="flex justify-between ">
          <div className="flex flex-col  text-white">
            <h2 className="text-xl font-bold mt-2 sm:text-2xl md:text-3xl">
              {editedBanner.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg ">
              {editedBanner.description}
            </p>
            <div className="max-w-52 w-full mt-auto">
              <button className="btn mt-3 px-4 py-2 text-white rounded w-full">
                {editedBanner.cta}
              </button>
            </div>
          </div>
          <Image
            src={editedBanner.image}
            alt={editedBanner.title}
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-2 mt-4">
        <input
          name="title"
          defaultValue={editedBanner.title}
          onChange={handleChange}
          placeholder="Title"
          className="p-2 border rounded bg-white text-black"
        />
        <input
          name="description"
          defaultValue={editedBanner.description}
          onChange={handleChange}
          placeholder="Description"
          className="p-2 border rounded bg-white text-black "
        />
        <input
          name="cta"
          defaultValue={editedBanner.cta}
          onChange={handleChange}
          placeholder="CTA"
          className="p-2 border rounded bg-white text-black"
        />
        <input
          name="image"
          defaultValue={editedBanner.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="p-2 border rounded bg-white text-black"
        />
        <input
          name="background"
          defaultValue={editedBanner.background}
          onChange={handleChange}
          placeholder="Background URL"
          className="p-2 border rounded bg-white text-black"
        />
        <button
          onClick={handleSave}
          className="self-end px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
