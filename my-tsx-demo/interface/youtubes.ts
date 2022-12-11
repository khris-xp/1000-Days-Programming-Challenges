export interface Youtube {
    id: String;
    title: String;
    subtitle: String;
    avatar_image: String;
    youtube_image: String;
}

export interface Data {
    youtubes: Youtube[]
    error: boolean;
    error_msg: string;
}