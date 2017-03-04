import { Injectable }               from "@angular/core";

import { ChannelWebsocketService }  from "./channel.websocket.service";
import { WebSocketService }         from "./websocket.service";

@Injectable()
export class MeChannelService extends ChannelWebsocketService {

    constructor( websocketService: WebSocketService ){

        super( websocketService );

        this.identifier = {
            channel: 'MeChannel',
            token: window.localStorage.getItem( 'auth_token' )
        };

        this.start();

    }

}