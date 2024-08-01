import { useState } from "react";
import BannerImageComp from "./BannerImageComp";
import { RxCross1 } from "react-icons/rx";

const EditBannerTemplateBs = ({
  banner,
  onSave,
  setEditingBanner,
}: {
  banner: any;
  setEditingBanner: any;
  onSave: (updatedBanner: any) => void;
}) => {
  const [editedBanner, setEditedBanner] = useState(banner);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    console.log(name, value);

    setEditedBanner((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedBanner);
  };

  return (
    <div className=" max-w-screen-sm mx-auto fixed bottom-0 left-0 right-0 bg-white p-5 rounded-t-xl border-t border-gray-200 shadow-lg overflow-y-scroll">
      <div className="relative">
        <h4 className="text-xl mb-2 text-zinc-700">Edit Banner</h4>

        <BannerImageComp banner={editedBanner} onEdit={null} isEdit={false} />

        <div className="flex flex-col  mt-4">
          <label>Title</label>
          <input
            name="title"
            defaultValue={editedBanner.title}
            onChange={handleChange}
            placeholder="Title"
            className="p-2 mb-4 border rounded bg-white text-black"
          />
          <label>Description</label>
          <input
            name="description"
            defaultValue={editedBanner.description}
            onChange={handleChange}
            placeholder="Description"
            className="p-2 mb-4 border rounded bg-white text-black "
          />
          <label>CTA</label>
          <input
            name="cta"
            defaultValue={editedBanner.cta}
            onChange={handleChange}
            placeholder="CTA"
            className="p-2 mb-4 border rounded bg-white text-black"
          />

          <label>Inner Image</label>
          <input
            name="image"
            defaultValue={editedBanner.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="p-2 mb-4 border rounded bg-white text-black"
          />
          <button
            onClick={handleSave}
            className=" px-4 py-2 bg-[#0d4423] text-white rounded"
          >
            Done
          </button>
        </div>
        <div className="absolute -top-5 -right-5 ">
          <button
            onClick={()=>{setEditingBanner(null)}}
            className="btn btn-ghost rounded-full  text-black text-xl"
          >
            <RxCross1 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
