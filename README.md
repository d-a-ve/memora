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
- [x] send a welcome email when signing up for the first time
- [x] fix the search birthday function returning peoples' birthday not belonging to the specific user
- [x] fix clearing the search input showing stale data before working. It can show a loading spinner
- [x] fix user image on dashboard header being disproportional and distorted (not too sure)
- [x] use optimistic updates for adding and removing birthdays
- [x] add error component for data fetching
- [x] fix color on the inline calender showing blue. the select options shouldn't be blue. Make black. Remove the underline showing in the months part.
- [x] remove the hover effect from the inline calender
- [x] do home page
- [x] add padding block to the inputs 
- [x] make the search input fill the container for upcoming birthday section for mobile
- [x] make dashboard header bg blue and use mono logo
- [x] make nav bar bg a saturated color of white
- [x] change primary button to right side in modals for desktop
- [x] make the button at the corner more obvious with maybe a text
- [x] increase the spacing between the image and text for upcoming birthday card
- [x] use a lighter color for the border for the card on dashboard, say grey-200
- [x] change top section of calender to something. Samuel suggested a pastel purple color
- [x] increase the text for the month select in the inline calender
- [x] on mobile, make the add birthday button more prominent in the empty state for the dashboard. Figure something out for the desktop
- [x] remove settings and logout from navbar and take them to user image at the top right. Let them be a dropdown/popup
- [] Create a serverless function for updating the year of birthdays that have passed in the database to the next year.
- [] change the loading state for protecting routes from authenticated user to use a popup at the right corner like linkedIn and popular apps do it
- [] add meta tags
- [] work on a brithday template for mailing and add to courier dashboard
- [] feedback page with 3 options (request feat, report bug, holla the dev)
- [] show all birthdays received from backend on the calender (seems not possible yet)

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