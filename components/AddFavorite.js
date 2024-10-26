
"use client";

import React, { useEffect, useState } from 'react';
import Icon from "/components/Icon"; // Assuming Icon is imported correctly
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import axiosInstance from '@/redux/services/axiosInstance';

const AddFavorite = ({ data }) => {
    const id = data._id;
    const [isFavorite, setIsFavorite] = useState(false);

    const user = useSelector((state) => state.auth.user);
    const router = useRouter();

    // Check if the item is a favorite based on either localStorage or Redux
    useEffect(() => {
        const storedUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        const currentUser = storedUser || user;

        if (currentUser?.favoriteList?.includes(id)) {
            setIsFavorite(true);
        }
    }, [user, id]);

    const handleFavorite = async (e) => {
        e.preventDefault();

        if (!user) {
            return router.push('/login');
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

            console.log(response);
        } catch (error) {
            console.error("Error adding to favorites:", error);
        }
    };
// favoriteList
// favoritelist
    const handleUnFavorite = async (e) => {
        e.preventDefault();

        if (!user) {
            return router.push('/login');
        }

        try {
        const response=    await axiosInstance.put(`/unfavoriteslist-list/${id}`);
            setIsFavorite(false);

            // Ensure favoriteList is an array and update localStorage
            const updatedUser = {
                ...user,
                favoriteList: user.favoriteList ? user.favoriteList.filter(favId => favId !== id) : []
            };
            console.log (response)
            localStorage.setItem('user', JSON.stringify(updatedUser));

        } catch (error) {
            console.error("Error removing from favorites:", error);
        }
    };

    return (
        <div className="flex cursor-pointer">
            {isFavorite ? (
                <Icon className="mr-4" color="red" name="share-2" height={24} width={24} onClick={handleUnFavorite} />
            ) : (
                <Icon className="mr-4" name="heart" height={24} width={24} onClick={handleFavorite} />
            )}
        </div>
    );
};

export default AddFavorite;
