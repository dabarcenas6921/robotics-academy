import { CategoryType } from "@prisma/client";

interface User {
  name: string;
}

interface SpamPost {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  category: CategoryType;
  user: User;
}

export interface AdminTableProps {
  spamPosts: SpamPost[];
}

export interface TableRowsProps {
  post: SpamPost;
}
