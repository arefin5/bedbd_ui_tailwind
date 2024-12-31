
// // "use client";

// // import React, { useEffect, useState } from 'react';
// // import Icon from "/components/Icon"; // Assuming Icon is imported correctly
// // import { useRouter } from 'next/navigation';
// // import { useSelector } from 'react-redux';
// // import axiosInstance from '@/redux/services/axiosInstance';

// // const Favorite = ({ data }) => {
// //     const id = data._id;
// //     const [isFavorite, setIsFavorite] = useState(false);
// //     const [loading,setLoading]=useState(false)
// //     const user = useSelector((state) => state.auth.user);
// //     const router = useRouter();

// //     // Check if the item is a favorite based on either localStorage or Redux
// //     useEffect(() => {
// //         const storedUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
// //         const currentUser = storedUser || user;
// //         // setLoading(false);
// //         if (currentUser?.favoriteList?.includes(id)) {
// //             setIsFavorite(true);
// //         }
// //     }, [user, id]);

// //     const handleFavorite = async (e) => {
// //         e.preventDefault();
// //         setLoading(true)
// //         //   console.log("favoriite ...")
// //         if (!user) {
// //             return router.push('/login/email');
// //         }

// //         try {
            
// //         if (!user) {
// //             return router.push('/login/email');
// //         }
// //             const response = await axiosInstance.put(`/favoriteslist-list/${id}`);
// //             setIsFavorite(true);
      
// //             // Ensure favoriteList is an array and update localStorage
// //             const updatedUser = { 
// //                 ...user, 
// //                 favoriteList: user.favoriteList ? [...user.favoriteList, id] : [id] 
// //             };
// //             localStorage.setItem('user', JSON.stringify(updatedUser));
// //                setLoading(false);
// //             console.log(response);
// //         } catch (error) {
// //             console.error("Error adding to favorites:", error);
// //             setLoading(false)
// //         }
// //     };
// // // favoriteList
// // // favoritelist
// //     const handleUnFavorite = async (e) => {
// //         e.preventDefault();
// //         setLoading(true)
// //         if (!user) {
// //             return router.push('/login');
// //         }

// //         try {
// //         const response=    await axiosInstance.put(`/unfavoriteslist-list/${id}`);
// //             setIsFavorite(false);

// //             // Ensure favoriteList is an array and update localStorage
// //             const updatedUser = {
// //                 ...user,
// //                 favoriteList: user.favoriteList ? user.favoriteList.filter(favId => favId !== id) : []
// //             };
// //             // console.log (response)
// //             localStorage.setItem('user', JSON.stringify(updatedUser));
// //             setLoading(false)
// //         } catch (error) {
// //             console.error("Error removing from favorites:", error);
// //         }
// //     };

// //     return (
// //         <div className="flex cursor-pointer">
       
// //             {loading ? (
// //     <p>Loading...</p>
// // ) : (
// //     isFavorite ? (
// //         <Icon  className="mr-4" color="red" name="heart" height={24} width={24} onClick={handleUnFavorite} />
// //     ) : (
// //         <Icon   className="mr-4" name="heart" height={24} width={24} onClick={handleFavorite} />
// //     )
// // )}
// //         </div>
// //     );
// // };

// // export default Favorite;

// // "use client";

// // import React, { useEffect, useState } from 'react';
// // // import Icon from "/components/Icon"; // Assuming Icon is imported correctly
// // import { Heart } from 'lucide-react';
// // import { useRouter } from 'next/navigation';
// // import { useSelector } from 'react-redux';
// // import axiosInstance from '@/redux/services/axiosInstance';

// // const AddFavorite = ({ data }) => {
// //     const id = data._id;
// //     const [isFavorite, setIsFavorite] = useState(false);
// //     const [loading, setLoading] = useState(false)
// //     const user = useSelector((state) => state.auth.user);
// //     const router = useRouter();

// //     // Check if the item is a favorite based on either localStorage or Redux
// //     useEffect(() => {
// //         const storedUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
// //         const currentUser = storedUser || user;
// //         // setLoading(false);
// //         if (currentUser?.favoriteList?.includes(id)) {
// //             setIsFavorite(true);
// //         }
// //     }, [user, id]);

// //     const handleFavorite = async (e) => {
// //         e.preventDefault();
// //         setLoading(true)
// //         console.log("favoriite ...")
// //         if (!user) {
// //             return router.push('/login/email');
// //         }

// //         try {

// //             if (!user) {
// //                 return router.push('/login/email');
// //             }
// //             const response = await axiosInstance.put(`/favoriteslist-list/${id}`);
// //             setIsFavorite(true);

// //             // Ensure favoriteList is an array and update localStorage
// //             const updatedUser = {
// //                 ...user,
// //                 favoriteList: user.favoriteList ? [...user.favoriteList, id] : [id]
// //             };
// //             localStorage.setItem('user', JSON.stringify(updatedUser));
// //             setLoading(false);
// //             console.log(response);
// //         } catch (error) {
// //             console.error("Error adding to favorites:", error);
// //             setLoading(false)
// //         }
// //     };
// //     // favoriteList
// //     // favoritelist
// //     const handleUnFavorite = async (e) => {
// //         e.preventDefault();
// //         setLoading(true)
// //         if (!user) {
// //             return router.push('/login');
// //         }

// //         try {
// //             const response = await axiosInstance.put(`/unfavoriteslist-list/${id}`);
// //             setIsFavorite(false);

// //             // Ensure favoriteList is an array and update localStorage
// //             const updatedUser = {
// //                 ...user,
// //                 favoriteList: user.favoriteList ? user.favoriteList.filter(favId => favId !== id) : []
// //             };
// //             // console.log (response)
// //             localStorage.setItem('user', JSON.stringify(updatedUser));
// //             setLoading(false);

// //         } catch (error) {
// //             console.error("Error removing from favorites:", error);
// //         }
// //     };

// //     return (
// //         <div className="flex cursor-pointer">

//             // {loading ? (
//             //     <p>Loading...</p>
//             // ) : isFavorite
//             //     ? <button onClick={handleUnFavorite} className="z-20 rounded bg-gray-900 group p-1 absolute top-3 right-3 bg-opacity-30 hover:bg-opacity-50">
//             //         <Heart color="red" height={24} width={24} />
//             //     </button>

//             //     : <button onClick={handleFavorite} className="z-20 rounded bg-gray-900 group p-1 absolute top-3 right-3 bg-opacity-30 hover:bg-opacity-50">
//             //         <Heart color="#ffffff" height={24} width={24} />
//             //     </button>



//             // }
// //         </div>
// //     );
// // };

// // export default AddFavorite;
// "use client";

// import React, { useEffect, useState } from 'react';
// import { Heart } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { useSelector } from 'react-redux';
// import axiosInstance from '@/redux/services/axiosInstance';

// const AdFavborite = ({ data }) => {
//     const id = data._id;
//     const [isFavorite, setIsFavorite] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [reload, setReload] = useState(false); // State variable to trigger re-render
//     const user = useSelector((state) => state.auth.user);
//     const router = useRouter();

//     // Check if the item is a favorite based on either localStorage or Redux
//     useEffect(() => {
//         const storedUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
//         const currentUser = storedUser || user;
//         if (currentUser?.favoriteList?.includes(id)) {
//             setIsFavorite(true);
//         } else {
//             setIsFavorite(false);
//         }
//     }, [user, id, reload]); // Add reload to the dependency array

//     const handleFavorite = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         if (!user) {
//             return router.push('/login/email');
//         }

//         try {
//             const response = await axiosInstance.put(`/favoriteslist-list/${id}`);
//             setIsFavorite(true);

//             // Ensure favoriteList is an array and update localStorage
//             const updatedUser = {
//                 ...user,
//                 favoritelist: user.favoritelist ? [...user.favoritelist, id] : [id]
//             };
//             window.location.reload();
//             localStorage.setItem('user', JSON.stringify(updatedUser));
//             setLoading(false);
//             // router.reload();
//             setReload(!reload); // Trigger re-render
//             console.log(response);
//         } catch (error) {
//             console.error("Error adding to favorites:", error);
//             setLoading(false);
//         }
//     };

//     const handleUnFavorite = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         if (!user) {
//             return router.push('/login');
//         }

//         try {
//             const response = await axiosInstance.put(`/unfavoriteslist-list/${id}`);
//             setIsFavorite(false);

//             // Ensure favoriteList is an array and update localStorage
//             const updatedUser = {
//                 ...user,
//                 favoritelist: user.favoritelist ? user.favoritelist.filter(favId => favId !== id) : []
//             };
//             // router.reload();
//             window.location.reload()
//             localStorage.setItem('user', JSON.stringify(updatedUser));

//             setLoading(false);
//             setReload(!reload); // Trigger re-render
//         } catch (error) {
//             console.error("Error removing from favorites:", error);
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="flex cursor-pointer">
//             {/* {loading ? (
//                 <p>Loading...</p>
//             ) : isFavorite ? (
//                 <button onClick={handleUnFavorite} className="z-20 rounded bg-gray-900 group p-1 absolute top-3 right-3 bg-opacity-30 hover:bg-opacity-50">
//                     <Heart color="red" height={24} width={24} />
//                 </button>
//             ) : (
//                 <button onClick={handleFavorite} className="z-20 rounded bg-gray-900 group p-1 absolute top-3 right-3 bg-opacity-30 hover:bg-opacity-50">
//                     <Heart color="#ffffff" height={24} width={24} />
//                 </button>
//             )} */}
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

// export default AdFavborite;

// // // "use client";

// // // import React, { useEffect, useState } from 'react';
// // // // import Icon from "/components/Icon"; // Assuming Icon is imported correctly
// // // import { Heart } from 'lucide-react';
// // // import { useRouter } from 'next/navigation';
// // // import { useSelector } from 'react-redux';
// // // import axiosInstance from '@/redux/services/axiosInstance';

// // // const AddFavorite = ({ data }) => {
// // //     const id = data._id;
// // //     const [isFavorite, setIsFavorite] = useState(false);
// // //     const [loading, setLoading] = useState(false)
// // //     const user = useSelector((state) => state.auth.user);
// // //     const router = useRouter();

// // //     // Check if the item is a favorite based on either localStorage or Redux
// // //     useEffect(() => {
// // //         const storedUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
// // //         const currentUser = storedUser || user;
// // //         // setLoading(false);
// // //         if (currentUser?.favoriteList?.includes(id)) {
// // //             setIsFavorite(true);
// // //         }
// // //     }, [user, id]);

// // //     const handleFavorite = async (e) => {
// // //         e.preventDefault();
// // //         setLoading(true)
// // //         console.log("favoriite ...")
// // //         if (!user) {
// // //             return router.push('/login/email');
// // //         }

// // //         try {

// // //             if (!user) {
// // //                 return router.push('/login/email');
// // //             }
// // //             const response = await axiosInstance.put(`/favoriteslist-list/${id}`);
// // //             setIsFavorite(true);

// // //             // Ensure favoriteList is an array and update localStorage
// // //             const updatedUser = {
// // //                 ...user,
// // //                 favoriteList: user.favoriteList ? [...user.favoriteList, id] : [id]
// // //             };
// // //             localStorage.setItem('user', JSON.stringify(updatedUser));
// // //             setLoading(false);
// // //             console.log(response);
// // //         } catch (error) {
// // //             console.error("Error adding to favorites:", error);
// // //             setLoading(false)
// // //         }
// // //     };
// // //     // favoriteList
// // //     // favoritelist
// // //     const handleUnFavorite = async (e) => {
// // //         e.preventDefault();
// // //         setLoading(true)
// // //         if (!user) {
// // //             return router.push('/login');
// // //         }

// // //         try {
// // //             const response = await axiosInstance.put(`/unfavoriteslist-list/${id}`);
// // //             setIsFavorite(false);

// // //             // Ensure favoriteList is an array and update localStorage
// // //             const updatedUser = {
// // //                 ...user,
// // //                 favoriteList: user.favoriteList ? user.favoriteList.filter(favId => favId !== id) : []
// // //             };
// // //             // console.log (response)
// // //             localStorage.setItem('user', JSON.stringify(updatedUser));
// // //             setLoading(false);

// // //         } catch (error) {
// // //             console.error("Error removing from favorites:", error);
// // //         }
// // //     };

// // //     return (
// // //         <div className="flex cursor-pointer">

// // //             {loading ? (
// // //                 <p>Loading...</p>
// // //             ) : isFavorite
// // //                 ? <button onClick={handleUnFavorite} className="z-20 rounded bg-gray-900 group p-1 absolute top-3 right-3 bg-opacity-30 hover:bg-opacity-50">
// // //                     <Heart color="red" height={24} width={24} />
// // //                 </button>

// // //                 : <button onClick={handleFavorite} className="z-20 rounded bg-gray-900 group p-1 absolute top-3 right-3 bg-opacity-30 hover:bg-opacity-50">
// // //                     <Heart color="#ffffff" height={24} width={24} />
// // //                 </button>



// // //             }
// // //         </div>
// // //     );
// // // };

// // // export default AddFavorite;
// // "use client";

// // import React, { useEffect, useState } from 'react';
// // import { Heart } from 'lucide-react';
// // import { useRouter } from 'next/navigation';
// // import { useSelector } from 'react-redux';
// // import axiosInstance from '@/redux/services/axiosInstance';

// // const AddFavorite = ({ data }) => {
// //     const id = data._id;
// //     const [isFavorite, setIsFavorite] = useState(false);
// //     const [loading, setLoading] = useState(false);
// //     const [reload, setReload] = useState(false); // State variable to trigger re-render
// //     const user = useSelector((state) => state.auth.user);
// //     const router = useRouter();

// //     // Check if the item is a favorite based on either localStorage or Redux
// //     useEffect(() => {
// //         const storedUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
// //         const currentUser = storedUser || user;
// //         if (currentUser?.favoritelist?.includes(id)) {
// //             setIsFavorite(true);
// //         } else {
// //             setIsFavorite(false);
// //         }
// //     }, [user, id, reload]); // Add reload to the dependency array

// //     const handleFavorite = async (e) => {
// //         e.preventDefault();
// //         setLoading(true);
// //         if (!user) {
// //             return router.push('/login/email');
// //         }

// //         try {
// //             const response = await axiosInstance.put(`/favoriteslist-list/${id}`);
// //             setIsFavorite(true);

// //             // Ensure favoriteList is an array and update localStorage
// //             const updatedUser = {
// //                 ...user,
// //                 favoritelist: user.favoritlist ? [...user.favoritelist, id] : [id]
// //             };
// //             window.location.reload();
// //             localStorage.setItem('user', JSON.stringify(updatedUser));
// //             setLoading(false);
// //             // router.reload();
// //             setReload(!reload); // Trigger re-render
// //             // console.log(response);
// //         } catch (error) {
// //             console.error("Error adding to favorites:", error);
// //             setLoading(false);
// //         }
// //     };

// //     const handleUnFavorite = async (e) => {
// //         e.preventDefault();
// //         setLoading(true);
// //         if (!user) {
// //             return router.push('/login');
// //         }

// //         try {
// //             const response = await axiosInstance.put(`/unfavoriteslist-list/${id}`);
// //             setIsFavorite(false);

// //             // Ensure favoriteList is an array and update localStorage
// //             const updatedUser = {
// //                 ...user,
// //                 favoritelist: user.favoritelist ? user.favoritelist.filter(favId => favId !== id) : []
// //             };
// //             // router.reload();
// //             localStorage.setItem('user', JSON.stringify(updatedUser));
// //             window.location.reload()
// //             setLoading(false);
// //             setReload(!reload); // Trigger re-render
// //         } catch (error) {
// //             console.error("Error removing from favorites:", error);
// //             setLoading(false);
// //         }
// //     };

// //     return (
// //         <div className="flex cursor-pointer">
// //             {loading ? (
// //                 <p>Loading...</p>
// //             ) : isFavorite ? (
// //                 <button onClick={handleUnFavorite} className="z-20 rounded bg-gray-900 group p-1 absolute top-3 right-3 bg-opacity-30 hover:bg-opacity-50">
// //                     <Heart color="red" height={24} width={24} />
// //                 </button>
// //             ) : (
// //                 <button onClick={handleFavorite} className="z-20 rounded bg-gray-900 group p-1 absolute top-3 right-3 bg-opacity-30 hover:bg-opacity-50">
// //                     <Heart color="#ffffff" height={24} width={24} />
// //                 </button>
// //             )}
// //         </div>
// //     );
// // };

// // export default AddFavorite;


// "use client";

// import React, { useEffect, useState } from 'react';
// import { Heart } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { useSelector, useDispatch } from 'react-redux';
// import axiosInstance from '@/redux/services/axiosInstance';
// import { updateUser } from '@/redux/features/auth/authSlice';

// const AddFavorite = ({ data }) => {
//     const id = data._id;
//     const [isFavorite, setIsFavorite] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const user = useSelector((state) => state.auth.user);
//     const router = useRouter();
//     const dispatch = useDispatch();

//     // Check if the item is a favorite based on either localStorage or Redux
//     useEffect(() => {
//         const storedUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
//         const currentUser = storedUser || user;
//         if (currentUser?.favoriteList?.includes(id)) {
//             setIsFavorite(true);
//         } else {
//             setIsFavorite(false);
//         }
//     }, [user, id]);

//     const handleFavorite = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         if (!user) {
//             return router.push('/login/email');
//         }

//         try {
//             const response = await axiosInstance.put(`/favoriteslist-list/${id}`);
//             setIsFavorite(true);

//             // Ensure favoriteList is an array and update Redux
//             const updatedUser = {
//                 ...user,
//                 favoriteList: user.favoriteList ? [...user.favoriteList, id] : [id]
//             };
//             dispatch(updateUser(updatedUser));
//             setLoading(false);
//         } catch (error) {
//             console.error("Error adding to favorites:", error);
//             setLoading(false);
//         }
//     };

//     const handleUnFavorite = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         if (!user) {
//             return router.push('/login');
//         }

//         try {
//             const response = await axiosInstance.put(`/unfavoriteslist-list/${id}`);
//             setIsFavorite(false);

//             // Ensure favoriteList is an array and update Redux
//             const updatedUser = {
//                 ...user,
//                 favoritelist: user.favoriteList ? user.favoritelist.filter(favId => favId !== id) : []
//             };
//             dispatch(updateUser(updatedUser));
//             setLoading(false);
//         } catch (error) {
//             console.error("Error removing from favorites:", error);
//             setLoading(false);
//         }
//     };

//     return (
        // <div className="flex cursor-pointer">
        //     {loading ? (
        //         <p>Loading...</p>
        //     ) : isFavorite ? (
        //         <button onClick={handleUnFavorite} className="z-20 rounded bg-gray-900 group p-1 absolute top-3 right-3 bg-opacity-30 hover:bg-opacity-50">
        //             <Heart color="red" height={24} width={24} />
        //         </button>
        //     ) : (
        //         <button onClick={handleFavorite} className="z-20 rounded bg-gray-900 group p-1 absolute top-3 right-3 bg-opacity-30 hover:bg-opacity-50">
        //             <Heart color="#ffffff" height={24} width={24} />
        //         </button>
        //     )}
        // </div>
//     );
// };

// export default AddFavorite;
"use client";

import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '@/redux/features/auth/authSlice';
import Icon from "/components/Icon";
const AdFavorite = ({ data }) => {
    const id = data._id;
    const [isFavorite, setIsFavorite] = useState(false);
    const [loading, setLoading] = useState(false);
    const user = useSelector((state) => state.auth.user);
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        const storedUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        const currentUser = storedUser || user;
        if (currentUser?.favoritelist?.includes(id)) {
            setIsFavorite(true);
        } else {
            setIsFavorite(false);
        }
    }, [user, id]);

    const handleFavorite = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!user) {
            return router.push('/login/email');
        }

        try {
            await dispatch(addFavorite(id)).unwrap();
            setIsFavorite(true);
            setLoading(false);
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
            await dispatch(removeFavorite(id)).unwrap();
            setIsFavorite(false);
            setLoading(false);
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
                 <button className="mr-4"  onClick={handleUnFavorite}>
                     <Heart className="mr-4" color="red" height={24} width={24} />
                 </button>
             ) : (
                 <button onClick={handleFavorite}>
                     <Icon  className="mr-4" name="heart" height={24} width={24} />
                     <Heart  className="mr-4" color="#grey" height={24} width={24} />
                 </button>
             )}
         </div>
       
    );
};

export default AdFavorite;