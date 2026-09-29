"use client";

import { useState } from "react";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <button
      type="button"
      onClick={() => setLikes(likes + 1)}
      className="rounded-md border px-3 py-1 hover:bg-slate-100"
    >
      ❤ {likes}
    </button>
  );
}
