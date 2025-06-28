import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'books' })
export class Book {
  @PrimaryGeneratedColumn()
  id: number; // 문자열 ID가 필요하다면 varchar로 변경

  @Column({ length: 150 })
  title: string;

  @Column({ length: 100 })
  author: string;

  @Column({ length: 50 })
  genre: string;

  @Column({ type: 'date' })
  publishedDate: string; // ISO‑8601

  @Column({ type: 'tinyint', unsigned: true })
  rating: number; // 1‑5

  @Column({ default: true })
  available: boolean;
}
