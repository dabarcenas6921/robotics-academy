// Update this interface to include all the necessary fields from the schema in schema.prisma
export default interface ForumPostCardProps {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  category: string;
  user: {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  };
  commentsCount: number;
}
