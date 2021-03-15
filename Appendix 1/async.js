/**
 * This nested structure is hard to follow the flow and find bugs
 */

// getUser('facebook/yiwuazhang', (user, error) => {
//   if (error) {
//     throw(error)
//   }

//   const userId = user.id;

//   getFriends(userId, (friends, error) => {
//     if(error) {
//       throw(error)
//     }

//     const john = friends.find(//...)

//     getPosts(john, (posts, error) => {
//       if(error) {
//         throw(error)
//       }
//     })
//   })
// })

const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve('I have succeeded');
    }, 1000);
  } else {
    reject('I have failed');
  }
});

myPromise
  .then((value) => value + '!!!!!')
  .then((newValue) => console.log(newValue))
  .catch((rejectValue) => console.log(rejectValue));
