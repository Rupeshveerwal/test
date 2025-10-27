// 🗓️ Date: 2025-10-24
// 📘 Topic: Promises & Async/Await
// 🎯 Goal: Understand and practice asynchronous programming in JavaScript.

// ------------------------------
// 🔹 Plan:
// ------------------------------
// - Promises help handle asynchronous code without callback hell.
// - async/await makes code cleaner and easier to read.
// - Promise.all() runs multiple async tasks in parallel efficiently.


// ------------------------------
// 🔹 PART 1: Basic Promise
// ------------------------------

const fetchUserData = (userId) => {
  return new Promise((resolve, reject) => {
    console.log("Fetching user data...");

    setTimeout(() => {
      if (userId) {
        resolve({ id: userId, name: "Rupesh", role: "Developer" });
      } else {
        reject("User ID not provided!");
      }
    }, 1500);
  });
};

// Using the Promise
fetchUserData(101)
  .then((data) => console.log("✅ User Data:", data))
  .catch((error) => console.error("❌ Error:", error))
  .finally(() => console.log("Request completed.\n"));


// ------------------------------
// 🔹 PART 2: Async / Await Example
// ------------------------------

const getWeather = async () => {
  try {
    console.log("Fetching weather data...");

    const weatherPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ city: "Udaipur", temperature: 29, condition: "Sunny ☀️" });
      }, 1200);
    });

    const data = await weatherPromise;
    console.log("🌦️ Weather Info:", data);
  } catch (error) {
    console.error("⚠️ Error fetching weather:", error);
  } finally {
    console.log("Weather fetch done.\n");
  }
};

getWeather();


// ------------------------------
// 🔹 PART 3: Combining Promises with Async/Await
// ------------------------------

const simulateAPICalls = async () => {
  const fetchPosts = new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1000);
  });

  const fetchComments = new Promise((resolve) => {
    setTimeout(() => resolve(["Comment A", "Comment B"]), 1500);
  });

  console.log("Fetching posts and comments...");
  
  const [posts, comments] = await Promise.all([fetchPosts, fetchComments]);
  console.log("📝 Posts:", posts);
  console.log("💬 Comments:", comments);
  console.log("✅ All data fetched successfully!");
};

simulateAPICalls();

