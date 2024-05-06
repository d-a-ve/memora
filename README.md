## Project
This project makes use of pnpm as the package manager.

## Todos 
- [x] Make the dashboard nav bar fixed and not scroll with the rest of the page.
- [x] Order the birthday dates in ascending order
- [x] Find a tool that can send emails for you based on data in database. It would be called everyday.
- [x] Settings page
- [x] Cloud function for sending mails daily
- [x] Create a page loader component
- [x] Create a button loader component
- [x] Create a serverless function for updating the year of birthdays that have passed in the database to the next year.
- [x] focus on password input on eye icon click
- [x] clicking outside navbar closes the navbar
- [x] make the opaque bg cover everything when the sidebar is open
- [x] main content cannot move when navbar is open
- [x] remove body overflow when modal is clicked
- [x] find new colors and use the 60/30/10 rule
- [x] find logo for app
- [x] merge all variants of button to one file using cva
- [x] put the logo everywhere needed
- [x] add an underline to the normal line and on hover remove it
- [x] add image/content beside form on auth pages
- [x] use the new color palette and fix app
- [x] add 404 error page
- [x] move continue with google for auth up
- [x] change name to be able to use only a single name e.g Dave and nore Dave aronmwan
- [x] add error handling on form submission
- [x] add a loading spinner when searching, toegther with the debounce
- [x] fix dashboard header showing up when add birthday modal is open
- [x] edit and delete birthdays
- [] send a welcome email when signing up for the first time
- [] do home page
- [] add meta tags
- [] add error component for data fetching
- [] work on a brithday template for mailing and add to courier dashboard
- [] feedback page with 3 options (request feat, report bug, holla the dev)

## Cloud Function Pseudo code
1. Get today's date
1. Create an array called todayBirthdays having a schema of:
  {
    userId: "I 67yugc6c7ecgbc",
    birthdays: ["John", "Doe", "testing"],
  }[]
1. Run through the birthday database and find birthdays that match today's date
1. Check if the userId exists in todayBirthdays.
  1. True: update the birthdays array for that userId by adding the person's name to the array. 
  1. False: Create a new object in the todayBirthdays array and update the userId and birthdays array
1. Loop through the todayBirthdays
  1. Get the email address from appwrite based on the userId
  1. Check that the length for birthdays array is more than 1
    1. True: Use email template that is for multiple people
    1. False: User email template for a single person 
  1. Send mail to the email address and log the status of this line