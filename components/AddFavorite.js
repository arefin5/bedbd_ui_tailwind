
// "use client";

// import React, { useEffect, useState } from 'react';
// // import Icon from "/components/Icon"; // Assuming Icon is imported correctly
// import { Heart } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { useSelector } from 'react-redux';
// import axiosInstance from '@/redux/services/axiosInstance';

// const AddFavorite = ({ data }) => {
//     const id = data._id;
//     const [isFavorite, setIsFavorite] = useState(false);
//     const [loading, setLoading] = useState(false)
//     const user = useSelector((state) => state.auth.user);
//     const router = useRouter();

//     // Check if the item is a favorite based on either localStorage or Redux
//     useEffect(() => {
//         const storedUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
//         const currentUser = storedUser || user;
//         // setLoading(false);
//         if (currentUser?.favoriteList?.includes(id)) {
//             setIsFavorite(true);
//         }
//     }, [user, id]);

//     const handleFavorite = async (e) => {
//         e.preventDefault();
//         setLoading(true)
//         console.log("favoriite ...")
//         if (!user) {
//             return router.push('/login/email');
//         }

//         try {

//             if (!user) {
//                 return router.push('/login/email');
//             }
//             const response = await axiosInstance.put(`/favoriteslist-list/${id}`);
//             setIsFavorite(true);

//             // Ensure favoriteList is an array and update localStorage
//             const updatedUser = {
//                 ...user,
//                 favoriteList: user.favoriteList ? [...user.favoriteList, id] : [id]
//             };
//             localStorage.setItem('user', JSON.stringify(updatedUser));
//             setLoading(false);
//             console.log(response);
//         } catch (error) {
//             console.error("Error adding to favorites:", error);
//             setLoading(false)
//         }
//     };
//     // favoriteList
//     // favoritelist
//     const handleUnFavorite = async (e) => {
//         e.preventDefault();
//         setLoading(true)
//         if (!user) {
//             return router.push('/login');
//         }

//         try {
//             const response = await axiosInstance.put(`/unfavoriteslist-list/${id}`);
//             setIsFavorite(false);

//             // Ensure favoriteList is an array and update localStorage
//             const updatedUser = {
//                 ...user,
//                 favoriteList: user.favoriteList ? user.favoriteList.filter(favId => favId !== id) : []
//             };
//             // console.log (response)
//             localStorage.setItem('user', JSON.stringify(updatedUser));
//             setLoading(false);

//         } catch (error) {
//             console.error("Error removing from favorites:", error);
//         }
//     };

//     return (
//         <div className="flex cursor-pointer">

//             {loading ? (
//                 <p>Loading...</p>
//             ) : isFavorite
//                 ? <button onClick={handleUnFavorite} className="z-20 rounded bg-gray-900 group p-1 absolute top-3 right-3 bg-opacity-30 hover:bg-opacity-50">
//                     <Heart color="red" height={24} width={24} />
//                 </button>

//                 : <button onClick={handleFavorite} className="z-20 rounded bg-gray-900 group p-1 absolute top-3 right-3 bg-opacity-30 hover:bg-opacity-50">
//                     <Heart color="#ffffff" height={24} width={24} />
//                 </button>



//             }
//         </div>
//     );
// };

// export default AddFavorite;
"use client";

import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import axiosInstance from '@/redux/services/axiosInstance';

const AddFavorite = ({ data }) => {
    const id = data._id;
    const [isFavorite, setIsFavorite] = useState(false);
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState(false); // State variable to trigger re-render
    const user = useSelector((state) => state.auth.user);
    const router = useRouter();

    // Check if the item is a favorite based on either localStorage or Redux
    useEffect(() => {
        const storedUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        const currentUser = storedUser || user;
        if (currentUser?.favoriteList?.includes(id)) {
            setIsFavorite(true);
        } else {
            setIsFavorite(false);
        }
    }, [user, id, reload]); // Add reload to the dependency array

    const handleFavorite = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!user) {
            return router.push('/login/email');
        }

        try {
            const response = await axiosInstance.put(`/favoriteslist-list/${id}`);
            setIsFavorite(true);

            // Ensure favoriteList is an array and update localStorage
            const updatedUser = {
                ...user,
                favoriteList: user.favoriteList ? [...user.favoriteList, id] : [id]
            };
            localStorage.setItem('user', JSON.stringify(updatedUser));
            setLoading(false);
            // router.reload();
            setReload(!reload); // Trigger re-render
            // console.log(response);
        } catch (error) {
            console.error("Error adding to favorites:", error);
            setLoading(false);
        }
    };

    const handleUnFavorite = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!user) {
            return router.push('/login');
        }

        try {
            const response = await axiosInstance.put(`/unfavoriteslist-list/${id}`);
            setIsFavorite(false);

            // Ensure favoriteList is an array and update localStorage
            const updatedUser = {
                ...user,
                favoriteList: user.favoriteList ? user.favoriteList.filter(favId => favId !== id) : []
            };
            // router.reload();
            localStorage.setItem('user', JSON.stringify(updatedUser));

            setLoading(false);
            setReload(!reload); // Trigger re-render
        } catch (error) {
            console.error("Error removing from favorites:", error);
            setLoading(false);
        }
    };

    return (
        <div className="flex cursor-pointer">
            {loading ? (
                <p>Loading...</p>
            ) : isFavorite ? (
                <button onClick={handleUnFavorite} className="z-20 rounded bg-gray-900 group p-1 absolute top-3 right-3 bg-opacity-30 hover:bg-opacity-50">
                    <Heart color="red" height={24} width={24} />
                </button>
            ) : (
                <button onClick={handleFavorite} className="z-20 rounded bg-gray-900 group p-1 absolute top-3 right-3 bg-opacity-30 hover:bg-opacity-50">
                    <Heart color="#ffffff" height={24} width={24} />
                </button>
            )}
        </div>
    );
};

export default AddFavorite;