const whosOnline = (friends) => {
  // Initialize empty objects to store online, offline, and away friends
  const result = {};

  // Check if the friends array is not empty
  if (friends.length > 0) {
    // Iterate through each friend in the array
    friends.forEach((friend) => {
      // Determine the status based on last activity
      if (friend.status === "online" && friend.lastActivity <= 10) {
        result.online = result.online || [];
        result.online.push(friend.username);
      } else if (friend.status === "online" && friend.lastActivity > 10) {
        result.away = result.away || [];
        result.away.push(friend.username);
      } else if (friend.status === "offline") {
        result.offline = result.offline || [];
        result.offline.push(friend.username);
      }
    });
  }

  // Return the result object or an empty object if no friends are online
  return Object.keys(result).length > 0 ? result : {};
};

// Example usage:
const friendsData = [
  { username: "David", status: "online", lastActivity: 10 },
  { username: "Lucy", status: "offline", lastActivity: 22 },
  { username: "Bob", status: "online", lastActivity: 104 },
];

const onlineStatus = whosOnline(friendsData);

// Print the result to the console
console.log(onlineStatus);
