const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get courses () {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        dessers: this.desserts
      }
    },
    get appetizers () {
      
    },
    set appetizers (appetizerIn) {
      
    },
    get mains () {
      
    },
    set mains (mainsIn) {
      
    },
    get desserts () {
      
    },
    set desserts (dessertsIn) {
      
    },
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      }
      this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse (courseName) {
      const dishes = this._courses[courseName]
      const randomIndex = Math.floor(Math.random()*dishes.length)
      return dishes[randomIndex]
    },
    generateRandomMeal () {
      const appetizer = this.getRandomDishFromCourse('appetizers')
      const main = this.getRandomDishFromCourse('mains')
      const dessert = this.getRandomDishFromCourse('desserts')
      const price = appetizer.price + main.price + dessert.price
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, The price is $${price}.`
    }
  }
  menu.addDishToCourse('appetizers','Caesar Salad', 4.25)
  menu.addDishToCourse('appetizers','Tomato Basil Soup', 5.50)
  menu.addDishToCourse('appetizers','Bread', 3.75)
  menu.addDishToCourse('mains','Steak',25.75)
  menu.addDishToCourse('mains','Spaghetti',15.25)
  menu.addDishToCourse('mains','Caviar',50.50)
  menu.addDishToCourse('desserts','Ice Cream',7.50)
  menu.addDishToCourse('desserts','Brownie',5.30)
  menu.addDishToCourse('desserts','Cookie',4.50)
  const meal = menu.generateRandomMeal()
  console.log(meal)