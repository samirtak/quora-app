import React, { useState } from 'react';
import Avatar from "react-avatar";
import close from '../assets/close.png'; // Ensure this is the correct path
import share from '../assets/share.png';
import comment from '../assets/comment.png';

const PostSection = () => {
  const [posts, setPosts] = useState([
    //  posts data 
    {
      id: 1,
      name: 'Rajat Sharma',
      profileImage: 'https://th.bing.com/th/id/OIP.Fjs0m7qWk6QYLg7jIcq8aQHaHd?w=187&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7', // You can provide profile image here
      title: 'Movie Night Review',
      content: 'Just watched the latest movie and it was amazing!',
      upvotes: 9200,
      downvotes: 251,
      comments: 930,
      shares: 994,
      Qualifications: 'Engineer,Movie Addict',
      timeAgo: '5d',
      image: "https://th.bing.com/th/id/OIP.Nbyi1akfRsPPmIkr0sJJjwHaEK?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" // Dynamic image URL for each post
    },
    
  {
    id: 2,
    name: 'Teemyco',
    profileImage: 'https://www.eu-startups.com/wp-content/uploads/2021/06/1611785470095.jpeg', // You can provide profile image here
    title: 'Effortless Interactions in Remote Work.',
    content: 'Bridge remote distances with quick, on-the-fly virtual team interactions.',
    upvotes: 15200,
    downvotes:5200 ,
    comments: 4561,
    shares: 8971,
    Qualifications: 'Sponsored',
    timeAgo: '1w',
    image: 'https://th.bing.com/th/id/OIP.tl04bMkLVrRr6WRDJinftAHaEi?rs=1&pid=ImgDetMain' // Dynamic image URL for each post
  },
   {
    id:3 ,
    name: 'Pankaj Kumar',
    profileImage: 'https://th.bing.com/th/id/OIP.qT7oNDhI2MPRmyWD2eV7FgHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7', // You can provide profile image here
    title: "How is Chandigarh University's CSE better than other private universities in India?",
    content: "This is really an interesting question. I will tell you this after introducing myself first. Last year, I was searching for Computer Science Engineering. And my research came to an end at Chandigarh University. There are not one but numerous reasons for pursuing Computer Science Engineering at Chandigarh University. I have been studying in CU since last year and my experience has been going really well.",
    upvotes: 9448,
    downvotes: 254,
    comments: 452,
    shares: 2433,
    Qualifications: 'Ph.D. in Management & Marketing',
    timeAgo: 'jan 24',
    image: 'data:image/jpeg;base64,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' // Dynamic image URL for each post
  },

  {
    id: 4,
    name: 'Danish',
    profileImage: 'https://th.bing.com/th/id/OIP.4gUDMJl_uCDmj6ELpBK_zgHaJQ?w=154&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7', // You can provide profile image here
    title: 'How can you imorove yourself reqularly?',
    content: `1. Fix your schedule and sleep at 9:00 PM to be awake at 4:00 AM.

2. Quit your excuses and work out for 30 minutes daily.

3. Include 2 eggs plus fresh fruits to optimize your health.

4. Prioritize 2 cold showers a day with no excuses. I promise your self-discipline will be boosted.

5. Listen more than you talk and be teachable.`,
    upvotes:45142 ,
    downvotes:2561 ,
    comments: 4541,
    shares: 1213,
    Qualifications:   `Influencer`,
    timeAgo: 'mar 19',
    image: 'https://th.bing.com/th/id/OIP.kajKw0JhuXYC6p8-0RIu2wHaHa?w=155&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' // Dynamic image URL for each post
  },
 
  ]);

  const handleUpvote = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        // If the post is already downvoted, reverse downvote and upvote it
        if (post.dvoted) {
          post.dvoted = false;
          post.downvotes -= 1;
        }
        // Toggle upvote
        post.upvotes = post.upvoted ? post.upvotes - 1 : post.upvotes + 1;
        post.upvoted = !post.upvoted;
      }
      return post;
    });
    setPosts(updatedPosts);
  };
  
  const handleDownvote = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        // If the post is already upvoted, reverse upvote and downvote it
        if (post.upvoted) {
          post.upvoted = false;
          post.upvotes -= 1;
        }
        // Toggle downvote
        post.downvotes = post.dvoted ? post.downvotes - 1 : post.downvotes + 1;
        post.dvoted = !post.dvoted;
      }
      return post;
    });
    setPosts(updatedPosts);
  };
  

  const toggleContent = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        post.expanded = !post.expanded;
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="bg-gray-100 m-3 h-fit border-spacing-1 rounded-lg relative text-gray-600 text-sm z-0">
      {posts.map(post => (
        <div key={post.id} className="card bg-white p-4 mb-3 border rounded-lg shadow-lg relative">
          {/* Header */}
          <div className="flex w-fit">
            <Avatar round size="25" className="mt-0.5 ml-2 cursor-pointer" src={post.profileImage} name={post.name} />
            <h1 className="ml-3 mt-0.5 font-semibold">{post.name}</h1>
            <button className="font-semibold ml-2 cursor-pointer relative left-2 text-blue-500 h-6 w-6 hover:underline rounded-full flex items-center justify-center">·Follow</button>

            {/* Close Button */}
            <button className="absolute top-2 right-2 h-6 w-6 hover:bg-gray-200 rounded-full flex items-center justify-center">
              <img src={close} alt="Close" className="h-5 w-5" />
            </button>
          </div>
          <div className="relative -top-2 left-11 text-xs font-semibold text-gray-500">
            <span>{post.Qualifications}</span> · <span>{post.timeAgo}</span>
          </div>

          {/* Title */}
          <h1 className="text-xl font-semibold mt-3">{post.title}</h1>

          {/* Content */}
          <div className="mt-2">
  {post.content.length > 150 ? (
    <>
      {post.expanded ? post.content : `${post.content.slice(0, 150)}...`}
      <button
        onClick={() => toggleContent(post.id)}
        className="ml-2 text-blue-500 hover:underline"
      >
        {post.expanded ? "Show Less" : "Show More"}
      </button>
    </>
  ) : (
    post.content
  )}
</div>


          {/* Image */}
          <img src={post.image} alt={post.title} className="mt-3 w-full h-auto rounded-md" />

          {/* Interaction Section */}
          <div className="flex items-center text-gray-600 text-sm mt-2 relative">
            {/* Upvote Button */}
            <div className="flex items-center space-x-1 border rounded-full rounded-r-none px-3 py-1 mr-0 hover:bg-gray-100 cursor-pointer">
              <button onClick={() => handleUpvote(post.id)} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`text-lg ${post.upvoted ? "text-blue-500" : "text-gray-500"}`}
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1z" />
                </svg>
                <span className={`ml-1 font-semibold ${post.upvoted ? "text-blue-500" : "text-gray-500"}`}>
                  Upvote·{post.upvotes.toLocaleString()}
                </span>
              </button>
            </div>

            {/* Downvote Button */}
            <div
              onClick={() => handleDownvote(post.id)}
              className="flex items-center border rounded-full rounded-l-none pr-1 py-1 ml-0 hover:bg-gray-100 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-1 ${post.dvoted ? "text-red-500" : "text-gray-500"}`}
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1z"
                  transform="rotate(180 8 8)"
                />
              </svg>
              <span className={`ml-1 font-semibold ${post.dvoted ? "text-red-500" : "text-gray-500"}`}>
                ·{post.downvotes.toLocaleString()}
              </span>
            </div>

            {/* Comment Button */}
            <div className="flex items-center space-x-1 hover:bg-gray-100 rounded-full px-3 py-1 cursor-pointer">
              <img src={comment} className="h-5 w-5 ml-1 text-gray-600" />
              <span className="font-semibold">{post.comments}</span>
            </div>

            {/* Share Button */}
            <div className="flex items-center space-x-1 hover:bg-gray-100 rounded-full px-3 py-1 cursor-pointer">
              <img src={share} className="h-5 w-7 text-lg" />
              <span className="font-semibold">{post.shares}</span>
            </div>

            {/* More Options */}
            <div className="flex absolute right-0 items-center hover:bg-gray-100 rounded-full px-3 py-1 cursor-pointer">
              <span className="text-2xl text-gray-600">⋯</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostSection;
