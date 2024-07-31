import BannerImageComp from '@/Components/BannerImageComp';
import EditBannerTemplateBs from '@/Components/EditBannerTemplateBs';
import { useEffect, useState } from 'react';
import bannersData from '../../public/Banners.json';

const Home = () => {
  const [banners, setBanners] = useState(bannersData);
  // useEffect(() => {
  //   const Banners = async () => {
  //     await fetch("/Banners.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setBanners(data);
  //       });
  //   };
  //   Banners();
  // }, []);
  const [editingBanner, setEditingBanner] = useState<any | null>(null);

  const handleEdit = (banner: any) => {
    setEditingBanner(banner);
  };

  const handleSave = (updatedBanner: any) => {
    setBanners(banners.map(b => b.id === updatedBanner.id ? updatedBanner : b));
    setEditingBanner(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Banner Pro</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-5">
        {banners.map((banner, index) => (
          <BannerImageComp key={index} banner={banner} onEdit={() => handleEdit(banner)} />
        ))}
      </div>
      {editingBanner && <EditBannerTemplateBs banner={editingBanner} onSave={handleSave} />}
    </div>
  );
};

export default Home;

