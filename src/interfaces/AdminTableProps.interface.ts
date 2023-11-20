import { CategoryType } from "@prisma/client";

interface User {
  name: string;
}

interface SpamPost {
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
