'use client';
import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "@firebase/firestore";
import { db } from "@/firebase/setup";
import {useAuth} from "@/context/AuthContext";

interface Review {
    id: string;
    email: string;
    name: string;
    surname: string;
    reviewText: string;
    rating: number;
    reply: string | null;
    replyBy: string | null;
}

const Reviews: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [replyInputs, setReplyInputs] = useState<{ [key: string]: string }>({});
    const {user} = useAuth();
    const currentUser = user?.email + " " + user?.role;

    const avgRating = reviews.reduce((acc, current) => acc + current.rating / reviews.length, 0);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const reviewsCollection = collection(db, "reviews");
                const snapshot = await getDocs(reviewsCollection);

                const fetchedReviews = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...(doc.data() as Review),
                }));

                setReviews(fetchedReviews);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        }

        fetchReviews();
    }, []);

    const handleReplyChange = (id: string, value: string) => {
        setReplyInputs((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleReplySubmit = async (id: string) => {
        const reply = replyInputs[id];
        if (!reply) return;

        try {
            const reviewDocRef = doc(db, "reviews", id);

            await updateDoc(reviewDocRef, {
                reply,
                replyBy: currentUser,
            });

            setReviews((prevReviews) =>
                prevReviews.map((review) =>
                    review.id === id ? { ...review, reply, replyBy: currentUser } : review
                )
            );

            setReplyInputs((prev) => ({
                ...prev,
                [id]: "",
            }));
        } catch (error) {
            console.error("Error updating reply:", error);
        }
    };

    return (
        <div className="flex-col rounded-lg pl-4 pt-4 w-full border self-start bg-white border-gray-300 h-[70vh]">
            <div className="border-r-gray-300 h-1/3">
                <h2>Overview</h2>
                <div className="flex text-6xl items-center gap-10 justify-center h-[100%]">
                    <span className="text-green-700">{avgRating}</span>
                    <div className="text-7xl">🥳</div>
                </div>
            </div>
            <div className="h-2/3 pr-4 overflow-y-scroll">
                <h2>Reviews</h2>
                <div>
                    {reviews.length > 0 ? (
                        reviews.map((review) => (
                            <div
                                key={review.id}
                                className="w-full border-t-gray-300 border-t py-4"
                            >
                                <div className="flex justify-between items-end">
                                    <h3 className="text-lg">
                                        {review.name} {review.surname}{" "}
                                        <span className="text-green-800">{review.rating}</span>
                                    </h3>
                                    <p className="text-sm">{review.email}</p>
                                </div>
                                <p className="my-2">{review.reviewText}</p>

                                {review.reply && review.replyBy && (
                                    <div className="bg-gray-100 p-2 rounded my-2">
                                        <p>
                                            <strong>{review.replyBy} replied:</strong> {review.reply}
                                        </p>
                                    </div>
                                )}

                                <div className="flex gap-2 items-center">
                                    <input
                                        type="text"
                                        placeholder="Write a reply..."
                                        value={replyInputs[review.id] || ""}
                                        onChange={(e) => handleReplyChange(review.id, e.target.value)}
                                        className="border rounded px-2 py-1 w-3/4"
                                    />
                                    <button
                                        onClick={() => handleReplySubmit(review.id)}
                                        className="text-xl font-medium border-black border px-4 rounded hover:bg-black hover:text-white"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
