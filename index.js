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
  constructor( name, startDate ) {
    this.name = name;
    this.startDate = new Date( startDate );
  }
  yearsExperienceFromBeginningOf( year ) {
    let endDate = new Date( year, 1, 1 );
    let totalYears = ( endDate - this.startDate ) / ( 365 * 24 * 60 * 60 * 1000 );
    return parseInt( totalYears );
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












