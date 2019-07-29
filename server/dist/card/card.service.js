"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const card_activity_source_1 = require("./card-activity-source");
const LENGTH = 10;
let CardActivityService = class CardActivityService {
    constructor(src) {
        this.src = src;
        this.latestActivity = [];
        this.lastId = '';
        this.currentId = '';
        this.src.activity$.pipe(operators_1.filter(act => act.type === 'touch'), operators_1.debounce((act) => {
            let obs;
            this.lastId = this.currentId;
            this.currentId = act.id;
            if (this.lastId == this.currentId) {
                console.log('same');
                obs = rxjs_1.timer(5000);
            }
            else {
                console.log('different');
                obs = rxjs_1.timer(0);
            }
            return obs;
        }), operators_1.tap(act => console.log(act.id))).subscribe(act => this.onActivity(act));
    }
    updateLatestActivity(act) {
        let tmp = [...this.latestActivity, act];
        let start = Math.max(tmp.length - LENGTH, 0);
        let end = start + Math.min(tmp.length, LENGTH);
        this.latestActivity = tmp.slice(start, end);
    }
    onActivity(act) {
        this.updateLatestActivity(act);
        console.log('------------------');
        console.log(this.latestActivity);
    }
    getLatestActivity() {
        return this.latestActivity;
    }
};
CardActivityService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [card_activity_source_1.CardActivitySource])
], CardActivityService);
exports.CardActivityService = CardActivityService;
//# sourceMappingURL=card.service.js.map