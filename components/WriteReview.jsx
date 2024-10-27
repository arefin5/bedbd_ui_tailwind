
"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import axiosInstance from '@/redux/services/axiosInstance';

const WriteReview = ({ data }) => {
    const id = data._id;
    const postID = data.Postedby._id;
    
    // Individual rating states
    const [reviewText, setReviewText] = useState("");
    const [amenitiesRating, setAmenitiesRating] = useState(5.0);
    const [communicationRating, setCommunicationRating] = useState(5.0);
    const [loremIpsumRating, setLoremIpsumRating] = useState(5.0);
    const [hygieneRating, setHygieneRating] = useState(5.0);
    const [locationRating, setLocationRating] = useState(5.0);
    const [disableRating, setDisableRating] = useState(false); // Define disableRating state

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const user = useSelector((state) => state.auth.user);
    const router = useRouter();

    useEffect(() => {
        if (user?._id === postID) {
            setDisableRating(true); // Disable review button if user is the post author
        }
    }, [user, postID]);

    const handleSubmit = async () => {
        if (!reviewText.trim()) {
            setError("Review text cannot be empty.");
            return;
        }

        setLoading(true);
        setError(null);
      
        try {
            const reviewData = {
                categories: {
                    amenities: amenitiesRating,
                    communication: communicationRating,
                    loremIpsum: loremIpsumRating,
                    hygiene: hygieneRating,
                    locationOfProperty: locationRating
                },
                reviewText
            };
            await axiosInstance.post(`/create-review/${id}`, {
                postId: id,
                reviewData
        });
            setReviewText(""); // Clear textarea after submission
            // router.refresh(); // Refresh the page or redirect as needed
        } catch (err) {
            setError("Failed to submit review. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <textarea
                className="w-full max-w-2xl border border-neutral-600 block rounded-lg mb-6"
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                disabled={disableRating}
            />
            <div className="my-4">
                <label>Amenities: </label>
                <input
                    type="number"
                    max="5"
                    min="0"
                    step="0.1"
                    value={amenitiesRating}
                    onChange={(e) => setAmenitiesRating(parseFloat(e.target.value))}
                />
            </div>
            <div className="my-4">
                <label>Communication: </label>
                <input
                    type="number"
                    max="5"
                    min="0"
                    step="0.1"
                    value={communicationRating}
                    onChange={(e) => setCommunicationRating(parseFloat(e.target.value))}
                />
            </div>
            <div className="my-4">
                <label>Lorem Ipsum: </label>
                <input
                    type="number"
                    max="5"
                    min="0"
                    step="0.1"
                    value={loremIpsumRating}
                    onChange={(e) => setLoremIpsumRating(parseFloat(e.target.value))}
                />
            </div>
            <div className="my-4">
                <label>Hygiene: </label>
                <input
                    type="number"
                    max="5"
                    min="0"
                    step="0.1"
                    value={hygieneRating}
                    onChange={(e) => setHygieneRating(parseFloat(e.target.value))}
                />
            </div>
            <div className="my-4">
                <label>Location of Property: </label>
                <input
                    type="number"
                    max="5"
                    min="0"
                    step="0.1"
                    value={locationRating}
                    onChange={(e) => setLocationRating(parseFloat(e.target.value))}
                />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
                className="w-full max-w-64 py-3 rounded-md bg-transparent border border-neutral-400 text-neutral-400 text-lg font-normal"
                onClick={handleSubmit}
                disabled={loading}
            >
                {loading ? "Saving..." : "Save Review"}
            </button>
        </>
    );
};

export default WriteReview;
