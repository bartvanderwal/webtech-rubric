import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'dha-rubric',
  templateUrl: './rubric.component.html',
  styleUrls: ['./rubric.component.scss']
})
export class RubricComponent implements OnInit {
  voornaam: string
  beoordelaar: string
  scores: Score[]
  bestandScore: Score;

  constructor() { }

  ngOnInit() {
    this.beoordelaar = 'Bart van der Wal'
    this.scores = [
      new Score('bestanden'),
      new Score('opleverdocument')
    ]

    this.bestandScore = new Score('bestanden', 8)
    this.bestandScore.toelichting = 'Bestandsnamen zijn in Pascalcase in plaats van kebab case'
  }

  /**
   * Omrekenen van getal tussen 1 en 10 naar draaiing van duim van -180 naar 0.
   * vanaf 4 duim naar beneden,
   * tussen 4 en 8 duim draaien van -180 naar 0
   * vanaf 8 duim omhoog -->
   */

}

class Score {
  toelichting?: string
  animationInstance?: Animation

  constructor(public itemNaam: string, public beoordeling?: number) {
    this.animationInstance = { color: 'green', transition: '1s', transform: 'rotate(45deg) translateY(10px)' }
  }

  private thumbRotationDegrees() {
    return (Math.max(Math.min(this.beoordeling, 8), 4)-4)*45
  }
  private thumbExtraUpPixels() {
    return Math.max(this.beoordeling-8, 0)*10
  }
  private thumbExtraDownPixels() {
    -Math.min(2-this.beoordeling, 0)*10
  }
  private thumbTranslateY() {
    this.beoordeling>8 ? this.thumbExtraUpPixels : this.thumbExtraDownPixels
  }  
  thumbAnimationStyle(bestandScore: Score) {
    return { 'transition': `1s`, 'transform': 'rotate(' + bestandScore.thumbRotationDegrees() + 'deg' + ' translateY(' + bestandScore.thumbTranslateY() + 'px)' }
  }
}

class Animation {
  transition: string
  transform: string
  color?: string
}