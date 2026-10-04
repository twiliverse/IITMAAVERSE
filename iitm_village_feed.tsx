import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, BadgeCheck, Send, Image as ImageIcon } from 'lucide-react';

const INITIAL_SPOTLIGHT_POSTS = [
  {
    id: 's1',
    author: {
      name: "Prof. Ramamurthy",
      role: "Dean of Academic Courses",
      initials: "PR",
      color: "bg-indigo-600",
      isVerified: true
    },
    timestamp: "2 hours ago",
    content: "We are thrilled to announce the new interdisciplinary AI and Data Science electives starting next semester. Registration opens on Monday. I encourage all engineering branches to explore these courses.",
    likes: 342,
    comments: 45
  },
  {
    id: 's2',
    author: {
      name: "Aditya Sharma",
      role: "Alumni '18 | VP at Google",
      initials: "AS",
      color: "bg-rose-800",
      isVerified: true
    },
    timestamp: "5 hours ago",
    content: "Hello IITM Family! I'll be hosting a 1-hour AMA and mentorship session this Friday for anyone interested in scaling distributed systems. Drop your questions below or join the live lounge at 6 PM IST.",
    likes: 890,
    comments: 112
  }
];

const INITIAL_QUAD_POSTS = [
  {
    id: 'q1',
    author: {
      name: "Nimish Kumar",
      role: "BS Data Science '26",
      initials: "NK",
      color: "bg-emerald-600",
      isVerified: false
    },
    timestamp: "15 mins ago",
    content: "Is anyone heading to the library tonight? Need a study buddy for the upcoming Linear Algebra quiz. I have snacks! 🍩📚",
    likes: 12,
    comments: 3
  },
  {
    id: 'q2',
    author: {
      name: "Aanya Iyer",
      role: "B.Tech Aerospace '25",
      initials: "AI",
      color: "bg-blue-600",
      isVerified: false
    },
    timestamp: "1 hour ago",
    content: "Just submitted our final prototype for the CFI hackathon! I'm completely exhausted but so proud of the team. Weverse architecture really inspired our real-time sync module.",
    likes: 89,
    comments: 14
  }
];

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
      setLiked(false);
    } else {
      setLikeCount(prev => prev + 1);
      setLiked(true);
    }
  };

  return (
    <div className="bg-white p-4 mb-3 border-b border-gray-100 shadow-sm transition-all hover:bg-gray-50/50">
      {/* Header: Avatar, Name, Role */}
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm ${post.author.color}`}>
          {post.author.initials}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-gray-900">{post.author.name}</span>
            {post.author.isVerified && (
              <BadgeCheck className="w-4 h-4 text-rose-800" />
            )}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">
              {post.author.role}
            </span>
            <span>•</span>
            <span>{post.timestamp}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="text-gray-800 text-sm leading-relaxed mb-4 whitespace-pre-wrap">
        {post.content}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-6 text-gray-500 pt-2 border-t border-gray-50">
        <button 
          onClick={handleLike}
          className={`flex items-center gap-1.5 transition-colors ${liked ? 'text-rose-600' : 'hover:text-rose-600'}`}
        >
          <Heart className={`w-5 h-5 ${liked ? 'fill-rose-600' : ''}`} />
          <span className="text-xs font-medium">{likeCount}</span>
        </button>
        <button className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs font-medium">{post.comments}</span>
        </button>
        <button className="flex items-center gap-1.5 hover:text-gray-900 transition-colors ml-auto">
          <Share2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default function IITMVillageApp() {
  const [activeTab, setActiveTab] = useState('quad'); // 'spotlight' or 'quad'
  const [quadPosts, setQuadPosts] = useState(INITIAL_QUAD_POSTS);
  const [newPostText, setNewPostText] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    const newPost = {
      id: `q${Date.now()}`,
      author: {
        name: "You (Student)",
        role: "B.Tech Computer Science '27",
        initials: "ME",
        color: "bg-gray-800",
        isVerified: false
      },
      timestamp: "Just now",
      content: newPostText,
      likes: 0,
      comments: 0
    };

    setQuadPosts([newPost, ...quadPosts]);
    setNewPostText('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center font-sans">
      {/* Mobile Simulator Container */}
      <div className="w-full max-w-md bg-gray-50 min-h-screen shadow-2xl relative flex flex-col">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="px-5 py-4 flex items-center justify-center relative">
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              IITM <span className="text-rose-800">Village</span>
            </h1>
          </div>

          {/* Tab Navigation */}
          <div className="flex w-full">
            <button 
              onClick={() => setActiveTab('spotlight')}
              className={`flex-1 py-3 text-sm font-semibold transition-all relative ${
                activeTab === 'spotlight' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Spotlight
              {activeTab === 'spotlight' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 rounded-t-full mx-4" />
              )}
            </button>
            <button 
              onClick={() => setActiveTab('quad')}
              className={`flex-1 py-3 text-sm font-semibold transition-all relative ${
                activeTab === 'quad' ? 'text-rose-800' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              The Quad
              {activeTab === 'quad' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-800 rounded-t-full mx-4" />
              )}
            </button>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto pb-20">
          
          {/* Compose Box (Only visible in The Quad) */}
          {activeTab === 'quad' && (
            <div className="bg-white p-4 mb-2 shadow-sm">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                  ME
                </div>
                <form onSubmit={handlePostSubmit} className="flex-1">
                  <textarea
                    value={newPostText}
                    onChange={(e) => setNewPostText(e.target.value)}
                    placeholder="Share something with the village..."
                    className="w-full bg-transparent resize-none text-sm outline-none placeholder:text-gray-400 text-gray-900 min-h-[40px] pt-2"
                    rows="2"
                  />
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                    <button type="button" className="text-gray-400 hover:text-rose-800 transition-colors p-1">
                      <ImageIcon className="w-5 h-5" />
                    </button>
                    <button 
                      type="submit"
                      disabled={!newPostText.trim()}
                      className="bg-rose-800 hover:bg-rose-900 disabled:bg-rose-800/50 disabled:cursor-not-allowed text-white px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      Post <Send className="w-3 h-3" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Feed List */}
          <div className="flex flex-col">
            {activeTab === 'spotlight' ? (
              INITIAL_SPOTLIGHT_POSTS.map(post => (
                <PostCard key={post.id} post={post} />
              ))
            ) : (
              quadPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))
            )}
            
            {/* End of Feed state */}
            <div className="py-8 text-center text-gray-400 text-sm flex flex-col items-center gap-2">
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
              <p className="mt-2">You've caught up with the village.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}