let today = new Date();
let date1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];
    let northSouth = [
      '1st Street',
      '2nd Street',
      '3rd Street',
      '4th Street',
      '5th Street',
      '6th Street',
      '7th Street'
    ];
class Driver {
  constructor(name,date) {
    this.name = name 
    this.date = date
  }
  startDate() {
    return `${this.date}`
  }
  yearsExperienceFromBeginingOf(){
    return `${date1-this.date}`
  }
}

class Route {
  constructor(beginingLocationH,endingLocationH,beginingLocationV,endingLocationV) {
    this.beginH = beginingLocationH
    this.beginV = beginingLocationV
    this.endV = endingLocationV
    this.endH = endingLocationH
  }
  blocksTravelled() {
    return `You should go ${eastWest[endH]-eastWest[beginH]} block Horizontal, You should go ${northSouth[endH]-northSouth[beginH]} block Vertical`
  }
}












