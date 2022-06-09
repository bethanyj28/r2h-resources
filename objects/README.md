# Objects

## Resources

[Codecademy - Key Concepts](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-objects)
[Codecademy - Cheat Sheet](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-objects/cheatsheet)
[Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

## Practice problems

1. Write an object for a dog. _Bonus: write 2 methods that a dog might have._
2. Find the bug in the following code. How can you fix it?
   ```javascript
   const plant = {
    type: "succulent",
    needsWater: true,
    needsSunlight: false,
   }
   
   console.log(plant.name)
   ```
3. Is this valid code? Why or why not? What will the `console.log()`s print?
   ```javascript
   const plant = {
    type: succulent,
    needsWater: true,
    needsSunlight: false,
   }
   
   console.log(plant)
   
   plant.type = "pothos"
   delete plant.needsSunlight
   
   console.log(plant)
   ```
4. How are methods different from functions? How are they similar?
5. What will the following `console.log()`s print?
   ```javascript
   const playlist = {
    songList = ["Bohemian Rhapsody", "Despacito", "Never Gonna Give You Up", "Friday"],
    currentSong = "Despacito",
    nextSong() {
      const index = this.songList.indexOf(this.currentSong)
      this.currentSong = this.songList[index % this.songList.length]
    }
   }
   
   console.log(playlist)
   playlist.nextSong()
   console.log(playlist)
   ```
