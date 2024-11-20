import { Book } from "@/data";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

const BookCard = ({ author, id, imgUrl, title }: Book) => {
  return (
    <Card className="h-full w-full max-w-sm bg-slate-200">
      <CardHeader className="p-0">
        <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
          <Image src={imgUrl} alt={title} className="object-cover" fill />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="line-clamp-1 text-blue-800">{title}</CardTitle>
        <CardDescription>{author}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 flex justify-between gap-2">
        <Button className="w-full bg-blue-700 text-white" variant={"outline"}>
          Update
        </Button>
        <Button className="w-full" variant={"destructive"}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;