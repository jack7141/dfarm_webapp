import React, {useState} from 'react';

const UserStylingShots = () => {
    // Dummy images for demonstration
    const stylingImages = [
        { id: 1, src: `${process.env.PUBLIC_URL}/images/table.png`},
        { id: 2, src: `${process.env.PUBLIC_URL}/images/table.png`},
        { id: 3, src: `${process.env.PUBLIC_URL}/images/table.png`},
        { id: 4, src: `${process.env.PUBLIC_URL}/images/table.png`},
        { id: 5, src: `${process.env.PUBLIC_URL}/images/table.png`},
        { id: 6, src: `${process.env.PUBLIC_URL}/images/table.png`},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;

    // Calculate visible items based on the current index
    const visibleItems = stylingImages.slice(currentIndex, currentIndex + itemsPerPage);

    const handleNext = () => {
        if (currentIndex + itemsPerPage < stylingImages.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    return (
        <div className="mt-12">
            {/* Tab Navigation */}
            <div className="flex space-x-8 border-b-2 pb-2 text-gray-600 text-lg font-medium">
                <button className="text-blue-500 border-b-2 border-blue-500 pb-2">상품정보</button>
                <button>리뷰 18,222</button>
                <button>문의 2,696</button>
                <button>배송/환불</button>
                <button>추천</button>
            </div>

            {/* User Styling Shots Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">
                    유저들의 스타일링샷 <span className="text-blue-500">14,885</span>
                </h2>

                <div className="relative overflow-hidden">
                    {/* Styling Shots Carousel */}
                    <div
                        className="flex transition-transform duration-1000 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                            width: `${stylingImages.length * 25}%`, // Ensures enough width for all items
                        }}
                    >
                        {stylingImages.map((image) => (
                            <div key={image.id} className="w-1/4 p-2">
                                <img
                                    src={image.src}
                                    alt={`Styling shot ${image.id}`}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    {currentIndex > 0 && (
                        <button
                            onClick={handlePrev}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2"
                        >
                            &#8592;
                        </button>
                    )}
                    {currentIndex + itemsPerPage < stylingImages.length && (
                        <button
                            onClick={handleNext}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2"
                        >
                            &#8594;
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserStylingShots;