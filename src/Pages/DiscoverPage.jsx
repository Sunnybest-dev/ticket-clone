// import Header from "../Components/Header";

import Header from "../Components/Header";
import Searchbar from "../Components/Searchbar"; // Note: your file is named Searchbar.jsx, not SearchSection.jsx
import FeaturedEvent from "../Components/FeaturedEvent";
import PopularNearYou from "../Components/PopularNearYou";

const DiscoverPage = ({ categories }) => (
    <div className="w-full flex-grow bg-black">
        <div className="p-4 space-y-4">
            <Header />
            <SearchSection />
            <CategoryButtons categories={categories} />
        </div>
        
        <div className="pt-4 space-y-4">
            <FeaturedEvent />
        </div>

        <div className="px-4 mt-6 pb-4">
            <PopularNearYou />
        </div>
    </div>
);

export default DiscoverPage;
