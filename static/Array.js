let arr = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < arr.length; i++) {
  console.log(i)
}

/**
 * @description 在forEach循环中，不能使用 break continue 跳出循环
 */
arr.forEach(item => console.log(item))
