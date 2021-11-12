/**
 * 記事を表すクラスです
 */
import { Comment } from "./comment";
export class Article {
  constructor(
    private _id: number, //Id
    private _name: string, //名前
    private _content: string, //内容
    private _commentList: Array<Comment> //コメント一覧
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get content(): string {
    return this._content;
  }

  public set content(content: string) {
    this._content = content;
  }

  public get commentList(): Array<Comment> {
    return this._commentList;
  }

  public set commentList(commentList: Array<Comment>) {
    this._commentList = commentList;
  }
}
