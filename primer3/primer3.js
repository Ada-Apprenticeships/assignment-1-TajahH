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

  let searchResults = [];

  let currentNode = feed;
  let normalisedKeyword = keyword.toLowerCase()
 
  while (currentNode != null){
    if ( currentNode.data.text.includes(normalisedKeyword)) {
      searchResults.push(currentNode.data);
  }
  currentNode = currentNode.next;
}

return searchResults.length > 0 ? searchResults : [];
}



// ADDITIONAL TODO - The suggested functions above can be refactored into multiple functions if you think appropriate.

export {createLinkedList, searchSocialMediaFeed};
