import { HttpService } from './../../service/http.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interface';
import { Subscription } from 'rxjs';
import { Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  gameRating: number = 0;
  animatedStatus: boolean = true;
  gameId: string = '';
  game!: Game;
  routeSub: Subscription = new Subscription();
  gameSub: Subscription = new Subscription();

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      this.gameId = params['id'];
      this.getGameDetails(this.gameId);
    });
  }

  getGameDetails(id: string): void {
    this.gameSub = this.httpService
      .getGameDetails(id)
      .subscribe((gameResp: Game) => {
        this.game = gameResp;

        setTimeout(() => {
          this.gameRating = this.game.metacritic;
        });
      });
  }

  getColor(value: number): string {
    if (value > 75) {
      return '#5ee432';
    } else if (value > 50) {
      return '#fffa50';
    } else if (value > 30) {
      return '#f7aa38';
    } else {
      return '#ef4655';
    }
  }
}
