## Todos
1. Make the dashboard nav bar fixed and not scroll with the rest of the page. DONE
1. Order the birthday dates in ascending order DONE
1. Find a tool that can send emails for you based on data in database. It would be called everyday. DONE
1. Settings page
1. Cloud function for sending mails daily DONE
1. Create a page loader component
1. Create a button loader component
1. Create a serverless function for updating the year of birthdays that have passed in the database to the next year.


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