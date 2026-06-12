import { useCallback, useEffect, useState } from "react";
import { getAllPosts, getSeedPosts } from "@/lib/blog/store";
import type { BlogPost } from "@/lib/blog/types";

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>(() =>
    typeof window !== "undefined" ? getAllPosts() : getSeedPosts(),
  );

  const refresh = useCallback(() => {
    setPosts(getAllPosts());
  }, []);

  useEffect(() => {
    refresh();
    const onStorage = (e: StorageEvent) => {
      if (e.key === "aquapure-blog-custom") refresh();
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [refresh]);

  return { posts, refresh };
}
