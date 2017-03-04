import { Injectable }               from "@angular/core";

import { ChannelWebsocketService }  from "./channel.websocket.service";
import { WebSocketService }         from "./websocket.service";

@Injectable()
export class TrendsChannelService extends ChannelWebsocketService {

    constructor( websocketService: WebSocketService ){

        super( websocketService );

        this.identifier = {
            channel: 'TrendsChannel',
            token: window.localStorage.getItem( 'auth_token' )
        };

        this.start();

    }

}