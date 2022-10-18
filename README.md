# ReactJs Task

## Part 1

I used Google's API to render Google Maps on the screen. I also created an input field where\ the user can type and search for a city which will then show the user the weather temperature\ and other data for the corresponding city.

## Part 2

I created 2 components which display 2 versions of a PDF, English and Arabic versions.\ The PDFs content are sample data. The PDFs are hidden from the user, but the user can see a "Generate PDF" button which will allow him to generate 2 different PDFs and download them.
The PDFs will also include the weather temperature, and other information, the user looked up.

## How did I generate PDFs?

I used 2 different libraries that helped me generate a PDF version of my component,
`html2canvas` & `jsPDF`.\
`html2canvas` allows us to capture a dom element by its ID and convert it to an image, then we use `jsPDF` to write the image inside a PDF file and set its width and height.\ `jsPDF` also allows us to compress the PDF file.

My first attempt to generate the PDF without compressing it, outputted 70MB for a single PDF file. After the compress, it was 500KB.

## What APIs did I use?

I used Google's API for the Maps. I tried using other Google's APIs to get a Forward geocode, but I had a `REQUEST_DENIED` response, since I need to add my billing address to the Google project.

I used `openweathermap` weather API to get the weather data along with the geocode. The geocode from `openweathermap` was used in the Maps in order to dynamically change the location for the user.

## Libraries used:

`@reduxjs/toolkit`
`react-redux`
`redux`: Redux was used to manage the states and city information.\
`@react-google-maps/api`: This lib was used to connect to Google's API & render the Maps.\
`dotenv`: Dotenv was used to create a local .env and hide secret APIs.\
`html2canvas`: This lib was used to convert a DOM element to an Image.\
`jspdf`: This lib was used to write an Image inside a PDF file and generate it.\

## What did I learn?

I learned about google' APIs and how we can render the maps on our web application.\

Also, it was my first time converting a React page to a PDF. Now I kinda understand how can we generate receipts for our users.

## Application preview

![alt text](https://github.com/turjumann/react-task/blob/main/src/Assets/Before.png?raw=true)
