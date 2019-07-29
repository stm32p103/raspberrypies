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
const NfcpyId = require('node-nfcpy-id').default;
let CardActivitySource = class CardActivitySource {
    constructor() {
        this.activitySubject = new rxjs_1.Subject();
        const nfc = new NfcpyId();
        nfc.on('touchstart', (card) => this.onTouch(card));
        nfc.on('touchend', (card) => this.onLeave(card));
        nfc.on('error', (err) => this.onError(err));
        nfc.start();
        this.activityObservable = this.activitySubject.pipe(operators_1.share());
    }
    onTouch(card) {
        this.activitySubject.next({ type: 'touch', timestamp: Date.now(), id: card.id });
    }
    onLeave(card) {
        this.activitySubject.next({ type: 'leave', timestamp: Date.now() });
    }
    onError(err) {
        this.activitySubject.next({ type: 'error', timestamp: Date.now(), message: err });
    }
    get activity$() { return this.activityObservable; }
    ;
};
CardActivitySource = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], CardActivitySource);
exports.CardActivitySource = CardActivitySource;
//# sourceMappingURL=card-activity-source.js.map