# ReactJs Task

In this task, I created a new react application that has 2 main parts. I used some external libraries to achieve some certain tasks.

## Part 1

## Part 2

I created 2 components which displays 2 versions of a PDF, English and Arabic versions. The PDFs content are sample data. The PDFs are hidden from the user, but the user can see a "Generate PDF" button which will allow him to generate 2 different PDFs and download them.
The PDFs will also include the weather temperature the user looked up using maps on the site.

## What did I use to generate PDFs?

I used 2 different libraries that helped me generate a PDF version of my component,
`html2canvas` & `jsPDF`.
`html2canvas` allows us to capture a dom element by its ID and convert it to an image, then we use `jsPDF` to write the image inside a PDF file and set its width and height. `jsPDF` also allows us to compress the PDF file.

My first attempt to generate the PDF without compressing it, outputted 70MB for a single PDF file. After the compress, it was 500KB.

## What did I learn?

Also, it was my first time converting a React page to a PDF. Now I kinda understand how can we generate receipts for our users.
