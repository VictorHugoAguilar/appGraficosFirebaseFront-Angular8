export interface Game {
    id: string;
    name: string;
    url: string;
    votos: number;
}

export interface RespuestaVoto {
    ok: boolean;
    mensaje: string;
}
