// FETCHING DATA
const url = 'https://www.course-api.com/react-tours-project';
import { z } from 'zod';

// Define a type for the data you're fetching.
const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
  //somethign: z.number(), ---error occurs
})

/* type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string; // Add more fields as necessary.
}; */

type Tour = z.infer<typeof tourSchema>;

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);

    // Check if the request was successful.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const rawData: Tour[] = await response.json();

    const result = tourSchema.array().safeParse(rawData);
    console.log(result);

    if (!result.success) {
      throw new Error(`Invalid data format: ${result.error}`);
    }
    return result.data;

  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : 'there was an error...';
    console.error(errMsg);
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour) => {
  console.log(tour.name);
  console.log(tour.image);
});


// TS Declaration File -----------------------------------------------------------
//In TypeScript, .d.ts files, also known as declaration files,consist of type definitions, and are used to provide types for JavaScript code. They allow TypeScript to understand the shape and types of objects, functions, classes, etc., in JavaScript libraries, enabling type checking and autocompletion in TypeScript code that uses these libraries.

import { Random } from './types';
document.DOCUMENT_TYPE_NODE