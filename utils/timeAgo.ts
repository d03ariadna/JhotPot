export default function timeAgo(creationDate: string): string {
  const now: Date = new Date(); // Explicitly typed as Date
  const created: Date = new Date(creationDate); // Ensure input string is converted to Date
  const differenceInMs: number = now.getTime() - created.getTime(); // Use getTime() to get timestamps

  // Calculate different units of time
  const seconds = Math.floor(differenceInMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30); // Approximate
  const years = Math.floor(days / 365); // Approximate

  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  }
}

// Example usage
// const creationDate = "2024-11-18T05:36:22.109Z";
// console.log(timeAgo(creationDate)); // Output: "hace X horas"
