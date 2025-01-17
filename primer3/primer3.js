// TODO: Implement the createLinkedList function
  // TODO: Check if the input 'posts' is valid (an array with at least one element) - Y
  // TODO: Iterate through each post in the 'posts' array - Y
  // TODO: Validate the structure of each post (ensure it has 'text', 'timestamp', and 'author' properties with correct types and values) - Y
  // TODO: If any post has an invalid structure, throw an error - Y
  // TODO: Create the linked list with the validated posts - Y 
  // TODO: Return the head of the linked list 
let head;
function createLinkedList(posts) {
  
  class validObjects{
    constructor(text, timestamp, author){
      this.text = text;
      this.timestamp = timestamp;
      this.author = author;
    }
    static checkValidObjects(posts){
      return posts.text && !isNaN(new Date (posts.timestamp)) && posts.author;
    }
  }

  if (posts.length === 0){
    return null;
  }

  if (posts.length < 0 && !Array.isArray(posts)){
    throw new Error("Invalid Post.");
 } 

  for (let i = 0; i < posts.length; i++ ){
    if(!validObjects.checkValidObjects(posts[i])){
      throw new Error("Invalid structure of post.");
    }

  }

  head = { data: posts[0], next: null };
  let current = head;
  for (let i = 1; i < posts.length; i++) {
    current.next = { data: posts[i], next: null };
    current = current.next;
  }
  return head;
}

// TODO: Implement the searchSocialMediaFeed function
function searchSocialMediaFeed(feed, keyword) {
  // TODO: Handle the case where the feed is empty
  // TODO: Initialise an empty array to store the search results - Y
  // TODO: Normalise the keyword for case-insensitive search
  // TODO: Split the keyword into individual words
  // TODO: Traverse the linked list
  // TODO: Normalise the text of the current post for case-insensitive search
  // TODO: Split the text of the current post into individual words
  // TODO: Check if any keyword word is partially present in any text word
  // TODO: If there's a partial match, add the current post to the results
  // TODO: Return the array of search results
  let searchResults = [];

  if (feed.length == 0){
    return [];
  }
  let current = head;
  while (current != null){
    if(feed.includes(keyword)){
      searchResults.push(current)
    }
  }





}

// ADDITIONAL TODO - The suggested functions above can be refactored into multiple functions if you think appropriate.

// console.log(createLinkedList([   { text: 'Hello world!', timestamp: '2024-03-11 10:00:00', author: 'Alice' },
//   { text: 'Having a great day!', timestamp: '2024-03-11 11:30:00', author: 'Bob' },
//   { text: 'Just finished a fantastic game.', timestamp: '2024-03-11 12:15:00', author: 'Aqil' },
//   { text: 'Another great post!', timestamp: '2024-03-11 13:00:00', author: 'Diana' }]))

// createLinkedList([{
//   text: 'Hello world!',
//   timestamp: '2024-03-11 10:00:00',
// }])
export {createLinkedList, searchSocialMediaFeed};
